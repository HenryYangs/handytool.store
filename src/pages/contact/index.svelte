<script>
  import Layout from '../../components/layout/index.svelte';
  import mailbox from '../../assets/images/mailbox.png'
  import { BeForm, BeFormItem } from '@brewer/beerui/be-form';
  import BeInput from '@brewer/beerui/be-input';
  import BeTextarea from '@brewer/beerui/be-textarea';
  import BeButton from '@brewer/beerui/be-button';
</script>

<Layout>
  <main class='contact-wrapper common-background layout-center'>
    <div class='container-biz layout-center'>
      <div class='contact-item'>
        <BeForm labelPosition='top' class='contact-form'>
          <div class='contact-row'>
            <BeFormItem label='Name' class='contact-name-wrapper'>
              <BeInput id='name' class='contact-name' type='text' placeholder='Your Name' />
            </BeFormItem>

            <BeFormItem label='Email' class='contact-email-wrapper'>
              <BeInput id='email' class='contact-name' type='email' placeholder='example@mail.com' />
            </BeFormItem>
          </div>

          <div class='contact-row'>
            <BeFormItem label='Comments' class='contact-comment-wrapper'>
              <BeTextarea id='comments' class='contact-comments' placeholder='Your Thoughts'></BeTextarea>
            </BeFormItem>
          </div>

          <div class='contact-row'>
            <BeButton class='btn-send' type='button'>Send</BeButton>
          </div>
        </BeForm>
      </div>

      <div class='contact-item contact-right'>
        <h6 class='mini-title'>Contact Us</h6>
        <h3>How can we help?</h3>
        <img src={mailbox} alt='mailbox' width="410" height="380" class='contact-img' />
      </div>
    </div>
  </main>
</Layout>

<style global lang='scss'>
.contact-wrapper {
  height: 100%;

  .inner-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
  }
  
  .contact-item {
    flex: 1;
  }

  .contact-form {
    width: 100%;
  }
  
  .contact-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  
  .contact-name-wrapper,
  .contact-email-wrapper {
    width: calc(50% - 20px);
  }
  
  .contact-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 50px 0;
  }
  
  .contact-comment-wrapper {
    width: 100%;
  }
  
  .btn-send {
    width: 80px;
    height: 40px;
    border: none;
    border-radius: 20px;
    color: var(--white);
    background-color: var(--theme-main-color);
  }
  
  .btn-send:hover {
    background-color: var(--theme-secondary-color);
  }
  
  .mini-title {
    color: var(--theme-main-color);
  }
  
  .contact-img {
    margin-top: 30px;
  }
}
</style>
