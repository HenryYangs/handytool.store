<script>
  import TextNumeralConvertor from '../../../../components/converter/text-numeral/index.svelte';
  import { isDecimal } from '../../../../utils/validate';
</script>

<TextNumeralConvertor
  id='text-decimal'
  numeral={10}
  numeralText='decimal'
  numberValidator={isDecimal}
/>
