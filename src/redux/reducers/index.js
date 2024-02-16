import { ADD_TASK, DELETE_TASK } from "../types";

const intialState = {
    tasks: [],

}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: action?.payload,
                // tasks: [...state.tasks, action.payload],
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: action.payload, // Updated tasks array after deletion
            };
        default:
            return state
    }
}
export default reducer;