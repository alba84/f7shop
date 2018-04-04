<template>
  <f7-page>
    <f7-navbar>
      <!-- f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left -->
      <f7-nav-title>Broccoli</f7-nav-title>
      <!-- f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right -->
    </f7-navbar>

    <f7-block strong>
      <p>Here is your blank Framework7 app. Let's see what we have here.</p>
      <f7-icon icon="icon-home"></f7-icon>
    </f7-block>
    <f7-block-title>Navigation</f7-block-title>
    <f7-list>
      <f7-list-item link="/" title="Main"></f7-list-item>
      <f7-list-item link="/profile/" title="Profile"></f7-list-item>
      <f7-list-item link="/basket/" title="Basket"></f7-list-item>
      <f7-list-item link="/want/" title="Want"></f7-list-item>
      <f7-list-item link="/form/" title="Form"></f7-list-item>
    </f7-list>
    <f7-block-title>Modals</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised popup-open="#popup">Popup</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised login-screen-open="#login-screen">Login Screen</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-list>
      <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></f7-list-item>
      <f7-list-item link="/load-something-that-doesnt-exist/" title="Default Route (404)"></f7-list-item>
    </f7-list>

  </f7-page>
</template>
<script>
export default {}
</script>
