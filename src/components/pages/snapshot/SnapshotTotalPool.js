import React from "react";
import PageSection from "../../ui-elements/PageSection";
import CardWithTitle from "../../ui-elements/CardWithTitle";
import ChartMyPercentage from "../../charts/ChartMyPercentage";

const SnapshotTotalPool = () => {
  // Total balance and percentage donut chart
  return (
    <PageSection title="Total Pool">
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">        
        <div>
          <CardWithTitle title="Combined balance">
            <div className="text-2xl font-medium text-gray-900">
              $180,023.13 <span className="text-gray-500">USD</span>
            </div>

            <div className="mt-6 text-sm font-medium text-gray-500 truncate">My balance</div>
            <div className="text-2xl font-medium text-gray-900">$30,659.45 <span className="text-gray-500">USD</span></div>

            <div className="mt-6 text-sm font-medium text-gray-500 truncate">My percentage</div>
            <ChartMyPercentage percentage="21"></ChartMyPercentage>

            
          </CardWithTitle>
        </div>
      </div>
    </PageSection>
  );
};

export default SnapshotTotalPool;