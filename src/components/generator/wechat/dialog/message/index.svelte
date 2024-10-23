<script>
  import Time from './components/time/index.svelte';
  import { EVENTS } from '../../../../../constant/events';
  import { useEventListener } from '../../../../../utils/hooks/useEventListener';
  import { OPERATION_TYPE } from '../../../../../constant/common/operation';

  const messageMap = {
    time: Time,
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

  const onDelete = (msg, index) => {
    const copy = [...msgList];
    
    copy.splice(index, 1);
    msgList = copy;
  };

  useEventListener(EVENTS.APP.WECHAT.DIALOG.UPDATE_MESSAGE, onUpdateMessage);
</script>

<div class='wechat-message-wrapper'>
  {#each msgList as msg, index}
    <svelte:component this={messageMap[msg.type]} {...msg} onDelete={() => onDelete(msg, index)} />
  {/each}
</div>

<style lang='scss' global>
  .wechat-message-wrapper {
    & > * {
      margin-top: 20px;
    }
  }
</style>