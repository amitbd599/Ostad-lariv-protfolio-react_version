import React from "react";

const HomeDashboardComponent = () => {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="card">
          <div className="p-6">
            <div className="flex justify-between">
              <div className="bg-primary flex h-20 w-20 items-center justify-center rounded-full text-3xl text-white">
                <i className="mdi mdi-currency-usd" />
              </div>
              <div className="text-end">
                <p className="font-medium uppercase text-gray-400 dark:text-gray-300">
                  Total Revenue
                </p>
                <h3 className="my-2 text-2xl font-medium">$ 65,841</h3>
                <p className="text-gray-400 dark:text-gray-300">
                  Jan - Apr 2019
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="p-6">
            <div className="flex justify-between">
              <div className="bg-primary flex h-20 w-20 items-center justify-center rounded-full text-3xl text-white">
                <i className="mdi mdi-account-multiple" />
              </div>
              <div className="text-end">
                <p className="font-medium uppercase text-gray-400 dark:text-gray-300">
                  Total Unique Visitors
                </p>
                <h3 className="my-2 text-2xl font-medium">26,521</h3>
                <p className="text-gray-400 dark:text-gray-300">
                  Jan - Apr 2019
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="p-6">
            <div className="flex justify-between">
              <div className="bg-primary flex h-20 w-20 items-center justify-center rounded-full text-3xl text-white">
                <i className="mdi mdi-crown" />
              </div>
              <div className="text-end">
                <p className="font-medium uppercase text-gray-400 dark:text-gray-300">
                  Number of Transactions
                </p>
                <h3 className="my-2 text-2xl font-medium">7,842</h3>
                <p className="text-gray-400 dark:text-gray-300">
                  Jan - Apr 2019
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="p-6">
            <div className="flex justify-between">
              <div className="bg-primary flex h-20 w-20 items-center justify-center rounded-full text-3xl text-white">
                <i className="mdi mdi-auto-fix" />
              </div>
              <div className="text-end">
                <p className="font-medium uppercase text-gray-400 dark:text-gray-300">
                  Conversation Rate
                </p>
                <h3 className="my-2 text-2xl font-medium">2.07%</h3>
                <p className="text-gray-400 dark:text-gray-300">
                  Jan - Apr 2019
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDashboardComponent;
