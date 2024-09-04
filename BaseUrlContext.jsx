import { createContext } from "react";

const BaseUrlContext = createContext(import.meta.env.VITE_API);

export { BaseUrlContext };
