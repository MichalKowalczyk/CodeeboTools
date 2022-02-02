import React, { useState } from "react";
import './input-text.scss'

interface Props {
  name: string
  type: string,
  label: string,
  value: string,
  handleChange: () => {},
  required: boolean,
  readOnly?: boolean,
  icon?: JSX.Element,
  labelIcon?: string,
  labelOffOnClick?: boolean,
  textAreaPaddings?: number,
  withBorder: boolean
}

const InputText: React.FC<any> = (props: Props) => {
  const { name, type, label, value, required, readOnly, icon, labelOffOnClick, withBorder, labelIcon, textAreaPaddings, ...rest } = props;

  const [labelIconOn, setLabelIconOn] = useState(true);

  return (
    <div className={"input-text standardForm " + type}>
      {
        type === "textarea" ?
          <textarea readOnly={readOnly} name={name} style={textAreaPaddings ? { padding: `${textAreaPaddings}px` } : undefined} onFocus={() => setLabelIconOn(false)} onBlur={() => setLabelIconOn(true)} className={withBorder ? 'form-input-with-border' : 'form-input'} value={value} {...rest} /> :
          <input className="form-input" {...props} value={value} />
      }
      {icon ? icon : null}
      {
        label || labelIcon ? (
          <>
            {labelIcon && labelIconOn && value.length === 0 ? <img className='label-icon' src={labelIcon} alt='label-icon' /> : null}
            <label className={value.length ? 'shrink form-input-label' : labelOffOnClick ? 'form-input-label-off' : 'form-input-label'}>
              {label}
            </label>
            { labelOffOnClick ? null : <span className="bar" />}
          </>) : null
      }
    </div>
  )
}

export default InputText;