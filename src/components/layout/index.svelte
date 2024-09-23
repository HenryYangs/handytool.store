<script>
  import Header from '../header/index.svelte';
  import Footer from '../footer/index.svelte';
  import LayerManager from '../layer-manager/index.svelte';
  import Auth from '../auth/index.svelte';
</script>

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

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
