import newsletterPhoto from "../../assets/newsletter.png";

const ContactUs = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center gap-4 px-10 py-14 mb-14 bg-base-200 rounded-md">
      <figure className="flex-1">
        <img className="w-full" src={newsletterPhoto} alt="Newsletter image" />
      </figure>
      <div className="flex-1 max-w-xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-semibold text-zinc-600 mb-4">
          Get In Touch
        </h3>
        <p className="text-zinc-600 mb-10 text-sm md:text-base">
          Have questions or feedback? Our team is here to help! Reach out to us
          for any inquiries, suggestions, or support. Connect with
          TaskManagerPro and let us assist you on your journey to enhanced
          productivity.
        </p>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="border px-2 py-4 rounded-md focus:outline-none focus:shadow-md w-full md:w-9/12"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="border px-2 py-4 rounded-md focus:outline-none focus:shadow-md w-full md:w-9/12"
              required
            />
          </div>
          <button className="bg-[#FF5200] py-2 px-3 w-full md:w-9/12 rounded-md text-white font-bold tracking-wider border border-[#FF5200] duration-300 hover:bg-transparent hover:text-zinc-600">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
