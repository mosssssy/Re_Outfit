import React, { useContext } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layouts/layout/Layout";
import "./i18n";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Start from "./pages/Start";
import PasswordReset from "./pages/ResetPassword";
import { AuthContext, AuthProvider } from "./services/AuthContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <AuthContent />
        </Layout>
      </Router>
    </AuthProvider>
  );
};

const AuthContent: React.FC = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>; // ローディング中の表示
  }

  return (
    <Routes>
      {/* ↓　スタート画面 */}
      <Route path="/" element={<Start />} />
      {/* ↓　新規登録画面 */}
      <Route path="/sign_up" element={<SignUp />} />
      {/* ↓　ログイン画面 */}
      <Route path="/login" element={<Login />} />
      {/* ↓　ホーム画面（ログインしていない場合はログイン画面にリダイレクト） */}
      <Route path="/home" element={<Home />} />
      {/* ↓　パスワードリセット画面 */}
      <Route path="/reset_password" element={<PasswordReset />} />
    </Routes>
  );
};

export default App;
