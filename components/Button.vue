<template lang="">
  <input
    type="submit"
    class="btn btn-primary"
    data-toggle="button"
    aria-pressed="false"
    autocomplete="off"
    :value="buttonData.title"
  />
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
  background-color: #076abe;
  border: none;
  width: 200px;
  height: 60px;
  border-radius: 50px;
  font-size: 22px;
}
</style>
