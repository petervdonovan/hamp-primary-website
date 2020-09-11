/*global $, jQuery*/
/*global var, SCHOOLS_LIST*/
/*global var, address_list*/
import { yesNoFromString } from "./textproc.js"
import { SCHOOLS_LIST } from "./schools-list.js";
import { HtmlList } from "./list-build.js";
import { setAddressesAll } from "./search.js";


function correctSchool(school_index) {
    'use strict';
    return document.getElementById(SCHOOLS_LIST[school_index].toLowerCase() + "-filter").checked;
}

function correctZip(address, schools_data) {
    'use strict';
    var i, cell, zip = document.getElementById("zip-filter").value;
    if (zip.length !== 5) {
        if (zip.length > 0) {
            //document.getElementById("zip-filter").value = "incorrect zip code";
        }
        return true;
    }
    cell = schools_data[address.school][address.index]["Address\nPhone\nWebsite URL"];
    for (i = 0; i < cell.length - 5; i += 1) {

        if (cell.substring(i, i + 5) === zip) {
            return true;
        }
    }
    return false;
}
/*
function correctEligibility(address, schools_data) {
    'use strict';
    var i, cell, yes = document.getElementById("internship-yes-filter").checked, no = document.getElementById("internship-no-filter").checked, no_but = document.getElementById("internship-no-but-filter").checked, other = document.getElementById("internship-other-filter").checked;

    cell = schools_data[address.school][address.index]["Confirmed Participation in Any Form\n(yes/no and time last updated)"];
    switch (yesNoFromString(cell)) {
        case "yes":
            return yes;
        case "no":
            return no;
        case "no, but":
            return no_but;
        case "other":
            return other;
    }
}
*/
function correctEligibility(address, schools_data) {
    var cell;
    if (!document.getElementById("confirmed-filter").checked)
        return true;
    cell = schools_data[address.school][address.index]["Available for Internship/Volunteer Program?\n(yes/no and explanation)"];
    return yesNoFromString(cell) === "yes";
}

function correctCategory(address, schools_data) {
    'use strict';
    var selected, selectedId, cell, i;
    selected = document.getElementsByClassName("selected");
    for (i = 0; i < selected.length; i += 1) {
        if (selected[i].classList.contains("tab")) {
            selectedId = selected[i].id;
            break;
        }
    }
    if (selectedId.length === 0) {
        selectedId.push("all");
    }
    if (selectedId.includes("all")) {
        return true;
    }
    cell = schools_data[address.school][address.index]["Pin Type"];
    var a = selectedId.toLowerCase().split("_")[1];
    var b = (cell.substring(0, cell.length)).toLowerCase();
    return (a.includes(b) && b !== '') || (b.includes(a) && b !== '');
}

function update(address_list) {
    "use strict";

    var i, j, temp, addresses = [], schools_data = [], school_index, list;
    for (i = 0; i < SCHOOLS_LIST.length; i += 1) {
        schools_data.push(JSON.parse(localStorage.getItem(SCHOOLS_LIST[i])));
    }

    for (i = 0; i < address_list.length; i += 1) {
        school_index = address_list[i].school;
        if (
                correctSchool(school_index)
                && correctZip(address_list[i], schools_data)
                && correctEligibility(address_list[i], schools_data)
                && correctCategory(address_list[i], schools_data)
            ) { //Check if the box corresponding with the school is checked
            addresses.push(address_list[i]);
        }
    }

    //Bubble sort I think
    for (i = 0; i < addresses.length; i += 1) {
        for (j = 0; j < addresses.length - 1 - i; j += 1) {
            if (addresses[j].relevance > addresses[j + 1].relevance) {
                temp = addresses[j];
                addresses[j] = addresses[j + 1];
                addresses[j + 1] = temp;
            }
        }
    }
    list = new HtmlList(schools_data, addresses);
    document.getElementById("list").innerHTML = list.makeList();
}

$(document).ready(function () {
    "use strict";
    $(".filter, :checkbox").on("click", function() { update(setAddressesAll()) } );
    $(document).keypress(function (event) {
        if (event.which === 13 || (event.target.id === "zip-filter"/* && event.target.value.length === 4*/)) {
            update(setAddressesAll());
        }

    });
});

export { update }