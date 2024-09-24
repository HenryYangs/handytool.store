<script>
  import Layout from '../../../../components/layout/index.svelte';
  import ToolLayout from '../../../../components/tool-layout/index.svelte';
  import PlaygroundArea from '../../../../components/playground-area/index.svelte';
  import { CATEGORY } from '../../../../constant/tools';
  import { INDENT } from '../../../../constant/format/indent';

  $: input = '';
  $: output = '';
  $: indent = INDENT[0].value;

  const onConfirm = () => {
    try {
      const myObject = JSON.parse(input);
      const res = JSON.stringify( myObject, null, indent );

      output = res;
    } catch( error ) {
      alert('Invalid JSON');
    }
  };

  const onClear = () => {
    input = '';
  };
</script>

<Layout>
  <ToolLayout
    id='json-format'
    category={CATEGORY.PROGRAMMING}
  >
    <PlaygroundArea
      bind:value={input}
      btnText='Compress'
      onConfirm={onConfirm}
      actionConfig={{ onClear }}
    >
      <div slot='header-extra'>
        <select
          class='form-select form-select-sm'
          aria-label='Select Indent'
          placeholder='Select Indent'
          bind:value={indent}
        >
          {#each INDENT as indent}
            <option value={indent.value}>{indent.label}</option>
          {/each}
        </select>
      </div>
    </PlaygroundArea>

    <PlaygroundArea
      noConfirmBtn
      bind:value={output}
      actionConfig={{
        noClear: true
      }}
      style='margin-top: 30px'
    />
  </ToolLayout>
</Layout>
