import React from "react";
import PageSection from "../../ui-elements/PageSection";

const SnapshotDepositHistory = () => {
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

                    <tr className="bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        12 Feb 2021 12:45AM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        BTC
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        0.043
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        $342.34
                      </td>
                    </tr>

     
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        05 Jan 2021 7:49PM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        BTC
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        0.043
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        $342.34
                      </td>
                    </tr>

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