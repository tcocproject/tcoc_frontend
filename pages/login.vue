<template lang="">
  <div>
    <div class="split left">
      <div class="heading">
        <b-img class="logo" src="../assets/images/logo.svg"> </b-img>
        <BorderButton :buttonData="buttonData[0]" />
      </div>
      <div class="form-container">
        <hr />
        <form @submit.prevent="onSubmit">
          <h4>Welcome</h4>
          <br />
          <div class="row">
            <div class="col-lg-12 col-sm-12">
              <b-form-group
                label="Email *"
                label-for="email"
                required
                valid-feedback="Thank you!"
              >
                <b-form-input
                  type="email"
                  v-model="formData.email"
                  required
                  trim
                ></b-form-input>
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
              <b-spinner
                type="grow"
                label="Spinning"
                class="spinner"
                v-if="isLoading"
              ></b-spinner>
              <WideButton :buttonData="buttonData[1]" v-if="!isLoading" />
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
            <p>
              Don't have an account? <nuxt-link to="">Sign up now</nuxt-link>
            </p>
            <hr />
            <p>
              Want to sign in as a talent?
              <nuxt-link to="">Sign in now</nuxt-link>
            </p>
          </div>
        </form>
      </div>
    </div>

    <div class="split right">
      <Toast ref="toast" />
      <b-img src="../assets/images/login_image.svg" class="lady"></b-img>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, ref } from 'vue'
import AuthModule from '~/repository/auth'
import { Login } from '../types/credentials'

import Button from '../types/button'

export default {
  layout: 'empty',
  setup() {
    layout: 'empty'

    const toast = ref()
    let isLoading = ref<boolean>(false)
    const formData = reactive<Login>({
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

    async function onSubmit() {
      isLoading.value = true

      let authModule = new AuthModule()
      const result = await authModule.login(formData)
      if (result.status !== 200 || result.status) {
        toast.value.makeToast(result.data?.Message)
        isLoading.value = false
      }
    }

    return { buttonData, formData, isLoading, onSubmit, toast }
  },
}
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
input {
  height: 50px;
  border-radius: 20px;

  width: 100%;
}
</style>
