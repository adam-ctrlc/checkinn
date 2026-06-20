<script>
  import { ArrowRight } from "phosphor-svelte";

  const experiences = [
    {
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=70&w=1280",
      title: "Infinity Pool",
      desc: "Float above the horizon in our oceanfront infinity pool.",
    },
    {
      img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=70&w=1280",
      title: "Fine Dining",
      desc: "Seasonal tasting menus crafted by Michelin-starred chefs.",
    },
    {
      img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=70&w=1280",
      title: "Spa & Wellness",
      desc: "Restorative rituals in a sanctuary of calm and quiet.",
    },
    {
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=70&w=1280",
      title: "Private Beach",
      desc: "Exclusive shoreline access with personal cabana service.",
    },
    {
      img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=70&w=1280",
      title: "Sunset Cruise",
      desc: "Sail into golden hour aboard our private yacht.",
    },
    {
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=70&w=1280",
      title: "City Excursions",
      desc: "Curated tours through the heart of the old city.",
    },
  ];

  /** @type {HTMLElement | undefined} */
  let outer = $state();
  let trackWidth = $state(0);
  let vw = $state(0);
  let vh = $state(0);
  let translate = $state(0);

  // Tall enough that the leftover vertical scroll (after the panel pins)
  // equals the horizontal distance the track needs to travel — a ~1:1 feel.
  const sectionHeight = $derived(
    trackWidth > vw ? trackWidth - vw + vh : vh
  );

  function update() {
    if (!outer) return;
    const scrollable = sectionHeight - vh;
    if (scrollable <= 0) {
      translate = 0;
      return;
    }
    const top = outer.getBoundingClientRect().top;
    const progress = Math.min(Math.max(-top / scrollable, 0), 1);
    translate = progress * Math.max(trackWidth - vw, 0);
  }

  // Recompute whenever measurements change (mount, resize, content width).
  $effect(() => {
    sectionHeight;
    trackWidth;
    update();
  });
</script>

<svelte:window
  bind:innerWidth={vw}
  bind:innerHeight={vh}
  onscroll={update}
  onresize={update}
/>

<section
  bind:this={outer}
  id="experiences"
  class="relative bg-slate-50"
  style="height: {sectionHeight}px"
>
  <div class="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
    <!-- Heading -->
    <div class="max-w-7xl mx-auto px-6 w-full mb-8 sm:mb-10">
      <h3 class="text-yellow-500 font-medium tracking-widest uppercase mb-3">
        Experiences
      </h3>
      <div class="flex items-end justify-between gap-6">
        <h2
          class="text-5xl md:text-7xl font-display italic font-semibold text-slate-900 leading-tight"
        >
          Curated for You
        </h2>
        <span
          class="hidden sm:flex items-center gap-2 text-sm text-slate-400 font-medium pb-2 whitespace-nowrap"
        >
          Scroll to explore <ArrowRight class="w-4 h-4" />
        </span>
      </div>
    </div>

    <!-- Horizontal track driven by vertical scroll -->
    <div
      bind:clientWidth={trackWidth}
      class="flex gap-6 px-6 w-max will-change-transform"
      style="transform: translateX(-{translate}px)"
    >
      {#each experiences as exp, i}
        <div class="shrink-0 w-80 sm:w-[24rem] group">
          <div class="relative h-[26rem] rounded-3xl overflow-hidden shadow-lg">
            <img
              src={exp.img}
              alt={exp.title}
              loading="lazy"
              decoding="async"
              class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
            ></div>
            <span
              class="absolute top-5 left-6 text-yellow-500 font-serif font-bold text-lg"
              >0{i + 1}</span
            >
            <div class="absolute bottom-0 left-0 right-0 p-7">
              <h4 class="text-2xl font-serif font-bold text-white mb-2">
                {exp.title}
              </h4>
              <p class="text-white/70 text-sm leading-relaxed">{exp.desc}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
