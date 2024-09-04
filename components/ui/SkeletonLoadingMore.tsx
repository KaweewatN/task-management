"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonLoadingMore() {
  return (
    <div className="flex flex-col justify-center px-10">
      {Array.from({length: 2}).map((____, index) => (
        <div key={index} className="mt-3">
          <h2 className="text-md font-bold">
            <Skeleton width={100} />
          </h2>
          <ul className="flex flex-col space-y-5 py-3">
            <li className="bg-white rounded-lg flex justify-between p-3">
              <div>
                <div className="flex space-x-2">
                  <h3>
                    <Skeleton width={20} />
                  </h3>
                  <div className="flex flex-col">
                    <h3 className="text-md font-medium leading-5 max-w-64">
                      <Skeleton width={50} />
                    </h3>
                    <p className="text-sm leading-5 lg:w-96">
                      <Skeleton width={225} />
                    </p>
                    <p className="text-sm leading-5 lg:w-96">
                      <Skeleton width={225} />
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm">
                <Skeleton width={30} />
              </p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
