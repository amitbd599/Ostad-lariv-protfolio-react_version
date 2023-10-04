import React from "react";

const HomePageContentEditComponent = () => {
  return (
    <section>
      <div className="m-[30px] rounded-xl bg-[#36404A] p-[30px]">
        <h2 className="text-xl font-medium text-white">
          Home Page content Edit Section
        </h2>
        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label className="text-base">Heading Title Edit</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Up Text"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Down Text"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-base">Description Content Edit</label>
              <div className="flex gap-3">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Description"
                  className=" w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                ></textarea>
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-base">Button Edit</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Button Cover Text"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Button Link"
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
        <h2 className="text-xl font-medium text-white">Counter Section Edit</h2>
        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label className="text-base">Counter Section One Edit</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Count Number"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Description"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-base">Counter Section Two Edit</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Count Number"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Description"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-base">Counter Section Three Edit</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Count Number"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Description"
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
          Home Profile Image Edit Section
        </h2>
        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label className="text-base">Profile Image Edit</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Image Link"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-base">Shape Content Edit</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Counter"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Text info"
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
    </section>
  );
};

export default HomePageContentEditComponent;
