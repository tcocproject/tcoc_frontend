<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h2>
            Easily discover <br />
            the right talent
          </h2>
          <p>
            Transform your team with our comprehension HR Service - From
            recruitment to retention
          </p>
          <div class="button-area">
            <Button :buttonData="buttonData[0]" /> <span>Apply for Jobs</span>
            <b-img
              src="../assets/images/arrow_left.svg"
              fluid
              class="arrow-image"
              alt="group-image"
            ></b-img>
          </div>
        </div>
        <div class="group-div">
          <b-img
            src="../assets/images/group_image.svg"
            fluid
            alt="group-image"
            class="group-image"
          >
          </b-img>
        </div>
      </div>
      <section class="card-section">
        <div class="row">
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
      </section>
    </div>
    <section class="home-container">
      <div class="we-offer-section">
        <h3 class="text-center mt-5 mb-5">WHAT WE OFFER</h3>
        <b-row>
          <div class="col-lg-6">
            <h3>Profile Talent</h3>
            <p>
              Intuitive employee profiling system uses AI and Culture Fit
              Analytics to match talents to the right role in the right
              organization. Talents are profiled across skill, education and
              experience.
            </p>
            <BorderButton :buttonData="buttonData[1]" />
          </div>
          <div class="group-div">
            <b-img
              class="talent-picture"
              src="../assets/images/talent_picture.svg"
              alt="talent-picture"
            >
            </b-img>
          </div>
        </b-row>
      </div>
      <div class="we-offer-section">
        <b-row>
          <b-col>
            <b-img
              class="talent-picture"
              src="../assets/images/culture_fit.svg"
              alt="talent-picture"
            >
            </b-img>
          </b-col>
          <b-col>
            <h3>Culture fit Analytics</h3>
            <p>
              To aid hiring decisions, we provide a culture assessment for
              talents at sign up. The report can be shared with potential
              employer upon request.
            </p>
            <Button :buttonData="buttonData[1]" />
          </b-col>
        </b-row>
      </div>
      <div class="we-offer-section">
        <b-row>
          <b-col>
            <h3>Build a <em>brilliant</em> team now</h3>
            <p>
              We specialize in connecting right fit talents to leading companies
            </p>
            <span>Hire Talents</span>
            <b-img
              src="../assets/images/arrow_left.svg"
              fluid
              class="arrow-image"
              alt="group-image"
            ></b-img>
          </b-col>
          <b-col>
            <div class="wrapper">
              <div class="circle">
                <h5>1</h5>
              </div>
              <div class="vertical-line"></div>
              <div class="circle">
                <h5>2</h5>
              </div>
              <div class="vertical-line"></div>
              <div class="circle">
                <h5>3</h5>
              </div>
            </div>
            <div>
              <span class="job-heading">Create Job Description</span>
              <blockquote>
                Our smart AI helps you create a job posting, employee benefit
                and so on.
              </blockquote>
              <span class="job-heading">Discover the best Talent</span>
              <blockquote>
                Our smart AI helps you create a job posting, employee benefit
                and so on.
              </blockquote>
              <span class="job-heading">Continue your progress</span>
              <blockquote>
                You've spent a lot of money on recruitment. You don't want a new
                hire out of the door in months. Self onboard talents with our
                automated starter pack.
              </blockquote>
            </div>
          </b-col>
        </b-row>
      </div>
    </section>

    <div class="stay-updated">
      <h1>Stay updated</h1>
      <p style="color: white">
        Stay updated with new features, product development and offers or to
        receive our newsletters on Recruitment.
      </p>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Footer from '~/components/home/Footer.vue'
import Button from '../types/button'
import CardData from '../types/card'

export default defineComponent({
  components: { Footer },
  setup() {
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

  data() {
    return {
      firstButton: {},
    }
  },
})
</script>

<style scoped>
.row {
  width: 1350px;
}
h2 {
  margin-top: 80px;
  font-size: 64px;
}
.stay-updated {
  margin-top: 100px;
  position: relative;
  height: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-section {
  margin-top: 180px;
  justify-content: space-between;
}
.stay-updated::before {
  content: '';
  background-image: url('../assets/images/stay_updated.svg');
  background-size: cover;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 1;
}
.we-offer-section {
  margin-top: 80px;
}
.wrapper {
  width: auto;
  height: auto;
  float: left;
}

.circle {
  width: 50px;
  height: 50px;
  border: 1px solid #076abe;
  border-radius: 50%;
  position: relative;
}

h5 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  color: black;
}

.vertical-line {
  width: 2px;
  height: 50px;
  background: #076abe;
  margin-left: 24px;
}

.home-container {
  margin-left: 40px;
  margin-right: 40px;
}
.talent-picture {
  width: 25rem;
}
.row {
  align-content: center;
  align-items: center;
}
.container {
  margin-left: 40px;
  margin-top: 20px;
}
.group-div {
  position: absolute;
  right: 0;
  margin-top: 100px;
}
p {
  font-size: 26px;
  margin-top: 30px;
  font-weight: 300;
}
.arrow-image {
  width: 40px;
}
.group-image {
  width: 35rem;
}
span {
  font-size: 28px;

  font-weight: 600px;
  padding-left: 25px;
  padding-right: 10px;
}

.button-area {
  margin-top: 30px;
}

.job-heading {
  color: black;
}
blockquote {
  margin-left: 20px;
  padding-left: 40px;
}
</style>
