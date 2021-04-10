import React from "react";

const Card = (props) => {
  // Generic card with rounded radius and shadow
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="ml-5 w-0 flex-1">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;