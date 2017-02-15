<template lang="html">
  <main class="fullpage-widget">
    <h4>Export to:</h4>
    <ul>
      <li>Google CSV</li>
      <li>Other</li>
    </ul>
  </main>
</template>

<script>
export default {
  mounted(){
    this.$store.dispatch("isOnWhichPage", "export");
  }
}
</script>

<style lang="css">



</style>
