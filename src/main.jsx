import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import fetchClient from "./api/fetchClient.js";

// fetchClient("/login/", {
//   method: "POST",
//   body: {
//     username: "superadmin",
//     password: "fleet@123",
//   },
// })
//   .then((res) => console.log("LOGIN SUCCESS:", res))
//   .catch((err) => console.error("LOGIN ERROR:", err));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
