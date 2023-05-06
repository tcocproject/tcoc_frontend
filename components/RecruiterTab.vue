<template lang="">
  <div class="wrapper">
    <div class="tabs-panel">
      <!-- Input Tabs -->
      <input type="radio" id="test1" name="tab" checked="checked" />
      <input type="radio" id="test2" name="tab" />
      <input type="radio" id="test3" name="tab" />
      <input type="radio" id="test4" name="tab" />
      <!-- End Input Tabs -->

      <!-- Start Tabs -->
      <div class="tabs">
        <div class="tab">
          <label for="test1" onclick>
            <div class="content">
              <div class="text">Overview</div>
            </div>
          </label>
        </div>
        <div class="tab">
          <label for="test2" onclick>
            <div class="content">
              <div class="text">Review</div>
            </div>
          </label>
        </div>
        <div class="tab">
          <label for="test3" onclick>
            <div class="content">
              <div class="text">Upcoming interviews</div>
            </div>
          </label>
        </div>
      </div>
      <!-- End Tabs -->

      <div class="separator"></div>

      <!-- Start Panels -->
      <div class="panels">
        <!-- Start Tab Panel -->
        <div class="tab-panel" id="panel1">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-8">
                <p>
                  I am a recruiter at ServiceBell, I love to provide
                  opportunities for the under-presented opportunities for the
                  under-presented
                </p>
                <h5>Social Links</h5>
                <div class="social">
                  <img
                    src="../assets/images/employer/social_linkedin.svg"
                    alt=""
                    srcset=""
                  />
                  <img
                    src="../assets/images/employer/social_twitter.svg"
                    alt=""
                    srcset=""
                  />
                  <img
                    src="../assets/images/employer/social_globe.svg"
                    alt=""
                    srcset=""
                  />
                </div>
                <h5>Open Jobs</h5>
                <div class="open-jobs">
                  <div>
                    <h6>Senior Business Analyst at Service Bell</h6>
                    <p>Lagos, Nigeria Hybrid Full-Time</p>
                  </div>
                  <p>Edit</p>
                </div>
              </div>
              <div class="col-lg-4">
                <p>
                  I am a recruiter at ServiceBell, I love to provide
                  opportunities for the under-presented
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- End Tab Panel -->

        <!-- Start Tab Panel -->
        <div class="tab-panel" id="panel2">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6">
                <h6>Experience with Talents</h6>

                <span class="mb-5"> March 19, 2023</span>

                <p>
                  I am a recruiter at ServiceBell, I love to provide
                  opportunities for the under-represented. I am a recruiter at
                  ServiceBell, I love to provide opportunities for the
                  under-represented. I am a recruiter at ServiceBell, I love to
                  provide opportunities for the under-represented.
                </p>
                <div class="id">
                  <img src="../assets/images/profile.jpeg" alt="" />

                  <div>
                    <p>Seline Ada</p>
                    <p>Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-panel" id="panel3">
          <div class="content">Content 3</div>
        </div>
      </div>
      <!-- End Panels -->
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>
<style lang="scss" scoped>
.id {
  display: flex;
  flex-wrap: nowrap;
}
.id img {
  border-radius: 50%;
  padding-right: 30px;
}
.open-jobs {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
h6 {
  font-size: 26px;
  color: #076abe;
  font-weight: 300;
  padding-bottom: 5px;
}
.container-fluid {
  margin-left: 50px;
}
.social img {
  width: 50px;
  padding-right: 1em;
}
$number-of-tabs: 3;

$separator-height: 0.3rem; //3px
p {
  font-size: 20px;
}
h5 {
  color: #113c80;
  padding-bottom: 1em;
  padding-top: 1em;
}
@mixin user-select() {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.wrapper {
  width: 100%;
  margin: 0 auto;
}

/* Makes the checkbox hack work for Android 4.1.2 */
@-webkit-keyframes checkbox-hack-bugfix {
  from {
    padding: 0;
  }
  to {
    padding: 0;
  }
}
body {
  -webkit-animation: checkbox-hack-bugfix infinite 1s;
  background-color: #272d39;
}
input[type='checkbox'],
input[type='radio'] {
  @include user-select();
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  clip: rect(0, 0, 0, 0);
  visibility: hidden;
  opacity: 0;
  transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  z-index: -1;

  @for $i from 1 through $number-of-tabs {
    &[id='test#{$i}'] {
      &:checked {
        & ~ .tabs {
          .tab {
            label[for='test#{$i}'] {
              color: #196abe;
              cursor: default;

              &::after {
                opacity: 1;
              }
            }
          }
        }
        & ~ .panels {
          #panel#{$i} {
            display: block;
          }
        }
      }
    }
  }
}

.tabs-panel {
  .tabs {
    display: flex;
    width: 60%;

    .tab {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;

      flex-grow: 1;

      position: relative;
      width: 20%;
      margin-top: 2.5rem; //40px
      text-align: center;
      color: #4d4d4d;
      background-color: transparent;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s ease;

      label {
        @include user-select();
        display: block;
        height: 100%;
        padding: 0 0.75rem;
        border: none;
        cursor: pointer;

        .content {
          .text {
            margin-bottom: 1.563rem;
            font-size: 1.6rem;
          }
        }

        &::after {
          content: '';
          position: absolute;
          bottom: (-1) * $separator-height;
          left: 29%;
          display: block;
          width: 50%;
          height: 8px;
          border-radius: 10px;
          opacity: 0;
          background-color: #196abe;
          transition: opacity 0.3s ease-in-out;
        }
      }

      &:hover {
        color: #196abe;
      }
    }
  }
  .separator {
    width: 100%;
    height: 2px;
    margin-bottom: 2.5rem; // 40px
    background-color: #d1d1d1;
  }
  .panels {
    border: none;

    .tab-panel {
      display: none;
      border: none;

      .content {
        color: #707a89;
        animation: fade 0.3s linear;
      }
    }
  }
}
</style>
