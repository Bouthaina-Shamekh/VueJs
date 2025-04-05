const { createApp } = Vue;


createApp({
    data() {
        return {
            name: "Bou",
            age: 25 ,
            
        };
    },
    methods:{


    computed:{

        numOneChange(){
                    console.log(this.nemberOne);
                    return this.nemberOne * 2;
                },
        
                numTwoChange(){
                    console.log(this.nemberTwo);
                    return this.nemberTwo + 10;
                },

    },
      
    },

}).mount("#app-root");