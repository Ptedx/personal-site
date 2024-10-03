<script setup lang="ts">
    import {gsap} from 'gsap'
    import { ref, onMounted } from 'vue';
    function showHelloWorld(){
    console.log('Opa, me clicou ;)')
  }

  const line = ref<HTMLDivElement>()
  const btnDiv = ref<HTMLDivElement>()

  interface btnProps{
      reversed?:boolean
      content?:string
    }
    const props = defineProps<btnProps>()
    onMounted(()=>{
        if(btnDiv.value){
            const widthLine = btnDiv.value.getBoundingClientRect().width
            gsap.fromTo(line.value!,{x:-30}, {x: widthLine*1.2, duration:1, repeatDelay:1, repeat: - 1})
        }
    })
</script>

<template>
    <div class="btn-div" ref="btnDiv"> 
        <button :class="{'btn-reverse': reversed, 'btn':!reversed}" v-on:click="showHelloWorld">
            {{content? content:'CONTATAR-ME' }}
        </button>
        <div class="btn-line" ref="line"></div>
    </div>
</template>

<style>
    .btn-div{
        position: relative;
        width: 50%;
        overflow: hidden;
    }
    .btn, .btn-reverse{
        padding:15px 0;
        background-color: #ffe46e;
        margin: 15px 0;
        font-weight: bold;
        border-radius: 5px;
        overflow: hidden;
        width: 100%;
        border: 2px solid #ffe46e;
        transition: 0.1s;
        cursor: pointer;
        font-size: 18px;
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
    .btn-line{
        position: absolute;
        background-color: rgba(255,255,255,0.5);
        width: 25px;
        top: -25px;
        left: 0;
        height: calc(100% + 35px);
        rotate: 45deg;
    }
</style>