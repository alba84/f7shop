<template>
  <f7-page>
    <f7-navbar title="Хочу" back-link="Back"></f7-navbar>
    <f7-block-title>Хочу</f7-block-title>
    <f7-block strong>
      <p>Тут все чего-то хотят. <f7-link back>Назад</f7-link></p>

      <p><f7-link href="http://ya.ru" class="external">Ya.ru</f7-link></p>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
    methods: {
        hello: function(){
            this.$f7.showPreloader();   
        }
    }
}
</script>