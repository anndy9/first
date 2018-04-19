export default {
    state:{
        show: 0,
        name: ''
    },
    mutations:{
        footer_change(state,name){
            state.show++;
            state.name = name;
        }
    }
}