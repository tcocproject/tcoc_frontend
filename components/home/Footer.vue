<template lang="">
  <div class="footer">
    <b-container>
      <b-row>
        <b-col>
          <h5>About us</h5>
          <ul>
            <li><a href="">About Us</a></li>
            <li><a href="">Recruitment &amp; Policies</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Content Integrity</a></li>
            <li><a href="">Terms of Use</a></li>
            <li><a href="">Privacy &amp; Cookies Statement</a></li>
            <b-img class="logo" src="../../assets/images/logo_white.svg">
            </b-img>
            <p>2023 TCOC LLC All rights reserved</p>
          </ul>
        </b-col>
        <b-col>
          <h5>Explore</h5>
          <ul>
            <li><a href="">Write a review</a></li>
            <li><a href="">Join Our Community</a></li>
            <li><a href="">Help Center</a></li>
          </ul>
        </b-col>
        <b-col>
          <a href="">
            <b-img src="../../assets/images/facebook.svg"> </b-img
          ></a>
          <a href="">
            <b-img src="../../assets/images/instagram.svg"> </b-img
          ></a>
          <a href=""> <b-img src="../../assets/images/twitter.svg"> </b-img></a>
          <a href="">
            <b-img src="../../assets/images/linkedin.svg"> </b-img
          ></a>
          <a href=""> <b-img src="../../assets/images/youtube.svg"> </b-img></a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script lang="ts">
export default {}
</script>
<style scoped>
ul {
  padding: 0;
  list-style-type: none;
}

.footer {
  padding-top: 50px;
  height: 400;
  background-color: black;

  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
}
img {
  width: 45px;
  padding-right: 25px;
}
.logo {
  margin-top: 50px;
  margin-bottom: 25px;
  width: 120px;
}
</style>
