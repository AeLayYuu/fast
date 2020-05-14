import { css } from "@microsoft/fast-element";
import { display, neutralForegroundRestBehavior } from "@microsoft/fast-components";

export const NavigationStyles = css`
    ${display("flex")} :host {
        justify-content: space-between;
        font-family: var(--body-font);
        color: var(--neutral-foreground-rest);
        box-sizing: border-box;
        width: 100%;
    }
    .start {
        margin-inline-end: auto;
    }
    .end {
        margin-inline-start: auto;
    }
`.withBehaviors(neutralForegroundRestBehavior);