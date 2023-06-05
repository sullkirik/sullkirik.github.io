import React from 'react';

function SmartSolutionVideo() {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      <video className="w-96" controls style={{ margin: "20px" }}>
        <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video className="w-96" controls style={{ margin: "20px" }}>
        <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video className="w-96" controls style={{ margin: "20px" }}>
        <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default SmartSolutionVideo;
