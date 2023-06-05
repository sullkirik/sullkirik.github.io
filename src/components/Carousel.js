import { useState, useEffect } from 'react';

const images = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const promises = images.map((image) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = image;
          img.onload = () => resolve();
        });
      });

      await Promise.all(promises);
      setLoaded(true);
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (loaded) {
      const interval = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, loaded]);

  const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  const nextIndex = (currentIndex + 1) % images.length;

  if (!loaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center">
      <img
        src={images[prevIndex]}
        className="mx-auto transition-opacity duration-1500 ease-in-out opacity-0 absolute"
        alt="slide"
      />
      <img
        src={images[currentIndex]}
        className="mx-auto transition-opacity duration-1500 ease-in-out opacity-100 relative"
        alt="slide"
      />
      <img
        src={images[nextIndex]}
        className="mx-auto transition-opacity duration-1500 ease-in-out opacity-0 absolute"
        alt="slide"
      />
    </div>
  );
}

export default Carousel;
