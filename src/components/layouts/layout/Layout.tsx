import React from "react";
import "./Layout.css"; // 共通のスタイルファイルをインポート

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Layout;
