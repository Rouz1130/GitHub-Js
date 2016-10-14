(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Git() {
}

Git.prototype.getGit = function(name) {
  $.get('https://api.github.com/users/' + name + '/repos?/access_token=' + apiKey).then(function(response){
    console.log(JSON.stringify(response));
    for(var i = 0; i <= response.length; i++){

      $('ul#final').append("<li>" + response[i].name + "   "  + response[i].description + "</li>");
    }

    $('ul#repos').append("<li>" +" " + "</li");



  }).fail(function(error){

  });
};





exports.gitModule = Git;

},{"./../.env":1}],3:[function(require,module,exports){
var Git = require("./../js/github.js").gitModule;


$(document).ready(function() {
  $('#getName').click(function() {
    var name = $('#name').val();
    $('#name').val("");
    var gitObject = new Git();
    gitObject.getGit(name);
    console.log(gitObject);


  });
});

},{"./../js/github.js":2}]},{},[3]);
