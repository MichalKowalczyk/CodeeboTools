import React from "react";
import './input-checkbox.scss'

interface Props {
  isActive: boolean,
  handleChange: (value: boolean) => void,
  children: React.ReactNode,
}

const InputCheckBox: React.FC<Props> = (props: Props) => {
  const { children, handleChange, isActive } = props;

  return (
    <div className={"input-checkbox"} onClick={() => handleChange(!isActive)}>
      <div className={`input-checkbox__rect${isActive ? " isActive" : ""}`}></div>
      <div className="input-checkbox__label">{children}</div>
    </div>
  )
}

export default InputCheckBox;