import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LayoutWithSidebar from "./layouts/LayoutWithSidebar";
import DashboardPage from "./pages/DashboardPage";
import TheoryPage from "./pages/TheoryPage";
import TheoryDetailRoute from "./pages/TheoryDetailRoute";
import PracticePage from "./pages/PracticePage";
import VocabPage from "./pages/VocabPage";
import VocabList from "./pages/VocabList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<LayoutWithSidebar><DashboardPage /></LayoutWithSidebar>} />
        <Route path="/theory" element={<LayoutWithSidebar><TheoryPage /></LayoutWithSidebar>} />
        <Route path="/theory/:id" element={<LayoutWithSidebar><TheoryDetailRoute /></LayoutWithSidebar>} />
        <Route path="/practice" element={<LayoutWithSidebar><PracticePage /></LayoutWithSidebar>} />
        <Route path="/vocab" element={<LayoutWithSidebar><VocabPage /></LayoutWithSidebar>} />
        <Route path="/vocab/list" element={<LayoutWithSidebar><VocabList /></LayoutWithSidebar>} />
      </Routes>
    </BrowserRouter>
  );
}