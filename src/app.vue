<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <!-- f7-panel left reveal theme-dark>
      <f7-view url="/panel-left/"></f7-view>
    </f7-panel -->

    <!-- Right Panel -->
    <!-- f7-panel right cover theme-dark>
      <f7-view url="/panel-right/"></f7-view>
    </f7-panel -->

    <!-- Main View -->
    <f7-view id="main-view" url="/" main>
        <!-- Tabs.vue -->
        <f7-toolbar tabbar bottom-md labels  class="bg-color-white">
            <f7-link icon-f7="person"   text="Профиль"      route-tab-link="#profilepage"   href="/profile/"></f7-link>
            <f7-link icon-f7="home"     text="Главная"      route-tab-link="#homepage"      href="/"></f7-link>
            <f7-link icon-f7="search"   text="Поиск"        popup-open="#popup"></f7-link>
            <f7-link icon-f7="bag"      text="Корзина"      route-tab-link="#basketpage"    href='/basket/'></f7-link>
            <f7-link icon-f7="bolt"     text="Хочу"         route-tab-link="#wantpage"      href='/want/'></f7-link>
        </f7-toolbar>

        <f7-tabs>
            <f7-tab route-tab-id="profilepage" />
            <f7-tab route-tab-id="homepage" />
            <f7-tab route-tab-id="basketpage" />
            <f7-tab route-tab-id="wantpage" />
        </f7-tabs>
    </f7-view>

    <!-- Popup -->
    <f7-popup id="popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close icon-f7="close"></f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>

    <bro-login-screen></bro-login-screen>

  </div>
</template>

<script>
import broLoginScreen from './components/bro_login_screen'
export default {
    /*created: function () {
        this.$store.dispatch('init')
    },*/
    components: {
         'bro-login-screen': broLoginScreen
    }
}
</script>
