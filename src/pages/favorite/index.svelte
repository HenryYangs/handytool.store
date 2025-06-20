<script>
  import { onMount } from 'svelte';
  import Layout from '../../components/layout/index.svelte';
  import ToolCardList from '../../components/tool-card-list/index.svelte';
  import http from '../../utils/http';
  import { t } from 'svelte-i18n';

  $: toolList = [];

  // const onFavorite = (id) => {
  //   toolList = toolList.filter(tool => tool.id !== id);
  // };

  onMount(() => {
    http({
      url: '/favorite',
      method: 'GET',
    }, { showErrorToast: false }).then(response => {
      toolList = response;
    })
  });
</script>

<Layout>
  <div class='wrapper common-background layout-center-start'>
    <div class='container-biz'>
      <h1 class='title text-center'>{$t('favoriteTitle')}</h1>

      {#if toolList.length}
        <ToolCardList
          style='margin-top: 30px;'
          list={toolList}
        />
          <!-- onFavorite={onFavorite} -->
      {:else}
        <p class='text-center'>{$t('emptyFavoriteTips')}</p>
      {/if}
    </div>
  </div>
</Layout>

<style global lang='scss'>
@media (min-width: 1200px) {
  .wrapper {
    padding: 100px 0;
  }
}

@media (max-width: 1199px) {
  .wrapper {
    padding: 56px 0;
  }
}

.wrapper {
  height: 100%;
}

.title {
  margin-bottom: 30px;
}
</style>
