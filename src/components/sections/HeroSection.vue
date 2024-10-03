<script setup lang="ts">
    import Button from '../generals/Button.vue';
    import { gsap } from 'gsap';
    import {ref, onMounted} from 'vue'

    const image = ref<HTMLImageElement>()

    onMounted(()=>{
        if(image.value){
            gsap.fromTo(image.value,{ x:50, opacity:0}, {x:0,opacity:1, duration:0.4})
        }
    })
</script>

<template>
    <section class="HeroSection">
        <div class="mainText">
          <h1>Vinícius Costa</h1>
          <h3>FullStack Developer</h3>
          <Button />
        </div>
        <div class="image">
          <img src="../../assets/img/Profile_s_bg.png" ref="image" alt="Main Photo" width="100%" height="100%">
        </div>
    </section>
</template>

<style>
    .HeroSection{
        height: calc(100vh - 80px);
        margin-top: 80px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .HeroSection >div{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .mainText{
        flex-direction: column;
        height: 100%;
    }
    .image{
        height: 100%;
    }
    .mainText> h1{
        font-size: 40px;
    }
    .mainText>h3{
        font-size: 24px;
    }
    @media (max-width:768px) {
        .HeroSection{
            flex-direction: column;
            justify-content: start;
            overflow: hidden;
        }
        .mainText{
            height: 35%;
        }
        .image{
            height: 65%;
        }
        .HeroSection > div{
            width: 100%;
        }
    }
</style>