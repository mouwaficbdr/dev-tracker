import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { useAuthContext } from '@/features/auth/hooks/useAuthContext';

import Home from '@/pages/Home';
import Dashboard from '@/pages/Dashboard';
import Settings from '@/pages/Settings';
import LoginForm from '@/features/auth/components/LoginForm';
import RegisterForm from '@/features/auth/components/RegisterForm';
import ResetPassword from '@/features/auth/components/ResetPassword';


const PrivateRoute = ({children} : {children: React.ReactNode}) => {

  const {currentUser, loading} = useAuthContext()

  if (loading) return <p className='text-blue-500 tet-bold text-9xl'>Loading....</p>
  if (!currentUser) {
    return <Navigate to="/login" replace/>
  }
  return children
}


const AppRoutes = () => {


  return (
    <Router>
      <Routes>
        {/* Routes publiques */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="reset-password" element={<ResetPassword />} />

        {/* Routes protégées */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />
        {/* Redirections pour routes non reconnues */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;