<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import PlaygroundTransfer from '../../../../components/playground-transfer/index.svelte';
  import { CATEGORY } from '../../../../constant/tools';
  import { t } from 'svelte-i18n';

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
    id='base64'
    category={CATEGORY.CODEC}
  >
    <PlaygroundTransfer
      bind:leftValue
      bind:rightValue
      leftConfig={{
        btnText: `${$t('Encode')} &gt;`,
        onConfirm: onConvertLeft,
        onClear: onClearLeft,
      }}
      rightConfig={{
        btnText: `&lt; ${$t('Decode')}`,
        onConfirm: onConvertRight,
        onClear: onClearRight,
      }}
    />
  </ToolLayout>
</Layout>
