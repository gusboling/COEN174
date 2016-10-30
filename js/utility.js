// @file utility.js
// @author Matthew Koken <mkoken@scu.edu>
// Utility classes go here

// Utility: Array includes
function arrayIncludes(value, array) {
    return array.indexOf(value) > -1;
}

// Check if a string contains a substring
String.prototype.contains = function(it) { return this.indexOf(it) != -1; };