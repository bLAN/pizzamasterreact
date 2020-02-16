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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/AdminTabs.tsx":
/*!**************************************!*\
  !*** ./src/components/AdminTabs.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-swipeable-views */ "react-swipeable-views");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tabs */ "@material-ui/core/Tabs");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tab */ "@material-ui/core/Tab");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _PizzaStatusDisplay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PizzaStatusDisplay */ "./src/components/PizzaStatusDisplay.tsx");
/* harmony import */ var _tools_DatabaseManagement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tools/DatabaseManagement */ "./src/components/tools/DatabaseManagement.tsx");
var _jsxFileName = "C:\\Users\\retbr\\IdeaProjects\\pizzamasterreact\\src\\components\\AdminTabs.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












function TabPanel(props) {
  const {
    children,
    value,
    index
  } = props,
        other = _objectWithoutProperties(props, ["children", "value", "index"]);

  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, _extends({
    component: "div",
    role: "tabpanel",
    hidden: value !== index,
    id: `full-width-tabpanel-${index}`,
    "aria-labelledby": `full-width-tab-${index}`
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), value === index && __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default.a, {
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, children));
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
}));

const AdminTabs = () => {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    position: "static",
    color: "default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4___default.a, {
    value: value,
    onChange: handleChange,
    indicatorColor: "primary",
    textColor: "primary",
    variant: "fullWidth",
    "aria-label": "full width tabs example",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({
    label: "Pizza Status"
  }, a11yProps(0), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({
    label: "Database Management"
  }, a11yProps(1), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({
    label: "Item Three"
  }, a11yProps(2), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  })))), __jsx(react_swipeable_views__WEBPACK_IMPORTED_MODULE_1___default.a, {
    axis: theme.direction === 'rtl' ? 'x-reverse' : 'x',
    index: value,
    onChangeIndex: handleChangeIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, __jsx(TabPanel, {
    value: value,
    index: 0,
    dir: theme.direction,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx(_PizzaStatusDisplay__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isAdmin: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  })), __jsx(TabPanel, {
    value: value,
    index: 1,
    dir: theme.direction,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx(_tools_DatabaseManagement__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  })), __jsx(TabPanel, {
    value: value,
    index: 2,
    dir: theme.direction,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, "Item Three")));
};

/* harmony default export */ __webpack_exports__["default"] = (AdminTabs);

/***/ }),

/***/ "./src/components/PizzaCard.tsx":
/*!**************************************!*\
  !*** ./src/components/PizzaCard.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "@material-ui/core/CardActionArea");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tools_PizzaAdminGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tools/PizzaAdminGroup */ "./src/components/tools/PizzaAdminGroup.tsx");
var _jsxFileName = "C:\\Users\\retbr\\IdeaProjects\\pizzamasterreact\\src\\components\\PizzaCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    maxWidth: 345
  },
  media: {
    height: 175
  }
});

const PizzaCard = ({
  order,
  isAdmin
}) => {
  const classes = useStyles();

  const PizzaImg = pizzaId => {
    switch (pizzaId) {
      case 1:
        return '/images/grandiosa.png';

      case 2:
        return '/images/grandiosa-pepperoni.png';

      case 3:
        return '/images/bigone.png';

      case 4:
        return '/images/bigone-triplecheese.png';
    }
  };

  const AdminTools = admin => {
    if (admin) {
      return __jsx(_tools_PizzaAdminGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
        status: order.status,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: undefined
      });
    } else return null;
  };

  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.root,
    style: {
      margin: '10px auto',
      border: '1px solid orange',
      padding: '5px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.media,
    image: PizzaImg(order.pizzaId),
    title: order.pizzaType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    gutterBottom: true,
    variant: "h5",
    component: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, order.name), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Chip"], {
    label: order.pizzaType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  })), AdminTools(isAdmin)));
};

/* harmony default export */ __webpack_exports__["default"] = (PizzaCard);

/***/ }),

/***/ "./src/components/PizzaStatusDisplay.tsx":
/*!***********************************************!*\
  !*** ./src/components/PizzaStatusDisplay.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PizzaCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PizzaCard */ "./src/components/PizzaCard.tsx");
/* harmony import */ var _grids_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grids/Grid */ "./src/components/grids/Grid.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\retbr\\IdeaProjects\\pizzamasterreact\\src\\components\\PizzaStatusDisplay.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const orders = [{
  id: 1,
  name: 'Jon Fossheim',
  pizzaType: 'Grandiosa',
  pizzaId: 1,
  status: 1
}, {
  id: 2,
  name: 'Erviker',
  pizzaType: 'Big One',
  pizzaId: 3,
  status: 1
}, {
  id: 3,
  name: 'Markjen',
  pizzaType: 'Grandiosa Pepperoni',
  pizzaId: 2,
  status: 2
}, {
  id: 4,
  name: 'Tech Simen',
  pizzaType: 'Big One Triple Cheese',
  pizzaId: 4,
  status: 3
}, {
  id: 5,
  name: 'Kristine',
  pizzaType: 'Big One',
  pizzaId: 3,
  status: 2
}];
const Col = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
	margin-right: 7px;
	margin-left: 7px;
	padding: 5px;
	text-align: center;
