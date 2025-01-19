import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Button from "../components/elements/button/Button";
import MarginBox from "../components/elements/marginBox/MarginBox";
import styles from "../components/styles/start.module.css";

const Start: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSignUpPage = () => {
    navigate("/sign_up");
  };

  const handleLoginPage = () => {
    navigate("/login");
  };

  return (
    <div className={styles.conatiner}>
      <img
        className={styles.image}
        src="/src/assets/images/logo/outfit_logo_black.png"
        alt="OutFit"
      />
      <MarginBox size="huge" />
      <div className={styles.buttonContainer}>
        <Button
          label={t("signUp")}
          variant="black"
          onClick={() => handleSignUpPage()}
        />
        <Button
          label={t("login")}
          variant="black"
          onClick={() => handleLoginPage()}
        />
      </div>
    </div>
  );
};

export default Start;
