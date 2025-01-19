import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, firestore } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";

export const signUp = async (
  email: string,
  password: string,
  username: string
): Promise<any> => {
  try {
    // Firebaseでユーザー登録
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Firestoreにユーザー情報を保存
    await setDoc(doc(firestore, "users", user.uid), {
      username: username,
      email: email,
    });

    // ログイン処理
    await signInWithEmailAndPassword(auth, email, password);

    return user;
  } catch (error) {
    let errorMessage = "不明なエラーが発生しました"; // デフォルトのエラーメッセージ

    // FirebaseError 型を確認して処理
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage = "このメールアドレスはすでに使用されています";
          break;
        case "auth/invalid-email":
          errorMessage = "無効なメールアドレスです";
          break;
        case "auth/weak-password":
          errorMessage = "パスワードは6文字以上で入力してください";
          break;
        case "auth/operation-not-allowed":
          errorMessage = "認証方法が許可されていません";
          break;
        default:
          errorMessage = `不明なエラーが発生しました (${error.code})`;
          break;
      }
    }
    // エラーを返す
    throw new Error(errorMessage);
  }
};
