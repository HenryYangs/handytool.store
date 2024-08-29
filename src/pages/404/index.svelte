<script>
  import Layout from '../../components/layout/index.svelte';
  import Exception from '../../components/exception/index.svelte';
</script>

<Layout>
  <Exception
    title='It&#39;s Empty Here~'
    description='The page you are looking for might be removed or is temporarily unavailable.'
    image={`http://images.handytool.store/404/${Math.ceil(Math.random() * 33)}.png`}
    imageStyle='width: 100%; height: 100%'
  />
</Layout>

<style>

</style>
