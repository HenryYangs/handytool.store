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

<div class='input-group-sm wrapper'>
  <label for='bgColor' class='form-label'>{label}:</label>
  <input
    type='text'
    class='form-control'
    style={`background-color: ${bgColor}; color: ${getOppositeColor(bgColor)}`}
    bind:value={bgColor}
    on:focus={onColorPaletteFocus}
  />
  <input type='color' class='form-control color-platte' id={id} on:change={onChange}>
</div>

<style>
.wrapper {
  position: relative;
}

.color-platte {
  position: absolute;
  top: 30px;
  left: 0;
  opacity: 0;
}
</style>
