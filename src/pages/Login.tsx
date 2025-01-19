import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/layouts/authForm/loginForm";
import styles from "../components/styles/auth.module.css"; // CSS Modulesをインポート

const Login: React.FC = () => {
  const navigate = useNavigate();

  // サインアップ成功後にホームページへ遷移する処理
  const handleLoginSuccess = () => {
    navigate("/home");
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src="/src/assets/images/logo/outfit_logo_black.png"
        alt="OutFit"
      />
      <h2>ログイン</h2>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default Login;
