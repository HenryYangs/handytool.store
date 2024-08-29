<script>
  import { ROUTER } from '../../constant/router';
  import { stringCaseTransform } from '../../utils/string/transform';

  export let tool;
  export let innerStyle = '';
</script>

<div class={'tool-item'}>
  <a href={tool.isWIP ? ROUTER.WIP : `/tool/${tool.category}/${tool.id}`} style={innerStyle}>
    <div class='tool-item_inner'>
      <div class='tool-item_body'>
        <div class='tool-item_icon' style:background-color={tool.iconTheme}>
          <i
            class={`iconfont-tools icon-tools-${tool.category}${tool.icon ? `-${tool.icon}` : ''}`}
            style:color={tool.color}
          ></i>
        </div>

        <div class='tool-item_main'>
          <h6 class='tool-item_title'>{tool.text}</h6>

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
  padding: 16px 44px 16px 16px;
  border-radius: 12px;
  background-color: #FFF;
  color: #ADBBDA;
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

.tool-item_title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #333;
  font-weight: 700;
}

.tool-item_category {
  margin: 10px 0 0;
  font-size: 14px;
}
</style>
