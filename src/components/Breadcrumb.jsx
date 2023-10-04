import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const Breadcrumb = ({ title }) => {
  return (
    <section className="border-b border-[#4b5563] bg-[#36404A] px-[20px] py-[10px]">
      <Breadcrumbs className="bg-[#36404A]">
        <Link to="/" className="text-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </Link>
        <Link to="/" className="text-text">
          <span>Dashboard Home</span>
        </Link>
        <Link to="#" className="text-white">
          {title}
        </Link>
      </Breadcrumbs>
    </section>
  );
};

export default Breadcrumb;
