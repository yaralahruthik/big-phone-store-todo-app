import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        tasks: [],
        showAddTask: false,
    },
    mutations: {
        showAddTask(state, toShow) {
            state.showAddTask = toShow;
        },
        addTask(state, task) {
            state.tasks = [task, ...state.tasks];
        },
        updateTask(state, task) {
            const taskToUpdate = state.tasks.find(
                (item) => item.createdOn === task.createdOn
            );
            taskToUpdate.name = task.name;
            taskToUpdate.dueDate = task.dueDate;
            taskToUpdate.status = task.status;
        },
        deleteTask(state, task) {
            state.tasks = state.tasks.filter(
                (item) => item.createdOn !== task.createdOn
            );
        },
    },
});

export default store;
