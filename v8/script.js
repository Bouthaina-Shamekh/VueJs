const { createApp } = Vue;

createApp({
    data() {
        return {
          name:"Bouthaina",
          city:"Gaza",
            number:0,
        };
    },
    methods:{

        printMyName(){
            console.log("Bouthaina");
        }
      
    },
}).mount("#app-root");