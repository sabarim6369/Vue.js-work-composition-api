    import { ref } from "vue"
    import LoginPage from "../Login/LoginPage.vue";
    import Mainstore from "../Store";
    export default{
        components:{
       LoginPage
        },
        setup(){
            const mainstore=Mainstore();
            const count=ref(0);
            const arr=ref([1,2,3,4,5])
            const incrementcount=()=>{
                count.value++;
            }
            const message="This is sabari";
            const arr1=[1,2,3,4,5]
              const receivedMessage = ref('') // to store data from child
              const test2=ref('')

    const handleMyEvent = (payload) => {
      receivedMessage.value = payload
      console.log('Data received from child:', payload)
    }
    const datafromchild=(msg)=>{
        test2.value=msg;
    }
        return {count,incrementcount,arr,message,arr1,handleMyEvent,receivedMessage,datafromchild,test2,mainstore}
        }
    }