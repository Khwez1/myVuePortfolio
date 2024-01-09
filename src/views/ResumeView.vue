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
                    <div class="col-lg-3 col-md-6 mb-2">
                        <div class="card" style="width: 18rem; display: inline-block;">
                            <img src="https://i.postimg.cc/DzMNpds4/pngwing-com-1-modified.png" height="240px" class="card-img-top" alt="">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-2">
                        <div class="card" style="width: 18rem; display: inline-block;">
                            <img src="https://i.postimg.cc/LsYD5dYh/html5-logo-modified.png" height="240px" class="card-img-top" alt="">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-2">
                        <div class="card" style="width: 18rem; display: inline-block">
                            <img src="https://i.postimg.cc/BZgTqZYM/bootstrap-logo-modified.png" height="240px" class="card-img-top" alt="">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-2">
                        <div class="card" style="width: 18rem; display: inline-block">
                            <img src="https://i.postimg.cc/Tw2PQxV3/css3-logo-modified.png" height="240px" class="card-img-top" alt="">
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center mt-4">
                    <div class="col-lg-3 col-md-6 mb-2">
                        <div class="card" style="width: 18rem; display: inline-block">
                            <img src="https://i.postimg.cc/HnRsp7fr/Vue-js-Logo-2-modified.png" height="240px" class="card-img-top" alt="">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-2">
                        <div class="card" style="width: 18rem; display: inline-block;">
                            <img src="https://i.postimg.cc/nhRZZmBp/Js-logo-512-modified.png" height="240px" class="card-img-top" alt="">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-2">
                        <div class="card" style="width: 18rem; display: inline-block">
                            <img src="https://i.postimg.cc/YqDyCznn/nodejs-icon-modified.png" height="240px" class="card-img-top" alt="">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-2">
                        <div class="card" style="width: 18rem; display: inline-block;">
                            <img src="https://i.postimg.cc/85s7NDjn/mysql-icon.png" height="240px" class="card-img-top bg-light" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
  
  }
</script>
<style>
#resume{
    text-align: center;
}
.skills{
    overflow: hidden;
    margin-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: fit-content;
}
@media (max-width: 1165px) and (min-width: 992px) {
  .skills .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
@media (max-width: 1165px) {
  .container-fluid {
    padding-right: 10px;
  }
}

</style>