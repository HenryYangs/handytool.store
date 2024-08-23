<script>
  import logo from '../../assets/images/logo_100x100.png';
</script>

<header class='header sticky-top sticky'>
  <div class='container-fluid header-container'>
    <div class='row align-items-center'>
      <div class='logo col-2'>
        <a href='/' class='d-flex align-items-center'>
          <img src={logo} alt='logo' class='logo-icon' />
          <span class='logo-text'>HandyTool</span>
        </a>
      </div>
      <div class='entries col-5 align-items-center'>
        <ul class='d-flex align-items-center justify-content-between entries-list'>
          <li>
            <a href='/' class='entry-link'>
              <i class='iconfont icon-home entry-item-inner'></i>
              <span class='entry-item-inner'>Home</span>
            </a>
          </li>

          <li>
            <a href='/' class='entry-link'>
              <i class='iconfont icon-heart entry-item-inner'></i>
              <span class='entry-item-inner'>Favorite</span>
            </a>
          </li>

          <li>
            <a href='/' class='entry-link'>
              <i class='iconfont icon-recent entry-item-inner'></i>
              <span class='entry-item-inner'>Recent</span>
            </a>
          </li>

          <li>
            <a href='/' class='entry-link'>
              <i class='iconfont icon-message entry-item-inner'></i>
              <span class='entry-item-inner'>Message</span>
            </a>
          </li>
        </ul>
      </div>
      <div class='extra col-5 d-flex justify-content-end align-items-center'>
        <button class='extra-icon'>
          <i class='iconfont icon-light'></i>
        </button>

        <button class='extra-icon'>
          <i class='iconfont icon-share'></i>
        </button>

        <div class='vertical-split'></div>

        <form class='search-form'>
          <input class='form-control input-search' placeholder="Search" />

          <button class='button btn-search' type='submit'>
            <i class='iconfont icon-search'></i>
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
}

.sticky {
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .1);
}

.logo-icon {
  width: 32px;
  height: 32px;
}

.logo-text {
  color: #333;
}

.entries-list {
  height: 100%;
}

.entry-link:hover .entry-item-inner {
  color: #3D52A0;
}

.entry-item-inner {
  color: #7091E6;
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

@media (min-width: 1200px) {
  .header-container {
    max-width: 1200px;
  }
}
</style>
