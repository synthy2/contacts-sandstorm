<template lang="html">
  <main class="fullpage-widget">
    <div class="upload-dropzone" v-on:click="invokeFileUpload">
      <!-- some shitty diagonal lines for styling -->
      <div class="hatched-bg"></div>
      <!-- some large blue area with some informative text -->
      <div class="import-area">
        <h4>Drag &amp; Drop</h4>
        <h6>or click!</h6>
      </div>
      <!-- a hidden input field which 'holds' the File - is invoked by the invokeFileUpload method -->
      <input type="file" ref="importer-file-input" class="hidden" v-on:change="handleFileUpload">
    </div>

  </main>
</template>

<script>
export default {
  methods: {
    handleFileUpload(){
      // allows a single file!!!
      let file = this.$refs["importer-file-input"].files[0];
      console.log(file)

    },
    invokeFileUpload(){
      this.$refs["importer-file-input"].click();
    }
  },
  mounted(){
    this.$store.dispatch("isOnWhichPage", "import");
  }
}
</script>

<style lang="css">

  .import-area {
    background: radial-gradient(ellipse at center, rgba(254,255,255,1) 0%,rgba(221,241,249,1) 35%,rgba(160,216,239,1) 100%);
    margin-left: 15%;
    height: 100%;
    width: 85%;
    border-left: 3px solid rgba(0,0,0,0.3);
    position: absolute;
    z-index: 3;
  }
  .import-area:hover, .hatched-bg:hover {
    cursor: -webkit-grab;
  }
  .import-area h4 {
    padding-top: 256px;
  }
  .hatched-bg {
    float: left;
    margin-left: 15%;
    position: absolute;;
    z-index: 4;
    opacity: 0.1;
    width:  85%;
    height: 100%;
    background: repeating-linear-gradient(
                  45deg,
                  #606dbc,
                  #606dbc 10px,
                  #465298 10px,
                  #465298 20px
                );

  }
  .hidden {
    display: none;
  }

</style>
