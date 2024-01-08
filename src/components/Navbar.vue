<template>
  <nav class="navbar navbar-dark navbar-expand-lg ">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Khwezi</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav custom-navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/resume">Resume</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/projects">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/testimonial">Testimonial</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
    
}
</script>
<style>
.custom-navbar-nav{
  margin-left: auto;
}
nav {
  padding: 30px;
}

/* Styling for navigation links */
nav a.nav-link {
  color: white; /* Set the color */
  text-decoration: none; /* Remove default underline */
  position: relative; /* Ensures transition-delay works properly */
}

/* Create an ::after pseudo-element for the underline effect */
nav a.nav-link::after {
  content: ''; /* Required for ::after pseudo-element */
  position: absolute; /* Position the underline */
  left: 50%; /* Align the underline with the link */
  transform: translateX(-50%); /* Adjust to align the underline at the center */
  bottom: -2px; /* Adjust the position of the underline */
  width: 0; /* Initial width of the underline */
  height: 2px; /* Height of the underline */
  background-color: white; /* Color of the underline */
  transition: width 0.3s ease; /* Transition for the underline width */
}

/* Expand the ::after pseudo-element on hover */
nav a.nav-link:hover::after {
  width: 100%; /* Expand the width to create the underline effect */
  transition-delay: 0.2s; /* Delay before the transition starts on hover */
}


nav a.router-link-exact-active {
  color: #42b983;
}

.navbar-brand::first-letter{
  color: red;
}

button{
  cursor: none !important;
}
</style>