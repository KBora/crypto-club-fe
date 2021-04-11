import React from "react";

const FormatCurrency = (props) => {
  // Round to 2 decimal places and add $

  // TODO: Check these functions
  const roundTwoDecimals = (number) => {
    return Math.round((number + Number.EPSILON) * 100) / 100
  }

  const addSeparators = (x, separator) => {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return parts.join(".");
  }

  return (
    <>
      ${addSeparators(roundTwoDecimals(props.number), ',')} <span className="text-gray-500">{props.currency}</span>
    </>
  );
};

export default FormatCurrency;