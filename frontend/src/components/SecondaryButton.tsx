const SecondaryButton = ({ children = "Add", className = "", ...props }) => {
  return (
    <button
      type="button"
      className={`btn-secondary ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default SecondaryButton
