<template lang="">
  <div>
    <div class="split left">
      <div class="heading">
        <b-img class="logo" src="../assets/images/logo.svg"> </b-img>
      </div>
      <div class="form-container">
        <br />
        <hr />
        <h4>Confirm account</h4>
        <br />
        <h6>Enter the verification code sent to you</h6>
        <br />
        <div class="row">
          <div class="col-lg-12 col-sm-12">
            <div style="width: 100px">
              <v-otp-input
                ref="otpInput"
                input-classes="otp-input"
                separator="-"
                :num-inputs="4"
                :should-auto-focus="true"
                :is-input-num="true"
              />
            </div>
            <WideButton :buttonData="buttonData[0]" />
            <p>Code is timed out <nuxt-link to="">Resend OTP</nuxt-link></p>
          </div>
        </div>
      </div>
    </div>

    <div class="split right">
      <b-img src="../assets/images/login_image.svg" class="lady"></b-img>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import Button from '../types/button'
export default {
  layout: 'empty',
  setup() {
    const buttonData = ref<Button[]>([
      {
        title: 'Confirm',
        hasBackground: false,
        link: '',
      },
    ])

    return { buttonData }
  },
}
</script>
<style scoped>
.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 20px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.back-to-login {
  position: fixed;
  left: 22%;
  bottom: 23px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  font-size: 22px;
}
.field-icon {
  float: right;
  margin-left: -20px;
  margin-top: -70px;
  margin-right: 10px;

  position: relative;
  z-index: 2;
}

input {
  height: 60px;
  border-radius: 20px;
  width: 20%;
  margin-bottom: 30px;
}
.social-border {
  border: 2px solid #c7c9d9;
  border-radius: 10px;
  margin-right: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 25px;
  padding-right: 25px;
}
.handles {
  width: 40px;
}
.social-media {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;
  margin-bottom: 60px;
  align-items: center;
  margin-top: 60px;
}
.lady {
  position: fixed;
  right: 0%;
  width: 55%;
  top: 0%;
}
h1 {
  overflow: hidden;
  text-align: center;
  font-size: 20px;
  margin-top: 30px;
  color: #636363;
}

p {
  font-size: 20px;
  color: #636363;
  text-align: center;
  margin-top: 20px;
}

h1:before,
h1:after {
  background-color: #c7c9d9;
  content: '';
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 50%;
}

h1:before {
  right: 0.5em;
  margin-left: -50%;
}

h1:after {
  left: 0.5em;
  margin-right: -50%;
}

.form-container {
  margin-left: 80px;
  margin-right: 80px;
}

.heading {
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
}

.split {
  height: 100%;
  width: 40%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
}

.left {
  left: 0;
  width: 45%;
}
img {
  width: 80%;
}
.right {
  right: 0;
  width: 50%;
}
.logo {
  width: 120px;
}
</style>
