<script>
  import TextNumeralConvertor from '../../../../components/convertor/text-numeral/index.svelte';
  import { isBinary } from '../../../../utils/validate';
</script>

<TextNumeralConvertor
  id='text-binary'
  numeral={2}
  numeralText='binary'
  numberValidator={isBinary}
/>
