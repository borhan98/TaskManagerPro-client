import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

const AddTask = ({ refetch }) => {
  const [priorityErr, setPriorityErr] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Handle add new task
  const onSubmit = (data, e) => {
    if (data.priority === "Select One") {
      return setPriorityErr("Please select task priority");
    }
    setPriorityErr("");
    const newTask = {
      user_name: user?.displayName,
      user_email: user?.email,
      task_title: data.title,
      task_description: data.description,
      deadline: data.deadline,
      priority: data.priority,
      list: "to-do",
    };
    // Add new task
    axiosSecure
      .post("/tasks", newTask)
      .then((res) => {
        if (res.data.insertedId) {
          refetch();
          e.target.reset();
          toast.success("Task added", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="modal-box bg-[#000000a9] py-10">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost text-[#fff] absolute right-2 top-2">
          ✕
        </button>
      </form>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Task Title field */}
        <div className="flex gap-1 flex-col mb-6">
          <label htmlFor="email" className="text-zinc-200">
            Task Title
          </label>
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="Enter task title"
            className="py-2 md:py-3 px-2 md:px-4 rounded-md focus:outline-none "
          />
          {errors.title && (
            <span className="text-red-500 text-sm">
              Task title is required!
            </span>
          )}
        </div>
        {/* Task Priority field */}
        <div className="flex gap-1 flex-col mb-6">
          <label htmlFor="email" className="text-zinc-200">
            Task priority
          </label>
          <select
            className="py-2 md:py-3 px-2 md:px-4 rounded-md focus:outline-none "
            {...register("priority", { required: true })}
          >
            <option value={null}>Select One</option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
          {/* {errors.priority && ( */}
          <span className="text-red-500 text-sm">{priorityErr}</span>
          {/* )} */}
        </div>
        {/* Task Deadline field */}
        <div className="flex gap-1 flex-col mb-6">
          <label htmlFor="email" className="text-zinc-200">
            Task deadline
          </label>
          <input
            {...register("deadline", { required: true })}
            type="date"
            className="py-2 md:py-3 px-2 md:px-4 rounded-md focus:outline-none "
          />
          {errors.deadline && (
            <span className="text-red-500 text-sm">
              Task deadline is required!
            </span>
          )}
        </div>
        {/* Task Description field */}
        <div className="flex gap-1 flex-col mb-6">
          <label htmlFor="description" className="text-zinc-200">
            Task description
          </label>
          <textarea
            {...register("description", { required: true })}
            className="py-2 md:py-3 px-2 md:px-4 rounded-md focus:outline-none "
            cols="10"
            placeholder="Task descripton"
            rows="2"
          ></textarea>
          {errors.description && (
            <span className="text-red-500 text-sm">
              Task description is required!
            </span>
          )}
        </div>
        {/* Add Task Button */}
        <button
          type="submit"
          className="py-2 md:py-3 px-2 md:px-4 rounded-md capitalize border w-full text-zinc-200 font-medium hover:tracking-wider duration-300"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
AddTask.propTypes = {
  refetch: PropTypes.func.isRequired,
};
