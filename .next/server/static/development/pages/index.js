module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/about.js":
/*!*****************************!*\
  !*** ./components/about.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/rowanatk/projects/nextjs/rowan-site/components/about.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1325311971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1325311971",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at consectetur lorem donec. Non enim praesent elementum facilisis leo vel fringilla est. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Erat nam at lectus urna duis convallis. Tortor dignissim convallis aenean et tortor. Sit amet nisl purus in mollis nunc sed id semper. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Feugiat pretium nibh ipsum consequat. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Blandit turpis cursus in hac. Augue lacus viverra vitae congue eu consequat ac felis. Vitae et leo duis ut. Cursus sit amet dictum sit. Risus pretium quam vulputate dignissim suspendisse in est. Orci sagittis eu volutpat odio facilisis mauris. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Velit ut tortor pretium viverra. Convallis tellus id interdum velit laoreet. Faucibus et molestie ac feugiat sed. Odio tempor orci dapibus ultrices in iaculis nunc sed. Sed libero enim sed faucibus turpis in eu mi bibendum. At risus viverra adipiscing at in tellus integer feugiat. Egestas diam in arcu cursus euismod quis. Est sit amet facilisis magna. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Consequat interdum varius sit amet mattis. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Phasellus egestas tellus rutrum tellus pellentesque. Et netus et malesuada fames ac turpis. Feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Odio morbi quis commodo odio aenean sed adipiscing diam. Vitae proin sagittis nisl rhoncus mattis rhoncus. Nibh sit amet commodo nulla facilisi nullam vehicula. Nunc consequat interdum varius sit amet mattis. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Porta lorem mollis aliquam ut porttitor leo. Egestas purus viverra accumsan in nisl. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Sed odio morbi quis commodo odio. Sit amet cursus sit amet dictum sit amet. Dictum sit amet justo donec enim diam vulputate ut pharetra. Mattis molestie a iaculis at erat pellentesque. Feugiat scelerisque varius morbi enim nunc faucibus a. Diam quam nulla porttitor massa id neque aliquam vestibulum. Felis donec et odio pellentesque diam volutpat. Non curabitur gravida arcu ac tortor dignissim convallis. Nunc sed blandit libero volutpat sed cras ornare arcu. Sed tempus urna et pharetra pharetra. Justo nec ultrices dui sapien eget. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Lacus sed turpis tincidunt id aliquet risus feugiat in. Imperdiet nulla malesuada pellentesque elit eget gravida. Ut tristique et egestas quis. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Sit amet est placerat in egestas erat imperdiet sed. Faucibus interdum posuere lorem ipsum dolor sit amet. Consectetur adipiscing elit pellentesque habitant. Donec enim diam vulputate ut pharetra sit amet. Lorem mollis aliquam ut porttitor. Elit pellentesque habitant morbi tristique senectus et netus et. Mi in nulla posuere sollicitudin aliquam. Blandit libero volutpat sed cras ornare arcu dui vivamus. Amet luctus venenatis lectus magna fringilla. Mi quis hendrerit dolor magna eget est lorem. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Urna condimentum mattis pellentesque id nibh tortor. Eget gravida cum sociis natoque penatibus et magnis dis. Ac felis donec et odio pellentesque diam volutpat commodo sed. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Condimentum mattis pellentesque id nibh tortor id aliquet. Ornare massa eget egestas purus viverra accumsan in nisl. Mattis rhoncus urna neque viverra justo nec ultrices. Enim tortor at auctor urna nunc id. In aliquam sem fringilla ut morbi tincidunt augue interdum. Sed adipiscing diam donec adipiscing tristique. Commodo odio aenean sed adipiscing diam donec. Nunc sed id semper risus in. Imperdiet proin fermentum leo vel. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Lobortis elementum nibh tellus molestie nunc non blandit massa. Lacus vestibulum sed arcu non odio euismod lacinia at. Sed risus pretium quam vulputate dignissim suspendisse in est. Sit amet purus gravida quis blandit turpis cursus in hac. Nulla porttitor massa id neque. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Egestas integer eget aliquet nibh praesent tristique magna. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. Sit amet facilisis magna etiam tempor orci eu. Neque viverra justo nec ultrices. Et netus et malesuada fames ac turpis egestas integer eget. Orci eu lobortis elementum nibh tellus molestie. Felis eget nunc lobortis mattis aliquam faucibus purus in. Accumsan in nisl nisi scelerisque eu. Fringilla ut morbi tincidunt augue interdum velit. Duis at tellus at urna condimentum. Eleifend mi in nulla posuere sollicitudin aliquam. Urna cursus eget nunc scelerisque viverra mauris. Nunc id cursus metus aliquam eleifend mi in nulla. Enim ut sem viverra aliquet. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Odio eu feugiat pretium nibh ipsum consequat. Purus non enim praesent elementum facilisis leo vel. Viverra maecenas accumsan lacus vel. Nulla facilisi nullam vehicula ipsum a arcu. Libero justo laoreet sit amet cursus sit amet dictum. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Pellentesque dignissim enim sit amet venenatis urna cursus. Adipiscing bibendum est ultricies integer quis auctor elit sed. Justo nec ultrices dui sapien. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Nisi lacus sed viverra tellus. Enim sit amet venenatis urna cursus eget nunc. Blandit libero volutpat sed cras ornare. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Velit laoreet id donec ultrices tincidunt. Euismod lacinia at quis risus sed vulputate odio ut enim. Vulputate enim nulla aliquet porttitor. Sit amet cursus sit amet dictum sit amet justo donec. Augue ut lectus arcu bibendum. Feugiat nibh sed pulvinar proin gravida hendrerit. Eget duis at tellus at urna condimentum mattis pellentesque. Neque viverra justo nec ultrices dui sapien eget mi proin. Fermentum posuere urna nec tincidunt praesent semper feugiat. Arcu dui vivamus arcu felis bibendum ut tristique et. Ultricies tristique nulla aliquet enim tortor. In aliquam sem fringilla ut morbi tincidunt augue interdum. In est ante in nibh mauris cursus. Dui sapien eget mi proin sed libero enim. Nisl tincidunt eget nullam non. Adipiscing tristique risus nec feugiat in fermentum posuere. Sit amet porttitor eget dolor morbi non. Viverra aliquet eget sit amet tellus cras. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Cursus euismod quis viverra nibh cras pulvinar. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Dolor purus non enim praesent elementum facilisis. Elit eget gravida cum sociis natoque penatibus. Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod. Integer feugiat scelerisque varius morbi enim. Nec dui nunc mattis enim ut tellus elementum sagittis. Pellentesque dignissim enim sit amet venenatis urna. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Eget nulla facilisi etiam dignissim. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Eu scelerisque felis imperdiet proin fermentum leo vel. Justo nec ultrices dui sapien eget mi proin. Feugiat in fermentum posuere urna nec tincidunt praesent semper. Leo vel orci porta non pulvinar neque laoreet suspendisse. Sed elementum tempus egestas sed sed. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Arcu dictum varius duis at consectetur lorem donec massa. Mauris in aliquam sem fringilla ut. Mi sit amet mauris commodo quis. Viverra aliquet eget sit amet. Elementum nisi quis eleifend quam. Eget mauris pharetra et ultrices neque ornare aenean. Sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus et malesuada. Vel turpis nunc eget lorem dolor sed viverra ipsum. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis risus sed vulputate odio ut enim blandit volutpat. Enim sed faucibus turpis in. Eu volutpat odio facilisis mauris sit amet massa. Sed felis eget velit aliquet sagittis id consectetur. Parturient montes nascetur ridiculus mus. Enim tortor at auctor urna nunc id. Lectus quam id leo in vitae. Nibh nisl condimentum id venenatis a. Lacus viverra vitae congue eu consequat ac felis donec. Augue lacus viverra vitae congue eu consequat ac. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Orci eu lobortis elementum nibh. Dolor sit amet consectetur adipiscing. Cras adipiscing enim eu turpis egestas. Lectus mauris ultrices eros in. Morbi leo urna molestie at elementum eu facilisis sed. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Quisque id diam vel quam elementum pulvinar etiam non quam. Ornare suspendisse sed nisi lacus sed. Semper quis lectus nulla at volutpat. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Mollis nunc sed id semper. Quis risus sed vulputate odio ut enim blandit volutpat maecenas. At quis risus sed vulputate odio ut. Libero id faucibus nisl tincidunt eget. Rhoncus dolor purus non enim praesent elementum facilisis. Nisl condimentum id venenatis a condimentum vitae sapien. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Felis donec et odio pellentesque diam volutpat. Molestie a iaculis at erat pellentesque adipiscing commodo elit. Enim eu turpis egestas pretium. Eget egestas purus viverra accumsan in. Maecenas pharetra convallis posuere morbi leo urna. Aenean et tortor at risus viverra adipiscing at in tellus. Sapien eget mi proin sed. Mattis nunc sed blandit libero volutpat sed. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Placerat duis ultricies lacus sed turpis tincidunt id. Nunc sed id semper risus in hendrerit gravida. Mauris augue neque gravida in fermentum et sollicitudin. Sit amet justo donec enim diam vulputate. Odio euismod lacinia at quis risus. Orci a scelerisque purus semper eget. Ac turpis egestas integer eget aliquet. Arcu felis bibendum ut tristique et. Massa sapien faucibus et molestie ac feugiat sed. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Id diam vel quam elementum pulvinar etiam. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Cum sociis natoque penatibus et magnis. Odio ut sem nulla pharetra. Id aliquet risus feugiat in. Ullamcorper eget nulla facilisi etiam. Varius vel pharetra vel turpis nunc eget. Sed libero enim sed faucibus turpis. Leo duis ut diam quam nulla. Amet consectetur adipiscing elit pellentesque habitant morbi. Eleifend mi in nulla posuere sollicitudin. In ornare quam viverra orci sagittis eu volutpat odio. Augue interdum velit euismod in pellentesque massa placerat. Pulvinar pellentesque habitant morbi tristique senectus et netus. Vitae auctor eu augue ut. Molestie nunc non blandit massa enim. A scelerisque purus semper eget duis at tellus at urna. Aenean pharetra magna ac placerat vestibulum. Eu lobortis elementum nibh tellus molestie nunc non blandit. Sit amet dictum sit amet justo donec enim diam. Commodo ullamcorper a lacus vestibulum sed. Dolor sit amet consectetur adipiscing elit. Sed augue lacus viverra vitae congue eu. Malesuada fames ac turpis egestas maecenas pharetra. Pellentesque elit eget gravida cum. At augue eget arcu dictum varius duis at consectetur lorem. Non odio euismod lacinia at quis risus sed vulputate odio. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Nec nam aliquam sem et. Consectetur lorem donec massa sapien faucibus. Lacus viverra vitae congue eu consequat. Cum sociis natoque penatibus et magnis. Fames ac turpis egestas sed tempus urna et pharetra. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Quis auctor elit sed vulputate mi sit amet mauris commodo. Interdum consectetur libero id faucibus nisl tincidunt. Mauris sit amet massa vitae tortor. Orci nulla pellentesque dignissim enim sit amet. Risus viverra adipiscing at in tellus integer. Dignissim sodales ut eu sem integer vitae justo. Nisl tincidunt eget nullam non nisi est sit amet. Pulvinar proin gravida hendrerit lectus a. Pretium vulputate sapien nec sagittis aliquam malesuada. Vulputate sapien nec sagittis aliquam. Elementum nibh tellus molestie nunc non blandit. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Sit amet consectetur adipiscing elit ut aliquam. Pellentesque dignissim enim sit amet venenatis urna. Euismod nisi porta lorem mollis aliquam. Massa sapien faucibus et molestie ac feugiat. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Quisque sagittis purus sit amet volutpat consequat mauris nunc. Facilisis magna etiam tempor orci eu lobortis elementum. Enim neque volutpat ac tincidunt vitae semper quis. Dolor sed viverra ipsum nunc. Hac habitasse platea dictumst vestibulum rhoncus. Purus faucibus ornare suspendisse sed nisi lacus. Malesuada fames ac turpis egestas sed tempus. Eget duis at tellus at urna condimentum. Nulla pellentesque dignissim enim sit amet. Eu consequat ac felis donec et odio pellentesque diam volutpat. Semper auctor neque vitae tempus. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Elementum facilisis leo vel fringilla est. Nunc non blandit massa enim nec dui nunc. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1325311971",
    __self: this
  }, ".jsx-1325311971{height:100%;width:100%;margin-top:60px;color:rgb(183,183,183);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jvd2FuYXRrL3Byb2plY3RzL25leHRqcy9yb3dhbi1zaXRlL2NvbXBvbmVudHMvYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENnQixBQUVxQixZQUNELFdBRUssZ0JBQ1MsdUJBQzdCIiwiZmlsZSI6Ii9ob21lL3Jvd2FuYXRrL3Byb2plY3RzL25leHRqcy9yb3dhbi1zaXRlL2NvbXBvbmVudHMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PihcbiAgICA8ZGl2PlxuICAgICAgICA8cD5cbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIER1aXMgYXQgY29uc2VjdGV0dXIgbG9yZW0gZG9uZWMuIE5vbiBlbmltIHByYWVzZW50IGVsZW1lbnR1bSBmYWNpbGlzaXMgbGVvIHZlbCBmcmluZ2lsbGEgZXN0LiBNYWxlc3VhZGEgYmliZW5kdW0gYXJjdSB2aXRhZSBlbGVtZW50dW0gY3VyYWJpdHVyIHZpdGFlIG51bmMgc2VkIHZlbGl0LiBFcmF0IG5hbSBhdCBsZWN0dXMgdXJuYSBkdWlzIGNvbnZhbGxpcy4gVG9ydG9yIGRpZ25pc3NpbSBjb252YWxsaXMgYWVuZWFuIGV0IHRvcnRvci4gU2l0IGFtZXQgbmlzbCBwdXJ1cyBpbiBtb2xsaXMgbnVuYyBzZWQgaWQgc2VtcGVyLiBBbGlxdWV0IHNhZ2l0dGlzIGlkIGNvbnNlY3RldHVyIHB1cnVzIHV0IGZhdWNpYnVzIHB1bHZpbmFyLiBTZWQgYWRpcGlzY2luZyBkaWFtIGRvbmVjIGFkaXBpc2NpbmcgdHJpc3RpcXVlIHJpc3VzIG5lYyBmZXVnaWF0IGluLiBGZXVnaWF0IHByZXRpdW0gbmliaCBpcHN1bSBjb25zZXF1YXQuXG5cbkVnZXN0YXMgZWdlc3RhcyBmcmluZ2lsbGEgcGhhc2VsbHVzIGZhdWNpYnVzIHNjZWxlcmlzcXVlIGVsZWlmZW5kIGRvbmVjIHByZXRpdW0uIEJsYW5kaXQgdHVycGlzIGN1cnN1cyBpbiBoYWMuIEF1Z3VlIGxhY3VzIHZpdmVycmEgdml0YWUgY29uZ3VlIGV1IGNvbnNlcXVhdCBhYyBmZWxpcy4gVml0YWUgZXQgbGVvIGR1aXMgdXQuIEN1cnN1cyBzaXQgYW1ldCBkaWN0dW0gc2l0LiBSaXN1cyBwcmV0aXVtIHF1YW0gdnVscHV0YXRlIGRpZ25pc3NpbSBzdXNwZW5kaXNzZSBpbiBlc3QuIE9yY2kgc2FnaXR0aXMgZXUgdm9sdXRwYXQgb2RpbyBmYWNpbGlzaXMgbWF1cmlzLiBFc3QgcGVsbGVudGVzcXVlIGVsaXQgdWxsYW1jb3JwZXIgZGlnbmlzc2ltIGNyYXMgdGluY2lkdW50IGxvYm9ydGlzIGZldWdpYXQgdml2YW11cy4gVmVsaXQgdXQgdG9ydG9yIHByZXRpdW0gdml2ZXJyYS4gQ29udmFsbGlzIHRlbGx1cyBpZCBpbnRlcmR1bSB2ZWxpdCBsYW9yZWV0LlxuXG5GYXVjaWJ1cyBldCBtb2xlc3RpZSBhYyBmZXVnaWF0IHNlZC4gT2RpbyB0ZW1wb3Igb3JjaSBkYXBpYnVzIHVsdHJpY2VzIGluIGlhY3VsaXMgbnVuYyBzZWQuIFNlZCBsaWJlcm8gZW5pbSBzZWQgZmF1Y2lidXMgdHVycGlzIGluIGV1IG1pIGJpYmVuZHVtLiBBdCByaXN1cyB2aXZlcnJhIGFkaXBpc2NpbmcgYXQgaW4gdGVsbHVzIGludGVnZXIgZmV1Z2lhdC4gRWdlc3RhcyBkaWFtIGluIGFyY3UgY3Vyc3VzIGV1aXNtb2QgcXVpcy4gRXN0IHNpdCBhbWV0IGZhY2lsaXNpcyBtYWduYS4gRWdldCB2ZWxpdCBhbGlxdWV0IHNhZ2l0dGlzIGlkIGNvbnNlY3RldHVyIHB1cnVzIHV0IGZhdWNpYnVzIHB1bHZpbmFyLiBDb25zZXF1YXQgaW50ZXJkdW0gdmFyaXVzIHNpdCBhbWV0IG1hdHRpcy4gTGVjdHVzIGFyY3UgYmliZW5kdW0gYXQgdmFyaXVzIHZlbCBwaGFyZXRyYSB2ZWwgdHVycGlzIG51bmMuIFBoYXNlbGx1cyBlZ2VzdGFzIHRlbGx1cyBydXRydW0gdGVsbHVzIHBlbGxlbnRlc3F1ZS4gRXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcy4gRmV1Z2lhdCB2aXZhbXVzIGF0IGF1Z3VlIGVnZXQuIFJpc3VzIGZldWdpYXQgaW4gYW50ZSBtZXR1cyBkaWN0dW0uIE9kaW8gbW9yYmkgcXVpcyBjb21tb2RvIG9kaW8gYWVuZWFuIHNlZCBhZGlwaXNjaW5nIGRpYW0uXG5cblZpdGFlIHByb2luIHNhZ2l0dGlzIG5pc2wgcmhvbmN1cyBtYXR0aXMgcmhvbmN1cy4gTmliaCBzaXQgYW1ldCBjb21tb2RvIG51bGxhIGZhY2lsaXNpIG51bGxhbSB2ZWhpY3VsYS4gTnVuYyBjb25zZXF1YXQgaW50ZXJkdW0gdmFyaXVzIHNpdCBhbWV0IG1hdHRpcy4gTG9yZW0gZG9uZWMgbWFzc2Egc2FwaWVuIGZhdWNpYnVzIGV0IG1vbGVzdGllIGFjIGZldWdpYXQgc2VkLiBQb3J0YSBsb3JlbSBtb2xsaXMgYWxpcXVhbSB1dCBwb3J0dGl0b3IgbGVvLiBFZ2VzdGFzIHB1cnVzIHZpdmVycmEgYWNjdW1zYW4gaW4gbmlzbC4gVnVscHV0YXRlIGV1IHNjZWxlcmlzcXVlIGZlbGlzIGltcGVyZGlldCBwcm9pbiBmZXJtZW50dW0gbGVvIHZlbC4gU2VkIG9kaW8gbW9yYmkgcXVpcyBjb21tb2RvIG9kaW8uIFNpdCBhbWV0IGN1cnN1cyBzaXQgYW1ldCBkaWN0dW0gc2l0IGFtZXQuIERpY3R1bSBzaXQgYW1ldCBqdXN0byBkb25lYyBlbmltIGRpYW0gdnVscHV0YXRlIHV0IHBoYXJldHJhLlxuXG5NYXR0aXMgbW9sZXN0aWUgYSBpYWN1bGlzIGF0IGVyYXQgcGVsbGVudGVzcXVlLiBGZXVnaWF0IHNjZWxlcmlzcXVlIHZhcml1cyBtb3JiaSBlbmltIG51bmMgZmF1Y2lidXMgYS4gRGlhbSBxdWFtIG51bGxhIHBvcnR0aXRvciBtYXNzYSBpZCBuZXF1ZSBhbGlxdWFtIHZlc3RpYnVsdW0uIEZlbGlzIGRvbmVjIGV0IG9kaW8gcGVsbGVudGVzcXVlIGRpYW0gdm9sdXRwYXQuIE5vbiBjdXJhYml0dXIgZ3JhdmlkYSBhcmN1IGFjIHRvcnRvciBkaWduaXNzaW0gY29udmFsbGlzLiBOdW5jIHNlZCBibGFuZGl0IGxpYmVybyB2b2x1dHBhdCBzZWQgY3JhcyBvcm5hcmUgYXJjdS4gU2VkIHRlbXB1cyB1cm5hIGV0IHBoYXJldHJhIHBoYXJldHJhLiBKdXN0byBuZWMgdWx0cmljZXMgZHVpIHNhcGllbiBlZ2V0LiBUdXJwaXMgZWdlc3RhcyBwcmV0aXVtIGFlbmVhbiBwaGFyZXRyYSBtYWduYSBhYyBwbGFjZXJhdCB2ZXN0aWJ1bHVtLiBMYWN1cyBzZWQgdHVycGlzIHRpbmNpZHVudCBpZCBhbGlxdWV0IHJpc3VzIGZldWdpYXQgaW4uIEltcGVyZGlldCBudWxsYSBtYWxlc3VhZGEgcGVsbGVudGVzcXVlIGVsaXQgZWdldCBncmF2aWRhLiBVdCB0cmlzdGlxdWUgZXQgZWdlc3RhcyBxdWlzLiBJbiBuaXNsIG5pc2kgc2NlbGVyaXNxdWUgZXUgdWx0cmljZXMgdml0YWUgYXVjdG9yIGV1IGF1Z3VlLiBTaXQgYW1ldCBlc3QgcGxhY2VyYXQgaW4gZWdlc3RhcyBlcmF0IGltcGVyZGlldCBzZWQuIEZhdWNpYnVzIGludGVyZHVtIHBvc3VlcmUgbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQuIENvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCBwZWxsZW50ZXNxdWUgaGFiaXRhbnQuIERvbmVjIGVuaW0gZGlhbSB2dWxwdXRhdGUgdXQgcGhhcmV0cmEgc2l0IGFtZXQuIExvcmVtIG1vbGxpcyBhbGlxdWFtIHV0IHBvcnR0aXRvci4gRWxpdCBwZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0LlxuXG5NaSBpbiBudWxsYSBwb3N1ZXJlIHNvbGxpY2l0dWRpbiBhbGlxdWFtLiBCbGFuZGl0IGxpYmVybyB2b2x1dHBhdCBzZWQgY3JhcyBvcm5hcmUgYXJjdSBkdWkgdml2YW11cy4gQW1ldCBsdWN0dXMgdmVuZW5hdGlzIGxlY3R1cyBtYWduYSBmcmluZ2lsbGEuIE1pIHF1aXMgaGVuZHJlcml0IGRvbG9yIG1hZ25hIGVnZXQgZXN0IGxvcmVtLiBNaSBlZ2V0IG1hdXJpcyBwaGFyZXRyYSBldCB1bHRyaWNlcyBuZXF1ZSBvcm5hcmUgYWVuZWFuIGV1aXNtb2QuIFZlaGljdWxhIGlwc3VtIGEgYXJjdSBjdXJzdXMgdml0YWUgY29uZ3VlIG1hdXJpcyByaG9uY3VzIGFlbmVhbi4gVXJuYSBjb25kaW1lbnR1bSBtYXR0aXMgcGVsbGVudGVzcXVlIGlkIG5pYmggdG9ydG9yLiBFZ2V0IGdyYXZpZGEgY3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzLiBBYyBmZWxpcyBkb25lYyBldCBvZGlvIHBlbGxlbnRlc3F1ZSBkaWFtIHZvbHV0cGF0IGNvbW1vZG8gc2VkLiBQaGFyZXRyYSBkaWFtIHNpdCBhbWV0IG5pc2wgc3VzY2lwaXQgYWRpcGlzY2luZyBiaWJlbmR1bSBlc3QuIENvbmRpbWVudHVtIG1hdHRpcyBwZWxsZW50ZXNxdWUgaWQgbmliaCB0b3J0b3IgaWQgYWxpcXVldC4gT3JuYXJlIG1hc3NhIGVnZXQgZWdlc3RhcyBwdXJ1cyB2aXZlcnJhIGFjY3Vtc2FuIGluIG5pc2wuXG5cbk1hdHRpcyByaG9uY3VzIHVybmEgbmVxdWUgdml2ZXJyYSBqdXN0byBuZWMgdWx0cmljZXMuIEVuaW0gdG9ydG9yIGF0IGF1Y3RvciB1cm5hIG51bmMgaWQuIEluIGFsaXF1YW0gc2VtIGZyaW5naWxsYSB1dCBtb3JiaSB0aW5jaWR1bnQgYXVndWUgaW50ZXJkdW0uIFNlZCBhZGlwaXNjaW5nIGRpYW0gZG9uZWMgYWRpcGlzY2luZyB0cmlzdGlxdWUuIENvbW1vZG8gb2RpbyBhZW5lYW4gc2VkIGFkaXBpc2NpbmcgZGlhbSBkb25lYy4gTnVuYyBzZWQgaWQgc2VtcGVyIHJpc3VzIGluLiBJbXBlcmRpZXQgcHJvaW4gZmVybWVudHVtIGxlbyB2ZWwuIEZlcm1lbnR1bSBwb3N1ZXJlIHVybmEgbmVjIHRpbmNpZHVudCBwcmFlc2VudCBzZW1wZXIgZmV1Z2lhdCBuaWJoLiBMb2JvcnRpcyBlbGVtZW50dW0gbmliaCB0ZWxsdXMgbW9sZXN0aWUgbnVuYyBub24gYmxhbmRpdCBtYXNzYS4gTGFjdXMgdmVzdGlidWx1bSBzZWQgYXJjdSBub24gb2RpbyBldWlzbW9kIGxhY2luaWEgYXQuIFNlZCByaXN1cyBwcmV0aXVtIHF1YW0gdnVscHV0YXRlIGRpZ25pc3NpbSBzdXNwZW5kaXNzZSBpbiBlc3QuIFNpdCBhbWV0IHB1cnVzIGdyYXZpZGEgcXVpcyBibGFuZGl0IHR1cnBpcyBjdXJzdXMgaW4gaGFjLiBOdWxsYSBwb3J0dGl0b3IgbWFzc2EgaWQgbmVxdWUuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCB1dCBhbGlxdWFtLiBFZ2VzdGFzIGludGVnZXIgZWdldCBhbGlxdWV0IG5pYmggcHJhZXNlbnQgdHJpc3RpcXVlIG1hZ25hLlxuXG5BZW5lYW4gZXVpc21vZCBlbGVtZW50dW0gbmlzaSBxdWlzIGVsZWlmZW5kIHF1YW0gYWRpcGlzY2luZyB2aXRhZSBwcm9pbi4gU2l0IGFtZXQgZmFjaWxpc2lzIG1hZ25hIGV0aWFtIHRlbXBvciBvcmNpIGV1LiBOZXF1ZSB2aXZlcnJhIGp1c3RvIG5lYyB1bHRyaWNlcy4gRXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzIGludGVnZXIgZWdldC4gT3JjaSBldSBsb2JvcnRpcyBlbGVtZW50dW0gbmliaCB0ZWxsdXMgbW9sZXN0aWUuIEZlbGlzIGVnZXQgbnVuYyBsb2JvcnRpcyBtYXR0aXMgYWxpcXVhbSBmYXVjaWJ1cyBwdXJ1cyBpbi4gQWNjdW1zYW4gaW4gbmlzbCBuaXNpIHNjZWxlcmlzcXVlIGV1LiBGcmluZ2lsbGEgdXQgbW9yYmkgdGluY2lkdW50IGF1Z3VlIGludGVyZHVtIHZlbGl0LiBEdWlzIGF0IHRlbGx1cyBhdCB1cm5hIGNvbmRpbWVudHVtLiBFbGVpZmVuZCBtaSBpbiBudWxsYSBwb3N1ZXJlIHNvbGxpY2l0dWRpbiBhbGlxdWFtLiBVcm5hIGN1cnN1cyBlZ2V0IG51bmMgc2NlbGVyaXNxdWUgdml2ZXJyYSBtYXVyaXMuIE51bmMgaWQgY3Vyc3VzIG1ldHVzIGFsaXF1YW0gZWxlaWZlbmQgbWkgaW4gbnVsbGEuIEVuaW0gdXQgc2VtIHZpdmVycmEgYWxpcXVldC4gUXVhbSBhZGlwaXNjaW5nIHZpdGFlIHByb2luIHNhZ2l0dGlzIG5pc2wgcmhvbmN1cyBtYXR0aXMuIE1hZWNlbmFzIGFjY3Vtc2FuIGxhY3VzIHZlbCBmYWNpbGlzaXMgdm9sdXRwYXQgZXN0IHZlbGl0IGVnZXN0YXMgZHVpLiBPZGlvIGV1IGZldWdpYXQgcHJldGl1bSBuaWJoIGlwc3VtIGNvbnNlcXVhdC4gUHVydXMgbm9uIGVuaW0gcHJhZXNlbnQgZWxlbWVudHVtIGZhY2lsaXNpcyBsZW8gdmVsLiBWaXZlcnJhIG1hZWNlbmFzIGFjY3Vtc2FuIGxhY3VzIHZlbC4gTnVsbGEgZmFjaWxpc2kgbnVsbGFtIHZlaGljdWxhIGlwc3VtIGEgYXJjdS4gTGliZXJvIGp1c3RvIGxhb3JlZXQgc2l0IGFtZXQgY3Vyc3VzIHNpdCBhbWV0IGRpY3R1bS5cblxuRXRpYW0gbm9uIHF1YW0gbGFjdXMgc3VzcGVuZGlzc2UgZmF1Y2lidXMgaW50ZXJkdW0gcG9zdWVyZSBsb3JlbSBpcHN1bS4gUGVsbGVudGVzcXVlIGRpZ25pc3NpbSBlbmltIHNpdCBhbWV0IHZlbmVuYXRpcyB1cm5hIGN1cnN1cy4gQWRpcGlzY2luZyBiaWJlbmR1bSBlc3QgdWx0cmljaWVzIGludGVnZXIgcXVpcyBhdWN0b3IgZWxpdCBzZWQuIEp1c3RvIG5lYyB1bHRyaWNlcyBkdWkgc2FwaWVuLiBGYXVjaWJ1cyBldCBtb2xlc3RpZSBhYyBmZXVnaWF0IHNlZCBsZWN0dXMgdmVzdGlidWx1bSBtYXR0aXMuIE5pc2kgbGFjdXMgc2VkIHZpdmVycmEgdGVsbHVzLiBFbmltIHNpdCBhbWV0IHZlbmVuYXRpcyB1cm5hIGN1cnN1cyBlZ2V0IG51bmMuIEJsYW5kaXQgbGliZXJvIHZvbHV0cGF0IHNlZCBjcmFzIG9ybmFyZS4gT2RpbyB0ZW1wb3Igb3JjaSBkYXBpYnVzIHVsdHJpY2VzIGluIGlhY3VsaXMgbnVuYyBzZWQgYXVndWUuIFZlbGl0IGxhb3JlZXQgaWQgZG9uZWMgdWx0cmljZXMgdGluY2lkdW50LiBFdWlzbW9kIGxhY2luaWEgYXQgcXVpcyByaXN1cyBzZWQgdnVscHV0YXRlIG9kaW8gdXQgZW5pbS4gVnVscHV0YXRlIGVuaW0gbnVsbGEgYWxpcXVldCBwb3J0dGl0b3IuIFNpdCBhbWV0IGN1cnN1cyBzaXQgYW1ldCBkaWN0dW0gc2l0IGFtZXQganVzdG8gZG9uZWMuIEF1Z3VlIHV0IGxlY3R1cyBhcmN1IGJpYmVuZHVtLiBGZXVnaWF0IG5pYmggc2VkIHB1bHZpbmFyIHByb2luIGdyYXZpZGEgaGVuZHJlcml0LiBFZ2V0IGR1aXMgYXQgdGVsbHVzIGF0IHVybmEgY29uZGltZW50dW0gbWF0dGlzIHBlbGxlbnRlc3F1ZS4gTmVxdWUgdml2ZXJyYSBqdXN0byBuZWMgdWx0cmljZXMgZHVpIHNhcGllbiBlZ2V0IG1pIHByb2luLiBGZXJtZW50dW0gcG9zdWVyZSB1cm5hIG5lYyB0aW5jaWR1bnQgcHJhZXNlbnQgc2VtcGVyIGZldWdpYXQuIEFyY3UgZHVpIHZpdmFtdXMgYXJjdSBmZWxpcyBiaWJlbmR1bSB1dCB0cmlzdGlxdWUgZXQuIFVsdHJpY2llcyB0cmlzdGlxdWUgbnVsbGEgYWxpcXVldCBlbmltIHRvcnRvci5cblxuSW4gYWxpcXVhbSBzZW0gZnJpbmdpbGxhIHV0IG1vcmJpIHRpbmNpZHVudCBhdWd1ZSBpbnRlcmR1bS4gSW4gZXN0IGFudGUgaW4gbmliaCBtYXVyaXMgY3Vyc3VzLiBEdWkgc2FwaWVuIGVnZXQgbWkgcHJvaW4gc2VkIGxpYmVybyBlbmltLiBOaXNsIHRpbmNpZHVudCBlZ2V0IG51bGxhbSBub24uIEFkaXBpc2NpbmcgdHJpc3RpcXVlIHJpc3VzIG5lYyBmZXVnaWF0IGluIGZlcm1lbnR1bSBwb3N1ZXJlLiBTaXQgYW1ldCBwb3J0dGl0b3IgZWdldCBkb2xvciBtb3JiaSBub24uIFZpdmVycmEgYWxpcXVldCBlZ2V0IHNpdCBhbWV0IHRlbGx1cyBjcmFzLiBNYXVyaXMgY3Vyc3VzIG1hdHRpcyBtb2xlc3RpZSBhIGlhY3VsaXMgYXQgZXJhdCBwZWxsZW50ZXNxdWUgYWRpcGlzY2luZy4gQ3Vyc3VzIGV1aXNtb2QgcXVpcyB2aXZlcnJhIG5pYmggY3JhcyBwdWx2aW5hci4gTW9sZXN0aWUgYWMgZmV1Z2lhdCBzZWQgbGVjdHVzIHZlc3RpYnVsdW0gbWF0dGlzIHVsbGFtY29ycGVyIHZlbGl0LiBEb2xvciBwdXJ1cyBub24gZW5pbSBwcmFlc2VudCBlbGVtZW50dW0gZmFjaWxpc2lzLiBFbGl0IGVnZXQgZ3JhdmlkYSBjdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzLlxuXG5BbGlxdWFtIHNlbSBmcmluZ2lsbGEgdXQgbW9yYmkgdGluY2lkdW50IGF1Z3VlIGludGVyZHVtIHZlbGl0IGV1aXNtb2QuIEludGVnZXIgZmV1Z2lhdCBzY2VsZXJpc3F1ZSB2YXJpdXMgbW9yYmkgZW5pbS4gTmVjIGR1aSBudW5jIG1hdHRpcyBlbmltIHV0IHRlbGx1cyBlbGVtZW50dW0gc2FnaXR0aXMuIFBlbGxlbnRlc3F1ZSBkaWduaXNzaW0gZW5pbSBzaXQgYW1ldCB2ZW5lbmF0aXMgdXJuYS4gQXVndWUgbmVxdWUgZ3JhdmlkYSBpbiBmZXJtZW50dW0gZXQgc29sbGljaXR1ZGluIGFjIG9yY2kgcGhhc2VsbHVzLiBFZ2V0IG51bGxhIGZhY2lsaXNpIGV0aWFtIGRpZ25pc3NpbS4gQW1ldCBtYXR0aXMgdnVscHV0YXRlIGVuaW0gbnVsbGEgYWxpcXVldCBwb3J0dGl0b3IgbGFjdXMgbHVjdHVzIGFjY3Vtc2FuLiBFdSBzY2VsZXJpc3F1ZSBmZWxpcyBpbXBlcmRpZXQgcHJvaW4gZmVybWVudHVtIGxlbyB2ZWwuIEp1c3RvIG5lYyB1bHRyaWNlcyBkdWkgc2FwaWVuIGVnZXQgbWkgcHJvaW4uIEZldWdpYXQgaW4gZmVybWVudHVtIHBvc3VlcmUgdXJuYSBuZWMgdGluY2lkdW50IHByYWVzZW50IHNlbXBlci5cblxuTGVvIHZlbCBvcmNpIHBvcnRhIG5vbiBwdWx2aW5hciBuZXF1ZSBsYW9yZWV0IHN1c3BlbmRpc3NlLiBTZWQgZWxlbWVudHVtIHRlbXB1cyBlZ2VzdGFzIHNlZCBzZWQuIEVsaXQgdWxsYW1jb3JwZXIgZGlnbmlzc2ltIGNyYXMgdGluY2lkdW50IGxvYm9ydGlzIGZldWdpYXQuIFZlbCB0dXJwaXMgbnVuYyBlZ2V0IGxvcmVtIGRvbG9yIHNlZCB2aXZlcnJhIGlwc3VtIG51bmMuIEFyY3UgZGljdHVtIHZhcml1cyBkdWlzIGF0IGNvbnNlY3RldHVyIGxvcmVtIGRvbmVjIG1hc3NhLiBNYXVyaXMgaW4gYWxpcXVhbSBzZW0gZnJpbmdpbGxhIHV0LiBNaSBzaXQgYW1ldCBtYXVyaXMgY29tbW9kbyBxdWlzLiBWaXZlcnJhIGFsaXF1ZXQgZWdldCBzaXQgYW1ldC4gRWxlbWVudHVtIG5pc2kgcXVpcyBlbGVpZmVuZCBxdWFtLiBFZ2V0IG1hdXJpcyBwaGFyZXRyYSBldCB1bHRyaWNlcyBuZXF1ZSBvcm5hcmUgYWVuZWFuLiBTZWQgZXVpc21vZCBuaXNpIHBvcnRhIGxvcmVtIG1vbGxpcy4gTW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYS4gVmVsIHR1cnBpcyBudW5jIGVnZXQgbG9yZW0gZG9sb3Igc2VkIHZpdmVycmEgaXBzdW0uIE5hc2NldHVyIHJpZGljdWx1cyBtdXMgbWF1cmlzIHZpdGFlIHVsdHJpY2llcyBsZW8gaW50ZWdlciBtYWxlc3VhZGEuIFB1bHZpbmFyIGV0aWFtIG5vbiBxdWFtIGxhY3VzIHN1c3BlbmRpc3NlIGZhdWNpYnVzIGludGVyZHVtIHBvc3VlcmUuIFF1aXMgcmlzdXMgc2VkIHZ1bHB1dGF0ZSBvZGlvIHV0IGVuaW0gYmxhbmRpdCB2b2x1dHBhdC4gRW5pbSBzZWQgZmF1Y2lidXMgdHVycGlzIGluLlxuXG5FdSB2b2x1dHBhdCBvZGlvIGZhY2lsaXNpcyBtYXVyaXMgc2l0IGFtZXQgbWFzc2EuIFNlZCBmZWxpcyBlZ2V0IHZlbGl0IGFsaXF1ZXQgc2FnaXR0aXMgaWQgY29uc2VjdGV0dXIuIFBhcnR1cmllbnQgbW9udGVzIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIEVuaW0gdG9ydG9yIGF0IGF1Y3RvciB1cm5hIG51bmMgaWQuIExlY3R1cyBxdWFtIGlkIGxlbyBpbiB2aXRhZS4gTmliaCBuaXNsIGNvbmRpbWVudHVtIGlkIHZlbmVuYXRpcyBhLiBMYWN1cyB2aXZlcnJhIHZpdGFlIGNvbmd1ZSBldSBjb25zZXF1YXQgYWMgZmVsaXMgZG9uZWMuIEF1Z3VlIGxhY3VzIHZpdmVycmEgdml0YWUgY29uZ3VlIGV1IGNvbnNlcXVhdCBhYy4gQW1ldCBhbGlxdWFtIGlkIGRpYW0gbWFlY2VuYXMgdWx0cmljaWVzIG1pIGVnZXQgbWF1cmlzIHBoYXJldHJhLiBPcmNpIGV1IGxvYm9ydGlzIGVsZW1lbnR1bSBuaWJoLiBEb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nLlxuXG5DcmFzIGFkaXBpc2NpbmcgZW5pbSBldSB0dXJwaXMgZWdlc3Rhcy4gTGVjdHVzIG1hdXJpcyB1bHRyaWNlcyBlcm9zIGluLiBNb3JiaSBsZW8gdXJuYSBtb2xlc3RpZSBhdCBlbGVtZW50dW0gZXUgZmFjaWxpc2lzIHNlZC4gVGVtcG9yIG5lYyBmZXVnaWF0IG5pc2wgcHJldGl1bSBmdXNjZSBpZCB2ZWxpdCB1dCB0b3J0b3IuIFF1aXNxdWUgaWQgZGlhbSB2ZWwgcXVhbSBlbGVtZW50dW0gcHVsdmluYXIgZXRpYW0gbm9uIHF1YW0uIE9ybmFyZSBzdXNwZW5kaXNzZSBzZWQgbmlzaSBsYWN1cyBzZWQuIFNlbXBlciBxdWlzIGxlY3R1cyBudWxsYSBhdCB2b2x1dHBhdC4gVXQgYWxpcXVhbSBwdXJ1cyBzaXQgYW1ldCBsdWN0dXMgdmVuZW5hdGlzIGxlY3R1cyBtYWduYSBmcmluZ2lsbGEuIE1vbGxpcyBudW5jIHNlZCBpZCBzZW1wZXIuIFF1aXMgcmlzdXMgc2VkIHZ1bHB1dGF0ZSBvZGlvIHV0IGVuaW0gYmxhbmRpdCB2b2x1dHBhdCBtYWVjZW5hcy4gQXQgcXVpcyByaXN1cyBzZWQgdnVscHV0YXRlIG9kaW8gdXQuIExpYmVybyBpZCBmYXVjaWJ1cyBuaXNsIHRpbmNpZHVudCBlZ2V0LiBSaG9uY3VzIGRvbG9yIHB1cnVzIG5vbiBlbmltIHByYWVzZW50IGVsZW1lbnR1bSBmYWNpbGlzaXMuIE5pc2wgY29uZGltZW50dW0gaWQgdmVuZW5hdGlzIGEgY29uZGltZW50dW0gdml0YWUgc2FwaWVuLiBJZCBkaWFtIG1hZWNlbmFzIHVsdHJpY2llcyBtaSBlZ2V0IG1hdXJpcyBwaGFyZXRyYSBldCB1bHRyaWNlcy5cblxuRmVsaXMgZG9uZWMgZXQgb2RpbyBwZWxsZW50ZXNxdWUgZGlhbSB2b2x1dHBhdC4gTW9sZXN0aWUgYSBpYWN1bGlzIGF0IGVyYXQgcGVsbGVudGVzcXVlIGFkaXBpc2NpbmcgY29tbW9kbyBlbGl0LiBFbmltIGV1IHR1cnBpcyBlZ2VzdGFzIHByZXRpdW0uIEVnZXQgZWdlc3RhcyBwdXJ1cyB2aXZlcnJhIGFjY3Vtc2FuIGluLiBNYWVjZW5hcyBwaGFyZXRyYSBjb252YWxsaXMgcG9zdWVyZSBtb3JiaSBsZW8gdXJuYS4gQWVuZWFuIGV0IHRvcnRvciBhdCByaXN1cyB2aXZlcnJhIGFkaXBpc2NpbmcgYXQgaW4gdGVsbHVzLiBTYXBpZW4gZWdldCBtaSBwcm9pbiBzZWQuIE1hdHRpcyBudW5jIHNlZCBibGFuZGl0IGxpYmVybyB2b2x1dHBhdCBzZWQuIEZhdWNpYnVzIG5pc2wgdGluY2lkdW50IGVnZXQgbnVsbGFtIG5vbiBuaXNpIGVzdCBzaXQgYW1ldC4gUGxhY2VyYXQgZHVpcyB1bHRyaWNpZXMgbGFjdXMgc2VkIHR1cnBpcyB0aW5jaWR1bnQgaWQuIE51bmMgc2VkIGlkIHNlbXBlciByaXN1cyBpbiBoZW5kcmVyaXQgZ3JhdmlkYS5cblxuTWF1cmlzIGF1Z3VlIG5lcXVlIGdyYXZpZGEgaW4gZmVybWVudHVtIGV0IHNvbGxpY2l0dWRpbi4gU2l0IGFtZXQganVzdG8gZG9uZWMgZW5pbSBkaWFtIHZ1bHB1dGF0ZS4gT2RpbyBldWlzbW9kIGxhY2luaWEgYXQgcXVpcyByaXN1cy4gT3JjaSBhIHNjZWxlcmlzcXVlIHB1cnVzIHNlbXBlciBlZ2V0LiBBYyB0dXJwaXMgZWdlc3RhcyBpbnRlZ2VyIGVnZXQgYWxpcXVldC4gQXJjdSBmZWxpcyBiaWJlbmR1bSB1dCB0cmlzdGlxdWUgZXQuIE1hc3NhIHNhcGllbiBmYXVjaWJ1cyBldCBtb2xlc3RpZSBhYyBmZXVnaWF0IHNlZC4gRGlnbmlzc2ltIGNyYXMgdGluY2lkdW50IGxvYm9ydGlzIGZldWdpYXQgdml2YW11cyBhdCBhdWd1ZSBlZ2V0LiBJZCBkaWFtIHZlbCBxdWFtIGVsZW1lbnR1bSBwdWx2aW5hciBldGlhbS4gVG9ydG9yIHZpdGFlIHB1cnVzIGZhdWNpYnVzIG9ybmFyZSBzdXNwZW5kaXNzZSBzZWQgbmlzaSBsYWN1cy4gQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMuIE9kaW8gdXQgc2VtIG51bGxhIHBoYXJldHJhLiBJZCBhbGlxdWV0IHJpc3VzIGZldWdpYXQgaW4uIFVsbGFtY29ycGVyIGVnZXQgbnVsbGEgZmFjaWxpc2kgZXRpYW0uIFZhcml1cyB2ZWwgcGhhcmV0cmEgdmVsIHR1cnBpcyBudW5jIGVnZXQuIFNlZCBsaWJlcm8gZW5pbSBzZWQgZmF1Y2lidXMgdHVycGlzLiBMZW8gZHVpcyB1dCBkaWFtIHF1YW0gbnVsbGEuIEFtZXQgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0IHBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaS5cblxuRWxlaWZlbmQgbWkgaW4gbnVsbGEgcG9zdWVyZSBzb2xsaWNpdHVkaW4uIEluIG9ybmFyZSBxdWFtIHZpdmVycmEgb3JjaSBzYWdpdHRpcyBldSB2b2x1dHBhdCBvZGlvLiBBdWd1ZSBpbnRlcmR1bSB2ZWxpdCBldWlzbW9kIGluIHBlbGxlbnRlc3F1ZSBtYXNzYSBwbGFjZXJhdC4gUHVsdmluYXIgcGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cy4gVml0YWUgYXVjdG9yIGV1IGF1Z3VlIHV0LiBNb2xlc3RpZSBudW5jIG5vbiBibGFuZGl0IG1hc3NhIGVuaW0uIEEgc2NlbGVyaXNxdWUgcHVydXMgc2VtcGVyIGVnZXQgZHVpcyBhdCB0ZWxsdXMgYXQgdXJuYS4gQWVuZWFuIHBoYXJldHJhIG1hZ25hIGFjIHBsYWNlcmF0IHZlc3RpYnVsdW0uIEV1IGxvYm9ydGlzIGVsZW1lbnR1bSBuaWJoIHRlbGx1cyBtb2xlc3RpZSBudW5jIG5vbiBibGFuZGl0LiBTaXQgYW1ldCBkaWN0dW0gc2l0IGFtZXQganVzdG8gZG9uZWMgZW5pbSBkaWFtLiBDb21tb2RvIHVsbGFtY29ycGVyIGEgbGFjdXMgdmVzdGlidWx1bSBzZWQuIERvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU2VkIGF1Z3VlIGxhY3VzIHZpdmVycmEgdml0YWUgY29uZ3VlIGV1LiBNYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMgbWFlY2VuYXMgcGhhcmV0cmEuIFBlbGxlbnRlc3F1ZSBlbGl0IGVnZXQgZ3JhdmlkYSBjdW0uIEF0IGF1Z3VlIGVnZXQgYXJjdSBkaWN0dW0gdmFyaXVzIGR1aXMgYXQgY29uc2VjdGV0dXIgbG9yZW0uIE5vbiBvZGlvIGV1aXNtb2QgbGFjaW5pYSBhdCBxdWlzIHJpc3VzIHNlZCB2dWxwdXRhdGUgb2Rpby5cblxuRXQgdWx0cmljZXMgbmVxdWUgb3JuYXJlIGFlbmVhbiBldWlzbW9kIGVsZW1lbnR1bSBuaXNpIHF1aXMgZWxlaWZlbmQuIE5lYyBuYW0gYWxpcXVhbSBzZW0gZXQuIENvbnNlY3RldHVyIGxvcmVtIGRvbmVjIG1hc3NhIHNhcGllbiBmYXVjaWJ1cy4gTGFjdXMgdml2ZXJyYSB2aXRhZSBjb25ndWUgZXUgY29uc2VxdWF0LiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcy4gRmFtZXMgYWMgdHVycGlzIGVnZXN0YXMgc2VkIHRlbXB1cyB1cm5hIGV0IHBoYXJldHJhLiBJZCBuZXF1ZSBhbGlxdWFtIHZlc3RpYnVsdW0gbW9yYmkgYmxhbmRpdCBjdXJzdXMgcmlzdXMgYXQgdWx0cmljZXMuIFF1aXMgYXVjdG9yIGVsaXQgc2VkIHZ1bHB1dGF0ZSBtaSBzaXQgYW1ldCBtYXVyaXMgY29tbW9kby4gSW50ZXJkdW0gY29uc2VjdGV0dXIgbGliZXJvIGlkIGZhdWNpYnVzIG5pc2wgdGluY2lkdW50LiBNYXVyaXMgc2l0IGFtZXQgbWFzc2Egdml0YWUgdG9ydG9yLiBPcmNpIG51bGxhIHBlbGxlbnRlc3F1ZSBkaWduaXNzaW0gZW5pbSBzaXQgYW1ldC4gUmlzdXMgdml2ZXJyYSBhZGlwaXNjaW5nIGF0IGluIHRlbGx1cyBpbnRlZ2VyLiBEaWduaXNzaW0gc29kYWxlcyB1dCBldSBzZW0gaW50ZWdlciB2aXRhZSBqdXN0by5cblxuTmlzbCB0aW5jaWR1bnQgZWdldCBudWxsYW0gbm9uIG5pc2kgZXN0IHNpdCBhbWV0LiBQdWx2aW5hciBwcm9pbiBncmF2aWRhIGhlbmRyZXJpdCBsZWN0dXMgYS4gUHJldGl1bSB2dWxwdXRhdGUgc2FwaWVuIG5lYyBzYWdpdHRpcyBhbGlxdWFtIG1hbGVzdWFkYS4gVnVscHV0YXRlIHNhcGllbiBuZWMgc2FnaXR0aXMgYWxpcXVhbS4gRWxlbWVudHVtIG5pYmggdGVsbHVzIG1vbGVzdGllIG51bmMgbm9uIGJsYW5kaXQuIE5pc2wgc3VzY2lwaXQgYWRpcGlzY2luZyBiaWJlbmR1bSBlc3QgdWx0cmljaWVzIGludGVnZXIgcXVpcyBhdWN0b3IgZWxpdC4gU2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0IHV0IGFsaXF1YW0uIFBlbGxlbnRlc3F1ZSBkaWduaXNzaW0gZW5pbSBzaXQgYW1ldCB2ZW5lbmF0aXMgdXJuYS4gRXVpc21vZCBuaXNpIHBvcnRhIGxvcmVtIG1vbGxpcyBhbGlxdWFtLiBNYXNzYSBzYXBpZW4gZmF1Y2lidXMgZXQgbW9sZXN0aWUgYWMgZmV1Z2lhdC4gSGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QgcXVpc3F1ZSBzYWdpdHRpcyBwdXJ1cyBzaXQgYW1ldCB2b2x1dHBhdC4gUXVpc3F1ZSBzYWdpdHRpcyBwdXJ1cyBzaXQgYW1ldCB2b2x1dHBhdCBjb25zZXF1YXQgbWF1cmlzIG51bmMuIEZhY2lsaXNpcyBtYWduYSBldGlhbSB0ZW1wb3Igb3JjaSBldSBsb2JvcnRpcyBlbGVtZW50dW0uIEVuaW0gbmVxdWUgdm9sdXRwYXQgYWMgdGluY2lkdW50IHZpdGFlIHNlbXBlciBxdWlzLlxuXG5Eb2xvciBzZWQgdml2ZXJyYSBpcHN1bSBudW5jLiBIYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdCB2ZXN0aWJ1bHVtIHJob25jdXMuIFB1cnVzIGZhdWNpYnVzIG9ybmFyZSBzdXNwZW5kaXNzZSBzZWQgbmlzaSBsYWN1cy4gTWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzIHNlZCB0ZW1wdXMuIEVnZXQgZHVpcyBhdCB0ZWxsdXMgYXQgdXJuYSBjb25kaW1lbnR1bS4gTnVsbGEgcGVsbGVudGVzcXVlIGRpZ25pc3NpbSBlbmltIHNpdCBhbWV0LiBFdSBjb25zZXF1YXQgYWMgZmVsaXMgZG9uZWMgZXQgb2RpbyBwZWxsZW50ZXNxdWUgZGlhbSB2b2x1dHBhdC4gU2VtcGVyIGF1Y3RvciBuZXF1ZSB2aXRhZSB0ZW1wdXMuIElkIG5lcXVlIGFsaXF1YW0gdmVzdGlidWx1bSBtb3JiaSBibGFuZGl0IGN1cnN1cyByaXN1cyBhdCB1bHRyaWNlcy4gTnVsbGEgcG9zdWVyZSBzb2xsaWNpdHVkaW4gYWxpcXVhbSB1bHRyaWNlcyBzYWdpdHRpcyBvcmNpIGEuIEVsZW1lbnR1bSBmYWNpbGlzaXMgbGVvIHZlbCBmcmluZ2lsbGEgZXN0LiBOdW5jIG5vbiBibGFuZGl0IG1hc3NhIGVuaW0gbmVjIGR1aSBudW5jLiBQaGFyZXRyYSBtYWduYSBhYyBwbGFjZXJhdCB2ZXN0aWJ1bHVtIGxlY3R1cyBtYXVyaXMgdWx0cmljZXMgZXJvcyBpbi5cbiAgICBcbiAgICA8L3A+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvLyBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgICBjb2xvcjogcmdiKDE4MywgMTgzLCAxODMpO1xuICAgIGB9PC9zdHlsZT5cbiAgICBcbiAgICA8L2Rpdj5cbiAgICBcblxuKSJdfQ== */\n/*@ sourceURL=/home/rowanatk/projects/nextjs/rowan-site/components/about.js */"));
});

