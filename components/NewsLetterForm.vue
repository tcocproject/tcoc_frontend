<template lang="">
  <div>
    <form class="search-wrapper">
      <input
        type="text"
        placeholder="Type e-mail here..."
        required
        style="box-shadow: none"
      />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
/*Clearing Floats*/

.cf {
  zoom: 1;
}
/* Form wrapper styling */

.search-wrapper {
  width: 450px;
  margin: 40px auto 50px auto;
  border-radius: 40px;
  background: transparent;
}

/* Form text input */

.search-wrapper input {
  padding-left: 20px;
  width: 300px;
  height: 60px;
  padding: 10px 5px;
  float: left;
  border: 1px solid white;
  background: transparent;
  border-radius: 40px 0px 0px 40px;
}

.search-wrapper input:focus {
  outline: 0;
  background: #fff;
}

.search-wrapper input::-webkit-input-placeholder {
  color: white;

  font-size: 24px;
  font-weight: 200;

  padding-left: 20px;
}

/* Form submit button */
.search-wrapper button {
  overflow: visible;
  position: relative;
  float: right;
  border: 0;
  padding: 0;
  cursor: pointer;
  height: 60px;
  width: 150px;
  border: 1px solid white;
  color: #fff;

  background: #113c80;
  border-radius: 0px 40px 40px 0px;
  font-size: 20px;
  font-weight: 200;
}

.search-wrapper button:hover {
  /*     background: #e54040; */
}

.search-wrapper button:active,
.search-wrapper button:focus {
  background: #198cff;
  outline: 0;
}

.search-wrapper button:focus:before,
.search-wrapper button:active:before {
  border-right-color: #c42f2f;
}

.search-wrapper button::-moz-focus-inner {
  /* remove extra button spacing for Mozilla Firefox */
  border: 0;
  padding: 0;
}
</style>
