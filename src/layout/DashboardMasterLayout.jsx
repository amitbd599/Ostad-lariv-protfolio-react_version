import React from "react";
import {
  FaBlog,
  FaHouseChimneyMedical,
  FaNetworkWired,
  FaRegEnvelopeOpen,
  FaTransgender,
  FaUserPen,
} from "react-icons/fa6";

import { Link } from "react-router-dom";

const DashboardMasterLayout = (props) => {
  return (
    <section className="bg-[#303841]">
      <div className="flex  ">
        <div className="w-[320px] ">
          <div className="h-full min-h-screen border-r border-[#4b5563] bg-[#36404A] p-4 shadow-xl">
            <div className=" p-4">
              <img src="assets/images/logo.svg" alt="" className="w-[180px]" />
            </div>

            {/* Inner Nav */}

            <ul className="mt-8 grid gap-4">
              <li className="border-b border-border">
                <Link to="#">
                  <ul className="grid gap-[5px]  py-[10px]">
                    <li>
                      <Link
                        to="/dashboard"
                        className="flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white"
                      >
                        <FaHouseChimneyMedical /> Dashboard
                      </Link>
                    </li>
                  </ul>
                </Link>
              </li>
              <li className="border-b border-border">
                <Link to="#" className="text-base text-text">
                  Pages
                  <ul className="] grid gap-[5px] py-[10px]">
                    <li>
                      <Link
                        to="/home-page-content-edit"
                        className="flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white"
                      >
                        <FaHouseChimneyMedical />
                        Home Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about-page-content-edit"
                        className="flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white"
                      >
                        <FaUserPen />
                        About Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/portfolio-page-content-edit"
                        className="flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white"
                      >
                        <FaTransgender />
                        Portfolio Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/service-page-content-edit"
                        className="flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white"
                      >
                        <FaNetworkWired />
                        Service Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog-page-content-edit"
                        className="flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white"
                      >
                        <FaBlog />
                        Blog Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact-page-content-edit"
                        className="flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white"
                      >
                        <FaRegEnvelopeOpen />
                        Contact Page
                      </Link>
                    </li>
                  </ul>
                </Link>
              </li>
              <li className="border-b border-border">
                <Link to="#" className="text-base text-text">
                  Profile
                  <ul className="] grid gap-[5px] py-[10px]">
                    <li>
                      <Link
                        to="/home-page-content-edit"
                        className="flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white"
                      >
                        <FaHouseChimneyMedical />
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about-page-content-edit"
                        className="flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white"
                      >
                        <FaUserPen />
                        Edit Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about-page-content-edit"
                        className="flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white"
                      >
                        <FaUserPen />
                        Inbox
                      </Link>
                    </li>
                  </ul>
                </Link>
              </li>
              <li className="border-b border-border">
                <Link to="#" className="text-base text-text">
                  Widgets
                  <ul className="] grid gap-[5px] py-[10px]">
                    <li>
                      <Link
                        to="/home-page-content-edit"
                        className="flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white"
                      >
                        <FaHouseChimneyMedical />
                        All Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about-page-content-edit"
                        className="flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white"
                      >
                        <FaUserPen />
                        All Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about-page-content-edit"
                        className="flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white"
                      >
                        <FaUserPen />
                        All Portfolio
                      </Link>
                    </li>
                  </ul>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[100%]">{props.children}</div>
      </div>
    </section>
  );
};

export default DashboardMasterLayout;
