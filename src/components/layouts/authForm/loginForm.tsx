import React, { useState } from "react";
import { Login } from "../../../services/login";
import Button from "../../elements/button/Button";
import ErrorContainer from "../../elements/errorContainer/errorContainer";
import Form from "../../elements/form/Form";
import "./authForm.css";

interface LoginFormProps {
  onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("すべてのフィールドを入力してください");
      return;
    }

    try {
      await Login(email, password);
      onLoginSuccess();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("不明なエラーが発生しました");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <Form
        label="メールアドレス"
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="メールアドレスを入力してください"
        required
      />
      <Form
        label="パスワード"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="パスワードを入力してください"
        required
      />
      <ErrorContainer errorMessage={error || undefined} size="big" />
      <div className="buttonContainer">
        <Button label="ログイン" variant="black" type="submit" />
      </div>
    </form>
  );
};

export default LoginForm;