`;

const inQueue = isAdmin => orders.map(order => {
  if (order.status === 1) {
    return __jsx(_PizzaCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      order: order,
      isAdmin: isAdmin,
      key: order.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: undefined
    });
  }

  return null;
});

const inOven = isAdmin => orders.map(order => {
  if (order.status === 2) {
    return __jsx(_PizzaCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      order: order,
      isAdmin: isAdmin,
      key: order.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: undefined
    });
  }

  return null;
});

const isFinished = isAdmin => orders.map(order => {
  if (order.status === 3) {
    return __jsx(_PizzaCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      order: order,
      isAdmin: isAdmin,
      key: order.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: undefined
    });
  }

  return null;
});

const PizzaStatusDisplay = ({
  isAdmin
}) => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, __jsx(_grids_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx(Col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, "I K\xF8"), inQueue(isAdmin)), __jsx(Col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, "I Ovn"), inOven(isAdmin)), __jsx(Col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, "Klar for Henting"), isFinished(isAdmin))));
};

/* harmony default export */ __webpack_exports__["default"] = (PizzaStatusDisplay);

/***/ }),

/***/ "./src/components/Wrapper.tsx":
/*!************************************!*\
  !*** ./src/components/Wrapper.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  margin: 0;
  padding: 2rem;
`;
/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./src/components/grids/Grid.tsx":
/*!***************************************!*\
  !*** ./src/components/grids/Grid.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Grid = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`;
/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./src/components/tools/DatabaseManagement.tsx":
/*!*****************************************************!*\
  !*** ./src/components/tools/DatabaseManagement.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DatabaseManagement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-table */ "material-table");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\retbr\\IdeaProjects\\pizzamasterreact\\src\\components\\tools\\DatabaseManagement.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function DatabaseManagement() {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    columns: [{
      title: 'Item',
      field: 'item'
    }, {
      title: 'Item ID',
      field: 'itemId',
      type: 'numeric'
    }, {
      title: 'Stock',
      field: 'stock',
      type: 'numeric'
    }],
    data: [{
      item: 'Grandiosa',
      itemId: 1,
      stock: 43
    }, {
      item: 'Grandiosa Pepperoni',
      itemId: 2,
      stock: 64
    }, {
      item: 'Big One',
      itemId: 3,
      stock: 13
    }, {
      item: 'Big One Triple Cheese',
      itemId: 4,
      stock: 61
    }]
  });
  return __jsx(material_table__WEBPACK_IMPORTED_MODULE_1___default.a, {
    title: "Ikkje k\xF8dd med denne om du ikkje veit ka du gjer! :)",
    columns: state.columns,
    data: state.data,
    editable: {
      onRowAdd: newData => new Promise(resolve => {
        setTimeout(() => {
          resolve();
          setState(prevState => {
            const data = [...prevState.data];
            data.push(newData);
            return _objectSpread({}, prevState, {
              data
            });
          });
        }, 600);
      }),
      onRowUpdate: (newData, oldData) => new Promise(resolve => {
        setTimeout(() => {
          resolve();

          if (oldData) {
            setState(prevState => {
              const data = [...prevState.data];
              data[data.indexOf(oldData)] = newData;
              return _objectSpread({}, prevState, {
                data
              });
            });
          }
        }, 600);
      }),
      onRowDelete: oldData => new Promise(resolve => {
        setTimeout(() => {
          resolve();
          setState(prevState => {
            const data = [...prevState.data];
            data.splice(data.indexOf(oldData), 1);
            return _objectSpread({}, prevState, {
              data
            });
          });
        }, 600);
      })
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  });
}

/***/ }),

/***/ "./src/components/tools/PizzaAdminGroup.tsx":
/*!**************************************************!*\
  !*** ./src/components/tools/PizzaAdminGroup.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "@material-ui/icons/ArrowBack");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ "@material-ui/icons/ArrowForward");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Done */ "@material-ui/icons/Done");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\retbr\\IdeaProjects\\pizzamasterreact\\src\\components\\tools\\PizzaAdminGroup.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const PizzaAdminGroup = ({
  status
}) => {
  return __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, status > 1 && __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "contained",
    color: "primary",
    startIcon: __jsx(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Ned"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "contained",
    color: "secondary",
    startIcon: __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Del"), status < 3 && __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "contained",
    color: "primary",
    endIcon: __jsx(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Opp"), status === 3 && __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "contained",
    color: "primary",
    endIcon: __jsx(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Ferdig"));
};

/* harmony default export */ __webpack_exports__["default"] = (PizzaAdminGroup);

/***/ }),

/***/ "./src/pages/admin.tsx":
/*!*****************************!*\
  !*** ./src/pages/admin.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Wrapper */ "./src/components/Wrapper.tsx");
/* harmony import */ var _components_AdminTabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AdminTabs */ "./src/components/AdminTabs.tsx");
var _jsxFileName = "C:\\Users\\retbr\\IdeaProjects\\pizzamasterreact\\src\\pages\\admin.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Admin = () => {
  return __jsx(_components_Wrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Administrator Oversikt"), __jsx(_components_AdminTabs__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./src/pages/admin.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\retbr\IdeaProjects\pizzamasterreact\src\pages\admin.tsx */"./src/pages/admin.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActionArea":
/*!***************************************************!*\
  !*** external "@material-ui/core/CardActionArea" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/Tab":
/*!****************************************!*\
  !*** external "@material-ui/core/Tab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "@material-ui/core/Tabs":
/*!*****************************************!*\
  !*** external "@material-ui/core/Tabs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/ArrowBack":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ArrowBack" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowBack");

/***/ }),

/***/ "@material-ui/icons/ArrowForward":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ArrowForward" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowForward");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "@material-ui/icons/Done":
/*!******************************************!*\
  !*** external "@material-ui/icons/Done" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Done");

/***/ }),

/***/ "material-table":
/*!*********************************!*\
  !*** external "material-table" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("material-table");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-swipeable-views":
/*!****************************************!*\
  !*** external "react-swipeable-views" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-swipeable-views");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map