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
          <Button link="https://w.app/viniciusNunes" />
          <div class="socialLinks">
            <a href="https://github.com/Ptedx" target="_blank">
                <img src="../../assets/img/github.png" alt="github link" width="30px">
            </a>
            <a href="https://www.linkedin.com/in/vinicosta37/" target="_blank">
                <img src="../../assets/img/Linkedin.png" alt="linkedin link" width="30px">
            </a>
            <a href="mailto:vinicosta37@gmail.com" target="_blank">
                <img src="../../assets/img/email.png" alt="email link" width="30px">
            </a>
            <a href="https://w.app/viniciusNunes" target="_blank">
                <img src="../../assets/img/Cellphone.png" alt="instagram link" width="30px">
            </a>
            <a href="https://www.instagram.com/vinic.nunes/" target="_blank">
                <img src="../../assets/img/instagram.png" alt="instagram link" width="30px">
            </a>

          </div>
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
            height: 30%;
        }
        .image{
            height: 60%;
        }
        .HeroSection > div{
            width: 100%;
        }
    }
    .socialLinks{
        display: flex;
        gap:20px;
    }
</style>