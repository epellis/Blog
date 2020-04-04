<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    console.log("Looking for slug:", params.slug);

    const res = await this.fetch(`notes/${params.slug}.json`);
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

<Markdown {document} />
