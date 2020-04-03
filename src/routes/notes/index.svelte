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
  import Markdown from "../../components/Markdown.svelte";

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
          title={note.title}
          preview={note.preview}
          date={note.date}
          href={`/notes/${note.slug}`} />
      </div>
      <div class="container">
        <Markdown document={note} />
      </div>
    {/each}
  </section>
</body>
