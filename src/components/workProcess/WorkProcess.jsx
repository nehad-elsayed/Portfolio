import WorkSteps from "./WorkSteps";
import Research from "../../assets/icons/Research.svg";
import Strategy from "../../assets/icons/Planning.svg";
import Execution from "../../assets/icons/Execution.svg";
import Optimization from "../../assets/icons/Optimization.svg";
const workStepData = [
  {
    id: 1,
    title: "Research",
    description:
      "Analyzing market trends, competitors, and audience behavior to identify opportunities and define the right targeting strategy.",
    icon: `${Research}`,
  },
  {
    id: 2,
    title: "Strategy & Planning",
    description:
      "Defining clear objectives, selecting the right channels, allocating budgets, and building a media plan aligned with business goals.",
    icon: `${Strategy}`,
  },
  {
    id: 3,
    title: "Execution",
    description:
      "Launching and managing campaigns across digital platforms with strong tracking setup, A/B testing, and creative variations to maximize results.",
    icon: `${Execution}`,
  },

  {
    id: 4,
    title: "Optimization & Reporting",
    description:
      "Monitoring performance, optimizing campaigns in real time, scaling what works, and providing clear reports with actionable insights.",

    icon: `${Optimization}`,
  },
];

const WorkProcess = () => {
  return (
    <div
      className="content grid lg:grid-cols-2 lg:items-center px-2 py-5 md:py-10 lg:py-25 xl:py-35 max-xxl:px-4"
      id="work-process"
    >
      <div className="lg:pe-10 xl:pe-35.75 max-xs:mb-3 max-xl:mb-8">
        <p className="section-title max-xl:text-center">Work Process</p>
        <p className="mt-6 mb-4 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          Driven by data and powered by strategy, I create performance marketing
          campaigns that deliver measurable business growth. From market
          research to campaign optimization, every step is built on insights and
          testing — merging creativity with performance.
        </p>
        <p className="mt-6 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          I combine data-driven decision making with continuous optimization to
          build high-performing campaigns that maximize ROI and create scalable,
          sustainable results.
        </p>
      </div>

      <div className="grid xs:grid-cols-2 justify-end my-2 w-fit mx-auto ">
        {workStepData.map((data) => {
          return (
            <WorkSteps
              data={data}
              style={`max-xs:mt-3 p-4 sm:p-8 bg-white aspect-auto sm:max-w-78 ${
                data?.id % 2 == 0 ? "xs:ms-3 xs:mt-6 " : "xs:mb-6"
              }`}
              key={data?.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;
