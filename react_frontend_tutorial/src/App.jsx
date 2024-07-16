/* eslint-disable no-unused-vars */

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./pages/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
import JobPage, {jobLoader} from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
// eslint-disable-next-line no-unused-vars
import EditJobPage from "./pages/EditJobPage";

const App = () => {

  // add new job
  const addJob = async (newJob) => {
    // eslint-disable-next-line no-unused-vars
    const res = await fetch("http://127.0.0.1:8000/api/create_job", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // delete job 
  const deleteJob = async (id) => {
    // eslint-disable-next-line no-unused-vars
    const res = await fetch(`http://127.0.0.1:8000/api/job/delete/${id}`, {
      method: "DELETE"
  });

    return;
  }

  // update job
  const updateJob = async (job) => {
    if (!job) {
      throw new Error('Updated job is missing');
    }
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/job/update/${job.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
      });
      return;
    } catch (error) {
      console.error('Error updating job:', error);
      throw error;
    }
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
          <Route index element = {< HomePage />}/>
          <Route path="/jobs" element = {< JobsPage />}/>
          <Route path="/jobs/:id" element = {< JobPage  deleteJob={deleteJob}/>} loader = {jobLoader}/>
          <Route path="/edit-job/:id" element = {<EditJobPage updatedJobSubmit={updateJob} />} loader = {jobLoader}/>
          <Route path="/add-job" element = {< AddJobPage addJobSubmit={addJob}/>}/>
          
          <Route path="*" element = {< NotFound />}/>
      </Route>
    )
  );
 
  return <RouterProvider router={router} />;
};





export default App
