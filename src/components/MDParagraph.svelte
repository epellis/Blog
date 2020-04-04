<script>
  export let tree;
</script>

<p>
  {#each tree.children as child}
    {#if child.type === 'text'}
      {child.value}
    {:else if child.type === 'emphasis'}
      <i>{child.children[0].value}</i>
    {:else if child.type === 'strong'}
      <strong>{child.children[0].value}</strong>
    {/if}
  {/each}
</p>
