import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import InitLoader from "../layout/InitLoader";
import DashboardMasterLayout from "../layout/DashboardMasterLayout";
import Breadcrumb from "../components/Breadcrumb";
const HomeDashboardComponent = React.lazy(() =>
  import("../components/HomeDashboardComponent")
);
const HomeDashboard = () => {
  return (
    <Fragment>
      <DashboardMasterLayout>
        <Suspense fallback={<InitLoader />}>
          <Helmet>
            <title>Dashboard || PUCU - React Portfolio Template</title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <Breadcrumb title={"Contact Page Content Edit"} />
          <HomeDashboardComponent />
        </Suspense>
      </DashboardMasterLayout>
    </Fragment>
  );
};

export default HomeDashboard;
