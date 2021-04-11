import React from "react";
import SidebarDesktop from "./SidebarDesktop";
import SnapshotMain from "./SnapshotMain";
import { useAuth0 } from "@auth0/auth0-react";

const SnapshotLayout = () => {
  // Layout for snapshot page/route

  const { user, isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return <div>Authenticating ...</div>;
  }

  // Get Profile info here and pass down
  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <SidebarDesktop user={user}></SidebarDesktop>
      <SnapshotMain user={user}></SnapshotMain>
    </div>
  );
};

export default SnapshotLayout;