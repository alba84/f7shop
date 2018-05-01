<template>
    <div v-if="available" class="segmented segmented-raised">
        <button class="button decrement" v-on:click.stop="decrement">-</button>
        <button class="button button-active buy">{{quantity}} {{measure}} {{total_price | currency(0)}}</button>
        <button class="button increment" v-on:click.stop="increment">+</button>
    </div>  
    <div v-else class="segmented segmented-raised">
        <button v-if="traced && receipt" class="button">Скоро поступление</button>
        <button v-else class="button not-available">Под заказ</button>
    </div>  
</template>

<script>
export default {
    props: {
        good_id:    {type: Number},
        available:  {type: Boolean},
        traced:     {type: Boolean},
        receipt:    {type: Boolean},
        rest:       {type: Number},
        price:      {type: Number},
        ratio:      {default: 1, type: Number},
        measure:    {default: 'шт', type: String}
    },
    data: function(){
        return {
            quantity:   this.ratio || 1,
        };
    },
    computed: {
        total_price: function(){
            return this.price * this.quantity
        }
    },
    methods: {
        decrement: function(){
            this.quantity -= this.ratio;
            if(this.quantity < this.ratio)
                this.quantity = this.ratio;
        },
        increment: function(){
            if(this.traced && !(this.quantity < this.rest))
                return;
            this.quantity += this.ratio;
        }
    }
};
</script>
