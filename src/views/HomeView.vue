<template>
  <div class="container" id="home">
    <div class="row justify-content-center align-items-center">
      <div class="col-12 text-center">
        <h3>This is the home page</h3>
      </div>
    </div>
    <div class="row justify-content-center align-items-center mt-5">
      <div class="col-md-6 text-center">
        <div class="sans-container">
          <img src="https://i.postimg.cc/MTHfCHZL/pngwing-com.png" alt="">
        </div>
      </div>
      <div class="col-md-6 text-center">
        <div class="speech-container">
          <div class="speech-bubble">
            <div class="speech">
              <p> <span class="star">* </span>Hello.<br>My name is Khwezilomso Mbobo.<br>Do you wanna have a bad time?'cause if not take another step forward, you are REALLY going to like what happens next.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#home {
  text-align: center;
}

.sans-container {
  width: 100%;
  max-width: 550px;
  height: auto;
  overflow: hidden;
  display: inline-block;
}

.sans-container img {
  width: 100%;
  height: auto;
  display: block;
}

.speech-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: fit-content;
  margin-bottom: 100px; /* Adjust spacing */
}
.speech p{
  padding: 10px; /* Optional: Add padding for better readability */
  text-align: left; /* Align text to the left */
  line-height: 1.85; /* Optional: Adjust line height for readability */
}
.star {
  display: block; /* Display the asterisk on its line */
  float: left; /* Float the asterisk to the left */
  width: 25px; /* Adjust width to control the space for the asterisk */
  margin-right: 10px; /* Add space between asterisk and text */
  margin-bottom: 180px; /* Add space below the asterisk */
}
.speech-bubble {
  border: 0.5rem solid white;
  padding: 10px; /* Adjust padding for speech bubble */
  width: 100%;
}
@media screen and (min-width: 992px) and (max-width: 1199px) {
  .star{
    margin-bottom: 240px;
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .star{
    margin-bottom: 360px;
  }
}
@media screen and (min-width: 451px) and (max-width: 514px) {
  .star{
    margin-bottom: 240px;
  }
}
@media screen and (min-width: 419px) and (max-width: 450px) {
  .star{
    margin-bottom: 240px;
  }
}
@media screen and (min-width: 403px) and (max-width: 418px) {
  .star{
    margin-bottom: 270px;
  }
}
@media screen and (min-width: 371px) and (max-width: 402px) {
  .star{
    margin-bottom: 330px;
  }
}
@media screen and (min-width: 336px) and (max-width: 370px) {
  .star{
    margin-bottom: 360px;
  }
}
@media screen and (min-width: 323px) and (max-width: 335px) {
  .star{
    margin-bottom: 360px;
  }
}
@media screen and (min-width: 307px) and (max-width: 322px) {
  .star{
    margin-bottom: 385px;
  }
}
@media screen and (min-width: 300px) and (max-width: 306px) {
  .star{
    margin-bottom: 474px;
  }
}
</style>
