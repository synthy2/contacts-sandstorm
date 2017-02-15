import state from "./state.js";

export default {
  ADD_NEW_CONTACT(state, newContact){
    state.contacts.push(newContact);
  }
};
