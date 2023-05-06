<template lang="">
  <div class="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4">
          <h5>About us</h5>
          <ul>
            <li><nuxt-link to="">About us</nuxt-link></li>
            <li><nuxt-link to="">Recruitment &amp; Policies</nuxt-link></li>
            <li><nuxt-link to=""> Careers</nuxt-link></li>
            <li><nuxt-link to="">Content Integrity</nuxt-link></li>
            <li><nuxt-link to="">Terns of Use</nuxt-link></li>
            <li>
              <nuxt-link to="">Privacy &amp; Cookies Statement</nuxt-link>
            </li>
            <b-img class="logo" src="../assets/images/logo_white.svg"> </b-img>
            <p>2023 TCOC LLC All rights reserved</p>
          </ul>
        </div>
        <div class="col-lg-4">
          <h5>Explore</h5>
          <ul>
            <li><a href="">Write a review</a></li>
            <li><a href="">Join Our Community</a></li>
            <li><a href="">Help Center</a></li>
          </ul>
        </div>
        <div class="col-lg-4">
          <a href=""> <b-img src="../assets/images/facebook.svg"> </b-img></a>
          <a href=""> <b-img src="../assets/images/instagram.svg"> </b-img></a>
          <a href=""> <b-img src="../assets/images/twitter.svg"> </b-img></a>
          <a href=""> <b-img src="../assets/images/linkedin.svg"> </b-img></a>
          <a href=""> <b-img src="../assets/images/youtube.svg"> </b-img></a>
        </div>
      </div>
    </div>
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
.container-fluid {
  padding-left: 50px;
}
a {
  color: white;
  font-weight: 300;
}
</style>
