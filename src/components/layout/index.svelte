<script>
  import Header from '../header/index.svelte';
  import Footer from '../footer/index.svelte';
</script>

<div class='wrapper'>
  <Header></Header>

  <!-- make sure the page can fill page -->
  <div style='flex: 1'>
    <slot />
  </div>

  <Footer></Footer>
</div>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
