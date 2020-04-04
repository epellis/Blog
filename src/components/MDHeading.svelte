<script>
  export let tree;

  let text = tree.children[0].value;
</script>

{#if tree.depth === 1}
  <h1 class="title is-1">{text}</h1>
{:else if tree.depth === 2}
  <h2 class="title is-2">{text}</h2>
{:else if tree.depth === 3}
  <h3 class="title is-3">{text}</h3>
{:else if tree.depth === 4}
  <h4 class="title is-4">{text}</h4>
{:else if tree.depth === 5}
  <h5 class="title is-5">{text}</h5>
{:else if tree.depth === 6}
  <h6 class="title is-6">{text}</h6>
{/if}
