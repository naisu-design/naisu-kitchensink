import { ButtonElement } from "@naisu/naisu-web-components/buttons/button.js";
import { CircularProgressIndicatorElement } from "@naisu/naisu-web-components/indicators/circular-progress-indicator.js";
import { SwitchElement } from "@naisu/naisu-web-components/switch/switch.js";
import { TabGroupElement } from "@naisu/naisu-web-components/tabs/tab-group.js";
import { TabElement } from "@naisu/naisu-web-components/tabs/tab.js";

customElements.define("x-switch", SwitchElement);
customElements.define("x-button", ButtonElement);
customElements.define("x-progress-circle", CircularProgressIndicatorElement);
customElements.define("x-tab", TabElement);
customElements.define("x-tab-group", TabGroupElement);
