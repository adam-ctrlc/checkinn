"use client";

import dynamic from 'next/dynamic';
import { FaChartBar, FaCalendarAlt, FaDownload, FaPrint, FaFilter, FaArrowUp, FaArrowDown, FaBed, FaUsers, FaDollarSign, FaChartLine } from 'react-icons/fa';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function page() {
  // Revenue Chart Data
  const revenueChartOptions = {
    chart: {
      type: 'line',
      toolbar: { show: false },
      height: 350
    },
    colors: ['#0f172a', '#475569'],
    stroke: {
      curve: 'smooth',
      width: 3
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: { style: { colors: '#64748b' } }
    },
    yaxis: {
      labels: { 
        style: { colors: '#64748b' },
        formatter: function (val) {
          return '₱' + val.toLocaleString();
        }
      }
    },
    grid: {
      borderColor: '#e2e8f0'
    },
    tooltip: {
      theme: 'light',
      y: {
        formatter: function (val) {
          return '₱' + val.toLocaleString();
        }
      }
    },
    legend: {
      position: 'top',
      labels: { colors: '#64748b' }
    }
  };

  const revenueData = [
    {
      name: '2024',
      data: [2500000, 2800000, 3200000, 2900000, 3500000, 4200000, 4800000, 4500000, 3800000, 3600000, 3200000, 4000000]
    },
    {
      name: '2023',
      data: [2200000, 2400000, 2800000, 2600000, 3000000, 3500000, 4000000, 3800000, 3200000, 3000000, 2800000, 3200000]
    }
  ];

  // Occupancy Chart Data
  const occupancyChartOptions = {
    chart: {
      type: 'area',
      toolbar: { show: false },
      height: 350
    },
    colors: ['#0f172a'],
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.1,
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: { style: { colors: '#64748b' } }
    },
    yaxis: {
      labels: { 
        style: { colors: '#64748b' },
        formatter: function (val) {
          return val + '%';
        }
      },
      max: 100
    },
    grid: {
      borderColor: '#e2e8f0'
    },
    tooltip: {
      theme: 'light',
      y: {
        formatter: function (val) {
          return val + '%';
        }
      }
    }
  };

  const occupancyData = [{
    name: 'Occupancy Rate',
    data: [78, 82, 88, 75, 92, 95, 98, 94, 85, 80, 75, 85]
  }];

  // Room Type Revenue Chart
  const roomTypeChartOptions = {
    chart: {
      type: 'donut',
      height: 350
    },
    colors: ['#0f172a', '#475569', '#94a3b8', '#cbd5e1'],
    labels: ['Deluxe Suite', 'Executive Room', 'Standard Room', 'Family Room'],
    legend: {
      position: 'bottom',
      labels: { colors: '#64748b' }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total Revenue',
              formatter: function () {
                return '₱42.8M';
              }
            }
          }
        }
      }
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '₱' + val.toLocaleString();
        }
      }
    }
  };

  const roomTypeData = [18500000, 12300000, 8600000, 3400000];

  // Monthly Growth Chart
  const growthChartOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      height: 300
    },
    colors: ['#10b981'],
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      }
    },
    xaxis: {
      categories: ['Q1', 'Q2', 'Q3', 'Q4'],
      labels: { style: { colors: '#64748b' } }
    },
    yaxis: {
      labels: { 
        style: { colors: '#64748b' },
        formatter: function (val) {
          return val + '%';
        }
      }
    },
    grid: {
      borderColor: '#e2e8f0'
    },
    tooltip: {
      theme: 'light',
      y: {
        formatter: function (val) {
          return val + '% growth';
        }
      }
    }
  };

  const growthData = [{
    name: 'Growth Rate',
    data: [15, 23, 18, 28]
  }];

  const reportData = {
    totalRevenue: 42800000,
    monthlyGrowth: 18.5,
    averageOccupancy: 85.2,
    totalBookings: 2847,
    averageStay: 2.3,
    customerSatisfaction: 4.7
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Reports & Analytics</h1>
              <p className="text-slate-600 mt-2">Comprehensive hotel performance insights</p>
            </div>
            <div className="flex space-x-3">
              <button className="flex items-center px-4 py-2 border border-slate-300 rounded-md text-sm font-medium text-slate-700 bg-white hover:bg-slate-50">
                <FaFilter className="h-4 w-4 mr-2" />
                Filter
              </button>
              <button className="flex items-center px-4 py-2 border border-slate-300 rounded-md text-sm font-medium text-slate-700 bg-white hover:bg-slate-50">
                <FaPrint className="h-4 w-4 mr-2" />
                Print
              </button>
              <button className="flex items-center px-4 py-2 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-800">
                <FaDownload className="h-4 w-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </header>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 border border-slate-200 rounded-md">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-slate-600 uppercase tracking-wide">Total Revenue</h3>
                <p className="text-2xl font-bold text-slate-900 mt-2">₱{reportData.totalRevenue.toLocaleString()}</p>
                <div className="flex items-center mt-1">
                  <FaArrowUp className="h-3 w-3 text-green-600 mr-1" />
                  <p className="text-xs text-green-600">+{reportData.monthlyGrowth}% this month</p>
                </div>
              </div>
              <div className="bg-emerald-100 p-3 rounded-md">
                <FaDollarSign className="h-6 w-6 text-emerald-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 border border-slate-200 rounded-md">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-slate-600 uppercase tracking-wide">Avg Occupancy</h3>
                <p className="text-2xl font-bold text-slate-900 mt-2">{reportData.averageOccupancy}%</p>
                <div className="flex items-center mt-1">
                  <FaArrowUp className="h-3 w-3 text-green-600 mr-1" />
                  <p className="text-xs text-green-600">+3.2% vs last month</p>
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
                <h3 className="text-sm font-medium text-slate-600 uppercase tracking-wide">Total Bookings</h3>
                <p className="text-2xl font-bold text-slate-900 mt-2">{reportData.totalBookings.toLocaleString()}</p>
                <div className="flex items-center mt-1">
                  <FaArrowUp className="h-3 w-3 text-green-600 mr-1" />
                  <p className="text-xs text-green-600">+156 this month</p>
                </div>
              </div>
              <div className="bg-purple-100 p-3 rounded-md">
                <FaUsers className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 border border-slate-200 rounded-md">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-slate-600 uppercase tracking-wide">Satisfaction</h3>
                <p className="text-2xl font-bold text-slate-900 mt-2">{reportData.customerSatisfaction}/5.0</p>
                <div className="flex items-center mt-1">
                  <FaArrowUp className="h-3 w-3 text-green-600 mr-1" />
                  <p className="text-xs text-green-600">+0.2 rating increase</p>
                </div>
              </div>
              <div className="bg-yellow-100 p-3 rounded-md">
                <FaChartLine className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Comparison */}
          <div className="bg-white p-6 border border-slate-200 rounded-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-900">Revenue Comparison</h2>
              <div className="flex items-center space-x-2">
                <FaCalendarAlt className="h-4 w-4 text-slate-400" />
                <span className="text-sm text-slate-600">2023 vs 2024</span>
              </div>
            </div>
            <Chart
              options={revenueChartOptions}
              series={revenueData}
              type="line"
              height={350}
            />
          </div>

          {/* Occupancy Rate */}
          <div className="bg-white p-6 border border-slate-200 rounded-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-900">Occupancy Rate Trend</h2>
              <div className="flex items-center space-x-2">
                <FaCalendarAlt className="h-4 w-4 text-slate-400" />
                <span className="text-sm text-slate-600">Last 12 months</span>
              </div>
            </div>
            <Chart
              options={occupancyChartOptions}
              series={occupancyData}
              type="area"
              height={350}
            />
          </div>
        </div>

        {/* Secondary Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Room Type Revenue */}
          <div className="bg-white p-6 border border-slate-200 rounded-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-900">Revenue by Room Type</h2>
              <FaChartBar className="h-5 w-5 text-slate-400" />
            </div>
            <Chart
              options={roomTypeChartOptions}
              series={roomTypeData}
              type="donut"
              height={350}
            />
          </div>

          {/* Quarterly Growth */}
          <div className="bg-white p-6 border border-slate-200 rounded-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-900">Quarterly Growth</h2>
              <FaChartLine className="h-5 w-5 text-slate-400" />
            </div>
            <Chart
              options={growthChartOptions}
              series={growthData}
              type="bar"
              height={300}
            />
            <div className="mt-4 text-center">
              <p className="text-sm text-slate-600">Average quarterly growth: <span className="font-semibold text-slate-900">21%</span></p>
            </div>
          </div>

          {/* Key Performance Indicators */}
          <div className="bg-white p-6 border border-slate-200 rounded-md">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">Key Performance Indicators</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <span className="text-sm font-medium text-slate-600">Average Stay Duration</span>
                <span className="text-sm font-bold text-slate-900">{reportData.averageStay} nights</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <span className="text-sm font-medium text-slate-600">Revenue per Room</span>
                <span className="text-sm font-bold text-slate-900">₱285,333</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <span className="text-sm font-medium text-slate-600">Booking Conversion</span>
                <span className="text-sm font-bold text-slate-900">68.4%</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <span className="text-sm font-medium text-slate-600">Repeat Customers</span>
                <span className="text-sm font-bold text-slate-900">42.1%</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <span className="text-sm font-medium text-slate-600">Cancellation Rate</span>
                <span className="text-sm font-bold text-red-600">8.3%</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-sm font-medium text-slate-600">Peak Season Uplift</span>
                <span className="text-sm font-bold text-slate-900">+35%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
