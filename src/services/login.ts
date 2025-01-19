import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { FirebaseError } from "firebase/app";

export const Login = async (email: string, password: string): Promise<void> => {
  try {
    // Firebaseでログイン
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // ログイン成功の場合
    console.log("ログイン成功", userCredential.user);
  } catch (error) {
    let errorMessage = "不明なエラーが発生しました"; // デフォルトのエラーメッセージ

    // FirebaseError 型を確認して処理
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case "auth/user-not-found":
          errorMessage = "ユーザーが見つかりません";
          break;
        case "auth/wrong-password":
          errorMessage = "パスワードが間違っています";
          break;
        case "auth/invalid-email":
          errorMessage = "無効なメールアドレスです";
          break;
        case "auth/invalid-credential":
          errorMessage =
            "無効な資格情報です。メールアドレスとパスワードを再確認してください";
          break;
        default:
          errorMessage = `不明なエラーが発生しました (${error.code})`;
          break;
      }
    }
    // エラーメッセージを返却する
    throw new Error(errorMessage);
  }
};
