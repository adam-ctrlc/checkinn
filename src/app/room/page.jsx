"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, Info, Check, X, Search, Filter, Star, 
  Wifi, Coffee, Wind, Tv, Bath, Users 
} from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Mock data for rooms
const FLOORS = 5;
const ROOMS_PER_FLOOR = 10;

const ROOM_STATUS = {
  AVAILABLE: "available",
  TAKEN: "taken",
  RESERVED: "reserved",
  MAINTENANCE: "maintenance",
};

const STATUS_COLORS = {
  [ROOM_STATUS.AVAILABLE]: "bg-green-500 hover:bg-green-400 ring-green-500/50",
  [ROOM_STATUS.TAKEN]: "bg-red-500 hover:bg-red-400 ring-red-500/50",
  [ROOM_STATUS.RESERVED]: "bg-yellow-500 hover:bg-yellow-400 ring-yellow-500/50",
  [ROOM_STATUS.MAINTENANCE]: "bg-slate-400 hover:bg-slate-300 ring-slate-400/50",
};

const STATUS_LABELS = {
  [ROOM_STATUS.AVAILABLE]: "Available",
  [ROOM_STATUS.TAKEN]: "Occupied",
  [ROOM_STATUS.RESERVED]: "Reserved",
  [ROOM_STATUS.MAINTENANCE]: "Maintenance",
};

// Room Types with Images
const ROOM_TYPES = {
  Standard: {
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80",
    amenities: [Wifi, Tv, Coffee],
    description: "A cozy retreat with modern amenities and city views."
  },
  Suite: {
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80",
    amenities: [Wifi, Tv, Coffee, Bath, Wind, Users],
    description: "Expansive luxury suite with separate living area and ocean views."
  }
};

// Generate mock rooms
const generateRooms = () => {
  const rooms = [];
  for (let floor = 1; floor <= FLOORS; floor++) {
    for (let roomNum = 1; roomNum <= ROOMS_PER_FLOOR; roomNum++) {
      const id = `${floor}${roomNum.toString().padStart(2, "0")}`;
      
      // Deterministic status based on room number
      let status = ROOM_STATUS.AVAILABLE;
      const hash = (floor * 100 + roomNum) % 10;
      if (hash > 8) status = ROOM_STATUS.TAKEN;
      else if (hash > 6) status = ROOM_STATUS.RESERVED;
      else if (hash === 5) status = ROOM_STATUS.MAINTENANCE;

      const isSuite = roomNum > 8;
      const type = isSuite ? "Suite" : "Standard";

      rooms.push({
        id,
        floor,
        number: id,
        type,
        price: isSuite ? 450 : 200,
        status,
        rating: (4 + (roomNum % 10) / 10).toFixed(1),
        reviews: 10 + (floor * roomNum),
        ...ROOM_TYPES[type]
      });
    }
  }
  return rooms;
};

const allRooms = generateRooms();

