<template>
    <div class="container-fluid" id="testimonial">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <h3>This is the testimonial page</h3>
                <!-- {{ $store.getters.getTestimonialData }} -->
            </div>
        </div>
        <div class="row justfy-content-center">
            <div class="container">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item" v-for="testes,index in testimonialData" :key="index" :class="{active: index==0}">
                            <div class="row justify-content-center">
                                <div class="col-md-4 col-lg-4">
                                    <div class="card">
                                        <div class="box front">
                                            <div class="head">
                                                <img :src="testes.pfp" alt="">
                                            </div>
                                            <div class="front-card-content">
                                                <div class="card-body">
                                                     <h2>{{ testes.name}}</h2>
                                                    <h4>{{ testes.job }}</h4>
                                                    <p class="socials">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style="fill: lightgrey;" height="16" width="14" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" style="fill: lightgrey;" height="16" width="15.5" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="box back">
                                            <div class="back-content">
                                                <p>
                                                    {{ testes.quote }}
                                                </p>                                
                                            </div>                                                
                                        </div>
                                    </div>
                                </div>
                            </div>
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
    testimonialData() {
      return this.$store.getters.getTestimonialData;
    },
  },
  mounted() {
    this.$store.dispatch('fetchTestimonialData');
  },
}
</script>
<style scoped>
#testimonial {
    text-align: center;
}

.container {
    margin-top: 5%;
}

.card {
    width: 100%;
    height: 350px;
    transform-style: preserve-3d;
    perspective: 500px;
    border: 2px solid white;
    margin-bottom: 10px;
}

.card-body {
   display: inline; 
}

.card .box {
    position: absolute;
    color: white;
    width: 100%;
    height: 100%;
    box-shadow: 0 15px 35px black;
    transform-style: preserve-3d;
    backface-visibility: hidden;
}

.card .box.front {
    max-height: fit-content;
}

.card .box.box.back {
    max-height: fit-content;
}

.card .box.front .head {
    background-image: url(https://i.postimg.cc/0NWcGp8y/annoying-dog-s-by-suidoh-dabeti4.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}

.card .box.box.front.card .box.back {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.card .box.front img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid black;
    margin-bottom: 15px;
    margin-top: 10px;
}

.card:hover .box.front {
    transform: rotateY(180deg);
}

.box.front h4 {
    font-size: 16px;
    letter-spacing: 2px;
}

.socials svg {
    margin: 0 15px;
}

.card .box.back {
    position: absolute;
    transform: rotateY(180deg);
    padding: 20px 30px;
    text-align: center;
    user-select: none;
    box-sizing: border-box 100% 350px;
}

.box.back p {
    font-size: 16px;
    margin-bottom: 0;
    text-align: start;
}
.card:hover .box.back {
    transform: rotateY(360deg);
}
/* Responsive styles for screens from 769px to 1319px */
@media screen and (min-width: 768px) and (max-width: 1319px) {
    .box.back p {
        font-size: 11px; /* Adjust font size for medium-sized screens */
    }
}
@media screen and (max-width: 439px) {
    .box.back p {
        font-size: 11px;
    }
}
</style>