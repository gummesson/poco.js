/*
 *  Poco.js
 *
 *  Yet another minimally minimal JavaScript DOM library.
 *
 *  Version: 0.2.0
 *  License: MIT
 *
 *  Support: IE9+
 *
 */
(function(window, document) {
 
  'use strict';
 
  // $('#foo');
  // $$('.bar');
  window.$ = document.querySelector.bind(document);
  window.$$ = document.querySelectorAll.bind(document);

  // $Ready(function() { ... });
  window.$Ready = document.addEventListener.bind(document, 'DOMContentLoaded');
 
  // $$('.bar').each(function(element) { ... });
  NodeList.prototype.each = HTMLCollection.prototype.each = Array.prototype.forEach;
 
  // $('#foo').on('click', function(event) { ... });
  // $('#foo').off('click', function(event) { ... });
  Element.prototype.on = Element.prototype.addEventListener;
  Element.prototype.off = Element.prototype.removeEventListener;
 
})(window, document);
