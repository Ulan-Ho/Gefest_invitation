import React from "react";
import { createRoot } from "react-dom/client";
import { Sandpack } from "@codesandbox/sandpack-react";

const root = createRoot(document.getElementById("root"));

const sandpackComponent = (
  <Sandpack
    template="static"
    options={{
      externalResources: ["https://cdn.tailwindcss.com"]
    }}
  />
);

root.render(sandpackComponent);