const { createApp } = Vue;

const my_component = {
    template: `
        <h2> Hello My First Component </h2>
        <h3> My name is {{ name }} </h3>
        <h2> My age is {{ age }} </h2>
        <button @click="changeAge"> Click </button>>
    `,

    data() {
        return {
            name: "bou",
            age: 20
        };
    },

    methods: {
        changeAge() {

        this.age++
        }
        
    },
   
    
};

const vue_1 = createApp({
    data() {
        return {
            
        };
    },

    components: {
        my_component,
    },

}).mount("#app-root");

const vue_2 = createApp({
    data() {
        return {
            
        };
    },

    components: {
        my_component,
    },
    

}).mount("#app-root-2");

