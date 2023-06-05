import React from 'react';
import { Link } from 'react-router-dom';
import ledData from '../DB/LedData.json';


function LedDisplay() {
  return (
    <div className="flex flex-wrap justify-center">
      {ledData.map((post, index) => (
        <Link
          key={index}
          to={`/led/${post.id}`} // id를 path parameter로 추가
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-2 my-2"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={post.imageSrc}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.description}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Display Size: {post.displaySize}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Display Ratio: {post.displayRatio}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Product Name: {post.productName}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default LedDisplay;
