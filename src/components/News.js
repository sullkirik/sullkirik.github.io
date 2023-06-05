import React from 'react';

const acquisitions = [
  {
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
  },
  {
    title: "Another noteworthy acquisition",
    description: "This is another big acquisition that happened in 2021."
  },
  {
    title: "One more noteworthy acquisition",
    description: "Here is one more notable acquisition that happened this year."
  }
];

function News() {
  return (
    <div>
      {acquisitions.map(acquisition => (
        <a key={acquisition.title} href="#" className="block max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center my-6">
          <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{acquisition.title}</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">{acquisition.description}</p>
        </a>
      ))}
    </div>
  );
}

export default News;
