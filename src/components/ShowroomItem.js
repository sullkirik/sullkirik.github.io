import React, { useState } from 'react';

function ShowroomItem() {
  const [featuredImage, setFeaturedImage] = useState('');
  const [thumbnailImages, setThumbnailImages] = useState([
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg'
    
  ]);

  const handleThumbnailClick = (thumbnail) => {
    setFeaturedImage(thumbnail);
  }

  const handleAddImage = (event) => {
    const newThumbnail = event.target.value;
    setThumbnailImages([...thumbnailImages, newThumbnail]);
  }

  return (
    <div className="text-center">
      <div className="grid gap-4">
        {featuredImage ? (
          <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-10 z-50 flex justify-center items-center">
            <img className="max-w-screen-xl max-h-screen mx-auto" src={featuredImage} alt="" onClick={() => setFeaturedImage('')} />
          </div>
        ) : (
          <></>
        )}
        <div className="grid grid-cols-5 gap-4">
          {thumbnailImages.map((thumbnail, index) => (
            <div key={index} onClick={() => handleThumbnailClick(thumbnail)}>
              <img className="h-auto max-w-full rounded-lg cursor-pointer object-contain mx-auto" src={thumbnail} alt="" />
            </div>
          ))}
          <div>
            <input type="text" placeholder="Add new image URL" onChange={handleAddImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowroomItem;
