import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../elements/button/Button";
import MarginBox from "../elements/marginBox/MarginBox";

const LogoutPrompt: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <p>
        セッションが切れました。
        <br />
        再度ログインしてください。
      </p>
      <MarginBox size="medium" />
      <div className="buttonContainer">
        <Button onClick={handleClick} label="ログイン画面へ" variant="black" />
      </div>
    </div>
  );
};

export default LogoutPrompt;
