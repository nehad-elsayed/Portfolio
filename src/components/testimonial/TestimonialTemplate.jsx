const TestimonialTemplate = ({ testimonial }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="text-center mx-auto">
        <p className="dark:text-gray-300 text-xs sm:text-[14px] md:text-[18px] pb-5 sm:pb-10 md:pb-14 max-w-144.25 text-soft-dark">
          {testimonial?.message}
        </p>
      </div>
      <div className="text-center">
        <p className="text-[14px] sm:text-lg font-medium pb-6 dark:text-gray-300">
          “{testimonial?.quote}”
        </p>
        <div className="mx-auto">
          <p className="text-[14px] sm:text-[16px] md:text-lg font-medium mb-2 dark:text-gray-300">
            {testimonial?.name}
          </p>
          <p className="text-[14px] md:text-[16px] font-light dark:text-gray-300">
            {testimonial?.designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialTemplate;
