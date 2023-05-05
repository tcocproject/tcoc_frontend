import { defineComponent } from "vue" import { defineComponent } from "vue"

<template lang="">
  <div></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup(props, context) {
    function makeToast(this: any, message: string) {
      ;(this as any).$bvToast.toast(`${message}`, {
        title: 'Error',
        variant: 'danger',
        autoHideDelay: 5000,
        appendToast: true,
        toaster: 'b-toaster-top-right',
      })
    }
    ;(context as any).expose({ makeToast })
  },
})
</script>
<style lang=""></style>
