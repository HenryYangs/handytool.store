<script>
  export let size = 0;
</script>

<i class='iconfont-common icon-common-loading icon-loading' style={size ? `font-size: ${size}px` : ''}></i>

<style global lang='scss'>
.icon-loading {
  display: inline-block;
  animation: loading 1.5s ease-in-out infinite;
}

@keyframes loading {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
