webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.bc7bd20964432675937a.hot-update.js.map