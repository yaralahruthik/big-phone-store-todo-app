<script>
import TaskList from './components/TaskList.vue';
import AddTask from './components/AddTask.vue';
import store from './store/index';

export default {
    name: 'App',
    components: {
        TaskList,
        AddTask,
    },
    data() {
        return {
            selected: 'ALL',
        };
    },
    computed: {
        showAddTask() {
            return store.state.showAddTask;
        },
        tasks() {
            const tasks = store.state.tasks;
            if (this.selected === 'PENDING') {
                return tasks.filter((task) => !task.status);
            } else if (this.selected === 'COMPLETED') {
                return tasks.filter((task) => task.status);
            }

            return tasks;
        },
    },
    methods: {
        openAddTask() {
            store.commit('showAddTask', true);
        },
    },
    store: store,
};
</script>

<template>
    <div id="app">
        <header class="bg-black p-2 text-center text-xl text-white">
            The Big Phone Store To Do
        </header>

        <main class="m-2 flex flex-col gap-2">
            <button
                v-if="!showAddTask"
                v-on:click="openAddTask"
                class="mb-2 w-max self-center rounded-sm bg-green-700 py-2 px-4 text-white hover:bg-green-500"
            >
                Add Task
            </button>
            <AddTask v-if="showAddTask" />
            <select
                class="w-max self-end bg-gray-600 p-2 text-white"
                v-model="selected"
            >
                <option value="ALL">All</option>
                <option value="PENDING">Pending</option>
                <option value="COMPLETED">Completed</option>
            </select>
            <p
                v-if="tasks.length === 0"
                class="flex w-full items-center justify-center gap-1 rounded border border-gray-900 p-2"
            >
                {{
                    selected === 'ALL'
                        ? 'No tasks added...'
                        : 'No tasks found...'
                }}
            </p>
            <TaskList v-bind:tasks="tasks" />
        </main>
    </div>
</template>
