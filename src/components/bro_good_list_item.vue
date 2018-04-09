<template>
    <li class="card good-list-item" :id="'item-'+item.id">
        <div class="card-header"> <!--  :style="bgpicture" -->
            <img class="lazy" :data-src="item.picture" :src="item.pre_picture" :alt="item.name">
        </div>
        <div class="card-content card-content-padding">
            {{item.name}}
        </div>
        <div class="card-footer">
            <div class="buttons theme-orange">
                <a href="#" class="button active">Button 1</a>
                <a href="#" class="button">Button 2</a>
            </div>
        </div>
    </li>

    <!-- f7-card class="good-list-item">
        <f7-card-header class="color-white no-border"></f7-card-header>
        <f7-card-content>{{name}}</f7-card-content>
        <f7-card-footer></f7-card-footer>
    </f7-card -->

</template>
<style>
/*.good-list-item {
  
}
.good-list-item .card-header {
    height: 80vw;
    background-size: cover;

    /*background-image: url(cat.png);* /
    background-position: 50% 50%;
    background-repeat: no-repeat; 
}*/
.good-list-item .card-header{ 
    width: 95vw; 
    height: 95vw; 
    overflow:hidden; 
    float:left;  
    border: 1px solid #CCC;
    position: relative;
}
.good-list-item .card-header img {
    width:100%;
    height:100%; 
    position: absolute; 
    top: 0; 
    right: 0; 
    bottom: 0; 
    left: 0; 
    margin: auto; 
}
</style>
<script>
export default {
    props: {initItem: Object},
    data: function(){
        return {
            item: this.initItem
        };
    }, 
    computed: {
        bgpicture: function(){
            return 'background-image: url('+this.item.pre_picture+');'
        }
    }

};
</script>
