import "./styles.css";
import { useNavigate, Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";

import { Dashboard } from "./pages/dashboard";
import { Inventory } from "./pages/inventory";
import { Sales } from "./pages/sales";

export default function App() {
  const navigate = useNavigate();

  document.title = "InventoTrack";

  return (
    <div className="App">
      <header>
        <h1 onClick={() => navigate("/")}>InventoTrack</h1>
        <nav className="navBar">
          <li onClick={() => navigate("/")}>Report</li>
          <li onClick={() => navigate("/inventory")}>Inventory</li>
          <li onClick={() => navigate("/sales")}>Sales</li>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/sales" element={<Sales />} />
      </Routes>
    </div>
  );
}
