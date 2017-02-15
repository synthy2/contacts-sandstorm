<template lang="html">


	<form>
		<input type="text" placeholder="Contact Name" v-model.trim="newContact.name"/>
    <input type="text" placeholder="Contact Number" v-model.trim="newContact.number"/>
    <input type="text" placeholder="Contact Summary" v-model.trim="newContact.summary"/>
		<button name="button" v-on:click.prevent="addContact">
			<i class="fa fa-plus" aria-hidden="true"></i> Add
		</button>
	</form>


</template>

<script>

export default {
    data() {
			return {
				newContact: {}
			};
    },
    components: {

    },
		methods: {
      addContact(){
        this.$store.dispatch("addContact", this.newContact);
        this.newContact = {};
      }
    }
};
</script>

<style >

</style>