/***/ }),

/***/ "./components/banner.js":
/*!******************************!*\
  !*** ./components/banner.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/rowanatk/projects/nextjs/rowan-site/components/banner.js";


// Banner for website component
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-47100234",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    id: "banner",
    src: "/static/logo/twitter_header_photo_2.png",
    className: "jsx-47100234",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "47100234",
    __self: this
  }, "#banner.jsx-47100234{display:block;margin:0 auto;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jvd2FuYXRrL3Byb2plY3RzL25leHRqcy9yb3dhbi1zaXRlL2NvbXBvbmVudHMvYmFubmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFvQixBQUcrQixjQUNBLGNBQ0gsV0FFZiIsImZpbGUiOiIvaG9tZS9yb3dhbmF0ay9wcm9qZWN0cy9uZXh0anMvcm93YW4tc2l0ZS9jb21wb25lbnRzL2Jhbm5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gQmFubmVyIGZvciB3ZWJzaXRlIGNvbXBvbmVudFxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgXG4gICAgICAgIDxpbWcgaWQ9XCJiYW5uZXJcIiBzcmM9XCIvc3RhdGljL2xvZ28vdHdpdHRlcl9oZWFkZXJfcGhvdG9fMi5wbmdcIj48L2ltZz5cbiAgICAgICAgXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICNiYW5uZXJ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICAgIFxuKSJdfQ== */\n/*@ sourceURL=/home/rowanatk/projects/nextjs/rowan-site/components/banner.js */"));
});

