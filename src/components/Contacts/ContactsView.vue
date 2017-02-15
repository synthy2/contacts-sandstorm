<template lang="html">


	<main class="contacts-app">
		<contacts-list />
		<contacts-form />
	</main>


</template>

<script>

import ContactsForm from "./ContactsForm.vue";
import ContactsList from "./ContactsList.vue";


export default {
    data() {
			return {};
    },
    components: {
			ContactsForm,
			ContactsList,
    },
    mounted(){
      this.$store.dispatch("isOnWhichPage", "home");
    }
};
</script>

<style>

.contacts-app {
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
  text-align: center;
}

.contacts-app ul {
  list-style-type: none;
}

.contacts-app li, form {
  text-align: left;
  margin-bottom: 32px;
  border: 1px solid black;
  padding: 16px;

}
.contacts-app form {
  display: flex;
  flex-direction: column;
}

.contacts-app input[type="text"], button {
  padding: 16px;
  margin: 16px;
}



</style>
