<script>
    import WechatHeader from '../../header/index.svelte';
    import WechatFooter from '../footer/index.svelte';
    import Message from '../message/index.svelte';
</script>

<div class='wechat-dialog-layout'>
  <WechatHeader />

  <div class='wechat-content'>
    <Message />
  </div>

  <WechatFooter />
</div>

<style lang='scss' global>
  .wechat-dialog-layout {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #EBEBEB;

    .wechat-content {
      flex: 1;
      overflow: scroll;
    }
  }
</style>
