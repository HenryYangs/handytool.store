<script>
  import Mask from '../mask/index.svelte';
  import ExecuteBtn from '../execute-btn/index.svelte';
  import http from '../../utils/http';
  import { STORAGE_LOGIN_INFO } from '../../constant/storage';
  import event from '../../utils/event';
  import { EVENTS } from '../../constant/events';
  import { ALERT_STATUS } from '../../constant/status';
  import { onMount } from 'svelte';

  $: show = false;

  const FORM_TYPE = {
    LOGIN: 'login',
    REGISTER: 'register',
    FORGET_PASSWORD: 'forgetPassword',
  };

  const PASSWORD_TYPE = {
    PASSWORD: 'password',
    TEXT: 'text',
  };

  $: username = '';
  $: password = '';

  $: formClsName = '';
  $: formType = FORM_TYPE.LOGIN; // login, register, or forget password
  $: pwType = PASSWORD_TYPE.PASSWORD; // password or text

  $: config = (() => {
    const result = {};

    switch (formType) {
      case FORM_TYPE.LOGIN:
        result.title = 'Login';
        result.btnText = 'Login';
        result.tips = 'Don’t have an account yet?';
        result.tipsBtn = 'Register';
        break;
      case FORM_TYPE.REGISTER:
        result.title = 'Register';
        result.btnText = 'Register';
        result.tips = 'Already have an account?';
        result.tipsBtn = 'Login';
        break;
      case FORM_TYPE.FORGET_PASSWORD:
        result.title = 'Forget Password';
        result.btnText = 'Send';
        result.tips = 'Already have an account?';
        result.tipsBtn = 'Login';
        break;
      default:
        break;
    }

    return result;
  })();

  $: apiLoading = false;

  const togglePasswordType = () => {
    pwType = pwType === PASSWORD_TYPE.PASSWORD ? PASSWORD_TYPE.TEXT : PASSWORD_TYPE.PASSWORD;
  };

  const toggleFormType = (target) => {
    formType = target;
    pwType = PASSWORD_TYPE.PASSWORD;
    username = '';
    password = '';
  };

  const onBtnConfirm = () => {
    formClsName = 'was-validated';

    if (!username || !password) return;

    apiLoading = true;

    if (formType === FORM_TYPE.REGISTER) {
      http({
        url: '/register',
        method: 'POST',
        data: {
          username,
          password,
        },
      }).then(() => {
        event.emit(EVENTS.ALERT, {
          show: true,
          status: ALERT_STATUS.SUCCESS,
          message: 'Register success, please login',
        });
        formType = FORM_TYPE.LOGIN;
        pwType = PASSWORD_TYPE.PASSWORD;
      }).catch((error) => {
        console.error('register error', error);
      }).finally(() => {
        apiLoading = false;
      });
    } else if (formType === FORM_TYPE.LOGIN) {
      http({
        url: '/login',
        method: 'POST',
        data: {
          username,
          password,
        },
      }).then((response) => {
        localStorage.setItem(STORAGE_LOGIN_INFO, JSON.stringify(response));
        event.emit(EVENTS.ALERT, {
          show: true,
          status: ALERT_STATUS.SUCCESS,
          message: 'Login success',
        });

        setTimeout(() => {
          location.href = '/';
        }, 1000);
      }).catch((error) => {
        console.error('login error', error);
      }).finally(() => {
        apiLoading = false;
      });
    }
  };

  const onShow = () => {
    show = true;
  }

  const onClose = () => {
    show = false;
  }

  // TODO
  // const goForgetPassword = () => {
  //   toggleFormType(FORM_TYPE.FORGET_PASSWORD);
  // };

  onMount(() => {
    event.on(EVENTS.AUTH_SHOW, onShow);
    
    return () => {
      event.off(EVENTS.AUTH_SHOW, onShow);
    };
  });
</script>

