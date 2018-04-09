// Import Vue
import Vue from 'vue';

// Import F7
import Framework7 from 'framework7/dist/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';

// Import F7 Styles
import Framework7Styles from 'framework7/dist/css/framework7.css';
import Framework7MDStyles from 'framework7/dist/css/framework7.md.min.css';

//<link rel="stylesheet" href="path/to/framework7.material.min.css">
//<link rel="stylesheet" href="path/to/framework7.material.colors.min.css">

// Import Icons and App Custom Styles
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './app';

// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7)

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    id: 'io.freshbroccoli', // App bundle ID
    name: 'Freshbroccoli', // App name
    theme: 'auto', // Automatic theme detection
    // App routes
    routes: Routes,
    toolbar: {
      hideOnPageScroll: false,
    },
    material:true,
    pushState: true,
    /*preroute: function (view, options) {
      if (!userLoggedIn()) {
          alert('Hi!');// view.router.loadPage('auth.html'); //load another page with auth form
          return false; //required to prevent default router action
      }
    }*/
  },
  // Register App Component
  components: {
    app: App
  }
});
