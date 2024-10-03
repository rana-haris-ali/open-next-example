import { SSTConfig } from "sst";
import { Config, NextjsSite } from "sst/constructs";

export default {
	config(_input) {
		return {
			name: "demo-nextjs-site",
			region: "us-east-1",
		};
	},
	stacks(app) {
		app.setDefaultFunctionProps({
			runtime: "nodejs18.x",
			architecture: "arm_64",
		});

		app.stack(function Site({ stack }) {
			const site = new NextjsSite(stack, "demo-nextjs-site", {});

			stack.addOutputs({
				SiteUrl: site.url,
			});
		});
	},
} satisfies SSTConfig;