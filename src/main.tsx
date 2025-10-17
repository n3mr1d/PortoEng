import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Donate from "./components/pages/donate.tsx";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Linktree from "./components/pages/linktree.tsx";
import Contribution from "./components/pages/contribution.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <SpeedInsights />
       <Toaster/>
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/linktree" element={<Linktree />} />
                <Route path="/contribution" element={<Contribution />} />
            </Routes>
        </BrowserRouter>

    </StrictMode>,
);
