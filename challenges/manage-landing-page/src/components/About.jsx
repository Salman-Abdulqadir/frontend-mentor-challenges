import React from "react";

const About = () => {
  const aboutContent = [
    {
      title: "Track company-wide progress",
      desc: `See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again`,
    },
    {
      title: "Advanced built-in reports",
      desc: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },
    {
      title: "Everything you need in one place",
      desc: `Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution`,
    },
  ];
  return (
    <div className="min-h-[80vh] flex items-center relative">
      <div className="flex items-start *:flex-1 justify-between gap-6 flex-col md:flex-row">
        <div className="space-y-6 text-center md:text-start">
          <h2 className="font-bold text-4xl">What's different about Manage?</h2>
          <p>
            Manage provides all the functionality your team needs, without the
            complexity. Our sortware Is tallor-made tor modern digital product
            teams.
          </p>
        </div>
        <div className="space-y-8">
          {aboutContent.map((content, index) => (
            <div className="flex gap-4 items-start" key={index}>
              <div className="py-2 px-6 bg-bright-orange text-white rounded-full hidden md:block">
                {index < 10 ? "0" + (index + 1) : index + 1}
              </div>
              <div className="space-y-4">
                <h3 className="font-bold hidden md:block">{content.title}</h3>
                <div className="flex bg-pale-orange space-x-2 pr-2 items-center md:hidden ">
                  <div className="py-2 px-6 bg-bright-orange text-white rounded-full">
                    {index < 10 ? "0" + (index + 1) : index + 1}
                  </div>
                  <h3 className="font-bold text-sm">{content.title}</h3>
                </div>
                <p>{content.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
