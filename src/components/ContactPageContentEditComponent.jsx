import React from "react";
import ServiceDialogPop from "../childComponents/ServiceDialogPop";
import TestimonialDialogPop from "../childComponents/TestimonialDialogPop";

const ContactPageContentEditComponent = () => {
  return (
    <section>
      <div className="m-[30px] rounded-xl bg-[#36404A] p-[30px]">
        <h2 className="text-xl font-medium text-white">Contact Info Edit</h2>
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
        <h2 className="text-xl font-medium text-white">Contact Info Edit</h2>
        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label className="text-base">Google Map Edit</label>
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
    </section>
  );
};

export default ContactPageContentEditComponent;
