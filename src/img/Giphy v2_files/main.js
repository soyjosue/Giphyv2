(this["webpackJsonpclient"] = this["webpackJsonpclient"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\n.row.menu .nav-link{\n  margin-top: -15.5px;\n  color: #000;\n  border-radius: 0;\n}\n.row.menu .nav-link:hover {\n  border-top: 0;\n}\n\n/* AD */\n\n.ad-large {\n  border: 2px solid #000;\n  border-radius: 2px;\n}\n\n/* Giphy */\n.giphys-style {\n  width: 100%;\n  height: 300px;\n}\n\n/* Footer */\n.copyright {\n  color: #979797;\n  font-size: .8rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header.js");
/* harmony import */ var _components_home_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/Home */ "./src/components/home/Home.jsx");
/* harmony import */ var _components_Seach__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Seach */ "./src/components/Seach.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store */ "./src/store.js");
var _jsxFileName = "/home/elvis/Escritorio/giphy v2/client/src/App.js";
 // Router

 // Components




 // Redux




function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
    store: _store__WEBPACK_IMPORTED_MODULE_7__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: ["/page=:id", "/", "/page="],
    component: _components_home_Home__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/search=:seach/page:page",
    component: _components_Seach__WEBPACK_IMPORTED_MODULE_4__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "*",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Error 404"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/actions/giphyAction.js":
/*!************************************!*\
  !*** ./src/actions/giphyAction.js ***!
  \************************************/
/*! exports provided: obtenerGiphyAction, nextPageGiphyAction, buscarGiphyAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obtenerGiphyAction", function() { return obtenerGiphyAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextPageGiphyAction", function() { return nextPageGiphyAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buscarGiphyAction", function() { return buscarGiphyAction; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/types/index.js");
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/axios */ "./src/config/axios.js");
 // Axios


const keyApi = 'oaPZBPBuQ4DMHRppXm7ZXzje5oVFVoqA';
const limitApi = 10;
function obtenerGiphyAction(page) {
  return async dispath => {
    dispath(descargarGiphy());
    let pages = page;

    if (!(pages === 0)) {
      pages = pages * 10;
    }

    try {
      const gifs = await _config_axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`/trending?api_key=${keyApi}&limit=${limitApi}&offset=${pages}`);
      const pagMax = gifs.data.pagination.total_count / 10 > 4999 ? parseInt(4999 / 10) : parseInt(gifs.data.pagination.total_count / 10); // console.log(pagMax);

      dispath(exitoDescargarGiphy({
        gifsList: gifs.data.data,
        pagMax
      }));
    } catch (error) {
      dispath(errorDescargarGiphy());
    }
  };
}

const descargarGiphy = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["DESCARGAR_GIPHY"],
  payload: true
});

const exitoDescargarGiphy = ({
  gifsList,
  pagMax
}) => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["DESCARGAR_GIPHY_EXITO"],
  payload: {
    gifsList,
    pagMax
  }
});

const errorDescargarGiphy = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["DESCARGAR_GIPHY_ERROR"]
});

function nextPageGiphyAction(nextPage) {
  return dispatch => {
    dispatch(nextPageGiphy(nextPage));
  };
}

const nextPageGiphy = numPage => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["CAMBIAR_PAGE"],
  payload: numPage
});

function buscarGiphyAction(content, page) {
  return dispatch => {
    dispatch(buscarGiphy());
    let pages = page;

    if (!(pages === 0)) {
      pages = pages * 10;
    }

    try {
      const gifs = _config_axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`/search?api_key=${keyApi}&q=${content}&limit=10&offset=${pages}`);
      const pagMax = gifs.data.pagination.total_count / 10 > 4999 ? parseInt(4999 / 10) : parseInt(gifs.data.pagination.total_count / 10);
      dispatch(buscarGiphyExito({
        gifsList: gifs.data.data,
        pagMax,
        pages
      }));
    } catch (error) {
      dispatch(buscarGiphyError());
    }
  };
}

const buscarGiphy = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["BUSCAR_GIPHY"]
});

const buscarGiphyExito = ({
  gifsList,
  pagMax,
  pages
}) => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["BUSCAR_GIPHY_EXITO"],
  payload: {
    gifsList,
    pagMax,
    pages
  }
});

