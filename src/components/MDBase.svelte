<script>
  import MDParagraph from "./MDParagraph.svelte";

  export let tree;

  console.log("Dispatching:", tree);
</script>

{#if tree.type === 'root'}
  {#each tree.children as child}
    <svelte:self tree={child} />
  {/each}
{:else if tree.type === 'paragraph'}
  <MDParagraph {tree} />
  <!-- {:else if tree.type === 'text'}
  <MDText {tree} /> -->
{/if}
<strong>{tree}</strong>
