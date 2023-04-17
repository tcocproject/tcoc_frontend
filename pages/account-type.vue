<template lang="">
  <div>
    <div class="split left">
      <b-img src="../assets/images/lady_signup.svg"></b-img>
    </div>

    <div class="split right">
      <div class="heading">
        <b-img class="logo" src="../assets/images/logo.svg"> </b-img>
        <Button :buttonData="buttonData" />
      </div>
      <div class="centered">
        <h5>Are you a recruiter or a company</h5>
        <div class="choice-circle">
          <nuxt-link to="/signup">
            <div class="circle">
              <b-img src="../assets/images/recruiter.svg"> </b-img>
              <h5>Recruiter</h5>
            </div>
          </nuxt-link>
          <div class="circle">
            <b-img src="../assets/images/company.svg"> </b-img>
            <h5>Company</h5>
          </div>
        </div>

        <div class="button">
          <Button :buttonData="buttonData" />
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
.button {
  margin-top: 80px;
}
.choice-circle {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.circle h5 {
  margin-top: 80px;
}
.circle {
  width: 120px;
  height: 120px;
  background: #ebf3fa;
  border-radius: 50%;
  padding-top: 30px;
  margin-bottom: 40px;
}

.circle img {
  width: 50px;
}
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
.centered {
  position: absolute;
  top: 25%;
  left: 45%;
  width: 50%;
  transform: translate(-50%, -5%);
  text-align: center;
}
</style>
