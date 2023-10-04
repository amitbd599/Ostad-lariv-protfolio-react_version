import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import InitLoader from "../layout/InitLoader";
import DashboardMasterLayout from "../layout/DashboardMasterLayout";
import Breadcrumb from "../components/Breadcrumb";
const PortfolioPageContentEditComponent = React.lazy(() =>
  import("../components/PortfolioPageContentEditComponent")
);
const PortfolioPageContentEdit = () => {
  return (
    <Fragment>
      <DashboardMasterLayout>
        <Suspense fallback={<InitLoader />}>
          <Helmet>
            <title>
              Portfolio Page Content Edit || PUCU - React Portfolio Template
            </title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <Breadcrumb title={"Portfolio Page Content Edit"} />
          <PortfolioPageContentEditComponent />
        </Suspense>
      </DashboardMasterLayout>
    </Fragment>
  );
};

export default PortfolioPageContentEdit;
