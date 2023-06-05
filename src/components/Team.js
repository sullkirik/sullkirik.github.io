import React from "react";

const Team = () => {

  const teamMembers = [
    {
      name: "Bonnie Green",
      position: "Developer at Open AI",
      imageUrl: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
      quoteTitle: "Very easy this was to integrate",
      quoteText: "If you care for your time, I hands down would go with this.",
    },
    {
      name: "Chris Lee",
      position: "Designer at Google",
      imageUrl: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
      quoteTitle: "Absolutely amazing product",
      quoteText: "I'm blown away by the quality of the product and the support.",
    },
    {
      name: "Chris Park",
      position: "Designer at Google",
      imageUrl: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
      quoteTitle: "Absolutely amazing product",
      quoteText: "I'm blown away by the quality of the product and the support.",
    },

  ];

  return (
    <div>
      <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-3">
        {teamMembers.map((member) => (
          <figure
            key={member.name}
            className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700"
          >
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {member.quoteTitle}
              </h3>
              <p className="my-4">{member.quoteText}</p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <img
                className="rounded-full"
                src={member.imageUrl}
                alt="profile picture"
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />

              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>{member.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {member.position}
                </div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Team;
