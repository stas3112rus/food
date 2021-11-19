"use strict";

window.addEventListener("DOMContentLoaded", ()=>{
   
   //Tabs
    const tabs = document.querySelectorAll(".tabheader__item"),
         tabsContent = document.querySelectorAll(".tabcontent"),
         tabsParent = document.querySelector(".tabheader__items");

    function hideTabContent(){
        tabsContent.forEach(item=>{
            item.classList.add("hide");
            item.classList.remove("show", "fade");
        });

        tabs.forEach(item =>{
            item.classList.remove("tabheader__item_active");
        });
    }

    function showTabContent(i = 0){
       tabsContent[i].classList.add("show", "fade");
       tabsContent[i].classList.remove("hide");
       tabs[i].classList.add("tabheader__item_active"); 
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click", (e) =>{
        if(e.target && e.target.classList.contains("tabheader__item")){
           tabs.forEach((item, i)=>{
            if (e.target == item){
                hideTabContent();
                showTabContent(i);
            }
           });
        }
    });

    // Timer

    const deadline = "2021-11-07";

    function getTimeRemaining(endTime){
        const t = Date.parse(endTime) - Date.parse(new Date()),
              days = Math.floor(t / (1000*60*60*24)),
              hour = Math.floor((t / (1000*60*60)) % 24),
              minutes = Math.floor ((t / (1000*60)) % 60 ),
              seconds = Math.floor ((t / 1000) % 60 );

        return {
            t,
            days,
            hour,
            minutes,
            seconds            
        };
    }

    function setClock(selector, endTime){
        const timer = document.querySelector(selector),
              days = document.querySelector("#days"),
              hours =  timer.querySelector("#hours"),
              minutes =  timer.querySelector("#minutes"),
              seconds =  timer.querySelector("#seconds"),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();
        
        function addZero(num){
            if (num >=0 && num < 10){
                return `0${num}`;
            }else{
                return num;
            }
        }

        function updateClock(){
            const t = getTimeRemaining(endTime);

            days.innerHTML = addZero(t.days);
            hours.innerHTML = addZero(t.hour);
            minutes.innerHTML = addZero(t.minutes);
            seconds.innerHTML = addZero(t.seconds);

            

            if (t.t<=0){
                clearInterval(timeInterval);
                days.innerHTML = 0;
                hours.innerHTML = 0;
                minutes.innerHTML = 0;
                seconds.innerHTML = 0;
            }
        }
    }

    
    setClock(".timer", deadline);

    // Modal window

    const openModalWindow = document.querySelectorAll("button[data-modal]"),
          closeModalWindow = document.querySelectorAll("div[data-close]"),
          modal = document.querySelector(".modal"),
          modalTimerId = setTimeout(openModal, 3000);
    
    function closeModal(){
            modal.style.display = "none";
            document.body.style.overflow = "visible";
        }
    
    function openModal(){
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        clearInterval(modalTimerId);     
    }
    
    openModalWindow.forEach(value => {
        value.addEventListener("click", openModal);
    });

    closeModalWindow.forEach(value => {
            value.addEventListener("click", closeModal);
    });

    modal.addEventListener("click", (e)=>{
        if (e.target === modal){
            closeModal();
        }
    });

    document.addEventListener("keydown", (e)=>{       
        if (e.code === "Escape" && window.getComputedStyle(modal).display == "block"){
            closeModal();
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            openModal();
            window.removeEventListener('scroll', showModalByScroll); 
         }
    }

    window.addEventListener('scroll', showModalByScroll);
    
});