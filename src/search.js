/*global $, jQuery*/
/*global var, SCHOOLS_LIST*/
import { SCHOOLS_LIST } from "./schools-list.js";
// var address_list;

function setAddressesAll() { //TERRIBLY INEFFICIENT PLEASE FIX BEFORE FINAL RELEASE
    "use strict";
    var i, j, current = [], addresses = [];
    for (i = 0; i < SCHOOLS_LIST.length; i += 1) {
        current = JSON.parse(localStorage.getItem(SCHOOLS_LIST[i]));

        for (j = 0; j < current.length; j += 1) {
            addresses.push({
                school: i,
                index: j,
                relevance: 1
            });
        }
    }
    return addresses;
}

function keywordSearch() {
    "use strict";
    var i, j, attribute, k, relevance, current = [], addresses = [], keyword;
    keyword = document.getElementById("keyword_search").value;
    for (i = 0; i < SCHOOLS_LIST.length; i += 1) {
        current = JSON.parse(localStorage.getItem(SCHOOLS_LIST[i]));
        for (j = 0; j < current.length; j += 1) {
            relevance = 0;

            for (attribute in current[j]) {
                if (current[j].hasOwnProperty(attribute)) {
                    for (k = 0; k < current[i][attribute].length - keyword.length; k += 1) {
                        if (current[j][attribute].substring(k, k + keyword.length) === keyword) {
                            relevance += 1;
                        }
                    }
                    //relevance += (current[j][attribute].match(/is/g) || []).length;
                }
            }
            if (relevance > 0) {
                addresses.push({
                    school: i,
                    index: j,
                    relevance: relevance
                });
            }

        }
    }
    update(addresses);
}

export { setAddressesAll }