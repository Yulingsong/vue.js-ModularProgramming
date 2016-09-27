/**
 * Created by justinjiang on 2016/9/20.
 */
<template>
<div class="hello">
  <h1>{{ msg }}</h1>
  <a v-link="{ name: 'about' }">关于</a>
  <a v-link="{ name: 'home' }">回去主页</a>
</div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'About!'
    }
  }
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
