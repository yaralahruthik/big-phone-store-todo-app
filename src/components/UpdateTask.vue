<script>
import store from '../store';

export default {
    props: {
        task: Object,
        cancelUpdate: Function,
        onUpdate: Function,
    },
    data() {
        return {
            name: this.task.name,
            status: this.task.status,
            dueDate: this.task.dueDate,
            createdOn: this.task.createdOn,
        };
    },
    methods: {
        onUpdateTask() {
            this.onUpdate({
                name: this.name.trim(),
                status: this.status,
                dueDate: this.dueDate,
                createdOn: this.task.createdOn,
            });
        },
        cancelUpdateTask() {
            this.cancelUpdate();
        },
    },
};
</script>

<template>
    <form
        v-on:submit.prevent="onUpdateTask"
        class="my-2 flex flex-col items-center justify-center gap-4"
    >
        <div class="flex flex-col items-center justify-center gap-1">
            <label class="text-xl text-white" for="start">Task:</label>
            <input
                type="text"
                id="name"
                v-model="name"
                class="h-10 border border-gray-600 text-xl placeholder:italic placeholder:text-gray-400"
                placeholder="Task Name"
            />
            <label class="text-xl text-white" for="start">Due Date:</label>
            <input
                type="date"
                id="dueDate"
                v-model="dueDate"
                class="h-10 border border-gray-600 text-xl"
            />
        </div>
        <div class="flex gap-2">
            <button
                class="w-max self-center rounded-sm bg-gray-700 py-2 px-4 text-xl text-white hover:bg-gray-500"
                v-on:click="cancelUpdateTask"
                type="button"
            >
                Cancel
            </button>
            <button
                class="w-max self-center rounded-sm bg-green-700 py-2 px-4 text-xl text-white hover:bg-green-500 disabled:cursor-not-allowed disabled:bg-gray-400"
                v-bind:disabled="name.length === 0"
            >
                Update Task
            </button>
        </div>
    </form>
</template>
