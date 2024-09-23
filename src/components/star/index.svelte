<script>
  import http from '../../utils/http';

  export let id;
  export let isStar = false;
  export let size = 30;
  export let style = '';
  export let starStyle = '';
  export let onClick = (event) => {};

  const onClickHandler = (event) => {
    event.preventDefault();
    http({
      url: isStar ? '/un-favorite' : '/favorite',
      method: 'POST',
      data: {
        list: [id],
      },
    }).then(() => {
      onClick(event);
    });
  };
</script>

<span class='wrapper' on:click={onClickHandler} style={style}>
  <i
    class={`iconfont-common icon-common-heart${isStar ? '-fill' : ''} ${isStar ? 'icon-heart-fill' : 'icon-heart'}`}
    style={`font-size: ${size}px; ${starStyle}`}
  ></i>
</span>

<style>
.wrapper {
  cursor: pointer;
}

.icon-heart {
  opacity: 0.8;
  transition: all .3s linear;
}

.icon-heart:hover {
  opacity: 1;
}

.icon-heart-fill {
  color: red;
}
</style>
