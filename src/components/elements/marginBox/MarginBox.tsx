// MarginBox.tsx
import React from "react";

interface MarginBoxProps {
  size?: "small" | "medium" | "big" | "huge"; // サイズを指定するプロパティ
}

const MarginBox: React.FC<MarginBoxProps> = ({ size = "medium" }) => {
  // サイズに対応するマージンと高さの設定
  const values: {
    [key in "small" | "medium" | "big" | "huge"]: {
      height: string;
    };
  } = {
    small: { height: "8px" },
    medium: { height: "16px" },
    big: { height: "24px" },
    huge: { height: "40px" },
  };

  const { height } = values[size];

  return <div style={{ height }}></div>;
};

export default MarginBox;
