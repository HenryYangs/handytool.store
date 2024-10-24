<script>
  import Time from './components/time/index.svelte';
  import Text from './components/text/index.svelte';
  import Image from './components/image/index.svelte';
  import { EVENTS } from '../../../../../constant/events';
  import { useEventListener } from '../../../../../utils/hooks/useEventListener';
  import { OPERATION_TYPE } from '../../../../../constant/common/operation';
  import { WECHAT_DIALOG_MESSAGE_TYPE } from '../../../../../constant/app/wechat/dialog';

  const messageMap = {
    [WECHAT_DIALOG_MESSAGE_TYPE.TIME]: Time,
    [WECHAT_DIALOG_MESSAGE_TYPE.TEXT]: Text,
    [WECHAT_DIALOG_MESSAGE_TYPE.IMAGE]: Image,
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
    padding: 0 40px;

    & > * {
      margin-top: 30px;
    }
  }
</style>