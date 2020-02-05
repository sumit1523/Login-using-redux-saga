export const required = value => (value || typeof value === 'number' ? undefined : 'Required')

const maxLength = max => value => 
	value && value.length > max ? `Must be ${max} characters or less` : undefined

export const maxLengthP = maxLength(12)

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined