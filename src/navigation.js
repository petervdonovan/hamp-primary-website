import { setAddressesAll } from "./search.js";
import { update } from "./filter.js"

function tabSetup() {
    var i, tabs, selfLinks;
    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i += 1) {
        tabs[i].onclick = select;
    }
}
function toTopSetup() {
    var link = document.getElementsByClassName("to-top")[0], scroll = document.getElementById("list");
    if (window.getComputedStyle(scroll).overflow === "scroll") {
        link.onclick = function () {
            scroll.scrollTop = 0;
            return false;
        };
    }
}
function select() {
    clearSelect();
    this.classList.add("selected");
    update(setAddressesAll());
}
function clearSelect() {
    var i, tabs;
    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i += 1) {
        tabs[i].classList.remove("selected");
    }
}
window.onload = tabSetup;

export { toTopSetup }