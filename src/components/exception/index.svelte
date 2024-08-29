<script>
  import { ROUTER } from '../../constant/router';

  export let title;
  export let description;
  export let image;
  export let imageStyle = '';
</script>

<div class='common-background wrapper'>
  <div class='container-fluid container-biz inner-wrapper'>
    <div class='not-found-main'>
      <h1>{title}</h1>
      <p class='description'>{description}</p>
      <a href={ROUTER.HOME} class='btn btn-outline-dark back-to-home'>BACK TO HOMEPAGE</a>
    </div>

    <div class='image-wrapper d-flex justify-content-center align-items-center'>
      <img src={image} alt='exception' class='image-exception' style={imageStyle} />
    </div>
  </div>
</div>

<style>
.wrapper {
  height: 100%;
}

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
}

.back-to-home {
  width: 200px;
  height: 50px;
  margin-top: 40px;
  padding: 0;
  border-radius: 0;
  line-height: 50px;
}
</style>
