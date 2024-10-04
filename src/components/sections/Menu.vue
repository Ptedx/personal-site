<script setup lang="ts">
    import { onMounted, onUnmounted, ref } from 'vue';
    import {debounce} from 'lodash'
    const isMobile = ref(false)
    const menu = ref<HTMLDivElement>()
    const initialPosition = ref(0)
    let hasScrolled = ref(false)

    function getMobileSize() {
        isMobile.value =  window.innerWidth <= 768 ? true : false
    }

    const debounceFunction = debounce(()=>{
        getMobileSize()
    }, 1000/60)

    function handleScroll(){
        if(menu.value){
            const currentPosition = menu.value.getBoundingClientRect().top + window.scrollY
            currentPosition > 1? hasScrolled.value = true: hasScrolled.value= false
        }
    }

    const debounceScroll = debounce(()=>{handleScroll()}, 1000/90)

    onMounted(()=>{
        if(menu.value){
            initialPosition.value = menu.value.getBoundingClientRect().top + window.scrollY
        }
        getMobileSize()
        window.addEventListener('scroll', debounceScroll)
        window.addEventListener('resize', debounceFunction)
    })

    onUnmounted(() => {
        window.removeEventListener('resize', debounceScroll)
        window.removeEventListener('scroll', debounceFunction)
    })

</script>

<template>
    <nav ref="menu" :class="{'nav-background': hasScrolled, '': !hasScrolled}">
        <a href="/"><img class="menu-icon" src="../../assets/img/Vinicius-logo.png" alt="Logo Vini"></a>
        <div class="links" v-if="!isMobile">
            <a class="link" href="#projectSection">Projects</a>
            <a class="link" href="#workSection">Experiences</a>
        </div>
        <div class="links" v-else>
            <button><img src="..\..\assets\img\BurguerMenu.png" width="40px" alt="Menu Icon" srcset=""></button>
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
    background: transparent;
}
.nav-background{
    background-color: white;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.5);
}
.menu-icon{
    height: 60px;
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