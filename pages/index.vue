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
            <Button /> <span>Apply for Jobs</span>
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
            <Card headline:string="Wide reach of Talents" />
          </div>
          <div class="col-lg-3">
            <Card />
          </div>
          <div class="col-lg-3">
            <Card />
          </div>
          <div class="col-lg-3">
            <Card />
          </div>
        </div>
      </section>
      <section>
        <h3 class="text-center">WHAT WE OFFER</h3>
        <b-row>
          <b-col>
            <h3>Profile Talent</h3>
            <p>
              Intuitive employee profiling system uses AI and Culture Fit
              Analytics to match talents to the right role in the right
              organization. Talents are profiled across skill, education and
              experience.
            </p>
          </b-col>
          <b-col>
            <b-img
              class="talent-picture"
              src="../assets/images/talent_picture.svg"
              alt="talent-picture"
            >
            </b-img>
          </b-col>
        </b-row>
      </section>
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
.talent-picture {
  width: 25rem;
}
.card-section {
  display: flex;
  margin-top: 200px;
}
.container {
  margin-left: 40px;
  margin-top: 20px;
}
.group-div {
  position: absolute;
  right: 0;
}
p {
  font-size: 30px;
  margin-top: 30px;
}
.arrow-image {
  width: 40px;
}
.group-image {
  width: 35rem;
}
span {
  font-size: 28px;
  color: #076abe;
  font-weight: 600px;
  padding-left: 25px;
  padding-right: 10px;
}

.button-area {
  margin-top: 30px;
}
</style>
