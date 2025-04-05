const { createApp } = Vue;


createApp({
    data() {
        return {
        //    child:["Ahmed" ,"Ali" ,"Moh"]

        students:[
            {id:1 , name:"Ahmed" , age:20},
            {id:2 , name:"Ali" , age:22},
            {id:3 , name:"Moh" , age:24},
        ]
            
        };
    },
    methods:{


    computed:{

        

    },
      
    },

}).mount("#app-root");