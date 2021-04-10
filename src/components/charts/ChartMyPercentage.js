import { printIntrospectionSchema } from "graphql";
import React from "react";
import { VictoryChart, VictoryGroup, VictoryPie,  VictoryLabel } from "victory";
import { theme } from "./victory-theme";

const ChartMyPerformance = (props) => {
  const data = [
    { x: " ", y: 21},
    { x: " ", y: 79}
  ];

  const findColor = (index) => {
    console.log(index);
    return index === 0 ? "#059669" : "#D1FAE5";
  }

  // Home and date 
  return (
    <div className="max-w-md">
      <VictoryGroup
        data={data}
        theme={theme}
       >
          <text x="43%" y="54%" className="text-3xl text-center font-bold">{props.percentage}%</text>   
          <VictoryPie            
            standAlone={false}           
            innerRadius={80}    
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

export default ChartMyPerformance;