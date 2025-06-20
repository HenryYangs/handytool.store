<script>
  import { t } from 'svelte-i18n';
  import { stringCaseTransform } from '../../utils/string/transform';
  import { processToolUrl } from '../../utils/url';
  // import Star from '../star/index.svelte';

  export let tool;
  export let innerStyle = '';
  // export let onFavorite = () => {};

  // const onStarClick = (event) => {
  //   onFavorite();
  //   event.preventDefault();
  // }
</script>

<div class='tool-card-wrapper'>
  <a href={processToolUrl(tool)} style={innerStyle}>
    <div class='tool-card_inner'>
      <div class='tool-card_body'>
        <div class='tool-card_icon' style:background-color={tool.iconTheme}>
          <i
            class={`iconfont-tools icon-tools-${tool.icon}`}
            style:color={tool.color}
          ></i>
        </div>

        <div class='tool-card_main'>
          <div class='tool-card_title-wrapper'>
            <h6 class='tool-card_title'>{$t(tool.text)}</h6>

            <!-- <Star
              id={tool.id}
              isStar={tool.favorite}
              size={14}
              onClick={onStarClick}
            /> -->
          </div>

          <p class='tool-card_category' style:color={tool.color}>
            {$t(stringCaseTransform(tool.category))}
          </p>
        </div>
      </div>
    </div>
  </a>
</div>

<style global lang='scss'>
  .tool-card-wrapper {
    flex: 0 0 25%;
    max-width: 25%;
    padding: 10px;

    .tool-card_inner {
      padding: 16px;
      border-radius: 12px;
      background-color: var(--white);
      color: var(--theme-secondary-dark-color);
    }

    .tool-card_body {
      display: flex;
      justify-content: start;
      align-items: start;
    }

    .tool-card_icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 8px;
      margin-right: 8px;
    }

    .tool-card_icon i {
      font-size: 25px;
    }

    .tool-card_main {
      width: calc(100% - 48px);
    }

    .tool-card_title-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .tool-card_title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--title-color);
      font-weight: 700;
    }

    .tool-card_category {
      margin: 10px 0 0;
      font-size: 14px;
    }
  }
</style>
