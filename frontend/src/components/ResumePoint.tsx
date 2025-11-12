import type { ResumePointProps } from "@lib/types/types"

const ResumePoint: React.FC<ResumePointProps> = ({ content, className = "" }) => {
  return (
    <li className={className}>
      <p className="text-sm text-text-muted">
        {content}
      </p>
    </li>
  )
}

export default ResumePoint