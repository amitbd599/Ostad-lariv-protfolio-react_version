import React from "react";
import { FaCodeMerge } from "react-icons/fa6";

const PortfolioComponent = () => {
  return (
    <section className="py-[80px]">
      <div className="container">
        <div className="menuBox">
          <div className=" inline-block rounded-full border border-text px-[20px] py-[5px]">
            <div className="flex items-center gap-[6px]">
              <span>
                <FaCodeMerge className="fa-light fa-user text-[14px] text-white" />
              </span>
              <span className="pl-[6px] text-[14px] text-white">Portfolio</span>
            </div>
          </div>
        </div>
        <br />
        <div className="mt-[40px]">
          <h2 className="text-[24px] font-semibold uppercase leading-[34px] text-white md:text-[52px] md:leading-[62px]">
            Never Compromise For Our <br className="hidden md:block" />
            Portfolio to
            <span className="text-theme"> Quality!</span>
          </h2>
          <p className="mt-[20px] w-[60%] text-text">
            The imperative for integrated, expansive, and seamless digital
            experiences is fueling software product design and development
            across organizations at an unprecedented scale. These demands
            require capabilities to imagine, build, and run digital products and
            services for new and existing.
          </p>
        </div>

        <div className="mt-[80px]">
          <div className="grid gap-x-[60px] gap-y-[30px] md:grid-cols-12  md:gap-x-[30px]">
            <div className="col-span-4">
              <div className="group rounded-2xl bg-btn p-[30px] ">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="assets/images/projects/project-1.png"
                    alt=""
                    className="w-full object-cover transition-all duration-500 group-hover:scale-[110%]"
                  />
                </div>
                <div>
                  <p className="mt-[16px] text-[14px] text-text">
                    Mobile Application
                  </p>
                  <div className="portfolio-button-open cursor-pointer  text-white transition-all  duration-300 hover:text-theme">
                    <h2 className="mt-[15px] text-[20px] font-medium capitalize md:text-[20px]">
                      A vibrant and colorful Mobile application
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="group rounded-2xl bg-btn p-[30px] ">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="assets/images/projects/project-1.png"
                    alt=""
                    className="w-full object-cover transition-all duration-500 group-hover:scale-[110%]"
                  />
                </div>
                <div>
                  <p className="mt-[16px] text-[14px] text-text">
                    Mobile Application
                  </p>
                  <div className="portfolio-button-open cursor-pointer  text-white transition-all  duration-300 hover:text-theme">
                    <h2 className="mt-[15px] text-[20px] font-medium capitalize md:text-[20px]">
                      A vibrant and colorful Mobile application
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="group rounded-2xl bg-btn p-[30px] ">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="assets/images/projects/project-1.png"
                    alt=""
                    className="w-full object-cover transition-all duration-500 group-hover:scale-[110%]"
                  />
                </div>
                <div>
                  <p className="mt-[16px] text-[14px] text-text">
                    Mobile Application
                  </p>
                  <div className="portfolio-button-open cursor-pointer  text-white transition-all  duration-300 hover:text-theme">
                    <h2 className="mt-[15px] text-[20px] font-medium capitalize md:text-[20px]">
                      A vibrant and colorful Mobile application
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="group rounded-2xl bg-btn p-[30px] ">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="assets/images/projects/project-1.png"
                    alt=""
                    className="w-full object-cover transition-all duration-500 group-hover:scale-[110%]"
                  />
                </div>
                <div>
                  <p className="mt-[16px] text-[14px] text-text">
                    Mobile Application
                  </p>
                  <div className="portfolio-button-open cursor-pointer  text-white transition-all  duration-300 hover:text-theme">
                    <h2 className="mt-[15px] text-[20px] font-medium capitalize md:text-[20px]">
                      A vibrant and colorful Mobile application
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="group rounded-2xl bg-btn p-[30px] ">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="assets/images/projects/project-1.png"
                    alt=""
                    className="w-full object-cover transition-all duration-500 group-hover:scale-[110%]"
                  />
                </div>
                <div>
                  <p className="mt-[16px] text-[14px] text-text">
                    Mobile Application
                  </p>
                  <div className="portfolio-button-open cursor-pointer  text-white transition-all  duration-300 hover:text-theme">
                    <h2 className="mt-[15px] text-[20px] font-medium capitalize md:text-[20px]">
                      A vibrant and colorful Mobile application
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="group rounded-2xl bg-btn p-[30px] ">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="assets/images/projects/project-1.png"
                    alt=""
                    className="w-full object-cover transition-all duration-500 group-hover:scale-[110%]"
                  />
                </div>
                <div>
                  <p className="mt-[16px] text-[14px] text-text">
                    Mobile Application
                  </p>
                  <div className="portfolio-button-open cursor-pointer  text-white transition-all  duration-300 hover:text-theme">
                    <h2 className="mt-[15px] text-[20px] font-medium capitalize md:text-[20px]">
                      A vibrant and colorful Mobile application
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioComponent;
