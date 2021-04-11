import React from "react";
import SnapshotDepositHistory from "./SnapshotDepositHistory";
import SnapshotMobileHeader from "./SnapshotMobileHeader";
import SnapshotOverview from "./SnapshotOverview";
import SnapshotPerformance from "./SnapshotPerformance";
import SnapshotTitle from "./SnapshotTitle";
import SnapshotTotalPool from "./SnapshotTotalPool";

const SnapshotMain = (props) => {
  // Main column
  return (
    <div className="flex flex-col w-0 flex-1 overflow-hidden">
      <SnapshotMobileHeader user={props.user}></SnapshotMobileHeader>
      <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex="0">
        <SnapshotTitle></SnapshotTitle>
        <SnapshotOverview></SnapshotOverview>
        <SnapshotPerformance></SnapshotPerformance>
        <SnapshotDepositHistory></SnapshotDepositHistory>
        <SnapshotTotalPool></SnapshotTotalPool>
      </main>
    </div>
  );
};

export default SnapshotMain;