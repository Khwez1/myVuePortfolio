<template>
  <div class="container-fluid" id="about">
    <div class="row justify-content-center">
      <div class="col-4">
        <h3>This is the about page</h3>
      </div>
      <div class="row">
        <div class="col-md-6">
            
        </div>
        <div class="col-md-6">
          <div class="tenor-gif-embed" data-postid="14815919" data-share-method="host" data-aspect-ratio="0.740625" data-width="100%">
          <a href="https://tenor.com/view/sans-bad-time-undertale-gif-14815919">Sans Bad Time GIF</a>
          from <a href="https://tenor.com/search/sans-gifs">Sans GIFs</a></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://tenor.com/embed.js';
    
    // Append the script to the document body
    document.body.appendChild(script);
  }
}
</script>
<style>
#about{
  text-align: center;
}
</style>