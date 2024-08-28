<script>
  import ToolCard from '../tool-card/index.svelte';

  export let title;
  export let category;
  export let id = '';
  export let toolsList = [];
  export let description = '';
  export let maxOtherCount = 8;

  $: otherTools = toolsList.filter(item => item.id !== id).slice(0, maxOtherCount);
</script>

<main class='tool-layout-wrapper'>
  <div class='container-fluid container-biz'>
    <h2 class='title'>{title}</h2>
    
    {#if description}
      <p class='description'>{description}</p>
    {/if}

    <div class='content'>
      <slot />
    </div>

    <!-- TODO -->
    <!-- <Share /> -->
    
    {#if otherTools.length}
      <div class='other-tools'>
        <h2 class='other-tools-title'>Other {category} Tools</h2>
        <p class='other-tools-subtitle'>Checkout some other popular {category} tools</p>

        <div class='other-tools-list'>
          {#each otherTools as tool}
            <ToolCard tool={tool} innerStyle='box-shadow: 3px 10px 40px rgba(24, 29, 32, 0.05)' />
          {/each}
        </div>
      </div>
    {/if}
  </div>
</main>

<style>
.tool-layout-wrapper {
  padding: 50px 0;
  background-color: rgba(134, 151, 196, .1);
}

.title {
  text-align: center;
  font-weight: bold;
}

.description {
  margin: 15px 0 0;
  color: #ADBBDA;
  text-align: center;
}

.content {
  margin-top: 20px;
}

.other-tools {
  margin-top: 50px;
}

.other-tools-title {
  font-weight: bold;
}

.other-tools-subtitle {
  margin-top: 15px;
  font-size: 18px;
  font-weight: 400;
  color: #ADBBDA;
}

.other-tools-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
</style>
