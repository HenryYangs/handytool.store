<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import PlaygroundArea from '../../../../components/playground-area/index.svelte';
  import { CATEGORY } from '../../../../constant/tools';
  import vkBeautify from 'vkbeautify';
  import { t } from 'svelte-i18n';

  $: input = '';
  $: output = '';

  const onConfirm = () => {
    try {
      output = vkBeautify.sql(input);
    } catch {
      alert('Your code is invalid');
    }
  };

  const onClear = () => {
    input = '';
  };
</script>

<Layout>
  <ToolLayout
    id='sql-format'
    category={CATEGORY.PROGRAMMING}
  >
    <PlaygroundArea
      bind:value={input}
      btnText={$t('Compress')}
      onConfirm={onConfirm}
      actionConfig={{ onClear }}
    />

    <PlaygroundArea
      noConfirmBtn
      bind:value={output}
      actionConfig={{
        noClear: true
      }}
      style='margin-top: 30px'
    />
  </ToolLayout>
</Layout>
