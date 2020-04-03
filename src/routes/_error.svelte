<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<body>
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container is-fluid">
        <h1 class="title">Error: {status}</h1>
        <h2 class="subtitle">Message: {error.message}</h2>
      </div>
    </div>
  </section>
</body>