export default function RoomPage() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredRooms = useMemo(() => {
    return allRooms.filter((room) => {
      const matchesSearch = room.number.includes(searchQuery);
      const matchesFilter = filterStatus === "all" || room.status === filterStatus;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, filterStatus]);

  // Group by floor
  const roomsByFloor = useMemo(() => {
    const grouped = {};
    filteredRooms.forEach((room) => {
      if (!grouped[room.floor]) grouped[room.floor] = [];
      grouped[room.floor].push(room);
    });
    return grouped;
  }, [filteredRooms]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-yellow-200">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-6">
            <Link 
              href="/" 
              className="group flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-yellow-600 transition-colors"
            >
              <div className="p-2 rounded-full bg-slate-100 group-hover:bg-yellow-50 transition-colors">
                 <ArrowLeft className="w-4 h-4" />
              </div>
              <span className="hidden sm:inline">Back to Home</span>
            </Link>
            <div className="h-6 w-[1px] bg-slate-200" />
            <Link href="/" className="text-xl sm:text-2xl font-serif font-bold tracking-wider">
              Check<span className="text-yellow-500">Inn</span>
            </Link>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 bg-green-50 px-3 sm:px-4 py-2 rounded-full border border-green-100">
            <div className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-full w-full bg-green-500"></span>
            </div>
            <span className="text-xs sm:text-sm font-medium text-green-700">Live<span className="hidden sm:inline"> Availability</span></span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-8 sm:mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-3 sm:mb-4">
            Select Your Room
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg">
            Find your perfect space. Use the filters below to narrow down your search.
          </p>
        </div>
        
        {/* Controls */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 mb-8 sm:mb-12 flex flex-col md:flex-row gap-4 sm:gap-6 items-center justify-between">
          {/* Search */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search room number..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
            <button 
              onClick={() => setFilterStatus("all")}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all flex-1 sm:flex-none text-center",
                filterStatus === "all" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              )}
            >
              All
            </button>
            {Object.entries(STATUS_LABELS).map(([status, label]) => (
              <button 
                key={status}
                onClick={() => setFilterStatus(status)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center justify-center gap-2 flex-1 sm:flex-none",
                  filterStatus === status ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                <div className={cn("w-2 h-2 rounded-full shrink-0", STATUS_COLORS[status].split(" ")[0])} />
                <span className="whitespace-nowrap">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative">
          <div className="lg:col-span-2 space-y-8 sm:space-y-12">
            {Object.keys(roomsByFloor).length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
                <p className="text-slate-400 text-lg">No rooms found matching your criteria.</p>
              </div>
            ) : (
              Object.entries(roomsByFloor).map(([floor, floorRooms]) => (
                <div key={floor}>
                  <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest mb-4 sm:mb-6 flex items-center gap-4">
                    Floor {floor}
                    <div className="h-[1px] flex-1 bg-slate-200" />
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                    {floorRooms.map((room) => (
                      <motion.button
                        key={room.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        onClick={() => setSelectedRoom(room)}
                        className={cn(
                          "group relative bg-white rounded-2xl overflow-hidden transition-all text-left border border-slate-200 hover:border-slate-300 flex flex-col h-full",
                          selectedRoom?.id === room.id && "ring-2 ring-yellow-500 ring-offset-2"
                        )}
                      >
                        {/* Card Image */}
                        <div className="relative h-48 w-full overflow-hidden shrink-0">
                          <Image
                            src={room.image}
                            alt={room.type}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                          
                          {/* Status Badge */}
                          <div className={cn(
                            "absolute top-3 right-3 px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md",
                            room.status === ROOM_STATUS.AVAILABLE ? "bg-green-500/90 text-white" : 
                            room.status === ROOM_STATUS.TAKEN ? "bg-red-500/90 text-white" :
                            room.status === ROOM_STATUS.RESERVED ? "bg-yellow-500/90 text-white" : "bg-slate-500/90 text-white"
                          )}>
                            {STATUS_LABELS[room.status]}
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-5 flex flex-col flex-1">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <span className="text-xs font-bold text-yellow-600 uppercase tracking-wider block mb-1">{room.type}</span>
                              <h4 className="text-xl font-serif font-bold text-slate-900">Room {room.number}</h4>
                            </div>
                            <div className="text-right">
                              <span className="block text-lg font-bold text-slate-900">${room.price}</span>
                              <span className="text-[10px] text-slate-400 uppercase">/ Night</span>
                            </div>
                          </div>
                          
                          <div className="mt-auto pt-4 border-t border-slate-50 flex items-center gap-2">
                            <div className="flex -space-x-2">
                              {room.amenities.slice(0, 3).map((Icon, i) => (
                                <div key={i} className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center ring-2 ring-white">
                                  <Icon className="w-3.5 h-3.5 text-slate-500" />
                                </div>
                              ))}
                            </div>
                            <span className="text-xs text-slate-400 pl-1 font-medium">
                              + {room.amenities.length - 3} more
                            </span>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Desktop Details Panel */}
          <div className="lg:col-span-1 h-full hidden lg:block">
            <div 
              className="sticky top-28 bg-white rounded-3xl border border-slate-200 overflow-hidden max-h-[calc(100vh-8rem)] overflow-y-auto"
            >
              {selectedRoom ? (
                <div className="animate-none">
                  {/* Room Image */}
                  <div className="relative h-56 w-full shrink-0">
                    <Image 
                      src={selectedRoom.image} 
                      alt={selectedRoom.type}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 rounded-md bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider">
                          {selectedRoom.type}
                        </span>
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star className="w-3 h-3 fill-current" />
                          <span className="text-xs font-bold">{selectedRoom.rating}</span>
                        </div>
                      </div>
                      <h2 className="text-4xl font-serif font-bold">Room {selectedRoom.number}</h2>
                    </div>
                  </div>

                  <div className="p-8 space-y-8">
                    {/* Status & Price */}
                    <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                      <div>
                        <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Status</span>
                        <div className={cn(
                          "inline-flex items-center gap-2 font-bold",
                          selectedRoom.status === ROOM_STATUS.AVAILABLE ? "text-green-600" : 
                          selectedRoom.status === ROOM_STATUS.TAKEN ? "text-red-600" :
                          selectedRoom.status === ROOM_STATUS.RESERVED ? "text-yellow-600" : "text-slate-600"
                        )}>
                          <div className={cn("w-2 h-2 rounded-full", STATUS_COLORS[selectedRoom.status].split(" ")[0])} />
                          {STATUS_LABELS[selectedRoom.status]}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Price</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-slate-900">${selectedRoom.price}</span>
                          <span className="text-sm text-slate-400">/night</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-2">Description</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {selectedRoom.description}
                      </p>
                    </div>

                    {/* Amenities */}
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-3">Amenities</h4>
                      <div className="grid grid-cols-4 gap-2">
                        {selectedRoom.amenities.map((Icon, idx) => (
                          <div key={idx} className="aspect-square rounded-xl bg-slate-50 flex flex-col items-center justify-center gap-1 text-slate-600 hover:bg-yellow-50 hover:text-yellow-600 transition-colors cursor-default">
                            <Icon className="w-5 h-5" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                      {selectedRoom.status === ROOM_STATUS.AVAILABLE ? (
                        <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                          Book Now <Check className="w-5 h-5" />
                        </button>
                      ) : (
                        <button disabled className="w-full bg-slate-100 text-slate-400 py-4 rounded-xl font-bold cursor-not-allowed flex items-center justify-center gap-2">
                          Unavailable <X className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-[500px] text-slate-400 p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-4">
                    <Search className="w-8 h-8 text-slate-300" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">No Room Selected</h3>
                  <p className="text-sm">Click on any room card to view full details, photos, and amenities.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Details Modal */}
        <AnimatePresence>
          {selectedRoom && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] lg:hidden bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-4"
              onClick={() => setSelectedRoom(null)}
            >
              <div 
                className="bg-white w-full max-w-md rounded-3xl overflow-hidden border border-slate-6   00 max-h-[85vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-48 w-full">
                  <Image 
                    src={selectedRoom.image} 
                    alt={selectedRoom.type}
                    fill
                    className="object-cover"
                  />
                  <button 
                    onClick={() => setSelectedRoom(null)}
                    className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-4 left-6 text-white">
                    <h2 className="text-3xl font-serif font-bold">Room {selectedRoom.number}</h2>
                    <p className="text-white/80 text-sm">{selectedRoom.type}</p>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Status & Price */}
                  <div className="flex justify-between items-center">
                    <div className={cn(
                      "inline-flex items-center gap-2 font-bold text-sm",
                      selectedRoom.status === ROOM_STATUS.AVAILABLE ? "text-green-600" : 
                      selectedRoom.status === ROOM_STATUS.TAKEN ? "text-red-600" :
                      selectedRoom.status === ROOM_STATUS.RESERVED ? "text-yellow-600" : "text-slate-600"
                    )}>
                      <div className={cn("w-2 h-2 rounded-full", STATUS_COLORS[selectedRoom.status].split(" ")[0])} />
                      {STATUS_LABELS[selectedRoom.status]}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-slate-900">${selectedRoom.price}</span>
                      <span className="text-xs text-slate-400">/night</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {selectedRoom.description}
                  </p>

                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Amenities</h4>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {selectedRoom.amenities.map((Icon, idx) => (
                        <div key={idx} className="p-3 bg-slate-50 rounded-xl text-slate-600 shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedRoom.status === ROOM_STATUS.AVAILABLE ? (
                    <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg flex items-center justify-center gap-2">
                      Book Now <Check className="w-5 h-5" />
                    </button>
                  ) : (
                    <button disabled className="w-full bg-slate-100 text-slate-400 py-4 rounded-xl font-bold cursor-not-allowed flex items-center justify-center gap-2">
                      Unavailable <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
