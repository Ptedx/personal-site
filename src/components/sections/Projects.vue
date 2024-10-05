<script setup lang="ts">
    import { onMounted } from 'vue';
    import Line from '../generals/Line.vue';
    import gsap from 'gsap';


    onMounted(() => {     
        gsap.from('.projectSection',{
            opacity:0,
            scrollTrigger:{
                trigger: '.projectSection',
                start:'top 60%',
                end: 'center 40%',
                scrub: 0.5,
            }
        })
    })

</script>

<template>
    <section class="projectSection" id="projectSection">
        <div class="texts">
            <h1>PROJETOS</h1>
            <Line width="50%"/>
            <p>Cada projeto possui a sua versão completa disponiblizada no 
                <a href="https://github.com/Ptedx" target="_blank">Github</a>
            </p>
        </div>
        <div class="projects">
            <div class="project">
                <img src="../../assets/img/project_1.png" loading="lazy" alt="Projeto 1" width="100%">
                <a href="https://all-coins.vercel.app" target="_blank" class="project-link"></a>
            </div>
            <div class="project">
                <img src="../../assets/img/project-2.png" loading="lazy" alt="Projeto 2" width="100%">
                <a href="https://vital-agro-site.vercel.app" target="_blank" class="project-link"></a>
            </div>
        </div>
    </section>
</template>

<style>
    .projectSection, .workSection{
        scroll-margin-top: 80px;
        width: 100%;
        padding: 80px 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .projectSection > div, .workSection > div{
        width: 100%;
        display: flex;
    }
    .texts{
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 10px 0;
        margin-bottom: 10px;
        text-align: center;
    }
    .texts > h1{
        font-size: 40px;
    }
    .projects{
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 10px 30px;
    }
    .project{
        width: 50%;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
        box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
    }
    .project-link{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        cursor: pointer;
        z-index: 2;
    }
    @media (max-width:768px) {
        .projects{
            flex-direction: column;
            gap:25px;
            padding: 0;
        }
        .project{
            width: 100%;
        }
    }
</style>