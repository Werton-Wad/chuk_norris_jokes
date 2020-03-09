/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var myURL = 'https://api.chucknorris.io/jokes/random';\nvar data = [];\nvar buttonAdd = document.querySelector('#add_note');\nvar buttonRemove = document.querySelector('#remove_notes');\nvar notesList = document.createElement('div');\nnotesList.classList.add('notes-list');\ndocument.body.append(notesList);\n\nfunction myFetch(url) {\n  fetch(url).then(function (response) {\n    if (response.ok) {\n      response.json().then(function (json) {\n        //data = json;\n        data.push(json); //createNote();\n\n        renderNotes();\n      });\n    } else {\n      alert('Network error');\n    }\n  });\n}\n\nbuttonAdd.onclick = function () {\n  myFetch(myURL); //createNote();\n  //renderNotes();\n  //console.log(data);\n};\n\nfunction createNote(i) {\n  var note = document.createElement('div');\n  note.classList.add('note');\n  var content = document.createElement('div');\n  content.classList.add('content');\n  content.textContent = data[i].value;\n  var overlay = document.createElement('div');\n  overlay.classList.add('overlay');\n  var btnEdit = document.createElement('button');\n  btnEdit.classList.add('btn', 'btn-warning');\n  btnEdit.innerHTML = 'edit <i class=\"fa fa-pencil\"></i>';\n\n  btnEdit.onclick = function () {\n    var newInfNote = prompt('Введите текст заметки');\n    return newInfNote === null ? content.textContent : content.textContent = newInfNote;\n  };\n\n  var btnDelete = document.createElement('button');\n  btnDelete.classList.add('btn', 'btn-danger');\n  btnDelete.innerHTML = 'delete <i class=\"fa fa-times\"></i>';\n\n  btnDelete.onclick = function () {\n    data.splice(i, 1);\n    renderNotes();\n  };\n\n  overlay.append(btnEdit, btnDelete);\n  note.append(content, overlay); //notesList.append(note);\n\n  return note;\n}\n\nfunction renderNotes() {\n  notesList.innerHTML = '';\n  data.map(function (elem, index) {\n    return notesList.append(createNote(index));\n  });\n}\n\nfunction removeAllNotes() {\n  notesList.innerHTML = '';\n  data = []; //console.log(data);\n}\n\nbuttonRemove.onclick = function () {\n  removeAllNotes();\n};\n/*\r\nfunction randomInteger(min, max) {\r\n    return Math.floor(Math.random() * (max - min)) + min;\r\n}\r\n*/\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });