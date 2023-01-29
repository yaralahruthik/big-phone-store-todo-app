<script>
export default {
    props: {
        onCancel: Function,
        onDelete: Function,
    },
};
</script>

<template>
    <div class="my-2 flex flex-col gap-4">
        <p class="text-xl">Are you sure?</p>
        <div class="flex gap-4">
            <button
                class="w-max self-center rounded-sm bg-gray-700 py-2 px-4 text-xl text-white hover:bg-gray-500"
                v-on:click="onCancel"
            >
                Cancel
            </button>
            <button
                class="w-max self-center rounded-sm bg-red-700 py-2 px-4 text-xl text-white hover:bg-red-500"
                v-on:click="onDelete"
            >
                Delete
            </button>
        </div>
    </div>
</template>
