<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import PlaygroundArea from '../../../../components/playground-area/index.svelte';
  import { PROGRAMMING } from '../../../../constant/tools';
  import { stringCaseTransform } from '../../../../utils/string/transform';
  import vkBeautify from 'vkbeautify';

  const id = 'css-format';
  const tool = PROGRAMMING.find(item => item.id === id);

  $: input = '';
  $: output = '';

  const onConfirm = () => {
    try {
      output = vkBeautify.css(input);
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
    id={id}
    title={tool.text}
    category={stringCaseTransform(tool.category)}
    toolsList={PROGRAMMING}
    description=''
  >
    <PlaygroundArea
      bind:value={input}
      btnText='Format'
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
