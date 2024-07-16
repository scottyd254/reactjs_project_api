import Hero from "../components/Hero"
import Homecards from "../components/Homecards"
import Joblistings from "../components/JobListings"
import ViewAllJobs from "../components/ViewAllJobs"
const HomePage = () => {
  return (
    <>
    <Hero title = "Become a React.js Hero" subtitle = "Find your dream job today" />
    <Homecards />
    <Joblistings isHome = {true}/>
    <ViewAllJobs />
    </>
  )
}

export default HomePage
