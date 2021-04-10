import React from "react";
import SnapshotMobileHeader from "./SnapshotMobileHeader";
import SnapshotOverview from "./SnapshotOverview";
import SnapshotTitle from "./SnapshotTitle";

const SnapshotMain = () => {
  // Main column
  return (
    <div className="flex flex-col w-0 flex-1 overflow-hidden">
      <SnapshotMobileHeader></SnapshotMobileHeader>
      <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
        <SnapshotTitle></SnapshotTitle>
        <SnapshotOverview></SnapshotOverview>
      </main>
    </div>
  );
};

export default SnapshotMain;