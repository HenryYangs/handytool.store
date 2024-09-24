<script>
  import logo from '../../assets/images/logo.png';
  import { ROUTER } from '../../constant/router';
  import { processUrl } from '../../utils/url';
  import { HEADER_ENTRIES } from './config';
  import ExecuteBtn from '../execute-btn/index.svelte';
  import '../../assets/icon/header/iconfont.css';
  import Dropdown from '../dropdown/index.svelte';
  import http from '../../utils/http';
  import { STORAGE_LOGIN_INFO } from '../../constant/storage';
  import { parseJSON } from '../../utils/object';
  import { onMount } from 'svelte';
  import event from '../../utils/event';
  import { EVENTS } from '../../constant/events';
  
  let y;

  $: searchValue = '';
  $: isLogin = false;
  $: userInfo = (() => {
    return parseJSON(localStorage.getItem(STORAGE_LOGIN_INFO));
  })();
  $: username = '';

  const onSearch = () => {
    location.href = `${location.protocol}//${location.host}/tool/all?q=${searchValue}`;
  };

  const onSearchKeyPress = (event) => {
    if(event.keyCode == 13) { // enter
      onSearch();
      event.preventDefault();
    }
  };

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
  })
</script>

<svelte:window bind:scrollY={y} />
<header class={`header sticky-top ${y ? 'sticky' : ''}`}>
  <div class='container-fluid container-biz'>
    <div class='row align-items-center'>
      <div class='logo col-2'>
        <a href={ROUTER.HOME} class='d-flex align-items-center'>
          <img src={logo} alt='logo' class='logo-icon' />
          <h5 class='logo-text'>HandyTool</h5>
        </a>
      </div>
      <div class='entries col-5 align-items-center'>
        <ul class='d-flex align-items-center justify-content-start entries-list'>
          {#each HEADER_ENTRIES as entry}
            <li>
              <a
                href={processUrl(entry.isWIP, entry.redirectUrl)}
                class={`entry-link ${location.pathname === entry.redirectUrl ? 'entry-current' : ''}`}
              >
                <i class={`iconfont-header icon-header-${entry.icon} entry-item-inner`}></i>
                <span class='entry-item-inner'>{entry.text}</span>
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <div class='extra col-5 d-flex justify-content-end align-items-center'>
        <!-- <button class='extra-icon'>
          <i class='iconfont-header icon-header-light'></i>
        </button>

        <button class='extra-icon'>
          <i class='iconfont-header icon-header-share'></i>
        </button>

        <div class='vertical-split'></div> -->

        <form class='search-form'>
          <input class='form-control input-search' placeholder='Search' bind:value={searchValue} on:keypress={onSearchKeyPress} />

          <button class='button btn-search' type='button' on:click={onSearch}>
            <i class='iconfont-common icon-common-search'></i>
          </button>
        </form>

        {#if isLogin}
          <Dropdown
            id='dropdown'
            triggerText={username.slice(0, 1).toUpperCase()}
            triggerStyle=''
            dropdownList={[
              {
                text: 'Logout',
                onClick: onLogout,
              }
            ]}
          />
        {:else}
          <ExecuteBtn text='Sign In' onConfirm={onAuthBtnClick} />
        {/if}
      </div>
    </div>
  </div>
</header>

<style>
.header {
  padding: 16px 0;
  background-color: var(--white);
}

.sticky {
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .1);
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
  height: 100%;
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

.extra *:not(:last-child) {
  margin-right: 10px;
}

.vertical-split {
  height: 40px;
  border-right: 1px solid var(--theme-secondary-dark-color);
}

.extra-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid var(--theme-secondary-dark-color);
  background-color: transparent;
  transition: all .3s linear;
}

.extra-icon:hover {
  background-color: var(--theme-secondary-dark-color);
}

.extra-icon:hover i {
  color: var(--white);
}

.extra-icon i {
  font-size: 20px;
  color: var(--theme-secondary-dark-color);
}

.search-form {
  position: relative;
}

.input-search {
  height: 40px;
  padding-left: 40px;
  background-color: var(--theme-main-light-color);
  border: none;
  font-size: 10px;
}

.btn-search {
  position: absolute;
  top: 0;
  left: 3px;
  height: 40px;
  border: none;
  background-color: transparent;
  font-size: 10px;
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
