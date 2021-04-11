import React from "react";

const SnapshotTitle = (props) => {
  // Home and date
  return (
    <div className="bg-gray-100 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-medium leading-1 text-gray-900 sm:truncate">
            {props.timestamp}
          </h2>      
        </div>
      </div>
  );
};

export default SnapshotTitle;