import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import BannerPhoto from "../../assets/Banner.jpg";

const Banner = () => {
  return (
    <div className="container mx-auto px-2 lg:px-0 min-h-[90vh] flex gap-4 items-center">
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3F3F3F] ">
          Elevate Your Productivity, Simplify Your Life
        </h2>
        <p className="text-sm md:text-base text-zinc-600 my-4">
          Streamline your tasks effortlessly with TaskManagerPro — your
          all-in-one solution for seamless task management. Stay organized,
          boost productivity, and achieve your goals with ease.
        </p>
        <Link to={"/login"}>
          <span className="py-2 md:py-3 px-4 w-fit border border-[#E96A04] rounded-md flex gap-4 items-center bg-[#E96A04] text-white hover:bg-transparent hover:text-[#3F3F3F] duration-300 font-bold ">
            Let&#39;s Explore <FaLongArrowAltRight />
          </span>
        </Link>
      </div>
      <figure className="flex-1">
        <img src={BannerPhoto} alt="Banner Photo" />
      </figure>
    </div>
  );
};

export default Banner;