const buscarGiphyError = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["BUSCAR_GIPHY_ERROR"]
});

/***/ }),

/***/ "./src/components/AD/Advertlg.jsx":
/*!****************************************!*\
  !*** ./src/components/AD/Advertlg.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_anuncio_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/anuncio.jpg */ "./src/img/anuncio.jpg");
/* harmony import */ var _img_anuncio_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_anuncio_jpg__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/elvis/Escritorio/giphy v2/client/src/components/AD/Advertlg.jsx";
 // Imagen



const Advertlg = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-8 offset-2 col-md-6 pt-5 offset-md-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ad-large",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_anuncio_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "Anuncio",
    className: "img-fluid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Advertlg);

/***/ }),

/***/ "./src/components/Footer.jsx":
/*!***********************************!*\
  !*** ./src/components/Footer.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/elvis/Escritorio/giphy v2/client/src/components/Footer.jsx";


const Footer = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "w-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-center copyright w-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, "Elvis Inoa 2020. Todos los derechos reservados"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Gif.jsx":
/*!********************************!*\
  !*** ./src/components/Gif.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/elvis/Escritorio/giphy v2/client/src/components/Gif.jsx";


const Gif = ({
  gif
}) => {
  const onClickModal = () => {};

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-lg-4 mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: gif.images.downsized_medium.url,
    alt: gif.title,
    className: "img-fluid img-thumbnail rounder giphys-style",
    onClick: onClickModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Gif);

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/logo.png */ "./src/img/logo.png");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_logo_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/elvis/Escritorio/giphy v2/client/src/components/Header.js";
 // react-router-dom

 // Imagen

 // Redux

const Header = () => {
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  const [seacher, setSeacher] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    content: ''
  });
  const {
    content
  } = seacher;

  const onChangeTyping = e => {
    setSeacher({
      [e.target.name]: e.target.value
    });
  };

  const onClickSeach = () => {
    // Comprobar
    if (content.trim() === '') {
      return null;
    }

    const seach = content.replace(/ /g, '+'); // Enviar

    history.push(`/search=${seach}/page=1`); // variar

    setSeacher({ ...seacher,
      content: ''
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row align-items-md-baseline mt-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 d-flex justify-content-center d-md-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/page=1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Logo de Giphy",
    className: "img-fluid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 40
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 mt-2 mt-md-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "content",
    className: "form-control",
    placeholder: "Buscar",
    "aria-describedby": "button-addon2",
    value: content,
    onChange: onChangeTyping,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group-append",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-outline-primary",
    type: "button",
    id: "button-addon2",
    onClick: onClickSeach,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 29
    }
  }, "Buscar"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav nav-pills nav-fill nav-tabs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#!",
    className: "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 46
    }
  }, "Trending")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#!",
    className: "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 46
    }
  }, "Ramdon")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#!",
    className: "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 46
    }
  }, "Graciosos")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#!",
    className: "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 46
    }
  }, "Tristes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item mt-2 mt-md-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#!",
    className: "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 59
    }
  }, "Pelea"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Seach.jsx":
/*!**********************************!*\
  !*** ./src/components/Seach.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_giphyAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/giphyAction */ "./src/actions/giphyAction.js");
var _jsxFileName = "/home/elvis/Escritorio/giphy v2/client/src/components/Seach.jsx";

 // Redux




