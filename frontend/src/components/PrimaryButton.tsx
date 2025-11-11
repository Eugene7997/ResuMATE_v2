const PrimaryButton = ({ children = "✨ Generate", className = "", ...props }) => {
  return (
    <button
      type="button"
      className={`btn-primary ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
