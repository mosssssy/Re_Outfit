import React from "react";
import ResetPasswordForm from "../components/layouts/authForm/ResetPasswordForm";
import styles from "../components/styles/auth.module.css"; // CSS Modulesをインポート

const PasswordReset: React.FC = () => {
  return (
    <div className={styles.container}>
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
