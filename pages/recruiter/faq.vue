<template>
  <div>
    <Navbar />

    <div class="hero">
      <div class="background-container">
        <h2>
          Frequently <b>Asked <br />Question</b>
        </h2>
      </div>
    </div>
    <br />

    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6">
          <img src="../../assets/images/employer/profile_talent.svg" alt="" />
        </div>
        <div class="col-lg-6">
          <h4>PROFILE TALENT</h4>
          <p>
            Intuitive employee profiling system uses AI algorith and Culture Fit
            Analytics to match profiled talents to the right role in the right
            organization. Talents are profiled across skill, education, and
            experience. We want to be able to integrate our solution as a
            software onboarded to aid hiring/decision making process for
            organization
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <h4>CULTURE FIT ANALYTICS</h4>
          <p>
            Every Intuitive Talent undergoes a culture fit assesment at sign up.
            THese questions are answered to test workplace suitability and
            emotional attributes. This culture assesment is built with a career
            psychologist framework that covers, culture and perception
            management, relationship managment, and self-awareness
          </p>
        </div>
        <div class="col-lg-6">
          <img
            src="../../assets/images/employer/culture_fit.svg"
            alt="culture fit"
          />
        </div>
      </div>
      <h4><nuxt-link to="">RECRUIT|TALENT SOLUTION</nuxt-link></h4>
      <div class="row">
        <div class="col-lg-6">
          <h4>SELF-ONBOARD TALENT</h4>
          <p>
            A great onboarding process ensures that new employees have the tools
            they need to do their job efficiently. You’ve spent a lot of money
            on recruitment, you don’t want a new hire out of the door in months.
          </p>
          <Button :buttonData="buttonData" />
        </div>
        <div class="col-lg-6">
          <img
            src="../../assets/images/employer/self_onboard.svg"
            alt="culture fit"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Button from '~/types/button'

export default defineComponent({
  setup() {
    const buttonData = ref<Button>({
      title: 'Post a Job',
      hasBackground: false,
      link: '',
    })
    return { buttonData }
  },
})
</script>

<style scoped>
.container-fluid {
  margin-left: 50px;
  margin-right: 50px;
}
h4 {
  margin-top: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #076abe;
}
.row {
  margin-top: 100px;
}
.hero {
  background-image: url('../../assets/images/faq.svg');
  background-size: cover;
  position: relative;
  height: 400px;
  width: 100%;
}

.background-container p {
  color: white;
  font-size: 26px;
}
.background-container {
  background: linear-gradient(to left, rgba(255, 0, 0, 0), #113c80);
  height: 400px;
  padding: 60px;
}
h2 {
  color: white;
  font-size: 60px;
}
img {
  width: 70%;
}
p {
  font-size: 24px;
}
</style>
