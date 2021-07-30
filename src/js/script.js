
function openModal(modals, btns, x) {

    const modal = document.querySelector(modals),
        btn = document.querySelector(btns),
        close = document.querySelector(x);

    btn.addEventListener('click', () =>{
   
        modal.style.display = 'block'; 
    });

    close.addEventListener('click', () =>{
        modal.style.display = 'none';
    });
}

openModal('.overlay_master-class', '.btn_master-class', '.close_master-class' );
openModal('.overlay_tasting', '.btn_tasting', '.close_tasting' );
openModal('.overlay_cafe', '.btn_cafe', '.close_cafe' );