import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-3e01a4ca.js";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"hero h-full bg-base-200"}"><div class="${"hero-content text-center"}"><div class="${"max-w-md"}">${slots.default ? slots.default({}) : ``}</div></div></div>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"h-96"}">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {
    default: () => {
      return `<h1 class="${"text-5xl font-bold"}">Welcome to the DigitalX Mint Factory</h1>
    <p class="${"py-8"}">Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation
    </p>
    <p>This project uses Tailwind CSS and DaisyUI
    </p>`;
    }
  })}</div>`;
});
export {
  Routes as default
};
