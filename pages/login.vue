<template lang="">
  <div>
    <div class="split left">
      <div class="heading">
        <b-img class="logo" src="../assets/images/logo.svg"> </b-img>
        <BorderButton :buttonData="buttonData[0]" />
      </div>
      <div class="form-container">
        <hr />
        <h4>Welcome</h4>
        <br />
        <div class="row">
          <div class="col-lg-12 col-sm-12">
            <b-form-group
              type="email"
              label="Email *"
              label-for="email"
              valid-feedback="Thank you!"
            >
              <b-form-input required trim></b-form-input>
            </b-form-group>
          </div>
          <div class="col-lg-12 col-sm-12">
            <div class="form-group">
              <label class="control-label">Password</label>
              <nuxt-link to="/forgot_password" style="float: right"
                >Forgot Password</nuxt-link
              >
              <password-text v-model="formData.password" />
            </div>
            <br />
            <WideButton :buttonData="buttonData[1]" />
          </div>
        </div>

        <h1>Or sign up with</h1>
        <div class="social-media">
          <span class="social-border">
            <b-img
              class="handles"
              src="../assets/images/google_colored.svg"
            ></b-img>
          </span>
          <span class="social-border">
            <b-img
              class="handles"
              src="../assets/images/facebook_color.svg"
            ></b-img>
          </span>
        </div>
        <div>
          <p>Don't have an account? <nuxt-link to="">Sign up now</nuxt-link></p>
          <hr />
          <p>
            Want to sign in as a talent?
            <nuxt-link to="">Sign in now</nuxt-link>
          </p>
        </div>
      </div>
    </div>

    <div class="split right">
      <b-img src="../assets/images/login_image.svg" class="lady"></b-img>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Login } from '../types/credentials'

import Button from '../types/button'

export default defineComponent({
  setup() {
    const formData = ref<Login>({
      email: '',
      password: '',
      remember: false,
    })
    const buttonData = ref<Button[]>([
      {
        title: 'Sign Up',
        hasBackground: false,
        link: '/signup',
      },

      {
        title: 'Continue',
        hasBackground: false,
        link: '',
      },
    ])

    return { buttonData, formData }
  },
})
</script>
<style scoped>
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
  width: 100%;
  margin-bottom: 30px;
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

h5 {
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 40px;
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
