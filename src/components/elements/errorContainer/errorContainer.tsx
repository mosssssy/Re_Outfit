import React from "react";
import "./ErrorContainer.css";

interface ErrorContainerProps {
  errorMessage?: string; // エラーがある場合はメッセージを受け取る
  size?: "small" | "big"; // 高さをカスタマイズできるオプション
}

// サイズに応じた高さの設定
const sizeValues: {
  [key in "small" | "big"]: { height: string };
} = {
  small: { height: "40px" },
  big: { height: "80px" },
};

const ErrorContainer: React.FC<ErrorContainerProps> = ({
  errorMessage = "",
  size = "small", // デフォルト値を設定
}) => {
  const { height } = sizeValues[size];

  return (
    <div className="errorContainer" style={{ height }}>
      {errorMessage && <span className="errorMessage">{errorMessage}</span>}
    </div>
  );
};

export default ErrorContainer;
