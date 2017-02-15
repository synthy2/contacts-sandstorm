import Vue 									from "vue";
import VueRouter 						from "vue-router";

Vue.use(VueRouter);

import ContactsView 				from "../components/Contacts/ContactsView.vue";
import ExporterView 				from "../components/Exporter/Exporter.vue";
import ImporterView 				from "../components/Importer/Importer.vue";


// define routes
const routes = [
	{ path: "/", redirect: "/contacts" },
	{ path: "/contacts", component: ContactsView },
  { path: "/export", component: ExporterView },
  { path: "/import", component: ImporterView }
];

// initialise & export Instance
export default new VueRouter({
	base: __dirname + "/",
	routes
});
