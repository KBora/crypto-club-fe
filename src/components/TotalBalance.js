import React from "react";
import { useQuery, gql } from '@apollo/client';

const GET_LATEST_BALANCE_SNAPSHOT = gql`
query getLatestBalanceSnapshot {
  balance_snapshots(order_by: {timestamp: desc}, limit: 1) {
    amount_usd
    timestamp
  }
}`;

const TotalBalance = () => {
  const { loading, error, data } = useQuery(GET_LATEST_BALANCE_SNAPSHOT);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }

  return (
    <div>      
      <div>Total Balance: $USD{data.balance_snapshots.amount_usd}</div>
      <div>Time: {data.balance_snapshots.timestamp}</div>

    </div>
  );
};

export default TotalBalance;