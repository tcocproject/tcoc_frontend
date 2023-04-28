<template lang="">
  <div>
    <Navbar />

    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 flex-display">
          <div>
            <img
              src="../../assets/images/profile.jpeg"
              class="profile-picture"
              alt=""
            />
            <img
              src="../../assets/images/employer/edit_pencil.svg"
              class="edit-picture"
              alt=""
            />
          </div>

          <div class="text-section">
            <h3>Chinwe Bonlolo</h3>
            <p>ServiceBell</p>
            <p>Lagos, Nigeria</p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="text-section">
            <br />
            <BorderButton :buttonData="buttonData" />
          </div>
        </div>
      </div>
    </div>
    <RecruiterTab />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Button from '~/types/button'

export default defineComponent({
  setup() {
    const buttonData = ref<Button>({
      title: 'Edit Profile',
      hasBackground: false,
      link: '/signup',
    })
    return { buttonData }
  },
})
</script>
<style scoped>
.text-section {
  padding-top: 4em;
  margin-right: 4em;
}

.text-section h3 {
  font-size: 30px;
}
.text-section p {
  font-size: 20px;
}
.profile-picture {
  width: 300px;
  border-radius: 50%;
  margin-right: 40px;
}
.flex-display {
  display: flex;
  flex-wrap: nowrap;
  margin-top: 30px;
}
.edit-picture {
  z-index: 3;
  width: 50px;
  position: absolute;
  top: 200px;
  left: 270px;
}
</style>
