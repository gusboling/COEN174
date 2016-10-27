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
    document.getElementById("allCourses").innerHTML = text;
    //document.getElementById("allCourses").appendChild(document.createTextNode(text));
    //appendChild(document.createTextNode(unsafe_str));
};

function addClasses() {
    //should sanitize input before handling
    var classNames = document.getElementById("singleInput").value;
    if(checkAddOneOrMany()) {

    } else {
        addClass(classNames);
    }
}

function removeClass() {

}

function arrayIncludes(value, array) {
    return array.indexOf(value) > -1;
}

function addClass(className) {
    var str = sanitize(className);
    
    //don't add multiple of the same
    if(!arrayIncludes(takenClasses, className)) {
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
    return false;
}