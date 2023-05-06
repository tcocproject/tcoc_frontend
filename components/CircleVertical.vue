<template lang="">
  <div>
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
    <div class="text-div">
      <h4 class="job-heading">Create Job Description</h4>
      <p>
        Our smart AI helps you create a job posting, employee benefit and so on.
      </p>
      <h4 class="job-heading">Discover the best Talent</h4>
      <p>
        Our smart AI helps you create a job posting, employee benefit and so on.
      </p>
      <h4 class="job-heading">Continue your progress</h4>
      <p>
        You've spent a lot of money on recruitment. You don't want a new hire
        out of the door in months. Self onboard talents with our automated
        starter pack.
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>
<style scoped>
.text-div {
  margin-left: 40px;
}

h4 {
  padding-left: 30px;
  color: #4d4d4d;
  padding-left: 30px;
}
p {
  font-size: 20px;
  padding-left: 30px;
  color: #4d4d4d;
  padding-right: 7em;
}
.wrapper {
  width: auto;
  height: auto;
  float: left;
}
.vertical-line {
  width: 2px;
  height: 60px;
  background: #076abe;
  margin-left: 24px;
}
h5 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  color: black;
}
.circle {
  width: 50px;
  height: 50px;
  border: 1px solid #076abe;
  border-radius: 50%;
  position: relative;
}
</style>
