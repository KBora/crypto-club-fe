import React, { useEffect, useState } from "react";
import PageSection from "../../ui-elements/PageSection";
import CardWithTitle from "../../ui-elements/CardWithTitle";
import FormatCurrency from "../../utility/FormatCurrency";
import ChartPerformance from "../../charts/ChartPerformance";
import Card from "../../ui-elements/Card";

const SnapshotOverview = (props) => {

  // Current balance, profit and ROI

  // props
  // balance, percentage, deposits - array with usd prop

  // my balance = total balance/ percentage
  // profit = my balance - (total deposits USD)
  // roi = profit / (total deposits USD) * 100
  

  const [balance, setBalance] = useState(0)
  const [profit, setProfit] = useState(0)
  const [depositTotal, setDepositTotal] = useState(0)
  
  useEffect(() => {
    // TODO: Convert this to backend query
    let my_balance = props.balance * props.percentage / 100;

    // total deposits
    let deposit_total = 0;
    props.deposits.forEach( (d, i) => {
      deposit_total = deposit_total + d.usd;
    });


    setBalance(my_balance);

    setDepositTotal(deposit_total);

    setProfit(my_balance - deposit_total);

  }, [props])


  return (
    <>
    <PageSection title="Overview">      
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <CardWithTitle title="My current balance">
          <div className="text-2xl font-medium text-gray-900">
            <FormatCurrency number={balance} currency="USD"></FormatCurrency>
          </div>
        </CardWithTitle>


        <CardWithTitle title="Deposit total">        
          <div className="text-2xl font-medium text-gray-900">
          <FormatCurrency number={depositTotal} currency="USD"></FormatCurrency>
          </div>        
        </CardWithTitle>

        <CardWithTitle title="Profit">        
          <div className="text-2xl font-medium text-gray-900">
            <FormatCurrency number={profit} currency="USD"></FormatCurrency>
          </div>        
        </CardWithTitle>

        <CardWithTitle title="ROI">
          <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-2xl font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
            <svg className="-ml-1 mr-0.5 flex-shrink-0 self-center h-7 w-7 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
            </svg>
            <span className="sr-only">Increased by</span>
            {Math.round(profit / depositTotal * 100)}%
          </div>        
        </CardWithTitle>
      </div>
    </PageSection>

    <PageSection title="Performance">
      <div className="mt-6">
        <Card>
          <ChartPerformance depositTotal={depositTotal} balance={balance}></ChartPerformance>
        </Card>
      </div>
    </PageSection>
    </>
  );
};

export default SnapshotOverview;