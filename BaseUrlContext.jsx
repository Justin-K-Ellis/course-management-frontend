import { createContext } from "react";

// const BaseUrlContext = createContext(import.meta.env.VITE_API);
const BaseUrlContext = createContext(
  "https://course-management-1p45.onrender.com"
);

export { BaseUrlContext };
