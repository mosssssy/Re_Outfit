import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export const handleLogout = async (
  navigate: ReturnType<typeof useNavigate>
) => {
  const confirmed = window.confirm("ログアウトしますか？");

  if (confirmed) {
    try {
      await signOut(auth); // Firebase からサインアウト
      alert("ログアウトしました");
      navigate("/login"); // ログアウト後に /login ページに遷移
    } catch (error) {
      console.error("ログアウトに失敗しました", error);
      alert("ログアウトに失敗しました");
    }
  }
};
