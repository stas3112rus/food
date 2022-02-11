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
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
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

export default card;