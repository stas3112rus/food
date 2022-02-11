function closeModal(modalSelector){
    const modal = document.querySelector(modalSelector);

    modal.style.display = "none";
    document.body.style.overflow = "visible";
}

function openModal(modalSelector){
    const modal = document.querySelector(modalSelector);

    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    //clearInterval(modalTimerId);     
}


function modal (openModalSelector, modalSelector){
    // Modal window

    const openModalWindow = document.querySelectorAll(openModalSelector),          
          modal = document.querySelector(modalSelector);
          //modalTimerId = setTimeout(openModal, 3000);
    

    
    openModalWindow.forEach(value => {
        value.addEventListener("click", () => openModal(modalSelector));
    });



    modal.addEventListener("click", (e)=>{
        if (e.target === modal || e.target.getAttribute('data-close') == ''){
            closeModal(modalSelector);
        }
    });

    document.addEventListener("keydown", (e)=>{       
        if (e.code === "Escape" && window.getComputedStyle(modal).display == "block"){
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            openModal(modalSelector);
            window.removeEventListener('scroll', showModalByScroll); 
         }
    }

    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {closeModal};
export{openModal};

