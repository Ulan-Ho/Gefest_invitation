import React from "react";
import { createRoot } from "react-dom/client";
import { Sandpack } from "@codesandbox/sandpack-react";

const root = createRoot(document.getElementById("root"));
const sandpackComponent = React.createElement(
Sandpack,
{ template: "react" },
null
);
root.render(sandpackComponent);