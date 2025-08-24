import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";

export default function App() {
  // Lấy nickname từ localStorage để truyền cho DashboardPage
  const nickname = localStorage.getItem("nickname");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage nickname={nickname} />} />
      </Routes>
    </BrowserRouter>
  );
}