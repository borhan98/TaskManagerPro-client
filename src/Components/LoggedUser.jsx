import useAuth from "../Hooks/useAuth";

const LoggedUser = () => {
  const { user } = useAuth();
  return (
    <div className="flex flex-col gap-4 items-center">
      <figure className="w-10 md:w-14 lg:w-20 h-10 md:h-14 lg:h-20 rounded-full overflow-hidden">
        <img
          className="w-full h-full"
          src={user?.photoURL ? user.photoURL : "https://i.ibb.co/JCVpNzQ/user.jpg"}
          alt="User Profile"
        />
      </figure>
      <div>
        <h3 className="text-center text-sm md:text-lg font-medium">{user?.displayName}</h3>
      </div>
    </div>
  );
};

export default LoggedUser;
