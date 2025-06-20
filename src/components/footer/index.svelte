<script>
  import Entry from './entry/index.svelte';
  import { CONF_NAVIGATE } from './config/entries';
  import { onMount } from 'svelte';
  import http from '../../utils/http';
  import { processToolUrl } from '../../utils/url';
  import { t } from 'svelte-i18n';
  import { ALL_TOOLS, PURE_TOOLS } from '../../config/tools';

  $: toolList = [];

  onMount(() => {
    // http({
    //   url: '/footer',
    //   method: 'GET',
    // })
    // .then(response => {
    //   toolList = response.map((item) => ({
    //     text: item.text,
    //     url: processToolUrl(item),
    //   }));
    // })
    toolList = ALL_TOOLS.slice(0, 20).map((item) => ({
      text: item.text,
      url: processToolUrl(item),
    }));
  });
</script>

<footer class='footer-wrapper'>
  <div class='container-biz entry-wrapper layout-start'>
    <Entry
      title={$t('Navigate')}
      style='width: 15%'
      list={CONF_NAVIGATE}
    />

    <Entry
      title={$t('Tools')}
      style='width: 85%'
      list={toolList}
    />
  </div>

  <div class='footer'>
    <div class='container-biz copyright'>© 2024 {location.hostname}. All rights reserved</div>
  </div>
</footer>

<style global lang='scss'>
  .footer-wrapper {
    margin-top: 35px;
    color: var(--theme-secondary-dark-color);

    .entry-wrapper  {
      margin: auto;
    }
    
    .footer {
      padding: 20px 0;
      margin-top: 80px;
      background-color: rgb(112, 145, 230, .3);
      color: #333;
    }
    
    .copyright {
      margin: auto;
      text-align: end;
    }
  }
</style>
