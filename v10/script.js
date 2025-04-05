const { createApp } = Vue;


createApp({
    data() {
        return {
            nemberOne: 0,
            nemberTwo: 0,
            
        };
    },
    methods:{

    //     numOneChange(){
    //         console.log(this.nemberOne);
    //         return this.nemberOne * 2;
    //     },

    //     numTwoChange(){
    //         console.log(this.nemberTwo);
    //         return this.nemberTwo + 10;
    //     },

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