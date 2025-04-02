import React from 'react'
import { validateInputField, validateOnChange } from '@app/utils/validation'

interface InputProps {
  label?: string | React.ReactNode
  title?: string
  tabIndex?: number
  placeholder?: string
  className?: string
  append?: string | React.ReactNode
  type?: InputFieldProps
  variant?: 'sm' | 'md' | 'lg'
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
  append,
  type = 'text',
  variant = 'sm',
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
            {isRequired && <span className="asterisk">&nbsp;*</span>}&nbsp;
          </span>
        )}
        <input
          disabled={disabled}
          tabIndex={tabIndex}
          name={field.name}
          placeholder={placeholder}
          className={`form-control`}
          type={type}
          value={(field.value as string) ?? ''}
          onChange={(e) => validateOnChange({ ...field, value: e.target.value }, onChange)}
          onBlur={(e) => validateOnChange({ ...field, value: e.target.value }, onChange)}
          {...rest}
          style={field.value !== '' ? { borderRight: 'none' } : undefined}
        />
      </div>
      {field.error && field.error}
    </>
  )
}

export { Input }
