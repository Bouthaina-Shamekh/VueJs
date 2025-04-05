const { createApp } = Vue;

// createApp({
//     data() {
//         return {
//             name:"",
//             email:"",
//             password:"",
          
//         };
//     },
//     methods:{

//         sendData(){
//            const newUser = {
//             name:this.name,
//             email:this.email,
//             password:this.password

//            };

//            console.log(newUser);
//         }
      
//     },
// }).mount("#app-root");



createApp({
    data() {
        return {
            age:25,
            isActive:false,
            newUser:{
                
                name:"",
                email:"",
                password:"",
            },
        };
    },
    methods:{

        sendData(){
           
           console.log(this.newUser);
        }
      
    },
}).mount("#app-root");