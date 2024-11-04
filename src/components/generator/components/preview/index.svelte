<script>
  import html2canvas from 'html2canvas';
  import BeAlert from '@brewer/beerui/be-alert';
  import Mask from '../../../mask/index.svelte';
  import { useEventListener } from '../../../../utils/hooks/use-event-listener';
  import { EVENTS } from '../../../../constant/events';
  import { loadingSerive } from '@brewer/beerui/utils/loading';
  import { t } from 'svelte-i18n';

  export let targetId = '';
  export let deviceRatio = {};
  export let onBeforeAppend = (node, target) => {};

  $: showMask = false;

  const onMaskClose = () => {
    showMask = false;
    document.querySelector('#hideNode').removeChild(document.querySelector('#copyNode'));
  };

  const generateImage = () => {
    let loadingInstance = new loadingSerive({
      target: 'body',
      text: 'loading'
    });
    loadingInstance.show();
    
    const target = document.querySelector(`#${targetId}`);
    const copyNode = target.cloneNode(true);

    copyNode.setAttribute('id', 'copyNode');
    copyNode.style.width = `${deviceRatio.width}px`;
    copyNode.style.height = `${deviceRatio.height}px`;

    onBeforeAppend(copyNode, target);

    document.querySelector('#hideNode').appendChild(copyNode);
    
    const canvas = document.querySelectorAll('#mask canvas');

    canvas.forEach(c => {
      c.parentNode.removeChild(c);
    });

    setTimeout(() => {
      html2canvas(copyNode, {
        allowTaint: true,
        ...deviceRatio
      }).then(canvas => {
        showMask = true;

        document.querySelector('#mask').appendChild(canvas);
        document.querySelector('#copyNode').style.display = 'none';

        loadingInstance.close();
      });
    }, 500)
  };

  useEventListener(EVENTS.APP.WECHAT.DIALOG.PREVIEW, generateImage);
</script>

<div id='hideNode' style='position: absolute;opacity:0' class='hide-node'></div>

<Mask id='mask' style={showMask ? '' : 'display: none;'} className='layout-center' onClose={onMaskClose}>
  <div style='position: fixed; left: 0; bottom: 0; right: 0'>
    <BeAlert title={$t('previewTips')} type='info' on:close={onMaskClose} />
  </div>
</Mask>
