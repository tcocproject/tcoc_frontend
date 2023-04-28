<template lang="">
  <div>
    <Navbar />
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6">
          <h5>Contact Us</h5>
          <h3>Feel Free to Drop Us a Line Below!</h3>
          <b-form-group
            id="fieldset-1"
            label="Name *"
            label-for="input-1"
            valid-feedback="Thank you!"
          >
            <b-form-input id="input-1" trim></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldset-1"
            label="Email *"
            label-for="input-1"
            valid-feedback="Thank you!"
          >
            <b-form-input id="input-1" trim></b-form-input>
          </b-form-group>
          <label for="message">Message *</label>
          <b-form-textarea
            id="textarea"
            label="Email *"
            v-model="text"
            rows="5"
            max-rows="8"
          ></b-form-textarea>
          <input type="submit" value="Send" class="btn btn-success" />
        </div>
        <div class="col-lg-6">
          <img src="../assets/images/contactus.svg" class="image" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {}
</script>
<style scoped>
.btn-success {
  background-color: #076abe;
  border: none;
  width: 50%;
  font-size: 20px;
  margin-top: 30px;
}
h5 {
  font-size: 24px;
  color: #076abe;
  padding-bottom: 15px;
}

h3 {
  font-size: 30px;
  color: #0c2b5c;
  padding-bottom: 20px;
}
.image {
  width: 80%;
}
.container-fluid {
  margin-left: 40px;
  margin-top: 80px;
}
input {
  height: 48px;
  border-radius: 20px;
  width: 100%;
}
textarea {
  border-radius: 20px;
}
</style>
