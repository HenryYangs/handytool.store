<script>
  import { getCurrentTool } from '../../utils/tool';
  import ToolCard from '../tool-card/index.svelte';
  import TitleDesc from '../title-desc/index.svelte';
  import { onMount } from 'svelte';
  import http from '../../utils/http';
  import { t } from 'svelte-i18n';
  import Share from '../share/index.svelte';

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
      const isValidTool = Boolean(response.filter(tool => tool.id === id).length);

      if (!isValidTool) {
        location.replace('/404');
        return;
      }

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

<main class='tool-layout-wrapper layout-center common-background'>
  <div class='container-biz'>
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

    <Share name={tool.text} style='margin-top: 30px;' />
    
    {#if otherTools.length}
      <div class='other-tools'>
        <h2 class='other-tools-title'>{$t('otherToolsTitle', { values: { toolName: $t(tool.category) } })}</h2>
        <p class='other-tools-subtitle'>{$t('otherToolsDesc', { values: { toolCategory: $t(tool.category) } })}</p>

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

<style global lang='scss'>
  .tool-layout-wrapper {
    padding: 50px 0;

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
  }
</style>
