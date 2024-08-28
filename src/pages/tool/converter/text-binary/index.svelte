<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import PlaygroundTransfer from '../../../../components/playground-transfer/index.svelte';
  import { CONVERTER } from '../../../../constant/tools';
  import { stringCaseTransform } from '../../../../utils/string';
  import { binaryToText, textToBinary } from '../../../../utils/convert';
  import { isBinary } from '../../../../utils/validate';

  const id = 'text-binary';
  const tool = CONVERTER.find(item => item.id === id);

  $: leftValue = '';
  $: rightValue = '';

  const onConvertLeft = () => {
    rightValue = textToBinary(leftValue);
  };
  const onConvertRight = () => {
    const binary = rightValue.replaceAll(' ', '');

    if (!isBinary(binary)) {
      alert('Binary input is invalid');
      return;
    }

    leftValue = binaryToText(rightValue);
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
    toolsList={CONVERTER}
    description='Convert Text into Binary'
  >
    <PlaygroundTransfer
      bind:leftValue
      bind:rightValue
      leftConfig={{
        btnText: 'Convert Text to Binary',
        onConfirm: onConvertLeft,
        onClear: onClearLeft,
      }}
      rightConfig={{
        btnText: 'Convert Binary to Text',
        onConfirm: onConvertRight,
        onClear: onClearRight,
      }}
    >
      <svelte:fragment slot='left-header-extra'>
        <h6>Text</h6>
      </svelte:fragment>

      <svelte:fragment slot='right-header-extra'>
        <h6>Binary</h6>
      </svelte:fragment>
    </PlaygroundTransfer>
  </ToolLayout>
</Layout>
