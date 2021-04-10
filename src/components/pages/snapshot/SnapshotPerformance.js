import React from "react";
import PageSection from "../../ui-elements/PageSection";
import ChartPerformance from "../../charts/ChartPerformance";
import Card from "../../ui-elements/Card";

const SnapshotPerformance = () => {
  // Performance section - bar graph that shows deposit total and current balance
  return (
    <PageSection title="Performance">
      <div className="mt-6">
        <Card>
          <ChartPerformance></ChartPerformance>
        </Card>
      </div>
    </PageSection>
    
  );
};

export default SnapshotPerformance;