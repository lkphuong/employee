// src/App.tsx
import React, { useEffect } from "react";
import LoginLayout from "./common/components/layouts/CLoginLayout";
import "./index.css"; // Ensure Tailwind styles are imported
import AnalyticsLayout from "./common/components/layouts/CAnalyticsLayout";
import SelectExample from "./common/components/controls/example";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

const App: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <Routes>
      <Route path="/" element={<LoginLayout />} />
      <Route path="/analytics" element={<AnalyticsLayout />} />
      <Route path="*" element={<LoginLayout />} />
    </Routes>
  );
};

export default App;
