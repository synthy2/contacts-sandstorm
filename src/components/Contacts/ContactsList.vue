<template lang="html">


	<ul>
		<li v-for="contact in contacts">
      <header class="contact-header">
        <img src="../../assets/img/thief.png" />
        <span>{{ contact.name }}</span>
        <span class="small-number">{{ contact.number }}</span>
      </header>
      <summary class="summary-description">
        <span>{{ contact.summary }}</span>
      </summary>
    </li>
	</ul>


</template>

<script>

import { mapGetters } from "Vuex";

export default {
    data() {
			return {};
    },
    components: {

    },
		computed: {
			...mapGetters([
				"contacts"
			])
		},
    mounted(){
      console.log(this.contacts);
    }
};
</script>

<style>




.contact-header img {
  width: 64px;
  background: grey;
  border-radius: 50%;
}

.contact-header span {
  font-size: 24px;
  line-height: 64px;
  vertical-align: top;
  margin-left: 32px;
}

.summary-description {
  padding-top: 16px;
  font-size: 0.85em;
}

.small-number {
  float: right;
  font-size: 0.7em;
}

</style>
