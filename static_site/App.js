import { createElement as h } from "react";

export default function App() {
    return h(
        "div",
        {},
        h("h1", {}, "In Nomine Patris..."),
        h("h1", {}, "Et Filii..."),
    );
}
