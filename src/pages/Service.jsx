import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import InitLoader from "../layout/InitLoader";
import MasterLayout from "../layout/MasterLayout";
const ServiceComponent = React.lazy(() =>
  import("../components/ServiceComponent")
);
const Service = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<InitLoader />}>
          <Helmet>
            <title>Service || PUCU - React Portfolio Template</title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <ServiceComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default Service;
