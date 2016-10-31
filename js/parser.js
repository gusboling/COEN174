// @file parser.js
// @author Matthew Koken <mkoken@scu.edu>
// Functions for parsing, tracking classes and requirements

//break up the classes for checking?
var coenClasses = [];
var coreClasses = [];

//or just go and check each individually
var takenClasses = [];

// Sanitize a string for safe processing
function sanitize(str) {
    //sanitize the String
    return str;
}

// Save user data
function save() {
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
    save()
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
    if(arrayIncludes(str, takenClasses)) {
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