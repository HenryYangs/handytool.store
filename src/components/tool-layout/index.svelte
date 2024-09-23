<script>
  import { getCurrentTool } from '../../utils/tool';
  import ToolCard from '../tool-card/index.svelte';
  import TitleDesc from '../title-desc/index.svelte';
  import { onMount } from 'svelte';
  import http from '../../utils/http';

  export let id;
  export let category;
  export let maxOtherCount = 8;

  let toolsList = [];
  $: otherTools = toolsList.filter(item => item.id !== id).slice(0, maxOtherCount);

  $: tool = getCurrentTool(toolsList, id);

  onMount(() => {
    http({
      url: `/tool-list?scene=tool&id=${category}`,
      method: 'GET',
    }).then(response => {
      toolsList = response;
    });
  });

  const onFavorite = (toolId) => {
    toolsList = toolsList.map(tool => {
      return {
        ...tool,
        favorite: tool.id === toolId ? !tool.favorite : tool.favorite,
      };
    });
  };
</script>

<main class='tool-layout-wrapper common-background'>
  <div class='container-fluid container-biz'>
    <TitleDesc
      title={tool.text}
      description={tool.description}
      isFavorite={tool.favorite}
      id={id}
      onFavorite={() => onFavorite(id)}
    />

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
            <ToolCard
              tool={tool}
              innerStyle='box-shadow: 3px 10px 40px rgba(24, 29, 32, 0.05)'
              onFavorite={() => onFavorite(tool.id)}
            />
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
