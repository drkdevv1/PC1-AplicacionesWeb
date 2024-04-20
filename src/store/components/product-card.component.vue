<script>
import { Product } from '../models/product.entity.js'
export default {
  name:"ProductCard",
  props:{
    product: Product,
  },
};
</script>

<template>
  <pv-card class="card" style="width: 300px; overflow: hidden">
    <template #title><h3>{{ product.flavorName}}</h3></template>

    <template #subtitle>
      <h4>Ingredients:</h4>
      <li v-for="ingredient in product.ingredients" :key="ingredient">{{ ingredient }}</li>
    </template>
    <template #content>
      <p>Gluten Free:
        <i v-if="product.glutenFree" class="pi pi-check" style="color: green;"></i>
        <i v-else class="pi pi-times" style="color: red;"></i>
      </p>
      <p>Sugar Free:
        <i v-if="product.sugarFree" class="pi pi-check" style="color: green;"></i>
        <i v-else class="pi pi-times" style="color: red;"></i>
      </p>
      <p>Seasonal:
        <i v-if="product.seasonal" class="pi pi-check" style="color: green;"></i>
        <i v-else class="pi pi-times" style="color: red;"></i>
      </p>
      <p>Kosher:
        <i v-if="product.kosher" class="pi pi-check" style="color: green;"></i>
        <i v-else class="pi pi-times" style="color: red;"></i>
      </p>
      <img :src="product.imageUrl" alt="Image"/>
    </template>
    <template #footer>
      <p>Group</p>
      <p v-for="groupname in product.groupName" :key="groupname">{{ groupname }}</p>
    </template>
  </pv-card>
</template>

<style scoped>
.card {
  padding-top: 10px;
  max-width: 300px;
  overflow: hidden;
  margin-bottom: 30px;
  border-radius: 20px;
  text-align: center;
}
.card img{
  max-width: 300px;
  border-radius: 22px;
}
</style>