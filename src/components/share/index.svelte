<script>
  import { onMount } from 'svelte';
  import ShareItem from './item.svelte';
  import Clipboard from 'clipboard';
  import { EVENTS } from '../../constant/events';
  import event from '../../utils/event';
  import '../../assets/icon/actions/iconfont.css';
  import { ALERT_STATUS } from '../../constant/status';
  import { SVG_FACEBOOK, SVG_LINKEDIN, SVG_PINTEREST, SVG_TUMBLR, SVG_TWITTER } from '../../assets/svg/app';

  export let name = '';
  export let style = '';

  let twitterColor = '#000';
  let facebookColor = '#5477c4';
  let pinterestColor = '#DD001C';
  let tumblrColor = '#000';
  let linkedInColor = '#0F4FB4';
  let copyColor = '#333';

  const onTwitterMouseEnter = () => {
    twitterColor = '#FFF';
  };
  const onTwitterMouseLeave = () => {
    twitterColor = '#000';
  };
  const onFacebookMouseEnter = () => {
    facebookColor = '#FFF';
  };
  const onFacebookMouseLeave = () => {
    facebookColor = '#5477c4'
  };
  const onPinterestMouseEnter = () => {
    pinterestColor = '#FFF';
  };
  const onPinterestMouseLeave = () => {
    pinterestColor = '#DD001C';
  };
  const onTumblrMouseEnter = () => {
    tumblrColor = '#FFF';
  };
  const onTumblrMouseLeave = () => {
    tumblrColor = '#000';
  };
  const onLinkedInMouseEnter = () => {
    linkedInColor = '#FFF';
  };
  const onLinkedInMouseLeave = () => {
    linkedInColor = '#0F4FB4';
  };
  const onCopyMouseEnter = () => {
    copyColor = '#FFF';
  };
  const onCopyMouseLeave = () => {
    copyColor = '#333';
  };
  const onCopy = () => {

  };

  onMount(() => {
    const clipboard = new Clipboard(`#copyShareLink`, {
      text: () => {
        return String(`${name} | Handytool🔧 ${location.href}`);
      }
    });

    clipboard.on('success', () => {
      event.emit(EVENTS.ALERT, {
        show: true,
        status: ALERT_STATUS.SUCCESS,
        message: 'Copy Success!'
      });
    });

    clipboard.on('error', () => {
      event.emit(EVENTS.ALERT, {
        show: true,
        status: ALERT_STATUS.ERROR,
        message: 'Copy Error!'
      });
    });
  });
</script>

<div class='share-wrapper' style={style}>
  <ShareItem
    url={`http://twitter.com/share?url=${encodeURIComponent(location.href)}&text=${encodeURIComponent(name)}+${encodeURIComponent('|')}+Handytool${encodeURIComponent('🔧')}+${encodeURIComponent('@handytool_store')}&hashtags=${encodeURIComponent('handytool')}`}
    color='#000'
    style='margin-right: 10px;'
    onMouseEnter={onTwitterMouseEnter}
    onMouseLeave={onTwitterMouseLeave}
  >
    {@html SVG_TWITTER.replace(/\{twitterColor\}/, twitterColor)}
  </ShareItem>

  <ShareItem
    url={`http://www.facebook.com/share.php?u=${encodeURIComponent(location.href)}&t=${encodeURIComponent(name)}+${encodeURIComponent('|')}+Handytool${encodeURIComponent('🔧')}`}
    color='#5477c4'
    style='margin-right: 10px;'
    onMouseEnter={onFacebookMouseEnter}
    onMouseLeave={onFacebookMouseLeave}
  >
    {@html SVG_FACEBOOK.replace(/\{facebookColor\}/, facebookColor)}
  </ShareItem>

  <ShareItem
    url={`https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(location.href)}&media=&description=${encodeURIComponent(name)}|Handytool${encodeURIComponent('🔧')}`}
    color='#DD001C'
    style='margin-right: 10px;'
    onMouseEnter={onPinterestMouseEnter}
    onMouseLeave={onPinterestMouseLeave}
  >
    {@html SVG_PINTEREST.replace(/\{pinterestColor\}/, pinterestColor)}
  </ShareItem>
  
  <ShareItem
    url={`https://tumblr.com/widgets/share/tool?canonicalUrl=${location.href}`}
    color='#000'
    style='margin-right: 10px;'
    onMouseEnter={onTumblrMouseEnter}
    onMouseLeave={onTumblrMouseLeave}
  >
    {@html SVG_TUMBLR.replace(/\{tumblrColor\}/, tumblrColor)}
  </ShareItem>

  <ShareItem
    url={`https://www.linkedin.com/sharing/share-offsite/?url=${location.href}`}
    color='#0F4FB4'
    style='margin-right: 10px;'
    onMouseEnter={onLinkedInMouseEnter}
    onMouseLeave={onLinkedInMouseLeave}
  >
    {@html SVG_LINKEDIN.replace(/\{linkedInColor\}/, linkedInColor)}
  </ShareItem>

  <ShareItem
    id='copyShareLink'
    color='#333'
    onMouseEnter={onCopyMouseEnter}
    onMouseLeave={onCopyMouseLeave}
    onAction={onCopy}
  >
    <i class='iconfont-action icon-action-copy' style={`color: ${copyColor}`}></i>
  </ShareItem>
</div>

<style global lang='scss'>
.share-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
