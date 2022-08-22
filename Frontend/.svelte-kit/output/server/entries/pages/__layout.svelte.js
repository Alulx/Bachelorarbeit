import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-3e01a4ca.js";
const app = "";
const Navigation_bar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"navbar bg-primary w-full"}"><p class="${"btn btn-ghost normal-case text-xl"}">DigitalX Mint Factory</p></div>`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navigation_bar, "NavigationBar").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}`;
});
export {
  _layout as default
};
