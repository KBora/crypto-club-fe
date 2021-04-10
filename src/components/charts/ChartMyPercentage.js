import React from "react";
import { VictoryGroup, VictoryPie } from "victory";
import { theme } from "./victory-theme";

const ChartMyPercentage = (props) => {
  const data = [
    { x: "21%", y: 21},
    { x: " ", y: 79}
  ];

  const findColor = (index) => {
    console.log(index);
    return index === 0 ? "#059669" : "#D1FAE5";
  }

  // Home and date 
  return (
    <div className="max-w-md">
      <h4 className="text-2xl font-medium">
        {props.percentage}%
      </h4>   
      <VictoryGroup
        theme={theme}>
      <VictoryPie            
        standAlone={false}
        innerRadius={80} 
        data={data}   
        style={{
          data: {
            stroke: "#ffffff",
            strokeWidth: 2,
            fill: ({ index }) => findColor(index)
          }
        }} 
      >          
      </VictoryPie>
      </VictoryGroup>
    </div>
  );
};

export default ChartMyPercentage;