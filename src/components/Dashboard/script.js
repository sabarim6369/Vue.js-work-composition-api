import { ref } from "vue"
export default{
    setup(){
        const count=ref(0);
        const arr=ref([1,2,3,4,5])
        const incrementcount=()=>{
            count.value++;
        }
      return {count,incrementcount,arr}
    }
}