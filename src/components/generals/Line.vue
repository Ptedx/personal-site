<script setup lang="ts">

    interface lineProps{
        width?:string
    }

    const props = defineProps<lineProps>()
</script>

<template>
    <div class="line" :style="{'--widthSize': props.width || `100%`}"></div>
</template>

<style>
    .line{
        width: var(--widthSize);
        height: 5px;
        background-color: #ffe46e;
        margin-bottom: 10px;
    }
</style>