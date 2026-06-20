<script>
  import { Button } from "$lib/components/ui/button/index.js";
  import { reveal } from "$lib/reveal.js";
</script>

<section
  class="relative h-screen flex items-center justify-center overflow-hidden"
>
  <div class="absolute inset-0 z-0">
    <img
      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=70&w=1600"
      alt="Luxury Hotel Pool"
      fetchpriority="high"
      decoding="async"
      class="absolute inset-0 h-full w-full object-cover"
    />
    <div class="absolute inset-0 bg-black/30"></div>
    <div
      class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20"
    ></div>
  </div>

  <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
    <div use:reveal={{ y: 30, duration: 800, delay: 200 }}>
      <h2
        class="text-sm md:text-base uppercase tracking-[0.3em] mb-4 text-yellow-400 font-medium"
      >
        Welcome to Paradise
      </h2>
      <h1
        class="text-6xl md:text-8xl lg:text-9xl font-display italic font-semibold mb-8 leading-[0.95]"
      >
        Experience <br />
        <span class="text-yellow-500">Luxury</span> Living
      </h1>
      <p
        class="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light"
      >
        Immerse yourself in the ultimate relaxation at CheckInn. Where golden
        sunsets meet crystal clear waters.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          href="#/room"
          class="h-auto bg-yellow-500 hover:bg-yellow-400 [a]:hover:bg-yellow-400 text-white [a]:hover:text-white px-8 py-4 rounded-full text-lg font-medium transform hover:scale-105 w-full sm:w-auto"
        >
          Check Availability
        </Button>
        <Button
          href="#/room"
          variant="outline"
          class="h-auto bg-white/10 hover:bg-white/20 hover:text-white backdrop-blur-sm text-white border-white/30 px-8 py-4 rounded-full text-lg font-medium w-full sm:w-auto"
        >
          View Suites
        </Button>
      </div>
    </div>
  </div>

  <div
    class="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 animate-bounce"
    use:reveal={{ y: 0, duration: 600, delay: 1500 }}
  >
    <div class="flex flex-col items-center gap-2">
      <span class="text-xs uppercase tracking-widest">Scroll</span>
      <div class="w-[1px] h-12 bg-white/50"></div>
    </div>
  </div>
</section>
