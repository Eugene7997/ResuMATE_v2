import { FaCopy } from "react-icons/fa6";
import SecondaryCard from "@components/SecondaryCard"
import ResumePoint from "@components/ResumePoint"
import SecondaryButton from "@components/SecondaryButton";

const ResumeEntry = () => {
    return (
        <SecondaryCard>
            <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                    <h3 className="text-2xl">
                        Product Associate, OrbitOne Technologies
                    </h3>
                    <span className="text-sm text-text-muted">
                        (Jul 2024 – Present)
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <FaCopy className="text-xl text-primary-600 hover:text-primary-400 active:text-primary-900 transition-colors duration-200" />
                    <SecondaryButton className="m-2">Edit</SecondaryButton>
                </div>
            </div>
            <ul className="list-disc pl-6">
                <ResumePoint content="Supported product team on roadmap planning for a B2B analytics platform with 10,000+ active users." />
                <ResumePoint content="Gathered and analyzed 200+ user feedback entries, translating insights into 5 prioritized feature improvements." />
                <ResumePoint content="Built weekly KPI dashboards tracking churn, DAU/MAU, and activation; reduced report prep time by 30%." />
            </ul>
        </SecondaryCard>
    )
}

export default ResumeEntry