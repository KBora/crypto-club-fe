import React from "react";
import { VictoryChart, VictoryBar, VictoryAxis, VictoryLabel } from "victory";
import { theme } from "./victory-theme";

const ChartPerformance = () => {
  const data = [
    {time: "Total Deposits", usd: 13000},
    {time: "Current Balance", usd: 30659.45},
  ];

  // Home and date
  return (
    <div className="max-w-md">
      <VictoryChart
        theme={theme}
        domainPadding={100}
        width={350}
      >
        <VictoryAxis        
          tickFormat={["Total Deposits", "Current Balance"]}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
        

        <VictoryBar
          data={data} 
          x="time"
          y="usd"
          labels={true}
          labelComponent={
            <VictoryLabel
              text={({datum}) => `$${datum.usd.toString()}`}   
              dy={-20}           
              verticalAnchor="start"
            />
          }
          cornerRadius={{topLeft: 4, topRight: 4}}          
        >
        </VictoryBar>
      </VictoryChart>
    </div>
  );
};

export default ChartPerformance;