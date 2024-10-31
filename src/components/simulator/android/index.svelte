<script>
  export let className = '';
  export let id = '';
</script>

<div class={['simulator-android-wrapper', className].join(' ')} id={id}>
  <div class='simulator-android-header'></div>
  <div class='simulator-android-content'></div>
  <div class='simulator-android-footer'></div>
</div>

<style lang='scss' global>
  .simulator-android-wrapper {
    width: 360px;
    height: 780px;
    background-color: var(--white);
  }
</style>