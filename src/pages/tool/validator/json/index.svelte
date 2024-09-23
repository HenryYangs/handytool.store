<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import PlaygroundArea from '../../../../components/playground-area/index.svelte';
  import ValidateResult from '../../../../components/validator/result/index.svelte';
  import { CATEGORY, TOOL_VALIDATOR_ID } from '../../../../constant/tools';

  $: value = '';
  $: validateResult = null;
  $: validateMsg = '';

  const onConfirm = () => {
    try {
      JSON.parse(value);
      validateResult = true;
      validateMsg = 'Valid JSON';
    } catch {
      validateResult = false;
      validateMsg = 'Invalid JSON';
    }
  };

  const onClear = () => {
    value = '';
  }
</script>

<Layout>
  <ToolLayout
    id={TOOL_VALIDATOR_ID.JSON}
    category={CATEGORY.VALIDATOR}
  >
    <PlaygroundArea
      bind:value
      btnText='Validate'
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
