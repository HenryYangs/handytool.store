<script>
  import { onMount } from 'svelte';
  import ExecuteBtn from '../../../components/execute-btn/index.svelte';
  import { processUrl } from '../../../utils/url';
  import Tab from './components/tab/index.svelte';
  import ToolCardList from '../../tool-card-list/index.svelte';
  import http from '../../../utils/http';
  import { t } from 'svelte-i18n';

  let tabIdx = 0;
  $: tabList = [];
  $: curTabItem = tabList[tabIdx] || { id: '' };
  $: allBtnText = curTabItem.id === 'all' ? $t('All Tools') : $t('allSingleTool', { values: { tool: curTabItem.text } });

  const TAB_KEY = 'handyTool_home_tab';

  /**
   * @param {number} index
   */
  function onTabClick(index) {
    tabIdx = index;
    localStorage.setItem(TAB_KEY, String(index));
  }

  const onFavorite = (id) => {
    tabList[tabIdx].list = tabList[tabIdx].list.map(item => ({
      ...item,
      favorite: item.id === id ? !item.favorite : item.favorite,
    }))
  };

  onMount(() => {
    http({
      url: '/tool-list',
      method: 'GET'
    }).then(response => {
      tabList = response;

      const cache = Number(localStorage.getItem(TAB_KEY));

      if (!cache && cache !== 0) return;

      onTabClick(cache);
    });

    return () => {
      localStorage.removeItem(TAB_KEY);
    }
  })
</script>

<div class='tools-intro-wrapper common-background layout-center'>
  <div class='container-biz'>
    <h1 class='text-center'>{$t('homeTitle')}</h1>

    <div class='tools-entry'>
      <Tab
        list={tabList}
        tabIdx={tabIdx}
        onTabClick={onTabClick}
      />

      {#if tabList.length}
        <ToolCardList
          style='margin-top: 30px;'
          list={tabList[tabIdx].list}
          onFavorite={onFavorite}
        />
      {/if}
      
      <div class='footer-btn layout-center'>
        <ExecuteBtn
          btnClassName='redirect-to-list'
          onConfirm={() => window.open(processUrl(curTabItem.isWIP, `/tool/${curTabItem.id}`), '_self')}
          text={allBtnText}
          buttonProps={{
            size: 'medium'
          }}
        />
      </div>
    </div>
  </div>
</div>

<style global lang='scss'>
@media (min-width: 1200px) {
  .tools-intro-wrapper {
    padding: 100px 0;
  }
}

@media (max-width: 1199px) {
  .tools-intro-wrapper {
    padding: 56px 0;
  }
}

  .tools-intro-wrapper {
    .tools-entry {
      margin-top: 40px;
    }

    .footer-btn {
      margin-top: 30px;
      text-align: center;
    }

    .redirect-to-list {
      padding: 17px 48px;
      background-color: transparent;
      border-color: var(--theme-main-color);
      box-shadow: 0 5px 10px rgba(61, 82, 160, 0.1);
      font-size: 14px;
      font-weight: 600;
      transition: all .3s linear;

      span {
        color: var(--theme-main-color);
      }
    }

    .redirect-to-list:hover {
      background-color: var(--theme-main-color);
    }
  }
</style>
