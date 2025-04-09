const { createApp } = Vue;


createApp({
    data() {
        return {

            products: [
                {
                    id: 1,
                    title: "shose",
                    desecription: " cool shose",
                    price: 20,
                    images: "./images/2.jpg",
                    colors: ["red", "blue", "green"],

                },

                {
                    id: 2,
                    title: "clothes",
                    desecription: " cool clothes",
                    price: 30,
                    images: "./images/5.jpg",
                    colors: ["red", "blue", "green"],
                },
                {
                    id: 3,
                    title: "dresse",
                    desecription: " cool dresse",
                    price: 50,
                    images: "./images/2.jpg",
                    colors: ["red", "blue", "green"],
                },
                {
                    id: 4,
                    title: "hat",
                    desecription: " cool hat",
                    price: 70,
                    images: "./images/5.jpg",
                    colors: ["red", "blue", "green"],
                },

            ]

        };
    },

}).mount("#app-root");