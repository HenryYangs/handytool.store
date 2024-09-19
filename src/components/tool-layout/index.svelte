<script>
  import { getCurrentTool } from '../../utils/tool';
  import ToolCard from '../tool-card/index.svelte';
  import TitleDesc from '../title-desc/index.svelte';

  export let id;
  export let toolsList = [];
  export let maxOtherCount = 8;

  const tool = getCurrentTool(toolsList, id);

  $: otherTools = toolsList.filter(item => item.id !== id).slice(0, maxOtherCount);
</script>

<main class='tool-layout-wrapper common-background'>
  <div class='container-fluid container-biz'>
    <TitleDesc title={tool.text} description={tool.description} />

    <div class='content'>
      <slot />
    </div>

    <!-- TODO -->
    <!-- <Share /> -->
    
    {#if otherTools.length}
      <div class='other-tools'>
        <h2 class='other-tools-title'>Other {tool.category} Tools</h2>
        <p class='other-tools-subtitle'>Checkout some other popular {tool.category} tools</p>

        <div class='other-tools-list'>
          {#each otherTools as tool}
            <ToolCard tool={tool} innerStyle='box-shadow: 3px 10px 40px rgba(24, 29, 32, 0.05)' />
          {/each}
        </div>
      </div>
    {/if}
  </div>
</main>

<style>
.tool-layout-wrapper {
  padding: 50px 0;
}

.content {
  margin-top: 20px;
}

.other-tools {
  margin-top: 50px;
}

.other-tools-title {
  font-weight: bold;
}

.other-tools-subtitle {
  margin-top: 15px;
  font-size: 18px;
  font-weight: 400;
  color: var(--theme-secondary-dark-color);
}

.other-tools-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
</style>
