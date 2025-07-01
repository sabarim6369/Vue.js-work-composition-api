import { defineStore } from "pinia";
const Mainstore = defineStore("main", {
  state: () => ({
    count: 0,
    firstName: "Sabari",
    lastName: "M",
  }),
  actions: {
    increasecount() {
      this.count++;
    },
    decreasecount() {
      if (this.count < 1) return;
      this.count--;
    },
  },
  //getters are same like computed in vue.that is when its dependcy change it chang automatically accordingly
  getters: {
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
});
export default Mainstore
