import { FaGithub, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const SocialLogin = () => {
  return (
    <div className="flex gap-4 justify-center">
      <span className="p-2 rounded-full bg-white text-[#E96A04] text-2xl cursor-pointer">
        <FcGoogle />
      </span>
      <span className="p-2 rounded-full bg-white  text-2xl cursor-pointer">
        <FaGithub />
      </span>
      <span className="p-2 rounded-full bg-white text-[#1DA1F2] text-2xl cursor-pointer">
        <FaTwitter />
      </span>
    </div>
  );
};

export default SocialLogin;
