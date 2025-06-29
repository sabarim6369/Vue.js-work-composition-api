import { ref } from "vue"
export default{
    setup(){
        const count=ref(0);
        const incrementcount=()=>{
            count.value++;
        }
      return {count,incrementcount}
    }
}