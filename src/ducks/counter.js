// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

//ACTION CREATORS
export function increment(amount){
    return{
        type: INCREMENT,
        amount
    };
}
export function decrement(amount) {
    return {
        type: DECREMENT,
        amount
    };
}

const intitialState = {
    currentValue:0
};

export default function counter(state = intitialState , action){
    switch(action.type){
        case INCREMENT:
            return Object.assign({},state,{currentValue: state.currentValue + action.amount})

        case DECREMENT:
            return Object.assign({}, state, { currentValue: state.currentValue - action.amount })

        default:
            return state;
    }
}