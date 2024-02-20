import React from "react";
import { createRoot } from "react-dom/client";
import { Sandpack } from "@codesandbox/sandpack-react";

const root = createRoot(document.getElementById("root"));


export default function App() {
  return (
    <Sandpack 
      template="react"
      files={{
        "/App.js": `export default function App() {
  return <h1>Hello Sandpack</h1>
}`,
      }}
    />
  );
}

root.render(App());