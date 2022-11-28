// ==UserScript==
// @name         https://puzzle-english.com/exercise/
// @namespace    https://puzzle-english.com/exercise/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://puzzle-english.com/exercise/*
// @icon         https://puzzle-english.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const inputs = document.getElementsByClassName('j-slowRatioRange');
    for (let i = 0; inputs.length > i; i++) {
        inputs[i].value = 4
    }
})();