import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LayoutWithSidebar from "./layouts/LayoutWithSidebar";
import DashboardPage from "./pages/DashboardPage";
import TheoryPage from "./pages/TheoryPage";
import PracticePage from "./pages/PracticePage";
import VocabPage from "./pages/VocabPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<LayoutWithSidebar><DashboardPage /></LayoutWithSidebar>} />
        <Route path="/theory" element={<LayoutWithSidebar><TheoryPage /></LayoutWithSidebar>} />
        <Route path="/practice" element={<LayoutWithSidebar><PracticePage /></LayoutWithSidebar>} />
        <Route path="/vocab" element={<LayoutWithSidebar><VocabPage /></LayoutWithSidebar>} />
      </Routes>
    </BrowserRouter>
  );
}