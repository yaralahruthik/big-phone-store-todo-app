<script>
import { VueFinalModal, ModalsContainer } from 'vue-final-modal';
import store from '../store';
import DeleteTask from './DeleteTask.vue';
import UpdateTask from './UpdateTask.vue';

export default {
    data() {
        return {
            showUpdate: false,
            showDelete: false,
        };
    },
    computed: {
        computedClass() {
            let className =
                this.task.dueDate &&
                new Date(this.task.dueDate).getTime() < new Date().getTime() &&
                this.task.status === false
                    ? 'border-red-500 bg-red-500'
                    : 'border-gray-900';

            return className;
        },
        checked() {
            return this.task.status;
        },
    },
    methods: {
        showUpdateTask() {
            this.showUpdate = true;
        },
        cancelUpdate() {
            this.showUpdate = false;
        },
        updateTask(task) {
            store.commit('updateTask', task);
            this.showUpdate = false;
        },
        showDeleteTask() {
            this.showDelete = true;
        },
        cancelDelete() {
            this.showDelete = false;
        },
        deleteTask() {
            store.commit('deleteTask', this.task);
            this.showDelete = false;
        },
        duplicateTask() {
            store.commit('addTask', {
                ...this.task,
                createdOn: new Date().getTime(),
            });
        },
    },
    props: {
        task: Object,
    },
    components: {
        UpdateTask,
        DeleteTask,
        VueFinalModal,
        ModalsContainer,
    },
};
</script>

<template>
    <div
        class="flex w-full items-center justify-between gap-1 rounded border p-2"
        :class="computedClass"
    >
        <vue-final-modal
            classes="flex justify-center items-center h-max m-auto w-full"
            content-class="relative items-center justify-center flex flex-col h-full w-full max-h-full mx-4 p-4 rounded bg-gray-800"
            v-model="showUpdate"
        >
            <UpdateTask
                v-bind:task="task"
                v-bind:cancelUpdate="cancelUpdate"
                v-bind:onUpdate="updateTask"
            />
        </vue-final-modal>
        <vue-final-modal
            classes="flex justify-center items-center h-max m-auto w-full"
            content-class="relative items-center justify-center flex text-white flex-col h-full w-full max-h-full mx-4 p-4 rounded bg-gray-800"
            v-model="showDelete"
        >
            <DeleteTask
                v-bind:onCancel="cancelDelete"
                v-bind:onDelete="deleteTask"
            />
        </vue-final-modal>
        <p
            v-bind:title="task.name"
            class="overflow-x-auto"
            :class="task.status ? 'line-through' : ''"
        >
            {{ task.name }}
        </p>
        <div class="flex items-center justify-center gap-1">
            <p v-bind:title="`Due on: ${task.dueDate}`">🗓️</p>
            <input
                class="h-6 w-6 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 md:h-8 md:w-8"
                name="status"
                type="checkbox"
                id="checkbox"
                v-on:click="updateTask({ ...task, status: !task.status })"
            />
            <button
                class="w-max self-center rounded-sm bg-gray-700 py-1 px-2 text-sm text-white hover:bg-gray-500 md:text-base"
                v-on:click="duplicateTask"
            >
                Duplicate
            </button>
            <button
                class="w-max self-center rounded-sm bg-blue-700 py-1 px-2 text-sm text-white hover:bg-blue-500 md:text-base"
                v-on:click="showUpdateTask"
            >
                Update
            </button>
            <button
                class="w-max self-center rounded-sm bg-rose-700 py-1 px-2 text-sm text-white hover:bg-rose-500 md:text-base"
                v-on:click="showDeleteTask"
            >
                Delete
            </button>
        </div>
    </div>
</template>
