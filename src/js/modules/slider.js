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

export default slider;