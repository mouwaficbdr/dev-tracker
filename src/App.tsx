import AppRoutes from "./routes/AppRoutes";

import AuthProvider from "./features/auth/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;