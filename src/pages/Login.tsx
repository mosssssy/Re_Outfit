import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/layouts/authForm/loginForm";
import PrevNextLink from "../components/elements/prevNextLink/PrevNextLink";
import styles from "../components/styles/auth.module.css"; // CSS Modulesをインポート

const Login: React.FC = () => {
  const navigate = useNavigate();

  // サインアップ成功後にホームページへ遷移する処理
  const handleLoginSuccess = () => {
    navigate("/home");
  };

  const handleBackClick = () => {
    navigate("/");
  };

  const handleNextClick = () => {
    console.log("次へボタンがクリックされました");
  };

  return (
    <div className={styles.container}>
      <PrevNextLink
        showBackButton={true}
        showNextButton={false}
        onBackClick={handleBackClick}
        onNextClick={handleNextClick}
      />
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
