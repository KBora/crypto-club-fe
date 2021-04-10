import React from "react";

const SnapshotTitle = () => {
  // Home and date
  return (
    <div className="bg-gray-100 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0">
          {/* <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            Home
          </h1>     */}
          <h2 className="text-2xl font-medium leading-1 text-gray-900 sm:truncate">
            8 April 2021
          </h2>      
        </div>
      </div>
  );
};

export default SnapshotTitle;