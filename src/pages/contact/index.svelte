<script>
  import Layout from '../../components/layout/index.svelte';
  import mailbox from '../../assets/images/mailbox.png'
</script>

<Layout>
  <main class='wrapper common-background'>
    <div class='container-fluid container-biz inner-wrapper'>
      <div class='contact-item'>
        <form id='contact'>
          <div class='contact-row'>
            <div class='contact-name-wrapper'>
              <label for='name' class='form-label'>Name</label>
              <input id='name' class='form-control contact-name' type='text' placeholder='Your Name' />
            </div>
            <div class='contact-email-wrapper'>
              <label for='email' class='form-label'>Email</label>
              <input id='email' class='form-control contact-email' type='text' placeholder='example@mail.com' />
            </div>
          </div>

          <div class='contact-row'>
            <div class='contact-comment-wrapper'>
              <label for='comments' class='form-label'>Comments</label>
              <textarea id='comments' class='form-control contact-comments' placeholder='Your Thoughts' />
            </div>
          </div>

          <div class='contact-row'>
            <button class='btn-send' type='button'>Send</button>
          </div>
        </form>
      </div>

      <div class='contact-item contact-right'>
        <h6 class='mini-title'>Contact Us</h6>
        <h3>How can we help?</h3>
        <img src={mailbox} alt='mailbox' width="410" height="380" class='contact-img' />
      </div>
    </div>
  </main>
</Layout>

<style>
.wrapper {
  height: 100%;
}

.inner-wrapper {
  display: flex;
  align-items: center;
  height: 100%;
}

.contact-item {
  flex: 1;
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

.contact-comments {
  height: 150px;
  resize: none;
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
</style>
