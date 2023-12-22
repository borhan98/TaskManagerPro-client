import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const EditTask = () => {
  const task = useLoaderData();
  const { _id, task_title, task_description, priority, deadline } = task;
  const [priorityErr, setPriorityErr] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const onSubmit = (data) => {
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
    // Update task
    axiosSecure
      .put(`/tasks/${_id}`, newTask)
      .then((result) => {
        if (result.data.modifiedCount) {
          toast.success("Task Updated", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        } else {
          Swal.fire({
            icon: "info",
            text: "You didn't modify anything!",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="my-10 mx-1 md:mx-4">
      <h2 className="text-center text-xl md:text-2xl font-semibold">
        Update the Task
      </h2>
      <div className="divider"></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-base-200 shadow-md p-4 rounded-md"
      >
        {/* Task Title field */}
        <div className="flex gap-1 flex-col mb-6">
          <label htmlFor="email" className="text-zinc-700">
            Task Title
          </label>
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="Enter task title"
            defaultValue={task_title}
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
          <label htmlFor="email" className="text-zinc-700">
            Task priority
          </label>
          <select
            defaultValue={priority}
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
          <label htmlFor="email" className="text-zinc-700">
            Task deadline
          </label>
          <input
            {...register("deadline", { required: true })}
            type="date"
            defaultValue={deadline}
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
          <label htmlFor="description" className="text-zinc-700">
            Task description
          </label>
          <textarea
            defaultValue={task_description}
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
          className="py-2 md:py-3 px-2 md:px-4 rounded-md bg-[#E96A04] capitalize border w-full text-white font-medium hover:tracking-wider duration-300"
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditTask;
