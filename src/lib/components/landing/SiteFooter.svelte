<script>
  import {
    MapPin,
    Phone,
    Envelope,
    CaretRight,
    FacebookLogo,
    InstagramLogo,
    XLogo,
    LinkedinLogo,
  } from "phosphor-svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Separator } from "$lib/components/ui/separator/index.js";

  const year = new Date().getFullYear();

  // Each link points to a real section (scroll) or route on this site
  const quickLinks = [
    { label: "About Us", id: "about" },
    { label: "Rooms & Suites", href: "#/room" },
    { label: "Amenities", id: "amenities" },
    { label: "Experiences", id: "experiences" },
    { label: "Gallery", id: "gallery" },
    { label: "Contact", id: "contact" },
  ];

  const socials = [
    { icon: FacebookLogo, label: "Facebook", href: "https://facebook.com" },
    { icon: InstagramLogo, label: "Instagram", href: "https://instagram.com" },
    { icon: XLogo, label: "X", href: "https://x.com" },
    { icon: LinkedinLogo, label: "LinkedIn", href: "https://linkedin.com" },
  ];

  let email = $state("");
  let subscribed = $state(false);

  /** @param {string} id */
  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  /** @param {SubmitEvent} e */
  function subscribe(e) {
    e.preventDefault();
    if (!email.trim()) return;
    subscribed = true;
    email = "";
  }
</script>

<footer
  id="contact"
  class="bg-slate-950 text-white pt-24 pb-12 px-6 border-t border-white/5"
>
  <div
    class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20"
  >
    <div class="col-span-1 lg:col-span-1">
      <a
        href="#/"
        class="text-4xl font-serif font-bold tracking-wider block mb-8"
      >
        Check<span class="text-yellow-500">Inn</span>
      </a>
      <p class="text-slate-400 leading-relaxed mb-8">
        Experience the pinnacle of luxury and comfort. Where every detail is
        curated for your perfect getaway.
      </p>
      <div class="flex space-x-4">
        {#each socials as social}
          {@const Icon = social.icon}
          <a
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-slate-900 transition-all cursor-pointer"
          >
            <Icon class="w-5 h-5" />
          </a>
        {/each}
      </div>
    </div>

    <div>
      <h4 class="text-lg font-bold mb-8 text-yellow-500">Quick Links</h4>
      <ul class="space-y-4 text-slate-400">
        {#each quickLinks as item}
          <li>
            {#if item.href}
              <a
                href={item.href}
                class="hover:text-white hover:translate-x-2 transition-all inline-block"
              >
                {item.label}
              </a>
            {:else}
              <button
                type="button"
                onclick={() => scrollTo(item.id)}
                class="hover:text-white hover:translate-x-2 transition-all inline-block text-left cursor-pointer"
              >
                {item.label}
              </button>
            {/if}
          </li>
        {/each}
      </ul>
    </div>

    <div>
      <h4 class="text-lg font-bold mb-8 text-yellow-500">Contact</h4>
      <ul class="space-y-6 text-slate-400">
        <li>
          <a
            href="https://www.google.com/maps/search/?api=1&query=123+Luxury+Ave+Paradise+City"
            target="_blank"
            rel="noreferrer"
            class="flex items-start gap-4 group hover:text-white transition-colors"
          >
            <div
              class="p-2 bg-white/5 rounded-full group-hover:bg-yellow-500 group-hover:text-slate-900 transition-colors"
            >
              <MapPin class="w-5 h-5" />
            </div>
            <span>123 Luxury Ave,<br />Paradise City, PC 12345</span>
          </a>
        </li>
        <li>
          <a
            href="tel:+15551234567"
            class="flex items-center gap-4 group hover:text-white transition-colors"
          >
            <div
              class="p-2 bg-white/5 rounded-full group-hover:bg-yellow-500 group-hover:text-slate-900 transition-colors"
            >
              <Phone class="w-5 h-5" />
            </div>
            <span>+1 (555) 123-4567</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:reservations@checkinn.com"
            class="flex items-center gap-4 group hover:text-white transition-colors"
          >
            <div
              class="p-2 bg-white/5 rounded-full group-hover:bg-yellow-500 group-hover:text-slate-900 transition-colors"
            >
              <Envelope class="w-5 h-5" />
            </div>
            <span>reservations@checkinn.com</span>
          </a>
        </li>
      </ul>
    </div>

    <div>
      <h4 class="text-lg font-bold mb-8 text-yellow-500">Newsletter</h4>
      <p class="text-slate-400 mb-6">
        Subscribe for exclusive offers and updates.
      </p>
      <form onsubmit={subscribe} class="relative group">
        <Input
          type="email"
          bind:value={email}
          required
          placeholder="Your email address"
          class="h-auto bg-white/5 text-white px-6 py-4 rounded-full w-full border-white/10 focus-visible:ring-yellow-500"
        />
        <Button
          type="submit"
          size="icon"
          class="absolute right-2 top-2 h-auto w-auto bg-yellow-500 text-slate-900 p-2 rounded-full hover:bg-yellow-400 transform group-hover:rotate-[-45deg] duration-300"
          aria-label="Subscribe"
        >
          <CaretRight class="w-5 h-5" />
        </Button>
      </form>
      {#if subscribed}
        <p class="text-green-400 text-sm mt-4 font-medium">
          Thanks for subscribing!
        </p>
      {:else}
        <p class="text-xs text-slate-500 mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      {/if}
    </div>
  </div>

  <Separator class="max-w-7xl mx-auto bg-white/10" />

  <div class="max-w-7xl mx-auto pt-8 text-center text-slate-500 text-sm">
    <p>© {year} CheckInn Hotels. All rights reserved.</p>
  </div>
</footer>
