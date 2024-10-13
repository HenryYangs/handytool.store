<script>
  import Layout from '../../components/layout/index.svelte';
  import Exception from '../../components/exception/index.svelte';
  import { t } from 'svelte-i18n';
</script>

<Layout>
  <Exception
    title={$t('Work In Progress')}
    description={$t('wipDescription')}
    image='http://images.handytool.store/wip.png'
    imageStyle='width: 410px; height: 410px'
  />
</Layout>
