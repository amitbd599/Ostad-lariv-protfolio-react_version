import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import InitLoader from "../layout/InitLoader";
import DashboardMasterLayout from "../layout/DashboardMasterLayout";
import Breadcrumb from "../components/Breadcrumb";
const ServicePageContentEditComponent = React.lazy(() =>
  import("../components/ServicePageContentEditComponent")
);
const ServicePageContentEdit = () => {
  return (
    <Fragment>
      <DashboardMasterLayout>
        <Suspense fallback={<InitLoader />}>
          <Helmet>
            <title>
              Service Page Content Edit || PUCU - React Portfolio Template
            </title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <Breadcrumb title={"Service Page Content Edit"} />
          <ServicePageContentEditComponent />
        </Suspense>
      </DashboardMasterLayout>
    </Fragment>
  );
};

export default ServicePageContentEdit;
