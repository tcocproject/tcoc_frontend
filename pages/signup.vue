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
      <h5>Create your employer account</h5>
      <div class="form-container">
        <div class="row">
          <div class="col-lg-6 col-sm-12">
            <b-form-group
              id="fieldset-1"
              label="First Name *"
              label-for="input-1"
              valid-feedback="Thank you!"
            >
              <b-form-input id="input-1" trim></b-form-input>
            </b-form-group>
          </div>
          <div class="col-lg-6 col-sm-12">
            <b-form-group
              id="fieldset-1"
              label="Last Name *"
              label-for="input-1"
              valid-feedback="Thank you!"
            >
              <b-form-input id="input-1" trim></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-sm-12">
            <b-form-group
              id="fieldset-1"
              label="Email *"
              label-for="input-1"
              valid-feedback="Thank you!"
            >
              <b-form-input type="email" trim></b-form-input>
            </b-form-group>
          </div>
          <div class="col-lg-6 col-sm-12">
            <b-form-group
              id="fieldset-1"
              label="Phone Number *"
              label-for="input-1"
              valid-feedback="Thank you!"
            >
              <b-form-input id="input-1" trim></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-sm-12">
            <b-form-group
              id="fieldset-1"
              label="Company Name"
              label-for="input-1"
              valid-feedback="Thank you!"
            >
              <b-form-input id="input-1" trim></b-form-input>
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
              <div>
                <input
                  id="password-field"
                  type="password"
                  class="form-control"
                  name="password"
                  value="secret"
                />
                <span
                  toggle="#password-field"
                  class="fa fa-fw fa-eye field-icon toggle-password"
                ></span>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-12">
            <div class="form-group">
              <label class="control-label">Confirm Password *</label>
              <div>
                <input
                  id="password-field"
                  type="password"
                  class="form-control"
                  name="password"
                  value="secret"
                />
                <span
                  toggle="#password-field"
                  class="fa fa-fw fa-eye field-icon toggle-password"
                ></span>
              </div>
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
        <div class="heading">
          <Button :buttonData="buttonData[1]" />
          <p>Are you job searching? <nuxt-link to="">Come here</nuxt-link></p>
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
    const buttonData = ref<Button[]>([
      {
        title: 'Login',
        hasBackground: false,
        link: '',
      },

      {
        title: 'Continue',
        hasBackground: false,
        link: '',
      },
    ])

    return { buttonData }
  },
})
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

input,
select {
  height: 48px;
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
