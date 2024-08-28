<script>
  export let onClear = () => {};
  export let onCopy = () => {};
</script>

<div>
  <button class='btn btn-outline-dark btn-sm' on:click={onClear}>Clear</button>
  <!-- TODO -->
  <button class='btn btn-outline-dark btn-sm' on:click={onCopy}>Copy</button>
</div>

<style></style>
