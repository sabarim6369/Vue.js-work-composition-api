import {ref,onMounted,watch} from "vue"
export default{
    setup(){
        
        const data=ref(0)
        const inputRef=ref(null)
       onMounted(() => {
         inputRef.value.focus();
       });
       watch(data,(newval,oldval)=>{
        console.log(`value changed from ${oldval} to ${newval}`);
       })
        const type=ref("password")
        return{data,type,inputRef}

    }
  
}