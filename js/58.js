(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/pages/verify-email.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/pages/verify-email.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  created: function created() {\n    var _this = this;\n\n    if (this.$store.getters.getAuthUser.email_verified_at != null) {\n      this.$router.push({\n        path: '/'\n      });\n    } else {\n      Api.post('/api/request_email_verification', {\n        email: this.$store.getters.getAuthUser.email\n      }, false).then(function (res) {\n        _this.$refs.info.textContent = \"\".concat(_this.lang('auth.messages.success_send'), \" \").concat(_this.$store.getters.getAuthUser.email);\n\n        _this.$refs.spinner.classList.add('hidden');\n\n        _this.$refs.check.classList.add('flex');\n\n        _this.$refs.check.classList.remove('hidden');\n      }).catch(function () {\n        console.error('try again later');\n        _this.$refs.info.textContent = _this.lang('auth.messages.error_send');\n\n        _this.$refs.spinner.classList.add('hidden');\n\n        _this.$refs.error.classList.add('flex');\n\n        _this.$refs.error.classList.remove('hidden');\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/app/pages/verify-email.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"438a310d-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/pages/verify-email.vue?vue&type=template&id=44f0c30a&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"438a310d-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/pages/verify-email.vue?vue&type=template&id=44f0c30a& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n      _c = _vm._self._c;\n\n  return _c(\"b-row\", [_c(\"b-col\", [_c(\"div\", {\n    staticClass: \"not-found-wrap text-center\"\n  }, [_c(\"p\", {\n    staticClass: \"text-36 subheading mb-3\"\n  }, [_vm._v(_vm._s(_vm.lang(\"auth.email_verify\")))]), _c(\"p\", {\n    ref: \"spinner\",\n    staticClass: \"flex justify-center items-center\"\n  }, [_c(\"svg\", {\n    staticClass: \"animate-spin -ml-1 mr-3 h-20 w-20 text-primary\",\n    attrs: {\n      xmlns: \"http://www.w3.org/2000/svg\",\n      fill: \"none\",\n      viewBox: \"0 0 24 24\"\n    }\n  }, [_c(\"circle\", {\n    staticClass: \"opacity-25\",\n    attrs: {\n      cx: \"12\",\n      cy: \"12\",\n      r: \"10\",\n      stroke: \"currentColor\",\n      \"stroke-width\": \"4\"\n    }\n  }), _c(\"path\", {\n    staticClass: \"opacity-75\",\n    attrs: {\n      fill: \"currentColor\",\n      d: \"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z\"\n    }\n  })])]), _c(\"p\", {\n    ref: \"check\",\n    staticClass: \"justify-center items-center hidden\"\n  }, [_c(\"svg\", {\n    staticClass: \"-ml-1 mr-3 h-20 w-20 text-primary\",\n    attrs: {\n      xmlns: \"http://www.w3.org/2000/svg\",\n      fill: \"none\",\n      viewBox: \"0 0 24 24\",\n      stroke: \"currentColor\",\n      \"stroke-width\": \"2\"\n    }\n  }, [_c(\"path\", {\n    attrs: {\n      \"stroke-linecap\": \"round\",\n      \"stroke-linejoin\": \"round\",\n      d: \"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"\n    }\n  })])]), _c(\"p\", {\n    ref: \"error\",\n    staticClass: \"justify-center items-center hidden\"\n  }, [_c(\"svg\", {\n    staticClass: \"-ml-1 mr-3 h-20 w-20 text-primary\",\n    attrs: {\n      xmlns: \"http://www.w3.org/2000/svg\",\n      fill: \"none\",\n      viewBox: \"0 0 24 24\",\n      stroke: \"currentColor\",\n      \"stroke-width\": \"2\"\n    }\n  }, [_c(\"path\", {\n    attrs: {\n      \"stroke-linecap\": \"round\",\n      \"stroke-linejoin\": \"round\",\n      d: \"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"\n    }\n  })])]), _c(\"p\", {\n    ref: \"info\",\n    staticClass: \"mb-5 text-muted text-18\"\n  }, [_vm._v(_vm._s(_vm.lang(\"auth.messages.send_email\")) + \" : \" + _vm._s(this.$store.getters.getAuthUser.email) + \" \")]), _c(\"a\", {\n    staticClass: \"btn btn-lg btn-primary btn-rounded\",\n    attrs: {\n      href: \"/\"\n    }\n  }, [_vm._v(_vm._s(_vm.lang(\"auth.buttons.back\")))])])])], 1);\n};\n\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/views/app/pages/verify-email.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22438a310d-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/app/pages/verify-email.vue":
/*!**********************************************!*\
  !*** ./src/views/app/pages/verify-email.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _verify_email_vue_vue_type_template_id_44f0c30a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-email.vue?vue&type=template&id=44f0c30a& */ \"./src/views/app/pages/verify-email.vue?vue&type=template&id=44f0c30a&\");\n/* harmony import */ var _verify_email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-email.vue?vue&type=script&lang=js& */ \"./src/views/app/pages/verify-email.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _verify_email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _verify_email_vue_vue_type_template_id_44f0c30a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _verify_email_vue_vue_type_template_id_44f0c30a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/app/pages/verify-email.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/app/pages/verify-email.vue?");

/***/ }),

/***/ "./src/views/app/pages/verify-email.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/views/app/pages/verify-email.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./verify-email.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/pages/verify-email.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/app/pages/verify-email.vue?");

/***/ }),

/***/ "./src/views/app/pages/verify-email.vue?vue&type=template&id=44f0c30a&":
/*!*****************************************************************************!*\
  !*** ./src/views/app/pages/verify-email.vue?vue&type=template&id=44f0c30a& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_438a310d_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_email_vue_vue_type_template_id_44f0c30a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"438a310d-vue-loader-template\"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./verify-email.vue?vue&type=template&id=44f0c30a& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"438a310d-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/pages/verify-email.vue?vue&type=template&id=44f0c30a&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_438a310d_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_email_vue_vue_type_template_id_44f0c30a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_438a310d_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_email_vue_vue_type_template_id_44f0c30a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/app/pages/verify-email.vue?");

/***/ })

}]);