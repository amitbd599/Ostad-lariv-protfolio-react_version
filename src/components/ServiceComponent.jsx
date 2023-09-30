import React from "react";
import { FaCodeMerge } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
const ServiceComponent = () => {
  return (
    <section className="py-[80px]">
      <div className="container">
        <div className="menuBox">
          <div className=" inline-block rounded-full border border-text px-[20px] py-[5px]">
            <div className="flex items-center gap-[6px]">
              <span>
                <FaCodeMerge className="fa-light fa-user text-[14px] text-white" />
              </span>
              <span className="pl-[6px] text-[14px] text-white">
                All Service
              </span>
            </div>
          </div>
        </div>
        <br />
        <div className="mt-[40px]">
          <h2 className="text-[24px] font-semibold uppercase leading-[34px] text-white md:text-[52px] md:leading-[62px]">
            All the general services that
            <br className="hidden md:block" />I provide to
            <span className="text-theme"> clients!</span>
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
          <div className="grid gap-x-[60px] gap-y-[60px] md:grid-cols-12  md:gap-x-[30px]">
            <div className="col-span-4">
              <div className="relative rounded-lg border border-text p-[20px]">
                <div className="sup absolute left-[30px] top-[-30px] flex h-[80px] w-[80px] items-center justify-center rounded-2xl bg-white">
                  <img src="assets/images/icon/coding-1.png" alt="" />
                </div>
                <div className="pt-[60px]">
                  <h2 className="text-[20px] font-medium text-white md:text-[26px]">
                    Front-end Development
                  </h2>
                  <p className="mt-[10px] text-text">
                    Counseled for new companies, and teamed up with capable
                    individuals to make computerized items for both business and
                    purchaser use.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="relative rounded-lg border border-text p-[20px]">
                <div className="sup absolute left-[30px] top-[-30px] flex h-[80px] w-[80px] items-center justify-center rounded-2xl bg-white">
                  <img src="assets/images/icon/coding-2.png" alt="" />
                </div>
                <div className="pt-[60px]">
                  <h2 className="text-[20px] font-medium text-white md:text-[26px]">
                    Back-end Development
                  </h2>
                  <p className="mt-[10px] text-text">
                    Counseled for new companies, and teamed up with capable
                    individuals to make computerized items for both business and
                    purchaser use.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="relative rounded-lg border border-text p-[20px]">
                <div className="sup absolute left-[30px] top-[-30px] flex h-[80px] w-[80px] items-center justify-center rounded-2xl bg-white">
                  <img src="assets/images/icon/coding-2.png" alt="" />
                </div>
                <div className="pt-[60px]">
                  <h2 className="text-[20px] font-medium text-white md:text-[26px]">
                    Back-end Development
                  </h2>
                  <p className="mt-[10px] text-text">
                    Counseled for new companies, and teamed up with capable
                    individuals to make computerized items for both business and
                    purchaser use.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="relative rounded-lg border border-text p-[20px]">
                <div className="sup absolute left-[30px] top-[-30px] flex h-[80px] w-[80px] items-center justify-center rounded-2xl bg-white">
                  <img src="assets/images/icon/coding-2.png" alt="" />
                </div>
                <div className="pt-[60px]">
                  <h2 className="text-[20px] font-medium text-white md:text-[26px]">
                    Back-end Development
                  </h2>
                  <p className="mt-[10px] text-text">
                    Counseled for new companies, and teamed up with capable
                    individuals to make computerized items for both business and
                    purchaser use.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="relative rounded-lg border border-text p-[20px]">
                <div className="sup absolute left-[30px] top-[-30px] flex h-[80px] w-[80px] items-center justify-center rounded-2xl bg-white">
                  <img src="assets/images/icon/coding-2.png" alt="" />
                </div>
                <div className="pt-[60px]">
                  <h2 className="text-[20px] font-medium text-white md:text-[26px]">
                    Back-end Development
                  </h2>
                  <p className="mt-[10px] text-text">
                    Counseled for new companies, and teamed up with capable
                    individuals to make computerized items for both business and
                    purchaser use.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="relative rounded-lg border border-text p-[20px]">
                <div className="sup absolute left-[30px] top-[-30px] flex h-[80px] w-[80px] items-center justify-center rounded-2xl bg-white">
                  <img src="assets/images/icon/coding-2.png" alt="" />
                </div>
                <div className="pt-[60px]">
                  <h2 className="text-[20px] font-medium text-white md:text-[26px]">
                    Back-end Development
                  </h2>
                  <p className="mt-[10px] text-text">
                    Counseled for new companies, and teamed up with capable
                    individuals to make computerized items for both business and
                    purchaser use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Review Information */}
        <div className="mt-[100px]">
          <h2 className="text-[32px] font-semibold">What People Says?:</h2>

          {/* Slider */}
          <div className="mt-[30px]">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={4}
              slidesPerGroup={2}
              speed={1000}
              pagination={{ clickable: true }}
              autoplay={{ delay: 6000 }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                500: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                768: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
                992: {
                  slidesPerView: 3,
                  slidesPerGroup: 2,
                },
                1200: {
                  slidesPerView: 3,
                  slidesPerGroup: 2,
                },
                1400: {
                  slidesPerView: 3,
                  slidesPerGroup: 2,
                },
              }}
            >
              <SwiperSlide>
                <div className=" divide-y divide-dashed divide-theme rounded-xl  bg-card px-[30px] py-[40px] shadow-none">
                  <p className="pb-[30px] text-[18px] italic text-text">
                    I recently had the pleasure of using LoraXD for my business,
                    and I must say it has exceeded my expectations in every way
                    possible.
                  </p>

                  <div className="flex items-center gap-4 pt-[30px]">
                    <div className="inline-block w-[80px] overflow-hidden rounded-full">
                      <img src="assets/images/user/user-1.png" alt="" />
                    </div>
                    <div className="grid gap-[10px]">
                      <p className="text-[24px] font-normal  text-white">
                        Larry N. Alexandre
                      </p>
                      <p>565 Snider Street Denver, CO 80202</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" divide-y divide-dashed divide-theme rounded-xl  bg-card px-[30px] py-[40px] shadow-none">
                  <p className="pb-[30px] text-[18px] italic text-text">
                    I recently had the pleasure of using LoraXD for my business,
                    and I must say it has exceeded my expectations in every way
                    possible.
                  </p>

                  <div className="flex items-center gap-4 pt-[30px]">
                    <div className="inline-block w-[80px] overflow-hidden rounded-full">
                      <img src="assets/images/user/user-1.png" alt="" />
                    </div>
                    <div className="grid gap-[10px]">
                      <p className="text-[24px] font-normal  text-white">
                        Larry N. Alexandre
                      </p>
                      <p>565 Snider Street Denver, CO 80202</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" divide-y divide-dashed divide-theme rounded-xl  bg-card px-[30px] py-[40px] shadow-none">
                  <p className="pb-[30px] text-[18px] italic text-text">
                    I recently had the pleasure of using LoraXD for my business,
                    and I must say it has exceeded my expectations in every way
                    possible.
                  </p>

                  <div className="flex items-center gap-4 pt-[30px]">
                    <div className="inline-block w-[80px] overflow-hidden rounded-full">
                      <img src="assets/images/user/user-1.png" alt="" />
                    </div>
                    <div className="grid gap-[10px]">
                      <p className="text-[24px] font-normal  text-white">
                        Larry N. Alexandre
                      </p>
                      <p>565 Snider Street Denver, CO 80202</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" divide-y divide-dashed divide-theme rounded-xl  bg-card px-[30px] py-[40px] shadow-none">
                  <p className="pb-[30px] text-[18px] italic text-text">
                    I recently had the pleasure of using LoraXD for my business,
                    and I must say it has exceeded my expectations in every way
                    possible.
                  </p>

                  <div className="flex items-center gap-4 pt-[30px]">
                    <div className="inline-block w-[80px] overflow-hidden rounded-full">
                      <img src="assets/images/user/user-1.png" alt="" />
                    </div>
                    <div className="grid gap-[10px]">
                      <p className="text-[24px] font-normal  text-white">
                        Larry N. Alexandre
                      </p>
                      <p>565 Snider Street Denver, CO 80202</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" divide-y divide-dashed divide-theme rounded-xl  bg-card px-[30px] py-[40px] shadow-none">
                  <p className="pb-[30px] text-[18px] italic text-text">
                    I recently had the pleasure of using LoraXD for my business,
                    and I must say it has exceeded my expectations in every way
                    possible.
                  </p>

                  <div className="flex items-center gap-4 pt-[30px]">
                    <div className="inline-block w-[80px] overflow-hidden rounded-full">
                      <img src="assets/images/user/user-1.png" alt="" />
                    </div>
                    <div className="grid gap-[10px]">
                      <p className="text-[24px] font-normal  text-white">
                        Larry N. Alexandre
                      </p>
                      <p>565 Snider Street Denver, CO 80202</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent;
