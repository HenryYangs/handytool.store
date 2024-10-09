<script>
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

  $: if (showHashTag) {
    leftValue = leftValue.startsWith('#') ? leftValue : `#${leftValue}`;
  }
  
  $: if (!showHashTag) {
    leftValue = leftValue.replace('#', '');
  }

  $: if (addRGBPrefix) {
    rightValue = rightValue.startsWith('rgb') ? rightValue : `rgb(${rightValue})`;
  }

  $: if (!addRGBPrefix) {
    if (rightValue.startsWith('rgb')) {
      rightValue = rightValue.match(/^rgb\((.*)\)$/)[1];
    }
  }

  const onConvertLeft = () => {
    rightValue = colorHexToRgb(leftValue);
  };
  const onClearLeft = () => {
    leftValue = '';
  };
  const onConvertRight = () => {
    leftValue = colorRgbToHex(rightValue);
  };
  const onClearRight = () => {
    rightValue = '';
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
          <div class='form-check'>
            <input class='form-check-input' type='checkbox' bind:checked={showHashTag} id='showHashTag'>
            <label class='form-check-label' for='showHashTag'>
              {$t('Show Hash Tag')}
            </label>
          </div>

          <ColorRect color={`${showHashTag ? '' : '#'}${leftValue}`} />
        </div>
      </svelte:fragment>

      <svelte:fragment slot='right-header-extra'>
        <div class='slot-wrapper'>
          <div class='form-check'>
            <input class='form-check-input' type='checkbox' bind:checked={addRGBPrefix} id='addRGBPrefix'>
            <label class='form-check-label' for='addRGBPrefix'>
              {$t('Add RGB Prefix')}
            </label>
          </div>

          <ColorRect color={`${addRGBPrefix ? rightValue : `rgb(${rightValue})`}`} />
        </div>
      </svelte:fragment>
    </PlaygroundTransfer>
  </ToolLayout>
</Layout>

<style>
.slot-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 10px;
  }
}
</style>
