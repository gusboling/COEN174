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
    var value = "; " + document.cookie;
    var parts = value.split("; adapt_session=");
    if (parts.length == 2) return parts.pop().split(";").shift();
};

function loadClasses(hash) {
    return [];
};

function load() {
    // grab hashname from cookie
    var hash = loadHash();
    // grab array from php
    //takenClasses = loadClasses(hash);
    $.ajax({
        url: 'writeUser.php',
        type: 'post',
        data: {'user_hash': hash, 'read': 'true'},
        dataType: "json",
        success: function(msg) {
            console.log("Loaded classes");
            console.log(msg);
            //takenClasses = $.parseJSON(msg);
            takenClasses = JSON.parse(JSON.stringify(msg));
        }
    });
    return true;
}

// Save user data
function save() {
    var jsonString = JSON.stringify(takenClasses);
    console.log("Saving: " + jsonString);
    $.ajax({
        url: 'writeUser.php',
        type: 'post',
        data: {'user_hash': hash, 'write': 'true', 'data': jsonString},
        dataType: "json",
        success: function(msg) {
            console.log(msg);
        },
        error: function(xhr) {
            console.log("An error saving occured: " + xhr.status + " " + xhr.statusText)
        }
    });

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
    //console.log(classNames);
    var matches = [];
    // Match regex for a class: 4 char code + digits (and possibly another char)
    var regex = /\b[a-zA-Z]{4}\s\d{1,3}[A-Z]*\b/;
    var match = regex.exec(classNames);
    //console.log("matched");
    //console.log(match);
    
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
    requirementsCompare();
    printRequirementsFulfilled();
    printRequirementsNeeded();
    save();
}

// Remove a taken class
function removeClass(className) {
    var toRemove = className;
    
    /*var index = coenClasses.indexOf(className);
    if (index > -1) {
        coenClasses.splice(index, 1);
    }

    index = coreClasses.indexOf(className);
    if (index > -1) {
        coreClasses.splice(index, 1);
    }*/

    index = takenClasses.indexOf(className);
    if (index > -1) {
        takenClasses.splice(index, 1);
    }

    removeElective(className);
    removeEnrichment(className);
    //printTakenClasses();
    requirementsCompare();
    printRequirementsFulfilled();
    printRequirementsNeeded()
    save();
}

// Add a single class
function addClass(className) {
    var str = sanitize(className);
    
    //don't add multiple of the same
    if(takenClasses!=null && arrayIncludes(str, takenClasses)) {
        console.log("already added");
        return;
    }
    
    //add to the appropriate array. TODO: cleanup, consolidate arrays
    /*if(str.includes("coen") || str.includes("COEN")) {
        coenClasses.push(str.toUpperCase());
    } else {
        coreClasses.push(str.toUpperCase());
    }*/

    //should check if a class is actually a class
    takenClasses.push(str.toUpperCase());
    //printTakenClasses();
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

    //reset classes
    unfulfilledClasses = [];
    fulfilledClasses = [];

    var checkedFlags = [];
    for(var i = 0; i < takenClasses.length; i++) {
        checkedFlags.push(0);
    }

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
    } else {
        unfulfilledClasses.push(math_classes[12]);
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
        unfulfilledClasses.push(math_classes[14]);
    }
    var math53 = takenClasses.indexOf("MATH 53");
    var math166 = takenClasses.indexOf("MATH 166");
    var amth118 = takenClasses.indexOf("AMTH 118");
    if(math53 > -1 || math166 > -1 || amth118 > -1) {
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
            units += 4;
        }
    } else {
        unfulfilledClasses.push(math_classes[16]);
    }


    //core[i].classes[]
    for(var i = 0; i < core_classes.length; i++) {
        var flag = false;
        for(var j = 0; j < core_classes[i].classes.length; j++) {
            for(var k = 0; k < takenClasses.length; k++) {
                if(takenClasses[k] == core_classes[i].classes[j].class) {
                    fulfilledClasses.push(core_classes[i].classes[j]);
                    units += core_classes[i].classes[j].units;
                    flag = true;
                    break;
                }
            }
        }
        if(flag != true) {
            unfulfilledClasses.push(core_classes[i].core);
        }
    }
}

function printRequirementsNeeded() {
    var resString = "";
    for(var i = 0; i < unfulfilledClasses.length; i++) {
        if (unfulfilledClasses[i].class != null) {
            resString += "<div id=\"" + unfulfilledClasses[i].class + "\">" + unfulfilledClasses[i].class + "<br></div>";
        } else {
            resString += "<div id=\"" + unfulfilledClasses[i] + "\">" + unfulfilledClasses[i] + "<br></div>";
        }
    }
    //electives
    if(electives.length < 3) {
        resString += "<div id='elective_req'>Electives: " + electives.length + "/3 Classes<br></div>";
    }

    //educational enrichment
    if(enrichment.length < 3) {
        resString += "<div id='enrichment_req'>Enrichment: " + enrichment.length + "/4 Classes<br></div>";
    }

    //units
    if(units < 191) {
        resString += "<div id=\"units\">" + "Units: " + units + "/191" + "<br></div>";
    }
    
    document.getElementById("unfulfilled").innerHTML = resString;
}

function addElective(className) {
    if(electives.indexOf(className) > -1) { //don't add the same again
        return;
    } else {
        electives.push(className);
    }
}

function removeElective(className) {
    var elIdx = electives.indexOf(className);
    if(elIdx > -1) {
        electives.splice(elIdx, 1);
    }
}

function addEnrichment(className) {
    if(enrichment.indexOf(className) > -1) { //don't add the same again
        return;
    } else {
        enrichment.push(className);
    }
}

function removeEnrichment(className) {
    var enIdx = enrichment.indexOf(className);
    if(enIdx > -1) {
        enrichment.splice(enIdx, 1);
    }
}

function extraReq(val) {
    var box = document.getElementById(val);
    var value = box.options[box.selectedIndex].value;
    var className = val.replace("_box","");
    if(value == null || value == '' ) { //remove from enrichment,elective
        removeElective(className);
        removeEnrichment(className);
    } else if (value == 'elective') { //add elective
        removeEnrichment(className)
        addElective(className);
    } else if (value == 'enrichment') { //add enrichment
        removeElective(className);
        addEnrichment(className);
    }

    printRequirementsFulfilled();
    printRequirementsNeeded();
    save();
}

function printRequirementsFulfilled() {
    var resString = "";
    for(var i = 0; i < takenClasses.length; i++) {
        var selectedEl = "";
        if(electives.indexOf(takenClasses[i]) > -1)
            selectedEl = "selected";

        var selectedEn = "";
        if(enrichment.indexOf(takenClasses[i]) > -1)
            selectedEn = "selected";
        var selbox = "<select id='" + takenClasses[i] + "_box' name='Elective or Enrichment?' onchange='extraReq(this.id)'>"
                    + "<option value='empty'></option>" 
                    + "<option value='elective' " + selectedEl + ">Elective</option>"
                    + "<option value='enrichment' " + selectedEn + ">Educational Enrichment</option>"
                    + "<select>";
        resString += "<div id=\"" + takenClasses[i] + "\">" + takenClasses[i] 
        + "&nbsp;&nbsp;&nbsp;&nbsp;" + "<input id='" + takenClasses[i] + "' type=\"button\" value=\"Remove\" onclick=\"removeClass(this.id)\"/>" 
        + "&nbsp;&nbsp;&nbsp;&nbsp;" + selbox + "</br></div>";
    }
    document.getElementById("takenCourses").innerHTML = resString;
}