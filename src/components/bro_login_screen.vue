<template>
    <!-- Login Screen -->
    <f7-login-screen id="login-screen" class="broccoli">
      <f7-view>
        <f7-page login-screen>
          <f7-login-screen-title>Живи вкусно!</f7-login-screen-title>
          <f7-list form>
            <f7-list-item>
              <f7-input name="username" placeholder="Ваш логин" type="text"></f7-input>
            </f7-list-item>
            <f7-list-item>
              <f7-input name="password" type="password" placeholder="Ваш пароль"></f7-input>
            </f7-list-item>
          </f7-list>
          <f7-list>
            <f7-list-button title="Войти в кабинет" login-screen-close></f7-list-button>
            <f7-block-footer>
              <p>Продолжить без регистрации</p>
            </f7-block-footer>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>
</template>
<style>

.broccoli .page-content.login-screen-content {
    background-image: url(../../static/images/bg-login-40.jpg);
    background-size: cover;
    color: white;
}
.broccoli .item-inner .item-input-wrap{
    background: white;
    border-radius: 7px;
    padding: 7px;
    width: 100%;
}
</style>
<script>
export default {}
</script>
