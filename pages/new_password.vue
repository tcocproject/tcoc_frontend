<template lang="">
  <div>
    <div class="split left">
      <div class="heading">
        <b-img class="logo" src="../assets/images/logo.svg"> </b-img>
      </div>
      <div class="form-container">
        <hr />
        <h4>New Password</h4>
        <br />
        <p>Try not to misplace it this time</p>
        <br />
        <div class="row">
          <div class="col-lg-12 col-sm-12">
            <div class="form-group">
              <label class="control-label">Password</label>

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
              <span
                >Use 6 or more letters witha mixture of numbers and
                letters</span
              >
            </div>
            <div class="form-group">
              <label class="control-label">Confirm Password</label>

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

            <br />
            <WideButton :buttonData="buttonData[1]" />
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
  margin-top: -70px;
  margin-right: 10px;

  position: relative;
  z-index: 2;
}

input {
  height: 60px;
  border-radius: 20px;
  width: 100%;
  margin-bottom: 10px;
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
  margin-left: 70px;
  margin-right: 70px;
}

h5 {
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 40px;
}
.heading {
  display: flex;
  justify-content: space-between;
  padding-left: 70px;
  padding-right: 70px;
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
