import React from "react";
import PageSection from "../../ui-elements/PageSection";
import ChartPerformance from "../../charts/ChartPerformance";

const SnapshotPerformance = () => {
  // Performance section - bar graph that shows deposit total and current balance
  return (
    <PageSection title="Performance">
      <ChartPerformance></ChartPerformance>
    </PageSection>
  );
};

export default SnapshotPerformance;