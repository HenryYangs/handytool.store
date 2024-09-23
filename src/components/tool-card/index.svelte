<script>
  import { stringCaseTransform } from '../../utils/string/transform';
  import { processToolUrl } from '../../utils/url';
  import Star from '../star/index.svelte';

  export let tool;
  export let innerStyle = '';
  export let onFavorite = () => {};

  const onStarClick = (event) => {
    onFavorite();
    event.preventDefault();
  }
</script>

<div class={'tool-item'}>
  <a href={processToolUrl(tool)} style={innerStyle}>
    <div class='tool-item_inner'>
      <div class='tool-item_body'>
        <div class='tool-item_icon' style:background-color={tool.iconTheme}>
          <i
            class={`iconfont-tools icon-tools-${tool.icon}`}
            style:color={tool.color}
          ></i>
        </div>

        <div class='tool-item_main'>
          <div class='tool-item_title-wrapper'>
            <h6 class='tool-item_title'>{tool.text}</h6>

            <Star
              id={tool.id}
              isStar={tool.favorite}
              size={14}
              onClick={onStarClick}
            />
          </div>

          <p class='tool-item_category' style:color={tool.color}>{stringCaseTransform(tool.category)}</p>
        </div>
      </div>
    </div>
  </a>
</div>

<style>
.tool-item {
  flex: 0 0 25%;
  max-width: 25%;
  padding: 10px;
}

.tool-item_inner {
  padding: 16px;
  border-radius: 12px;
  background-color: var(--white);
  color: var(--theme-secondary-dark-color);
}

.tool-item_body {
  display: flex;
  justify-content: start;
  align-items: start;
}

.tool-item_icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  margin-right: 8px;
}

.tool-item_icon i {
  font-size: 25px;
}

.tool-item_main {
  width: calc(100% - 48px);
}

.tool-item_title-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tool-item_title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--title-color);
  font-weight: 700;
}

.tool-item_category {
  margin: 10px 0 0;
  font-size: 14px;
}
</style>
