
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import React from 'react'
// LAYOUTS
import MainLayout from './layouts/MainLayout'
// PAGES
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import JobPage, { jobLoader } from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';


const App = () =>
{

  async function addJob(newJob) {
    const res = await fetch('/api/jobs',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'},
        body: JSON.stringify(newJob),
      }
    );
  };

  async function deleteJob(jobId) {
    const res = await fetch(`/api/jobs/${jobId}`,{
      method: 'DELETE',
    }
  );
  };

  async function editJob(job) {
    const res = await fetch(`/api/jobs/${job.id}`,
      {
        method: "PUT",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(job)
      }
    )
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/jobs' element={<JobsPage/>}/>
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader} />
        <Route path='/jobs/edit/:id' element={<EditJobPage editJobInfo={editJob}/>} loader={jobLoader} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
  )
  );
  



  return <RouterProvider router={router} />
}


export default App