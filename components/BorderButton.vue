<template lang="">
  <nuxt-link :to="buttonData.link">
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="button"
      aria-pressed="false"
      autocomplete="off"
    >
      {{ buttonData.title }}
    </button>
  </nuxt-link>
</template>
<script lang="ts">
import { PropType } from 'vue';
import Button from '~/types/button';

export default {
  props: {
    buttonData: {
      required: true,
      type: Object as PropType<Button>,
    },
  },
}
</script>
<style scoped>
.btn-primary {
  border: 1px solid #076abe;
  background-color: white;
  color: #076abe;
  width: 190px;
  height: 58px;
  border-radius: 50px;
  font-size: 22px;
}
</style>
