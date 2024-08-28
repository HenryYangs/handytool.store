<script>
  import TextNumeralConvertor from '../../../../components/converter/text-numeral/index.svelte';
  import { isBinary } from '../../../../utils/validate';
</script>

<TextNumeralConvertor
  id='text-binary'
  numeral={2}
  numeralText='binary'
  numberValidator={isBinary}
/>
