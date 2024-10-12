<script>
  export let color = '';
  export let value = '';
  export let showSeparator = false;
  export let subText = '';
  export let subTextColor = '';
</script>

<div class='digital-item-wrapper layout-center-start'>
  <div class='main-text-wrapper'>
    <p
      class='timer_main-text'
      style={`color: ${color}`}
    >{value}</p>

    {#if subText}
      <p class='timer_sub-text' style={`color: ${subTextColor}`}>{subText}</p>
    {/if}
  </div>

  {#if showSeparator}
    <span class='separator timer_main-text' style={`color: ${color}`}>:</span>
  {/if}
</div>


<style global lang='scss'>
  .digital-item-wrapper {
    .timer_main-text {
      height: 180px;
      line-height: 180px;
      font-size: 120px;
      font-weight: 500;
      font-family: Helvetica, Arial, sans-serif;
    }
    
    .timer_sub-text {
      text-align: center;
      font-size: 25px;
      font-weight: 400;
    }

    .separator {
      margin: 0 10px;
    }
  }
</style>
