<script setup lang="ts">
    import { onMounted, onUnmounted, ref } from 'vue';
    import { RouterLink } from 'vue-router'

    const isMobile = ref(false)

    function getMobileSize() {
        isMobile.value =  window.innerWidth <= 768 ? true : false
    }

    onMounted(()=>{
        getMobileSize()

        window.addEventListener('resize', getMobileSize)
    })

    onUnmounted(() => {
        window.removeEventListener('resize', getMobileSize)
    })

</script>

<template>
    <nav>
        <img height="60px" src="../../assets/img/Vinicius-logo.png" alt="Logo Vini">
        <div class="links" v-if="!isMobile">
            <RouterLink class="link" to="/">Knowledges</RouterLink>
            <RouterLink class="link" to="/about">Projects</RouterLink>
        </div>
        <div class="links" v-else>
            <button><img src="..\..\assets\img\BurguerMenu.png" width="50px" alt="Menu Icon" srcset=""></button>
        </div>
    </nav>
</template>

<style scoped>
nav {
    height: 80px;
    padding: 10px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
    z-index: 2;
    position: fixed;
    width: 100%;
}

.links {
    display: flex;
    gap: 20px;
}

.link {
    text-decoration: none;
}
button{
    height: 50px;
    background-color: transparent;
    border: none;
    cursor: pointer;
}
button:focus{
    border: none;
}
</style>