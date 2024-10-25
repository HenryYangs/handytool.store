<script>
  import Arrow from '../arrow/index.svelte';

  export let title = '';
  export let subTitle = '';
  export let isMe = false;
  export let mainBackgroundColor = '';
  export let subBackgroundColor = '';
  export let arrowColorIsMe = '';
  export let arrowColorOther = '';
  export let arrowSize = 30;
  export let arrowOffset = -21;
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
    width: 440px;
    height: 176px;

    .transaction-upper {
      width: 100%;
      height: 128px;
      padding: 0 30px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    .transaction-lower {
      width: 100%;
      height: 48px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }

    .transaction-msg {
      flex: 1;
      margin-left: 20px;
      font-size: 30px;
      color: var(--white);
      line-height: 1.2;

      @include text-overflow;
    }

    .transaction-lower-text {
      padding-left: 20px;
      font-size: 24px;
      color: #a5a5a5;
    }
  }
</style>
