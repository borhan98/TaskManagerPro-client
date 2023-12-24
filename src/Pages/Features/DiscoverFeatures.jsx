const DiscoverFeatures = () => {
  return (
    <div className="container mx-auto px-2 lg:px-0 mb-20">
      {/* Section title */}
      <div className="mb-10 mt-20 max-w-xl mx-auto text-center">
        <h3 className="text-xl md:text-3xl font-semibold text-zinc-700 mb-2 md:mb-4 capitalize">
          Discover TaskManagerPro Features
        </h3>
        <p className="text-sm md:text-base text-zinc-600">
          Unlock productivity with TaskManagerPro&#39;s key features – from easy
          task management to habit tracking and seamless collaboration.
          Experience personalized customization, timely reminders, and
          insightful analytics. Discover a smarter way to organize your life.
        </p>
      </div>
      {/* Section Content */}
      {/* Question 1 */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow rounded-md bg-base-200 border-b focus:bg-[#F96A04] focus:text-white"
      >
        <div className="collapse-title text-xl font-medium">
          1. Task Creation and Management.
        </div>
        <div className="collapse-content">
          <p>
            Effortlessly create, edit, and delete tasks with our intuitive
            interface. Stay organized by categorizing tasks, setting priorities,
            and adding due dates.
          </p>
        </div>
      </div>
      {/* Question 2 */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow rounded-md bg-base-200 border-b focus:bg-[#F96A04] focus:text-white"
      >
        <div className="collapse-title text-xl font-medium">
          2. Habit Tracking
        </div>
        <div className="collapse-content">
          <p>
            Form good habits by utilizing our habit tracking feature. Monitor
            your daily routines and receive motivational insights to help you
            stay on track.
          </p>
        </div>
      </div>
      {/* Question 3 */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow rounded-md bg-base-200 border-b focus:bg-[#F96A04] focus:text-white"
      >
        <div className="collapse-title text-xl font-medium">
          3. Reminders and Notifications
        </div>
        <div className="collapse-content">
          <p>
            Never miss a deadline again! Set personalized reminders for your
            tasks and receive notifications via email or push alerts, ensuring
            you stay productive.
          </p>
        </div>
      </div>
      {/* Question 4 */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow rounded-md bg-base-200 border-b focus:bg-[#F96A04] focus:text-white"
      >
        <div className="collapse-title text-xl font-medium">
          4. Collaborative Work
        </div>
        <div className="collapse-content">
          <p>
            Boost productivity by collaborating with team members. Share tasks,
            assign responsibilities, and track progress seamlessly within
            TaskManagerPro.
          </p>
        </div>
      </div>
      {/* Question 5 */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow rounded-md bg-base-200 border-b focus:bg-[#F96A04] focus:text-white"
      >
        <div className="collapse-title text-xl font-medium">5. Integration</div>
        <div className="collapse-content">
          <p>
            Sync your tasks with popular calendar apps and enhance your
            workflow. TaskManagerPro seamlessly integrates with productivity
            tools like Slack, keeping you in control.
          </p>
        </div>
      </div>
      {/* Question 6 */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow rounded-md bg-base-200 border-b focus:bg-[#F96A04] focus:text-white"
      >
        <div className="collapse-title text-xl font-medium">
          5. Accessibility and Compatibility
        </div>
        <div className="collapse-content">
          <p>
            Access TaskManagerPro on the go! Our platform is designed to be
            accessible across devices, ensuring you can manage your tasks
            anytime, anywhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscoverFeatures;