/***/ }),

/***/ "./components/head.js":
/*!****************************!*\
  !*** ./components/head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/rowanatk/projects/nextjs/rowan-site/components/head.js";



var banner = {
  height: "100px",
  display: "block"
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1441559509",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-1441559509",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Row Atk"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-1441559509",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1441559509",
    __self: this
  }, "body{padding:0;margin:0;font:15px Georgia,serif;background:rgba(232,194,234,0.3);}*{padding:0px;-webkit-scrollbarWidth:none;-moz-scrollbarWidth:none;-ms-scrollbarWidth:none;scrollbarWidth:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jvd2FuYXRrL3Byb2plY3RzL25leHRqcy9yb3dhbi1zaXRlL2NvbXBvbmVudHMvaGVhZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjMkIsQUFNMkIsQUFRRSxVQVBILEVBUVcsT0FQSyx3QkFDVyxpQ0FFeEMsaUNBS0EiLCJmaWxlIjoiL2hvbWUvcm93YW5hdGsvcHJvamVjdHMvbmV4dGpzL3Jvd2FuLXNpdGUvY29tcG9uZW50cy9oZWFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBiYW5uZXIgPXsgICAgXG4gICAgaGVpZ2h0OiBcIjEwMHB4XCIsXG4gICAgZGlzcGxheTogXCJibG9ja1wiXG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5Sb3cgQXRrPC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICBcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgIGh0bWx7XG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogdXJsKCcvc3RhdGljL2xvZ28vbGlua2VkaW5fYmFubmVyX2ltYWdlXzEucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9keXtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBmb250OiAxNXB4IEdlb3JnaWEsIHNlcmlmO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjMyLCAxOTQsIDIzNCwgMC4zKTtcbiAgICAgICAgICAgICAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAqe1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgICAgICBzY3JvbGxiYXJXaWR0aDogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuXG4pXG4iXX0= */\n/*@ sourceURL=/home/rowanatk/projects/nextjs/rowan-site/components/head.js */"));
});

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
var _jsxFileName = "/home/rowanatk/projects/nextjs/rowan-site/components/nav.js";


