<script>
  import { onMount } from 'svelte';
  import { FULL_TOOLS } from '../../../constant/tools';
  import { processUrl } from '../../../utils/url';
  import Tab from './components/tab/index.svelte';
  import ToolCardList from '../../tool-card-list/index.svelte';

  let tabIdx = 0;
  $: curTabItem = FULL_TOOLS[tabIdx];
  $: allBtnText = curTabItem.id === 'all' ? 'All Tools' : `All ${curTabItem.text} Tools`;
  const TAB_KEY = 'handyTool_home_tab';

  /**
   * @param {number} index
   */
  function onTabClick(index) {
    tabIdx = index;
    localStorage.setItem(TAB_KEY, String(index));
  }

  onMount(() => {
    const cache = Number(localStorage.getItem(TAB_KEY));

    if (!cache && cache !== 0) return;

    onTabClick(cache);

    return () => {
      localStorage.removeItem(TAB_KEY);
    }
  })
</script>

<div class='wrapper common-background'>
  <div class='container-fluid container-biz'>
    <h1 class='text-center'>Find Tools You Need</h1>

    <div class='tools-entry'>
      <Tab
        tabIdx={tabIdx}
        onTabClick={onTabClick}
      />

      <!-- TODO get random tools -->
       <ToolCardList list={FULL_TOOLS[tabIdx].list.slice(0, 12)} style='margin-top: 30px;' />
      
      <div class='footer-btn'>
        <a class='btn btn-primary redirect-to-list' href={processUrl(curTabItem.isWIP, `/tool/${curTabItem.id}`)}>{allBtnText}</a>
      </div>
    </div>
  </div>
</div>

<style>
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
  border-color: #3D52A0;
  color: #3D52A0;
  box-shadow: 0 5px 10px rgba(61, 82, 160, 0.1);
  font-size: 14px;
  font-weight: 600;
  transition: all .3s linear;
}

.redirect-to-list:hover {
  background-color: #3D52A0;
  color: #FFF;
}
</style>
