import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { FirebaseError } from "firebase/app";

export const ResetPassword = async (email: string): Promise<void> => {
  const actionCodeSettings = {
    url: "http://localhost:5173/login", // ローカル環境用URL
    handleCodeInApp: true,
  };

  try {
    // Firebaseでパスワードリセット用のメールを送信
    await sendPasswordResetEmail(auth, email, actionCodeSettings);
  } catch (error) {
    let errorMessage = "不明なエラーが発生しました";

    // FirebaseError 型を確認して処理
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case "auth/user-not-found":
          errorMessage = "このメールアドレスは登録されていません";
          break;
        case "auth/invalid-email":
          errorMessage = "無効なメールアドレスです";
          break;
        default:
          errorMessage = "パスワードリセットに失敗しました";
          break;
      }
    }
    // エラーメッセージを返却する
    throw new Error(errorMessage);
  }
};
