import React from "react";
import { useQuery, gql } from '@apollo/client';

import SnapshotDepositHistory from "./SnapshotDepositHistory";
import SnapshotMobileHeader from "./SnapshotMobileHeader";
import SnapshotOverview from "./SnapshotOverview";
import SnapshotTitle from "./SnapshotTitle";
import SnapshotTotalPool from "./SnapshotTotalPool";

const GET_BALANCE_PERCENTAGE_DEPOSITS = gql`
query MyQuery {
  balance_snapshots(order_by: {timestamp: desc}, limit: 1) {
    amount_usd
    timestamp
  }
  users(where: {}, order_by: {}) {
    percentage
  }
  deposits(order_by: {insert_time: asc}) {
    address
    amount
    asset
    insert_time
    usd
  }
}
`

const SnapshotMain = (props) => {
  const { loading, error , data } = useQuery(GET_BALANCE_PERCENTAGE_DEPOSITS);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }

  // Main column
  return (
    <div className="flex flex-col w-0 flex-1 overflow-hidden">
      
      <SnapshotMobileHeader user={props.user}></SnapshotMobileHeader>
      <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex="0">
        <SnapshotTitle timestamp={data.balance_snapshots.length ? data.balance_snapshots[0].timestamp : 0}></SnapshotTitle>
        <SnapshotOverview balance={data.balance_snapshots.length ? data.balance_snapshots[0].amount_usd: 0} percentage={data.users[0].percentage} deposits={data.deposits}></SnapshotOverview>        
        <SnapshotDepositHistory deposits={data.deposits}></SnapshotDepositHistory>
        <SnapshotTotalPool balance={data.balance_snapshots.length ? data.balance_snapshots[0].amount_usd: 0} percentage={data.users[0].percentage}></SnapshotTotalPool>
      </main>
    </div>
  );
};

export default SnapshotMain;