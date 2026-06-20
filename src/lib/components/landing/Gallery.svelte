<script>
  import { reveal } from "$lib/reveal.js";

  const images = [
    {
      src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=70&w=1280",
      alt: "Luxury Bedroom",
      span: "md:col-span-2 md:row-span-2",
      overlay: true,
      delay: 0,
    },
    {
      src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=70&w=1280",
      alt: "Resort View",
      span: "md:col-span-1 md:row-span-1",
      overlay: false,
      delay: 100,
    },
    {
      src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=70&w=1280",
      alt: "Beach",
      span: "md:col-span-1 md:row-span-2",
      overlay: false,
      delay: 200,
    },
    {
      src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=70&w=1280",
      alt: "Dining",
      span: "md:col-span-1 md:row-span-1",
      overlay: false,
      delay: 300,
    },
  ];
</script>

<section id="gallery" class="py-24 px-6 bg-white">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-20">
      <h3 class="text-yellow-500 font-medium tracking-widest uppercase mb-4">
        Gallery
      </h3>
      <h2 class="text-5xl md:text-7xl font-display italic font-semibold text-slate-900 mb-6">
        Visual Journey
      </h2>
      <p class="text-slate-500 max-w-2xl mx-auto text-lg">
        Explore the beauty of our resort, from the sun-drenched pools to the
        elegantly appointed suites.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
      {#each images as img}
        <div
          class="{img.span} relative rounded-2xl overflow-hidden group"
          use:reveal={{ y: 0, scale: 0.95, duration: 600, delay: img.delay }}
        >
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            decoding="async"
            class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {#if img.overlay}
            <div
              class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"
            ></div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>
