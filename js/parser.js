//break up the classes for checking?
var coenClasses = [];
var coreClasses = [];

//or just go and check each individually
var takenClasses = [];

String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

function sanitize(str) {
    //sanitize the String
    return str;
}

function printClasses() {
    text = "";
    for(i = 0; i < coenClasses.length; i++) {
        text += "<div id=\"" + coenClasses[i] + "\">" + coenClasses[i] + "<br></div>";
    }
    for(i = 0; i < coreClasses.length; i++) {
        text += "<div id=\"" + coreClasses[i] + "\">" + coreClasses[i] + "<br></div>";
    }
    document.getElementById("takenCourses").innerHTML = text;
    //document.getElementById("allCourses").appendChild(document.createTextNode(text));
    //appendChild(document.createTextNode(unsafe_str));
};

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
    document.getElementById("singleInput").value="";
}

function removeClass(className) {
    

}

function arrayIncludes(value, array) {
    return array.indexOf(value) > -1;
}

function addClass(className) {
    var str = sanitize(className);
    
    //don't add multiple of the same
    if(arrayIncludes(str, takenClasses)) {
        console.log("already added");
        console.log(takenClasses);
        return;
    }
    
    if(str.includes("coen") || str.includes("COEN")) {
        coenClasses.push(str.toUpperCase());
    } else {
        coreClasses.push(str.toUpperCase());
    }

    //should check if a class is actually a class
    takenClasses.push(str.toUpperCase());
    printClasses();
}

//true if add many, false if add one
function checkAddOneOrMany(classes) {
    var str = classes;
    if(str.includes('\n'))
        return true;
    return false;
}