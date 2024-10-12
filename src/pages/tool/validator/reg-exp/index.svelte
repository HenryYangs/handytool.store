<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import ExecuteBtn from '../../../../components/execute-btn/index.svelte';
  import Result from '../../../../components/validator/result/index.svelte';
  import { CATEGORY } from '../../../../constant/tools';
  import { t } from 'svelte-i18n';

  $: regExp = '';
  $: flags = '';
  $: targetStr = '';
  $: isValid = null;

  const onConfirm = () => {
    if (!regExp || !targetStr) {
      alert($t('regExpErrorTips'));
      return;
    }

    try {
      isValid = Boolean(targetStr.match(new RegExp( regExp, flags )));
    } catch( error ) {
      alert(error);
    }
  };

  const onInput = () => {
    isValid = null;
  };
</script>

<Layout>
  <ToolLayout
    id='reg-exp'
    category={CATEGORY.VALIDATOR}
  >
    <div class='tool-panel'>
      <div class='reg-exp_header'>
        <div class='reg-exp_header__main'>
          <h6 class='reg-exp_area__title'>{$t('RegularExpression')}</h6>

          <div class='reg-exp_input__wrapper input-group-sm'>
            /
            <input
              type='text'
              class='form-control reg-exp_input'
              bind:value={regExp}
              on:input={onInput}
            >
            /
          </div>
        </div>

        <div class='reg-exp_flags'>
          <h6 class='reg-exp_area__title'>{$t('Flags')}</h6>

          <div class='reg-exp_input__wrapper input-group-sm'>
            <input
              type='text'
              class='form-control'
              placeholder='ig'
              bind:value={flags}
              on:input={onInput}
            >
          </div>
        </div>
      </div>

      <div class='reg-exp_body'>
        <h6 class='reg-exp_area__title'>{$t('TestLabel')}</h6>

        <div class='input-group'>
          <input
            class='form-control'
            bind:value={targetStr}
            on:input={onInput}
          />
        </div>
      </div>

      <ExecuteBtn text={$t('Validate')} onConfirm={onConfirm} />

      {#if isValid !== null}
        <Result isCorrect={isValid} style='margin-top: 20px;' />
      {/if}
    </div>
  </ToolLayout>
</Layout>

<style global lang='scss'>
.reg-exp_header {
  display: flex;
}

.reg-exp_body {
  margin: 20px 0;
}

.reg-exp_area__title {
  margin-bottom: 10px;
}

.reg-exp_header__main {
  flex: 1;
}

.reg-exp_flags {
  width: 200px;
  margin-left: 20px;
}

.reg-exp_input__wrapper {
  display: flex;
  align-items: center;
}

.reg-exp_input {
  margin: 0 10px;
}
</style>
