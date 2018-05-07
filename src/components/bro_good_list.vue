<template>
    <div class="list cards-list good-list">
        <ul>
            <bro-good-list-item v-for="item in items" :key="item.id" :initItem="item"></bro-good-list-item>
        </ul>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import broGoodListItem from './bro_good_list_item';
export default {
    components: {
        'bro-good-list-item': broGoodListItem
    },
    computed: mapGetters({
        items: 'hit'
    }),
    created () {
        this.$store.dispatch('getHit');
    },
    updated () {
        var self = this;

        this.$nextTick(() => {
            var elements = document.querySelectorAll("div.lazy");

            elements.forEach(image => {
                self.$f7.lazy.create(image); 
            });
        })
    },  
}
</script>
