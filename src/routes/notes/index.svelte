<script context="module">
  export function preload({ params, query }) {
    return this.fetch("notes")
      .then(r => r.json())
      .then(notes => {
        return { notes };
      });
  }
</script>

<script>
  export let notes;
</script>

<svelte:head>
  <title>Notes</title>
</svelte:head>

<body>
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container is-fluid">
        <h1 class="title">Notes</h1>
      </div>
    </div>
  </section>
</body>

<ul>
  {#each notes as note}
    <p>note</p>
  {/each}
</ul>
