<script>
  import RoomsHeader from "$lib/components/rooms/RoomsHeader.svelte";
  import RoomSearch from "$lib/components/rooms/RoomSearch.svelte";
  import RoomCard from "$lib/components/rooms/RoomCard.svelte";
  import RoomDialog from "$lib/components/rooms/RoomDialog.svelte";
  import {
    allRooms,
    ROOM_STATUS,
    STATUS_LABELS,
  } from "$lib/data/rooms.js";

  const VALID_FILTERS = ["all", ...Object.values(ROOM_STATUS)];

  /** Parse the query string out of the hash route, e.g. #/room?filter=available */
  function hashQuery() {
    const h = window.location.hash;
    const qi = h.indexOf("?");
    return new URLSearchParams(qi >= 0 ? h.slice(qi + 1) : "");
  }

  const initialParams = hashQuery();
  const initialFilter = initialParams.get("filter") ?? "all";

  /** @type {import("$lib/data/rooms.js").Room | null} */
  let selectedRoom = $state(null);
  let searchQuery = $state(initialParams.get("q") ?? "");
  let filterStatus = $state(
    VALID_FILTERS.includes(initialFilter) ? initialFilter : "all"
  );

  const filteredRooms = $derived(
    allRooms.filter((room) => {
      const matchesSearch = room.number.includes(searchQuery);
      const matchesFilter =
        filterStatus === "all" || room.status === filterStatus;
      return matchesSearch && matchesFilter;
    })
  );

  const roomsByFloor = $derived.by(() => {
    /** @type {Record<number, import("$lib/data/rooms.js").Room[]>} */
    const grouped = {};
    filteredRooms.forEach((room) => {
      if (!grouped[room.floor]) grouped[room.floor] = [];
      grouped[room.floor].push(room);
    });
    return grouped;
  });

  const stats = $derived(
    Object.values(ROOM_STATUS).map((status) => ({
      status,
      label: STATUS_LABELS[status],
      count: allRooms.filter((r) => r.status === status).length,
    }))
  );

  /** @param {import("$lib/data/rooms.js").Room} room */
  function selectRoom(room) {
    selectedRoom = room;
  }

  function scrollToGrid() {
    document
      .getElementById("rooms-grid")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Reset scroll to top when this route mounts (hash routing preserves scroll otherwise)
  $effect(() => {
    window.scrollTo(0, 0);
  });

  // Keep the active filter / search in the URL, e.g. #/room?filter=available&q=305
  $effect(() => {
    const p = new URLSearchParams();
    if (filterStatus !== "all") p.set("filter", filterStatus);
    if (searchQuery) p.set("q", searchQuery);
    const qs = p.toString();
    const newHash = `#/room${qs ? `?${qs}` : ""}`;
    if (window.location.hash !== newHash) {
      history.replaceState(history.state, "", newHash);
    }
  });

  // Sync state when the user navigates back/forward
  $effect(() => {
    const onHash = () => {
      const q = hashQuery();
      const f = q.get("filter") ?? "all";
      filterStatus = VALID_FILTERS.includes(f) ? f : "all";
      searchQuery = q.get("q") ?? "";
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  });

  // Distinct background texture per floor
  const TEX = ["tex-1", "tex-2", "tex-3", "tex-4", "tex-5"];
</script>

<div
  class="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-yellow-200"
>
  <RoomsHeader />

  <!-- Premium hero band -->
  <section class="relative bg-slate-900 text-white overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=70&w=1280"
      alt=""
      class="absolute inset-0 h-full w-full object-cover opacity-25"
    />
    <div
      class="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/80 to-slate-900"
    ></div>

    <div
      class="relative max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-16 sm:pb-20 text-center"
    >
      <span
        class="inline-block text-yellow-500 font-medium tracking-[0.3em] uppercase text-xs sm:text-sm mb-4"
        >Reservations</span
      >
      <h1
        class="text-5xl md:text-7xl font-display italic font-semibold leading-tight mb-5"
      >
        Select Your <span class="text-yellow-500">Room</span>
      </h1>
      <p class="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg font-light">
        Each space is curated for absolute comfort. Browse live availability
        across all five floors and reserve your perfect stay.
      </p>

      <!-- Hero search -->
      <div class="mt-10 sm:mt-12">
        <RoomSearch
          bind:searchQuery
          bind:filterStatus
          count={filteredRooms.length}
          onSearch={scrollToGrid}
        />
      </div>

      <!-- Inline stats -->
      <div
        class="flex flex-wrap justify-center gap-x-8 sm:gap-x-12 gap-y-5 mt-12 sm:mt-14 pt-10 border-t border-white/10"
      >
        {#each stats as stat}
          <div class="text-center">
            <div class="text-3xl sm:text-4xl font-serif font-bold text-yellow-500">
              {stat.count}
            </div>
            <div
              class="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-400 mt-2"
            >
              {stat.label}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <main id="rooms-grid" class="pt-8 sm:pt-10 pb-24 scroll-mt-20">
    {#if Object.keys(roomsByFloor).length === 0}
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          class="text-center py-24 bg-white rounded-3xl border border-dashed border-slate-200"
        >
          <p class="text-slate-400 text-lg">
            No rooms found matching your criteria.
          </p>
        </div>
      </div>
    {:else}
      {#each Object.entries(roomsByFloor) as [floor, floorRooms], i (floor)}
        <section
          class={`py-10 sm:py-14 ${TEX[(Number(floor) - 1) % TEX.length]} ${i > 0 ? "border-t border-slate-200/70" : ""}`}
        >
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div
              class="flex items-end justify-between mb-6 sm:mb-8 pb-4 border-b border-slate-200"
            >
              <div class="flex items-baseline gap-3">
                <span
                  class="text-xs font-bold text-yellow-600 uppercase tracking-[0.3em]"
                  >Floor</span
                >
                <span
                  class="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-none"
                >
                  {floor.toString().padStart(2, "0")}
                </span>
              </div>
              <span
                class="text-xs text-slate-400 font-medium uppercase tracking-[0.15em]"
              >
                {floorRooms.length} rooms
              </span>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
            >
              {#each floorRooms as room (room.id)}
                <RoomCard
                  {room}
                  selected={selectedRoom?.id === room.id}
                  onSelect={selectRoom}
                />
              {/each}
            </div>
          </div>
        </section>
      {/each}
    {/if}
  </main>

  <!-- Room Details Modal -->
  <RoomDialog
    room={selectedRoom}
    open={!!selectedRoom}
    onClose={() => (selectedRoom = null)}
  />
</div>
