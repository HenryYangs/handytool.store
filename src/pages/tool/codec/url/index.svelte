<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import PlaygroundTransfer from '../../../../components/playground-transfer/index.svelte';
  import { CATEGORY } from '../../../../constant/tools';

  $: leftValue = '';
  $: rightValue = '';

  const onConvertLeft = () => {
    rightValue = encodeURIComponent(leftValue);
  };
  const onConvertRight = () => {
    leftValue = decodeURIComponent(rightValue);
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
    id='URL'
    category={CATEGORY.CODEC}
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
    >

    </PlaygroundTransfer>
  </ToolLayout>
</Layout>
