<script>
  import { BeForm, BeFormItem } from '@brewer/beerui/be-form';
  import { BeOption, BeSelect } from '@brewer/beerui/be-select';
  import BeUpload from '@brewer/beerui/be-upload';
  import BeIcon from '@brewer/beerui/be-icon';
  import { t } from 'svelte-i18n';
  import { CHAT_TYPE_LIST, CHAT_TYPE_MAP, DEFAULT_CHAT_TITLE, GROUP_CHAT_MIN_MEMBER_COUNT } from '../../../../../constant/app/wechat/dialog';
  import BeInput from '@brewer/beerui/be-input';
  import event from '../../../../../utils/event';
  import { EVENTS } from '../../../../../constant/events';
  import { DEFAULT_VALUE } from '../../../../../constant/common/number';
  import { fileToBase64 } from '../../../../../utils/base64';
  import { onMount } from 'svelte';

  $: chatType = CHAT_TYPE_MAP.Single;
  $: chatTitle = '';
  $: memberCount = String(GROUP_CHAT_MIN_MEMBER_COUNT);
  $: unreadMsgCount = String(DEFAULT_VALUE);
  $: bgImage = '';

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

  const handleBgImageChange = async (e) => {
    const result = await fileToBase64(e.raw);

    event.emit(EVENTS.APP.WECHAT.DIALOG.BG_IMAGE, `url(${result})`);
  };

  const handleBgImageRemove = () => {
    event.emit(EVENTS.APP.WECHAT.DIALOG.BG_IMAGE, '');
  };

  onMount(() => {
    chatTitle = $t(DEFAULT_CHAT_TITLE);
    event.emit(EVENTS.APP.WECHAT.DIALOG.CHAT_TITLE_CHANGE, { target: { value: $t(DEFAULT_CHAT_TITLE) } });
  });
</script>

<BeForm labelWidth='100px' class='wechat-appearance-wrapper'>
  <BeFormItem label={$t('Chat Type')}>
    <BeSelect bind:value={chatType} size='mini' on:change={handleChatTypeChange}>
      {#each CHAT_TYPE_LIST as type}
        <BeOption value={type.value} label={$t(type.label)} />
      {/each}
    </BeSelect>
  </BeFormItem>

  <BeFormItem label={$t('Chat Title')}>
    <BeInput bind:value={chatTitle} size='mini' on:input={handleChatTitleChange} />
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
      bind:value={bgImage}
      autoUpload={false}
      limit={1}
      accept='image/*'
      listType='picture-card'
      onChange={handleBgImageChange}
      onRemove={handleBgImageRemove}
    >
      <div class='upload-card'>
        <BeIcon name='add' width='40' height='40' />
      </div>
    </BeUpload>
  </BeFormItem>
</BeForm>

<style lang='scss' global>
  .wechat-appearance-wrapper {
    .be-upload-list {
      position: absolute;
    }
  }
</style>
