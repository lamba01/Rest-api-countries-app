import React from "react";
import MyComponent from "./component";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div>
      <MyComponent /> {/* Use the imported component */}
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
