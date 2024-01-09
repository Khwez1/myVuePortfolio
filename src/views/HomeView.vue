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
              <p> <span class="star">* </span>Hello.<br>My name is Khwezilomso Mbobo.<br>Do you wanna have a bad time?'cause if you take another step forward, you are REALLY not going to like what happens next.</p>
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
}
</style>
