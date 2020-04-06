<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`projects/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { document: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Markdown from "../../components/Markdown.svelte";

  export let document;
</script>

<svelte:head>
  <title>{document.title}</title>
</svelte:head>

<Markdown {document} />
