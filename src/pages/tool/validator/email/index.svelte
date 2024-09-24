<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import PlaygroundArea from '../../../../components/playground-area/index.svelte';
  import ValidateResult from '../../../../components/validator/result/index.svelte';
  import { CATEGORY } from '../../../../constant/tools';

  const regExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  $: value = '';
  $: validateResult = null;
  $: validateMsg = '';

  const onConfirm = () => {
    const valArr = value.split('\n').filter(_ => _);
    const errorArr = [];

    valArr.forEach(email => {
      if (!regExp.test(email)) {
        errorArr.push(email);
      }
    });
    
    if (errorArr.length) {
      validateResult = false;
      validateMsg = `${errorArr.join(';')} ${errorArr.length > 1 ? 'are' : 'is'} not valid`;
    } else {
      validateResult = true;
      validateMsg = '';
    }
  };

  const onClear = () => {
    value = '';
  }
</script>

<Layout>
  <ToolLayout
    id='email'
    category={CATEGORY.VALIDATOR}
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
