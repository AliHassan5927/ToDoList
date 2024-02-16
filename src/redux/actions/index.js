import { ADD_TASK, DELETE_TASK } from "../types";


export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task,
    };
};

export const deleteTask = (updatedTasks) => {
    return {
        type: DELETE_TASK,
        payload: updatedTasks,
    };
};
