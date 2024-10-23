<script>
  import BeIcon from '@brewer/beerui/be-icon';
  import { useEventListener } from '../../../../utils/hooks/useEventListener';
  import { EVENTS } from '../../../../constant/events';
  import { DEFAULT_VALUE } from '../../../../constant/common/number';
  import { CHAT_TYPE_MAP, DEFAULT_CHAT_TITLE, GROUP_CHAT_MIN_MEMBER_COUNT } from '../../../../constant/phone';
  import { t } from 'svelte-i18n';

  $: isGroupChat = false;
  $: unreadCount = String(DEFAULT_VALUE);
  $: title = $t(DEFAULT_CHAT_TITLE);
  $: memberCount = String(GROUP_CHAT_MIN_MEMBER_COUNT);
  $: realTitle = title;

  const handleChatTitleChange = (value) => {
    title = value;
    realTitle = `${value}${isGroupChat ? `(${memberCount})` : ''}`;
  };

  const handleMemberCountChange = (value) => {
    memberCount = value;

    if (isGroupChat) {
      realTitle = `${title}(${value})`;
    }
  };

  const handleChatTypeChange = (value) => {
    isGroupChat = value === CHAT_TYPE_MAP.Group;

    if (isGroupChat) {
      realTitle = `${title}(${memberCount})`;
    }
  };

  const handleUnreadCountChange = (value) => {
    unreadCount = value;
  }

  useEventListener(EVENTS.APP.WECHAT.DIALOG.CHAT_TITLE_CHANGE, handleChatTitleChange);
  useEventListener(EVENTS.APP.WECHAT.DIALOG.MEMBER_COUNT_CHANGE, handleMemberCountChange);
  useEventListener(EVENTS.APP.WECHAT.DIALOG.CHAT_TYPE_CHANGE, handleChatTypeChange);
  useEventListener(EVENTS.APP.WECHAT.DIALOG.UNREAD_COUNT, handleUnreadCountChange);
</script>

<div class='wechat-header-wrapper layout-center'>
  <div class='wechat-header-left layout-start-center'>
    <BeIcon name='chevron-left' />

    {#if Number(unreadCount) > 0}
      <div class='wechat-unread-count'>{unreadCount}</div>
    {/if}
  </div>

  <div class='wechat-header-center'>
    {realTitle}
  </div>

  <div class='wechat-header-right'>
    <BeIcon name='ellipsis' />
  </div>
</div>

<style lang='scss' global>
  .wechat-header-wrapper {
    height: 80px;
    padding: 0 20px;
    background-color: var(--simulator-ios-background-color);
    font-size: 40px;
    border-bottom: 1px solid #D0D0D0;

    & > * {
      flex: 1;
    }

    .wechat-unread-count {
      background-color: #cdcdcd;
      border-radius: 50%;
      padding: 10px;
      font-size: 22px;
      text-align: center;
      min-width: 40px;
      min-height: 40px;
    }

    .wechat-header-center {
      flex: 4;
      text-align: center;
      font-size: 34px;
    }

    .wechat-header-right {
      text-align: right;
    }
  }
</style>
