const flashCardApp = {
    data(){
        
        return{
            deckName:"Vue.js main list",
            cards,
            flipped:false,
            readMoreUrl:"https://v3.vuejs.org/guide/",
            index:0
        };
        
    },
    methods:{
        move(change){
            if(this.cards[this.index + change]){
                this.index += change;
                this.flipped = false;
            }
            
        }
    }
};
const app = Vue.createApp(flashCardApp).mount('#app')