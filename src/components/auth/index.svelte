<script>
  import Mask from '../mask/index.svelte';
  import ExecuteBtn from '../execute-btn/index.svelte';
  import http from '../../utils/http';
  import { STORAGE_LOGIN_INFO } from '../../constant/storage';
  import event from '../../utils/event';
  import { EVENTS } from '../../constant/events';
  import { ALERT_STATUS } from '../../constant/status';

  export let onClose = () => {};
  export let onLoginSuccess = (response) => {};

  const FORM_TYPE = {
    SIGN_IN: 'signIn',
    SIGN_UP: 'signUp',
    FORGET_PASSWORD: 'forgetPassword',
  };

  const PASSWORD_TYPE = {
    PASSWORD: 'password',
    TEXT: 'text',
  };

  $: username = '';
  $: password = '';

  $: formClsName = '';
  $: formType = FORM_TYPE.SIGN_IN; // signIn, signUp, or forget password
  $: pwType = PASSWORD_TYPE.PASSWORD; // password or text

  $: config = (() => {
    const result = {};

    switch (formType) {
      case FORM_TYPE.SIGN_IN:
        result.title = 'Sign In';
        result.btnText = 'Sign In';
        result.tips = 'Don’t have an account yet?';
        result.tipsBtn = 'Sign Up';
        break;
      case FORM_TYPE.SIGN_UP:
        result.title = 'Sign Up';
        result.btnText = 'Sign Up';
        result.tips = 'Already have an account?';
        result.tipsBtn = 'Sign In';
        break;
      case FORM_TYPE.FORGET_PASSWORD:
        result.title = 'Forget Password';
        result.btnText = 'Send';
        result.tips = 'Already have an account?';
        result.tipsBtn = 'Sign In';
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

    if (formType === FORM_TYPE.SIGN_UP) {

    } else if (formType === FORM_TYPE.SIGN_IN) {
      apiLoading = true;
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
          message: 'Login Success',
        });
        onLoginSuccess(response);
      }).catch((error) => {
        console.error('catch error',error)
      }).finally(() => {
        apiLoading = false;
      });
    }
  };

  // TODO
  // const goForgetPassword = () => {
  //   toggleFormType(FORM_TYPE.FORGET_PASSWORD);
  // };
</script>

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
      <!-- {#if formType === FORM_TYPE.SIGN_IN}
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

    <p class='tips'>{config.tips} <button class='btn btn-link tips-btn' type='button' on:click={() => toggleFormType(formType === FORM_TYPE.SIGN_IN ? FORM_TYPE.SIGN_UP : FORM_TYPE.SIGN_IN)}>{config.tipsBtn}</button></p>
  </div>
</Mask>

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
