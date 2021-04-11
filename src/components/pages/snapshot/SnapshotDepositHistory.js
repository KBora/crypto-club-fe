import React from "react";
import PageSection from "../../ui-elements/PageSection";
import FormatCurrency from "../../utility/FormatCurrency";

const SnapshotDepositHistory = (props) => {
  // Deposit history table
  return (
    <PageSection title="Deposit History">
       <div className="mt-6 flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Crypto
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tokens
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        USD
                      </th>
                    </tr>
                  </thead>
                  <tbody>

                    { props.deposits.map((deposit) => {
                        return (
                          <tr className="bg-white">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {deposit.insert_time}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {deposit.asset}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {deposit.amount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <FormatCurrency number={deposit.usd}></FormatCurrency>
                            </td>
                          </tr>
                        )                
                      })
                    }                  

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </PageSection>
  );
};

export default SnapshotDepositHistory;