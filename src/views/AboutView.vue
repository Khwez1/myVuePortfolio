<template>
  <div class="container-fluid" id="about" style="display: inline-block; padding: auto;">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <h3>This is the about page</h3>
      </div>
    </div>
    <div class="row justify-content-center ">
      <div class="col-md-6">
        <div class="sans2-container">
          <img src="https://i.postimg.cc/0jfNYbhN/kindpng-2585786.png" alt="">
        </div>
      </div>
      <div class="col-md-6">
        <div class="container" style="border: 1px solid white; height: 100%; width: auto; margin-bottom: 10px; display: block;">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {  
  }
}
</script>
<style>
#about{
  text-align: center;
}
.sans2-container {
  width: 100%;
  max-width: 550px;
  height: auto;
  overflow: hidden;
  display: inline-block;
}

.sans2-container img {
  width: 90%;
  height: 450px;
}
</style>