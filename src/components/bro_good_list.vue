<template>
    <div class="list cards-list good-list">
        <ul>
            <bro-good-list-item v-for="item in items" :key="item.id" :initItem="item"></bro-good-list-item>
        </ul>
    </div>
</template>
<script>
import broGoodListItem from './bro_good_list_item';
export default {
    components: {
        'bro-good-list-item': broGoodListItem
    },
    data: function(){
        return {
            items: [],
            offset: 0,
            limit: 30
        }
    },
    methods: {
        getGoodList: function(){
            var self = this;
            this.$request.json('/api/pwa/goods', { limit:this.limit, offset:this.offset }, function (data) {
                self.items = data;
            }, function(data){
                console.log('error', data)
            });
        }
    },
    created: function(){        
        this.getGoodList();
    },
    updated: function () {
        var self = this;

        this.$nextTick(function () {
            var elements = document.querySelectorAll("div.lazy");

            elements.forEach(function (image) {
                self.$f7.lazy.create(image); 
            });
        })
    }
}
</script>
