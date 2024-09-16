<script>
  import ToolCard from '../tool-card/index.svelte';

  export let list = [];
  export let style = '';
</script>

<section class='wrapper' style={style}>
  {#each list as tool}
    <ToolCard tool={tool} />
  {/each}
</section>

<style>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
