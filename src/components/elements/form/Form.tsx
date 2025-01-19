import React from "react";
import "./Form.css";

interface FormProps {
  label: string; // ラベルのテキスト
  type: "text" | "email" | "password"; // インプットのタイプ
  id: string; // input と label を関連付けるための id
  value: string; // 入力値
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // 値の変更イベント
  placeholder?: string; // プレースホルダー (任意)
  required?: boolean; // 必須フィールドかどうか (任意)
}

const Form: React.FC<FormProps> = ({
  label,
  type,
  id,
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="form-input"
      />
    </div>
  );
};

export default Form;
