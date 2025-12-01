"use client";

import { FaCalendarAlt, FaUser, FaBed, FaArrowRight, FaFilter, FaSearch, FaDownload, FaCheckCircle, FaTimesCircle, FaClock, FaEye } from 'react-icons/fa';

export default function page() {
  const historyData = [
    {
      id: "H001",
      date: "2024-01-27",
      time: "14:30",
      action: "Booking Created",
      description: "New booking created for Room 101",
      guestName: "John Doe",
      roomNumber: 101,
      status: "completed",
      details: "Deluxe Suite - 2 nights",
      amount: "₱15,000"
    },
    {
      id: "H002",
      date: "2024-01-27",
      time: "15:45",
      action: "Check-in",
      description: "Guest checked into Room 312",
      guestName: "Bob Johnson",
      roomNumber: 312,
      status: "completed",
      details: "Standard Room - 1 night",
      amount: "₱4,500"
    },
    {
      id: "H003",
      date: "2024-01-26",
      time: "11:20",
      action: "Payment Received",
      description: "Payment processed for booking BK002",
      guestName: "Jane Smith",
      roomNumber: 205,
      status: "completed",
      details: "Executive Room - 3 nights",
      amount: "₱18,000"
    },
    {
      id: "H004",
      date: "2024-01-26",
      time: "09:15",
      action: "Booking Cancelled",
      description: "Booking cancelled by guest",
      guestName: "Maria Garcia",
      roomNumber: 408,
      status: "cancelled",
      details: "Executive Room - 3 nights",
      amount: "₱18,000"
    },
    {
      id: "H005",
      date: "2024-01-25",
      time: "16:30",
      action: "Check-out",
      description: "Guest checked out from Room 201",
      guestName: "Sarah Wilson",
      roomNumber: 201,
      status: "completed",
      details: "Standard Room - 2 nights",
      amount: "₱9,000"
    },
    {
      id: "H006",
      date: "2024-01-25",
      time: "13:45",
      action: "Room Assignment",
      description: "Room assigned to new booking",
      guestName: "David Lee",
      roomNumber: 506,
      status: "completed",
      details: "Deluxe Suite - 4 nights",
      amount: "₱30,000"
    },
    {
      id: "H007",
      date: "2024-01-24",
      time: "10:20",
      action: "Booking Modified",
      description: "Booking dates updated",
      guestName: "Emma Brown",
      roomNumber: 203,
      status: "completed",
      details: "Standard Room - 2 nights",
      amount: "₱9,000"
    },
    {
      id: "H008",
      date: "2024-01-24",
      time: "14:10",
      action: "Special Request",
      description: "Late check-in requested",
      guestName: "Michael Chen",
      roomNumber: 305,
      status: "pending",
      details: "Executive Room - 1 night",
      amount: "₱6,000"
    },
    {
      id: "H009",
      date: "2024-01-23",
      time: "17:25",
      action: "Maintenance Request",
      description: "Room maintenance scheduled",
      guestName: null,
      roomNumber: 102,
      status: "completed",
      details: "Air conditioning repair",
      amount: null
    },
    {
      id: "H010",
      date: "2024-01-23",
      time: "12:40",
      action: "Payment Refund",
      description: "Refund processed for cancelled booking",
      guestName: "Lisa Anderson",
      roomNumber: 410,
      status: "completed",
      details: "Family Room - 5 nights",
      amount: "₱22,500"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <FaCheckCircle className="h-4 w-4 text-green-600" />;
      case 'pending':
        return <FaClock className="h-4 w-4 text-yellow-600" />;
      case 'cancelled':
        return <FaTimesCircle className="h-4 w-4 text-red-600" />;
      default:
        return <FaClock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getActionIcon = (action) => {
    switch (action.toLowerCase()) {
      case 'booking created':
      case 'booking modified':
        return <FaBed className="h-4 w-4 text-blue-600" />;
      case 'check-in':
      case 'check-out':
        return <FaArrowRight className="h-4 w-4 text-green-600" />;
      case 'payment received':
      case 'payment refund':
        return <FaCheckCircle className="h-4 w-4 text-emerald-600" />;
      default:
        return <FaUser className="h-4 w-4 text-slate-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Activity History</h1>
              <p className="text-slate-600 mt-2">Track all hotel operations and transactions</p>
            </div>
            <div className="flex space-x-3">
              <button className="flex items-center px-4 py-2 border border-slate-300 rounded-md text-sm font-medium text-slate-700 bg-white hover:bg-slate-50">
                <FaFilter className="h-4 w-4 mr-2" />
                Filter
              </button>
              <button className="flex items-center px-4 py-2 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-800">
                <FaDownload className="h-4 w-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </header>

        {/* Search and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Search */}
          <div className="lg:col-span-2 bg-white p-6 border border-slate-200 rounded-md">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by guest name, room number, or action..."
                className="pl-10 pr-4 py-3 w-full border border-slate-300 rounded-md focus:outline-none focus:border-slate-500 text-sm"
              />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="bg-white p-6 border border-slate-200 rounded-md">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-slate-600 uppercase tracking-wide">Today's Actions</h3>
                <p className="text-2xl font-bold text-slate-900 mt-2">24</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-md">
                <FaCalendarAlt className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 border border-slate-200 rounded-md">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-slate-600 uppercase tracking-wide">This Week</h3>
                <p className="text-2xl font-bold text-slate-900 mt-2">156</p>
              </div>
              <div className="bg-green-100 p-3 rounded-md">
                <FaCheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* History Timeline */}
        <div className="bg-white border border-slate-200 rounded-md">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Recent Activity</h2>
          </div>
          
          <div className="divide-y divide-slate-100">
            {historyData.map((item) => (
              <div key={item.id} className="p-6 hover:bg-slate-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="bg-slate-100 p-2 rounded-md flex-shrink-0">
                      {getActionIcon(item.action)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-sm font-semibold text-slate-900">{item.action}</h3>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                        </span>
                      </div>
                      
                      <p className="text-sm text-slate-600 mb-2">{item.description}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                        <div className="flex items-center">
                          <FaCalendarAlt className="h-3 w-3 mr-1" />
                          <span>{new Date(item.date).toLocaleDateString()} at {item.time}</span>
                        </div>
                        
                        {item.guestName && (
                          <div className="flex items-center">
                            <FaUser className="h-3 w-3 mr-1" />
                            <span>{item.guestName}</span>
                          </div>
                        )}
                        
                        {item.roomNumber && (
                          <div className="flex items-center">
                            <FaBed className="h-3 w-3 mr-1" />
                            <span>Room {item.roomNumber}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-2 text-xs text-slate-600">
                        {item.details}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 ml-4">
                    {item.amount && (
                      <span className="text-sm font-semibold text-slate-900">{item.amount}</span>
                    )}
                    
                    <button className="flex items-center px-3 py-1 border border-slate-300 rounded-md text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors">
                      <FaEye className="h-3 w-3 mr-1" />
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More */}
          <div className="p-6 border-t border-slate-200 text-center">
            <button className="px-6 py-2 border border-slate-300 rounded-md text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors">
              Load More Activities
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
