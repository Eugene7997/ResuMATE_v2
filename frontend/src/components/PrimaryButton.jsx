const PrimaryButton = ({ children = '✨ Generate', className = '', ...props }) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white transition-transform transform shadow-md btn-primary ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
