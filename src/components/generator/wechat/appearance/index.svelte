<script>
  import { BeForm, BeFormItem } from '@brewer/beerui/be-form';
  import { BeOption, BeSelect } from '@brewer/beerui/be-select';
  import BeUpload from '@brewer/beerui/be-upload';
  import BeIcon from '@brewer/beerui/be-icon';
  import { t } from 'svelte-i18n';
  import { CHAT_TYPE_LIST, CHAT_TYPE_MAP } from './config';
  import BeInput from '@brewer/beerui/be-input';
  import BeSwitch from '@brewer/beerui/be-switch';
  import BeButton from '@brewer/beerui/be-button';

  $: chatType = CHAT_TYPE_LIST[0];
  $: chatTitle = '';
  $: memberCount = '0';
  $: unreadMsgCount = '0';
  $: showMemberName = false;
</script>

<BeForm labelWidth='100px'>
  <BeFormItem label={$t('Chat Type')}>
    <BeSelect bind:value={chatType} size='mini'>
      {#each CHAT_TYPE_LIST as type}
        <BeOption value={type} label={$t(type)} />
      {/each}
    </BeSelect>
  </BeFormItem>

  <BeFormItem label={$t('Chat Title')}>
    <BeInput bind:value={chatTitle} size='mini' />
  </BeFormItem>

  {#if chatType === CHAT_TYPE_MAP.GROUP}
    <BeFormItem label={$t('Member Count')}>
      <BeInput bind:value={memberCount} type='number' min='0' size='mini' />
    </BeFormItem>
  {/if}

  <BeFormItem label={$t('Unread Msg Count')}>
    <BeInput bind:value={unreadMsgCount} type='number' min='0' size='mini' />
  </BeFormItem>

  <BeFormItem label={$t('Show Member Name')}>
    <BeSwitch bind:checked={showMemberName} />
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
