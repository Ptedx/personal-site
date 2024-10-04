import { debounce } from "lodash";
import { ref } from "vue";

let isMobile = ref<boolean>(false)

function getWidth() {
    isMobile.value =  window.innerWidth <= 768 ? true : false
}
export function getMobileSize(){
    const debounceFunction = debounce(()=>{getWidth()},1000/60)
    console.log(isMobile)
    return debounceFunction
}
