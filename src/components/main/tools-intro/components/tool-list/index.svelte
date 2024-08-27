<script>
  import { FULL_TOOLS } from '../../../../../constant/tools';
  import ToolCard from '../../../../tool-card/index.svelte';

  export let tabIdx = 0;
</script>

<div class='tools-list'>
  {#each FULL_TOOLS[tabIdx].list as tool}
    <ToolCard tool={tool} />
  {/each}
</div>

<style>
.tools-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
}
</style>
