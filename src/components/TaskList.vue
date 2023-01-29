<script>
import Task from './Task.vue';

export default {
    name: 'TaskList',
    components: {
        Task,
    },
    props: {
        tasks: Array,
    },
};
</script>

<template>
    <div class="flex w-full flex-col items-center gap-2">
        <Task
            v-for="task in tasks"
            v-bind:key="task.createdOn"
            v-bind:task="task"
        />
    </div>
</template>
