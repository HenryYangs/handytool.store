<script>
  import { onMount } from 'svelte';
  import TitleDesc from '../title-desc/index.svelte';
  import ToolCardList from '../tool-card-list/index.svelte';
  import http from '../../utils/http';
  import { t } from 'svelte-i18n';

  export let id = '';
  export let title = '';
  export let description = '';

  let list = [];
  $: renderList = [];
  $: searchValue = '';

  const onSearch = () => {
    const lowerCase = searchValue.toLowerCase();

    renderList = list.filter(item => {
      return item.text.toLowerCase().includes(lowerCase) || item.category.toLowerCase().includes(lowerCase);
    });
  };
  const onSearchKeyPress = (event) => {
    if(event.keyCode == 13) { // enter
      onSearch();
      event.preventDefault();
    }
  };

  const onFavorite = (id) => {
    renderList = renderList.map(item => ({
      ...item,
      favorite: item.id === id ? !item.favorite : item.favorite,
    }));
    list = list.map(item => ({
      ...item,
      favorite: item.id === id ? !item.favorite : item.favorite,
    }));
  }

  onMount(() => {
    http({
      url: `/tool-list?scene=list&id=${id}`,
      method: 'GET',
    }).then(response => {
      renderList = response;
      list = response;

      // process search in url after api request response
      const query = location.search.replace('?', '').split('&').find(item => item.startsWith('q='));
  
      if (query) {
        const [, value] = query.split('=');
  
        searchValue = value;
        onSearch();
      }
    });
  });
</script>

<main class='tool-list-wrapper common-background layout-center'>
  <div class='container-biz inner-wrapper'>
    <TitleDesc title={title} description={description} showStar={false} />

    <form class='search-wrapper'>
      <i class='iconfont-common icon-common-search icon-search'></i>
      
      <input class='search-input' placeholder={$t('Search')} type='text' bind:value={searchValue} on:keypress={onSearchKeyPress} />
      
      <button class='btn-search' type='button' on:click={onSearch}>{$t('Search')}</button>
    </form>

    <ToolCardList
      style='margin-top: 50px;'
      list={renderList}
      onFavorite={onFavorite}
    />
  </div>
</main>

<style global lang='scss'>
  .tool-list-wrapper {
    height: 100%;
    padding: 50px 0;

    .inner-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .search-wrapper {
      position: relative;
      width: 600px;
      margin-top: 60px;
      text-align: center;
    }
    
    .search-input {
      width: 100%;
      height: 64px;
      background: var(--white);
      box-shadow: 3px 10px 40px rgba(24, 29, 32, 0.05);
      border-radius: 99px;
      border: none;
      font-size: 14px;
      padding: 0 80px 0 56px;
    }
    
    .search-input:focus {
      outline: 0;
    }
    
    .icon-search {
      position: absolute;
      top: 50%;
      left: 18px;
      transform: translateY(-50%);
      font-size: 24px;
      color: var(--theme-secondary-color);
    }
    
    .btn-search {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      background-color: rgb(112, 145, 230, 1);
      box-shadow: 0 5px 10px rgba(26, 143, 227, 0.1);
      border-radius: 99px;
      padding: 12px 26.5px;
      color: var(--white);
      border: none;
      transition: all .3s ease;
    }
    
    .btn-search:hover,
    .btn-search:active {
      background-color: var(--theme-main-color);
      color: var(--white);
    }
  }
</style>
