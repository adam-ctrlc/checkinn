<script>
  import { ArrowLeft, Phone } from "phosphor-svelte";
  import { Button } from "$lib/components/ui/button/index.js";
</script>

<header class="bg-white border-b border-slate-200 sticky top-0 z-40">
  <div
    class="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between"
  >
    <div class="flex items-center gap-3 sm:gap-6">
      <a
        href="#/"
        class="group flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-yellow-600 transition-colors"
      >
        <div
          class="p-2 rounded-full bg-slate-100 group-hover:bg-yellow-50 transition-colors"
        >
          <ArrowLeft class="w-4 h-4" />
        </div>
        <span class="hidden sm:inline">Back to Home</span>
      </a>
      <div class="h-6 w-[1px] bg-slate-200"></div>
      <a href="#/" class="text-xl sm:text-2xl font-serif font-bold tracking-wider">
        Check<span class="text-yellow-500">Inn</span>
      </a>
    </div>

    <div class="flex items-center gap-3 sm:gap-4">
      <Button
        href="tel:+15551234567"
        class="h-auto bg-yellow-500 hover:bg-yellow-400 [a]:hover:bg-yellow-400 text-slate-900 [a]:hover:text-slate-900 px-5 py-2.5 rounded-full text-sm font-bold transform hover:scale-105 shadow-lg hover:shadow-yellow-500/20"
      >
        <Phone class="w-4 h-4" />
        <span class="hidden sm:inline">Call Us</span>
      </Button>
    </div>
  </div>
</header>
