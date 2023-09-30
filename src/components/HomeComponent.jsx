import React from "react";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <section className="py-[80px]">
      <div className="container">
        {/* Intro Section */}
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="col-span-7 py-[40px]">
            <p className="text-[22px]">
              <span className="text-theme">Hi!</span> There I’m
            </p>
            <h2 className="relative mt-[20px] inline-block text-[62px] font-semibold leading-tight">
              HI, I'M AMIT!{" "}
              <span className=" absolute bottom-[15px] right-[-100px]">
                <img src="assets/images/icon/icon-1.png" alt="" />
              </span>
            </h2>
            <h2 className=" text-[62px] font-semibold leading-tight">
              CREATIVE <span className="text-theme">DEVELOPER!</span>
            </h2>
            <br />
            <p className="text-text">
              I'm a passionate UI/UX designer with a mission to create
              delightful and intuitive digital experiences. With a strong
              foundation in design principles and a keen eye for detail, I
              specialize in translating complex ideas into user-friendly
              interfaces that captivate and engage.
            </p>
            <div className="mt-[50px]">
              <Link to="/" className="btn">
                Hire Me Now!
              </Link>
            </div>

            {/* Count Section */}
            <div className="mt-[60px] grid grid-cols-12 gap-[30px] md:gap-2">
              <div className="col-span-12 md:col-span-4">
                <h2 className="  text-[50px] font-semibold  ">
                  <span className="counter">20</span>+
                </h2>
                <p className="   text-white">
                  YEARS OF AWESOME <br />
                  EXPERIENCE
                </p>
              </div>
              <div className="col-span-12 md:col-span-4">
                <h2 className="  text-[50px] font-semibold  ">
                  <span className="counter">20</span>+
                </h2>
                <p className="   text-white">
                  PROJECTS COMPLETED <br />
                  ON THIS YEAR
                </p>
              </div>
              <div className="col-span-12 md:col-span-4">
                <h2 className="  text-[50px] font-semibold  ">
                  <span className="counter">780</span>+
                </h2>
                <p className="   text-white">
                  HAVE TEAM MEMBER <br />
                  ON 10 COUNTRY
                </p>
              </div>
            </div>

            {/* Inner Card */}
            <div className="mt-[60px] grid grid-cols-12 gap-[30px]">
              <div className="col-span-4">
                <div className=" grid gap-[30px] rounded-lg border-2 border-dotted border-text p-[20px]">
                  <h3 className="text-center text-[24px]">Services</h3>
                  <div className="flex  justify-around rounded-full border-2 border-text p-[10px]">
                    <img src="assets/images/icon/icon-2.png" alt="" />
                    <img src="assets/images/icon/icon-3.png" alt="" />
                    <img src="assets/images/icon/icon-4.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                <div className=" grid gap-[10px] rounded-lg border-2 border-dotted border-text p-[20px]">
                  <h3 className="text-center text-[24px]">Projects</h3>
                  <div className="flex  justify-around">
                    <img src="assets/images/show/show-1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                <div className=" grid gap-[38px] rounded-lg border-2 border-dotted border-text p-[20px]">
                  <h3 className="text-center text-[24px]">About Us</h3>
                  <div className="flex  justify-around p-[10px]">
                    <img src="assets/images/logo.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5">
            <div className="flex justify-end">
              <img src="assets/images/profile/user.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
