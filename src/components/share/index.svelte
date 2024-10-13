<script>
  import { onMount } from 'svelte';
  import ShareItem from './item.svelte';
  import Clipboard from 'clipboard';
  import { EVENTS } from '../../constant/events';
  import event from '../../utils/event';
  import '../../assets/icon/actions/iconfont.css';
  import { ALERT_STATUS } from '../../constant/status';

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
    <svg width="14" height="14" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill={twitterColor} />
    </svg>
  </ShareItem>

  <ShareItem
    url={`http://www.facebook.com/share.php?u=${encodeURIComponent(location.href)}&t=${encodeURIComponent(name)}+${encodeURIComponent('|')}+Handytool${encodeURIComponent('🔧')}`}
    color='#5477c4'
    style='margin-right: 10px;'
    onMouseEnter={onFacebookMouseEnter}
    onMouseLeave={onFacebookMouseLeave}
  >
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 2084.000000 2084.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,2084.000000) scale(0.100000,-0.100000)"
      fill={facebookColor} stroke="none">
      <path d="M9970 20830 c-1777 -85 -3428 -582 -4925 -1483 -1209 -727 -2285
      -1724 -3111 -2882 -739 -1035 -1292 -2220 -1604 -3440 -475 -1856 -434 -3813
      119 -5640 243 -802 593 -1592 1028 -2320 766 -1281 1829 -2409 3068 -3256 969
      -663 2082 -1173 3203 -1467 l152 -41 0 3465 0 3464 -1075 0 -1075 0 0 1595 0
      1595 1075 0 1075 0 0 773 c0 782 8 1105 35 1434 96 1152 395 2059 903 2736
      586 780 1436 1267 2597 1486 271 52 522 83 885 113 211 17 1026 17 1235 0 664
      -54 1184 -122 1561 -204 l144 -31 0 -1450 0 -1450 -72 7 c-206 18 -532 28
      -968 29 -394 1 -516 -2 -650 -16 -644 -67 -1036 -221 -1341 -526 -301 -301
      -441 -653 -520 -1306 -7 -53 -13 -396 -16 -842 l-5 -753 1702 0 1703 0 -7 -40
      c-3 -21 -134 -737 -291 -1590 -157 -853 -285 -1553 -285 -1556 0 -2 -634 -4
      -1410 -4 l-1410 0 0 -3580 0 -3580 38 5 c489 70 716 111 1067 192 1039 240
      2070 658 3000 1216 927 556 1814 1305 2528 2135 1374 1598 2223 3542 2457
      5627 42 373 52 556 57 1032 8 734 -28 1235 -137 1885 -423 2519 -1766 4794
      -3776 6402 -1591 1272 -3516 2047 -5539 2230 -419 38 -1038 54 -1415 36z"/>
      </g>
    </svg>
  </ShareItem>

  <ShareItem
    url={`https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(location.href)}&media=&description=${encodeURIComponent(name)}|Handytool${encodeURIComponent('🔧')}`}
    color='#DD001C'
    style='margin-right: 10px;'
    onMouseEnter={onPinterestMouseEnter}
    onMouseLeave={onPinterestMouseLeave}
  >
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 1001.000000 1001.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,1001.000000) scale(0.100000,-0.100000)"
      fill={pinterestColor} stroke="none">
      <path d="M4790 9999 c-1595 -62 -3071 -895 -3955 -2234 -145 -220 -218 -347
      -331 -580 -324 -668 -482 -1338 -498 -2100 -3 -195 9 -467 29 -637 2 -18 7
      -55 10 -83 35 -291 143 -758 230 -990 15 -38 31 -83 36 -100 5 -16 13 -39 18
      -50 5 -11 21 -50 35 -88 65 -170 220 -483 335 -677 437 -737 1072 -1363 1814
      -1789 124 -71 445 -231 557 -277 l75 -31 -7 61 c-15 126 -21 619 -9 776 14
      179 42 400 71 550 11 58 140 622 286 1254 l267 1149 -31 111 c-115 410 -142
      814 -76 1134 85 413 315 704 624 792 318 90 629 -34 759 -301 65 -136 85 -235
      85 -424 -1 -214 -19 -296 -189 -855 -155 -507 -160 -527 -175 -671 -52 -525
      294 -879 860 -879 703 0 1257 577 1434 1495 92 476 57 1024 -91 1425 -246 670
      -779 1103 -1523 1237 -134 25 -167 27 -435 27 -310 1 -412 -9 -635 -59 -643
      -144 -1143 -523 -1420 -1075 -100 -200 -159 -382 -201 -625 -26 -145 -36 -498
      -20 -656 44 -415 172 -731 423 -1041 20 -25 20 -30 7 -54 -26 -49 -99 -115
      -156 -141 -76 -35 -217 -43 -313 -19 -249 63 -468 270 -627 591 -278 560 -308
      1319 -78 2010 196 590 595 1114 1125 1477 422 290 936 476 1500 545 177 21
      646 24 815 5 782 -89 1413 -369 1904 -847 160 -155 268 -285 390 -467 552
      -823 663 -1923 295 -2922 -96 -263 -266 -569 -441 -798 -96 -126 -296 -334
      -423 -440 -329 -277 -730 -461 -1135 -523 -162 -25 -416 -23 -569 4 -338 60
      -606 201 -854 447 -73 73 -135 127 -137 121 -3 -7 -67 -266 -144 -577 -77
      -311 -163 -639 -191 -730 -123 -395 -315 -812 -524 -1135 -47 -73 -61 -102
      -52 -107 22 -12 264 -77 406 -108 333 -73 572 -100 950 -107 397 -8 692 15
      1056 82 715 132 1434 448 2034 893 95 71 251 193 270 212 3 3 46 41 95 85 143
      127 337 325 455 464 25 30 50 59 55 65 62 71 254 329 317 426 64 100 158 251
      158 255 0 2 14 28 31 57 36 60 186 358 219 433 11 28 25 59 30 70 10 21 39 93
      72 180 25 65 112 327 128 385 7 25 16 56 20 70 11 33 56 226 76 320 30 148 66
      407 82 587 12 148 8 766 -6 898 -68 622 -218 1155 -477 1690 -488 1012 -1315
      1836 -2330 2326 -740 357 -1542 521 -2385 488z"/>
      </g>
    </svg>
  </ShareItem>
  
  <ShareItem
    url={`https://tumblr.com/widgets/share/tool?canonicalUrl=${location.href}`}
    color='#000'
    style='margin-right: 10px;'
    onMouseEnter={onTumblrMouseEnter}
    onMouseLeave={onTumblrMouseLeave}
  >
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 303.000000 303.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,303.000000) scale(0.100000,-0.100000)"
      fill={tumblrColor} stroke="none">
      <path d="M1375 2453 c-32 -172 -72 -259 -162 -354 -49 -52 -85 -79 -145 -109
      -44 -22 -87 -40 -94 -40 -11 0 -14 -30 -14 -155 l0 -154 128 -3 127 -3 5 -355
      c6 -333 7 -359 28 -414 30 -79 53 -115 112 -170 102 -95 186 -116 470 -116
      l210 0 0 185 0 185 -109 0 c-119 0 -162 10 -203 48 -49 45 -53 75 -53 367 l0
      270 173 3 172 2 0 175 0 175 -172 2 -173 3 -3 243 -2 242 -145 0 -145 0 -5
      -27z"/>
      </g>
    </svg>
  </ShareItem>

  <ShareItem
    url={`https://www.linkedin.com/sharing/share-offsite/?url=${location.href}`}
    color='#0F4FB4'
    style='margin-right: 10px;'
    onMouseEnter={onLinkedInMouseEnter}
    onMouseLeave={onLinkedInMouseLeave}
  >
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 536.000000 540.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,540.000000) scale(0.100000,-0.100000)"
      fill={linkedInColor} stroke="none">
      <path d="M283 5386 c-136 -43 -247 -167 -273 -307 -14 -70 -14 -4647 0 -4718
      23 -121 113 -235 227 -289 l58 -27 2390 0 2390 0 58 27 c75 35 156 113 193
      185 l29 58 0 2405 0 2405 -29 58 c-37 72 -118 150 -193 185 l-58 27 -2375 2
      c-1944 1 -2383 -1 -2417 -11z m1109 -778 c94 -47 176 -130 221 -225 30 -64 32
      -74 32 -184 0 -113 -1 -116 -38 -191 -202 -410 -791 -317 -857 135 -24 165 69
      357 216 443 90 53 139 65 250 62 93 -3 107 -6 176 -40z m2384 -1169 c446 -49
      681 -286 759 -764 27 -162 35 -472 28 -1162 l-6 -673 -388 0 -388 0 -3 768
      c-4 750 -4 769 -25 844 -42 147 -101 226 -206 274 -57 27 -71 29 -182 29 -139
      0 -205 -16 -281 -68 -91 -62 -143 -153 -181 -312 -14 -61 -17 -165 -20 -802
      l-4 -733 -390 0 -389 0 0 1270 0 1270 375 0 375 0 0 -170 c0 -181 7 -202 43
      -141 36 61 110 142 180 197 197 154 409 206 703 173z m-2186 -1329 l0 -1270
      -390 0 -390 0 0 1270 0 1270 390 0 390 0 0 -1270z"/>
      </g>
    </svg>
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
