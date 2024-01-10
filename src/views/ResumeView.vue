<template>
    <div class="container-fluid" id="resume">
    <div class="row justify-content-center">
      <div class="col-4">
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

</style>