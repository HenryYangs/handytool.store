<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import PlaygroundTransfer from '../../../../components/playground-transfer/index.svelte';
  import NumeralSelect from '../../../../components/convertor/numeral-select/index.svelte';
  import { CONVERTOR, TOOL_CONVERTOR_ID } from '../../../../constant/tools';
  import { NUMERAL_SYSTEM } from '../../../../constant/numeral';
  import { onMount } from 'svelte';
  import { validateNumeralText } from '../../../../utils/validate';

  $: leftNumeral = NUMERAL_SYSTEM[0].value;
  $: rightNumeral = NUMERAL_SYSTEM[0].value;
  $: leftNumeralCustom = NUMERAL_SYSTEM[NUMERAL_SYSTEM.length - 1].value + 1;
  $: rightNumeralCustom = NUMERAL_SYSTEM[NUMERAL_SYSTEM.length - 1].value + 1;
  $: leftValue = '';
  $: rightValue = '';

  const getRealNumeral = () => {
    return {
      realLeftNumeral: leftNumeral === -1 ? leftNumeralCustom : leftNumeral,
      realRightNumeral: rightNumeral === -1 ? rightNumeralCustom : rightNumeral,
    };
  }

  const onConvertLeft = (val) => {
    const { realLeftNumeral, realRightNumeral } = getRealNumeral();

    rightValue = Number(parseInt(val, realLeftNumeral)).toString(realRightNumeral);
  }
  const onConvertRight = (val) => {
    const { realLeftNumeral, realRightNumeral } = getRealNumeral();

    leftValue = Number(parseInt(val, realRightNumeral)).toString(realLeftNumeral);
  }
  const onClearLeft = () => {
    leftValue = '';
  }
  const onClearRight = () => {
    rightValue = '';
  }
  const isNumeralInList = (numeral) => NUMERAL_SYSTEM.find(item => item.value === numeral);

  onMount(() => {
    if (location.search) {
      const matched = location.search.match(/^\?(.*)/);

      if (!matched) return;

      const search = matched[1].split('&').reduce((prev, cur) => {
        const [key, value] = cur.split('=');

        return {
          ...prev,
          [key]: value
        }
      }, {
        from: '',
        to: '',
        before: '',
      });

      const fromNumeral = Number(search.from);
      const toNumeral = Number(search.to);
      const beforeText = search.before;

      if (fromNumeral) {
        if (isNumeralInList(fromNumeral)) {
          leftNumeral = fromNumeral;
        } else {
          leftNumeral = -1;
          leftNumeralCustom = fromNumeral;
        }
      }

      if (beforeText) {
        leftValue = beforeText;
      }

      if (toNumeral) {
        if (isNumeralInList(toNumeral)) {
          rightNumeral = toNumeral;
        } else {
          rightNumeral = -1;
          rightNumeralCustom = toNumeral;
        }
      }

      if (fromNumeral && beforeText) {
        if (!validateNumeralText(leftValue, getRealNumeral().realLeftNumeral)) {
          return;
        }
      }

      if  (leftValue) {
        onConvertLeft(leftValue);
      }
    }
  });
</script>

<Layout>
  <ToolLayout
    id={TOOL_CONVERTOR_ID.NUMERAL_SYSTEM}
    toolsList={CONVERTOR}
  >
    <PlaygroundTransfer
      bind:leftValue
      bind:rightValue
      leftConfig={{
        btnText: 'Convert &gt;',
        onConfirm: onConvertLeft,
        onClear: onClearLeft,
      }}
      rightConfig={{
        btnText: '&lt; Convert',
        onConfirm: onConvertRight,
        onClear: onClearRight,
      }}
    >
      <svelte:fragment slot='left-header-extra'>
        <NumeralSelect bind:numeral={leftNumeral} bind:numeralCustom={leftNumeralCustom} />
      </svelte:fragment>

      <svelte:fragment slot='right-header-extra'>
        <NumeralSelect bind:numeral={rightNumeral} bind:numeralCustom={rightNumeralCustom} />
      </svelte:fragment>
    </PlaygroundTransfer>
  </ToolLayout>
</Layout>
