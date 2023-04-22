<template>
  <div>
    <Navbar />

    <div class="hero">
      <div class="background-container">
        <h2>
          The way we work is <br />
          evolving The way we hire <br />
          should.
        </h2>
        <p>
          Scale your team and business with ease. <br />
          Explore our recruitment solutions
        </p>
      </div>
    </div>
    <br />

    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <img src="../../assets/images/employer/profile_talent.svg" />
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {},
})
</script>

<style scoped>
.hero {
  background-image: url('../../assets/images/happy_man.svg');
  background-size: cover;
  position: relative;
  height: 600px;
  width: 100%;
}

.background-container p {
  color: white;
  font-size: 26px;
}
.background-container {
  background: linear-gradient(to left, rgba(255, 0, 0, 0), #076abe);
  height: 600px;
  padding: 60px;
}
h2 {
  color: white;
  font-size: 60px;
}
img {
  width: 80%;
}
</style>
