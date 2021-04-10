import React from "react";
import SidebarDesktop from "./SidebarDesktop";
import SnapshotMainColumn from "./SnapshotMainColumn";

const DashboardSnapshot = () => {
 
  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <SidebarDesktop></SidebarDesktop>
      <SnapshotMainColumn></SnapshotMainColumn>
    </div>
  );
};

export default DashboardSnapshot;