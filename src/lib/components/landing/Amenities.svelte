<script>
  import {
    Waves,
    ForkKnife,
    Coffee,
    Car,
    WifiHigh,
    Wind,
    Star,
    MapPin,
  } from "phosphor-svelte";
  import { reveal } from "$lib/reveal.js";

  const amenities = [
    { icon: Waves, title: "Infinity Pool", desc: "Panoramic ocean views" },
    { icon: ForkKnife, title: "Fine Dining", desc: "Michelin-starred chefs" },
    { icon: Coffee, title: "Luxury Spa", desc: "Rejuvenating treatments" },
    { icon: Car, title: "Valet Parking", desc: "24/7 secure service" },
    { icon: WifiHigh, title: "High-Speed Wifi", desc: "Stay connected everywhere" },
    { icon: Wind, title: "Private Beach", desc: "Exclusive access" },
    { icon: Star, title: "Concierge", desc: "Personalized experiences" },
    { icon: MapPin, title: "Prime Location", desc: "Heart of the city" },
  ];
</script>

<section
  id="amenities"
  class="py-24 px-6 bg-slate-900 text-white overflow-hidden"
>
  <div class="max-w-7xl mx-auto">
    <div class="mb-8 sm:mb-10">
      <h3 class="text-yellow-500 font-medium tracking-widest uppercase mb-4">
        Amenities
      </h3>
      <h2 class="text-5xl md:text-7xl font-display italic font-semibold">
        World-Class Comfort
      </h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {#each amenities as item, index}
          {@const Icon = item.icon}
          <div
            use:reveal={{ y: 20, duration: 600, delay: index * 100 }}
            class="flex items-start space-x-4 group cursor-pointer"
          >
            <div
              class="p-3 bg-white/5 rounded-lg group-hover:bg-yellow-500 transition-colors duration-300"
            >
              <Icon
                class="w-6 h-6 text-yellow-500 group-hover:text-white transition-colors"
              />
            </div>
            <div>
              <h4
                class="text-lg font-bold mb-1 group-hover:text-yellow-500 transition-colors"
              >
                {item.title}
              </h4>
              <p class="text-white/50 text-sm">{item.desc}</p>
            </div>
          </div>
        {/each}
      </div>
      <div
        class="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
      >
        <img
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=70&w=1280"
          alt="Amenities Highlight"
          loading="lazy"
          decoding="async"
          class="absolute inset-0 h-full w-full object-cover"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
        ></div>
        <div class="absolute bottom-8 left-8 max-w-md">
          <p class="text-yellow-400 font-display italic text-4xl mb-2">
            "Unforgettable"
          </p>
          <p class="text-white/80">
            Every detail is designed to provide you with an experience of
            unparalleled luxury and relaxation.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
