<script>
  import { List } from "phosphor-svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  import { cn } from "$lib/utils.js";

  let {
    /** @type {number} */ scrollY = 0,
    /** @type {() => void} */ onOpenSidebar,
    /** @type {(id: string) => void} */ onNavigate,
  } = $props();

  const isScrolled = $derived(scrollY > 50);
  // Mirrors framer-motion useTransform(scrollY, [0, 100], [0, 1]) / [-20, 0]
  const headerOpacity = $derived(Math.min(scrollY / 100, 1));
  const headerY = $derived(scrollY >= 100 ? 0 : -20 + (scrollY / 100) * 20);

  const sections = ["About", "Amenities", "Experiences", "Gallery", "Contact"];
</script>

<nav
  style="opacity: {headerOpacity}; transform: translateY({headerY}px);"
  class={cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
    isScrolled
      ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
      : "bg-transparent text-white py-6"
  )}
>
  <div class="max-w-7xl mx-auto flex items-center justify-between">
    <a
      href="#/"
      class="relative z-50 text-2xl font-serif font-bold tracking-wider group"
    >
      Check<span
        class="text-yellow-500 group-hover:text-yellow-400 transition-colors"
        >Inn</span
      >
    </a>

    <div class="hidden md:flex items-center space-x-8">
      <a
        href="#/room"
        class={cn(
          "text-sm font-medium relative group overflow-hidden",
          !isScrolled ? "text-white/90" : "text-slate-900"
        )}
      >
        <span
          class="relative z-10 group-hover:text-yellow-500 transition-colors duration-300"
          >Rooms</span
        >
        <span
          class="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"
        ></span>
      </a>
      {#each sections as item}
        <button
          type="button"
          onclick={() => onNavigate?.(item.toLowerCase())}
          class={cn(
            "text-sm font-medium relative group overflow-hidden cursor-pointer",
            !isScrolled ? "text-white/90" : "text-slate-900"
          )}
        >
          <span
            class="relative z-10 group-hover:text-yellow-500 transition-colors duration-300"
            >{item}</span
          >
          <span
            class="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"
          ></span>
        </button>
      {/each}
      <Button
        onclick={() => onNavigate?.("contact")}
        class="h-auto bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-6 py-2.5 rounded-full text-sm font-bold transform hover:scale-105 shadow-lg hover:shadow-yellow-500/20"
      >
        Contact Us
      </Button>
    </div>

    <button
      class={cn(
        "md:hidden p-2 relative z-50 transition-colors cursor-pointer",
        isScrolled ? "text-slate-900" : "text-white"
      )}
      onclick={() => onOpenSidebar?.()}
      aria-label="Open menu"
    >
      <List class="w-8 h-8" />
    </button>
  </div>
</nav>
