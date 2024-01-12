<template>
  <div class="container-fluid" id="resume">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <h3>This is the resume page</h3>
      </div>
    </div>
    <div class="row justify-content-center align-items-center mt-5">
      <div class="skills">
        <div v-if="!resumeData.length && !resume2Data.length">
          <Spinner/>
        </div>
        <div v-else>
          <div class="row justify-content-center">
            <div v-for="resume in resumeData" :key="resume" class="col-lg-3 col-md-6 mb-2">
              <div class="card" style="width: 18rem; display: inline-block;">
                <img :src="resume.img" height="240px" class="card-img-top" alt="">
              </div>
            </div> 
          </div>
          <div class="row justify-content-center mt-4">
            <div  v-for="resume,index in resume2Data" :key="resume" class="col-lg-3 col-md-6 mb-2">
              <div :id="'c' + index " class="card" style="width: 18rem; display: inline-block;">
                <img :src="resume.img" height="240px" class="card-img-top" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Spinner from '@/components/Spinner.vue';
export default {
  components:
  {
    Spinner
  },
  computed: {
    resumeData() {
      return this.$store.getters.getResumeData;
    },
    resume2Data() {
      return this.$store.getters.getResume2Data;
    },
  },
  mounted() {
    this.$store.dispatch('fetchResumeData');
    this.$store.dispatch('fetchResume2Data');
  },
};
</script>
<style scoped>
#resume{
    text-align: center;
}
.skills .card{
    overflow: hidden;
    margin-bottom: 90px;
    display: inline-block;
    width: 100%;
    max-width: fit-content;
}
.card:hover{
  transform: scale(105%);
}
img.card-img-top{
  border: none;
}
#c3 .card-img-top{
  background-color: aliceblue;
}
</style>