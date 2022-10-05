/*==================== 
    DOM Loaded
====================*/
document.addEventListener('DOMContentLoaded', () => {
    //Menu handle
    const $menuHandle = document.querySelectorAll('.menu-handle')
    const $menu = document.querySelector('#menu')
    $menuHandle.forEach(iten => {
        iten.onclick = () => {
            $menu.classList.toggle('show')
        }
    })
})