<script context="module">
  export async function preload({ params, query }) {
    return await this.fetch("notes.json")
      .then(r => r.json())
      .then(notes => {
        return { notes };
      });
  }
</script>

<script>
  export let notes;

  console.log(`Notes: ${notes} Type: ${typeof notes}`);
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
    <p>{note}</p>
  {/each}
</ul>
