import BannerPhoto from "../../assets/Checklist.jpg";

const AboutBanner = () => {
  return (
    <div className="container mx-auto px-2 lg:px-0 min-h-[70vh] flex flex-col md:flex-row gap-4 items-center py-6">
      <div className="order-2 md:order-1 flex-1">
        <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-[#3F3F3F] ">
          Welcome to TaskManagerPro
        </h2>
        <p className="text-[12px] md:text-base text-zinc-600 my-4">
          At TaskManagerPro, we believe in the power of effective habit
          management to transform lives. Our mission is to provide a seamless
          and intuitive platform that empowers users to take control of their
          daily routines and build habits that lead to lasting success.
        </p>
      </div>
      <figure className="order-1 md:order-2 flex-1">
        <img src={BannerPhoto} alt="Banner Photo" />
      </figure>
    </div>
  );
};

export default AboutBanner;
