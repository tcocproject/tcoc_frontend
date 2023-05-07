<template lang="">
  <div>
    <div class="split left">
      <div class="background-circle"></div>
      <b-img src="../assets/images/lady_signup.svg" class="lady"></b-img>
    </div>

    <div class="split right">
      <div class="heading">
        <b-img class="logo" src="../assets/images/logo.svg"> </b-img>
        <BorderButton :buttonData="buttonData[1]" />
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
          <nuxt-link to="/company_signup">
            <div class="circle">
              <b-img src="../assets/images/company.svg"> </b-img>
              <h5>Company</h5>
            </div>
          </nuxt-link>
        </div>

        <div class="button">
          <Button :buttonData="buttonData[0]" />
        </div>
      </div>
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
        title: 'Continue',
        hasBackground: false,
        link: '',
      },

      {
        title: 'Login',
        hasBackground: false,
        link: '/login',
      },
    ])

    return { buttonData }
  },
}
// import { defineComponent, ref } from 'vue'

// import Button from '../types/button'

// export default defineComponent({
//   setup() {
//     layout: 'empty'
//     const buttonData = ref<Button[]>([
//       {
//         title: 'Continue',
//         hasBackground: false,
//         link: '',
//       },

//       {
//         title: 'Login',
//         hasBackground: false,
//         link: '/login',
//       },
//     ])

//     return { buttonData }
//   },
// })
</script>
<style scoped>
.lady {
  position: fixed;
  left: 0%;
  width: 50%;
}
a {
  color: #076abe;
}
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
  width: 150px;
  height: 150px;
  background: #ebf3fa;
  border-radius: 50%;
  padding-top: 50px;
  margin-bottom: 40px;
}

.circle img {
  width: 50px;
}
.heading {
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10%;
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
  width: 58%;
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

@media (max-width: 600px) {
  .left {
    display: none;
  }
}
</style>
