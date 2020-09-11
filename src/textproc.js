function yesNoFromString(str) {
    'use strict';
    str = " " + str + " ";
    if (str.search(/ yes/i) !== -1) return "yes";
    if (str.search(/ no/i) !== -1) {
        if (str.search(/ but/i) !== -1) return "no, but";
        return "no";
    }
    return "other";
}


export { yesNoFromString }