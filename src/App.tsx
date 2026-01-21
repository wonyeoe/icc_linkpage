import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AppsPage from "./pages/Apps";
import InternationalPage from "./pages/International";

export type Lang = "ko" | "en" | "zh" | "ja" | "it" | "ru" | "vi" | "id";

export default function App() {
  const [lang, setLang] = useState<Lang>("ko");

  return (
    <Routes>
      <Route path="/" element={<Home lang={lang} setLang={setLang} />} />
      <Route path="/apps" element={<AppsPage lang={lang} setLang={setLang} />} />
      <Route
        path="/international"
        element={<InternationalPage lang={lang} setLang={setLang} />}
      />
    </Routes>
  );
}
