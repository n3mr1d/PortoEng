import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Donate from "./components/pages/donate.tsx";

import ProfileGit from "./components/profileGit.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<App />} />
            <Route path="/donate" element={<Donate/>} />
            <Route path="/test" element={<ProfileGit />}/>
        </Routes>
        </BrowserRouter>

    </StrictMode>,
);
