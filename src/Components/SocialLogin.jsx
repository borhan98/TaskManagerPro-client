import { FaGithub, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useAuth();
  const navigate = useNavigate();

  // handle google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate("/dashboard");
        toast.success("Logged in successful", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // handle github login
  const handleGithubLogin = () => {
    githubLogin()
      .then(() => {
        navigate("/dashboard");
        toast.success("Logged in successful", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex gap-4 justify-center">
      <span
        onClick={handleGoogleLogin}
        className="p-2 rounded-full bg-white text-[#E96A04] text-2xl cursor-pointer"
      >
        <FcGoogle />
      </span>
      <span
        onClick={handleGithubLogin}
        className="p-2 rounded-full bg-white  text-2xl cursor-pointer"
      >
        <FaGithub />
      </span>
      <span className="p-2 rounded-full bg-white text-[#1DA1F2] text-2xl cursor-pointer">
        <FaTwitter />
      </span>
    </div>
  );
};

export default SocialLogin;
