<script>
  import TextNumeralConvertor from '../../../../components/convertor/text-numeral/index.svelte';
  import { TOOL_CONVERTOR_ID } from '../../../../constant/tools';
  import { isDecimal } from '../../../../utils/validate';
</script>

<TextNumeralConvertor
  id={TOOL_CONVERTOR_ID.TEXT_DECIMAL}
  numeral={10}
  numeralText='decimal'
  numberValidator={isDecimal}
/>
