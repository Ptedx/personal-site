<script setup lang="ts">
    import Line from '../generals/Line.vue';
    import gsap from 'gsap';
    import { onMounted } from 'vue';

    onMounted(()=>{
        gsap.from('.workSection',{
            opacity: 0,
            scrollTrigger:{
                trigger:'.workSection',
                start: 'top 80%',
                end: 'center 60%',
                scrub: 0.5,
            }
        })
    })
</script>

<template>
    <section class="workSection" id="workSection">
        <div class="texts">
            <h1>EXPERIÊNCIAS</h1>
            <Line width="50%"/>

        </div>
        <div class="experiences">
            <div class="experience">
                <h1>Ministério Da Economia (Fev 2023 - Dez 2023)</h1>
                <Line width="80%"/>
                <ul>
                    <li><strong>Administração de banco de dados PostgreSQL:</strong> Apoio ativo na administração do banco de dados da instituição.</li>
                    <li><strong>Manutenção do site principal:</strong> Trabalhei com HTML, CSS e JavaScript na manutenção
                         e atualização do site.</li>
                    <li><strong>Desenvolvimento de novas funcionalidades:</strong> Colaborei no desenvolvimento seguindo 
                        metodologias ágeis (SCRUM).</li>
                    <li><strong>Suporte na administração do FAQ:</strong> Prestei suporte na administração e atualização do 
                        FAQ do site.</li>
                </ul>
                
            </div>
            <div class="experience">
                <h1>EPC - PROEM (Mar 2024 - Jun 2024)</h1>
                <Line width="50%"/>
                <ul>
                    <li><strong>Configuração e instalação softwares e hardwares.</strong></li>
                    <li><strong>Realização de diagnóstico de problemas em sistemas e equipamentos.</strong></li>
                    <li><strong>Realização de manutenção preventiva e corretiva em equipamentos de 
                        informática.</strong></li>
                    <li><strong>Backup e restauração de dados.</strong></li>
                    <li><strong>Treinamentos e capacitações para usuários.</strong></li>
                </ul>

            </div>
        </div>
    </section>
</template>

<style>
    .experiences{
        justify-content: center;
        align-items: start;
        gap: 10px;
        padding: 10px 30px;
    }
    .experience{
        width: 50%;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 40px;
    }
    .experience h1{
        text-align: center;
    }
    @media (max-width:768px) {
        .experiences{
            flex-direction: column;
            gap:25px;
            
        }
        .experience{
            width: 100%;
            border:2px solid #ffe46e;
            padding: 0 20px;

        }
    }
</style>