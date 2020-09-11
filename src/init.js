import { setAddressesAll } from "./search.js";
import { update } from "./filter.js";
import { toTopSetup } from "./navigation.js";

// This is the URL of the no-edit public copy
var publicSpreadSheetUrl = "https://docs.google.com/spreadsheets/d/1sR0WE-VpgvdccZWHSMWuc7j7ZqkVJavosGG5jGHdxjQ/edit#gid=1715596439"
function init() {
    Tabletop.init({        //Singleton? //Authkey? //Parameterize?
        key: publicSpreadSheetUrl,
        callback: recordInfo,
        debug: false
    })
}
function recordInfo(data, tabletop) {
    //console.log(data);
    storeSchool(tabletop, "CAMS");
    //storeSchool(tabletop, "Jordan");
    storeSchool(tabletop, "Lakewood"); //The issue here is that in the original doc it got named with a space in it :(
    storeSchool(tabletop, "McBride");
    storeSchool(tabletop, "Poly");
    update(setAddressesAll());

    toTopSetup();
}

function storeSchool(tabletop, school_name) {
    localStorage.setItem(school_name, JSON.stringify(tabletop.sheets(school_name).all()));
}



window.addEventListener('DOMContentLoaded', init);