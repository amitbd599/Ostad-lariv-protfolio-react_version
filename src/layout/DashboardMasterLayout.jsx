import React from "react";
import {
  FaBlog,
  FaHouseChimneyMedical,
  FaNetworkWired,
  FaRegEnvelopeOpen,
  FaTransgender,
  FaUserPen,
  IconName,
} from "react-icons/fa6";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const DashboardMasterLayout = (props) => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <section className="bg-[#303841]">
      <div className="flex  ">
        <div className="w-[400px] ">
          <div className="h-full min-h-screen border-r border-[#4b5563] bg-[#36404A] p-4 shadow-xl">
            <div className="mb-2 p-4">
              <Typography variant="h5" className="text-white">
                Dashboard
              </Typography>
            </div>
            <List>
              <Accordion
                open={open === 1}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 text-white transition-transform ${
                      open === 1 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <div className=" p-0" selected={open === 1}>
                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="rounded-lg border-b-0 bg-btn px-4 py-3"
                  >
                    <h2 className=" text-base font-normal text-white">
                      Dashboard
                    </h2>
                  </AccordionHeader>
                </div>
                <AccordionBody className="py-1">
                  <ul className="grid gap-[5px] px-[20px] py-[10px]">
                    <li>
                      <Link
                        to="#"
                        className="flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white"
                      >
                        <FaHouseChimneyMedical />
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white"
                      >
                        <FaHouseChimneyMedical />
                        Home
                      </Link>
                    </li>
                  </ul>
                </AccordionBody>
              </Accordion>
              <Accordion
                open={open === 2}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 text-white transition-transform ${
                      open === 2 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <div className=" p-0" selected={open === 2}>
                  <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className="rounded-lg border-b-0 bg-btn px-4 py-3"
                  >
                    <h2 className=" text-base font-normal text-white">
                      Page Content Edit
                    </h2>
                  </AccordionHeader>
                </div>
                <AccordionBody className="py-1">
                  <ul className="grid gap-[5px] px-[20px] py-[10px]">
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
                        to="#"
                        className="flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white"
                      >
                        <FaTransgender />
                        Portfolio Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white"
                      >
                        <FaNetworkWired />
                        Service Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white"
                      >
                        <FaBlog />
                        Blog Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white"
                      >
                        <FaRegEnvelopeOpen />
                        Contact Page
                      </Link>
                    </li>
                  </ul>
                </AccordionBody>
              </Accordion>

              <hr className="my-2 border-blue-gray-50" />
            </List>
          </div>
        </div>
        <div className="w-[100%]">{props.children}</div>
      </div>
    </section>
  );
};

export default DashboardMasterLayout;
