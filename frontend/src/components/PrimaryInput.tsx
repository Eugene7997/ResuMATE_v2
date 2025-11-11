import type { PrimaryInputProps } from "@/types/types";

const PrimaryInput: React.FC<PrimaryInputProps> = ({ className = "", ...props }) => {
  return (
      <input
        className={`primary-input ${className}`}
        {...props}
      />
  )
}

export default PrimaryInput