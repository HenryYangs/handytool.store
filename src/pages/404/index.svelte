<script>
  import Layout from '../../components/layout/index.svelte';
  import Exception from '../../components/exception/index.svelte';
  import { t } from 'svelte-i18n';
</script>

<Layout>
  <Exception
    title={$t('emptyTitle')}
    description={$t('emptyDescription')}
    image={`http://images.handytool.store/404/${Math.ceil(Math.random() * 33)}.png`}
    imageStyle='width: 100%; height: 100%'
  />
</Layout>
