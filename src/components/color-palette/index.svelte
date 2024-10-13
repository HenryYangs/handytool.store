<script>
  import { BeFormItem } from '@brewer/beerui/be-form';
  import BeInput from '@brewer/beerui/be-input';
  import { getOppositeColor } from '../../utils/color';

  export let id = '';
  export let label = '';
  export let bgColor = '';
  export let onChange = () => {};

  const onColorPaletteFocus = () => {
    document.getElementById(id).click();
  };
</script>

<BeFormItem class='color-palette-wrapper' label={`${label}:`}>
  <BeInput
    type='text'
    style={`background-color: ${bgColor}; color: ${getOppositeColor(bgColor)}`}
    bind:value={bgColor}
    on:focus={onColorPaletteFocus}
  />
  <input type='color' class='form-control color-palette' id={id} on:change={onChange}>
</BeFormItem>

<style global lang='scss'>
.color-palette-wrapper {
  position: relative;

  .color-palette {
    position: absolute;
    top: 30px;
    left: 0;
    opacity: 0;
  }
}
</style>
