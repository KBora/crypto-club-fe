import React from "react";
import Card from "./Card";

const CardWithTitle = (props) => {
  // Card with title
  return (
    <Card>
      <dl>
        <dt className="text-sm font-medium text-gray-500 truncate">
          {props.title}
        </dt>
        <dd>
          {props.children}
        </dd>
      </dl>
    </Card>
  );
};

export default CardWithTitle;