import { DisclosureElement } from "@naisu/naisu-web-components/accordion/disclosure.js";
import { ButtonElement } from "@naisu/naisu-web-components/buttons/button.js";
import { DividerElement } from "@naisu/naisu-web-components/divider/divider.js";
import { CircularProgressIndicatorElement } from "@naisu/naisu-web-components/indicators/circular-progress-indicator.js";
import { SwitchElement } from "@naisu/naisu-web-components/switch/switch.js";
import { TabGroupElement } from "@naisu/naisu-web-components/tabs/tab-group.js";
import { TabElement } from "@naisu/naisu-web-components/tabs/tab.js";
import { ThemeSwitchElement } from "./components/theme-switch.js";

customElements.define("x-switch", SwitchElement);
customElements.define("x-button", ButtonElement);
customElements.define("x-progress-circle", CircularProgressIndicatorElement);
customElements.define("x-tab", TabElement);
customElements.define("x-tab-group", TabGroupElement);
customElements.define("x-divider", DividerElement);
customElements.define("x-theme-switch", ThemeSwitchElement);
customElements.define("x-disclosure", DisclosureElement);

const tabs = /** @type { Element } */ (document.querySelector("#tabs"));
tabs.addEventListener("change", (e) => {
    const ev = /** @type { CustomEvent } */ (e);
    console.log("---", ev.detail.active);
});