import './Button.css'

function Button({
  children,
  variant = 'assessment',
  onClick,
  href,
  to,
  type = 'button',
  disabled = false,
  className = '',
  ...props
}) {
  // Keeps your core CSS variant styles, but appends Tailwind classes via the ${className} variable
  const buttonClassName = `button button--${variant} ${className}`.trim()
  const destination = href ?? to

  if (destination) {
    return (
      <a
        className={buttonClassName}
        href={disabled ? undefined : destination}
        onClick={disabled ? (event) => event.preventDefault() : onClick}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={buttonClassName}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
