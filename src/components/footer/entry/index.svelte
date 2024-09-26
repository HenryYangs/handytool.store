<script>
  import { t } from 'svelte-i18n';
  import { processUrl } from '../../../utils/url';

  export let title;
  export let className = '';
  export let list = [];
  // item count in each column
  export let itemCount = 4;

  // how many columns will have
  $: colCount = Math.ceil(list.length /  itemCount);
  $: renderList = new Array(colCount).fill(1).map((_, idx) => {
    return list.slice(idx * (colCount - 1), idx * (colCount - 1) +  itemCount);
  });
</script>

<div class={`wrapper ${className}`}>
  <h4>{title}</h4>
  <div class='row'>
    {#each renderList as colList}
      <ul class='col'>
        {#each colList as item}
          <li>
            <a href={processUrl(item.isWIP, item.url)} class='redirect'>{$t(item.text)}</a>
          </li>
        {/each}
      </ul>
    {/each}
  </div>
</div>

<style>
.wrapper h4 {
  margin: 0;
  color: #333;
}

.wrapper ul li {
  margin-top: 14px;
}

.redirect {
  color: inherit;
  transition: all .3s linear;
}

.redirect:hover {
  color: var(--theme-main-color);
}
</style>
