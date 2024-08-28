<script>
  import TextNumeralConvertor from '../../../../components/converter/text-numeral/index.svelte';
  import { isHex } from '../../../../utils/validate';
</script>

<TextNumeralConvertor
  id='text-hex'
  numeral={16}
  numeralText='hex'
  numberValidator={isHex}
/>
