import {
  WifiHigh,
  Coffee,
  Wind,
  Television,
  Bathtub,
  Users,
} from "phosphor-svelte";

export const FLOORS = 5;
export const ROOMS_PER_FLOOR = 10;

export const ROOM_STATUS = {
  AVAILABLE: "available",
  TAKEN: "taken",
  RESERVED: "reserved",
  MAINTENANCE: "maintenance",
};

export const STATUS_LABELS = {
  [ROOM_STATUS.AVAILABLE]: "Available",
  [ROOM_STATUS.TAKEN]: "Occupied",
  [ROOM_STATUS.RESERVED]: "Reserved",
  [ROOM_STATUS.MAINTENANCE]: "Maintenance",
};

/** Solid dot color for filter chips / status indicators. */
export const STATUS_DOT = {
  [ROOM_STATUS.AVAILABLE]: "bg-green-500",
  [ROOM_STATUS.TAKEN]: "bg-red-500",
  [ROOM_STATUS.RESERVED]: "bg-yellow-500",
  [ROOM_STATUS.MAINTENANCE]: "bg-slate-400",
};

/** Text color for the status label in the details views. */
export const STATUS_TEXT = {
  [ROOM_STATUS.AVAILABLE]: "text-green-600",
  [ROOM_STATUS.TAKEN]: "text-red-600",
  [ROOM_STATUS.RESERVED]: "text-yellow-600",
  [ROOM_STATUS.MAINTENANCE]: "text-slate-600",
};

/** Badge background for the card overlay. */
export const STATUS_BADGE = {
  [ROOM_STATUS.AVAILABLE]: "bg-green-500/90 text-white",
  [ROOM_STATUS.TAKEN]: "bg-red-500/90 text-white",
  [ROOM_STATUS.RESERVED]: "bg-yellow-500/90 text-white",
  [ROOM_STATUS.MAINTENANCE]: "bg-slate-500/90 text-white",
};

export const ROOM_TYPES = {
  Standard: {
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=70&w=1280",
    amenities: [WifiHigh, Television, Coffee],
    description: "A cozy retreat with modern amenities and city views.",
  },
  Suite: {
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=70&w=1280",
    amenities: [WifiHigh, Television, Coffee, Bathtub, Wind, Users],
    description:
      "Expansive luxury suite with separate living area and ocean views.",
  },
};

/**
 * @typedef {Object} Room
 * @property {string} id
 * @property {number} floor
 * @property {string} number
 * @property {string} type
 * @property {number} price
 * @property {string} status
 * @property {string} rating
 * @property {number} reviews
 * @property {string} image
 * @property {any[]} amenities
 * @property {string} description
 */

/** @returns {Room[]} */
function generateRooms() {
  /** @type {Room[]} */
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
        price: isSuite ? 25000 : 11000,
        status,
        rating: (4 + (roomNum % 10) / 10).toFixed(1),
        reviews: 10 + floor * roomNum,
        ...ROOM_TYPES[type],
      });
    }
  }
  return rooms;
}

export const allRooms = generateRooms();
