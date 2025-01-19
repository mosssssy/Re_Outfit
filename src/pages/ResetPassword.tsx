import React from "react";
import { useNavigate } from "react-router-dom";
import ResetPasswordForm from "../components/layouts/authForm/ResetPasswordForm";
import styles from "../components/styles/auth.module.css"; // CSS Modulesをインポート
import PrevNextLink from "../components/elements/prevNextLink/PrevNextLink";

const PasswordReset: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/login");
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
      <h2>パスワードリセット用のメールを送信</h2>
      <ResetPasswordForm />
    </div>
  );
};

export default PasswordReset;
