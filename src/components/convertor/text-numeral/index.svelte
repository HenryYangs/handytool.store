<script>
  import Layout from '../../layout/index.svelte';
  import ToolLayout from '../../tool-layout/index.svelte';
  import PlaygroundTransfer from '../../playground-transfer/index.svelte';
  import { CATEGORY } from '../../../constant/tools';
  import { numeralToText, textToNumeral } from '../../../utils/convert';
  import { stringCaseTransform } from '../../../utils/string/transform';
  import { t } from 'svelte-i18n';

  export let id;
  export let numeral;
  export let numeralText;
  export let numberValidator;

  const numeralTextCamelCase = stringCaseTransform(numeralText);

  $: leftValue = '';
  $: rightValue = '';

  const onConvertLeft = () => {
    rightValue = textToNumeral(leftValue, { numeral });
  };
  const onConvertRight = () => {
    const _rightValue = rightValue.replaceAll(' ', '');

    if (!numberValidator(_rightValue)) {
      alert(`${numeralTextCamelCase} input is invalid`);
      return;
    }

    leftValue = numeralToText(rightValue, numeral);
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
    category={CATEGORY.CONVERTOR}
  >
    <PlaygroundTransfer
      bind:leftValue
      bind:rightValue
      leftConfig={{
        // btnText: `Convert Text to ${numeralTextCamelCase}`,
        btnText: $t('convertTextToNumber', { values: { target: $t(numeralTextCamelCase) } }),
        onConfirm: onConvertLeft,
        onClear: onClearLeft,
      }}
      rightConfig={{
        btnText: $t('convertNumberToText', { values: { target: $t(numeralTextCamelCase) } }),
        onConfirm: onConvertRight,
        onClear: onClearRight,
      }}
    >
      <svelte:fragment slot='left-header-extra'>
        <h6>{$t('Text')}</h6>
      </svelte:fragment>

      <svelte:fragment slot='right-header-extra'>
        <h6>{$t(numeralTextCamelCase)}</h6>
      </svelte:fragment>
    </PlaygroundTransfer>
  </ToolLayout>
</Layout>
