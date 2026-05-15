import { Navigate, Route, Routes } from 'react-router-dom';
import { LayoutAdmin } from './components/templates/LayoutAdmin';
import { RequireAdminAuth, RequireAppAuth } from './components/modules/AuthRouter';
import { LayoutApp } from './components/templates/LayoutApp';

export default function App() {
  return (
    <Routes>
      {/* Admin Routes */}
      <Route
        path="/admin/*"
        element={
          <RequireAdminAuth>
            <LayoutAdmin>
              <Routes>
                <Route path="*" element={<Navigate to="dashboard" replace />} />
              </Routes>
            </LayoutAdmin>
          </RequireAdminAuth>
        }
      />

      <Route
        path="/admin/forgot-password/verify-otp"
      />

      {/* App Routes */}
      <Route
        path="/*"
        element={
          <RequireAppAuth>
            <Routes>
              <Route path="*" element={<Navigate to="fresh-analysis" replace />} />
            </Routes>
          </RequireAppAuth>
        }
      />

      {/* Public Routes */}
      {/* <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/verify-otp" element={<VerifyOtpPage />} />
      <Route path="/403" element={<Page403 />} />
      <Route path="/404" element={<Page404 />} /> */}

      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}
