import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import * as Yup from "yup";

const commonClass =
  "input input-lg border-0 border-b-2 focus:outline-none focus:placeholder:text-picto-primary placeholder:text-[15px] md:placeholder:text-lg focus:border-picto-primary border-[#E6E8EB] w-full rounded-none px-0";

const Form = () => {
  const initialValues = {
    name: "",
    email: "",
    location: "",
    budget: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be less than 50 characters")
      .matches(
        /^[a-zA-Z\s\u0600-\u06FF]+$/,
        "Name can only contain letters and spaces"
      )
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    location: Yup.string().required("Location is required"),
    budget: Yup.string().required("Budget is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });
  const onSubmit = async (values) => {
    try {
      // Sending email using EmailJS
      const result = await emailjs.send(
        "service_o46wj0l", // Service ID
        "template_5mp2r3b", // Template ID
        {
          to_email: "Abdelrahmanelsied7@gmail.com",
          name: values.name,
          email: values.email,
          location: values.location,
          budget: values.budget,
          subject: values.subject,
          message: values.message,
        },
        "LA1NIQehj9bp5XUMk"
      ); // Public Key

      console.log("Email sent successfully:", result);
      toast.success("Message sent successfully! I will contact you soon.");

      // Reset the form
      formik.resetForm();
    } catch (error) {
      toast.error("Error sending email. Please Try Again");
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div>
      <p className="text-[12px] xs:text-[14px] max-lg:text-center sm:text-lg font-normal text-soft-dark">
        I'm always open to discussing marketing projects or partnership
        opportunities.
      </p>
      <div className="mx-2">
        <form
          className="flex flex-col gap-4 mt-4"
          onSubmit={formik.handleSubmit}
        >
          <div className="">
            <label className="dark:text-picto-primary" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`dark:bg-[#201b2a] dark:text-white dark:rounded-md p-2 placeholder:text-sm placeholder:p-1.5 ${commonClass} ${
                formik.touched.name && formik.errors.name
                  ? "border-red-500"
                  : ""
              }`}
              required
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>
          <div className="">
            <label className="dark:text-picto-primary" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              name="email"
              onBlur={formik.handleBlur}
              value={formik.values.email}
              onChange={formik.handleChange}
              className={`${commonClass} dark:bg-[#201b2a] dark:text-white dark:rounded-md p-2 placeholder:text-sm placeholder:p-1.5`}
              required
            />
          </div>
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          )}
          <div className="">
            <label className="dark:text-picto-primary" htmlFor="location">
              Target Location
            </label>
            <input
              type="text"
              placeholder="EX. Egypt, USA, KSA, UAE, etc."
              id="location"
              name="location"
              onBlur={formik.handleBlur}
              value={formik.values.location}
              onChange={formik.handleChange}
              className={`${commonClass}  dark:bg-[#201b2a] dark:text-white dark:rounded-md p-2 placeholder:text-sm placeholder:p-1.5`}
              required
            />
          </div>
          {formik.touched.location && formik.errors.location && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.location}
            </p>
          )}
          <div className="">
            <label className="dark:text-picto-primary" htmlFor="budget">
              Budget
            </label>
            <input
              type="text"
              placeholder="EX. 300$/month etc."
              id="budget"
              name="budget"
              value={formik.values.budget}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className={`${commonClass} me-1 dark:bg-[#201b2a] dark:text-white dark:rounded-md p-2 placeholder:text-[10px] placeholder:p-1.5`}
              required
            />
          </div>
          {formik.touched.budget && formik.errors.budget && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.budget}</p>
          )}
          <div className="">
            <label className="dark:text-picto-primary" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              placeholder="Niche or Field"
              id="subject"
              name="subject"
              onBlur={formik.handleBlur}
              value={formik.values.subject}
              onChange={formik.handleChange}
              className={`me-1 ${commonClass} dark:bg-[#201b2a] dark:text-white dark:rounded-md p-2 placeholder:text-[10px] placeholder:p-1.5`}
              required
            />
          </div>
          {formik.touched.subject && formik.errors.subject && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.subject}</p>
          )}
          <div className="">
            <label className="dark:text-picto-primary" htmlFor="message">Message</label>
          <textarea
            placeholder="Your message to me . . . "
            id="message"
            label="Message"
            name="message"
            value={formik.values.message}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className={`${commonClass} min-h-[100px] resize-none dark:bg-[#201b2a] dark:text-white dark:rounded-md p-2 placeholder:text-[10px] placeholder:p-1.5`}
            required
          />
          </div>
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
          )}
          <button
            type="submit"
            className="btn gap-3 max-lg:mx-auto btn-primary rounded-sm mt-5 text-[13px] md:text-[16px] w-fit font-semibold lg:mt-12.5 p-4 "
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
