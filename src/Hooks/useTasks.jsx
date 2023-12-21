import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useTasks = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tasks?email=${user?.email}`);
      return res.data;
    },
  });

  return [tasks, refetch];
};

export default useTasks;
