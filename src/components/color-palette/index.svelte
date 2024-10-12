<script>
  import { getOppositeColor } from '../../utils/color';

  export let id = '';
  export let label = '';
  export let bgColor = '';
  export let onChange = () => {};

  const onColorPaletteFocus = () => {
    document.getElementById(id).click();
  };
</script>

<div class='input-group-sm color-palette-wrapper'>
  <label for='bgColor' class='form-label'>{label}:</label>
  <input
    type='text'
    class='form-control'
    style={`background-color: ${bgColor}; color: ${getOppositeColor(bgColor)}`}
    bind:value={bgColor}
    on:focus={onColorPaletteFocus}
  />
  <input type='color' class='form-control color-palette' id={id} on:change={onChange}>
</div>

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
