<script>
  import TextNumeralConvertor from '../../../../components/convertor/text-numeral/index.svelte';
  import { TOOL_CONVERTOR_ID } from '../../../../constant/tools';
  import { isHex } from '../../../../utils/validate';
</script>

<TextNumeralConvertor
  id={TOOL_CONVERTOR_ID.TEXT_HEX}
  numeral={16}
  numeralText='hex'
  numberValidator={isHex}
/>
