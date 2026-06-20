<script>
  import { Button } from "$lib/components/ui/button/index.js";
  import { reveal } from "$lib/reveal.js";
</script>

<section class="relative py-32 px-6 overflow-hidden">
  <div class="absolute inset-0 z-0">
    <img
      src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=70&w=1280"
      alt="Luxury Resort Pool Evening"
      loading="lazy"
      decoding="async"
      class="absolute inset-0 h-full w-full object-cover"
    />
    <div class="absolute inset-0 bg-slate-900/80"></div>
  </div>

  <div class="relative z-10 max-w-5xl mx-auto text-center text-white">
    <div use:reveal={{ y: 30, duration: 600 }}>
      <h2 class="text-5xl md:text-8xl font-display italic font-semibold mb-8 leading-[0.95]">
        Ready for your <br />
        <span class="text-yellow-500">Dream Vacation?</span>
      </h2>
      <p
        class="text-xl md:text-2xl mb-12 text-white/80 max-w-2xl mx-auto font-light"
      >
        Reserve directly with us for the best rates and exclusive benefits. Your
        paradise is just a click away.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
        <Button
          href="#/room"
          class="h-auto bg-yellow-500 text-slate-900 px-10 py-5 rounded-full text-lg font-bold hover:bg-yellow-400 [a]:hover:bg-yellow-400 [a]:hover:text-slate-900 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/20"
        >
          Browse Rooms
        </Button>
        <Button
          href="mailto:reservations@checkinn.com"
          variant="outline"
          class="h-auto px-10 py-5 rounded-full text-lg font-bold text-white border-white/30 bg-transparent hover:bg-white/10 hover:text-white backdrop-blur-sm"
        >
          Contact Concierge
        </Button>
      </div>
    </div>
  </div>
</section>
