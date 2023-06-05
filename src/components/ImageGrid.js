import React from 'react';

const images = [
  {
    url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    link: '/page1',
  },
  {
    url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    link: '/page2',
  },
  {
    url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    link: '/page3',
  },
  {
    url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
    link: '/page4',
  },
];

function ImageGrid() {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('load', () => {
      setLoaded(true);
    });
  }, []);

  return loaded ? (
    <div>
<div className="grid grid-cols-2 gap-5 mx-auto max-w-6xl" style={{marginBottom: '20px'}}>

      {images.map((image, index) => (
        <a href={image.link} key={index}>
          <div className="flex justify-center mx-auto">
            <img
              className="h-auto max-w-full rounded-lg"
              src={image.url}
              alt=""
            />
          </div>
        </a>
      ))}
    </div>
    </div>
  ) : null;
}

export default ImageGrid;
