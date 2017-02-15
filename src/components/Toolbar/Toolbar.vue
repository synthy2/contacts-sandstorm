<template lang="html">
  <section class="fixed-toolbar">
    <button type="button" class="button" v-on:click="toggleMenu">
      <span v-show="!isMenuShown">+</span>
      <span v-show="isMenuShown">-</span>
    </button>
    <ul v-show="isMenuShown">
      <li>Import <i class="fa fa-upload" aria-hidden="true"></i></li>
      <li>Export <i class="fa fa-download" aria-hidden="true"></i></li>
    </ul>
  </section>
</template>

<script>


export default {
  data(){
    return {
      isMenuShown: false
    }
  },
  components: {

  },
  methods: {
    toggleMenu(){
      this.isMenuShown = !this.isMenuShown;
    }
  }
}
</script>

<style lang="css">
  .fixed-toolbar {
    position: absolute;
    left: 0;
    top: 0;
  }

  .fixed-toolbar ul{
    list-style: none;
    position: absolute;

  }

  .fixed-toolbar li{
    margin: 16px;
    padding: 16px;
    display: flex;
    position: relative;
    letter-spacing: 2px;
    border-radius: 24px;
    font-size: 0.8em;
    color: white;
  }

  .fixed-toolbar li:nth-child(1){
    background: #AA6C39
  }

  .fixed-toolbar li:nth-child(2){
    background: #882E61
  }




  .fixed-toolbar li i{
    padding-left: 8px;
  }

  .fixed-toolbar button {
    font-size: 32px;
    border-radius: 50%;
    background: #AA3939;
    outline: none;
    border: 0;
    line-height: 32px;
    height: 64px;
    width: 64px;
    vertical-align: center;
    color: white;
  }

  .fixed-toolbar li:hover, button:hover {
    cursor: pointer;
    opacity: 0.9
  }
</style>
