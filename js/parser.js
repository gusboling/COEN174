var coenClasses = [];
var coreClasses = [];

String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

debugger;

function printClasses() {
    text = "";
    for(i = 0; i < coenClasses.length; i++) {
        text += coenClasses[i] + "<br>";
    }
    for(i = 0; i < coreClasses.length; i++) {
        text += coreClasses[i] + "<br>";
    }
    document.getElementById("allCourses").innerHTML = text;
};

function addClasses() {
    var classNames = document.getElementById("singleInput").value;
    if(checkAddOneOrMany()) {

    } else {
        addClass(classNames);
    }
}

function addClass(className) {
    var str = className;
    if(str.includes("coen") || str.includes("COEN")) {
        coenClasses.push(str.toUpperCase());
    } else {
        coreClasses.push(str.toUpperCase());
    }
    printClasses;
}

//true if add many, false if add one
function checkAddOneOrMany(classes) {
    return false;
}