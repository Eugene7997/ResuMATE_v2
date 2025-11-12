import NavBar from "@components/NavBar"
import SecondaryCard from "@components/SecondaryCard"
import PrimaryButton from "@components/PrimaryButton"
import ResumeEntry from "@components/ResumeEntry"

const ProfilePage = () => {

    return (
        <div>
            <NavBar />
            <div className="flex items-start justify-between min-h-[calc(100vh-6rem)] p-6">
                <div className="max-w-[40%]">
                    <SecondaryCard>
                        <h1 className="px-4 pt-4 text-3xl">User Profile</h1>
                        <p className="px-4 pb-4 text-1xl">
                            <p className="mt-px">Name: John Doe</p>
                            <p className="mt-px">Email: john.doe@example.com</p>
                            <p className="mt-px">Phone: (123) 456-7890</p>
                        </p>
                        <a href="/settings" className="px-4 pb-4 text-1xl">Manage your account settings and preferences here.</a>
                    </SecondaryCard>
                </div>
                <div className="flex-row items-start justify-start max-w-[60%]">
                    <div>
                        <h2 className="text-3xl">Resume Information</h2>
                        <p className="mt-px">Last Resume Updated: June 10, 2024</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <h2 className="text-2xl">Master Work Experience</h2>
                        <PrimaryButton className="mt-2 mb-4">Smart Pointers</PrimaryButton>
                    </div>
                    <ResumeEntry />
                </div>
            </div>
        </div>
    )
}

export default ProfilePage