const Seach = () => {
  // Route
  const {
    seach,
    page
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  const pageActual = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.giphy.pageactual);
  const pageMax = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.giphy.pageMax);

  const onClickPage = e => {
    let pages = pageActual + 1;

    switch (e.target.id) {
      case 'first':
        history.push(`/search=${seach}/page=1`);
        break;

      case 'previous':
        history.push(`/search=${seach}/page=${pages - 1}`);
        break;

      case 'next':
        history.push(`/search=${seach}/page=${pages + 1}`);
        break;

      case 'last':
        history.push(`/search=${seach}/page=${pageMax}`);
        break;

      default:
        history.push(`/search=${seach}/page=${parseInt(e.target.id) + 1}`);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 d-flex justify-content-center pt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, !(pageActual === 0) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border d-none d-md-block py-2 px-3 ml-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn p-0",
    id: "first",
    onClick: onClickPage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 37
    }
  }, 'Primera')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border py-2 px-3 ml-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn p-0",
    id: "previous",
    onClick: onClickPage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 37
    }
  }, '<'))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border py-2 px-3 ml-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn p-0",
    id: pageActual,
    onClick: onClickPage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }, pageActual + 1)), pageActual <= pageMax - 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border py-2 px-3 ml-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn p-0",
    id: pageActual + 1,
    onClick: onClickPage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 33
    }
  }, pageActual + 2)) : null, pageActual <= pageMax - 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border py-2 px-3 ml-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn p-0",
    id: pageActual + 2,
    onClick: onClickPage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 33
    }
  }, pageActual + 3))) : null, pageActual <= pageMax - 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border py-2 px-3 ml-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn p-0",
    id: pageActual + 3,
    onClick: onClickPage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 29
    }
  }, pageActual + 4)) : null, pageActual <= pageMax - 4 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border py-2 px-3 ml-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn p-0",
    id: pageActual + 4,
    onClick: onClickPage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 29
    }
  }, pageActual + 5)) : null, !(pageActual === pageMax - 1) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border py-2 px-3 ml-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 25
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn p-0",
    id: "next",
    onClick: onClickPage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 65
    }
  }, '>'), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border d-none d-md-block py-2 px-3 ml-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 25
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn p-0",
    id: "last",
    onClick: onClickPage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 83
    }
  }, 'Ultima'), " ")) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Seach);

/***/ }),

/***/ "./src/components/home/Home.jsx":
/*!**************************************!*\
  !*** ./src/components/home/Home.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AD_Advertlg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AD/Advertlg */ "./src/components/AD/Advertlg.jsx");
/* harmony import */ var _Gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Gif */ "./src/components/Gif.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_giphyAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/giphyAction */ "./src/actions/giphyAction.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/home/elvis/Escritorio/giphy v2/client/src/components/home/Home.jsx";


 // Redux


 // History



const Home = () => {
  let {
    id
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useParams"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])(); // Redux

  const dispath = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])(); // State Redux

  const gifs = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.giphy.giphys);
  const pageActual = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.giphy.pageactual);
  const pageMax = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.giphy.pagemax);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (id === undefined) {
      history.push('/page=1');
    } // eslint-disable-next-line 

  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!(id === undefined)) {
      dispath(Object(_actions_giphyAction__WEBPACK_IMPORTED_MODULE_4__["nextPageGiphyAction"])(parseInt(id) - 1));
      dispath(Object(_actions_giphyAction__WEBPACK_IMPORTED_MODULE_4__["obtenerGiphyAction"])(pageActual));
    } // eslint-disable-next-line

  }, [id]);

  const onClickPage = e => {
    let page = pageActual + 1;

    switch (e.target.id) {
      case 'first':
        history.push('/page=1');
        break;

      case 'previous':
        history.push(`/page=${page - 1}`);
        break;

      case 'next':
        history.push(`/page=${page + 1}`);
        break;

      case 'last':
        history.push(`/page=${pageMax}`);
        break;

      default:
        history.push(`/page=${parseInt(e.target.id) + 1}`);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, gifs.map(gif => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Gif__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: gif.id,
    gif: gif,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 d-flex justify-content-center pt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, !(pageActual === 0) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border d-none d-md-block py-2 px-3 ml-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn p-0",
    id: "first",
    onClick: onClickPage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 41
    }
  }, 'Primera')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border py-2 px-3 ml-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn p-0",
    id: "previous",
    onClick: onClickPage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 41
    }
  }, '<'))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border py-2 px-3 ml-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn p-0",
    id: pageActual,
    onClick: onClickPage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 25
    }
  }, pageActual + 1)), pageActual <= pageMax - 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border py-2 px-3 ml-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn p-0",
    id: pageActual + 1,
    onClick: onClickPage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 37
    }
  }, pageActual + 2)) : null, pageActual <= pageMax - 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border py-2 px-3 ml-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn p-0",
    id: pageActual + 2,
    onClick: onClickPage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 37
    }
  }, pageActual + 3))) : null, pageActual <= pageMax - 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border py-2 px-3 ml-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn p-0",
    id: pageActual + 3,
    onClick: onClickPage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 33
    }
  }, pageActual + 4)) : null, pageActual <= pageMax - 4 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border py-2 px-3 ml-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn p-0",
    id: pageActual + 4,
    onClick: onClickPage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 33
    }
  }, pageActual + 5)) : null, !(pageActual === pageMax - 1) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border py-2 px-3 ml-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 29
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn p-0",
    id: "next",
    onClick: onClickPage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 69
    }
  }, '>'), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border d-none d-md-block py-2 px-3 ml-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 29
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn p-0",
    id: "last",
    onClick: onClickPage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 87
    }
  }, 'Ultima'), " ")) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AD_Advertlg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/config/axios.js":
