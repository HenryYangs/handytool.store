<script>
  import logo from '../../assets/images/logo.png';
  import { ROUTER } from '../../constant/router';
  import { processUrl } from '../../utils/url';
  import './assets/icon/iconfont.css';
  import { HEADER_ENTRIES } from './config';
  
  let y;
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
        <ul class='d-flex align-items-center justify-content-between entries-list'>
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
        <button class='extra-icon'>
          <i class='iconfont-header icon-header-light'></i>
        </button>

        <button class='extra-icon'>
          <i class='iconfont-header icon-header-share'></i>
        </button>

        <div class='vertical-split'></div>

        <form class='search-form'>
          <input class='form-control input-search' placeholder="Search" />

          <button class='button btn-search' type='submit'>
            <i class='iconfont-common icon-common-search'></i>
          </button>
        </form>

        <button class='btn btn-primary'>Sign In</button>
      </div>
    </div>
  </div>
</header>

<style>
.header {
  padding: 16px 0;
  background-color: #FFF;
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
  border-right: 1px solid #ADBBDA;
}

.extra-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #ADBBDA;
  background-color: transparent;
  transition: all .3s linear;
}

.extra-icon:hover {
  background-color: #ADBBDA;
}

.extra-icon:hover i {
  color: #FFF;
}

.extra-icon i {
  font-size: 20px;
  color: #ADBBDA;
}

.search-form {
  position: relative;
}

.input-search {
  height: 40px;
  padding-left: 40px;
  background-color: #EDE8F5;
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
    z-index: 1000;
  }
}
</style>
