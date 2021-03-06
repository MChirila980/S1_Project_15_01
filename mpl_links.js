"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Melinda Chirila
   Date:   4/18/2019
   
   Filename: mpl_links.js

*/
//select variable that references all of the select elements
window.addEventListener("load", function () {

    var allSelect = document.getElementsByTagName("select");

    for (var i = 0; i < allSelect.length; i++) {

        allSelect[i].addEventListener("change", function (e) {
            
            location.href = e.target.value;
        });

    }
})