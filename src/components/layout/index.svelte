<script>
  import Header from '../header/index.svelte';
  import Footer from '../footer/index.svelte';
  import LayerManager from '../layer-manager/index.svelte';
  import Auth from '../auth/index.svelte';
  import { localResult } from '../../utils/i18n';
  import Loading from '../loading/index.svelte';
</script>

{#await localResult}
  <div class='loading-wrapper'>
    <Loading />
  </div>
{:then}
  <div class='wrapper'>
    <Header></Header>

    <!-- make sure the page can fill page -->
    <div style='flex: 1'>
      <slot />
    </div>

    <Footer></Footer>

    <LayerManager />

    <Auth />
  </div>
{:catch error}
<!-- TODO a pure error page, as less dependencies as possible -->
error {error}
{/await}

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.loading-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
