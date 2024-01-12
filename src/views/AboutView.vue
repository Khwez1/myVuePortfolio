<template>
  <div class="container-fluid" id="about" style="display: inline-block; margin-bottom: 100px">
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
        <div class="container" style="border: 1px solid white; height: 100%; width: auto; ; display: block;">
          <h1>About Me</h1>
          <div class="container">
            <p>
              I am an aspiring web developer, who has a pasion for video games and video game culture. I began my journey coding in 2022 when I started my career as a Lego robotics coach, teaching has been life long passion of mine and I aim to elevate all those around me.
            </p>
          </div>
          <div class="download button">
            <a href="https://docs.google.com/document/d/e/2PACX-1vTeor47A1l-sjBH6c4v996UifGA8W7ccdnB_DmNmUabGERDdnIgYHoCFmVeBGfkIw/pub?export=download" download="document.pdf">
              <button class="btn btn-active">Download CV</button>
            </a>
          </div>
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