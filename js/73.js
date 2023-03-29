(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/pages/verify_email_request.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/pages/verify_email_request.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ \"./node_modules/core-js/modules/es.json.stringify.js\");\n/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  date: function date() {\n    return {\n      logo: __webpack_require__(/*! @/assets/images/main-logo-light.svg */ \"./src/assets/images/main-logo-light.svg\")\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    Api.post(\"/api/validate_user_email/\".concat(this.$route.params.id, \"/\").concat(this.$route.params.hash), {}, false).then(function (res) {\n      _this.$refs.message_result.textContent = _this.lang('auth.messages.email_verified');\n      var local_user = JSON.parse(localStorage.getItem('auth:user'));\n      local_user.email_verified_at = res.data.data;\n      localStorage.setItem('auth:user', JSON.stringify(local_user));\n\n      if (_this.$store.getters.getAuthUser.role == 'merchant') {\n        setTimeout(function () {\n          document.location.href = '/dashboard/home';\n        }, 2000);\n      } else {\n        setTimeout(function () {\n          document.location.href = '/deliverer';\n        }, 2000);\n      }\n    }).catch(function (er) {\n      console.error('show error == ', er);\n      _this.$refs.message_result.textContent = 'an error has been appaired while verifying your email . Try to login again ';\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/views/app/pages/verify_email_request.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"25d91826-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/pages/verify_email_request.vue?vue&type=template&id=3beaa6d9&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"25d91826-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/pages/verify_email_request.vue?vue&type=template&id=3beaa6d9& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n      _c = _vm._self._c;\n\n  return _c(\"b-row\", [_c(\"b-col\", {\n    staticClass: \"bg-gray-50 h-screen\"\n  }, [_c(\"div\", {\n    staticClass: \"relative w-full p-4 bg-primary border-r flex justify-center flex-col\",\n    staticStyle: {\n      height: \"40vh\"\n    }\n  }, [_c(\"router-link\", {\n    staticClass: \"mb-5 md:mb-0 block w-full self-center h-16 md:h-20 bg-contain bg-no-repeat bg-center open\",\n    style: \"background-image: url(\".concat(_vm.logo, \")\"),\n    attrs: {\n      to: \"/\"\n    }\n  })], 1), _c(\"div\", {\n    staticClass: \"w-5/6 md:w-2/5 bg-white text-center mx-auto -mt-28 relative mine-shadow py-48\"\n  }, [_c(\"p\", {\n    ref: \"check\",\n    staticClass: \"flex justify-center items-center\"\n  }, [_c(\"svg\", {\n    staticClass: \"mb-2 h-20 w-20 text-primary\",\n    attrs: {\n      xmlns: \"http://www.w3.org/2000/svg\",\n      fill: \"none\",\n      viewBox: \"0 0 24 24\",\n      stroke: \"currentColor\",\n      \"stroke-width\": \"2\"\n    }\n  }, [_c(\"path\", {\n    attrs: {\n      \"stroke-linecap\": \"round\",\n      \"stroke-linejoin\": \"round\",\n      d: \"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\"\n    }\n  })])]), _c(\"p\", {\n    staticClass: \"text-28 md:text-36 subheading mb-3\"\n  }, [_vm._v(_vm._s(_vm.lang(\"auth.messages.thank_you\")))]), _c(\"p\", {\n    ref: \"message_result\",\n    staticClass: \"mb-5 text-muted text-16 md:text-18 px-32 md:w-4/5 mx-auto\"\n  }, [_vm._v(_vm._s(_vm.lang(\"auth.check_email\")) + \" \")]), _c(\"a\", {\n    staticClass: \"btn btn-lg btn-primary btn-rounded\",\n    attrs: {\n      href: \"/\"\n    }\n  }, [_vm._v(_vm._s(_vm.lang(\"auth.buttons.back\")))])])])], 1);\n};\n\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/views/app/pages/verify_email_request.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2225d91826-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/assets/images/main-logo-light.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/main-logo-light.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/main-logo-light.b796e857.svg\";\n\n//# sourceURL=webpack:///./src/assets/images/main-logo-light.svg?");

/***/ }),

/***/ "./src/views/app/pages/verify_email_request.vue":
/*!******************************************************!*\
  !*** ./src/views/app/pages/verify_email_request.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _verify_email_request_vue_vue_type_template_id_3beaa6d9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify_email_request.vue?vue&type=template&id=3beaa6d9& */ \"./src/views/app/pages/verify_email_request.vue?vue&type=template&id=3beaa6d9&\");\n/* harmony import */ var _verify_email_request_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify_email_request.vue?vue&type=script&lang=js& */ \"./src/views/app/pages/verify_email_request.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _verify_email_request_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _verify_email_request_vue_vue_type_template_id_3beaa6d9___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _verify_email_request_vue_vue_type_template_id_3beaa6d9___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/app/pages/verify_email_request.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/app/pages/verify_email_request.vue?");

/***/ }),

/***/ "./src/views/app/pages/verify_email_request.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/views/app/pages/verify_email_request.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_email_request_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./verify_email_request.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/pages/verify_email_request.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_email_request_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/app/pages/verify_email_request.vue?");

/***/ }),

/***/ "./src/views/app/pages/verify_email_request.vue?vue&type=template&id=3beaa6d9&":
/*!*************************************************************************************!*\
  !*** ./src/views/app/pages/verify_email_request.vue?vue&type=template&id=3beaa6d9& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_25d91826_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_email_request_vue_vue_type_template_id_3beaa6d9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"25d91826-vue-loader-template\"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./verify_email_request.vue?vue&type=template&id=3beaa6d9& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"25d91826-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/pages/verify_email_request.vue?vue&type=template&id=3beaa6d9&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_25d91826_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_email_request_vue_vue_type_template_id_3beaa6d9___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_25d91826_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verify_email_request_vue_vue_type_template_id_3beaa6d9___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/app/pages/verify_email_request.vue?");

/***/ })

}]);