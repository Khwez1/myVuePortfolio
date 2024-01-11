<template>
    <div class="container-fluid" id="resume">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <h3>This is the resume page</h3>
      </div>
    </div>
    <div class="row justify-content-center align-items-center mt-5">
      <div class="skills">
        <div class="row justify-content-center">
          <div v-for="(item, index) in resumeData.Resume" :key="index" class="col-lg-3 col-md-6 mb-2">
            <div class="card" style="width: 18rem; display: inline-block;">
              <img :src="item[Object.keys(item)[0]]" height="240px" class="card-img-top" alt="">
            </div>
          </div>
          <div v-for="(item, index) in resumeData.Resume" :key="index" class="col-lg-3 col-md-6 mb-2">
            <div class="card" style="width: 18rem; display: inline-block;">
              <img :src="item[Object.keys(item)[1]]" height="240px" class="card-img-top" alt="">
            </div>
          </div>
          <div v-for="(item, index) in resumeData.Resume" :key="index" class="col-lg-3 col-md-6 mb-2">
            <div class="card" style="width: 18rem; display: inline-block;">
              <img :src="item[Object.keys(item)[2]]" height="240px" class="card-img-top" alt="">
            </div>
          </div>
          <div v-for="(item, index) in resumeData.Resume" :key="index" class="col-lg-3 col-md-6 mb-2">
            <div class="card" style="width: 18rem; display: inline-block;">
              <img :src="item[Object.keys(item)[3]]" height="240px" class="card-img-top" alt="">
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-4">
          <div v-for="(item, index) in resumeData.Resume" :key="index" class="col-lg-3 col-md-6 mb-2">
            <div class="card" style="width: 18rem; display: inline-block;">
              <img :src="item[Object.keys(item)[4]]" height="240px" class="card-img-top" alt="">
            </div>
          </div>
          <div v-for="(item, index) in resumeData.Resume" :key="index" class="col-lg-3 col-md-6 mb-2">
            <div class="card" style="width: 18rem; display: inline-block;">
              <img :src="item[Object.keys(item)[5]]" height="240px" class="card-img-top" alt="">
            </div>
          </div>
          <div v-for="(item, index) in resumeData.Resume" :key="index" class="col-lg-3 col-md-6 mb-2">
            <div class="card" style="width: 18rem; display: inline-block;">
              <img :src="item[Object.keys(item)[6]]" height="240px" class="card-img-top" alt="">
            </div>
          </div>
          <div v-for="(item, index) in resumeData.Resume" :key="index" class="col-lg-3 col-md-6 mb-2">
            <div class="card" style="width: 18rem; display: inline-block;">
              <img :src="item[Object.keys(item)[7]]" height="240px" class="card-img-top bg-light" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    resumeData() {
      return this.$store.getters.getResumeData;
    },
  },
  mounted() {
    this.$store.dispatch('fetchResumeData');
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
</style>