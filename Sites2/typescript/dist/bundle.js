(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
function sayHello(name) {
    return "Hello from " + name;
}
exports.sayHello = sayHello;

},{}],2:[function(require,module,exports){
"use strict";
var greet_1 = require("./greet");
function showHello(divId, name) {
    var elt = document.getElementById(divId);
    elt.innerText = greet_1.sayHello(name);
}
showHello("greeting", "TypeScript");

},{"./greet":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ3JlZXQudHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQSxrQkFBeUIsSUFBWTtJQUNqQyxNQUFNLENBQUMsZ0JBQWMsSUFBTSxDQUFDO0FBQ2hDLENBQUM7QUFGZSxnQkFBUSxXQUV2QixDQUFBOzs7O0FDRkQsc0JBQXlCLFNBQVMsQ0FBQyxDQUFBO0FBRW5DLG1CQUFtQixLQUFhLEVBQUUsSUFBWTtJQUMxQyxJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsZ0JBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBRUQsU0FBUyxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZnVuY3Rpb24gc2F5SGVsbG8obmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYEhlbGxvIGZyb20gJHtuYW1lfWA7XG59IiwiaW1wb3J0IHsgc2F5SGVsbG8gfSBmcm9tIFwiLi9ncmVldFwiO1xuXG5mdW5jdGlvbiBzaG93SGVsbG8oZGl2SWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2SWQpO1xuICAgIGVsdC5pbm5lclRleHQgPSBzYXlIZWxsbyhuYW1lKTtcbn1cblxuc2hvd0hlbGxvKFwiZ3JlZXRpbmdcIiwgXCJUeXBlU2NyaXB0XCIpOyJdfQ==