/*!*****************************!*\
  !*** ./src/config/axios.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const clienteAxios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'https://api.giphy.com/v1/gifs/'
});
/* harmony default export */ __webpack_exports__["default"] = (clienteAxios);

/***/ }),

/***/ "./src/img/anuncio.jpg":
/*!*****************************!*\
  !*** ./src/img/anuncio.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/anuncio.a77acd3f.jpg";

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/home/elvis/Escritorio/giphy v2/client/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/reducers/giphyReducer.js":
/*!**************************************!*\
  !*** ./src/reducers/giphyReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/types/index.js");
 // State inicial

const initialState = {
  giphys: [],
  pageactual: 0,
  pagemax: null,
  loading: false,
  error: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["BUSCAR_GIPHY"]:
    case _types__WEBPACK_IMPORTED_MODULE_0__["DESCARGAR_GIPHY"]:
      return { ...state,
        loading: action.payload
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["DESCARGAR_GIPHY_EXITO"]:
      return { ...state,
        giphys: action.payload.gifsList,
        pagemax: action.payload.pagMax,
        loading: false,
        error: null
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["BUSCAR_GIPHY_EXITO"]:
      return { ...state,
        giphys: action.payload.gifsList,
        pagemax: action.payload.pagMax,
        pageactual: action.payload.pages,
        loading: false,
        error: null
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["BUSCAR_GIPHY_ERROR"]:
    case _types__WEBPACK_IMPORTED_MODULE_0__["DESCARGAR_GIPHY_ERROR"]:
      return { ...state,
        giphys: [],
        loading: false,
        error: true
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["CAMBIAR_PAGE"]:
      return { ...state,
        pageactual: action.payload
      };

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _giphyReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./giphyReducer */ "./src/reducers/giphyReducer.js");
// Combine Reducers
 // Importar reducers


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  giphy: _giphyReducer__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");

 // Importar reducer


const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]), typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/types/index.js":
/*!****************************!*\
  !*** ./src/types/index.js ***!
  \****************************/
/*! exports provided: DESCARGAR_GIPHY, DESCARGAR_GIPHY_EXITO, DESCARGAR_GIPHY_ERROR, CAMBIAR_PAGE, BUSCAR_GIPHY, BUSCAR_GIPHY_EXITO, BUSCAR_GIPHY_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESCARGAR_GIPHY", function() { return DESCARGAR_GIPHY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESCARGAR_GIPHY_EXITO", function() { return DESCARGAR_GIPHY_EXITO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESCARGAR_GIPHY_ERROR", function() { return DESCARGAR_GIPHY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMBIAR_PAGE", function() { return CAMBIAR_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUSCAR_GIPHY", function() { return BUSCAR_GIPHY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUSCAR_GIPHY_EXITO", function() { return BUSCAR_GIPHY_EXITO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUSCAR_GIPHY_ERROR", function() { return BUSCAR_GIPHY_ERROR; });
const DESCARGAR_GIPHY = 'DESCARGAR_GIPHY';
const DESCARGAR_GIPHY_EXITO = 'DESCARGAR_GIPHY_EXITO';
const DESCARGAR_GIPHY_ERROR = 'DESCARGAR_GIPHY_ERROR';
const CAMBIAR_PAGE = 'CAMBIAR_PAGE';
const BUSCAR_GIPHY = 'BUSCAR_GIPHY';
const BUSCAR_GIPHY_EXITO = 'BUSCAR_GIPHY_EXITO';
const BUSCAR_GIPHY_ERROR = 'BUSCAR_GIPHY_ERROR';

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/elvis/Escritorio/giphy v2/client/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/elvis/Escritorio/giphy v2/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/elvis/Escritorio/giphy v2/client/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map