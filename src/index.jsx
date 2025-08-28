  import { StrictMode } from "react";
  import { createRoot } from "react-dom/client";
  import { LogIn } from "./screens/login";
  import { DashboardRev } from "./routes/DashboardRev";
  import LoanApplicationsDashboard from "./routes/Applications";
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

  createRoot(document.getElementById("app")).render(
    <StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/dashboard" element={<DashboardRev />} />
          <Route path="/applications" element={<LoanApplicationsDashboard />} />
        </Routes>
      </Router>
    </StrictMode>
  );
