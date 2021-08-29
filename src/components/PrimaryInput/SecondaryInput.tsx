import React, { FC } from 'react'
import { Label } from 'reactstrap'
import { InputProps } from '../../helpers/types'
import './SecondaryInput.scss'

const SecondaryInput: FC<InputProps> = ({ name, placeholder, type, label, id, min, max, onChange }) => {
 return (
  <div className="Secondary__form-subgroup">
   <Label className="Secondary__form-subgroup--label">{label}</Label>
   <input
    id={id}
    min={min}
    max={max}
    className="Secondary__form-subgroup--input"
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
   />
  </div>
 )
}

export default SecondaryInput