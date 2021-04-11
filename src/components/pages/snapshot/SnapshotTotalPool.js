import React from "react";
import PageSection from "../../ui-elements/PageSection";
import CardWithTitle from "../../ui-elements/CardWithTitle";
import ChartMyPercentage from "../../charts/ChartMyPercentage";
import FormatCurrency from "../../utility/FormatCurrency";

const SnapshotTotalPool = (props) => {
  // Total balance and percentage donut chart

  //TODO: Convert this to backend query
  const getMyBalance = () => {
    return props.balance * props.percentage / 100;
  }

  return (
    <PageSection title="Total Pool">
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">        
        <div>
          <CardWithTitle title="Combined balance">
            <div className="text-2xl font-medium text-gray-900">
              <FormatCurrency number={props.balance} currency="USD"></FormatCurrency>
            </div>

            <div className="mt-6 text-sm font-medium text-gray-500 truncate">My balance</div>
            <div className="text-2xl font-medium text-gray-900"><FormatCurrency number={getMyBalance()} currency="USD"></FormatCurrency></div>

            <div className="mt-6 text-sm font-medium text-gray-500 truncate">My percentage</div>
            <ChartMyPercentage percentage={props.percentage}></ChartMyPercentage>

            
          </CardWithTitle>
        </div>
      </div>
    </PageSection>
  );
};

export default SnapshotTotalPool;