import React from "react";
import { useParams } from 'react-router-dom';
import LedData from '../DB/LedData.json';

function LedDetail() {
  const { id } = useParams();
  const post = LedData.find((post) => post.id === parseInt(id));

  return (
    <div>
      <div className="text-center">
      <div style={{ fontSize: "2rem" }}>
  {post.title}
</div>
  <img className="h-auto max-w-xl rounded-lg mx-auto" src={post.imageSrc} alt={post.imageAlt} />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full max-w-screen-xl mx-auto overflow-x-auto text-sm text-left text-blue-100 dark:text-blue-100 p-10">

          <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                ディスプレイのサイズと解像度
              </th>
              <th scope="col" className="px-6 py-3">
                ディスプレイの比率
              </th>
              <th scope="col" className="px-6 py-3">
                製品名
              </th>                
            </tr>
          </thead>
          <tbody>
            <tr className="bg-blue-500 border-b border-blue-400">
              <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                {post.displaySize}
              </th>
              <td className="px-6 py-4">
                {post.displayRatio}
              </td>
              <td className="px-6 py-4">
                {post.productName}
              </td>                
            </tr>            
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
}

export default LedDetail;
