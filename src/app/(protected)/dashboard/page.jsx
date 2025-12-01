"use client";

import dynamic from "next/dynamic";
import {
  FaBed,
  FaUsers,
  FaCheck,
  FaDollarSign,
  FaArrowUp,
  FaArrowDown,
  FaClock,
  FaCalendarAlt,
  FaPlus,
  FaSignInAlt,
  FaSignOutAlt,
  FaChartLine,
} from "react-icons/fa";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function page() {
  const revenueChartOptions = {
    chart: {
      type: "area",
      toolbar: { show: false },
      height: 300,
    },
    colors: ["#0f172a"],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.1,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      labels: { style: { colors: "#64748b" } },
    },
    yaxis: {
      labels: { style: { colors: "#64748b" } },
    },
    grid: {
      borderColor: "#e2e8f0",
    },
    tooltip: {
      theme: "light",
    },
  };

  const revenueData = [
    {
      name: "Revenue",
      data: [1500000, 2000000, 1750000, 2500000, 2250000, 3000000, 2750000],
    },
  ];

  const occupancyChartOptions = {
    chart: {
      type: "donut",
      height: 300,
    },
    colors: ["#0f172a", "#475569", "#94a3b8"],
    labels: ["Occupied", "Available", "Maintenance"],
    legend: {
      position: "bottom",
      labels: { colors: "#64748b" },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
      },
    },
  };

  const occupancyData = [127, 18, 5];

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-600 mt-2">
            Welcome to your hotel management dashboard
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 border border-slate-200 rounded-md">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Total Rooms
                </h3>
                <p className="text-2xl font-bold text-slate-900 mt-2">150</p>
                <div className="flex items-center mt-1">
                  <FaArrowUp className="h-3 w-3 text-green-600 mr-1" />
                  <p className="text-xs text-green-600">+2% from last month</p>
                </div>
              </div>
              <div className="bg-blue-100 p-3 rounded-md">
                <FaBed className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 border border-slate-200 rounded-md">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Occupied
                </h3>
                <p className="text-2xl font-bold text-slate-900 mt-2">127</p>
                <div className="flex items-center mt-1">
                  <FaArrowUp className="h-3 w-3 text-green-600 mr-1" />
                  <p className="text-xs text-green-600">84.7% occupancy</p>
                </div>
              </div>
              <div className="bg-green-100 p-3 rounded-md">
                <FaUsers className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 border border-slate-200 rounded-md">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Available
                </h3>
                <p className="text-2xl font-bold text-slate-900 mt-2">18</p>
                <p className="text-xs text-blue-600 mt-1">Ready for booking</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-md">
                <FaCheck className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 border border-slate-200 rounded-md">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Revenue Today
                </h3>
                <p className="text-2xl font-bold text-slate-900 mt-2">
                  ₱622,500
                </p>
                <div className="flex items-center mt-1">
                  <FaArrowUp className="h-3 w-3 text-green-600 mr-1" />
                  <p className="text-xs text-green-600">+15% from yesterday</p>
                </div>
              </div>
              <div className="bg-emerald-100 p-3 rounded-md">
                <FaDollarSign className="h-6 w-6 text-emerald-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white p-6 border border-slate-200 rounded-md">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Revenue Trend
            </h2>
            <Chart
              options={revenueChartOptions}
              series={revenueData}
              type="area"
              height={300}
            />
          </div>

          <div className="bg-white p-6 border border-slate-200 rounded-md">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Room Occupancy
            </h2>
            <Chart
              options={occupancyChartOptions}
              series={occupancyData}
              type="donut"
              height={300}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 border border-slate-200 rounded-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-900">
                Recent Bookings
              </h2>
              <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                View All
              </button>
            </div>
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-md p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-md">
                      <FaBed className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Room 101 - Deluxe Suite
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">John Doe</p>
                      <div className="flex flex-col lg:flex-row lg:items-center mt-2 space-x-4 text-xs text-slate-500">
                        <div className="flex items-center">
                          <FaCalendarAlt className="h-3 w-3 mr-1" />
                          <span>Jan 27 - Jan 29</span>
                        </div>
                        <div className="flex items-center">
                          <FaClock className="h-3 w-3 mr-1" />
                          <span>3:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Confirmed
                    </span>
                    <p className="text-sm font-semibold text-slate-900 mt-2">
                      ₱15,000
                    </p>
                    <p className="text-xs text-slate-500">2 nights</p>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-md p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-2 rounded-md">
                      <FaBed className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Room 205 - Executive Room
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">Jane Smith</p>
                      <div className="flex flex-col lg:flex-row lg:items-center mt-2 space-x-4 text-xs text-slate-500">
                        <div className="flex items-center">
                          <FaCalendarAlt className="h-3 w-3 mr-1" />
                          <span>Jan 28 - Jan 31</span>
                        </div>
                        <div className="flex items-center">
                          <FaClock className="h-3 w-3 mr-1" />
                          <span>2:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Pending
                    </span>
                    <p className="text-sm font-semibold text-slate-900 mt-2">
                      ₱27,000
                    </p>
                    <p className="text-xs text-slate-500">3 nights</p>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-md p-4">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col lg:flex-row lg:items-center space-x-4">
                    <div className="bg-green-100 p-2 rounded-md">
                      <FaBed className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Room 312 - Standard Room
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">Bob Johnson</p>
                      <div className="flex items-center mt-2 space-x-4 text-xs text-slate-500">
                        <div className="flex items-center">
                          <FaCalendarAlt className="h-3 w-3 mr-1" />
                          <span>Jan 27 - Jan 28</span>
                        </div>
                        <div className="flex items-center">
                          <FaClock className="h-3 w-3 mr-1" />
                          <span>4:30 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Confirmed
                    </span>
                    <p className="text-sm font-semibold text-slate-900 mt-2">
                      ₱8,500
                    </p>
                    <p className="text-xs text-slate-500">1 night</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 border border-slate-200 rounded-md">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">
              Management Hub
            </h2>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between py-4 px-4 border border-slate-300 rounded-md text-sm font-medium text-slate-700 bg-white hover:bg-blue-50 hover:border-blue-300 focus:outline-none transition-all group">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-md mr-3 group-hover:bg-blue-200">
                    <FaPlus className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>New Reservation</span>
                </div>
                <FaArrowUp className="h-3 w-3 text-slate-400 rotate-45" />
              </button>

              <button className="w-full flex items-center justify-between py-4 px-4 border border-slate-300 rounded-md text-sm font-medium text-slate-700 bg-white hover:bg-green-50 hover:border-green-300 focus:outline-none transition-all group">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-md mr-3 group-hover:bg-green-200">
                    <FaSignInAlt className="h-4 w-4 text-green-600" />
                  </div>
                  <span>Check-in Guest</span>
                </div>
                <FaArrowUp className="h-3 w-3 text-slate-400 rotate-45" />
              </button>

              <button className="w-full flex items-center justify-between py-4 px-4 border border-slate-300 rounded-md text-sm font-medium text-slate-700 bg-white hover:bg-red-50 hover:border-red-300 focus:outline-none transition-all group">
                <div className="flex items-center">
                  <div className="bg-red-100 p-2 rounded-md mr-3 group-hover:bg-red-200">
                    <FaSignOutAlt className="h-4 w-4 text-red-600" />
                  </div>
                  <span>Check-out Guest</span>
                </div>
                <FaArrowUp className="h-3 w-3 text-slate-400 rotate-45" />
              </button>

              <button className="w-full flex items-center justify-between py-4 px-4 border border-slate-300 rounded-md text-sm font-medium text-slate-700 bg-white hover:bg-purple-50 hover:border-purple-300 focus:outline-none transition-all group">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-2 rounded-md mr-3 group-hover:bg-purple-200">
                    <FaChartLine className="h-4 w-4 text-purple-600" />
                  </div>
                  <span>Analytics Dashboard</span>
                </div>
                <FaArrowUp className="h-3 w-3 text-slate-400 rotate-45" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
