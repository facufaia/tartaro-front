"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/dunder-proto";
exports.ids = ["vendor-chunks/dunder-proto"];
exports.modules = {

/***/ "(rsc)/./node_modules/dunder-proto/get.js":
/*!******************************************!*\
  !*** ./node_modules/dunder-proto/get.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar callBind = __webpack_require__(/*! call-bind-apply-helpers */ \"(rsc)/./node_modules/call-bind-apply-helpers/index.js\");\nvar gOPD = __webpack_require__(/*! gopd */ \"(rsc)/./node_modules/gopd/index.js\");\n\n// eslint-disable-next-line no-extra-parens, no-proto\nvar hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ ([]).__proto__ === Array.prototype;\n\n// eslint-disable-next-line no-extra-parens\nvar desc = hasProtoAccessor && gOPD && gOPD(Object.prototype, /** @type {keyof typeof Object.prototype} */ ('__proto__'));\n\nvar $Object = Object;\nvar $getPrototypeOf = $Object.getPrototypeOf;\n\n/** @type {import('./get')} */\nmodule.exports = desc && typeof desc.get === 'function'\n\t? callBind([desc.get])\n\t: typeof $getPrototypeOf === 'function'\n\t\t? /** @type {import('./get')} */ function getDunder(value) {\n\t\t\t// eslint-disable-next-line eqeqeq\n\t\t\treturn $getPrototypeOf(value == null ? value : $Object(value));\n\t\t}\n\t\t: false;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZHVuZGVyLXByb3RvL2dldC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixlQUFlLG1CQUFPLENBQUMsc0ZBQXlCO0FBQ2hELFdBQVcsbUJBQU8sQ0FBQyxnREFBTTs7QUFFekI7QUFDQSxvQ0FBb0Msc0NBQXNDOztBQUUxRTtBQUNBLHlFQUF5RSwrQkFBK0I7O0FBRXhHO0FBQ0E7O0FBRUEsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9ub2RlX21vZHVsZXMvZHVuZGVyLXByb3RvL2dldC5qcz82ZjIxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGNhbGxCaW5kID0gcmVxdWlyZSgnY2FsbC1iaW5kLWFwcGx5LWhlbHBlcnMnKTtcbnZhciBnT1BEID0gcmVxdWlyZSgnZ29wZCcpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0cmEtcGFyZW5zLCBuby1wcm90b1xudmFyIGhhc1Byb3RvQWNjZXNzb3IgPSAvKiogQHR5cGUge3sgX19wcm90b19fPzogdHlwZW9mIEFycmF5LnByb3RvdHlwZSB9fSAqLyAoW10pLl9fcHJvdG9fXyA9PT0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0cmEtcGFyZW5zXG52YXIgZGVzYyA9IGhhc1Byb3RvQWNjZXNzb3IgJiYgZ09QRCAmJiBnT1BEKE9iamVjdC5wcm90b3R5cGUsIC8qKiBAdHlwZSB7a2V5b2YgdHlwZW9mIE9iamVjdC5wcm90b3R5cGV9ICovICgnX19wcm90b19fJykpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciAkZ2V0UHJvdG90eXBlT2YgPSAkT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9nZXQnKX0gKi9cbm1vZHVsZS5leHBvcnRzID0gZGVzYyAmJiB0eXBlb2YgZGVzYy5nZXQgPT09ICdmdW5jdGlvbidcblx0PyBjYWxsQmluZChbZGVzYy5nZXRdKVxuXHQ6IHR5cGVvZiAkZ2V0UHJvdG90eXBlT2YgPT09ICdmdW5jdGlvbidcblx0XHQ/IC8qKiBAdHlwZSB7aW1wb3J0KCcuL2dldCcpfSAqLyBmdW5jdGlvbiBnZXREdW5kZXIodmFsdWUpIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblx0XHRcdHJldHVybiAkZ2V0UHJvdG90eXBlT2YodmFsdWUgPT0gbnVsbCA/IHZhbHVlIDogJE9iamVjdCh2YWx1ZSkpO1xuXHRcdH1cblx0XHQ6IGZhbHNlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/dunder-proto/get.js\n");

/***/ })

};
;