<script>
  import { EVENTS } from '../../../../../constant/events';
  import { useEventListener } from '../../../../../utils/hooks/use-event-listener';
    import WechatHeader from '../../header/index.svelte';
    import WechatFooter from '../footer/index.svelte';
    import Message from '../message/index.svelte';

    $: bgImage = '';

    const handleBgImageChange = (value) => {
      bgImage = value;
    };

    useEventListener(EVENTS.APP.WECHAT.DIALOG.BG_IMAGE, handleBgImageChange);
</script>

<div class='wechat-dialog-layout'>
  <WechatHeader />

  <div class='wechat-content' style={`background-image: ${bgImage}`}>
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
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
</style>
