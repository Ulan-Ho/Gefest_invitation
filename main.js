import { Sandpack } from "@codesandbox/sandpack-react";

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


<Sandpack
  theme={theme}
  template="react"
  options={{
    classes: {
      "sp-wrapper": "custom-wrapper",
      "sp-layout": "custom-layout",
      "sp-tab-button": "custom-tab",
    },
  }}
/>