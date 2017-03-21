<template lang="html">


	<form class="add-new-form">
		<input type="text" placeholder="Contact Name" v-model.trim="newContact.name" v-bind:class="{ 'validation-warning': showValidationWarning }"/>
    <input type="text" placeholder="Contact Number" v-model.trim="newContact.number" v-bind:class="{ 'validation-warning': showValidationWarning }"/>
		<button name="button" v-on:click.prevent="addContact">
			<i class="fa fa-plus" aria-hidden="true"></i> Add
		</button>
	</form>


</template>

<script>

export default {
    data() {
			return {
				newContact: {},
        showValidationWarning: false
			};
    },
    components: {

    },
		methods: {
      addContact(){
        if (!this.newContact.name || !this.newContact.number){
          this.showValidationWarning = true;
          setTimeout(() => {
            this.showValidationWarning = false;
          }, 2000);
          return;
        }
        else {
          this.$store.dispatch("addContact", this.newContact);
          this.newContact = {};
        }
      }
    }
};
</script>

<style >

  .validation-warning {
    border: 1px solid orange !important;
  }
</style>
