<script>
  import Delete from '../delete/index.svelte';

  export let time = '';
  export let onDelete = () => {};
</script>

<div class='wechat-message-time-wrapper layout-center'>
  <Delete className='wechat-message-time-delete' onDelete={onDelete} />

  <span>{time}</span>
</div>

<style lang='scss' global>
  .wechat-message-time-wrapper {
    position: relative;
    height: 20px;
    font-size: 24px;
    color: #a5a5a5;

    .wechat-message-time-delete {
      position: absolute;
      left: 20px;
      top: 0;
    }
  }
</style>