/**
 * Nav bar section of webpage
 */


var Navbar = function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: navStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Rowan E Atkinson")));
}; // Style 


var navStyle = {
  color: 'rgb(255,255,255)',
  position: 'fixed',
  top: '0',
  width: '100%',
  background: 'rgba(102, 38, 147, 0.85)',
  borderBottom: '2px outset rgba(102, 38, 147, 0.5)',
  padding: '5px',
  display: 'block',
  overflow: 'hidden'
};
var banner = {
  height: '100px'
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/about */ "./components/about.js");
/* harmony import */ var _components_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/banner */ "./components/banner.js");
var _jsxFileName = "/home/rowanatk/projects/nextjs/rowan-site/pages/index.js";







var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "mcontainer",
    className: "jsx-2567965184",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_banner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2567965184",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2567965184",
    __self: this
  }, "body.jsx-2567965184{overflow:hidden;margin-top:40px;}#mcontainer.jsx-2567965184{overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jvd2FuYXRrL3Byb2plY3RzL25leHRqcy9yb3dhbi1zaXRlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFvQixBQUdpQyxBQUtBLGdCQUpBLEFBS3BCLGdCQUpBIiwiZmlsZSI6Ii9ob21lL3Jvd2FuYXRrL3Byb2plY3RzL25leHRqcy9yb3dhbi1zaXRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdidcbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wb25lbnRzL2Fib3V0J1xuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL2Jhbm5lcidcblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gICAgPGRpdiBpZD1cIm1jb250YWluZXJcIj5cbiAgICAgICAgPEhlYWQgLz5cbiAgICAgICAgey8qIDxOYXZiYXIgLz4gKi99XG4gICAgICAgIDxCYW5uZXIgLz5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgey8qIDxBYm91dCAvPiAqL31cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBib2R5e1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI21jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICAgIFxuKSBcblxuY29uc3QgSW5kZXhTdHlsZSA9IHtcblxufVxuICBcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il19 */\n/*@ sourceURL=/home/rowanatk/projects/nextjs/rowan-site/pages/index.js */"));
};

var IndexStyle = {};
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rowanatk/projects/nextjs/rowan-site/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map