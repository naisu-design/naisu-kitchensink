import { createTemplate } from "@reizu/glue/dom.js";

const template = createTemplate(`<x-switch />`);

/** Switch the theme between dark and light. */
export class ThemeSwitchElement extends HTMLElement {
    constructor() {
        super();

        this.appendChild(template.content.cloneNode(true));

        const switchEl = /** @type { Element } */ (this.querySelector("x-switch"));
        switchEl.addEventListener("change", (e) => {
            const ev = /** @type { CustomEvent } */ (e);
            const bodyEl = document.body;
            if (ev.detail.checked) {
                bodyEl.classList.add("dark");
            } else {
                bodyEl.classList.remove("dark");
                if (!bodyEl.classList.length) {
                    bodyEl.removeAttribute("class");
                }
            }
        });
    }
}
