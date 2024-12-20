import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { JobTypeOptions, SalaryOptions } from '../components/FormOptions';
import { toast } from 'react-toastify';

const EditJobPage = ({ editJobInfo }) => {

    const job = useLoaderData();
    const id = job.id;
    const [title, setTitle] = useState(job.title);
    const [type, setType] = useState(job.type);
    const [location, setLocation] = useState(job.location);
    const [description, setDescription] = useState(job.description);
    const [salary, setSalary] = useState(job.salary);
    const [companyName, setCompanyName] = useState(job.company.name);
    const [companyDescription, setCompanyDescription] = useState(job.company.description);
    const [companyContactEmail, setCompanyContactEmail] = useState(job.company.contactEmail);
    const [companyContactPhone, setCompanyContactPhone] = useState(job.company.contactPhone);
    
    
    const navigate = useNavigate();
    
    async function submitForm(e) {
        e.preventDefault();

        const editedJob = {
            id,
            title,
            type,
            location,
            description,
            salary,
            company: {
                name: companyName,
                description: companyDescription,
                contactEmail: companyContactEmail,
                contactPhone: companyContactPhone,
            },
        };
        await editJobInfo(editedJob);
        toast.success(`Job ${editedJob.title} updated succefully!`);
        return navigate(`/jobs/${editedJob.id}`);
    };


    return (
        <section className="bg-indigo-50">
            <div className="container m-auto max-w-2xl py-24">
                <div
                    className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <form onSubmit={submitForm}>
                    <h2 className="text-3xl text-center font-semibold mb-6">Edit job</h2>

                    <div className="mb-4">
                        <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Job Type</label>
                        <select
                        id="type"
                        name="type"
                        className="border rounded w-full py-2 px-3"
                        required
                        value={type}
                        onChange={(e) => setType(e.target.value)}>
                            <JobTypeOptions/>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Job Listing Name</label>
                        <input
                        type="text"
                        id="title"
                        name="title"
                        className="border rounded w-full py-2 px-3 mb-2"
                        placeholder="eg. Beautiful Apartment In Miami"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                        htmlFor="description"
                        className="block text-gray-700 font-bold mb-2"
                        >Description</label
                        >
                        <textarea
                        id="description"
                        name="description"
                        className="border rounded w-full py-2 px-3"
                        rows="4"
                        placeholder="Add any job duties, expectations, requirements, etc"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                        >Salary</label
                        >
                        <select
                        id="salary"
                        name="salary"
                        className="border rounded w-full py-2 px-3"
                        required
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        >

                        <SalaryOptions/>

                        </select>
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-700 font-bold mb-2'>
                        Location
                        </label>
                        <input
                        type='text'
                        id='location'
                        name='location'
                        className='border rounded w-full py-2 px-3 mb-2'
                        placeholder='Company Location'
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}           
                        />
                    </div>

                    <h3 className="text-2xl mb-5">Company Info</h3>

                    <div className="mb-4">
                        <label htmlFor="company" className="block text-gray-700 font-bold mb-2"
                        >Company Name</label
                        >
                        <input
                        type="text"
                        id="company"
                        name="company"
                        className="border rounded w-full py-2 px-3"
                        placeholder="Company Name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label
                        htmlFor="company_description"
                        className="block text-gray-700 font-bold mb-2"
                        >Company Description</label
                        >
                        <textarea
                        id="company_description"
                        name="company_description"
                        className="border rounded w-full py-2 px-3"
                        rows="4"
                        placeholder="What does your company do?"
                        value={companyDescription}
                        onChange={(e) => setCompanyDescription(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label
                        htmlFor="contact_email"
                        className="block text-gray-700 font-bold mb-2"
                        >Contact Email</label
                        >
                        <input
                        type="email"
                        id="contact_email"
                        name="contact_email"
                        className="border rounded w-full py-2 px-3"
                        placeholder="Email address for applicants"
                        required
                        value={companyContactEmail}
                        onChange={(e) => setCompanyContactEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                        htmlFor="contact_phone"
                        className="block text-gray-700 font-bold mb-2"
                        >Contact Phone</label
                        >
                        <input
                        type="tel"
                        id="contact_phone"
                        name="contact_phone"
                        className="border rounded w-full py-2 px-3"
                        placeholder="Optional phone for applicants"
                        value={companyContactPhone}
                        onChange={(e) => setCompanyContactPhone(e.target.value)}
                        />
                    </div>

                    <div>
                        <button
                        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                        type="submit"
                        >
                        Update job
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default EditJobPage