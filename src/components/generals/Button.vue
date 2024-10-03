<script setup lang="ts">
    function showHelloWorld(){
    console.log('Opa, me clicou ;)')
  }

  interface btnProps{
    reversed?:boolean
  }
  const props = defineProps<btnProps>()
</script>

<template>
    <button :class="{'btn-reverse': reversed, 'btn':!reversed}" v-on:click="showHelloWorld">CONTATAR-ME</button>
</template>

<style>
    .btn, .btn-reverse{
        padding:15px 0;
        background-color: #ffe46e;
        margin: 15px 0;
        font-weight: bold;
        border-radius: 5px;
        position: relative;
        overflow: hidden;
        width: 50%;
        border: 2px solid #ffe46e;
        transition: 0.1s;
        cursor: pointer;
    }
    .btn:hover{
        background-color: white;
        color: #ffe46e;
    }
    .btn-reverse{
        background-color: white;
        color: #ffe46e;
    }
    .btn-reverse:hover{
        background-color: #ffe46e;
        color: black;
    }
</style>