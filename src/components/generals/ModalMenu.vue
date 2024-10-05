<script setup lang="ts">

    interface modalProps{
        isPressed?: boolean,
        function: ()=>void,
    }
    const props = defineProps<modalProps>()

</script>

<template>
    <div class="mainModal" :class="{'hiddenModal': !isPressed}">
        <div class="menuModal" :class="{'show': isPressed, 'hide': !isPressed}">
            <a class="link" href="#projectSection">Projetos</a>
            <a class="link" href="#contacts">Contatos</a>
        </div>
        <button class="close" :onclick="function"/>
    </div>
</template>

<style>
    .mainModal{
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-direction: column;
        margin-top: 80px;
        position: absolute;
        top:0;
        right:0;
        min-height: 100vh;
        width: 100vw;
    }
    .hiddenModal{
        min-height: 0;
    }
    .close{
        width: 100%;
        flex-grow: 1;
        border: transparent;
        background-color: transparent;
    }
    .menuModal{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        width: 100%;
        gap:30px;
        background-color: white;
        border: solid #ffe46e;
        border-width:0px 2px 2px 2px;
        border-radius: 0px 0px 20px 20px;
    }
    .menuModal >a{
        text-decoration: none;
        font-size: 18px;
    }
    .show{
        opacity: 1;
        max-height:25vh;
        transition: 0.2s ease;
    }
    .hide{
        opacity: 0;
        max-height: 0;
        transition: max-height 0.4s ease, opacity 0.2s ease;
    }
</style>