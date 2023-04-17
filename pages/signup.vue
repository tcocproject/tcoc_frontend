<template lang="">
  <div>
    <div class="split left">
      <b-img src="../assets/images/lady_signup.svg"></b-img>
    </div>

    <div class="split right">
      <div class="heading">
        <b-img class="logo" src="../assets/images/logo.svg"> </b-img>
        <BorderButton :buttonData="buttonData" />
      </div>
      <h5>Create your employer account</h5>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <label for="firstname">First Name *</label>
            <input type="text" name="" id="" class="form-control" />
            <label for="firstname">Email *</label>
            <input type="text" name="" id="" class="form-control" />
            <label for="firstname">Company name </label>
            <input type="text" name="" id="" class="form-control" />
          </div>
          <div class="col-lg-6">
            <label for="firstname">LastName Name *</label>
            <input type="text" name="" id="" class="form-control" />
            <label for="firstname">Phone number *</label>
            <input type="text" name="" id="" class="form-control" />
            <label for="firstname">Country</label>
            <input type="text" name="" id="" class="form-control" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

import Button from '../types/button'

export default defineComponent({
  setup() {
    const buttonData = ref<Button>({
      title: 'Continue',
      hasBackground: false,
    })

    return { buttonData }
  },
})
</script>
<style scoped>
.heading {
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
}
.split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
}

.left {
  left: 0;
  background-color: #111;
}
img {
  width: 80%;
}
.right {
  right: 0;
}
.logo {
  width: 120px;
}
</style>
