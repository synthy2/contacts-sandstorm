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
  margin-top: 64px;
  text-align: center;
}

.contacts-app ul {
  list-style-type: none;
}

.contacts-app li, form {
  text-align: left;
  margin-bottom: 32px;
  border: 1px solid rgba(0,0,0,0.2);
  padding: 16px;

}
.contacts-app form {
  display: flex;
  flex-direction: column;
  outline: none;
}

.contacts-app input[type="text"], button {
  font-family: 'Cuprum', sans-serif;
  font-size: 16px;
  padding: 16px;
  margin: 16px;
  border: 1px solid rgba(0,0,0,0.3);
}

.contacts-app input[type="text"]:focus {
  outline: 1px solid #95d4dd;
}


.contacts-app button {
  background: rgba(32,115,138,0.13);
}



</style>
