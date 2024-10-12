<script>
  import BeInput  from '@brewer/beerui/be-input';
  import Dropdown from '../dropdown/index.svelte';
  import logo from '../../assets/images/logo.png';
  import { ROUTER } from '../../constant/router';
  import { processUrl } from '../../utils/url';
  import { HEADER_ENTRIES } from './config';
  import ExecuteBtn from '../execute-btn/index.svelte';
  import '../../assets/icon/header/iconfont.css';
  import http from '../../utils/http';
  import { STORAGE_I18N_KEY, STORAGE_LOGIN_INFO } from '../../constant/storage';
  import { parseJSON } from '../../utils/object';
  import { onMount } from 'svelte';
  import event from '../../utils/event';
  import { EVENTS } from '../../constant/events';
  import { t } from 'svelte-i18n';
  import { getLang } from '../../utils/i18n';
  import { LOCALE_CN, LOCALE_EN } from '../../constant/i18n';
  
  let y;

  $: searchValue = '';
  $: isLogin = false;
  $: userInfo = (() => {
    return parseJSON(localStorage.getItem(STORAGE_LOGIN_INFO));
  })();
  $: username = '';
  $: locale = getLang();

  const onSearch = () => {
    location.href = `${location.protocol}//${location.host}/tool/all?q=${searchValue}`;
  };

  const onSearchHandler = (event) => {
    if(event.keyCode == 13) { // enter
      onFormSubmit(event);
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSearch();
  }

  const onAuthBtnClick = () => {
    event.emit(EVENTS.AUTH_SHOW);
  };

  const onLogout = () => {
    http({
      url: '/logout',
      method: 'POST',
    }).then(() => {
      localStorage.removeItem(STORAGE_LOGIN_INFO);
      location.href = '/';
    });
  };

  onMount(() => {
    if (userInfo && userInfo.token) {
      http({
        url: '/validate-token',
        method: 'GET'
      }, {
        showErrorToast: false
      })
        .then(() => {
          username = userInfo.username;
          isLogin = true;
        })
        .catch(() => {
          isLogin = false;
          localStorage.removeItem(STORAGE_LOGIN_INFO);
        });
    }
  });

  const getLocaleEntryStyle = (target) => {
    return locale === target ? 'color: #3D52A0; font-weight: bold' : '';
  };

  const onLocaleChange = (newLocale) => {
    if (newLocale === locale) return;

    localStorage.setItem(STORAGE_I18N_KEY, newLocale);
    location.reload();
  }
</script>

<svelte:window bind:scrollY={y} />
<header class={`header-wrapper layout-center sticky-top ${y ? 'sticky' : ''}`}>
  <div class='container-biz layout-start-center'>
    <a href={ROUTER.HOME} class='layout-start-center home'>
      <img src={logo} alt='logo' class='logo-icon' />
      <h5 class='logo-text'>HandyTool</h5>
    </a>

    <ul class='layout-start-center entries-list'>
      {#each HEADER_ENTRIES as entry}
        <li>
          <a
            href={processUrl(entry.isWIP, entry.redirectUrl)}
            class={`entry-link ${location.pathname === entry.redirectUrl ? 'entry-current' : ''}`}
          >
            <i class={`iconfont-header icon-header-${entry.icon} entry-item-inner`}></i>
            <span class='entry-item-inner'>{$t(entry.text)}</span>
          </a>
        </li>
      {/each}
    </ul>

    <div class='extra layout-end-center'>
      <Dropdown
          btnTrigger={false}
          iconTrigger
          id='translate'
          iconCategory='header'
          iconName='translate'
          triggerStyle='margin-right: 10px; margin: 10px;'
          dropdownList={[
            {
              text: 'English',
              onClick: () => onLocaleChange(LOCALE_EN),
              style: getLocaleEntryStyle(LOCALE_EN),
            },
            {
              text: '中文',
              onClick: () => onLocaleChange(LOCALE_CN),
              style: getLocaleEntryStyle(LOCALE_CN),
            }
          ]}
        />

      <div>
        <BeInput
          bind:value={searchValue}
          placeholder={$t('Search')}
          suffixIcon='be-icon-search'
          on:keypress={onSearchHandler}
        />
      </div>

      {#if isLogin}
        <Dropdown
          id='userInfo'
          triggerText={username}
          triggerStyle=''
          dropdownList={[
            {
              text: $t('Logout'),
              onClick: onLogout,
            }
          ]}
        />
      {:else}
          <!-- <BeButton size='mini' on:click={onAuthBtnClick}>{$t('Login')}</BeButton> -->
           <ExecuteBtn text={$t('Login')} onConfirm={onAuthBtnClick} />
      {/if}
    </div>
  </div>
</header>

<style global lang='scss'>
  .header-wrapper {
    padding: 16px 0;
    background-color: var(--white);

    &.sticky {
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .1);
    }

    .home {
      flex: 1;
    }

    .extra {
      flex: 2;
    }

    .extra > * {
        margin: 0 5px;
      }

    .logo-icon {
      width: 32px;
      height: 32px;
      margin-right: 10px;
    }

    .logo-text {
      color: #333;
      font-weight: bold;
      letter-spacing: 2px;
      font-style: italic;
    }

    .entries-list {
      flex: 2;
    }

    .entries-list li + li {
      margin-left: 20px;
    }

    .entry-link.entry-current .entry-item-inner,
    .entry-link:hover .entry-item-inner {
      color: rgb(61, 82, 160, 1);
    }

    .entry-item-inner {
      color: rgb(61, 82, 160, .6);
      font-size: 20px;
      font-weight: 500;
      transition: all .3s linear;
    }

    .be-input__inner {
      padding-left: 8px;
    }
  }

  @supports ((position:-webkit-sticky) or (position:sticky)) {
    .sticky-top {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      z-index: var(--sticky-layer);
    }
  }
</style>
