/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener("DOMContentLoaded", ()=>{
   
    const tabs = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js"),
          card = __webpack_require__ (/*! ./modules/card */ "./src/js/modules/card.js"),
          calc = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js"),
          forms = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js"),
          modal = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js"),
          slider = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js"),
          timer = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");

    tabs();
    card();
    calc();
    forms();
    modal();
    slider();
    timer();
    
});



//npx json-server src/db.json


/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc (){
    // Calculation

    const calcResult = document.querySelector(".calculating__result span");
        
    let sex = "female",
        ratio = 1.375;
         
        if (localStorage.getItem("sex")){
            sex = localStorage.getItem("sex");
            
        }else{
            localStorage.setItem("sex", sex);
        }       


        if (localStorage.getItem("ratio")){
           
            ratio = +localStorage.getItem(ratio);
        } else{
            localStorage.setItem("ratio", ratio);
        }
    
    let height, weight, age;

    function initLocalSetting(selector, activeClass){
        const elements = document.querySelectorAll(selector);

       
        
        elements.forEach(elem =>{
            
            elem.classList.remove(activeClass);
            if ( elem.getAttribute('id') == localStorage.getItem('sex')){
                elem.classList.add(activeClass);
            
            }

            if (elem.getAttribute('data-ratio') == localStorage.getItem('ratio')){
                elem.classList.add(activeClass);
            }
        });
    }

    initLocalSetting("#gender div", "calculating__choose-item_active");
    initLocalSetting(".calculating__choose_big div", "calculating__choose-item_active");

    function calcTotal(){
        if (
            !sex || 
            !height ||
            !weight ||
            !age ||
            !ratio
            ){
                calcResult.textContent = "____";
                return;
            }
        
        if (sex == 'female'){
            calcResult.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio); 
            
        } else{
            calcResult.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
            
        }

    }

    calcTotal();

    function getStaticInfo(parentSelector, activeClass){
        const elements = document.querySelectorAll(`${parentSelector} div`);

        elements.forEach(elem =>{
            elem.addEventListener("click", (e)=>{
                if (e.target.getAttribute ('data-ratio') ){
                    ratio = +e.target.getAttribute ('data-ratio');
                    localStorage.setItem("ratio", ratio);
                } else{
                    sex = e.target.getAttribute('id');
                    localStorage.setItem("sex", sex);
                }               

                elements.forEach(elem =>{
                    elem.classList.remove(activeClass);
                });

                e.target.classList.add(activeClass);

                calcTotal();

            });
        });           
    }

    getStaticInfo("#gender", "calculating__choose-item_active");
    getStaticInfo(".calculating__choose_big", "calculating__choose-item_active");

    function getDynamicInfo(selector){
        const input = document.querySelector(selector);

        input.addEventListener("input", ()=>{

            if (input.value.match(/\D/g)){
                input.style.border = "1px solid red";
               
            } else{
                input.style.border = "none";
             
            }

            switch(input.getAttribute('id')){
                case "height":
                    height = +input.value;
                    break;
                case "weight":
                    weight = +input.value;
                    break;
                case "age":
                    age = +input.value;
                    break;
            }

            calcTotal();
        });

    }

    getDynamicInfo("#height");
    getDynamicInfo("#weight");
    getDynamicInfo("#age");
}

module.exports = calc;

/***/ }),

