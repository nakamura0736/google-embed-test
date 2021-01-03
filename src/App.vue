<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <router-link class="navbar-brand" to="/">Home</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <!-- <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a> -->
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="/calendar">Calendar</a> -->
            <router-link class="nav-link" to="/calendar">Calendar</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="/form">Form</a> -->
            <router-link class="nav-link" to="/form">Form</router-link>

          </li>
         
        </ul>
       
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
