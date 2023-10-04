import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import InitLoader from "../layout/InitLoader";
import DashboardMasterLayout from "../layout/DashboardMasterLayout";
import Breadcrumb from "../components/Breadcrumb";
const BlogPageContentEditComponent = React.lazy(() =>
  import("../components/BlogPageContentEditComponent")
);
const BlogPageContentEdit = () => {
  return (
    <Fragment>
      <DashboardMasterLayout>
        <Suspense fallback={<InitLoader />}>
          <Helmet>
            <title>
              Blog Page Content Edit || PUCU - React Portfolio Template
            </title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <Breadcrumb title={"Blog Page Content Edit"} />
          <BlogPageContentEditComponent />
        </Suspense>
      </DashboardMasterLayout>
    </Fragment>
  );
};

export default BlogPageContentEdit;