/***/ "./src/js/modules/card.js":
/*!********************************!*\
  !*** ./src/js/modules/card.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function card (){
        // CARDS

        class MenuItem{
            constructor(imgUrl, alt, subtitle, descr, price, parentSelector, ...classes){
                this.imgUrl = imgUrl;
                this.alt = alt;
                this.subtitle = subtitle;
                this.descr = descr;
                this.price = price;
                this.parent = document.querySelector(parentSelector);
                this.transfer = 27;
                this.classes = classes;
    
                this.changeToUAH();
            }
    
            changeToUAH(){
                this.price = this.price * this.transfer;
            }
    
            render(){
    
                const element = document.createElement("div");
                
                if (this.classes.length == 0){
                    this.classes = ["menu__item"];
                }
    
                this.classes.forEach (className => element.classList.add(className));
    
                element.innerHTML =`
                    <img src=${this.imgUrl} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.subtitle}"</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">????????:</div>
                        <div class="menu__item-total"><span>${this.price}</span> ??????/????????</div>
                    `;
    
                this.parent.append(element);
            }
        }
        
        const getResources = async (url, data)=>{
            const result = await fetch(url);
    
            if (!result.ok){
                throw new Error(`Could not fetch ${url}, status: ${result.status}`);
            }
    
            return await result.json();
        };
    
        // getResources("http://localhost:3000/menu")
        // .then(data => {
        //     data.forEach(({img, altimg, title, descr, price}) =>{
        //         new MenuItem(img, altimg, title, descr, price, ".menu .container")
        //         .render();
        //     });
        // });
    
    
           axios.get("http://localhost:3000/menu")
           .then(data => {
            data.data.forEach(({img, altimg, title, descr, price}) =>{
                        new MenuItem(img, altimg, title, descr, price, ".menu .container")
                        .render();
                    });
           });
}

module.exports = card;

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function forms (){
    //  Forms

    const forms = document.querySelectorAll("form");

    const message = {
        loading: "img/form/spinner.svg",
        success: "??????????????! ?????????? ???????????????? ?? ????????",
        fail: "??????-???? ???? ??????"
    };

    forms.forEach(item => {
        bindPostData(item);
    });
    
            
            
            
    const postData = async (url, data)=>{
        const result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });

        return await result.json();
    };
    
    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);
        
            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            })
            .catch(() => {
                showThanksModal(message.fail);
            });
        });
    }
    
       
    
    function showThanksModal(message){
        const prevModalDialog = document.querySelector(".modal__dialog");
        prevModalDialog.classList.add("hide");
        

        openModal();

        const thanksModal = document.createElement("div");
        thanksModal.classList.add("modal__dialog");
        thanksModal.innerHTML = `
        <div class="modal__content">
        <div data-close class="modal__close">&times;</div>
        <div class="modal__title">${message}</div>
        </div>
        `;

        document.querySelector(".modal").append(thanksModal);

        setTimeout(()=>{
        thanksModal.remove();
        prevModalDialog.classList.add("show");
        prevModalDialog.classList.remove("hide");
        closeModal();
        }, 4000);
    
    } 
    
    
    fetch("http://localhost:3000/menu")
        .then(data=> data.json())
        .then(data=> console.log(data));
}

module.exports = forms;

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal (){
    // Modal window

    const openModalWindow = document.querySelectorAll("button[data-modal]"),          
          modal = document.querySelector(".modal");
          //modalTimerId = setTimeout(openModal, 3000);
    
    function closeModal(){
            modal.style.display = "none";
            document.body.style.overflow = "visible";
        }
    
    function openModal(){
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        //clearInterval(modalTimerId);     
    }
    
    openModalWindow.forEach(value => {
        value.addEventListener("click", openModal);
    });



    modal.addEventListener("click", (e)=>{
        if (e.target === modal || e.target.getAttribute('data-close') == ''){
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
}

module.exports = modal;



/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider (){
    const sliderBlock = document.querySelector(".offer__slider"),
              sliderPrev  = sliderBlock.querySelector(".offer__slider-prev"),
              sliderNext =  sliderBlock.querySelector(".offer__slider-next"),
              sliderCurrent =  sliderBlock.querySelector("#current"), 
              sliderTottal =  sliderBlock.querySelector("#total"),
              sliders =  sliderBlock.querySelectorAll(".offer__slide");

        let slideActive = 0;

        sliderTottal.innerHTML = getSlidersNumber(sliders.length);
        
        sliderPrev.addEventListener("click", (e)=>{
            e.preventDefault();
            slideActive--;
            proccessChangeSlide();
        });

        sliderNext.addEventListener("click", (e)=>{
            e.preventDefault();
            slideActive++;
            proccessChangeSlide();
        });


        function getSlidersNumber(num){
            if (num<10){
                return `0${num}`;
            }

            return num;                
        }

        function setHiddenAllSliders(){
            sliders.forEach(slide =>{
                slide.classList.add("hidden");
            });
        }

        function delHiddenSlider(num){
            sliders[num].classList.remove("hidden");
        }

        function proccesSlideActive(){
            if (slideActive < 0){
                slideActive = sliders.length -1;
            }

            if (slideActive >= sliders.length){
                slideActive = 0;
            }
        }

        function setCurrentSlide(){
            sliderCurrent.innerHTML = getSlidersNumber(slideActive + 1);
        }

        function proccessChangeSlide(){
            proccesSlideActive();
            setCurrentSlide();
            setHiddenAllSliders();
            delHiddenSlider(slideActive);
        }
}

module.exports = slider;

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs(){
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
}

module.exports = tabs;

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer (){
    // Timer

    const deadline = "2022-02-05";

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
}

module.exports = timer;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map