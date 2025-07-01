import { defineStore } from "pinia";
const Mainstore=defineStore('main',{
    state:()=>({
        count:0
    }),
    actions:{
        increasecount(){
            this.count++;
        },
        decreasecount(){
            if(this.count<1)return
            this.count--;
        }
    }
})
export default Mainstore