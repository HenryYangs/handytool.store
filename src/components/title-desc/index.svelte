<script>
export let title;
export let description = '';
</script>

<h2 class='title'>{title}</h2>
    
{#if description}
  <p class='description'>{description}</p>
{/if}

<style>
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
