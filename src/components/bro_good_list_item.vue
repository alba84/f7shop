<template>
    <li class="card good-list-item" :id="'item-'+item.id">
        <div class="card-header lazy lazy-fade-in" :data-background="item.picture"></div>
        <div class="card-content card-content-padding">
            <h3>{{item.name}}</h3>
            <p>{{item.infoves}}</p>
            <p>Цена за {{item.measure_symbol}} - {{item.price | currency(0)}}</p>
        </div>
        <div class="card-footer">
            <bro-add-to-basket
                :good_id="item.id"
                :available="item.available"
                :traced="item.traced"
                :receipt="item.traced_receipt_in"
                :rest="item.quantity"
                :price="item.price"
                :ratio="item.measure_ratio"
                :measure="item.measure_symbol"
            ></bro-add-to-basket>
        </div>
    </li>
</template>
<style>
.good-list ul {
    display: flex;
    flex-wrap:wrap;
    align-content:space-around;
}
li.good-list-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    flex-shrink: 3;
    flex-basis: 40%;
    list-style:none; 
    width: 40%;
}
li.good-list-item .card-header {
    height: 40vw;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat; 
    background-color:lightgray;
}
li.good-list-item .card-content { 
    flex-grow: 1;
}
li.good-list-item .card-footer::before {
    height:0px;
}
li.good-list-item .card-footer  {
    padding: 0px;
    min-height: 1px;
    max-height: 36px;
    height: 36px;
}

li.good-list-item .card-footer .segmented {

    border-radius: 3px;
    width: 100%;
    border: 1px #649203 solid;
}
    li.good-list-item .card-footer .segmented button {
        width:15%;
        text-transform:none;
        min-width: 15px;
        padding: 0;
        border: none;
    }

    li.good-list-item .card-footer .segmented button.buy {
        width:70%
    }

    li.good-list-item .card-footer .segmented button.not-available {
        width:100%
    }
li.good-list-item .card-footer .segmented.segmented-raised {
    -webkit-box-shadow: none;
    box-shadow: none;
}


</style>
<script>
import btnAddToBasket from './bro_btn_add_to_cart.vue';
export default {
    props: {
        initItem: Object
    },
    data: function(){
        return {
            item: this.initItem,
            to_basket: this.initItem.measure_ratio,
            measure: this.initItem.measure_symbol,
        };
    },
    computed: {
        price: function(){
            return this.item.price * this.to_basket
        }
    },
    methods: {
        decrement: function(){
            console.log('Decrement');
        },
        increment: function(){

            if(this.item.traced && !(this.to_basket < this.item.quantity))
                return;
            
            this.to_basket += this.item.measure_ratio;
        }
    },
    components: {
         'bro-add-to-basket': btnAddToBasket
    }
};
</script>
