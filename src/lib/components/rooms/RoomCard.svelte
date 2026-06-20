<script>
  import { Star } from "phosphor-svelte";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Badge } from "$lib/components/ui/badge/index.js";
  import { cn } from "$lib/utils.js";
  import { reveal } from "$lib/reveal.js";
  import { ROOM_STATUS, STATUS_LABELS, STATUS_BADGE } from "$lib/data/rooms.js";

  let {
    /** @type {import("$lib/data/rooms.js").Room} */ room,
    /** @type {boolean} */ selected = false,
    /** @type {(room: import("$lib/data/rooms.js").Room) => void} */ onSelect,
  } = $props();

  const unavailable = $derived(room.status !== ROOM_STATUS.AVAILABLE);
</script>

<div class="h-full" use:reveal={{ y: 20, duration: 400 }}>
  <Card.Root
    role="button"
    tabindex={0}
    onclick={() => onSelect?.(room)}
    onkeydown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onSelect?.(room);
      }
    }}
    class={cn(
      "group relative bg-white rounded-2xl border border-slate-200 hover:border-yellow-300 hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1 text-left h-full py-0 gap-0 ring-0 cursor-pointer transition-all duration-300",
      selected && "ring-2 ring-yellow-500 ring-offset-2 border-yellow-500"
    )}
  >
    <!-- Image with overlaid title -->
    <div class="relative h-60 w-full overflow-hidden">
      <img
        src={room.image}
        alt={room.type}
        loading="lazy"
        decoding="async"
        class={cn(
          "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110",
          unavailable && "grayscale-[35%]"
        )}
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
      ></div>

      <!-- Top row badges -->
      <div
        class="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-[11px] font-bold ring-1 ring-white/20"
      >
        <Star class="w-3 h-3 text-yellow-400" weight="fill" />
        {room.rating}
      </div>
      <Badge
        class={cn(
          "absolute top-3 right-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border-transparent",
          STATUS_BADGE[room.status]
        )}
      >
        {STATUS_LABELS[room.status]}
      </Badge>

      <!-- Title overlay -->
      <div class="absolute bottom-4 left-5 right-5 text-white">
        <span
          class="text-[11px] font-bold text-yellow-400 uppercase tracking-[0.2em] block mb-1.5"
          >{room.type}</span
        >
        <h4 class="text-2xl font-serif font-bold leading-none drop-shadow-sm">
          Room {room.number}
        </h4>
      </div>
    </div>

    <!-- Info bar -->
    <div class="px-5 py-4 flex items-center justify-between gap-2">
      <div class="flex items-baseline gap-1 shrink-0 whitespace-nowrap">
        <span class="text-xl font-bold text-slate-900"
          >₱{room.price.toLocaleString("en-US")}</span
        >
        <span class="text-xs text-slate-400 font-medium">/ night</span>
      </div>
      <div class="flex items-center gap-2.5 text-slate-400 shrink min-w-0">
        {#each room.amenities.slice(0, 4) as Icon}
          <Icon class="w-4 h-4 group-hover:text-yellow-600 transition-colors" />
        {/each}
        {#if room.amenities.length > 4}
          <span class="text-xs font-medium">+{room.amenities.length - 4}</span>
        {/if}
      </div>
    </div>
  </Card.Root>
</div>
