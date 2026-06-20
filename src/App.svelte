<script>
  import Router from "svelte-spa-router";
  import Landing from "./routes/Landing.svelte";
  import Rooms from "./routes/Rooms.svelte";

  const routes = {
    "/": Landing,
    "/room": Rooms,
    // fallback
    "*": Landing,
  };
</script>

<Router {routes} />
