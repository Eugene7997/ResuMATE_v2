import NavBar from "@components/NavBar"
import PrimaryButton from "@components/PrimaryButton"
import SecondaryCard from "@components/SecondaryCard"
import PrimaryInput from "@components/PrimaryInput"

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="flex items-center justify-center min-h-[calc(100vh-6rem)]">
        <SecondaryCard className="max-w-3/4 h-1/2">
          <h1 className="px-4 pt-4 text-3xl">Let's get started!</h1>
          <h1 className="px-4 pb-2 text-3xl">Tell us more about your application.</h1>
          <form>
            <div className="mt-4">
              <label className="px-4 text-1xl">What job are you applying for?</label>
            </div>
            <div>
              <PrimaryInput type="text" placeholder="Job posting URL" />
            </div>
            <div>
              <label className="px-4 pb-2 text-1xl">Are there any specific experiences you want to include?</label>
            </div>
            <div>
              <PrimaryInput type="text" placeholder="Tag relevant experiences @..." />
            </div>
          </form>
          <div className="flex justify-end">
            <PrimaryButton>✨ Generate</PrimaryButton>
          </div>
        </SecondaryCard>
      </div>
    </div>
  )
}

export default HomePage