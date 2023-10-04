import React from "react";
import { FaSeedling } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <section className="py-[30px] md:py-[80px]">
      <div className="container">
        {/* Intro Section */}
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="order-2 col-span-12 mt-[40px] py-[40px] md:mt-0 md:pr-[60px] lg:order-1 lg:col-span-8">
            <p className="text-[22px]">
              <span className="text-theme">Hi!</span> There I’m
            </p>
            <h2 className="relative mt-[20px] inline-block text-[32px]  font-semibold leading-tight md:text-[62px]">
              HI, I'M AMIT!{" "}
              <span className=" absolute bottom-[15px] right-[-100px]">
                <img
                  src="assets/images/icon/icon-1.png"
                  alt=""
                  className="wobble-hor-bottom"
                />
              </span>
            </h2>
            <h2 className=" text-[52px] font-semibold leading-tight md:text-[62px]">
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
                  <span className="counter">4</span>+
                </h2>
                <p className="   text-white">
                  YEARS OF AWESOME <br />
                  EXPERIENCE
                </p>
              </div>
              <div className="col-span-12 md:col-span-4">
                <h2 className="  text-[50px] font-semibold  ">
                  <span className="counter">200</span>+
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
              <div className="col-span-12 md:col-span-4 ">
                <div className=" grid gap-[30px] rounded-lg border-2 border-dotted border-text p-[20px]">
                  <h3 className="text-center text-[24px]">Services</h3>
                  <div className="flex  justify-around  p-[10px]">
                    <img src="assets/images/icon/icon-2.png" alt="" />
                    <img src="assets/images/icon/icon-3.png" alt="" />
                    <img src="assets/images/icon/icon-4.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 ">
                <div className=" grid gap-[10px] rounded-lg border-2 border-dotted border-text p-[20px]">
                  <h3 className="text-center text-[24px]">Projects</h3>
                  <div className="flex  justify-around">
                    <img src="assets/images/show/show-1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 ">
                <div className=" grid gap-[38px] rounded-lg border-2 border-dotted border-text p-[20px]">
                  <h3 className="text-center text-[24px]">About Us</h3>
                  <div className="flex  justify-around p-[10px]">
                    <img src="assets/images/logo.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" order-1 col-span-12 lg:order-2 lg:col-span-4">
            <div className=" relative mt-[50px] ">
              <div>
                <img
                  src="assets/images/profile/user-1.png"
                  alt=""
                  className=" w-full"
                />
                <img
                  src="assets/images/icon/figma.png"
                  alt=""
                  className="slide-top-1 absolute left-[-10px] top-[90px] w-[60px] md:top-[170px] md:w-[80px] lg:top-[120px]"
                />
                <img
                  src="assets/images/icon/photoshop-logo.png"
                  alt=""
                  className="slide-top-2 absolute right-[-10px] top-[260px] w-[60px] md:top-[450px] md:w-[80px] lg:top-[250px]"
                />
              </div>
              <div className="pulse absolute bottom-[-50px] right-[40px] flex items-center gap-[20px] rounded-full bg-card px-[40px] py-[18px] md:bottom-[-17px] lg:right-[-34px]">
                <div>
                  <FaSeedling className="text-[40px] text-theme" />
                </div>
                <div>
                  <h2 className="text-[26px] font-semibold">1100k+</h2>
                  <p className="text-base text-white">Real Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
