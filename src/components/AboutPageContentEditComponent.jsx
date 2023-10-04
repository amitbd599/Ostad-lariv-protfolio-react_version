import React from "react";
import DialogPop from "./DialogPop";

const AboutPageContentEditComponent = () => {
  return (
    <section>
      <div className="m-[30px] rounded-xl bg-[#36404A] p-[30px]">
        <h2 className="text-xl font-medium text-white">
          About Profile Info Content Edit Section
        </h2>
        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label className="text-base">Top Title Edit</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Heading Text"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Sub Heading Text"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-base">About Profile Image Edit</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Image Link"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-base">Info Content Edit</label>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-base">Social Link Edit</label>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Facebook Link"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Twitter Link"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="LinkedIn Link"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Git Link"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-base">CV Content Edit</label>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="CV Title"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="email"
                  placeholder="CV Link"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="mt-[40px] block">
            <span className="btn cursor-pointer">Submit</span>
          </div>
        </div>
      </div>
      <div className="m-[30px] rounded-xl bg-[#36404A] p-[30px]">
        <h2 className="text-xl font-medium text-white">
          Top About Content Section Edit
        </h2>
        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label className="text-base">Heading Title Edit</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Title"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Title Color"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-base">Description Section Edit</label>
              <div className="flex gap-3">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="Description"
                  className=" w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-[40px] block">
            <span className="btn cursor-pointer">Submit</span>
          </div>
        </div>
      </div>
      <div className="m-[30px] rounded-xl bg-[#36404A] p-[30px]">
        <h2 className="text-xl font-medium text-white">
          Personal Content Section Edit
        </h2>
        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label className="text-base">Heading Title Edit</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Title"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-base">Inner Action Edit</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Title"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Birthday"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Skype"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="mt-[40px] block">
            <span className="btn cursor-pointer">Submit</span>
          </div>
        </div>
      </div>

      {/* Working Experience */}
      <div className="m-[30px] rounded-xl bg-[#36404A] p-[30px]">
        <h2 className="text-xl font-medium text-white">
          Working Experience Section Edit
        </h2>
        <div className="mt-[16px]">
          <div>
            <div className="m-5 overflow-hidden rounded-lg border border-gray-200 shadow-md">
              <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Position
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Institute Name
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                  <tr className="hover:bg-gray-50">
                    <th className="  px-6 py-4 font-normal text-gray-900">
                      <div className="relative ">
                        <p>2021 - Present</p>
                      </div>
                    </th>
                    <th className="  px-6 py-4 font-normal text-gray-900">
                      <div className="relative ">
                        <p>Framer Designer & Developer</p>
                      </div>
                    </th>
                    <th className="  px-6 py-4 font-normal text-gray-900">
                      <div className="relative ">
                        <p>Liza Yoolo ITC Company</p>
                      </div>
                    </th>

                    <td className="px-6 py-4">
                      <div className="flex  gap-4">
                        <a x-data="{ tooltip: 'Delete' }" href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                            x-tooltip="tooltip"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </a>
                        <a x-data="{ tooltip: 'Edite' }" href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                            x-tooltip="tooltip"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                            />
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <DialogPop
              title={"Experience"}
              option_1={"Time"}
              option_2={"Position"}
              option_3={"Company"}
              option_4={"Description"}
            />
          </div>
        </div>
      </div>
      {/* Educational Qualifications */}
      <div className="m-[30px] rounded-xl bg-[#36404A] p-[30px]">
        <h2 className="text-xl font-medium text-white">
          Educational Qualifications Section Edit
        </h2>
        <div className="mt-[16px]">
          <div>
            <div className="m-5 overflow-hidden rounded-lg border border-gray-200 shadow-md">
              <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Position
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Company Name
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                  <tr className="hover:bg-gray-50">
                    <th className="  px-6 py-4 font-normal text-gray-900">
                      <div className="relative ">
                        <p>2021 - Present</p>
                      </div>
                    </th>
                    <th className="  px-6 py-4 font-normal text-gray-900">
                      <div className="relative ">
                        <p>Framer Designer & Developer</p>
                      </div>
                    </th>
                    <th className="  px-6 py-4 font-normal text-gray-900">
                      <div className="relative ">
                        <p>Liza Yoolo ITC Company</p>
                      </div>
                    </th>

                    <td className="px-6 py-4">
                      <div className="flex  gap-4">
                        <a x-data="{ tooltip: 'Delete' }" href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                            x-tooltip="tooltip"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </a>
                        <a x-data="{ tooltip: 'Edite' }" href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                            x-tooltip="tooltip"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                            />
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <DialogPop
              title={"Educational Qualifications"}
              option_1={"Time"}
              option_2={"Position"}
              option_3={"Institute"}
              option_4={"Description"}
            />
          </div>
        </div>
      </div>

      {/* My Advantages */}
      <div className="m-[30px] rounded-xl bg-[#36404A] p-[30px]">
        <h2 className="text-xl font-medium text-white">
          My Advantages Section Edit
        </h2>
        <div className="mt-[16px]">
          <div>
            <div className="m-5 overflow-hidden rounded-lg border border-gray-200 shadow-md">
              <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Position
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Company Name
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                  <tr className="hover:bg-gray-50">
                    <th className="  px-6 py-4 font-normal text-gray-900">
                      <div className="relative ">
                        <p>2021 - Present</p>
                      </div>
                    </th>
                    <th className="  px-6 py-4 font-normal text-gray-900">
                      <div className="relative ">
                        <p>Framer Designer & Developer</p>
                      </div>
                    </th>
                    <th className="  px-6 py-4 font-normal text-gray-900">
                      <div className="relative ">
                        <p>Liza Yoolo ITC Company</p>
                      </div>
                    </th>

                    <td className="px-6 py-4">
                      <div className="flex  gap-4">
                        <a x-data="{ tooltip: 'Delete' }" href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                            x-tooltip="tooltip"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </a>
                        <a x-data="{ tooltip: 'Edite' }" href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                            x-tooltip="tooltip"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                            />
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <DialogPop
              title={"Advantages"}
              option_1={"Time"}
              option_2={"Experience"}
              option_3={"Position"}
              option_4={"Count"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPageContentEditComponent;
