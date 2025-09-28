import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";


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
  const onSubmit = async (values) => {
    try {
      // Sending email using EmailJS
      const result = await emailjs.send(
        "service_pi5m2mg", // Service ID
        "template_i4ewjd9", // Template ID
        {
          to_email: "nehaadelsaied@gmail.com",
          from_name: values.name,
          from_email: values.email,
          location: values.location,
          budget: values.budget,
          subject: values.subject,
          message: values.message,
        },
        "z4GTM4LBEfrSAk39v"); // Public Key

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
    onSubmit,
  });

  return (
    <div>
      <p className="text-[12px] xs:text-[14px] max-lg:text-center sm:text-lg font-normal text-soft-dark">
        I'm always open to discussing product design work or partnership
        opportunities.
      </p>
      <div className="mx-2">
        <form
          className="flex flex-col gap-4 mt-4"
          onSubmit={formik.handleSubmit}
        >
          <input
            type="text"
            placeholder="Name*"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className={`${commonClass}`}
            required
          />
          <input
            type="email"
            placeholder="Email*"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className={`${commonClass}`}
            required
          />
          <input
            type="text"
            placeholder="Location*"
            name="location"
            value={formik.values.location}
            onChange={formik.handleChange}
            className={`${commonClass}`}
            required
          />

          <div className="flex max-xs:flex-col max-xs:gap-4">
            <input
              type="text"
              placeholder="Budget*"
              name="budget"
              value={formik.values.budget}
              onChange={formik.handleChange}
              className={`${commonClass} xs:w-[50%] me-5`}
              required
            />
            <input
              type="text"
              placeholder="Subject*"
              name="subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
              className={`${commonClass}`}
              required
            />
          </div>

          <textarea
            placeholder="Message*"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            className={`${commonClass} min-h-[100px] resize-none`}
            required
          />
          <button
            type="submit"
            className="btn gap-3 max-lg:mx-auto btn-primary rounded-sm mt-5 text-[13px] md:text-[16px] w-fit font-semibold lg:mt-12.5 p-2 md:px-4"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
