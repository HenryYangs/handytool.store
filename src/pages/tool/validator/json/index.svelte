<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import PlaygroundArea from '../../../../components/playground-area/index.svelte';
  import ValidateResult from '../../../../components/validator/result/index.svelte';
  import { VALIDATOR } from '../../../../constant/tools';
  import { stringCaseTransform } from '../../../../utils/string/transform';

  const id = 'json';
  const tool = VALIDATOR.find(item => item.id === id);

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
    id={id}
    title={tool.text}
    category={stringCaseTransform(tool.category)}
    toolsList={VALIDATOR}
    description=''
  >
    <PlaygroundArea
      bind:value
      btnText='Validate'
      onConfirm={onConfirm}
      actionConfig={{ onClear }}
    />

    {#if validateResult !== null}
      <ValidateResult
        style='margin-top: 20px;'
        isCorrect={validateResult}
        message={validateMsg}
      />
    {/if}
  </ToolLayout>
</Layout>
