<template lang="html">
  <main class="fullpage-widget">
    <div class="import-area">
      <h4>Drag &amp; Drop</h4>
    </div>
  </main>
</template>

<script>
export default {
  mounted(){
    this.$store.dispatch("isOnWhichPage", "import");
  }
}
</script>

<style lang="css">

  .import-area {
    background: rgba(0,0,0,0.15);
    margin-left: 15%;
    height: 100%;
    width: 85%;
    border-left: 3px solid rgba(0,0,0,0.3);
  }
  .import-area:hover {
    cursor: -webkit-grab;
  }
  .import-area h4 {
    padding-top: 256px;
  }
</style>
