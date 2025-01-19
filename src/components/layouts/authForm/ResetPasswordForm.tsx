import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ResetPassword } from "../../../services/resetPassword";
import Button from "../../elements/button/Button";
import ErrorContainer from "../../elements/errorContainer/errorContainer";
import Form from "../../elements/form/Form";
import "./authForm.css";

const ResetPasswordForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("すべてのフィールドを入力してください");
      return;
    }

    try {
      await ResetPassword(email);
      alert(
        "パスワード変更用のメールを送信しました。\nメールに記載のURLより変更手続きを行ってください。"
      );
      navigate("/login"); // ログアウト後に /login ページに遷移
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
      <ErrorContainer errorMessage={error || undefined} size="big" />
      <div className="buttonContainer">
        <Button label="メールを送信する" variant="black" type="submit" />
      </div>
    </form>
  );
};

export default ResetPasswordForm;
