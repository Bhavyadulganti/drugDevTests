(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var url = 'http://sprinkle-burn.glitch.me';
given("the user has the correct credentials", function () {
  cy.visit(url);
});
when("the user enters username {string}", function (username) {
  cy.get('#login-form > fieldset > div:nth-child(2) > input').type(username); //throw new Error("Not implemented");
});
then("the user enters password {string}", function (password) {
  cy.get('#login-form > fieldset > div:nth-child(3) > input').type(password);
});
then("clicks Login", function () {
  cy.get('#login-form > fieldset > div.flex > button').click();
});
then("the user is presented with a welcome message", function () {
  cy.get('body > article').contains('Welcome Dr I Test');
});
given("the user has the incorrect credentials", function () {
  cy.visit(url);
});
then("the user is presented with a error message", function () {
  cy.get('#login-error-box').contains("Credentials are incorrect");
});

},{}]},{},[1]);
