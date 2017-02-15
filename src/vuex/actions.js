import getters 				  from "./getters.js";
import state 				    from "./state.js";


export default {
  addContact({commit}, newContact){
    commit("ADD_NEW_CONTACT", newContact);
  },
  isOnWhichPage({commit}, page){
    commit("IS_ON_WHICH_PAGE", page);
  }
};
