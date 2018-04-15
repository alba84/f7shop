<template>
  <f7-page infinite infinitePreloader>
    <!-- f7-navbar class="bg-color-white">
      <f7-nav-title>Broccoli</f7-nav-title>
    </f7-navbar -->

    <f7-searchbar 
        cancel-link="Отмена"
        placeholder="Найти наименование"
        :clear-button="true"
        :no-shadow="true"
        :customSearch="true"
        @searchbar:search="onSearch"
        @searchbar:enable="onEnable"
        @searchbar:disable="onDisable"
        @searchbar:clear="onClear"
    ></f7-searchbar>

    <bro-good-list></bro-good-list>

  </f7-page>
</template>
<script>
import broGoodList from '../components/bro_good_list';

export default {
    components: {
        'bro-good-list': broGoodList
    },
    methods: {
      onSearch: function (query, found) {
        console.log('search', query);
      },
      onClear: function (event) {
        console.log('clear');
      },
      onEnable: function (event) {
        console.log('enable');
      },
      onDisable: function (event) {
        console.log('disable');
      },
    }
}
</script>
