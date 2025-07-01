import {ref,onMounted,watch} from "vue"
export default{
  props:{
message:String,
arr1:Array,
  },
 emits: ['data','3rddata'],
     setup(props, { emit }) { 
        const data=ref(0)
        const inputRef=ref(null)
       onMounted(() => {
         inputRef.value.focus();
       });
       watch(data,(newval,oldval)=>{
        console.log(`value changed from ${oldval} to ${newval}`);
       })
        const type=ref("password")
        const dummydata=ref('');
        const senddatatoparent=(msg)=>{
          emit('data',msg);
       
        }
        const send3data=()=>{
          emit('3rddata',"hii this is 3rddata")
        }
        return{data,type,inputRef,senddatatoparent,dummydata,send3data}

    }
  
}