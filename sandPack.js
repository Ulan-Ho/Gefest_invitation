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
