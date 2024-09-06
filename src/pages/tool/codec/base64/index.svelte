<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import PlaygroundTransfer from '../../../../components/playground-transfer/index.svelte';
  import { CODEC } from '../../../../constant/tools';
  import { stringCaseTransform } from '../../../../utils/string/transform';

  const id = 'base64';
  const tool = CODEC.find(item => item.id === id);

  $: leftValue = '';
  $: rightValue = '';

  const onConvertLeft = () => {
    rightValue = btoa(unescape(encodeURIComponent(leftValue)));
  };
  const onConvertRight = () => {
    leftValue = decodeURIComponent(escape(atob(rightValue)));;
  };

  const onClearLeft = () => {
    leftValue = '';
  };
  const onClearRight = () => {
    rightValue = '';
  };
</script>

<Layout>
  <ToolLayout
    id={id}
    title={tool.text}
    category={stringCaseTransform(tool.category)}
    toolsList={CODEC}
    description='Encode & Decode Text Between Text and Base64'
  >
    <PlaygroundTransfer
      bind:leftValue
      bind:rightValue
      leftConfig={{
        btnText: 'Encode &gt;',
        onConfirm: onConvertLeft,
        onClear: onClearLeft,
      }}
      rightConfig={{
        btnText: '&lt; Decode',
        onConfirm: onConvertRight,
        onClear: onClearRight,
      }}
    />
  </ToolLayout>
</Layout>
