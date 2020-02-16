webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/PizzaSelectForm.tsx":
/*!********************************************!*\
  !*** ./src/components/PizzaSelectForm.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PizzaSelectForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
var _jsxFileName = "C:\\Users\\retbr\\IdeaProjects\\pizzamasterreact\\src\\components\\PizzaSelectForm.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
  formControl: {
    margin: theme.spacing(3)
  }
}));
function PizzaSelectForm() {
  const classes = useStyles();
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('1');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return __jsx("div", {
    style: {
      width: '100%',
      maxWidth: '1100px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      margin: '0 auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "fieldset",
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "legend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Velg \xE8n Pizza"), __jsx(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "aria-label": "pizza",
    name: "pizza",
    value: value,
    onChange: handleChange,
    style: {
      display: 'flex',
      flexDirection: 'row'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: "1",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }),
    label: "Grandiosa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: "2",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }),
    label: "Grandiosa Pepperoni",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: "3",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }),
    label: "Big One",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: "4",
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }),
    label: "Big One Triple Cheese",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
    id: "standard-basic",
    label: "Ditt Navn",
    style: {
      width: '300px',
      margin: '15px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "contained",
    color: "primary",
    style: {
      height: '3rem',
      marginTop: '15px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Bestill"))));
}

/***/ })

})
//# sourceMappingURL=index.js.37600455b52c7e2fc342.hot-update.js.map