import { MdDelete, MdEdit, MdOutlineDateRange } from "react-icons/md";
import { FcHighPriority } from "react-icons/fc";
import PropTypes from "prop-types";

const Task = ({ task }) => {
  const { task_title, task_description, deadline, priority } = task;
  return (
    <div className="bg-base-200 rounded-md p-4 flex flex-col border border-base-200 ">
      <h4 className="text-xl font-semibold text-zinc-700 grow">{task_title}</h4>
      <p className="my-4 grow">{task_description}</p>
      <p className="flex items-center gap-2 grow">
        <MdOutlineDateRange /> <span className="mt-1">{deadline}</span>
      </p>
      <div className="flex justify-between items-center">
        <p className="flex items-center gap-2 py-1 px-2 border border-[#E96A04] rounded-md w-fit mt-2 ">
          <FcHighPriority /> <span className="mt-1">{priority}</span>
        </p>
        <p className="flex gap-2 text-xl items-start pt-1 ">
          <button className="border border-[#E96A04] p-2 rounded-md text-[#E96A04] ">
            <MdEdit />
          </button>
          <button className="border border-[#E96A04] p-2 rounded-md text-[#E96A04] ">
            <MdDelete />
          </button>
        </p>
      </div>
    </div>
  );
};

export default Task;
Task.propTypes = {
  task: PropTypes.object.isRequired,
};
