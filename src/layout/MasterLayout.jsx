import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";
const MasterLayout = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const sidebarControl = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div>
        {/* Header Section */}
        <header>
          <div className=" container mx-auto  pt-[30px]">
            <div className=" flex justify-between rounded-[10px] bg-card  px-[30px] py-[30px]">
              <div className="logo flex items-center ">
                <Link to={"/"}>
                  <img src={"/assets/images/logo.svg"} alt="" />
                </Link>
              </div>
              <menu className="hidden items-center md:flex">
                <ul className="flex  gap-[40px]">
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive
                          ? "font-medium text-theme"
                          : "font-medium text-white"
                      }
                      to={"/"}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive
                          ? "font-medium text-theme"
                          : "font-medium text-white"
                      }
                      to={"/about"}
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive
                          ? "font-medium text-theme"
                          : "font-medium text-white"
                      }
                      to={"/portfolio"}
                    >
                      Portfolio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive
                          ? "font-medium text-theme"
                          : "font-medium text-white"
                      }
                      to={"/service"}
                    >
                      Service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive
                          ? "font-medium text-theme"
                          : "font-medium text-white"
                      }
                      to={"/blog"}
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive
                          ? "font-medium text-theme"
                          : "font-medium text-white"
                      }
                      to={"/contact"}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </menu>
              <div className="block md:hidden">
                <div className="flex items-center gap-4	 px-[30px]">
                  <button
                    onClick={sidebarControl}
                    className="rounded-full border border-[#919295] p-[10px] text-[25px] "
                  >
                    <BiMenuAltRight className="text-text " />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* sidebar intro */}
        <div
          className={`sidebar fixed ${
            sidebar ? "left-0" : "left-[100%]"
          }  top-0 z-[999]  h-full w-full bg-btn/60 transition-all duration-500`}
        >
          <div className="ml-auto h-full min-h-[750px] w-[300px] bg-card  px-[30px] pt-[60px] md:min-h-[700px]">
            <div className="relative flex justify-center">
              <button
                onClick={sidebarControl}
                className="group absolute left-[-78px] rounded-lg bg-card   px-[15px] py-[10px] text-[26px]"
              >
                <FaXmark className="text-btn  transition-all duration-500  group-hover:rotate-90 group-hover:text-theme" />
              </button>
              <div>
                <img src="/assets/images/logo.svg" alt="" />
              </div>
            </div>
            <div className="my-[30px] border-t border-[#ddd] "></div>
            <nav className="mt-[30px]">
              <ul>
                <li className="text-[18px] font-semibold">
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px] text-theme "
                        : "inline-block py-[8px]  text-white transition-all duration-300 hover:text-theme"
                    }
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="text-[18px] font-semibold">
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px] text-theme "
                        : "inline-block py-[8px]  text-white transition-all duration-300 hover:text-theme"
                    }
                    to={"/about"}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className=" text-[18px] font-semibold">
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px] text-theme "
                        : "inline-block py-[8px]  text-white transition-all duration-300 hover:text-theme"
                    }
                    to={"/projects"}
                  >
                    Projects
                  </NavLink>
                </li>
                <li className=" text-[18px] font-semibold">
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px] text-theme "
                        : "inline-block py-[8px]  text-white transition-all duration-300 hover:text-theme"
                    }
                    to={"/blog"}
                  >
                    Blog
                  </NavLink>
                </li>
                <li className=" text-[18px] font-semibold">
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px] text-theme "
                        : "inline-block py-[8px]  text-white transition-all duration-300 hover:text-theme"
                    }
                    to={"/service"}
                  >
                    Services
                  </NavLink>
                </li>
                <li className=" text-[18px] font-semibold">
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px] text-theme "
                        : "inline-block py-[8px]  text-white transition-all duration-300 hover:text-theme"
                    }
                    to={"/testimonial"}
                  >
                    Testimonial
                  </NavLink>
                </li>
                <li className=" text-[18px] font-semibold">
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px]  text-theme"
                        : "inline-block py-[8px]  text-white transition-all duration-300 hover:text-theme"
                    }
                    to={"/contact"}
                  >
                    Contact
                  </NavLink>
                </li>
                <li className=" text-[18px] font-semibold">
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px]  text-theme"
                        : "inline-block py-[8px]  text-white transition-all duration-300 hover:text-theme"
                    }
                    to={"/error"}
                  >
                    Error
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="my-[30px] border-t border-[#ddd] "></div>

            <div className="contact mt-[40px] pb-[20px] md:mt-[0px]">
              <div>
                <p className="text-[20px] font-semibold  text-white">
                  Follow Me:
                </p>

                <div className="mt-[20px] flex gap-3">
                  <Link to={"/"}>
                    <button className="boxShadow rounded-lg bg-btn  p-[10px] text-[18px] text-text shadow-none transition duration-300  hover:text-theme ">
                      <FaFacebookF />
                    </button>
                  </Link>
                  <Link to={"/"}>
                    <button className="boxShadow rounded-lg bg-btn  p-[10px] text-[18px] text-text shadow-none transition duration-300  hover:text-theme ">
                      <FaTwitter />
                    </button>
                  </Link>
                  <Link to={"/"}>
                    <button className="boxShadow rounded-lg bg-btn  p-[10px] text-[18px] text-text shadow-none transition duration-300  hover:text-theme ">
                      <FaLinkedinIn />
                    </button>
                  </Link>
                  <Link to={"/"}>
                    <button className="boxShadow rounded-lg bg-btn  p-[10px] text-[18px] text-text shadow-none transition duration-300  hover:text-theme ">
                      <FaInstagram />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Info Card Section */}
        <section>
          <div className="main__body">{props.children}</div>
        </section>
        {/* Footer Section */}
        <footer>
          <div className="container mx-auto  flex justify-center pb-[40px]">
            <div>
              <p className="text-center text-text">
                Copyright <span className="text-theme">pucu</span> ©2023. All
                rights reserved
              </p>
              <div className="mt-[20px] flex justify-center text-center">
                <img src="/assets/images/logo.svg" alt="" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MasterLayout;
