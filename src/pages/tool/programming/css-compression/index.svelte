<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import PlaygroundArea from '../../../../components/playground-area/index.svelte';
  import { PROGRAMMING, TOOL_PROGRAMMING_ID } from '../../../../constant/tools';
  import vkBeautify from 'vkbeautify';

  $: input = '';
  $: output = '';

  const onConfirm = () => {
    try {
      output = vkBeautify.cssmin(input);
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
    id={TOOL_PROGRAMMING_ID.CSS_COMPRESSION}
    toolsList={PROGRAMMING}
  >
    <PlaygroundArea
      bind:value={input}
      btnText='Compress'
      onConfirm={onConfirm}
      actionConfig={{ onClear }}
    />

    <PlaygroundArea
      noConfirmBtn
      bind:value={output}
      actionConfig={{
        noClear: true
      }}
    />
  </ToolLayout>
</Layout>
