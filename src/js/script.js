'use strict'

import tabs  from './modules/tabs';
import modal  from './modules/modal';
import timer  from './modules/timer';
import calc  from './modules/calc';
import cards  from './modules/cards';
import forms from './modules/forms';
import slider  from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {

    tabs();
    modal();
    timer();
    cards();
    calc();
    forms();
    slider();
})