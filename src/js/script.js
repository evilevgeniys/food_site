'use strict'

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';
import {showModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => showModal('.modal', modalTimerId), 50000);


    tabs();
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2024-12-23');
    cards();
    calc();
    forms();
    slider();
})