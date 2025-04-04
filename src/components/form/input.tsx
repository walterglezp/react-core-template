import React from 'react'
import { validateInputField, validateOnChange } from '@app/utils/validation'

interface InputProps {
  label?: string | React.ReactNode
  title?: string
  tabIndex?: number
  placeholder?: string
  className?: string
  type?: InputFieldProps
  isRequired?: boolean
  min?: number
  max?: number
  disabled?: boolean
  field: FormFieldProps
  onChange(field: FormFieldProps): void
}

const Input: React.FC<InputProps> = ({
  label,
  title,
  placeholder,
  tabIndex,
  className,
  type = 'text',
  isRequired = false,
  disabled = false,
  field,
  onChange,
  ...rest
}) => {
  return (
    <>
      <div className={className} title={title}>
        {label && (
          <span>
            {label}
            {isRequired && <span>&nbsp;*</span>}&nbsp;
          </span>
        )}
        <input
          disabled={disabled}
          tabIndex={tabIndex}
          name={field.name}
          placeholder={placeholder}
          type={type}
          value={(field.value as string) ?? ''}
          onChange={(e) => validateOnChange({ ...field, value: e.target.value }, onChange)}
          onBlur={(e) => validateOnChange({ ...field, value: e.target.value }, onChange)}
          {...rest}
          style={field.value !== '' ? { borderRight: 'none' } : undefined}
        />
      </div>
      {field.error && <span style={{ color: 'red' }}>{field.error}</span>}
    </>
  )
}

export { Input }
