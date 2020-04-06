<script context="module">
  export async function preload({ params, query }) {
    return await this.fetch("projects.json")
      .then(r => r.json())
      .then(projects => {
        return { projects };
      });
  }
</script>

<script>
  import Link from "../../components/Link.svelte";
  import Markdown from "../../components/Markdown.svelte";

  export let projects;
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<body>
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container is-fluid">
        <h1 class="title">Projects</h1>
      </div>
    </div>
  </section>

  <section class="section">
    {#each projects as project}
      <div class="container">
        <Link
          title={project.title}
          preview={project.preview}
          date={project.date}
          href={`/projects/${project.slug}`} />
      </div>
    {/each}
  </section>
</body>
