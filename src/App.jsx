import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LayoutWithSidebar from "./layouts/LayoutWithSidebar"; // Import layout

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<LayoutWithSidebar />} />
      </Routes>
    </BrowserRouter>
  );
}