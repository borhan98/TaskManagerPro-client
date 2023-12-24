import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Team = () => {
  return (
    <div className="py-20 bg-base-200 my-20">
      <div className="h-full container mx-auto px-2 lg:px-0 grid md:grid-cols-2 items-center gap-0 md:gap-6">
        <div className="max-w-[300px] md:max-w-full">
          {/* Banner title */}
          <h1 className="text-lg md:text-2xl lg:text-4xl font-bold capitalize">
            Meet the Team
          </h1>
          {/* banner description */}
          <p className="text-[12px] md:text-base text-zinc-600 my-4">
            Get to know the passionate minds behind TaskManagerPro. Our diverse
            team of visionaries, led by Co-Founders John Doe and Jane Smith,
            brings together expertise in product development, innovation, and a
            shared commitment to helping you succeed. Learn more about the faces
            driving the mission to elevate your habit management experience.
          </p>
        </div>
        <div className="max-w-[300px] md:max-w-full rounded-md p-10">
          <Carousel
            className="flex items-center"
            autoPlay={true}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            infiniteLoop={true}
          >
            {/* Member 1 */}
            <div className="flex flex-col items-center justify-center h-full ">
              <figure className="w-24 lg:w-44 h-24 lg:h-44 overflow-hidden border-4 border-[#E96A04] rounded-full ">
                <img
                  className="w-full h-full rounded-full"
                  src={"https://i.ibb.co/LSYJLnx/client4.jpg"}
                />
              </figure>
              <h4 className="text-2xl font-medium capitalize mt-4 mb-1">
                John Doe
              </h4>
              <small className="text-sm">Co-Founder and CEO</small>
              <div className="flex gap-4 text-white mt-2">
                <a className="p-2 bg-slate-500 rounded-full " href="#">
                  <FaFacebook />
                </a>
                <a className="p-2 bg-slate-500 rounded-full " href="#">
                  <FaTwitter />
                </a>
                <a className="p-2 bg-slate-500 rounded-full " href="#">
                  <FaLinkedin />
                </a>
              </div>
            </div>
            {/* Member 2 */}
            <div className="flex flex-col items-center justify-center h-full ">
              <figure className="w-24 lg:w-44 h-24 lg:h-44 overflow-hidden border-4 border-[#E96A04] rounded-full ">
                <img
                  className="w-full h-full rounded-full"
                  src={"https://i.ibb.co/W2SRZDV/client5.jpg"}
                />
              </figure>
              <h4 className="text-2xl font-medium capitalize mt-4 mb-1">
                Samantha Rodriguez
              </h4>
              <small className="text-sm">Customer Success Specialist</small>
              <div className="flex gap-4 text-white mt-2">
                <a className="p-2 bg-slate-500 rounded-full " href="#">
                  <FaFacebook />
                </a>
                <a className="p-2 bg-slate-500 rounded-full " href="#">
                  <FaTwitter />
                </a>
                <a className="p-2 bg-slate-500 rounded-full " href="#">
                  <FaLinkedin />
                </a>
              </div>
            </div>
            {/* Member 3 */}
            <div className="flex flex-col items-center justify-center h-full ">
              <figure className="w-24 lg:w-44 h-24 lg:h-44 overflow-hidden border-4 border-[#E96A04] rounded-full ">
                <img
                  className="w-full h-full rounded-full"
                  src={"https://i.ibb.co/M1byJfF/client2.jpg"}
                />
              </figure>
              <h4 className="text-2xl font-medium capitalize mt-4 mb-1">
                Michael Chang
              </h4>
              <small className="text-sm">Chief Technology Officer</small>
              <div className="flex gap-4 text-white mt-2">
                <a className="p-2 bg-slate-500 rounded-full " href="#">
                  <FaFacebook />
                </a>
                <a className="p-2 bg-slate-500 rounded-full " href="#">
                  <FaTwitter />
                </a>
                <a className="p-2 bg-slate-500 rounded-full " href="#">
                  <FaLinkedin />
                </a>
              </div>
            </div>
            {/* Member 4 */}
            <div className="flex flex-col items-center justify-center h-full ">
              <figure className="w-24 lg:w-44 h-24 lg:h-44 overflow-hidden border-4 border-[#E96A04] rounded-full ">
                <img
                  className="w-full h-full rounded-full"
                  src={"https://i.ibb.co/g4V2vc9/client6.jpg"}
                />
              </figure>
              <h4 className="text-2xl font-medium capitalize mt-4 mb-1">
                Jane Smith
              </h4>
              <small className="text-sm">Head of Product Development</small>
              <div className="flex gap-4 text-white mt-2">
                <a className="p-2 bg-slate-500 rounded-full " href="#">
                  <FaFacebook />
                </a>
                <a className="p-2 bg-slate-500 rounded-full " href="#">
                  <FaTwitter />
                </a>
                <a className="p-2 bg-slate-500 rounded-full " href="#">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Team;
