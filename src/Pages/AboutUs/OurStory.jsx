import BannerPhoto from "../../assets/story.jpg";

const OurStory = () => {
  return (
    <div className="container mx-auto px-2 lg:px-10 min-h-[70vh] flex flex-col md:flex-row gap-4 items-center py-6 bg-base-200 rounded-sm ">
      <div className="order-1 md:order-2 flex-1">
        <h2 className="text-xl md:text-3xl font-bold text-[#3F3F3F] ">
          Our Story
        </h2>
        <p className="text-[12px] md:text-base text-zinc-600 my-4">
          Founded in 2022, TaskManagerPro was born out of a shared passion for
          productivity and personal development. Our diverse team of experts,
          including John Doe, envisioned a tool that goes beyond traditional
          task management—something that inspires users to cultivate positive
          habits for a healthier, more fulfilling lifestyle.
        </p>
      </div>
      <figure className="order-2 md:order-1 flex-1">
        <img src={BannerPhoto} alt="Banner Photo" />
      </figure>
    </div>
  );
};

export default OurStory;
