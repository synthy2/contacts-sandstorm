
// LIBS
import Vue 									from "vue";
import { sync }							from "vuex-router-sync";

// css n shiz
import KeenUI 							from "keen-ui";

// STORE
import store 								from "./vuex/store.js";

// ROUTER
import router 							from "./router/router.js";

// Combine
sync(store, router);
Vue.use(KeenUI);

// CORE
import App 									from "./components/App.vue";


// INSTANCE
new Vue({
	el: "#app",
	render: h => h(App),
	router,
	store,
});
