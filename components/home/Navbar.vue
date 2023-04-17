<template lang="">
  <div>
    <div class="job-searching">
      <span>Are you job searching? <strong>Come Here</strong></span>
    </div>
    <b-navbar toggleable="lg" type="light" class="shadow-sm">
      <b-navbar-brand href="#"
        ><img src="../../assets/images/logo.svg" alt="logo" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <nuxt-link to=""> <b-nav-item href="#">Link</b-nav-item></nuxt-link>
        </b-navbar-nav>
        <b-navbar-nav>
          <nuxt-link to=""> <b-nav-item href="#">Talent</b-nav-item></nuxt-link>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-nav-item-dropdown text="Company">
            <b-dropdown-item href="#">About Us</b-dropdown-item>
            <b-dropdown-item href="#">FAQs</b-dropdown-item>
            <b-dropdown-item href="#">Cibtact Us</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav>
          <nuxt-link to="">
            <b-nav-item href="#">Pricing</b-nav-item></nuxt-link
          >
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <nuxt-link to="/account-type" right>Login</nuxt-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script lang="ts">
export default {}
</script>
<style>
.job-searching {
  background: #6a9ecc;
  height: 50px;
  color: white;
  display: flex;
  justify-content: center;
  padding-top: 10px;
}

img {
  width: 110px;
}
</style>
