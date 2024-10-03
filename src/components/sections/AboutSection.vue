<script setup lang="ts">
   import Button from '../generals/Button.vue';
   import Line from '../generals/Line.vue';

</script>

<template>
    <section class="AboutSection">
        <div class="about">
            <img src="../../assets/img/background-2.png" alt="about me background" width="100%">
            <div>
                <h1>SOBRE MIM</h1>
                <Line />
            </div>
          <!-- Transformar o button em um component-->
        </div>
        <div class="items">
            <div class="text">
                <p>Bacharel em Ciências da computação com 1 ano de experiência
                    profissional em desenvolvimento de aplicações web e inglês
                    avançado. 
                </p>
                <p>Trabalhei com linguagens e frameworks como React,
                    Typescript, banco de dados PostgreSQL e testes unitários, como
                    Jest e Testing-library.
                </p>
            </div>
            <div class="buttons">
                <Button />
                <Button content="DOWNLOAD CV" :reversed="true" />
            </div>
        </div>
    </section>
</template>

<style>
    .AboutSection{
        padding: 120px 15px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .AboutSection > div{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media (max-width:768px) {
        .AboutSection{
            flex-direction: column;
        }
        .AboutSection > div{
            width: 100%;
            margin-bottom: 20px;
        }
    }
    .about{
        position: relative;
        height: 50%;
    }
    .about >div{
        position: absolute;
        font-size: 30px;
        background-color: transparent;
    }
    .items{
        flex-direction: column;
    }
    .buttons{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    .text{
        font-size: 22px;
        text-align: center;
        padding: 10px 30px;
        flex-direction: column;
        gap: 10px;
    }
</style>