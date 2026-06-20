<script>
  import { X, MapPin, Phone, Envelope, CaretRight } from "phosphor-svelte";
  import * as Sheet from "$lib/components/ui/sheet/index.js";
  import { Button } from "$lib/components/ui/button/index.js";

  let {
    /** @type {boolean} */ open = false,
    /** @type {() => void} */ onClose,
    /** @type {(id: string) => void} */ onNavigate,
  } = $props();

  const sections = ["About", "Amenities", "Experiences", "Gallery", "Contact"];
</script>

<Sheet.Root {open} onOpenChange={(o) => { if (!o) onClose?.(); }}>
  <Sheet.Content
    side="right"
    showCloseButton={false}
    class="w-[88vw]! sm:w-[380px]! bg-slate-950 text-white border-l border-white/10 p-0 gap-0"
  >
    <Sheet.Title class="sr-only">Menu</Sheet.Title>
    <Sheet.Description class="sr-only">
      Site navigation and contact details
    </Sheet.Description>

    <div class="flex flex-col h-full overflow-y-auto">
      <!-- Header -->
      <div
        class="flex items-center justify-between px-8 py-6 border-b border-white/10"
      >
        <a
          href="#/"
          onclick={() => onClose?.()}
          class="text-2xl font-serif font-bold tracking-wider"
        >
          Check<span class="text-yellow-500">Inn</span>
        </a>
        <button
          onclick={() => onClose?.()}
          aria-label="Close menu"
          class="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X class="w-6 h-6" />
        </button>
      </div>

      <!-- Navigation -->
      <nav class="px-8 py-6 flex flex-col">
        <a
          href="#/room"
          onclick={() => onClose?.()}
          class="group flex items-center justify-between py-3.5 border-b border-white/5 text-2xl font-serif font-bold hover:text-yellow-500 transition-colors"
        >
          Rooms
          <CaretRight
            class="w-5 h-5 text-white/30 group-hover:text-yellow-500 group-hover:translate-x-1 transition-all"
          />
        </a>
        {#each sections as item}
          <button
            type="button"
            onclick={() => onNavigate?.(item.toLowerCase())}
            class="group flex items-center justify-between py-3.5 border-b border-white/5 text-2xl font-serif font-bold hover:text-yellow-500 transition-colors text-left cursor-pointer"
          >
            {item}
            <CaretRight
              class="w-5 h-5 text-white/30 group-hover:text-yellow-500 group-hover:translate-x-1 transition-all"
            />
          </button>
        {/each}
      </nav>

      <!-- Contact -->
      <div
        class="px-8 mt-auto pt-6 pb-8 space-y-4 text-sm text-slate-400 border-t border-white/10"
      >
        <div class="flex items-center gap-3">
          <MapPin class="w-4 h-4 text-yellow-500 shrink-0" />
          123 Luxury Ave, Paradise City
        </div>
        <div class="flex items-center gap-3">
          <Phone class="w-4 h-4 text-yellow-500 shrink-0" />
          +1 (555) 123-4567
        </div>
        <div class="flex items-center gap-3">
          <Envelope class="w-4 h-4 text-yellow-500 shrink-0" />
          reservations@checkinn.com
        </div>
        <Button
          href="#/room"
          onclick={() => onClose?.()}
          class="w-full h-auto mt-4 bg-yellow-500 text-slate-900 py-3.5 rounded-full font-bold hover:bg-yellow-400 [a]:hover:bg-yellow-400 [a]:hover:text-slate-900"
        >
          Browse Rooms
        </Button>
      </div>
    </div>
  </Sheet.Content>
</Sheet.Root>
