import { yesNoFromString } from "./textproc.js"

// Change DETAILS_URL in final
// const DETAILS_URL = 'http://www.lbusdhealthassetmap.com/internship-details.html'
const DETAILS_URL = 'C:\\Users\\pvdon\\Documents\\HAMP\\hamp-primary-website\\internship-details\\internship-details.html'
/*
* Called on each row in MakeList
*/
var openDetail = function (index) {
    //var display = document.getElementById('detail' + index).style.display;
    if (document.getElementById('detail' + index).style.display !== 'block') {
        document.getElementById('detail' + index).style.display = "block";
    } else {
        document.getElementById('detail' + index).style.display = "none";
    }
}
function escapeDoubleQuotes(str) {
    var parts = str.split("\"");
    return parts.join("_esc34");
}
function unescapeDoubleQuotes(str) {
    var parts = str.split("_esc34");
    return parts.join("\"");
}

function HtmlList(schools_data, addresses) {
    this.schools_data = schools_data;
    this.addresses = addresses;
    this.makeRowHtml = function (row, index) {
        'use strict';
        var str = "", color = "", color_dot = "";
        color_dot = "<div style=\"background-color: " + colorFromType(row["Pin Type"]) + "\" class='color-dot'></div>";
        str += "<div class='organizationCard paragraph";
        if (yesNoFromString(row["Available for Internship/Volunteer Program?\n(yes/no and explanation)"]) !== "yes")
            str += " unconfirmed";
        str += "'";
        if (index === 0) {
            str += " id = 'top'";
        }
        str += " onclick='(openDetail(" + index + "))' >";
        str += "<h3>" + color_dot + row["Site Name"] + "</h3>";
        str += "<div class=\"details\" id=\"detail" + index + "\">";
        if (row["Brief Statement of Organization's Purpose"]) {
            str += "<p>" + htmlWithBreaks(row["Brief Statement of Organization's Purpose"]) + "</p>";
        }
        if (row["Address\nPhone\nWebsite URL"]) {
            str += "<div class='indented'>" + htmlWithBreaks(urlsToLinks(row["Address\nPhone\nWebsite URL"])) + "</div>";
        }
        if (row["Internship/Volunteer Program Description"]) {
            str += "<p><strong>Internship/Volunteer Program:</strong> " + htmlWithBreaks(row["Internship/Volunteer Program Description"]) + "</p>";
        }
        var requirements = row["Internship/Volunteer Requirements/Logistics\n(Eligibility requirements, application deadlines, internship term, etc.)"];
        if (requirements) {
            str += "<p><strong>Program Requirements:</strong> " + htmlWithUl(requirements) + "</p>";
        }
        var form_link = row["Student Internship/Volunteer Form Link\n(Interest Form)"];
        if (form_link) {
            str += '<div style="position: relative; height: 1.5em;"><div style="position: absolute; right: 0"><a target="_blank" href="'
                + DETAILS_URL
                + '?data=' + escapeDoubleQuotes(JSON.stringify(row))
                + '">Interest Form</a></div></div>';
        }
        str += "</div>";
        str += "</div>";

        return str;
    }

    var colorFromType = function (org) {
        'use strict';
        switch (org.toLowerCase()) {
            case "hospital/clinic":
                return "orange";
            case "non-profit":
                return "blue";
            case "school":
                return "green";
            case "faith-based":
                return "brown";
            case "government":
                return "yellow";
            case "health law":
                return "pink";
        }
        return "white";
    }
    /*var htmlWithUl = function(str) {
        var i, out="<ul><li>";
        for (i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) === 10) out += "</li> <li>";
            else if (str.charCodeAt(i) !== 45) out+=str.substring(i, i+1);
        }
        out += "</li></ul>"
        return out;
    }*/
    var htmlWithUl = function (str) {
        var i, out = "<ul>", j, is_bullet = false;
        for (i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) === 45 && !is_bullet) {
                j = i - 1;
                while (true) {
                    if (str.charCodeAt(j) === 10 || j <= 0) {
                        is_bullet = true;
                        break;
                    }
                    if (str.charCodeAt(j) > 32) {
                        is_bullet = false;
                        break;
                    }
                    j -= 1;
                }
                if (is_bullet) {
                    out += "<li>";
                }

            }
            else if (str.charCodeAt(i) === 10 && is_bullet) {
                out += "</li>";
                is_bullet = false;
            }
            else {
                if (str.charCodeAt(i) === 10) out += "<br>";
                out += str.substring(i, i + 1);
            }


            if (((str.length - 1) === i) && is_bullet) {
                out += "</li>";
                is_bullet = false;
            }


        }
        out += "</ul>"
        return out;
    }
    var htmlWithBreaks = function (str) {
        var i, out = "";
        for (i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) === 10) out += "<br>";
            else out += str.substring(i, i + 1);
        }
        return out;
    }
    var getUrlFromString = function (str) {
        'use strict';
        var start, end;
        start = str.indexOf("http");
        if (start === -1) {
            start = str.indexOf("www");
        }
        if (start === -1) {
            return "";
        }
        for (end = start; end <= str.length; end += 1) {
            if (end < str.length && (str.charCodeAt(end) < 33 || str.charCodeAt(end) > 126)) {
                break;
            }
        }
        return str.substring(start, end);
    }
    var urlsToLinks = function (str) {
        'use strict';
        var start, end, url;
        start = str.indexOf("http");
        if (start === -1) {
            start = str.indexOf("www");
        }
        if (start === -1) {
            start = str.indexOf("https");
        }
        if (start === -1) {
            return "";
        }
        for (end = start; end <= str.length; end += 1) {
            if (end < str.length && (str.charCodeAt(end) < 33 || str.charCodeAt(end) > 126)) {
                break;
            }
        }
        url = str.substring(start, end);
        return str.substring(0, start) + "<a href = '" + url + "' >" + url + "</a>" + str.substring(end);
    }



    this.makeList = function () {
        'use strict';
        var str = "", i, j;
        for (i = 0; i < addresses.length; i += 1) {
            /*for (j = 0; j < schools_data[addresses[i].school].length; j += 1) {
            str += makeRowHtml(schools_data[addresses[i].school][j]);
        }*/
            str += this.makeRowHtml(schools_data[addresses[i].school][addresses[i].index], i);
        }
        //console.log(str);
        return str;
    }

}

export { HtmlList, openDetail };