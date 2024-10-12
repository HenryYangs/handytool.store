<script>
  import Entry from './entry/index.svelte';
  import { CONF_NAVIGATE } from './config/entries';
  import { onMount } from 'svelte';
  import http from '../../utils/http';
  import { processToolUrl } from '../../utils/url';
  import { t } from 'svelte-i18n';

  $: toolList = [];

  onMount(() => {
    http({
      url: '/footer',
      method: 'GET',
    })
    .then(response => {
      toolList = response.map((item) => ({
        text: item.text,
        url: processToolUrl(item),
      }));
    })
  });
</script>

<footer class='footer-wrapper'>
  <div class='container-biz'>
    <div class='row align-items-start'>
      <Entry
        title={$t('Navigate')}
        className='col-2'
        list={CONF_NAVIGATE}
      />

      <Entry
        title={$t('Tools')}
        className='col-10'
        list={toolList}
      />
    </div>
  </div>

  <div class='footer'>
    <div class='container-biz'>
      <div class='row justify-content-between align-items-center'>
        <div class='col'></div>

        <div class='col copyright'>© 2024 {location.hostname}. All rights reserved</div>
      </div>
    </div>
  </div>
</footer>

<style global lang='scss'>
  .footer-wrapper {
    footer {
      margin-top: 35px;
      color: var(--theme-secondary-dark-color);
    }
    
    .footer {
      padding: 20px 0;
      margin-top: 80px;
      background-color: rgb(112, 145, 230, .3);
      color: #333;
    }
    
    .copyright {
      text-align: end;
    }
  }
</style>
