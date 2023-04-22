import { PropType } from 'vue' import { PropType } from
'vue/types/v3-component-props'
<template lang="">
  <div class="shadow p-3 mb-5 bg-white rounded text-center ">
 
    <img :src="require('../../assets/images/'+cardData.image + '')" alt=""></img> <br />
    <strong> {{ cardData.heading }}</strong>
    <p>{{ cardData.description }}</p>

  </div>
</template>
<script lang="ts">
import { PropType } from 'vue';
import CardData from '~/types/card';
export default {
  props: {
    cardData: {
      required: true,
      type: Object as PropType<CardData>,
    },
  },
}
</script>
<style scoped>
div{
  height:250px;
}
</style>
