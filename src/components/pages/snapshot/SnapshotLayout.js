import React, { useEffect, useState }  from "react";
import SidebarDesktop from "./SidebarDesktop";
import SnapshotMain from "./SnapshotMain";
import { useAuth0 } from "@auth0/auth0-react";

const SnapshotLayout = () => {
  // Layout for snapshot page/route

  const { user, isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev--3pnfqat.us.auth0.com";

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();
        setUserMetadata(user_metadata);
        console.log("aaa:", user );
      } catch (e) {
        console.log("bbb:", e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user]);

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