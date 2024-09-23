<script>
  import ToolCard from '../tool-card/index.svelte';

  export let list = [];
  export let style = '';
  export let onFavorite = (id) => {};
</script>

<section class='wrapper' style={style}>
  {#each list as tool}
    <ToolCard tool={tool} onFavorite={() => onFavorite(tool.id)} />
  {/each}
</section>

<style>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
