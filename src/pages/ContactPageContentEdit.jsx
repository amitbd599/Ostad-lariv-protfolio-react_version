import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import InitLoader from "../layout/InitLoader";
import DashboardMasterLayout from "../layout/DashboardMasterLayout";
import Breadcrumb from "../components/Breadcrumb";
const ContactPageContentEditComponent = React.lazy(() =>
  import("../components/ContactPageContentEditComponent")
);
const ContactPageContentEdit = () => {
  return (
    <Fragment>
      <DashboardMasterLayout>
        <Suspense fallback={<InitLoader />}>
          <Helmet>
            <title>
              Contact Page Content Edit || PUCU - React Portfolio Template
            </title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <Breadcrumb title={"Contact Page Content Edit"} />
          <ContactPageContentEditComponent />
        </Suspense>
      </DashboardMasterLayout>
    </Fragment>
  );
};

export default ContactPageContentEdit;
