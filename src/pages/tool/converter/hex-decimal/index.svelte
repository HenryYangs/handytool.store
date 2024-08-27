<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import { CONVERTER } from '../../../../constant/tools';
</script>

<Layout>
  <ToolLayout
    id='hex-decimal'
    title='Hex-Decimal'
    category='Converter'
    toolsList={CONVERTER}
    description='Convert text between hexadecimal and decimal'
  >
    <div>hex-decimal</div>
  </ToolLayout>
</Layout>
