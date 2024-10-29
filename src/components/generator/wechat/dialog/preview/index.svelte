<script>
  import html2canvas from 'html2canvas';
  import Mask from '../../../../mask/index.svelte';
  import { useEventListener } from '../../../../../utils/hooks/use-event-listener';
  import { EVENTS } from '../../../../../constant/events';

  export let targetId = '';
  export let deviceRatio = {};

  $: showMask = false;

  const onMaskClose = () => {
    showMask = false;
    document.querySelector('#hideNode').removeChild(document.querySelector('#copyNode'));
  };

  const generateImage = () => {
    const target = document.querySelector(`#${targetId}`);
    const copyNode = target.cloneNode(true);

    copyNode.setAttribute('id', 'copyNode');
    copyNode.classList.add('simulator-generate');
    copyNode.style.width = `${deviceRatio.width}px`;
    copyNode.style.height = `${deviceRatio.height}px`;

    const copyContent = copyNode.querySelector('.wechat-message-wrapper');
    copyContent.style.marginTop = `-${target.querySelector('.wechat-content').scrollTop}px`;
    document.querySelector('#hideNode').appendChild(copyNode);
    document.querySelector('#mask').innerHTML = '';

    html2canvas(copyNode, {
      allowTaint: true,
      ...deviceRatio
    }).then(canvas => {
      showMask = true;
      document.querySelector('#mask').appendChild(canvas);
      document.querySelector('#copyNode').style.display = 'none';
    });
  };

  useEventListener(EVENTS.APP.WECHAT.DIALOG.PREVIEW, generateImage);
</script>

<div id='hideNode' style='position: absolute;opacity:0' class='hide-node'></div>

<Mask id='mask' style={showMask ? '' : 'display: none;'} className='layout-center' onClose={onMaskClose} />

<style lang='scss' global>

</style>
