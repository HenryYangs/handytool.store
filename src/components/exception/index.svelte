<script>
  import { t } from 'svelte-i18n';
  import { ROUTER } from '../../constant/router';

  export let title;
  export let description;
  export let image;
  export let imageStyle = '';
</script>

<div class='common-background exception-wrapper layout-center'>
  <div class='container-biz inner-wrapper'>
    <div class='not-found-main'>
      <h1>{@html title}</h1>
      <p class='description'>{description}</p>
      <a href={ROUTER.HOME} class='btn-outline-dark back-to-home'>{$t('BACK TO HOMEPAGE')}</a>
    </div>

    <div class='image-wrapper layout-center'>
      <img src={image} alt='exception' class='image-exception' style={imageStyle} />
    </div>
  </div>
</div>

<style global lang='scss'>
.exception-wrapper {
  height: 100%;

  .inner-wrapper {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
  }

  .not-found-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .image-wrapper {
    width: 666px;
    height: 473px;
  }

  .image-exception {
    width: 100%;
    height: 100%;
  }

  .description {
    margin-top: 10px;
    line-height: 1.5;
  }

  .back-to-home {
    width: 200px;
    height: 50px;
    margin-top: 40px;
    padding: 0;
    border-radius: 0;
    line-height: 50px;
    color: var(--btn-outline-dark);
    text-align: center;
  }
}
</style>