{#if show}
  <Mask onClose={onClose}>
    <div class='wrapper'>
      <header class='auth-header'>
        <img alt='logo' src='http://images.handytool.store/96x96.png' class='auth-logo' />

        <h3 class='auth-title'>{config.title}</h3>
      </header>

      <form id='auth' class={`auth-form ${formClsName}`} novalidate>
        <div class='form-row'>
          <label for='username' class='form-label form-label-text'>Username</label>
          <input
            required
            type='text'
            class='form-control form-control-input'
            id='username'
            placeholder='Your Username'
            disabled={apiLoading}
            bind:value={username}
            on:input={() => { formClsName = '' }}
          />
          <p class='invalid-feedback'>Username is required.</p>
        </div>

        {#if formType !== FORM_TYPE.FORGET_PASSWORD}
          <div class='form-row'>
            <label for='password' class='form-label form-label-text'>Password</label>
            <div class='form-password-group'>
              {#if pwType === PASSWORD_TYPE.PASSWORD}
                <input
                  type='password'
                    required
                    class='form-control form-control-input'
                    id='password'
                    placeholder='Your Password'
                    disabled={apiLoading}
                    bind:value={password}
                    on:input={() => { formClsName = '' }}
                  />
              {:else if pwType === PASSWORD_TYPE.TEXT}
                <input
                  type='text'
                    required
                    class='form-control form-control-input'
                    id='password'
                    placeholder='Your Password'
                    disabled={apiLoading}
                    bind:value={password}
                    on:input={() => { formClsName = '' }}
                  />
              {/if}
              <p class='invalid-feedback'>Password is required.</p>
              <i class={`iconfont-header icon-header-eye${pwType === 'password' ? '-close' : ''} icon-eye`} on:click={togglePasswordType}></i>
            </div>
          </div>
        {/if}

        <!-- TODO -->
        <!-- {#if formType === FORM_TYPE.LOGIN}
          <div class='form-row form-action'>
            <div class='remember-me'>
              <input class='' type='checkbox' value='' id='rememberMe'>
              <label class='' for='rememberMe'>
                Remember Me
              </label>
            </div>

            <button class='btn btn-link tips-btn' type='button' on:click={goForgetPassword}>Forget Password?</button>
          </div>
        {/if} -->

        <div class='form-row'>
          <ExecuteBtn
            style='box-shadow: 0 20px 20px rgb(61 82 160 / 20%)'
            text={config.btnText}
            onConfirm={onBtnConfirm}
            disabled={apiLoading}
            loading={apiLoading}
          />
        </div>
      </form>

      <p class='tips'>{config.tips} <button class='btn btn-link tips-btn' type='button' on:click={() => toggleFormType(formType === FORM_TYPE.LOGIN ? FORM_TYPE.REGISTER : FORM_TYPE.LOGIN)}>{config.tipsBtn}</button></p>
    </div>
  </Mask>
{/if}

<style>
.wrapper {
  width: 460px;
  padding: 24px;
  border-radius: 14px;
  background-color: var(--white);
}

.auth-header {
  text-align: center;
}

.auth-logo {
  width: 48px;
  height: 48px;
}

.auth-title {
  margin-top: 15px;
  font-weight: bold;
}

.auth-form {
  margin-top: 30px;
}

.form-row + .form-row {
  margin-top: 20px;
}

.form-label-text {
  font-size: 12px;
  font-weight: bold;
}

.form-control-input {
  font-size: 14px;
}

.form-password-group {
  position: relative;
}

.icon-eye {
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0.6;
  transition: all .3s ease;
  cursor: pointer;
  transform: translate(-50%, -20%);
  margin-top: 11px;
}

.icon-eye:hover {
  opacity: 1;
}

.was-validated .icon-eye {
  margin-right: 20px;
}

.form-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
}

.remember-me {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
}

.remember-me label {
  margin-left: 5px;
}

.tips-btn {
  font-size: 12px;
  text-decoration: none;
  padding: 0;
  border: none;
  vertical-align: baseline;
  line-height: 1;
}

.tips {
  opacity: .8;
  font-size: 12px;
  margin-top: 30px;
  text-align: center;
}
</style>
