import React from "react";

const Avatar = (props) => {
  return (
    <div className="flex items-center">
      <img className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src={props.user.picture} alt={props.user.name} />
      { props.showName && (
        <span className="flex-1 flex flex-col min-w-0">
          <span className="pl-2 text-gray-900 text-sm font-medium truncate">{props.user.name}</span>
        </span>
      )}
      
    </div>
  );

};

export default Avatar;