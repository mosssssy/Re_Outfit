import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 言語リソースの設定
const resources = {
  ja: {
    translation: {
      email: "メールアドレス",
      password: "パスワード",
      username: "ユーザー名",
      signUp: "新規登録",
      login: "ログイン",
    },
  },
};

// i18nextの設定
i18n.use(initReactI18next).init({
  resources,
  lng: "ja", // 初期言語設定（日本語）
  interpolation: {
    escapeValue: false, // ReactではXSSの対策は不要
  },
});

export default i18n;
