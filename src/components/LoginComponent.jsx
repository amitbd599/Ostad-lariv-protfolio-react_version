import React from "react";

const LoginComponent = () => {
  return (
    <>
      {/* component */}
      <section className="flex min-h-screen items-stretch text-white ">
        <div className="bg-img_login relative hidden w-1/2 items-center bg-gray-500 bg-cover bg-no-repeat lg:flex">
          <div className="absolute inset-0 z-0 bg-black opacity-60" />
          <div className="z-10 w-full px-24 text-end">
            <h1 className="text-end text-[60px] font-bold tracking-wide">
              We Make <span className="text-theme">Spectacular!</span>
            </h1>
            <p className="my-4 text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
          </div>
        </div>
        <div className="z-0 flex w-full items-center  bg-card px-0  md:px-16 lg:w-1/2">
          <div className="absolute inset-0 z-10 items-center bg-gray-500 bg-cover bg-no-repeat lg:hidden">
            <div className="absolute inset-0 z-0 bg-black opacity-60" />
          </div>
          <div className="z-20 w-full py-6">
            <div className="">
              <img src="assets/images/logo.svg" alt="" className="w-[200px]" />
            </div>

            <div className="mt-[50px] space-x-2 py-6 text-left">
              <h2 className="text-[30px]">Welcome!</h2>
            </div>
            <p className="text-gray-100">Sign Into Your Account</p>
            <form action="" className=" w-full px-4 sm:w-2/3 lg:px-0">
              <div className="pb-2 pt-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="block w-full rounded-sm bg-black p-4 text-lg"
                />
              </div>
              <div className="pb-2 pt-4">
                <input
                  className="block w-full rounded-sm bg-black p-4 text-lg"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className=" pb-2 pt-4">
                <button className="btn block">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginComponent;
