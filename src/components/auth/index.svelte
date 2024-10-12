<script>
  import { BeForm, BeFormItem } from '@brewer/beerui/be-form';
  import BeInput from '@brewer/beerui/be-input';
  import Mask from '../mask/index.svelte';
  import ExecuteBtn from '../execute-btn/index.svelte';
  import http from '../../utils/http';
  import { STORAGE_LOGIN_INFO } from '../../constant/storage';
  import event from '../../utils/event';
  import { EVENTS } from '../../constant/events';
  import { ALERT_STATUS } from '../../constant/status';
  import { onMount } from 'svelte';
  import { t } from 'svelte-i18n';

  const FORM_TYPE = {
    LOGIN: 'login',
    REGISTER: 'register',
    FORGET_PASSWORD: 'forgetPassword',
  };

  const PASSWORD_TYPE = {
    PASSWORD: 'password',
    TEXT: 'text',
  };

  const initFormData = {
    username: '',
    password: '',
  };
  const errorMsg = {
    username: $t('usernameInputErrorTips'),
    password: $t('passwordInputErrorTips')
  };
  const apiUrl = {
    [FORM_TYPE.REGISTER]: '/register',
    [FORM_TYPE.LOGIN]: '/login',
  }

  $: show = false;

  let formData = { ...initFormData };
  let formRules = {
    username: [
      { required: true, message: $t('usernameInputErrorTips'), trigger: 'change' },
    ],
    password: [
      { required: true, message: $t('passwordInputErrorTips'), trigger: 'change' },
    ]
  };

  let formRef = null;

  $: formType = FORM_TYPE.LOGIN; // login, register, or forget password
  $: pwType = PASSWORD_TYPE.PASSWORD; // password or text

  $: config = (() => {
    const result = {};

    switch (formType) {
      case FORM_TYPE.LOGIN:
        result.title = $t('Login');
        result.btnText = $t('Login');
        result.tips = $t('loginTips');
        result.tipsBtn = $t('Register');
        break;
      case FORM_TYPE.REGISTER:
        result.title = $t('Register');
        result.btnText = $t('Register');
        result.tips = $t('haveAccount');
        result.tipsBtn = $t('Login');
        break;
      case FORM_TYPE.FORGET_PASSWORD:
        result.title = $t('forgetPassword');
        result.btnText = $t('Send');
        result.tips = $t('haveAccount');
        result.tipsBtn = $t('Login');
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
    formData = { ...initFormData };
  };

  const onBtnConfirm = () => {
    if (!formData.username || !formData.password) {
      let msg = '';

      if (!formData.username) {
        msg = errorMsg.username;
      } else if (!formData.password) {
        msg = errorMsg.password;
      }

      event.emit(EVENTS.ALERT, {
        show: true,
        message: msg,
        status: ALERT_STATUS.ERROR,
      });
      return;
    }

    apiLoading = true;

    formRef.validate(valid => {
      if (!valid) return false;

      http({
        url: apiUrl[formType],
        method: 'POST',
        data: formData,
      }).then(response => {
        if (formType === FORM_TYPE.REGISTER) {
          event.emit(EVENTS.ALERT, {
            show: true,
            status: ALERT_STATUS.SUCCESS,
            message: $t('registerSuccessTips'),
          });
          formType = FORM_TYPE.LOGIN;
          pwType = PASSWORD_TYPE.PASSWORD;
        } else if (formType === FORM_TYPE.LOGIN) {
          localStorage.setItem(STORAGE_LOGIN_INFO, JSON.stringify(response));
          event.emit(EVENTS.ALERT, {
            show: true,
            status: ALERT_STATUS.SUCCESS,
            message: $t('loginSuccessTips'),
          });
  
          setTimeout(() => {
            location.href = '/';
          }, 1000);
        }
      }).catch((error) => {
        console.error('login error', error);
      }).finally(() => {
        apiLoading = false;
      });
    });
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

  const labelPosition = 'top'
</script>

{#if show}
  <Mask onClose={onClose}>
    <div class='auth-wrapper'>
      <header class='auth-header'>
        <img alt='logo' src='http://images.handytool.store/96x96.png' class='auth-logo' />

        <h3 class='auth-title'>{config.title}</h3>
      </header>

      <div class='auth-form'>
        <BeForm
          bind:model={formData}
          bind:rules={formRules}
          bind:this={formRef}
          {labelPosition}
        >
          <BeFormItem label={$t('Username')}>
            <BeInput
              placeholder={$t('usernamePlaceholder')}
              disabled={apiLoading}
              bind:value={formData.username}
            />
          </BeFormItem>

          {#if formType !== FORM_TYPE.FORGET_PASSWORD}
            <BeFormItem label={$t('Password')}>
              {#if pwType === PASSWORD_TYPE.PASSWORD}
                <BeInput
                  placeholder={$t('passwordPlaceholder')}
                  disabled={apiLoading}
                  type='password'
                  bind:value={formData.password}
                />
              {:else if pwType === PASSWORD_TYPE.TEXT}
                <BeInput
                  placeholder={$t('passwordPlaceholder')}
                  disabled={apiLoading}
                  type='text'
                  bind:value={formData.password}
                />
              {/if}
              <i class={`iconfont-header icon-header-eye${pwType === 'password' ? '-close' : ''} icon-eye`} on:click={togglePasswordType}></i>
            </BeFormItem>
          {/if}

          <BeFormItem>
            <ExecuteBtn
              style='box-shadow: 0 20px 20px rgb(61 82 160 / 20%)'
              text={config.btnText}
              onConfirm={onBtnConfirm}
              disabled={apiLoading}
              loading={apiLoading}
            />
          </BeFormItem>
        </BeForm>
      </div>

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

      <p class='tips'>{config.tips} <a href='javascript:;' class='tips-btn' type='button' on:click={() => toggleFormType(formType === FORM_TYPE.LOGIN ? FORM_TYPE.REGISTER : FORM_TYPE.LOGIN)}>{config.tipsBtn}</a></p>
    </div>
  </Mask>
{/if}

<style global lang='scss'>
.auth-wrapper {
  width: 460px;
  padding: 24px;
  border-radius: 14px;
  background-color: var(--white);

  .be-form-item__label {
    line-height: 1;
    font-size: 12px;
    font-weight: 700;
  }

  .be-form {
    width: 100%;
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

  .icon-eye {
    position: absolute;
    right: 5px;
    top: 50%;
    opacity: 0.6;
    transition: all 0.3s ease;
    cursor: pointer;
    height: 16px;
    line-height: 1;
    transform: translateY(-50%);
  }

  .icon-eye:hover {
    opacity: 1;
  }

  // .remember-me {
  //   display: flex;
  //   justify-content: flex-start;
  //   align-items: center;
  //   margin: 0;
  // }

  // .remember-me label {
  //   margin-left: 5px;
  // }

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
    margin-top: 8px;
    text-align: center;
  }
}
</style>
