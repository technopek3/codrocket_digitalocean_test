(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[103],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/sessions/reset_password.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/sessions/reset_password.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  metaInfo: {\n    title: 'Forgot Password'\n  },\n  data: function data() {\n    return {\n      logo: __webpack_require__(/*! @/assets/images/main-logo-light.svg */ \"./src/assets/images/main-logo-light.svg\"),\n      email: undefined,\n      password: undefined,\n      password_confirmation: undefined,\n      token: undefined,\n      loading: false,\n      formErrors: {}\n    };\n  },\n  methods: {\n    submitResetPassword: function submitResetPassword() {\n      var _this = this;\n\n      var form = {\n        email: this.email,\n        token: this.token,\n        password: this.password,\n        password_confirmation: this.password_confirmation\n      };\n      this.loading = true;\n      Api.post('/api/password/reset', form, false).then(function (res) {\n        _this.loading = false;\n        var response = res.data;\n\n        if (response.status === 'success') {\n          swal.info(response.message, 'success');\n\n          _this.$router.push({\n            name: 'login'\n          });\n        } else if (response.status === 'error') {\n          _this.formErrors = response.data; // // console.log(this.formErrors)\n        } else if (response.status === 'invalid_token') {\n          swal.info(response.message, 'error');\n        }\n      });\n    }\n  },\n  created: function created() {\n    var query = this.$route.query;\n    this.email = query.email;\n    this.token = query.token;\n  }\n});\n\n//# sourceURL=webpack:///./src/views/app/sessions/reset_password.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a4b4262e-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/sessions/reset_password.vue?vue&type=template&id=ae18bcb6&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a4b4262e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/sessions/reset_password.vue?vue&type=template&id=ae18bcb6& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n      _c = _vm._self._c;\n\n  return _c(\"div\", {\n    staticClass: \"auth-layout-wrap bg-gray-50\"\n  }, [_c(\"div\", {\n    staticClass: \"auth-content login\"\n  }, [_c(\"div\", {\n    staticClass: \"o-hidden rounded-0 w-full md:w-10/12 lg:w-7/12 mx-auto\"\n  }, [_c(\"div\", {\n    staticClass: \"p-4\"\n  }, [_c(\"div\", {\n    staticClass: \"flex flex-wrap bg-white rounded-lg mine-shadow overflow-hidden\"\n  }, [_c(\"div\", {\n    staticClass: \"w-full md:w-1/2 p-4 bg-primary border-r border-solid border-grey flex\"\n  }, [_c(\"router-link\", {\n    staticClass: \"block w-full self-center bg-contain max-h-64 h-24 md:h-64 bg-no-repeat bg-center\",\n    style: \"background-image: url(\".concat(_vm.logo, \")\"),\n    attrs: {\n      to: \"/\"\n    }\n  })], 1), _c(\"div\", {\n    staticClass: \"w-full md:w-1/2 p-4 relative\"\n  }, [_c(\"h1\", {\n    staticClass: \"mb-4 text-center text-md-left text-xl\"\n  }, [_vm._v(\" \" + _vm._s(_vm.lang(\"auth.reset_password\")) + \" \")]), _c(\"form\", [_c(\"div\", {\n    staticClass: \"form-group\"\n  }, [_c(\"label\", {\n    attrs: {\n      for: \"email\"\n    }\n  }, [_vm._v(_vm._s(_vm.lang(\"layout.fields.email\")))]), _c(\"input\", {\n    directives: [{\n      name: \"model\",\n      rawName: \"v-model\",\n      value: _vm.email,\n      expression: \"email\"\n    }],\n    staticClass: \"form-control\",\n    class: {\n      \"is-invalid\": _vm.formErrors.email\n    },\n    attrs: {\n      placeholder: _vm.lang(\"layout.placeholders.email\"),\n      type: \"email\",\n      autocomplete: \"off\"\n    },\n    domProps: {\n      value: _vm.email\n    },\n    on: {\n      input: function input($event) {\n        if ($event.target.composing) return;\n        _vm.email = $event.target.value;\n      }\n    }\n  }), _vm.formErrors.email ? _c(\"div\", {\n    staticClass: \"invalid-feedback\"\n  }, [_vm._v(_vm._s(_vm.formErrors.email[0]))]) : _vm._e()]), _c(\"div\", {\n    staticClass: \"form-group\"\n  }, [_c(\"label\", {\n    attrs: {\n      for: \"email\"\n    }\n  }, [_vm._v(\" \" + _vm._s(_vm.lang(\"layout.fields.new_password\")) + \" \")]), _c(\"input\", {\n    directives: [{\n      name: \"model\",\n      rawName: \"v-model\",\n      value: _vm.password,\n      expression: \"password\"\n    }],\n    staticClass: \"form-control\",\n    class: {\n      \"is-invalid\": _vm.formErrors.password\n    },\n    attrs: {\n      placeholder: _vm.lang(\"layout.placeholders.new_password\"),\n      type: \"password\"\n    },\n    domProps: {\n      value: _vm.password\n    },\n    on: {\n      input: function input($event) {\n        if ($event.target.composing) return;\n        _vm.password = $event.target.value;\n      }\n    }\n  }), _vm.formErrors.password ? _c(\"div\", {\n    staticClass: \"invalid-feedback\"\n  }, [_vm._v(_vm._s(_vm.formErrors.password[0]))]) : _vm._e()]), _c(\"div\", {\n    staticClass: \"form-group\"\n  }, [_c(\"label\", {\n    attrs: {\n      for: \"email\"\n    }\n  }, [_vm._v(_vm._s(_vm.lang(\"layout.fields.confirm_password\")))]), _c(\"input\", {\n    directives: [{\n      name: \"model\",\n      rawName: \"v-model\",\n      value: _vm.password_confirmation,\n      expression: \"password_confirmation\"\n    }],\n    staticClass: \"form-control\",\n    attrs: {\n      placeholder: _vm.lang(\"layout.placeholders.confirm_password\"),\n      type: \"password\"\n    },\n    domProps: {\n      value: _vm.password_confirmation\n    },\n    on: {\n      input: function input($event) {\n        if ($event.target.composing) return;\n        _vm.password_confirmation = $event.target.value;\n      }\n    }\n  })]), _c(\"button\", {\n    staticClass: \"btn btn-primary w-100 my-3\",\n    attrs: {\n      disabled: _vm.loading\n    },\n    on: {\n      click: function click($event) {\n        $event.preventDefault();\n        return _vm.submitResetPassword.apply(null, arguments);\n      }\n    }\n  }, [_c(\"span\", [_vm._v(_vm._s(_vm.lang(\"layout.buttons.reset\")))]), _vm.loading ? _c(\"b-spinner\", {\n    staticStyle: {\n      \"vertical-align\": \"middle\"\n    },\n    attrs: {\n      small: \"\"\n    }\n  }) : _vm._e()], 1)])])])])])])]);\n};\n\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/views/app/sessions/reset_password.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22a4b4262e-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/assets/images/main-logo-light.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/main-logo-light.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/main-logo-light.b796e857.svg\";\n\n//# sourceURL=webpack:///./src/assets/images/main-logo-light.svg?");

/***/ }),

/***/ "./src/views/app/sessions/reset_password.vue":
/*!***************************************************!*\
  !*** ./src/views/app/sessions/reset_password.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reset_password_vue_vue_type_template_id_ae18bcb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset_password.vue?vue&type=template&id=ae18bcb6& */ \"./src/views/app/sessions/reset_password.vue?vue&type=template&id=ae18bcb6&\");\n/* harmony import */ var _reset_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset_password.vue?vue&type=script&lang=js& */ \"./src/views/app/sessions/reset_password.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _reset_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _reset_password_vue_vue_type_template_id_ae18bcb6___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _reset_password_vue_vue_type_template_id_ae18bcb6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/app/sessions/reset_password.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/app/sessions/reset_password.vue?");

/***/ }),

/***/ "./src/views/app/sessions/reset_password.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/views/app/sessions/reset_password.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./reset_password.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/sessions/reset_password.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/app/sessions/reset_password.vue?");

/***/ }),

/***/ "./src/views/app/sessions/reset_password.vue?vue&type=template&id=ae18bcb6&":
/*!**********************************************************************************!*\
  !*** ./src/views/app/sessions/reset_password.vue?vue&type=template&id=ae18bcb6& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a4b4262e_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_password_vue_vue_type_template_id_ae18bcb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a4b4262e-vue-loader-template\"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./reset_password.vue?vue&type=template&id=ae18bcb6& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"a4b4262e-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/sessions/reset_password.vue?vue&type=template&id=ae18bcb6&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a4b4262e_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_password_vue_vue_type_template_id_ae18bcb6___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a4b4262e_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_password_vue_vue_type_template_id_ae18bcb6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/app/sessions/reset_password.vue?");

/***/ })

}]);