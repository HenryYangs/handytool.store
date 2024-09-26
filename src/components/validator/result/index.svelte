<script>
  import { t } from 'svelte-i18n';
  import './assets/iconfont.css';

  export let isCorrect;
  export let style = '';
  export let message = '';

  $: result = isCorrect ? 'correct' : 'wrong';
  $: resultMsg = message || (isCorrect ? $t('validateSuccessTips') : $t('validateErrorTips'));
</script>

<div class={`tool-panel wrapper validate-${result}`} style={style}>
  <i class={
    `
      iconfont-status
      icon-status-${result}
      validate-icon
    `
  }></i>

  <span>{resultMsg}</span>
</div>

<style>
.wrapper {
  display: flex;
  justify-content: start;
  align-items: center;
}

.validate-icon {
  margin-right: 10px;
  font-size: 30px;
}

.validate-correct {
  color: green;
}

.validate-wrong {
  color: red;
}
</style>
