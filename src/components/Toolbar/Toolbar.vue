<template lang="html">
  <section class="fixed-toolbar">
    <button type="button" class="button" v-on:click="toggleMenu" v-show="isOnWhichPage == 'home'">
      <span v-show="!isMenuShown"><i class="fa fa-wrench" aria-hidden="true"></i></span>
      <span v-show="isMenuShown"><i class="fa fa-minus" aria-hidden="true"></i></span>
    </button>
    <router-link to="/contacts" tag="div" v-show="isOnWhichPage != 'home'">
      <button type="button" class="button" v-on:click="toggleMenu" v-show="isOnWhichPage != 'home'">
        <i class="fa fa-home" aria-hidden="true">
      </button>
    </router-link>
    <ul v-show="isMenuShown">

      <router-link to="/import" tag="div" v-show="isOnWhichPage != 'import'">
        <li>Import <i class="fa fa-upload" aria-hidden="true"></i></router-link>
      </li>

      <router-link to="/export" tag="div" v-show="isOnWhichPage != 'export'">
        <li>Export <i class="fa fa-download" aria-hidden="true"></i></li>
      </router-link>

    </ul>
  </section>
</template>

<script>

import { mapGetters } from "vuex";

export default {
  data(){
    return {
      isMenuShown: false
    }
  },
  components: {

  },
  computed: {
    ...mapGetters([
      "isOnWhichPage"
    ])
  },
  methods: {
    toggleMenu(){
      this.isMenuShown = !this.isMenuShown;
    }
  },
  watch: {
    isOnWhichPage(){
      console.log("changed...");
      console.log(this.isOnWhichPage);
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
    letter-spacing: 2px;
    border-radius: 24px;
    font-size: 0.8em;
    color: white;
    width: 100px;
    background: #7f7697;
    box-shadow: inset 0px 0px 10px -1px #855b38;
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
    box-shadow: inset 0px 0px 20px -1px #7a2d2d;
  }

  .fixed-toolbar li:hover, button:hover {
    cursor: pointer;
    opacity: 0.9
  }
</style>
