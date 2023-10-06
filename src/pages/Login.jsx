import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import InitLoader from "../layout/InitLoader";
const LoginComponent = React.lazy(() => import("../components/LoginComponent"));
const Login = () => {
  return (
    <Fragment>
      <>
        <Suspense fallback={<InitLoader />}>
          <Helmet>
            <title>Login || PUCU - React Portfolio Template</title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <LoginComponent />
        </Suspense>
      </>
    </Fragment>
  );
};

export default Login;
