import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";

// eslint-disable-next-line react/prop-types
const AddJobPage = ({ addJobSubmit }) => {
  const navigate = useNavigate();
  const submitForm = (values) => {
    const newJob = {
      title: values.title,
      type: values.type,
      description: values.description,
      location: values.location,
      salary: values.salary,
      company: {
        name: values.company.name,
        description: values.company.description,
        phone: values.company.phone,
        email: values.company.email
      },
    };
    console.log(newJob);

    addJobSubmit(newJob);

    toast.success("Job has been added successfully");

    navigate('/jobs');
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      title: "",
      type: "",
      description: "",
      location: "",
      salary: "",
      company: {
        name: "",
        description: "",
        phone: "",
        email: ""
      }
    },
    validationSchema: basicSchema,
    onSubmit: submitForm
  });

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Job Type</label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                value={values.type}
                onChange={handleChange}
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
              {errors.type && touched.type && <p className="text-red-500">{errors.type}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Job Listing Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Beautiful Apartment In Miami"
                value={values.title}
                onChange={handleChange}
              />
              {errors.title && touched.title ? (<p className="text-red-500">{errors.title}</p>) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
                value={values.description}
                onChange={handleChange}
              ></textarea>
              {errors.description && touched.description && <p className="text-red-500">{errors.description}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="salary" className="block text-gray-700 font-bold mb-2">Salary</label>
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                value={values.salary}
                onChange={handleChange}
              >
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - $100K">$90K - $100K</option>
                <option value="$100K - $125K">$100K - $125K</option>
                <option value="$125K - $150K">$125K - $150K</option>
                <option value="$150K - $175K">$150K - $175K</option>
                <option value="$175K - $200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
              {errors.salary && touched.salary ? (<p className="text-red-500">{errors.salary}</p>) : null}
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>Location</label>
              <input
                type='text'
                id='location'
                name='location'
                className='border rounded w-full py-2 px-3 mb-2'
                value={values.location}
                onChange={handleChange}
                placeholder='Company Location'
              />
              {errors.location && touched.location ? (<p className="text-red-500">{errors.location}</p>) : null}
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label htmlFor="company_name" className="block text-gray-700 font-bold mb-2">Company Name</label>
              <input
                type="text"
                id="company_name"
                name="company.name"
                className="border rounded w-full py-2 px-3"
                value={values.company.name}
                onChange={handleChange}
                placeholder="Company Name"
              />
              {errors.company?.name && touched.company?.name ? (<p className="text-red-500">{errors.company.name}</p>) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="company_description" className="block text-gray-700 font-bold mb-2">Company Description</label>
              <textarea
                id="company_description"
                name="company.description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"
                value={values.company.description}
                onChange={handleChange}
              ></textarea>
              {errors.company?.description && touched.company?.description ? (<p className="text-red-500">{errors.company.description}</p>) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="company_email" className="block text-gray-700 font-bold mb-2">Contact Email</label>
              <input
                type="email"
                id="company_email"
                name="company.email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                value={values.company.email}
                onChange={handleChange}
              />
              {errors.company?.email && touched.company?.email ? (<p className="text-red-500">{errors.company.email}</p>) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="company_phone" className="block text-gray-700 font-bold mb-2">Contact Phone</label>
              <input
                type="text"
                id="company_phone"
                name="company.phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Phone number for applicants"
                value={values.company.phone}
                onChange={handleChange}
              />
              {errors.company?.phone && touched.company?.phone ? (<p className="text-red-500">{errors.company.phone}</p>) : null}
            </div>

            <div className="flex justify-between mt-6">
              <button
                className="bg-indigo-500 text-white rounded px-4 py-2"
                type="submit"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddJobPage;
