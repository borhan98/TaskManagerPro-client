import { MdDelete, MdEdit, MdOutlineDateRange } from "react-icons/md";
import { FcHighPriority } from "react-icons/fc";
import PropTypes from "prop-types";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Task = ({ task, refetch }) => {
  const { _id, task_title, task_description, deadline, priority } = task;
  const axiosSecure = useAxiosSecure();

  // handle delete task
  const handleDeleteTast = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/tasks/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              refetch();
              toast.success("Task", {
                style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff",
                },
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div className="bg-base-200 rounded-md p-4 flex flex-col border border-base-200 ">
      <h4 className="text-base md:text-xl font-semibold text-zinc-700 grow">
        {task_title}
      </h4>
      <p className="my-4 grow text-sm lg:text-base">{task_description}</p>
      <p className="flex items-center gap-2 grow">
        <MdOutlineDateRange /> <span className="mt-1">{deadline}</span>
      </p>
      <div className="flex justify-between items-center">
        <p className="flex items-center gap-2 py-1 px-2 border border-[#E96A04] rounded-md w-fit mt-2 ">
          <FcHighPriority /> <span className="mt-1">{priority}</span>
        </p>
        <p className="flex gap-2 text-xl items-start pt-1 ">
          <Link to={`/dashboard/editTasks/${_id}`}>
            <button className="border border-[#E96A04] p-2 rounded-md text-[#E96A04] ">
              <MdEdit />
            </button>
          </Link>
          <button
            onClick={() => handleDeleteTast(_id)}
            className="border border-[#E96A04] p-2 rounded-md text-[#E96A04] "
          >
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
  refetch: PropTypes.func.isRequired,
};
