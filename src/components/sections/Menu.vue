<script setup lang="ts">
    import { onMounted, onUnmounted, ref } from 'vue';
    import {debounce} from 'lodash'
    import ModalMenu from '../generals/ModalMenu.vue';
    import clickedButton from '../../assets/img/Burguer-menu-clicked.png'
    import normalButton from '../../assets/img/BurguerMenu.png'
    const isMobile = ref(false)
    const menu = ref<HTMLDivElement>()
    const initialPosition = ref(0)
    let hasScrolled = ref(false)
    let isPressed = ref<boolean>(false)

    function handleMenu(){
        isPressed.value = !isPressed.value
    }

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
        <a href="#"><img class="menu-icon" src="../../assets/img/Vinicius-logo.png" alt="Logo Vini"></a>
        <div class="links" v-if="!isMobile">
            <a class="link" href="#projectSection">Projetos</a>
            <a class="link" href="#contacts">Contatos</a>
        </div>
        <div class="links" v-else>
            <button :onclick="handleMenu">
                <img 
                    :src="isPressed? clickedButton: normalButton"
                    width="40px" 
                    alt="Menu Icon" 
                    srcset=""
                >
            </button>    
            <ModalMenu :isPressed="isPressed" :function="handleMenu" /> 
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
    height: 40px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    cursor: pointer;
}
button:focus, button:active{
    background:transparent;
    border: none;
    -webkit-tap-highlight-color: transparent;
}
</style>