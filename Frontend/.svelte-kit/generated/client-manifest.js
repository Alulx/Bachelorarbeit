export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/about/index.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/mint.svelte"),
	() => import("../../src/routes/souls/[address].svelte")
];

export const dictionary = {
	"": [[0, 3], [1]],
	"about": [[0, 2], [1]],
	"mint": [[0, 4], [1]],
	"souls/[address]": [[0, 5], [1]]
};