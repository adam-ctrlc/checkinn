<script>
  import { reveal } from "$lib/reveal.js";
</script>

<section id="about" class="py-24 px-6 bg-white">
  <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    <div use:reveal={{ y: 20, duration: 600 }}>
      <h3 class="text-yellow-500 font-medium tracking-widest uppercase mb-4">
        About Us
      </h3>
      <h2
        class="text-5xl md:text-6xl font-display italic font-semibold mb-6 text-slate-900 leading-tight"
      >
        A Sanctuary for the <br />
        <span class="text-yellow-500">Senses</span>
      </h2>
      <p class="text-slate-600 mb-6 leading-relaxed text-lg">
        Nestled along the pristine coastline, CheckInn offers an escape from the
        ordinary. Our architecture blends seamlessly with nature, featuring
        open-air spaces, abundant natural light, and a color palette inspired by
        the sun and sand.
      </p>
      <p class="text-slate-600 leading-relaxed text-lg">
        Whether you're lounging by our infinity pool or indulging in world-class
        dining, every moment is curated for your absolute comfort.
      </p>
    </div>
    <div
      class="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl"
    >
      <img
        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=70&w=1280"
        alt="Hotel Exterior"
        loading="lazy"
        decoding="async"
        class="absolute inset-0 h-full w-full object-cover hover:scale-105 transition-transform duration-700"
      />
    </div>
  </div>
</section>
