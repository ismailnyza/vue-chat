<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <!-- TODO: add icons -->
    <router-link to="/chat">Chat</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <router-view class="main" />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(255, 255, 255);
  overflow-x: hidden;
  padding-top: 16px;

  a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 20px;
    color: #000000;
    display: block;
  }

  a:hover {
    color: #1a1818;
  }
}

.main {
  margin-left: 160px;
  padding: 0px 10px;
  background: #2c3e50;
  height: 100%;
}
</style>
