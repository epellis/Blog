<script>
  import MDParagraph from "./MDParagraph.svelte";
  import MDHeading from "./MDHeading.svelte";
  import MDCode from "./MDCode.svelte";

  export let tree;
</script>

{#if tree.type === 'root'}
  {#each tree.children as child}
    <svelte:self tree={child} />
  {/each}
{:else if tree.type === 'paragraph'}
  <MDParagraph {tree} />
{:else if tree.type === 'heading'}
  <MDHeading {tree} />
{:else if tree.type === 'code'}
  <MDCode {tree} />
{/if}
