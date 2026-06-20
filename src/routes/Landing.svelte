<script>
  import Navbar from "$lib/components/landing/Navbar.svelte";
  import Sidebar from "$lib/components/landing/Sidebar.svelte";
  import Hero from "$lib/components/landing/Hero.svelte";
  import About from "$lib/components/landing/About.svelte";
  import Amenities from "$lib/components/landing/Amenities.svelte";
  import Experiences from "$lib/components/landing/Experiences.svelte";
  import Gallery from "$lib/components/landing/Gallery.svelte";
  import Cta from "$lib/components/landing/Cta.svelte";
  import SiteFooter from "$lib/components/landing/SiteFooter.svelte";

  let scrollY = $state(0);
  let sidebarOpen = $state(false);

  /** @param {string} id */
  function navigate(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    sidebarOpen = false;
  }

  function handleScroll() {
    scrollY = window.scrollY;
  }

  $effect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  });

  // Reset scroll to top when this route mounts (hash routing preserves scroll otherwise)
  $effect(() => {
    window.scrollTo(0, 0);
  });
</script>

<div class="min-h-screen bg-white font-sans text-slate-900 selection:bg-yellow-200">
  <Navbar {scrollY} onOpenSidebar={() => (sidebarOpen = true)} onNavigate={navigate} />
  <Sidebar
    open={sidebarOpen}
    onClose={() => (sidebarOpen = false)}
    onNavigate={navigate}
  />

  <Hero />
  <About />
  <Amenities />
  <Experiences />
  <Gallery />
  <Cta />
  <SiteFooter />
</div>
