<script>
  export let strength = 0; // 0 to 4
  export let color = '';
</script>

<div class='signal-bar'>
  {#each Array(4) as _, i}
    <div
      class='bar'
      class:active={i < strength}
      style={`${i < strength ? `background-color: ${color}` : ''}`}
    ></div>
  {/each}
</div>

<style>
  .signal-bar {
    display: flex;
    align-items: flex-end;
    width: 16px;
    height: 10px;
    gap: 2px;
  }

  .bar {
    width: 5px;
    background-color: #a3a3a3;
    border-radius: 2px;
  }

  .bar:nth-child(1) { height: 50%; }
  .bar:nth-child(2) { height: 66%; }
  .bar:nth-child(3) { height: 82%; }
  .bar:nth-child(4) { height: 100%; }

  .bar.active {
    background-color: #000;
    border-radius: 3px;
  }
</style>
