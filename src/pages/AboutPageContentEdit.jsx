import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import InitLoader from "../layout/InitLoader";
import DashboardMasterLayout from "../layout/DashboardMasterLayout";
import Breadcrumb from "../components/Breadcrumb";
const AboutPageContentEditComponent = React.lazy(() =>
  import("../components/AboutPageContentEditComponent")
);
const AboutPageContentEdit = () => {
  return (
    <Fragment>
      <DashboardMasterLayout>
        <Suspense fallback={<InitLoader />}>
          <Helmet>
            <title>
              About Page Content Edit || PUCU - React Portfolio Template
            </title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <Breadcrumb title={"About Page Content Edit"} />
          <AboutPageContentEditComponent />
        </Suspense>
      </DashboardMasterLayout>
    </Fragment>
  );
};

export default AboutPageContentEdit;
