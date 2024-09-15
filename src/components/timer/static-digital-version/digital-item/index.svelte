<script>
  export let show = true;
  export let color = '';
  export let value = '';
  export let showSeparator = false;
  export let subText = '';
  export let subTextColor = '';
</script>

{#if show}
  <div class='wrapper'>
    <p
      class='timer_main-text'
      style={`color: ${color}`}
    >{value}</p>
    <p class='timer_sub-text' style={`color: ${subTextColor}`}>{subText}</p>
  </div>

  {#if showSeparator}
    <span class='separator timer_main-text' style={`color: ${color}`}>:</span>
  {/if}
{/if}

<style>
.timer_main-text {
  font-size: 120px;
  font-weight: 500;
}

.timer_sub-text {
  text-align: center;
  font-size: 25px;
  font-weight: 400;
}

.separator {
  margin: 0 10px;
}
</style>
