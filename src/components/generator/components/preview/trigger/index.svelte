<script>
  import { t } from 'svelte-i18n';
  import ExecuteBtn from '../../../../execute-btn/index.svelte';
  import event from '../../../../../utils/event';
  import { EVENTS } from '../../../../../constant/events';

  const generateImage = () => {
    event.emit(EVENTS.APP.WECHAT.DIALOG.PREVIEW);
  };
</script>

<ExecuteBtn text={$t('Generate Image')} buttonProps={{ size: 'mini', type: 'success' }} onConfirm={generateImage} />
