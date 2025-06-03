import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthProvider from "./features/auth/AuthProvider";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;