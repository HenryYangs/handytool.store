<script>
  import { stringCaseTransform } from '../../../utils/string';
  import { TABS } from './config';

  let tabIdx = 0;
  $: allBtnText = TABS[tabIdx].id === 'all' ? 'All Tools' : `All ${TABS[tabIdx].text} Tools`;

  /**
   * @param {number} index
   */
  function onTabClick(index) {
    tabIdx = index;
  }
</script>

<div class='wrapper'>
  <div class='container-fluid container-biz'>
    <h1 class='text-center'>Find Tools You Need</h1>

    <div class='tools-entry'>
      <div class='tab-wrapper'>
        <div class='tab-inner-wrapper'>
          {#each TABS as tab, index}
            <button
              class={`tab-item ${tab.id === TABS[tabIdx].id ? 'active' : ''}`}
              on:click={() => onTabClick(index)}
            >{tab.text}</button>
          {/each}
        </div>
      </div>

      <div class='tools-list'>
        {#each TABS[tabIdx].list as tool}
          <div class='tool-item'>
            <a href={`/tool/${tool.category}/${tool.id}`}>
              <div class='tool-item_inner'>
                <div class='tool-item_body'>
                  <div class='tool-item_icon' style:background-color={tool.iconTheme}>
                    <i
                      class={`iconfont-tools icon-tools-${tool.category}${tool.icon ? `-${tool.icon}` : ''}`}
                      style:color={tool.color}
                    ></i>
                  </div>
  
                  <div class='tool-item_main'>
                    <h6 class='tool-item_title'>{tool.text}</h6>
  
                    <p class='tool-item_category' style:color={tool.color}>{stringCaseTransform(tool.category)}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        {/each}
      </div>
      
      <div class='footer-btn'>
        <button class='btn btn-primary redirect-to-full-page' on:click={() => {
          location.href = `/tool/${TABS[tabIdx].id}`
        }}>{allBtnText}</button>
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

.wrapper {
  background-color: rgba(134, 151, 196, .1)
}

.tools-entry {
  margin-top: 40px;
}

.tab-wrapper {
  text-align: center;
}

.tab-inner-wrapper {
  display: inline-block;
  text-align: center;
  padding: 12px 6px;
  border-radius: 99px;
  background-color: #FFF;
  box-shadow: 3px 10px 40px rgba(24, 29, 32, 0.05);
}

.tab-item {
  display: inline-block;
  padding: 12px;
  margin: 0 6px;
  cursor: pointer;
  border: none;
  background-color: transparent;
}

.tab-item.active {
  border-radius: 99px;
  background-color: #3D52A0;
  color: #FFF;
}

.tools-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
}

.tool-item {
  flex: 0 0 25%;
  max-width: 25%;
  padding: 10px;
}

.tool-item_inner {
  padding: 16px 44px 16px 16px;
  border-radius: 12px;
  background-color: #FFF;
  color: #ADBBDA;
}

.tool-item_body {
  display: flex;
  justify-content: start;
  align-items: start;
}

.tool-item_icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  margin-right: 8px;
}

.tool-item_icon i {
  font-size: 25px;
}

.tool-item_main {
  width: calc(100% - 48px);
}

.tool-item_title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #333;
  font-weight: 700;
}

.tool-item_category {
  margin: 10px 0 0;
  font-size: 14px;
}

.footer-btn {
  margin-top: 30px;
  text-align: center;
}
</style>
