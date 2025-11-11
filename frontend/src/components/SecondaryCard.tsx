import type { CardProps } from "@/types/types";

const SecondaryCard: React.FC<CardProps> = ({ children, className = "", ...props }) => {
  return (
    <div className={`secondary-card ${className}`} {...props}>
      {children}
    </div>
  )
}

export default SecondaryCard