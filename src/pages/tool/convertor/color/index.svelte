<script>
  import { BeCheckbox } from '@brewer/beerui/be-checkbox';
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import PlaygroundTransfer from '../../../../components/playground-transfer/index.svelte';
  import ColorRect from '../../../../components/color-rect/index.svelte';
  import { CATEGORY } from '../../../../constant/tools';
  import { t } from 'svelte-i18n';
  import { colorHexToRgb, colorRgbToHex } from '../../../../utils/color';

  $: leftValue = '';
  $: rightValue = '';
  $: showHashTag = false;
  $: addRGBPrefix = false;

  const onShowHashTagChange = ({ detail: { checked } }) => {
    if (checked) {
      leftValue = leftValue.startsWith('#') ? leftValue : `#${leftValue}`;
    } else {
      leftValue = leftValue.replace('#', '');
    }
  };

  const onRGBPrefixChange = ({ detail: { checked } }) => {
    if (checked) {
      rightValue = rightValue.startsWith('rgb') ? rightValue : `rgb(${rightValue})`;
    } else {
      if (rightValue.startsWith('rgb')) {
        rightValue = rightValue.match(/^rgb\((.*)\)$/)[1];
      }
    }
  }

  const onConvertLeft = () => {
    rightValue = colorHexToRgb(leftValue);
  };
  const onClearLeft = () => {
    if (showHashTag) {
      leftValue = '#';
    } else {
      leftValue = '';
    }
  };
  const onConvertRight = () => {
    leftValue = colorRgbToHex(rightValue);
  };
  const onClearRight = () => {
    if (addRGBPrefix) {
      rightValue = 'rgb()';
    } else {
      rightValue = '';
    }
  };
</script>

<Layout>
  <ToolLayout
    id='color'
    category={CATEGORY.CONVERTOR}
  >
    <PlaygroundTransfer
      bind:leftValue
      bind:rightValue
      leftConfig={{
        btnText: `${$t('colorHexToRgb')} &gt;`,
        onConfirm: onConvertLeft,
        onClear: onClearLeft,
        useInput: true,
      }}
      rightConfig={{
        btnText: `&lt; ${$t('colorRgbToHex')}`,
        onConfirm: onConvertRight,
        onClear: onClearRight,
        useInput: true,
      }}
    >
      <svelte:fragment slot='left-header-extra'>
        <div class='slot-wrapper'>
          <BeCheckbox bind:checked={showHashTag} id='showHashTag' on:change={onShowHashTagChange}>{$t('Show Hash Tag')}</BeCheckbox>

          <ColorRect color={`${showHashTag ? '' : '#'}${leftValue}`} />
        </div>
      </svelte:fragment>

      <svelte:fragment slot='right-header-extra'>
        <div class='slot-wrapper'>
          <BeCheckbox bind:checked={addRGBPrefix} id='addRGBPrefix' on:change={onRGBPrefixChange}>{$t('Add RGB Prefix')}</BeCheckbox>

          <ColorRect color={`${addRGBPrefix ? rightValue : `rgb(${rightValue})`}`} />
        </div>
      </svelte:fragment>
    </PlaygroundTransfer>
  </ToolLayout>
</Layout>

<style global lang='scss'>
.slot-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 10px;
  }
}
</style>
