import {fibonacci} from './action';
export const initialState = {
    nthFib: [],
};

export default function fibReducer(state = initialState, action) {
    let { type,  payload  } = action;

    switch (type) {
        case 'git nth fibonacci':
            let array = fibonacci(payload);
            return { ...state, nthFib: array[array.length-1] };
        default:
            return state;
    }
}

export function get(payload) {
    return {
        type: 'get nth fibonacci',
        payload: payload,
    };
}
