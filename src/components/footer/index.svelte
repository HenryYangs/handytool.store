<script>
  import Entry from './entry/index.svelte';
  import { CONF_NAVIGATE, CONF_TOOLS } from './config/entries';
</script>

<footer>
  <div class='container-fluid container-biz'>
    <div class='row align-items-start'>
      <Entry
        title='Navigate'
        className='col-2'
        list={CONF_NAVIGATE}
      />

      <Entry
        title='Tools'
        className='col-10'
        list={CONF_TOOLS}
      />
    </div>
  </div>

  <div class='footer'>
    <div class='container-fluid container-biz'>
      <div class='row justify-content-between align-items-center'>
        <div class='col'></div>

        <div class='col copyright'>© 2024 {location.hostname}. All rights reserved</div>
      </div>
    </div>
  </div>
</footer>

<style>
footer {
  margin-top: 35px;
  color: #ADBBDA;
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
</style>
