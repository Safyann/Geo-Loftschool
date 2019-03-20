import './css/main.css'

import map from './js/main'

document.addEventListener("DOMContentLoaded", function(event) {
    ymaps.ready(function () {
        console.log('ready');
        map();
    });
});