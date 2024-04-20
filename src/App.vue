<script>
import FooterComponent from './public/components/footer-component.component.vue';
import ProductCard from "./store/components/product-card.component.vue";
import ProductCardList from "./store/components/product-list.component.vue";
import {JellyBeanApiService} from "@/store/services/jellybeanapi.service.js";

export default {
  name:'App',
  components:{
    FooterComponent,
    ProductCard,
    ProductCardList
  },
  data(){
    return{
      products:[],
      errors:[],
      productsApi: new JellyBeanApiService(),
    };
  },
  created() {
    this.getProductCard();
  },
  methods:{
    getProductCard(){
      this.productsApi.getCardInfo().then((response)=>{
        if(response.data && response.data.items){
          this.products = response.data.items;
        } else {
          console.error(response.data);
        }
      }).catch((error)=>{
        this.errors.push(error);
      });
    },
  },
};
</script>

<template>
  <pv-toolbar class="c-toolbar">
    <template #center>
      <h1>Jelly Bean Peru Store</h1>
    </template>
  </pv-toolbar>
  <!-- Cards -->
  <product-card-list :products="products"></product-card-list>
  <footer-component/>
</template>


<style>
.c-toolbar {
  width: 100%;
  background-color: #e32929;
  color: #fff300;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 0.5rem 1rem;
}
</style>