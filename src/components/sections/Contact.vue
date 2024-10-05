<script setup lang="ts">
import Line from '../generals/Line.vue';


</script>

<template>
    <section class="contactSection" id="contacts">
        <h1>Contatos</h1>
        <Line :width="'20%'"/>
        <div class="contactLinks">
            <div class="contactLink">
                <a href="https://www.linkedin.com/in/vinicosta37/" target="_blank">
                    <img src="../../assets/img/Linkedin.png" loading="lazy" alt="Projeto 1" width="50px">
                </a>
                <p>Linkedin</p>
            </div>
            <div class="contactLink">
                <a href="https://w.app/viniciusNunes" target="_blank">
                    <img src="../../assets/img/Cellphone.png" loading="lazy" alt="Projeto 1" width="50px">
                </a>
                <p>Celular</p>
            </div>
            <div class="contactLink">
                <a href="https://www.instagram.com/vinic.nunes/" target="_blank">
                    <img src="../../assets/img/instagram.png" loading="lazy" alt="Projeto 1" width="50px">
                </a>
                <p>Instagram</p>
            </div>
            <div class="contactLink">
                <a href="mailto:vinicosta37@gmail.com" target="_blank">
                    <img src="../../assets/img/email.png" loading="lazy" alt="Projeto 1" width="50px">
                </a>
                <p>Email</p>
            </div>
        </div>
    </section>
</template>

<style>
    .contactSection{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 60px 0 20px 0;
    }
    .contactSection >h1{
        font-size: 40px;
    }
    .contactLinks{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .contactLink{
        width: 50%;
        text-align: center;
        margin-bottom: 10px;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>