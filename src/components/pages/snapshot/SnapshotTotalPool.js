import React from "react";
import PageSection from "../../ui-elements/PageSection";
import CardWithTitle from "../../ui-elements/CardWithTitle";

const SnapshotTotalPool = () => {
  // Total balance and percentage donut chart
  return (
    <PageSection title="Total Pool">
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">        
        <div>
          <CardWithTitle title="Total balance">
            <div className="text-lg font-medium text-gray-900">
              $180,023.13 <span className="text-gray-500">USD</span>
            </div>
          </CardWithTitle>
        </div>
        <div className="col-span-2">
          <CardWithTitle title="My percentage*">
            Donut chart goes here
          </CardWithTitle>
         </div>

      </div>
    </PageSection>
  );
};

export default SnapshotTotalPool;