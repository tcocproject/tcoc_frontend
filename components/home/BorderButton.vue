<template lang="">
  <button
    type="button"
    class="btn btn-primary"
    data-toggle="button"
    aria-pressed="false"
    autocomplete="off"
  >
    {{ buttonData.title }}
  </button>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Button from '~/types/button'

export default defineComponent({
  props: {
    buttonData: {
      required: true,
      type: Object as PropType<Button>,
    },
  },
})
</script>
<style scoped>
.btn-primary {
  border: 1px solid #076abe;
  border: none;
  width: 195px;
  height: 60px;
  border-radius: 50px;
  font-size: 22px;
}
</style>
