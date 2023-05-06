<template>
  <div>
    <div>
      <input
        id="password-field"
        :type="passwordFieldType"
        class="form-control"
        name="password"
        required
        @input="updateValue($event.target.value)"
        :value="value"
      />
      <span
        @click="switchVisibility"
        toggle="#password-field"
        class="fa fa-fw field-icon toggle-password"
        :class="passwordFieldType === 'password' ? 'fa-eye-slash' : 'fa-eye'"
      ></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    value: {
      required: true,
    },
  },
  data() {
    return {
      password: '',
      passwordFieldType: 'password',
    }
  },

  methods: {
    updateValue(value: string) {
      this.$emit('input', value)
    },
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === 'password' ? 'text' : 'password'
    },
  },
})
</script>
<style scoped>
.field-icon {
  float: right;
  margin-left: -20px;
  margin-top: -30px;
  margin-right: 10px;
  cursor: pointer;
  position: relative;
  z-index: 2;
}
input {
  height: 50px;
  border-radius: 20px;
  width: 100%;
}
</style>
