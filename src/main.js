// Импорт Vue
import Vue from 'vue';

// Импорт Vuex
//import Vuex from 'vuex';

// Импорт F7
import Framework7 from 'framework7/dist/framework7.esm.bundle.js';

// Импорт плагинов F7 Vue
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';

// Импорт стилей F7 
import Framework7Styles from 'framework7/dist/css/framework7.css';

// Импорт стилей F7 MD 
import Framework7MDStyles from 'framework7/dist/css/framework7.md.min.css';

// Импорт стилей иконок
import IconsStyles from './css/icons.css';

// Импорт кастомных стилей приложения
import AppStyles from './css/app.css';

// Импорт роутов
import Routes from './routes.js';

// Импорт хранилища
//import Store from './store.js';

// Импорт приложения
import App from './app';

import store from './store/store';

import { currency } from './currency';

// Фильтр для форматирования цен
Vue.filter('currency', currency);

// Инициализация Vue
//Vue.use(Vuex);

Vue.use(Framework7Vue, Framework7);

// Создание хранилища
//const store = new Vuex.Store(Store)

// Инициализация хранилища
new Vue({
    el: '#app',
    store,
    template: '<app/>',
    // Init Framework7 by passing parameters here
    framework7: {
        id:     'ru.freshbroccoli', // App bundle ID
        name:   'Freshbroccoli', // App name
        theme:  'auto', // Automatic theme detection
        // App routes
        routes: Routes,
        toolbar: {
            hideOnPageScroll: true,
        },
        material:true,
        /*preroute: function (view, options) {
        if (!userLoggedIn()) {
            alert('Hi!');// view.router.loadPage('auth.html'); //load another page with auth form
            return false; //required to prevent default router action
        }
        }*/
        on: {
            init: function () {
                //№2
                //console.log('App initialized');
            },
            pageInit: function () {
                //№3
                //console.log('Page initialized');            
            }
        },
        externalLinks: 	'.external',
    },
    created: function(){
        //№1
        //this.$store.dispatch('init', this);
        //console.log('Created');
    },
    methods: {
        onF7Ready(f7) {
            //№4
            //console.log('onF7Ready', f7);
            //this.$store.dispatch('init', );
            // do some f7 related logic
            //f7.dialog.alert('App initialized');
            //this.$store.dispatch('init');
            //console.log(this.$store);
            //console.log('this.$request', this.$request);
        }
    },
    // Register App Component
    components: {
        app: App
    }
});
