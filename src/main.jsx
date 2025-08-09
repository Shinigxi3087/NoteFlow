import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initLenis } from "./lib/lenis";

function Root() {
  useEffect(() => { initLenis(); }, []);
  return <App />;
}

createRoot(document.getElementById("root")).render(<Root />);
