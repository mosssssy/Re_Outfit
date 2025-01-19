import React from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../components/layouts/authForm/signUpForm";
import styles from "../components/styles/auth.module.css"; // CSS Modulesをインポート

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  // サインアップ成功後にホームページへ遷移する処理
  const handleSignUpSuccess = () => {
    navigate("/home");
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src="/src/assets/images/logo/outfit_logo_black.png"
        alt="OutFit"
      />
      <h2>新規登録</h2>
      <SignUpForm onSignUpSuccess={handleSignUpSuccess} />
    </div>
  );
};

export default SignUp;
