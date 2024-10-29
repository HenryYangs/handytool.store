<script>
  import Arrow from '../arrow/index.svelte';

  export let title = '';
  export let subTitle = '';
  export let isMe = false;
  export let mainBackgroundColor = '';
  export let subBackgroundColor = '';
  export let arrowColorIsMe = '';
  export let arrowColorOther = '';
  export let arrowSize = 15;
  export let arrowOffset = -10;
</script>

<div class='transaction-wrapper'>
  <div class='transaction-upper layout-start-center'
    style={`background-color: ${mainBackgroundColor}`}
  >
    <slot name='icon' />

    <div class='transaction-msg'>
      {#if title}
        {title}
      {:else if $$slots.title}
        <slot name='title' />
      {/if}
    </div>
  </div>

  <div class='transaction-lower layout-start-center'
    style={`background-color: ${subBackgroundColor}`}
  >
    <p class='transaction-lower-text'>{subTitle}</p>
  </div>

  <Arrow
    isMe={isMe}
    colorIsMe={arrowColorIsMe}
    colorOther={arrowColorOther}
    size={arrowSize}
    offset={arrowOffset}
  />
</div>

<style lang='scss' global>
  @import '../../../../../../../assets/style/mixin/ui.scss';
  @import '../../../../../../../assets/style/variables/app/wechat/index.scss';

  .transaction-wrapper {
    width: 220px;
    height: 88px;

    .transaction-upper {
      width: 100%;
      height: 64px;
      padding: 0 15px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    .transaction-lower {
      width: 100%;
      height: 24px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    .transaction-msg {
      flex: 1;
      margin-left: 10px;
      font-size: 15px;
      color: var(--white);

      @include text-overflow;
    }

    .transaction-lower-text {
      padding-left: 10px;
      font-size: 12px;
      color: #a5a5a5;
    }
  }
</style>
