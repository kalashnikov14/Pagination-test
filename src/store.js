import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        items: [
            {
                n: 1,
                name: 'first',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quia ducimus possimus deserunt nisi modi ipsam quos, laudantium in provident?'
            },
            {
                n: 2,
                name: 'second',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quia ducimus possimus deserunt nisi modi ipsam quos, laudantium in provident?'
            },
            {
                n: 3,
                name: 'third',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quia ducimus possimus deserunt nisi modi ipsam quos, laudantium in provident?'
            },
            {
                n: 4,
                name: 'fourth',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quia ducimus possimus deserunt nisi modi ipsam quos, laudantium in provident?'
            },
            {
                n: 5,
                name: 'fifth',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quia ducimus possimus deserunt nisi modi ipsam quos, laudantium in provident?'
            },
            {
                n: 6,
                name: 'sixth',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quia ducimus possimus deserunt nisi modi ipsam quos, laudantium in provident?'
            },
            {
                n: 7,
                name: 'seventh',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quia ducimus possimus deserunt nisi modi ipsam quos, laudantium in provident?'
            }
        ],
        itemsQuantity: 3,
        pageItem: 0,
    },
    mutations: {
        increment(state){
            if(state.itemsQuantity < state.items.length){
                state.itemsQuantity += 3;
            }
            
        },
        nextPage(state){
            if(state.pageItem < state.items.length - 3 && state.itemsQuantity < state.items.length){
                state.pageItem +=3;
                state.itemsQuantity += 3;
            }
        },
        prevPage(state){
            if(state.pageItem){
                state.pageItem -=3;
                state.itemsQuantity -= 3;
            }
        }
    },
    getters: {
        getItems: state => {
            return state.items.slice(state.pageItem, state.itemsQuantity)
        },
    },
    actions: {
       
    }
})

export default store