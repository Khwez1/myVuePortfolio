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
                        <div class="card" style="width: 18rem; display: inline-block">
                            <img src="" class="card-img-top" alt="">
                            <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-2">
                        <div class="card" style="width: 18rem; display: inline-block;">
                            <img src="" class="card-img-top" alt="">
                            <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-2">
                        <div class="card" style="width: 18rem; display: inline-block">
                            <img src="" class="card-img-top" alt="">
                            <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-2">
                        <div class="card" style="width: 18rem; display: inline-block">
                            <img src="" class="card-img-top" alt="">
                            <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center mt-4">
                    <div class="col-lg-3 col-md-6 mb-2">
                        <div class="card" style="width: 18rem; display: inline-block">
                            <img src="" class="card-img-top" alt="">
                            <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-2">
                        <div class="card" style="width: 18rem; display: inline-block;">
                            <img src="" class="card-img-top" alt="">
                            <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-2">
                        <div class="card" style="width: 18rem; display: inline-block">
                            <img src="" class="card-img-top" alt="">
                            <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-2">
                        <div class="card" style="width: 18rem; display: inline-block">
                            <img src="" class="card-img-top" alt="">
                            <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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