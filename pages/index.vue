<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6">
          <h2>
            Easily discover <br />
            the right talent.
          </h2>
          <p class="hero-paragraph">
            Transform your team with our <br />
            comprehensive HR Services - From <br />
            recruitment to retention
          </p>
          <Button :buttonData="buttonData[0]" />
          <span class="hero-text">
            <nuxt-link to="">Apply for Jobs</nuxt-link>
          </span>
          <b-img
            src="../assets/images/arrow_left.svg"
            fluid
            class="arrow-image"
            alt="group-image"
          ></b-img>
        </div>
        <div class="col-lg-6">
          <b-img
            src="../assets/images/group_image.svg"
            fluid
            alt="group-image"
            class="group-image"
          >
          </b-img>
        </div>
      </div>

      <div class="row card-div">
        <div class="col-lg-3">
          <Card :cardData="cardData[0]" />
        </div>
        <div class="col-lg-3">
          <Card :cardData="cardData[1]" />
        </div>
        <div class="col-lg-3">
          <Card :cardData="cardData[2]" />
        </div>
        <div class="col-lg-3">
          <Card :cardData="cardData[3]" />
        </div>
      </div>
      <h4 class="text-center">WHAT WE OFFER</h4>
      <div class="row mt-5">
        <div class="col-lg-6">
          <h5>Profile Talent</h5>
          <p>
            Intuitive employee profiling system uses AI and Culture Fit
            Analytics to match talents to the right role in the right
            organization. Talents are profiled across skill, education and
            experience.
          </p>
          <BorderButton :buttonData="buttonData[1]" />
        </div>
        <div class="col-lg-6">
          <b-img
            class="talent-picture"
            src="../assets/images/talent_picture.svg"
            alt="talent-picture"
          >
          </b-img>
        </div>
      </div>
      <div class="row mb-5 mt-5">
        <div class="col-lg-6">
          <b-img
            class="talent-picture"
            src="../assets/images/culture_fit.svg"
            alt="talent-picture"
          >
          </b-img>
        </div>
        <div class="col-lg-6">
          <h5>Culture Fit Analytics</h5>
          <p>
            To aid hiring decisions, we provide a culture assessment for talents
            at sign up. The report can be shared with potential employer upon
            request
          </p>
          <Button :buttonData="buttonData[2]" />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <h5>Build a <i>brilliant</i> team now</h5>
          <p>
            We specialize in connectiong right fit talents to leading companies
          </p>
          <span class="hire-talent">
            <nuxt-link to="">Hire Talent</nuxt-link>
          </span>
          <b-img
            src="../assets/images/arrow_left.svg"
            fluid
            class="arrow-image"
            alt="group-image"
          ></b-img>
        </div>
        <div class="col-lg-6">
          <circle-vertical />
        </div>
      </div>
    </div>
    <div class="stay-updated">
      <div class="stay-updated-rectangle">
        <h3>Stay Updated</h3>

        <span class="stay-updated-text">
          Stay updated with new features, product development <br />
          and offers to receive our newsletters on Recruitment
        </span>
        <news-letter-form />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

import Button from '~/types/button'
import CardData from '~/types/card'

export default defineComponent({
  setup() {
    layout: '/home'
    const buttonData = ref<Button[]>([
      {
        title: 'Post a Job',
        hasBackground: false,
        link: '',
      },
      {
        title: 'Try for free',
        hasBackground: false,
        link: '',
      },
      {
        title: 'Request a demo',
        hasBackground: false,
        link: '',
      },
    ])
    const cardData = ref<CardData[]>([
      {
        heading: 'Wide reach of Talent',
        description: 'Hire the talents tailored for your hiring needs',
        image: 'globe.svg',
      },
      {
        heading: 'Attractive Job Post',
        description: 'TCOC helps you to create an attractive job description',
        image: 'job_post.svg',
      },
      {
        heading: 'Communication',
        description:
          'Easily chat with and set up interviews with your desired talent',
        image: 'communication.svg',
      },
      {
        heading: 'Employee Advice',
        description: 'We provide tips on how to find talents and retain',
        image: 'employee_advice.svg',
      },
    ])

    return { buttonData, cardData }
  },
})
</script>
<style scoped>
.hire-talent {
  font-size: 24px;
}
.hero-text a {
  color: #076abe;
}
.card-div {
  margin-top: 50px;
  padding-right: 80px;
}
.text-center {
  margin-top: 60px;
  margin-bottom: 60px;
  color: #196abe;
}
.talent-picture {
  width: 80%;
}
p {
  font-size: 24px;
  color: #4d4d4d;
  padding-right: 7em;
}
h5 {
  font-size: 28px;
  padding-bottom: 20px;
  padding-top: 60px;
}
h2 {
  padding-top: 1.5em;
}
.container-fluid {
  padding-left: 50px;
}
.hero-paragraph {
  font-size: 30px;
  color: #100f0f63;
  margin-top: 30px;
  margin-bottom: 30px;
}
.stay-updated {
  background-image: url('../assets/images/stay_updated.svg');
  margin-top: 100px;
  position: relative;
  background-position: center;
  background-size: cover;
  text-align: center;
  height: 500px;
  width: 100%;
}
.stay-updated-rectangle {
  background: rgba(76, 84, 175, 0.5);
  padding-top: 80px;
  height: 500px;
  width: 100%;
  text-align: center;
  color: white;
}
.stay-updated-text {
  font-size: 24px;
  font-weight: 200;
  color: white;
}
.hero-text {
  font-size: 25px;
  padding-left: 40px;
}
.arrow-image {
  width: 40px;
}
.group-image {
  width: 100%;
  right: 0;
  margin-top: 40px;
}
</style>
