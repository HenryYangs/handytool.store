<script>
  import TextNumeralConvertor from '../../../../components/convertor/text-numeral/index.svelte';
  import { TOOL_CONVERTOR_ID } from '../../../../constant/tools';
  import { isBinary } from '../../../../utils/validate';
</script>

<TextNumeralConvertor
  id={TOOL_CONVERTOR_ID.TEXT_BINARY}
  numeral={2}
  numeralText='binary'
  numberValidator={isBinary}
/>
