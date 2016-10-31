// @file parser.js
// @author Matthew Koken <mkoken@scu.edu>
// Functions for parsing, tracking classes and requirements

//break up the classes for checking?
var coenClasses = [];
var coreClasses = [];
var fulfilledClasses = [];
var unfulfilledClasses = [];
var electives = [];
var enrichment = [];
var units = 0;
var hash;

//or just go and check each individually
var takenClasses = [];

// Sanitize a string for safe processing
function sanitize(str) {
    //sanitize the String
    return str;
}

window.onload = function(){
    load();
    requirementsCompare();
    printRequirementsNeeded();
    printRequirementsFulfilled();
    printTakenClasses();
};

function loadHash(){
    var ck = document.cookie;
    var ca = ck.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            hash = c.substring(name.length, c.length);
        }
    }
};

function loadClasses(hash) {
    return [];
};

function load() {
    // grab hashname from cookie
    var hash = loadHash();
    // grab array from php
    takenClasses = loadClasses(hash);
    return true;
}

// Save user data
function save() {
    var jsonString = JSON.stringify(takenClasses);
    

    return true; //should save the user data to server
}

// Print taken classes to table
function printTakenClasses() {
    text = "";
    for(i = 0; i < coenClasses.length; i++) {
        text += "<div id=\"" + coenClasses[i] + "\">" + coenClasses[i] + "&nbsp;&nbsp;&nbsp;&nbsp;" 
        + " " + "<input id='" + coenClasses[i] + "' type=\"button\" value=\"Remove\" onclick=\"removeClass(this.id)\"/><br></div>";
    }
    for(i = 0; i < coreClasses.length; i++) {
        text += "<div id=\"" + coreClasses[i] + "\">" + coreClasses[i] + "&nbsp;&nbsp;&nbsp;&nbsp;"
        + " " + "<input id='" + coreClasses[i] + "' type=\"button\" value=\"Remove\" onclick=\"removeClass(this.id)\"/><br></div>";
    }
    document.getElementById("takenCourses").innerHTML = text;
    //document.getElementById("allCourses").appendChild(document.createTextNode(text));
    //appendChild(document.createTextNode(unsafe_str));
};

// Add multiple classes at once - copy paste from eCampus
function addClasses() {
    //should sanitize input before handling
    var classNames = document.getElementById("singleInput").value;
    console.log(classNames);
    var matches = [];
    // Match regex for a class: 4 char code + digits (and possibly another char)
    var regex = /\b[a-zA-Z]{4}\s\d{1,3}[A-Z]*\b/;
    var match = regex.exec(classNames);
    console.log("matched");
    console.log(match);
    
    // get every class match
    while (match != null) {
        matches.push(match[0]);
        classNames = classNames.substring(match.index + match[0].length);
        match = regex.exec(classNames);
    }
    
    // DEBUG
    //console.log(match);
    //console.log(matches);

    // add each each class
    for(var idx = 0; idx < matches.length; idx++) {
        console.log("Adding");
        addClass(matches[idx]);
    }

    //clear the input box after submit
    document.getElementById("singleInput").value="";

    //save user data
    save();
}

// Remove a taken class
function removeClass(className) {
    var toRemove = className;
    
    var index = coenClasses.indexOf(className);
    if (index > -1) {
        coenClasses.splice(index, 1);
    }

    index = coreClasses.indexOf(className);
    if (index > -1) {
        coreClasses.splice(index, 1);
    }

    index = takenClasses.indexOf(className);
    if (index > -1) {
        takenClasses.splice(index, 1);
    }

    printTakenClasses();
    save();
}

// Add a single class
function addClass(className) {
    var str = sanitize(className);
    
    //don't add multiple of the same
    if(takenClasses!=null && arrayIncludes(str, takenClasses)) {
        console.log("already added");
        console.log(takenClasses);
        return;
    }
    
    //add to the appropriate array. TODO: cleanup, consolidate arrays
    if(str.includes("coen") || str.includes("COEN")) {
        coenClasses.push(str.toUpperCase());
    } else {
        coreClasses.push(str.toUpperCase());
    }

    //should check if a class is actually a class
    takenClasses.push(str.toUpperCase());
    printTakenClasses();
}

//true if add many, false if add one
function checkAddOneOrMany(classes) {
    var str = classes;
    if(str.includes('\n'))
        return true;
    return false;
}

function requirementsCompare() {
    if(takenClasses == null)
        return;

    //check engineering classes
    for(var i = 0; i < engr_classes.length; i++) {
        var flag = false;
        for(var j = 0; j < takenClasses.length; j++) {
            if(takenClasses[j] == engr_classes[i].class){
                fulfilledClasses.push(engr_classes[i]);
                units += engr_classes[i].units;
                flag = true;
                break;
            }
        }
        if(flag != true)
            unfulfilledClasses.push(engr_classes[i]);
    }

    //check math requirements
    for(var i = 0; i < math_classes.length-7; i++) {
        var flag = false;
        for(var j = 0; j < takenClasses.length; j++) {
            if(takenClasses[j] == math_classes[i].class){
                fulfilledClasses.push(math_classes[i]);
                units += math_classes[i].units;
                flag = true;
                break;
            }
        }
        if(flag != true)
            unfulfilledClasses.push(math_classes[i]);
    }
    //check classes with alternates
    var amth106 = takenClasses.indexOf("AMTH 106");
    var math22 = takenClasses.indexOf("MATH 22");
    if(amth106 > -1 || math22 > -1) {
        if(amth106 > -1) {
            fulfilledClasses.push(math_classes[12]);
            units += 4;
        }
        if(math22 > -1) {
            fulfilledClasses.push(takenClasses[13]);
            units += 4;
        }
    }
    var amth108 = takenClasses.indexOf("AMTH 108");
    var math122 = takenClasses.indexOf("MATH 122");
    if(amth108 > -1 || math122 > -1) {
        if(amth108 > -1) {
            fulfilledClasses.push(math_classes[14]);
            units += 4;
        }
        if(math122 > -1) {
            fulfilledClasses.push(takenClasses[15]);
            units += 4;
        }
    } else {
        fulfilledClasses.push(math_classes[14]);
        fulfilledClasses.push(math_classes[15]);
    }
    var math53 = takenClasses.indexOf("MATH 53");
    var math166 = takenClasses.indexOf("MATH 166");
    var amth118 = takenClasses.indexOf("AMTH 118");
    if(math53 > -1 || math166 > -1 || amth118) {
        if(math53 > -1) {
            fulfilledClasses.push(math_classes[16]);
            units += 4;
        }
        if(math166 > -1) {
            fulfilledClasses.push(takenClasses[17]);
            units += 4;
        }
        if(amth118 > -1) {
            fulfilledClasses.push(takenClasses[18]);
        }
    } else {
        unfulfilledClasses.push(math_classes[16]);
        unfulfilledClasses.push(math_classes[17]);
        unfulfilledClasses.push(math_classes[18]);
    }


    //core[i].classes[]
    for(var i = 0; i < core_classes.length; i++) {
        for(var j = 0; j < core_classes[i].classes.length; j++) {
            var flag = false;
            for(var k = 0; k < takenClasses.length; k++) {
                if(takenClasses[k] == core_classes[i].classes[j].class) {
                    fulfilledClasses.push(core_classes[i].classes[j]);
                    units += core_classes[i].classes[j].units;
                    flag = true;
                    break;
                }
            }
            if(flag != true) {
                unfulfilledClasses.push(core_classes[i].classes[j]);
            }
        }
    }
}

function printRequirementsNeeded() {

}

function printRequirementsFulfilled() {
    
}