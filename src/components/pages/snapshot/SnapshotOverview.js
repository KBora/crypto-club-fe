import React from "react";
import PageSection from "../../ui-elements/PageSection";
import Card from "../../ui-elements/Card";
import CardWithTitle from "../../ui-elements/CardWithTitle";

const SnapshotOverview = () => {
  // Current balance, profit and ROI
  return (
    <PageSection title="Overview">
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

        <CardWithTitle title="Current balance">
          <div className="text-lg font-medium text-gray-900">
            $30,659.45 <span className="text-gray-500">USD</span>
          </div>
        </CardWithTitle>

        <CardWithTitle title="Profit">        
          <div class="text-lg font-medium text-gray-900">
            $5,012.13 <span class="text-gray-500">USD</span>
          </div>        
        </CardWithTitle>

        <CardWithTitle title="ROI">
          <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
            <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Increased by</span>
            5.02%
          </div>        
        </CardWithTitle>
      </div>
    </PageSection>
  );
};

export default SnapshotOverview;