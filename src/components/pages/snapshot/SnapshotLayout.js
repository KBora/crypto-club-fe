import React from "react";
import SidebarDesktop from "./SidebarDesktop";
import SnapshotMain from "./SnapshotMain";

const SnapshotLayout = () => {
  // Layout for snapshot page/route
  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <SidebarDesktop></SidebarDesktop>
      <SnapshotMain></SnapshotMain>
    </div>
  );
};

export default SnapshotLayout;