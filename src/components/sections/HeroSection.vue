<script setup lang="ts">
    import Button from '../generals/Button.vue';
    import { gsap } from 'gsap';
    import {ref, onMounted} from 'vue'

    const image = ref<HTMLDivElement>()

    onMounted(()=>{
        if(image.value){
            gsap.fromTo(image.value,{ x:50, opacity:0,  duration:0.4}, {x:0,opacity:1, duration:0.4})
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
        <div class="image" ref="image">
          <img src="../../assets/img/Profile_s_bg.png" alt="Main Photo" width="100%">
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
    .HeroSection > div{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .mainText{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .mainText> h1{
        font-size: 60px;
    }
    .mainText>h3{
        font-size: 24px;
    }
    @media (max-width:768px) {
        .HeroSection{
            flex-direction: column;
            height: 100%;
        }
        .HeroSection > div{
            width: 100%;
            margin-bottom: 20px;
        }
        .mainText{
            padding: 10% 0; 
        }
    }
    .image{
        opacity: 0;
    }
</style>