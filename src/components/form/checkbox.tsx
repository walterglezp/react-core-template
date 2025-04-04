import React from 'react'
import { uuid } from '@app/utils/uuid'

export interface CheckBoxProps {
  label?: string | React.ReactNode
  className?: string
  inline?: boolean
  field: FormFieldProps
  onChange(field: FormFieldProps): void
}

const CheckBox: React.FC<CheckBoxProps> = ({ label, className, inline = false, field, onChange, ...rest }) => {
  const universalID = uuid()
  return (
    <div className={className}>
      <input
        name={field.name}
        type="checkbox"
        id={universalID}
        onChange={(e) => onChange({ ...field, value: e.target.checked })}
        {...rest}
      />
      <label htmlFor={universalID}>{label}</label>
    </div>
  )
}

export { CheckBox }
