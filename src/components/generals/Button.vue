<script setup lang="ts">
    import {gsap} from 'gsap'
    import { ref, onMounted } from 'vue';

  const line = ref<HTMLDivElement>()
  const btnDiv = ref<HTMLDivElement>()

  interface btnProps{
      reversed?:boolean
      content?:string
      link:string
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
        <a :class="{'btn-reverse': reversed, 'btn':!reversed}" target="_blank" :href="link">
            {{content? content:'CONTATAR-ME' }}
        </a>
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
        display: flex;
        justify-content: center;
        align-items: center;
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
        text-decoration: none;
        padding:15px 0;
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