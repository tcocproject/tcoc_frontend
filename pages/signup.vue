<template lang="">
  <div>
    <div class="split left">
      <b-img src="../assets/images/lady_signup.svg" class="lady"></b-img>
    </div>

    <div class="split right">
      <div class="heading">
        <b-img class="logo" src="../assets/images/logo.svg"> </b-img>
        <BorderButton :buttonData="buttonData[0]" />
      </div>
      <Toast ref="toast" />
      <h5>Create your employer account</h5>

      <form @submit.prevent="onSubmit">
        <div class="form-container">
          <div class="row">
            <div class="col-lg-6 col-sm-12">
              <b-form-group
                label="First Name *"
                label-for="FirstName"
                valid-feedback=""
              >
                <b-form-input
                  trim
                  type="text"
                  v-model="formData.firstName"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-lg-6 col-sm-12">
              <b-form-group label="Last Name *" label-for="lastName">
                <b-form-input
                  trim
                  v-model="formData.lastName"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-sm-12">
              <b-form-group label="Email *" label-for="email">
                <b-form-input
                  type="email"
                  v-model="formData.email"
                  trim
                  required
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-lg-6 col-sm-12">
              <b-form-group label="Phone Number *">
                <b-form-input
                  type="text"
                  required
                  v-model="formData.phoneNumber"
                  trim
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-sm-12">
              <b-form-group label="Company Name" label-for="company name">
                <b-form-input
                  trim
                  v-model="formData.companyName"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-lg-6 col-sm-12">
              <div class="form-group">
                <label for="phone">Country *</label>
                <select name="" id="" class="form-control">
                  <option value="">Nigeria</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-sm-12">
              <div class="form-group">
                <label class="control-label">Password *</label>
                <password-text v-model="formData.password" />
              </div>
            </div>
            <div class="col-lg-6 col-sm-12">
              <div class="form-group">
                <label class="control-label">Confirm Password *</label>
                <password-text v-model="formData.confirmPassword" />
              </div>
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
          <b-spinner
            type="grow"
            label="Spinning"
            class="spinner"
            v-if="isLoading"
          ></b-spinner>
          <div class="heading">
            <Button
              :buttonData="buttonData[1]"
              @click="onSubmit()"
              v-if="!isLoading"
            />
            <p>Are you job searching? <nuxt-link to="">Come here</nuxt-link></p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, ref } from 'vue'
import AuthModule from '~/repository/auth'

import StorageKeys from '../composables/keys'
import LocalStorageService from '../composables/local_storage'
import Button from '../types/button'
import { Register } from '../types/credentials'
export default {
  layout: 'empty',

  setup() {
    const toast = ref()

    const isLoading = ref<boolean>(false)
    const formData = reactive<Register>({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      companyId: '',
      confirmPassWord: '',
      country: 'Nigeria',
      role: 'Recruiter',
    })

    const buttonData = ref<Button[]>([
      {
        title: 'Login',
        hasBackground: false,
        link: '/login',
      },

      {
        title: 'Continue',
        hasBackground: false,
        link: '',
      },
    ])

    async function onSubmit() {
      isLoading.value = true
      console.log(formData)
      let authModule = new AuthModule()
      const result = await authModule.register(formData)
      console.log(result)
      if (result.status !== 200 && result.status !== 201) {
        isLoading.value = false
        toast.value.makeToast(result.data?.Message)
        return
      }
      LocalStorageService.saveDataToDisk(StorageKeys.email, formData.email)
      window.location.href = '/otp_page'
    }
    return { buttonData, formData, onSubmit, toast, isLoading }
  },
}
</script>
<style scoped>
.field-icon {
  float: right;
  margin-left: -20px;
  margin-top: -30px;
  margin-right: 10px;
  position: relative;
  z-index: 2;
}
select {
  height: 50px;
  border-radius: 20px;

  width: 100%;
}
.lady {
  position: fixed;
  left: 0%;
  width: 50%;
}
h1 {
  overflow: hidden;
  text-align: center;
  font-size: 20px;
  margin-top: 30px;
  color: #636363;
}
input {
  height: 50px;
  border-radius: 20px;
  width: 100%;
}
p {
  font-size: 26px;
  color: #636363;
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
  background-color: #a2c2de;
}
img {
  width: 80%;
}
.right {
  right: 0;
  width: 53%;
  margin-right: 5%;
}
.logo {
  width: 120px;
}
</style>
