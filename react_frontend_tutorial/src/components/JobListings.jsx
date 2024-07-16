
import JobListing from "./JobListing"
import { useState, useEffect } from "react";


// eslint-disable-next-line react/prop-types
const JobListings = ({isHome = false}) => {
  const [jobs, setJobs] = useState([]);
  
  useEffect(() => {
    const fetchData = async() => {
      try {
        const res = await fetch('http://localhost:8000/api/get/jobs');
        const data = await res.json()
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data', error)
      }
    };

    fetchData();
  }, []);
  return (
    <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        { isHome ? "Recent Jobs" : "Browse Jobs"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       {jobs.map((job) => (
           // eslint-disable-next-line react/jsx-key
           <JobListing key = {job.id} job = {job} />
           
       ))}
        
        
        
        
       
      </div>
    </div>
  </section>
  )
}

export default JobListings
