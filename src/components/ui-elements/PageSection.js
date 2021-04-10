import React from "react";


const PageSection = (props) => {
  // Section with heading and border below
  return (
    <div className="px-4 mt-6 sm:px-6 lg:px-8 border-b border-gray-200 pb-6">
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
          {props.title}
        </h2>
        {props.children}
    </div>
  );
};

export default PageSection;