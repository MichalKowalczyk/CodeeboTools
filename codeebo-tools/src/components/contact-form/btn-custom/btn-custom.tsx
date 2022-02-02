import React, { ReactChild } from "react";
import "./btn-custom.scss";

interface Props {
  children: ReactChild;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  variant?: "fill" | "outline";
}

const BtnCustom: React.FC<Props> = (props: Props) => {
  const { children, disabled, className, variant = "outline", type = undefined } = props;

  return (
    <button type={type} className={`customButton ${variant} ${className ? " " + className : ""}`} disabled={disabled}>
      <div>{children}</div>
    </button>
  );
};

export default BtnCustom;
