<script>
  import Time from './components/time/index.svelte';
  import Text from './components/text/index.svelte';
  import Image from './components/image/index.svelte';
  import Voice from './components/voice/index.svelte';
  import RedPacket from './components/red-packet/index.svelte';
  import RedPacketReceiver from './components/red-packet/receiver/index.svelte';
  import Transfer from './components/transfer/index.svelte';
  import { EVENTS } from '../../../../../constant/events';
  import { useEventListener } from '../../../../../utils/hooks/use-event-listener';
  import { OPERATION_TYPE } from '../../../../../constant/common/operation';
  import { WECHAT_DIALOG_MESSAGE_TYPE } from '../../../../../constant/app/wechat/dialog';

  const messageMap = {
    [WECHAT_DIALOG_MESSAGE_TYPE.TIME]: Time,
    [WECHAT_DIALOG_MESSAGE_TYPE.TEXT]: Text,
    [WECHAT_DIALOG_MESSAGE_TYPE.IMAGE]: Image,
    [WECHAT_DIALOG_MESSAGE_TYPE.VOICE]: Voice,
    [WECHAT_DIALOG_MESSAGE_TYPE.SEND_RED_PACKET]: RedPacket,
    [WECHAT_DIALOG_MESSAGE_TYPE.RECEIVE_RED_PACKET]: RedPacketReceiver,
    [WECHAT_DIALOG_MESSAGE_TYPE.SEND_TRANSFER]: Transfer,
    [WECHAT_DIALOG_MESSAGE_TYPE.RECEIVE_TRANSFER]: Transfer,
  };

  $: msgList = [];

  const onUpdateMessage = ({ msg, operate }) => {
    switch (operate) {
      case OPERATION_TYPE.ADD:
        msgList = msgList.concat(msg);
        break;
      case OPERATION_TYPE.UPDATE:
        // msgList.push(msg);
        break;
      case OPERATION_TYPE.CLEAR:
        msgList = [];
      default:
        break;
    }
  };

  const onDelete = (index) => {
    const copy = [...msgList];
    
    copy.splice(index, 1);
    msgList = copy;
  };

  useEventListener(EVENTS.APP.WECHAT.DIALOG.UPDATE_MESSAGE, onUpdateMessage);
</script>

<div class='wechat-message-wrapper'>
  {#each msgList as msg, index}
    <svelte:component this={messageMap[msg.type]} {...msg} onDelete={() => onDelete(index)} />
  {/each}
</div>

<style lang='scss' global>
  .wechat-message-wrapper {
    padding: 0 20px;

    & > * {
      margin-top: 15px;
    }
  }
</style>