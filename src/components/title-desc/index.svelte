<script>
  import Star from '../star/index.svelte';

  export let title;
  export let description = '';
  export let showStar = true;
  export let isFavorite = false;
  export let id = '';
  export let onFavorite = () => {};
</script>

<div class='title-wrapper'>
  <h2 class='title'>{title}</h2>

  {#if showStar}
    <Star
      id={id}
      isStar={isFavorite}
      style='margin-left: 10px;'
      onClick={onFavorite}
    />
  {/if}
</div>
    
{#if description}
  <p class='description'>{description}</p>
{/if}

<style>
.title-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  text-align: center;
  font-weight: bold;
}

.description {
  margin: 15px 0 0;
  color: var(--theme-secondary-dark-color);
  text-align: center;
}
</style>
