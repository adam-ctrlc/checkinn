"use client";

import {
  FaBed,
  FaUsers,
  FaWifi,
  FaTv,
  FaCoffee,
  FaBath,
  FaSnowflake,
  FaEdit,
  FaTrash,
  FaPlus,
  FaFilter,
  FaSearch,
} from "react-icons/fa";

export default function page() {
  const rooms = [
    {
      id: 101,
      type: "Deluxe Suite",
      status: "occupied",
      guest: "John Doe",
      checkOut: "Jan 29",
      price: 7500,
      capacity: 2,
      amenities: ["WiFi", "TV", "Mini Bar", "AC", "Bathroom"],
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop",
    },
    {
      id: 102,
      type: "Standard Room",
      status: "available",
      guest: null,
      checkOut: null,
      price: 4500,
      capacity: 2,
      amenities: ["WiFi", "TV", "AC", "Bathroom"],
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop",
    },
    {
      id: 103,
      type: "Executive Room",
      status: "maintenance",
      guest: null,
      checkOut: null,
      price: 6000,
      capacity: 3,
      amenities: ["WiFi", "TV", "Mini Bar", "AC", "Bathroom", "Balcony"],
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
    },
    {
      id: 104,
      type: "Standard Room",
      status: "available",
      guest: null,
      checkOut: null,
      price: 4500,
      capacity: 2,
      amenities: ["WiFi", "TV", "AC", "Bathroom"],
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop",
    },
    {
      id: 205,
      type: "Executive Room",
      status: "occupied",
      guest: "Jane Smith",
      checkOut: "Jan 31",
      price: 6000,
      capacity: 3,
      amenities: ["WiFi", "TV", "Mini Bar", "AC", "Bathroom", "Balcony"],
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
    },
    {
      id: 206,
      type: "Deluxe Suite",
      status: "available",
      guest: null,
      checkOut: null,
      price: 7500,
      capacity: 2,
      amenities: ["WiFi", "TV", "Mini Bar", "AC", "Bathroom"],
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop",
    },
    {
      id: 312,
      type: "Standard Room",
      status: "occupied",
      guest: "Bob Johnson",
      checkOut: "Jan 28",
      price: 4500,
      capacity: 2,
      amenities: ["WiFi", "TV", "AC", "Bathroom"],
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop",
    },
    {
      id: 313,
      type: "Standard Room",
      status: "available",
      guest: null,
      checkOut: null,
      price: 4500,
      capacity: 2,
      amenities: ["WiFi", "TV", "AC", "Bathroom"],
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "occupied":
        return "bg-red-100 text-red-800";
      case "available":
        return "bg-green-100 text-green-800";
      case "maintenance":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getAmenityIcon = (amenity) => {
    switch (amenity.toLowerCase()) {
      case "wifi":
        return <FaWifi className="h-3 w-3" />;
      case "tv":
        return <FaTv className="h-3 w-3" />;
      case "mini bar":
        return <FaCoffee className="h-3 w-3" />;
      case "ac":
        return <FaSnowflake className="h-3 w-3" />;
      case "bathroom":
        return <FaBath className="h-3 w-3" />;
      default:
        return <FaBed className="h-3 w-3" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Room Management</h1>
          <p className="text-slate-600 mt-2">
            Manage and monitor all hotel rooms
          </p>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 border border-slate-200 rounded-md">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Total Rooms
                </h3>
                <p className="text-2xl font-bold text-slate-900 mt-2">150</p>
                <p className="text-xs text-slate-500 mt-1">All floors</p>
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
                <p className="text-xs text-green-600 mt-1">84.7% occupancy</p>
              </div>
              <div className="bg-red-100 p-3 rounded-md">
                <FaUsers className="h-6 w-6 text-red-600" />
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
                <p className="text-xs text-green-600 mt-1">Ready to book</p>
              </div>
              <div className="bg-green-100 p-3 rounded-md">
                <FaBed className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 border border-slate-200 rounded-md">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Maintenance
                </h3>
                <p className="text-2xl font-bold text-slate-900 mt-2">5</p>
                <p className="text-xs text-yellow-600 mt-1">Under repair</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-md">
                <FaBed className="h-6 w-6 text-yellow-600" />
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
                  placeholder="Search rooms..."
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
              Add New Room
            </button>
          </div>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white border border-slate-200 rounded-md overflow-hidden hover:border-slate-400 transition-colors flex flex-col h-full"
            >
              {/* Room Image */}
              <div className="relative h-48 bg-gray-200">
                <div className="absolute top-3 left-3">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      room.status
                    )}`}
                  >
                    {room.status.charAt(0).toUpperCase() + room.status.slice(1)}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-slate-900 text-white">
                    Room {room.id}
                  </span>
                </div>
              </div>

              {/* Room Details */}
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {room.type}
                    </h3>
                    <p className="text-sm text-slate-600">
                      Capacity: {room.capacity} guests
                    </p>
                  </div>
                  <p className="text-lg font-bold text-slate-900">
                    ₱{room.price.toLocaleString()}
                  </p>
                </div>

                {room.guest ? (
                  <div className="mb-3 p-2 bg-slate-50 rounded-md h-12 flex flex-col justify-center">
                    <p className="text-sm font-medium text-slate-900">
                      {room.guest}
                    </p>
                    <p className="text-xs text-slate-500">
                      Check-out: {room.checkOut}
                    </p>
                  </div>
                ) : (
                  <div className="mb-3 h-12"></div>
                )}

                {/* Amenities */}
                <div className="mb-4 flex-1">
                  <p className="text-xs font-medium text-slate-600 mb-2">
                    Amenities
                  </p>
                  <div className="flex flex-wrap gap-2 max-h-16 overflow-hidden">
                    {room.amenities.slice(0, 4).map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-1 bg-slate-100 px-2 py-1 rounded text-xs text-slate-600"
                      >
                        {getAmenityIcon(amenity)}
                        <span>{amenity}</span>
                      </div>
                    ))}
                    {room.amenities.length > 4 && (
                      <div className="flex items-center bg-slate-100 px-2 py-1 rounded text-xs text-slate-600">
                        +{room.amenities.length - 4} more
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2 mt-auto">
                  <button className="flex-1 flex items-center justify-center py-2 px-3 border border-slate-300 rounded-md text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors">
                    <FaEdit className="h-3 w-3 mr-1" />
                    Edit
                  </button>
                  <button className="flex items-center justify-center py-2 px-3 border border-red-300 rounded-md text-sm font-medium text-red-700 bg-white hover:bg-red-50 transition-colors">
                    <FaTrash className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
