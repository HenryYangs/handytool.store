<script>
  import { t } from 'svelte-i18n';
  import Layout from '../../../components/layout/index.svelte';
  import ToolList from '../../../components/tool-list/index.svelte';
</script>

<Layout>
  <ToolList
    id='all'
    title={$t('All Tools')}
    description={$t('All Free Tools')}
  />
</Layout>
