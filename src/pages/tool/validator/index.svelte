<script>
  import { t } from 'svelte-i18n';
  import Layout from '../../../components/layout/index.svelte';
  import ToolList from '../../../components/tool-list/index.svelte';
  import { CATEGORY } from '../../../constant/tools';
</script>

<Layout>
  <ToolList
    id={CATEGORY.VALIDATOR}
    title={$t('Validator Tools')}
    description={$t('Free Validator Tools')}
  />
</Layout>
