// ==UserScript==
// @name         AntiAntiAdblock
// @namespace    http://tampermonkey.net/
// @version      1.6
// @description  Fuck Anti Adblock
// @author       You
// @match        *://*/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.5.1.min.js
// ==/UserScript==

// Default
var standardAdblock = false;
var continueWithoutSupporting = false;

// Specific Anti Adblocks
var frageNetAdblock = false;
var pcGamerCookies = false;
var digitalTrends = false;

$.noConflict();
jQuery(document).ready(function ($) {

    // Version 1.5
    
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

            // Continue Without Supporting Button
            try {
                triggerContinueWithoutSupporting();
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

            // ....DigitalTrends
            try {
                disableDigitalTrendsStuff();
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

    function triggerContinueWithoutSupporting() {

        if (continueWithoutSupporting) {
            return;
        }

        for (const a of document.querySelectorAll("a")) {
            if (a.textContent.includes("Continue without supporting")) {
              a.click();
            }
          }

        continueWithoutSupporting = true;
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

    function disableDigitalTrendsStuff(){

        if (digitalTrends) {
            return;
        }

        document.getElementsByTagName("HTML")[0].style.overflow = "auto";
        document.getElementsByTagName("BODY")[0].style.overflow = "auto";
        document.querySelector("div[class^='fEy1Z2XT']").remove();
        document.querySelector("[id='CybotCookiebotDialogBodyUnderlay']").remove();
        document.querySelector("[id='CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection']").click();
        
        digitalTrends = true;
    }
});
