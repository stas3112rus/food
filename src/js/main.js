"use strict";

import tabs  from './modules/tabs';
import card  from './modules/card';
import calc  from './modules/calc';
import forms  from './modules/forms';
import modal  from './modules/modal';
import slider  from './modules/slider';
import timer  from './modules/timer';
import {openModal, closeModal} from './modules/modal';

window.addEventListener("DOMContentLoaded", ()=>{

    tabs();
    card();
    calc();
    forms(".modal");
    modal("button[data-modal]", ".modal");
    slider();
    timer();
   
});



//npx json-server src/db.json
