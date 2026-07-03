import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/dashboard/Dashboard";
import Renewals from "../pages/renewals/Renewals";
import UploadQuotes from "../pages/upload/UploadQuotes";
import HardwareBenchmark from "../pages/benchmark/HardwareBenchmark";
import VendorComparison from "../pages/vendors/VendorComparison";
import Reports from "../pages/reports/Reports";
import Settings from "../pages/settings/Settings";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="renewals" element={<Renewals />} />
          <Route path="upload" element={<UploadQuotes />} />
          <Route path="benchmark" element={<HardwareBenchmark />} />
          <Route path="vendors" element={<VendorComparison />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;