import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/elements/button/Button";
import LogoutPrompt from "../components/layouts/LogoutPrompt";
import { AuthContext } from "../services/AuthContext";
import { handleLogout } from "../services/logOut";

const Home: React.FC = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    return <LogoutPrompt />; // user が null の場合は LogoutPrompt コンポーネントを表示
  }

  return (
    <div>
      <h1>Home</h1>
      <Link to="/">戻る</Link>
      <div className="buttonContainer">
        <Button
          onClick={() => handleLogout(navigate)}
          label="ログアウト"
          variant="black"
        />
      </div>
    </div>
  );
};

export default Home;
