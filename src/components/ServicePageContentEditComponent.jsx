import React from "react";
import ServiceDialogPop from "../childComponents/ServiceDialogPop";
import TestimonialDialogPop from "../childComponents/TestimonialDialogPop";

const ServicePageContentEditComponent = () => {
  return (
    <section>
      <div className="m-[30px] rounded-xl bg-[#36404A] p-[30px]">
        <h2 className="text-xl font-medium text-white">Service Info Edit</h2>
        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label className="text-base">Service Info Edit</label>
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
              <label className="text-base">Description Edit</label>
              <div className="flex gap-3">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="Description"
                  className=" w-full rounded-lg border border-border bg-transparent px-3 py-3 outline-none placeholder:text-sm"
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
          Service Item Add/Remove Section
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
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Image
                    </th>

                    <th
                      scope="col"
                      className="flex justify-end px-6 py-4 font-medium text-gray-900"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                  <tr className="hover:bg-gray-50">
                    <th className="  px-6 py-4 font-normal text-gray-900">
                      <div className="relative ">
                        <p>Mobile Application</p>
                      </div>
                    </th>
                    <th className="  px-6 py-4 font-normal text-gray-900">
                      <div className="relative ">
                        <div class="relative h-10 w-12">
                          <img
                            className="h-full w-full rounded-lg object-cover object-center"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                      </div>
                    </th>

                    <td className="flex justify-end px-6 py-4">
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
            <ServiceDialogPop
              title={"Service"}
              option_1={"Title"}
              option_2={"image"}
              option_3={"description"}
            />
          </div>
        </div>
      </div>
      <div className="m-[30px] rounded-xl bg-[#36404A] p-[30px]">
        <h2 className="text-xl font-medium text-white">
          Testimonial Item Add/Remove Section
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
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Occupation
                    </th>

                    <th
                      scope="col"
                      className="flex justify-end px-6 py-4 font-medium text-gray-900"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                  <tr className="hover:bg-gray-50">
                    <th className="  px-6 py-4 font-normal text-gray-900">
                      <div className="relative ">
                        <p>Mobile Application</p>
                      </div>
                    </th>
                    <th className="  px-6 py-4 font-normal text-gray-900">
                      <div className="relative ">
                        <div class="relative h-10 w-12">
                          <img
                            className="h-full w-full rounded-lg object-cover object-center"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                      </div>
                    </th>
                    <th className="  px-6 py-4 font-normal text-gray-900">
                      <div className="relative ">
                        <p>Web Developer at CDM</p>
                      </div>
                    </th>

                    <td className="flex justify-end px-6 py-4">
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
            <TestimonialDialogPop
              title={"Testimonial"}
              option_1={"Name"}
              option_2={"Image Link"}
              option_3={"Review"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePageContentEditComponent;
