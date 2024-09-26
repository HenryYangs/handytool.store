<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import PlaygroundArea from '../../../../components/playground-area/index.svelte';
  import ValidateResult from '../../../../components/validator/result/index.svelte';
  import { CATEGORY } from '../../../../constant/tools';
  import { t } from 'svelte-i18n';

  $: value = '';
  $: validateResult = null;
  $: validateMsg = '';

  const onConfirm = () => {
    try {
      JSON.parse(value);
      validateResult = true;
      validateMsg = $t('validJsonTips');
    } catch {
      validateResult = false;
      validateMsg = $t('invalidJsonTips');
    }
  };

  const onClear = () => {
    value = '';
  }
</script>

<Layout>
  <ToolLayout
    id='json'
    category={CATEGORY.VALIDATOR}
  >
    <PlaygroundArea
      bind:value
      btnText={$t('Validate')}
      onConfirm={onConfirm}
      actionConfig={{ onClear }}
    />

    <!-- TODO support upload json file -->

    {#if validateResult !== null}
      <ValidateResult
        style='margin-top: 20px;'
        isCorrect={validateResult}
        message={validateMsg}
      />
    {/if}
  </ToolLayout>
</Layout>
