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
            },
            {
                n: 8,
                name: 'eigth',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quia ducimus possimus deserunt nisi modi ipsam quos, laudantium in provident?'
            },
            {
                n: 9,
                name: 'ninth',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quia ducimus possimus deserunt nisi modi ipsam quos, laudantium in provident?'
            },
            {
                n: 10,
                name: 'tenth',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quia ducimus possimus deserunt nisi modi ipsam quos, laudantium in provident?'
            },
            {
                n: 11,
                name: 'eleventh',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quia ducimus possimus deserunt nisi modi ipsam quos, laudantium in provident?'
            },
            {
                n: 12,
                name: 'twelfth',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quia ducimus possimus deserunt nisi modi ipsam quos, laudantium in provident?'
            },
            {
                n: 13,
                name: 'thirteenth',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quia ducimus possimus deserunt nisi modi ipsam quos, laudantium in provident?'
            }
        ],
        itemsQuantity: 3,
        pageItem: 0,
        itemsPerRow: 3
    },
    mutations: {
        increment(state){
            if(state.itemsQuantity < state.items.length){
                state.itemsQuantity += 3;
                state.itemsPerRow += 3;
            }
            
        },
        nextPage(state){
            if(state.pageItem < state.items.length - state.itemsPerRow && state.itemsQuantity < state.items.length){
                state.pageItem += state.itemsPerRow;
                state.itemsQuantity += state.itemsPerRow;
            }
        },
        prevPage(state){
            if(state.pageItem){
                state.pageItem -= state.itemsPerRow;
                state.itemsQuantity -= state.itemsPerRow;
                if(state.pageItem < 0){
                    state.pageItem = 0
                }
                if(state.itemsQuantity < state.itemsPerRow){
                    state.itemsQuantity = state.itemsPerRow
                }
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