const { createApp } = Vue;

createApp({
    data() {
        return {
            // message: "Hello Vue!",
            // name: "Bouthaina",
            // // age:25,
            // link: "https://ar-ar.facebook.com/",
            number:0,
        };
    },
    methods:{
        // sayHi(time, name){
        //     return "Good" +time + "," +name;
        // }

        testFunction(){
            // console.log("done");
            this.number++;
        },
        testMe(){
            console.log('perfect')
        },
        printMyName(){
            console.log("Bouthaina");
        }
    },
}).mount("#app-root");