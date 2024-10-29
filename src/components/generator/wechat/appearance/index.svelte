<script>
  import { BeForm, BeFormItem } from '@brewer/beerui/be-form';
  import { BeOption, BeSelect } from '@brewer/beerui/be-select';
  import BeUpload from '@brewer/beerui/be-upload';
  import BeIcon from '@brewer/beerui/be-icon';
  import { t } from 'svelte-i18n';
  import { CHAT_TYPE_LIST, CHAT_TYPE_MAP, DEFAULT_CHAT_TITLE, GROUP_CHAT_MIN_MEMBER_COUNT } from '../../../../constant/app/wechat/dialog';
  import BeInput from '@brewer/beerui/be-input';
  import BeButton from '@brewer/beerui/be-button';
  import event from '../../../../utils/event';
  import { EVENTS } from '../../../../constant/events';
  import { DEFAULT_VALUE } from '../../../../constant/common/number';

  $: chatType = CHAT_TYPE_MAP.Single;
  $: chatTitle = $t(DEFAULT_CHAT_TITLE);
  $: memberCount = String(GROUP_CHAT_MIN_MEMBER_COUNT);
  $: unreadMsgCount = String(DEFAULT_VALUE);

  const handleChatTitleChange = (e) => {
    event.emit(EVENTS.APP.WECHAT.DIALOG.CHAT_TITLE_CHANGE, e.target.value);
  };

  const handleChatTypeChange = (e) => {
    event.emit(EVENTS.APP.WECHAT.DIALOG.CHAT_TYPE_CHANGE, e.detail);
  };

  const handleMemberCountChange = (e) => {
    event.emit(EVENTS.APP.WECHAT.DIALOG.MEMBER_COUNT_CHANGE, e.target.value);
  };

  const handleUnreadMsgCountChange = (e) => {
    event.emit(EVENTS.APP.WECHAT.DIALOG.UNREAD_COUNT, e.target.value);
  };
</script>

<BeForm labelWidth='100px'>
  <BeFormItem label={$t('Chat Type')}>
    <BeSelect bind:value={chatType} size='mini' on:change={handleChatTypeChange}>
      {#each CHAT_TYPE_LIST as type}
        <BeOption value={type.value} label={$t(type.label)} />
      {/each}
    </BeSelect>
  </BeFormItem>

  <BeFormItem label={$t('Chat Title')}>
    <BeInput bind:value={chatTitle} size='mini' on:change={handleChatTitleChange} />
  </BeFormItem>

  {#if chatType === CHAT_TYPE_MAP.Group}
    <BeFormItem label={$t('Member Count')}>
      <BeInput bind:value={memberCount} type='number' min='3' size='mini' on:change={handleMemberCountChange} />
    </BeFormItem>
  {/if}

  <BeFormItem label={$t('Unread Msg Count')}>
    <BeInput bind:value={unreadMsgCount} type='number' min='0' size='mini' on:change={handleUnreadMsgCountChange} />
  </BeFormItem>

  <BeFormItem label={$t('Chat Background')}>
    <BeUpload
      action=''
      drag
      multiple
      limit={3}
      accept='.pdf,.doc,.docx'
      fileList={[]}
      beforeUpload={() => {}}
    >
      <div class='upload-card__drag'>
        <div class='upload-card__icon'>
          <BeIcon name='upload' width='40' height='40' />
        </div>
        <div class='be-upload__text'>{@html $t('Drag to upload')}</div>
      </div>
    </BeUpload>
  </BeFormItem>

  <BeFormItem label=' '>
    <BeButton type='danger'>{$t('Remove Background')}</BeButton>
  </BeFormItem>
</BeForm>

<style lang='scss' global>

</style>
