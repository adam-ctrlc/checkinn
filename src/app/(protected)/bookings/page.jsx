"use client";

import {
  FaBed,
  FaUser,
  FaCalendarAlt,
  FaClock,
  FaPhone,
  FaEnvelope,
  FaEdit,
  FaTrash,
  FaPlus,
  FaFilter,
  FaSearch,
  FaCheckCircle,
  FaTimesCircle,
  FaHourglass,
} from "react-icons/fa";

export default function page() {
  const bookings = [
    {
      id: "BK001",
      guestName: "John Doe",
      email: "john.doe@email.com",
      phone: "+63 912 345 6789",
      roomNumber: 101,
      roomType: "Deluxe Suite",
      checkIn: "2024-01-27",
      checkOut: "2024-01-29",
      nights: 2,
      guests: 2,
      totalAmount: 15000,
      status: "confirmed",
      bookingDate: "2024-01-20",
      specialRequests: "Late check-in requested",
    },
    {
      id: "BK002",
      guestName: "Jane Smith",
      email: "jane.smith@email.com",
      phone: "+63 917 234 5678",
      roomNumber: 205,
      roomType: "Executive Room",
      checkIn: "2024-01-28",
      checkOut: "2024-01-31",
      nights: 3,
      guests: 2,
      totalAmount: 18000,
      status: "pending",
      bookingDate: "2024-01-22",
      specialRequests: "Twin beds preferred",
    },
    {
      id: "BK003",
      guestName: "Bob Johnson",
      email: "bob.johnson@email.com",
      phone: "+63 905 876 5432",
      roomNumber: 312,
      roomType: "Standard Room",
      checkIn: "2024-01-27",
      checkOut: "2024-01-28",
      nights: 1,
      guests: 1,
      totalAmount: 4500,
      status: "confirmed",
      bookingDate: "2024-01-25",
      specialRequests: null,
    },
    {
      id: "BK004",
      guestName: "Maria Garcia",
      email: "maria.garcia@email.com",
      phone: "+63 920 111 2233",
      roomNumber: 408,
      roomType: "Executive Room",
      checkIn: "2024-01-30",
      checkOut: "2024-02-02",
      nights: 3,
      guests: 3,
      totalAmount: 18000,
      status: "cancelled",
      bookingDate: "2024-01-18",
      specialRequests: "Extra bed required",
    },
    {
      id: "BK005",
      guestName: "David Wilson",
      email: "david.wilson@email.com",
      phone: "+63 932 456 7890",
      roomNumber: 506,
      roomType: "Deluxe Suite",
      checkIn: "2024-02-01",
      checkOut: "2024-02-05",
      nights: 4,
      guests: 2,
      totalAmount: 30000,
      status: "pending",
      bookingDate: "2024-01-26",
      specialRequests: "Airport pickup requested",
    },
    {
      id: "BK006",
      guestName: "Sarah Brown",
      email: "sarah.brown@email.com",
      phone: "+63 915 333 4444",
      roomNumber: 203,
      roomType: "Standard Room",
      checkIn: "2024-01-29",
      checkOut: "2024-01-31",
      nights: 2,
      guests: 1,
      totalAmount: 9000,
      status: "confirmed",
      bookingDate: "2024-01-24",
      specialRequests: "Quiet room preferred",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      case "checked-in":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "confirmed":
        return <FaCheckCircle className="h-4 w-4 text-green-600" />;
      case "pending":
        return <FaHourglass className="h-4 w-4 text-yellow-600" />;
      case "cancelled":
        return <FaTimesCircle className="h-4 w-4 text-red-600" />;
      case "checked-in":
        return <FaCheckCircle className="h-4 w-4 text-blue-600" />;
      default:
        return <FaHourglass className="h-4 w-4 text-gray-600" />;
    }
  };

  const confirmedBookings = bookings.filter(
    (b) => b.status === "confirmed"
  ).length;
  const pendingBookings = bookings.filter((b) => b.status === "pending").length;
  const cancelledBookings = bookings.filter(
    (b) => b.status === "cancelled"
  ).length;
  const totalRevenue = bookings
    .filter((b) => b.status === "confirmed")
    .reduce((sum, b) => sum + b.totalAmount, 0);

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Booking Management
          </h1>
          <p className="text-slate-600 mt-2">
            Manage and monitor all hotel bookings
          </p>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 border border-slate-200 rounded-md">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Total Bookings
                </h3>
                <p className="text-2xl font-bold text-slate-900 mt-2">
                  {bookings.length}
                </p>
                <p className="text-xs text-slate-500 mt-1">All time</p>
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
                  Confirmed
                </h3>
                <p className="text-2xl font-bold text-slate-900 mt-2">
                  {confirmedBookings}
                </p>
                <p className="text-xs text-green-600 mt-1">Active bookings</p>
              </div>
              <div className="bg-green-100 p-3 rounded-md">
                <FaCheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 border border-slate-200 rounded-md">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Pending
                </h3>
                <p className="text-2xl font-bold text-slate-900 mt-2">
                  {pendingBookings}
                </p>
                <p className="text-xs text-yellow-600 mt-1">
                  Awaiting confirmation
                </p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-md">
                <FaHourglass className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 border border-slate-200 rounded-md">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Revenue
                </h3>
                <p className="text-2xl font-bold text-slate-900 mt-2">
                  ₱{totalRevenue.toLocaleString()}
                </p>
                <p className="text-xs text-green-600 mt-1">
                  Confirmed bookings
                </p>
              </div>
              <div className="bg-emerald-100 p-3 rounded-md">
                <FaUser className="h-6 w-6 text-emerald-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-6 border border-slate-200 rounded-md mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search bookings..."
                  className="pl-10 pr-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-slate-500 text-sm"
                />
              </div>
              <button className="flex items-center px-4 py-2 border border-slate-300 rounded-md text-sm font-medium text-slate-700 bg-white hover:bg-slate-50">
                <FaFilter className="h-4 w-4 mr-2" />
                Filter
              </button>
            </div>
            <button className="flex items-center px-4 py-2 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-800">
              <FaPlus className="h-4 w-4 mr-2" />
              New Booking
            </button>
          </div>
        </div>

        {/* Bookings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white border border-slate-200 rounded-md overflow-hidden hover:border-slate-400 transition-colors flex flex-col h-full"
            >
              {/* Header */}
              <div className="p-4 border-b border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {booking.guestName}
                  </h3>
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      booking.status
                    )}`}
                  >
                    {booking.status.charAt(0).toUpperCase() +
                      booking.status.slice(1)}
                  </span>
                </div>
                <p className="text-sm text-slate-600">
                  Booking ID: {booking.id}
                </p>
              </div>

              {/* Booking Details */}
              <div className="p-4 flex-1">
                <div className="space-y-3">
                  {/* Contact Info */}
                  <div className="flex items-center text-sm text-slate-600">
                    <FaEnvelope className="h-4 w-4 mr-2 text-slate-400" />
                    <span className="truncate">{booking.email}</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <FaPhone className="h-4 w-4 mr-2 text-slate-400" />
                    <span>{booking.phone}</span>
                  </div>

                  {/* Room Info */}
                  <div className="bg-slate-50 p-3 rounded-md">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <FaBed className="h-4 w-4 mr-2 text-slate-400" />
                        <span className="text-sm font-medium text-slate-900">
                          Room {booking.roomNumber}
                        </span>
                      </div>
                      <span className="text-sm text-slate-600">
                        {booking.roomType}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500">
                      {booking.guests} guest{booking.guests > 1 ? "s" : ""} •{" "}
                      {booking.nights} night{booking.nights > 1 ? "s" : ""}
                    </div>
                  </div>

                  {/* Date Info */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="flex items-center text-xs text-slate-500 mb-1">
                        <FaCalendarAlt className="h-3 w-3 mr-1" />
                        Check-in
                      </div>
                      <p className="text-sm font-medium text-slate-900">
                        {new Date(booking.checkIn).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center text-xs text-slate-500 mb-1">
                        <FaCalendarAlt className="h-3 w-3 mr-1" />
                        Check-out
                      </div>
                      <p className="text-sm font-medium text-slate-900">
                        {new Date(booking.checkOut).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  {/* Special Requests */}
                  {booking.specialRequests && (
                    <div className="bg-blue-50 p-2 rounded-md max-h-16 overflow-hidden">
                      <p className="text-xs font-medium text-blue-900 mb-1">
                        Special Requests
                      </p>
                      <p className="text-xs text-blue-700">
                        {booking.specialRequests}
                      </p>
                    </div>
                  )}

                  {/* Total Amount */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-600">
                        Total Amount
                      </span>
                      <span className="text-lg font-bold text-slate-900">
                        ₱{booking.totalAmount.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-4 border-t border-slate-100 mt-auto">
                <div className="flex space-x-2">
                  <button className="flex-1 flex items-center justify-center py-2 px-3 border border-slate-300 rounded-md text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors">
                    <FaEdit className="h-3 w-3 mr-1" />
                    Edit
                  </button>
                  <button className="flex items-center justify-center py-2 px-3 border border-red-300 rounded-md text-sm font-medium text-red-700 bg-white hover:bg-red-50 transition-colors">
                    <FaTrash className="h-3 w-3" />
                  </button>
                  <div className="flex items-center">
                    {getStatusIcon(booking.status)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
