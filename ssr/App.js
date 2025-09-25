import { createElement as h, useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);
    return h(
        "div",
        {},
        h("h1", {}, "Et Spiritus Sancti!"),
        h("p", {}, "Dominus Iesus Christus"),
        h("button", { onClick: () => setCount(count + 1) }, `Count: ${count}`),
    );
}
