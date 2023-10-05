import React from "react";
import { FaBlog, FaRegEnvelope } from "react-icons/fa6";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  ComposedChart,
} from "recharts";

const HomeDashboardComponent = () => {
  const data = [
    {
      name: "Home",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "About",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Service",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Portfolio",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Blog",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Contact",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  ];
  const data_1 = [
    {
      name: "Page A",
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: "Page B",
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: "Page C",
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: "Page D",
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: "Page E",
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: "Page F",
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];

  return (
    <>
      <div className="m-[30px] grid grid-cols-12 gap-[30px]">
        <div className="col-span-3 flex items-center justify-between rounded-lg bg-[#36404A] p-[20px]">
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-cyan-500">
            <FaBlog className="text-[20px]" />
          </div>
          <div className="text-end">
            <p className="text-base text-text">Total Blog </p>
            <h2 className="text-[26px] font-semibold text-white">20</h2>
          </div>
        </div>
        <div className="col-span-3 flex items-center justify-between rounded-lg bg-[#36404A] p-[20px]">
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-cyan-500">
            <FaRegEnvelope className="text-[20px]" />
          </div>
          <div className="text-end">
            <p className="text-base text-text">Total Message </p>
            <h2 className="text-[26px] font-semibold text-white">60</h2>
          </div>
        </div>
        <div className="col-span-3 flex items-center justify-between rounded-lg bg-[#36404A] p-[20px]">
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-cyan-500">
            <FaBlog className="text-[20px]" />
          </div>
          <div className="text-end">
            <p className="text-base text-text">Total Comment </p>
            <h2 className="text-[26px] font-semibold text-white">20</h2>
          </div>
        </div>
        <div className="col-span-3 flex items-center justify-between rounded-lg bg-[#36404A] p-[20px]">
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-cyan-500">
            <FaBlog className="text-[20px]" />
          </div>
          <div className="text-end">
            <p className="text-base text-text">Total Project </p>
            <h2 className="text-[26px] font-semibold text-white">40</h2>
          </div>
        </div>
      </div>

      {/* Chat Overview */}
      <div className="mx-[30px] grid grid-cols-12 gap-[30px]">
        <div className="col-span-7">
          <div className=" h-[450px] w-full rounded-lg bg-[#36404A] px-[20px] py-[50px]">
            <div>
              <h2 className="mb-2 text-base">
                Visitor Overview -{" "}
                <span className="text-sm text-white">
                  Thursday, October 5, 2023
                </span>
              </h2>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                stroke="#00BCD4"
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 20,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" height={60} stroke="#c4cfde" />
                <YAxis stroke="#c4cfde" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#00BCD4" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-span-5">
          <div className=" h-[450px] w-full rounded-lg bg-[#36404A] px-[20px] py-[50px]">
            <div>
              <h2 className="mb-2 text-base">
                Visitor Overview -{" "}
                <span className="text-sm text-white">
                  Thursday, October 5, 2023
                </span>
              </h2>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={data}
                stroke="#00BCD4"
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" barSize={20} fill="#00BCD4" />
                <Line type="monotone" dataKey="uv" stroke="#ddd" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDashboardComponent;
