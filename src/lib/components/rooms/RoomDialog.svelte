<script>
  import { Star, X, Envelope } from "phosphor-svelte";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import { cn } from "$lib/utils.js";
  import {
    ROOM_STATUS,
    STATUS_LABELS,
    STATUS_DOT,
    STATUS_TEXT,
  } from "$lib/data/rooms.js";

  let {
    /** @type {import("$lib/data/rooms.js").Room | null} */ room = null,
    /** @type {boolean} */ open = false,
    /** @type {() => void} */ onClose,
  } = $props();

  // Retain the last room so its content stays visible during the close
  // animation (the parent nulls `room` the moment the modal starts closing).
  /** @type {import("$lib/data/rooms.js").Room | null} */
  let displayRoom = $state(null);
  $effect(() => {
    if (room) displayRoom = room;
  });
</script>

<Dialog.Root {open} onOpenChange={(o) => { if (!o) onClose?.(); }}>
  <Dialog.Content
    showCloseButton={false}
    class="p-0 gap-0 overflow-hidden overflow-y-auto border-slate-200 max-h-[92vh] duration-300 ease-out
      w-full max-w-full top-auto bottom-0 left-0 translate-x-0 translate-y-0 rounded-t-3xl rounded-b-none
      sm:max-w-lg sm:top-1/2 sm:left-1/2 sm:bottom-auto sm:translate-x-[-50%] sm:translate-y-[-50%] sm:rounded-3xl
      data-open:slide-in-from-bottom-6 data-closed:slide-out-to-bottom-6"
  >
    {#if displayRoom}
      {@const room = displayRoom}
      <!-- Image header -->
      <div class="relative h-56 sm:h-64 w-full shrink-0">
        <img
          src={room.image}
          alt={room.type}
          loading="lazy"
          decoding="async"
          class="absolute inset-0 h-full w-full object-cover"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
        ></div>
        <button
          onclick={() => onClose?.()}
          class="absolute top-4 right-4 p-2 bg-black/30 hover:bg-black/50 backdrop-blur-md rounded-full text-white transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X class="w-5 h-5" />
        </button>
        <div class="absolute bottom-5 left-6 right-6 text-white">
          <div class="flex items-center gap-2 mb-2">
            <span
              class="px-2 py-1 rounded-md bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider"
              >{room.type}</span
            >
            <div class="flex items-center gap-1 text-yellow-400">
              <Star class="w-3.5 h-3.5" weight="fill" />
              <span class="text-xs font-bold">{room.rating}</span>
            </div>
          </div>
          <Dialog.Title class="text-3xl sm:text-4xl font-serif font-bold leading-none"
            >Room {room.number}</Dialog.Title
          >
          <Dialog.Description class="sr-only"
            >{room.type} room details</Dialog.Description
          >
        </div>
      </div>

      <!-- Body -->
      <div class="p-6 sm:p-8 space-y-6 sm:space-y-7">
        <!-- Status & Price -->
        <div
          class="flex justify-between items-center p-4 bg-slate-50 rounded-2xl"
        >
          <div>
            <span
              class="text-xs text-slate-400 uppercase tracking-wider block mb-1"
              >Status</span
            >
            <div
              class={cn(
                "inline-flex items-center gap-2 font-bold",
                STATUS_TEXT[room.status]
              )}
            >
              <div class={cn("w-2 h-2 rounded-full", STATUS_DOT[room.status])}></div>
              {STATUS_LABELS[room.status]}
            </div>
          </div>
          <div class="text-right">
            <span
              class="text-xs text-slate-400 uppercase tracking-wider block mb-1"
              >Price</span
            >
            <div class="flex items-baseline gap-1 whitespace-nowrap">
              <span class="text-2xl font-bold text-slate-900"
                >₱{room.price.toLocaleString("en-US")}</span
              >
              <span class="text-sm text-slate-400">/night</span>
            </div>
          </div>
        </div>

        <Separator class="bg-slate-100" />

        <!-- Description -->
        <div>
          <h4 class="text-sm font-bold text-slate-900 mb-2">Description</h4>
          <p class="text-slate-600 text-sm leading-relaxed">
            {room.description}
          </p>
        </div>

        <!-- Amenities -->
        <div>
          <h4 class="text-sm font-bold text-slate-900 mb-3">Amenities</h4>
          <div class="grid grid-cols-4 sm:grid-cols-6 gap-2">
            {#each room.amenities as Icon}
              <div
                class="aspect-square rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-yellow-50 hover:text-yellow-600 transition-colors cursor-default"
              >
                <Icon class="w-5 h-5" />
              </div>
            {/each}
          </div>
        </div>

        <!-- Action -->
        {#if room.status === ROOM_STATUS.AVAILABLE}
          <Button
            href={`mailto:reservations@checkinn.com?subject=Enquiry about Room ${room.number}`}
            class="w-full h-auto bg-slate-900 text-white [a]:hover:text-white py-4 rounded-xl font-bold hover:bg-slate-800 [a]:hover:bg-slate-800 shadow-lg hover:shadow-xl transition-all"
          >
            Enquire Now <Envelope class="w-5 h-5" />
          </Button>
        {:else}
          <Button
            disabled
            class="w-full h-auto bg-slate-100 text-slate-400 py-4 rounded-xl font-bold cursor-not-allowed"
          >
            Unavailable <X class="w-5 h-5" />
          </Button>
        {/if}
      </div>
    {/if}
  </Dialog.Content>
</Dialog.Root>
