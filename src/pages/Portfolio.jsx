import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../layout/FullScreenLoader";
import MasterLayout from "../layout/MasterLayout";
const PortfolioComponent = React.lazy(() =>
  import("../components/PortfolioComponent")
);
const Portfolio = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Portfolio || PUCU - React Portfolio Template</title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <PortfolioComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default Portfolio;
