<script>
  import { MagnifyingGlass } from "phosphor-svelte";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { cn } from "$lib/utils.js";
  import { STATUS_LABELS } from "$lib/data/rooms.js";

  let {
    /** @type {string} */ searchQuery = $bindable(""),
    /** @type {string} */ filterStatus = $bindable("all"),
    /** @type {number} */ count = 0,
    /** @type {() => void} */ onSearch,
  } = $props();

  const chip =
    "h-auto rounded-full px-4 py-2 text-sm font-medium transition-all border cursor-pointer";
  const active = "bg-yellow-500 text-slate-900 border-yellow-500 hover:bg-yellow-400";
  const idle =
    "bg-white/10 text-white/80 border-white/15 hover:bg-white/20 hover:text-white";
</script>

<div class="max-w-2xl mx-auto">
  <!-- Search bar -->
  <div class="relative">
    <MagnifyingGlass
      class="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 z-10"
    />
    <Input
      type="text"
      placeholder="Search by room number..."
      bind:value={searchQuery}
      class="h-14 sm:h-16 w-full pl-14 pr-28 sm:pr-32 rounded-full bg-white/10 backdrop-blur-md border-white/20 text-white text-base placeholder:text-white/50 focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:border-transparent"
    />
    <Button
      onclick={() => onSearch?.()}
      class="absolute right-2 top-1/2 -translate-y-1/2 h-10 sm:h-12 px-6 sm:px-7 rounded-full bg-yellow-500 text-slate-900 text-sm font-bold hover:bg-yellow-400 shadow-lg shadow-yellow-500/20"
    >
      Search
    </Button>
  </div>

  <!-- Filter chips -->
  <div class="flex flex-wrap justify-center gap-2 mt-5">
    <Button
      onclick={() => {
        filterStatus = "all";
        onSearch?.();
      }}
      class={cn(chip, filterStatus === "all" ? active : idle)}
    >
      All
    </Button>
    {#each Object.entries(STATUS_LABELS) as [status, label]}
      <Button
        onclick={() => {
          filterStatus = status;
          onSearch?.();
        }}
        class={cn(chip, filterStatus === status ? active : idle)}
      >
        {label}
      </Button>
    {/each}
  </div>

  <p class="text-center text-white/40 text-xs tracking-wide mt-4">
    {count} room{count === 1 ? "" : "s"} match your search
  </p>
</div>
