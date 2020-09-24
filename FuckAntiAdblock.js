// ==UserScript==
// @name         AntiAntiAdblock
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Fuck Anti Adblock
// @author       You
// @match        *://*/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.5.1.min.js
// ==/UserScript==

// Specific Anti Adblocks
var standardAdblock = false;
var frageNetAdblock = false;
var pcGamerCookies = false;

$.noConflict();
jQuery(document).ready(function ($) {
    
    // Loading Time Differences
    setTimeout(disableAntiAdblock, 500);
    setTimeout(disableAntiAdblock, 1500);
    setTimeout(disableAntiAdblock, 4000);
    setTimeout(disableAntiAdblock, 10000);


    function disableAntiAdblock() {
        try {

            // Standard Modal Blocker
            try {
                disableStandardAdblock();
            } catch (Exception) {
                //...
            }

            // ....frage.net
            try {
                disableFrageNetAdblock();
            } catch (Exception) {
                //...
            }

            // Cookie Banner PC Gamer
            try {
                acceptPcGamerCookies();
            } catch (Exception) {
                //...
            }

        } catch (error) {
            console.log("Fehler beim AntiAntiAdblock");
            console.log(error.message);
        }
    }

    function disableStandardAdblock() {

        if (standardAdblock) {
            return;
        }

        document.querySelector("div[id^='sp_message_id']").remove();
        document.querySelector("div[class^='sp_veil']").remove();
        document.getElementsByTagName("BODY")[0].style.overflowY = "auto";
        document.getElementsByTagName("HTML")[0].classList.remove("sp-message-open");

        standardAdblock = true;
    }

    function disableFrageNetAdblock() {

        if (frageNetAdblock) {
            return;
        }

        document.querySelector("div[id='wl-container']").remove();

        frageNetAdblock = true;
    }

    function acceptPcGamerCookies() {

        if (pcGamerCookies) {
            return;
        }

        document.querySelector("div[id^='qc-cmp2-ui']").getElementsByTagName("BUTTON").querySelector("[mode='primary']").trigger("click");

        pcGamerCookies = true;
    }
});
