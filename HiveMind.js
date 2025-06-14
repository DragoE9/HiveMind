// ==UserScript==
// @name         HiveMind
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       DragoE
// @match        https://www.nationstates.net/*
// @include      */Sheet.html
// @grant        none
// @require  https://craig.global.ssl.fastly.net/js/mousetrap/mousetrap.min.js?a4098
// ==/UserScript==

//lifted from CatNuke

(function() {
    'use strict';
    //Initialization
    var focus = 0;
    var apply = true; //do you wanna apply to the WA?
    var JP = "suspicious";
    var password = "password"; //insert your password here
    document.querySelectorAll('a')[focus].style.color = "red";
    var puppet_number = document.querySelectorAll('a').length;
    //Skip a link
    Mousetrap.bind('n',function(e) {
        if (window.location.href.includes("Sheet.html")) {
            document.querySelectorAll('a')[focus].style.color = "black";
            focus += 1
            if (focus > (puppet_number - 1)) {
                window.close();
            } else {
                document.querySelectorAll('a')[focus].style.color = "red";
            }
        }
    },'keyup');
    //Open a Link
    Mousetrap.bind('m',function(e) {
        if (window.location.href.includes("Sheet.html")) {
            if (focus > (puppet_number - 1)) {
                window.close();
            } else {
                document.querySelectorAll('a')[focus].style.color = "black";
                focus += 1;
                if (focus < (puppet_number - 1)) {
                    document.querySelectorAll('a')[focus].style.color = "red";
                }
                document.querySelectorAll('a')[focus - 1].click();
            }
        } else if (window.location.href.includes("nation=")) {
            var logged_in = document.querySelector('[class^="bellink quietlink"]').textContent;
            var NationName = document.querySelector('[class^="quietlink"][href^="/nation"]').textContent;
            if (logged_in == NationName) {
                window.location.href = 'https://www.nationstates.net/region=' + JP;
            } else {
                document.querySelector('[name="nation"][autocorrect="off"]').value = NationName;
                document.querySelector('[name="password"][type="password"]').value = password;
                document.querySelector('[type="checkbox"][name="autologin"]').click();
                document.querySelector('.button[value="Login"]').click();
            }
        } else if (window.location.href.includes("region=")) {
            var button = document.querySelector('.button[value="1"]');
            if (button.attributes.getNamedItem("name").value == "move_region") {
                button.click();
            } else {
                if (apply) {
                    window.location.href = 'https://www.nationstates.net/page=un'
                } else {
                    window.close();
                }
            }
        } else if (window.location.href.includes("page=change_region")) {
            if (apply) {
                window.location.href = 'https://www.nationstates.net/page=un'
            } else {
                window.close();
            }
        } else if (window.location.href.includes("page=un")) {
            document.querySelector('.button[value="1"]').click();
        } else if (window.location.href.includes("page=UN_status")) {
            window.close();
        }
    },'keyup');
})();