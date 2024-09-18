<script>
  import TitleDesc from '../title-desc/index.svelte';
  import ToolCardList from '../tool-card-list/index.svelte';

  export let title = '';
  export let description = '';
  export let list = [];

  $: renderList = list;
  $: searchValue = '';

  const onSearch = (event) => {
    const lowerCase = searchValue.toLowerCase();

    renderList = list.filter(item => {
      return item.text.toLowerCase().includes(lowerCase) || item.category.toLowerCase().includes(lowerCase);
    });
  };
  const onSearchKeypress = (event) => {
    if(event.keyCode == 13) { // enter
      onSearch();
      event.preventDefault();
    }
  };
</script>

<main class='wrapper common-background'>
  <div class='container-fluid container-biz inner-wrapper'>
    <TitleDesc title={title} description={description} />

    <form class='search-wrapper'>
      <i class='iconfont-common icon-common-search icon-search'></i>
      
      <input class='search-input' placeholder='Search' type='text' bind:value={searchValue} on:keypress={onSearchKeypress} />
      
      <button class='btn-search' type='button' on:click={onSearch}>Search</button>
    </form>

    <ToolCardList list={renderList} style='margin-top: 50px;' />
  </div>
</main>

<style>
.wrapper {
  height: 100%;
  padding: 50px 0;
}

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
  background: #FFFFFF;
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
  top: 14px;
  left: 18px;
  font-size: 24px;
  color: #7091E6;
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
  color: #FFF;
  border: none;
  transition: all .3s ease;
}

.btn-search:hover,
.btn-search:active {
  background-color: #3D52A0;
  color: #FFF;
}
</style>
