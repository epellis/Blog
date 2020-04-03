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
  import Link from "../../components/Link.svelte";

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

  <section class="section">
    {#each notes as note}
      <div class="container">
        <Link
          title={'My Link'}
          preview={'This is a summary of my link'}
          date={new Date()}
          href={`/notes/${'My Link'}`} />
      </div>
    {/each}
  </section>
</body>
