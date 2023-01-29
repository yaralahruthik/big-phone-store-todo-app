<script>
import store from '../store';

export default {
    data() {
        return {
            name: '',
            status: false,
            dueDate: null,
        };
    },
    methods: {
        onAddTask() {
            store.commit('addTask', {
                name: this.name.trim(),
                status: this.status,
                dueDate: this.dueDate,
                createdOn: new Date().getTime(),
            });
            store.commit('showAddTask', false);
        },
        cancelAddTask() {
            store.commit('showAddTask', false);
        },
    },
};
</script>

<template>
    <form
        v-on:submit.prevent="onAddTask"
        class="my-2 flex flex-col items-center justify-center gap-1"
    >
        <div class="flex flex-col gap-1">
            <input
                type="text"
                v-model="name"
                class="h-10 border border-gray-600 text-xl placeholder:italic placeholder:text-gray-400"
                placeholder="Task Name"
            />
            <input
                type="date"
                v-model="dueDate"
                class="h-10 border border-gray-600 text-xl"
            />
        </div>
        <div class="flex gap-2">
            <button
                class="w-max self-center rounded-sm bg-gray-700 py-2 px-4 text-white hover:bg-gray-500"
                v-on:click="cancelAddTask"
                type="button"
            >
                Cancel
            </button>
            <button
                class="w-max self-center rounded-sm bg-green-700 py-2 px-4 text-white hover:bg-green-500 disabled:cursor-not-allowed disabled:bg-gray-400"
                v-bind:disabled="name.length === 0"
            >
                Add Task
            </button>
        </div>
    </form>
</template>
