
// console.log(Vue);
// createApp = to create an app
// ref = to create a reactive variable

const { createApp, ref } = Vue;


const app = createApp({
    // template: `
    //     <h1>{{message}}</h1>
    //     <p>- {{author}}</p>
    // `,
    setup() {
        ///console.log('Hola mundo2');
        //const message = "I am Batman";
        const message = ref("I am Clarck");
        const author = ref("Bruce Wayne");

        // setTimeout(() => {
        //     message.value = 'Soy Superman';
        //     author.value = "Soy Batman";
        // }, 1000);


        const changeValues = () => {
            message.value = 'Soy Superman';
            author.value = "Soy Batman";
        }

        return {
            message,
            author,

            changeValues,
        }
    }
})


app.mount("#myApp");