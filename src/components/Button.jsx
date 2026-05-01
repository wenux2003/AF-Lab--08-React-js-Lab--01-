function Button({ children, href = '#', size = 'medium', variant = 'primary' }) {
  return (
    <a className={`button button-${variant} button-${size}`} href={href}>
      {children}
    </a>
  )
}

export default Button
