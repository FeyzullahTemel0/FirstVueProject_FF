<template>
  <div id="app">
    <div class="bar">
      <ul class="navigation">
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
      </ul>
    </div>  
        <router-view></router-view>
    <footer class="footer">
      <div class="footer-content">
        <p>Mr. Zodiac</p>
      </div>
    </footer>
  </div>
</template>

<style>
.bar {
  position: fixed;
  top: 0;
  left: 10%;
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  background-color: #333;
  margin-top: 10px;
  border-radius: 25px;
}

.navigation {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.navigation li {
  margin-right: 10px;
}

.navigation li:last-child {
  margin-right: 0;
}

.navigation a {
  display: block;
  color: #fff;
  text-decoration: none;
  padding: 10px;
}

.navigation a:hover {
  background-color: #555;
}

.content {
  min-height: calc(100vh - 70px);
  padding-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-content {
  max-width: 1200px;
}

.footer {
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
  position: sticky;
  bottom: 0;
}
</style>
