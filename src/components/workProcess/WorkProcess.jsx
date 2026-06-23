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
      className="content grid lg:grid-cols-1 lg:items-center px-2 py-5 md:py-10 lg:py-25 xl:py-35 max-xxl:px-4"
      id="work-process"
    >
      <h4 className="section-title text-center my-5 max-xl:text-center">
        Work Process
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-end my-2 w-fit mx-auto">
        {workStepData.map((data) => {
          return (
            <WorkSteps
              data={data}
              style={`mt-3 p-4 sm:p-8 bg-white aspect-auto sm:max-w-78 ${
                data?.id % 2 == 0 ? "md:ms-3 md:mt-6 " : "xs:mb-6"
              }`}
              // style={`mt-3 p-4 sm:p-8 bg-white aspect-auto sm:max-w-78 md:ms-2`}
              key={data?.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;
