import React from "react";
import "./Button.css";

type ButtonProps = {
  label: string;
  variant: "black" | "gray" | "danger";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  label,
  variant,
  onClick,
  type = "button",
}) => {
  return (
    <button className={`button ${variant}`} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
