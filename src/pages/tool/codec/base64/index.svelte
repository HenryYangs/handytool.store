<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import PlaygroundTransfer from '../../../../components/playground-transfer/index.svelte';
  import { CODEC, TOOL_CODEC_ID } from '../../../../constant/tools';

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
    id={TOOL_CODEC_ID.BASE64}
    toolsList={CODEC}
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
