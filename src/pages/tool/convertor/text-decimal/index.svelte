<script>
  import TextNumeralConvertor from '../../../../components/convertor/text-numeral/index.svelte';
  import { isDecimal } from '../../../../utils/validate';
</script>

<TextNumeralConvertor
  id='text-decimal'
  numeral={10}
  numeralText='decimal'
  numberValidator={isDecimal}
/>
