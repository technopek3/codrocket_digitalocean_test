(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/sessions/auth-layout.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/sessions/auth-layout.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_USER_2_Desktop_Youness_codrocket_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    title: String,\n    current: String,\n    total: String,\n    className: {\n      type: String,\n      default: 'md:w-3/4'\n    }\n  },\n  data: function data() {\n    return {\n      logo: __webpack_require__(/*! @/assets/images/main-logo-light.svg */ \"./src/assets/images/main-logo-light.svg\")\n    };\n  },\n  computed: Object(C_Users_USER_2_Desktop_Youness_codrocket_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(C_Users_USER_2_Desktop_Youness_codrocket_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__[\"mapGetters\"])(['getLanguage'])), {}, {\n    isActive: function isActive() {\n      var _this = this;\n\n      return function (lang) {\n        return lang == _this.getLanguage;\n      };\n    }\n  }),\n  methods: {\n    changeLanguage: function changeLanguage(lang) {\n      this.$store.commit('setLanguage', lang);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/app/sessions/auth-layout.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/sessions/freelancer/verification.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/sessions/freelancer/verification.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_USER_2_Desktop_Youness_codrocket_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url.js */ \"./node_modules/core-js/modules/web.url.js\");\n/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ \"./node_modules/core-js/modules/web.url-search-params.js\");\n/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _auth_layout_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth-layout.vue */ \"./src/views/app/sessions/auth-layout.vue\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    AuthLayout: _auth_layout_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  },\n  metaInfo: {\n    // if no subcomponents specify a metaInfo.title, this title will be used\n    title: 'Verification - Freelancer registration'\n  },\n  data: function data() {\n    return {\n      form: {},\n      formErrors: {},\n      loading: false\n    };\n  },\n  computed: Object(C_Users_USER_2_Desktop_Youness_codrocket_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(C_Users_USER_2_Desktop_Youness_codrocket_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__[\"mapGetters\"])(['getAuthUser'])), {}, {\n    frontIDPreview: function frontIDPreview() {\n      return this.form.id_front ? URL.createObjectURL(this.form.id_front) : null;\n    },\n    backIDPreview: function backIDPreview() {\n      return this.form.id_back ? URL.createObjectURL(this.form.id_back) : null;\n    },\n    currentStep: function currentStep() {\n      return +this.getAuthUser.register_step;\n    }\n  }),\n  methods: Object(C_Users_USER_2_Desktop_Youness_codrocket_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(C_Users_USER_2_Desktop_Youness_codrocket_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(C_Users_USER_2_Desktop_Youness_codrocket_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__[\"mapActions\"])(['updateStep'])), Object(vuex__WEBPACK_IMPORTED_MODULE_7__[\"mapActions\"])(['refresh_user_local_info'])), {}, {\n    completeRegister: function completeRegister() {\n      var _this = this;\n\n      this.loading = true;\n      Api.post('/api/freelancer/register/4', this.form, true).then(function (_ref) {\n        var data = _ref.data;\n        _this.loading = false;\n\n        if (data.status == 'error') {\n          _this.formErrors = data.data;\n          return;\n        }\n\n        _this.updateStep(5);\n\n        _this.refresh_user_local_info();\n\n        _this.$router.push({\n          path: '/freelancer'\n        });\n      });\n    }\n  }),\n  created: function created() {\n    if (this.currentStep == 5) {\n      this.$router.push({\n        path: '/freelancer'\n      });\n    }\n\n    console.log(this.currentStep);\n\n    if (this.currentStep <= 3) {\n      this.$router.push({\n        name: 'freelancer.public-profile'\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/app/sessions/freelancer/verification.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a4b4262e-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/sessions/auth-layout.vue?vue&type=template&id=2d7ccf76&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a4b4262e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/sessions/auth-layout.vue?vue&type=template&id=2d7ccf76& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n      _c = _vm._self._c;\n\n  return _c(\"div\", {\n    staticClass: \"bg-gray-50 min-h-screen\"\n  }, [_c(\"div\", {\n    staticClass: \"register p-0\"\n  }, [_c(\"div\", {\n    staticClass: \"rounded-0 w-full mx-auto\"\n  }, [_c(\"div\", {\n    staticClass: \"relative w-full p-4 mb-2 bg-primary border-r flex justify-center flex-col\",\n    staticStyle: {\n      height: \"50vh\"\n    }\n  }, [_c(\"router-link\", {\n    staticClass: \"mb-5 md:mb-0 block w-full self-center h-16 md:h-20 bg-contain bg-no-repeat bg-center open\",\n    style: \"background-image: url(\".concat(_vm.logo, \")\"),\n    attrs: {\n      to: \"/\"\n    }\n  }), _c(\"ul\", {\n    staticClass: \"text-white flex mx-auto\"\n  }, [_c(\"li\", {\n    staticClass: \"hover:bg-white hover:text-purple-900 w-24 -mr-px text-center cursor-pointer border border-white px-2 py-1\",\n    class: {\n      \"bg-white text-primary\": _vm.isActive(\"en\")\n    },\n    on: {\n      click: function click($event) {\n        $event.preventDefault();\n        return _vm.changeLanguage(\"en\");\n      }\n    }\n  }, [_vm._v(\" English \")]), _c(\"li\", {\n    staticClass: \"hover:bg-white hover:text-purple-900 w-24 text-center cursor-pointer border border-white px-2 py-1\",\n    class: {\n      \"bg-white text-primary\": _vm.isActive(\"ar\")\n    },\n    on: {\n      click: function click($event) {\n        $event.preventDefault();\n        return _vm.changeLanguage(\"ar\");\n      }\n    }\n  }, [_vm._v(\" العربية \")])])], 1), _c(\"div\", {\n    staticClass: \"p-4 -mt-32 relative\"\n  }, [_c(\"div\", {\n    class: [\"w-full mx-auto bg-white rounded-lg mine-shadow overflow-hidden\", \"lg:w-1/2 xl:w-2/5\", _vm.className]\n  }, [_c(\"div\", {\n    staticClass: \"rounded-lg overflow-hidden\"\n  }, [_c(\"div\", {\n    staticClass: \"card o-hidden rounded-0\"\n  }, [_c(\"div\", {\n    staticClass: \"text-primary px-4 py-12 border-b flex justify-between items-center border-gray-200\"\n  }, [_c(\"h1\", {\n    staticClass: \"text-18 my-1 text-center\"\n  }, [_vm._v(_vm._s(_vm.title))]), _c(\"span\", {\n    staticClass: \"tex-lg\"\n  }, [_vm._v(_vm._s(_vm.current) + \" / \" + _vm._s(_vm.total))])])]), _vm._t(\"default\")], 2)])])])])]);\n};\n\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/views/app/sessions/auth-layout.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22a4b4262e-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a4b4262e-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/sessions/freelancer/verification.vue?vue&type=template&id=e7bf3106&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a4b4262e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/sessions/freelancer/verification.vue?vue&type=template&id=e7bf3106& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n      _c = _vm._self._c;\n\n  return _c(\"div\", [_c(\"auth-layout\", {\n    attrs: {\n      current: \"4\",\n      total: \"4\",\n      title: _vm.lang(\"auth.profile_verification\")\n    }\n  }, [_c(\"div\", {\n    staticClass: \"card-body text-left\"\n  }, [_c(\"div\", {\n    staticClass: \"row\"\n  }, [_c(\"div\", {\n    staticClass: \"col-12\"\n  }, [_c(\"div\", {\n    staticClass: \"row\"\n  }, [_c(\"p\", {\n    staticClass: \"col-12 col-md-6\"\n  }, [_vm._v(_vm._s(_vm.lang(\"deliverer_dashboard.verification_center.to_secure_your_account\")))])])]), _c(\"div\", {\n    staticClass: \"col-12 col-md-6\"\n  }, [_c(\"div\", {\n    staticClass: \"form-group\"\n  }, [_c(\"label\", {\n    attrs: {\n      for: \"image\"\n    }\n  }, [_vm._v(_vm._s(_vm.lang(\"deliverer_dashboard.verification_center.front_id\")))]), _c(\"b-form-file\", {\n    attrs: {\n      placeholder: _vm.lang(\"messages.choose_image\"),\n      \"drop-placeholder\": _vm.lang(\"messages.drag_file\")\n    },\n    model: {\n      value: _vm.form.id_front,\n      callback: function callback($$v) {\n        _vm.$set(_vm.form, \"id_front\", $$v);\n      },\n      expression: \"form.id_front\"\n    }\n  }), _vm.frontIDPreview ? _c(\"img\", {\n    staticClass: \"img-thumbnail mt-4\",\n    attrs: {\n      src: _vm.frontIDPreview,\n      alt: \"\"\n    }\n  }) : _vm._e(), _vm.formErrors.id_front ? _c(\"div\", {\n    staticClass: \"text-red-500 text-xs mt-1\"\n  }, [_vm._v(_vm._s(_vm.formErrors.id_front[0]))]) : _vm._e()], 1)]), _c(\"div\", {\n    staticClass: \"col-12 col-md-6\"\n  }, [_c(\"div\", {\n    staticClass: \"form-group\"\n  }, [_c(\"label\", {\n    attrs: {\n      for: \"image\"\n    }\n  }, [_vm._v(_vm._s(_vm.lang(\"deliverer_dashboard.verification_center.back_id\")))]), _c(\"b-form-file\", {\n    attrs: {\n      placeholder: _vm.lang(\"messages.choose_image\"),\n      \"drop-placeholder\": _vm.lang(\"messages.drag_file\")\n    },\n    model: {\n      value: _vm.form.id_back,\n      callback: function callback($$v) {\n        _vm.$set(_vm.form, \"id_back\", $$v);\n      },\n      expression: \"form.id_back\"\n    }\n  }), _vm.backIDPreview ? _c(\"img\", {\n    staticClass: \"img-thumbnail mt-4\",\n    attrs: {\n      src: _vm.backIDPreview,\n      alt: \"\"\n    }\n  }) : _vm._e(), _vm.formErrors.id_back ? _c(\"div\", {\n    staticClass: \"text-red-500 text-xs mt-1\"\n  }, [_vm._v(_vm._s(_vm.formErrors.id_back[0]))]) : _vm._e()], 1)])]), _c(\"div\", {\n    staticClass: \"w-full flex mt-3\"\n  }, [_c(\"div\", {\n    staticClass: \"w-1/3 md:w-1/2\"\n  }, [_c(\"button\", {\n    staticClass: \"w-full justify-center items-center md:w-auto btn btn-secondary text-14\",\n    staticStyle: {\n      display: \"flex\"\n    },\n    attrs: {\n      disabled: \"\"\n    }\n  }, [_c(\"svg\", {\n    staticClass: \"w-6 h-6 px-1\",\n    attrs: {\n      xmlns: \"http://www.w3.org/2000/svg\",\n      fill: \"none\",\n      viewBox: \"0 0 24 24\",\n      \"stroke-width\": \"1.5\",\n      stroke: \"currentColor\"\n    }\n  }, [_c(\"path\", {\n    attrs: {\n      \"stroke-linecap\": \"round\",\n      \"stroke-linejoin\": \"round\",\n      d: \"M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75\"\n    }\n  })]), _vm._v(\" \" + _vm._s(_vm.lang(\"layout.buttons.back\")) + \" \")])]), _c(\"div\", {\n    staticClass: \"w-2/3 md:w-1/2 flex justify-end ml-1 md:ml-0\"\n  }, [_c(\"button\", {\n    staticClass: \"w-full justify-center items-center md:w-auto btn btn-primary text-14\",\n    staticStyle: {\n      display: \"flex\"\n    },\n    attrs: {\n      disabled: _vm.loading\n    },\n    on: {\n      click: function click($event) {\n        $event.preventDefault();\n        return _vm.completeRegister.apply(null, arguments);\n      }\n    }\n  }, [_vm.loading ? _c(\"b-spinner\", {\n    staticStyle: {\n      \"vertical-align\": \"middle\"\n    },\n    attrs: {\n      small: \"\"\n    }\n  }) : _vm._e(), _vm._v(\" \" + _vm._s(_vm.lang(\"layout.buttons.next\")) + \" \"), _c(\"svg\", {\n    staticClass: \"w-6 h-6 px-1\",\n    attrs: {\n      xmlns: \"http://www.w3.org/2000/svg\",\n      fill: \"none\",\n      viewBox: \"0 0 24 24\",\n      \"stroke-width\": \"1.5\",\n      stroke: \"currentColor\"\n    }\n  }, [_c(\"path\", {\n    attrs: {\n      \"stroke-linecap\": \"round\",\n      \"stroke-linejoin\": \"round\",\n      d: \"M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75\"\n    }\n  })])], 1)])])])])], 1);\n};\n\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/views/app/sessions/freelancer/verification.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22a4b4262e-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/assets/images/main-logo-light.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/main-logo-light.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/main-logo-light.b796e857.svg\";\n\n//# sourceURL=webpack:///./src/assets/images/main-logo-light.svg?");

/***/ }),

/***/ "./src/views/app/sessions/auth-layout.vue":
/*!************************************************!*\
  !*** ./src/views/app/sessions/auth-layout.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _auth_layout_vue_vue_type_template_id_2d7ccf76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-layout.vue?vue&type=template&id=2d7ccf76& */ \"./src/views/app/sessions/auth-layout.vue?vue&type=template&id=2d7ccf76&\");\n/* harmony import */ var _auth_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-layout.vue?vue&type=script&lang=js& */ \"./src/views/app/sessions/auth-layout.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _auth_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _auth_layout_vue_vue_type_template_id_2d7ccf76___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _auth_layout_vue_vue_type_template_id_2d7ccf76___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/app/sessions/auth-layout.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/app/sessions/auth-layout.vue?");

/***/ }),

/***/ "./src/views/app/sessions/auth-layout.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/views/app/sessions/auth-layout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./auth-layout.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/sessions/auth-layout.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/app/sessions/auth-layout.vue?");

/***/ }),

/***/ "./src/views/app/sessions/auth-layout.vue?vue&type=template&id=2d7ccf76&":
/*!*******************************************************************************!*\
  !*** ./src/views/app/sessions/auth-layout.vue?vue&type=template&id=2d7ccf76& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a4b4262e_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_layout_vue_vue_type_template_id_2d7ccf76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a4b4262e-vue-loader-template\"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./auth-layout.vue?vue&type=template&id=2d7ccf76& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"a4b4262e-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/sessions/auth-layout.vue?vue&type=template&id=2d7ccf76&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a4b4262e_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_layout_vue_vue_type_template_id_2d7ccf76___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a4b4262e_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_layout_vue_vue_type_template_id_2d7ccf76___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/app/sessions/auth-layout.vue?");

/***/ }),

/***/ "./src/views/app/sessions/freelancer/verification.vue":
/*!************************************************************!*\
  !*** ./src/views/app/sessions/freelancer/verification.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _verification_vue_vue_type_template_id_e7bf3106___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification.vue?vue&type=template&id=e7bf3106& */ \"./src/views/app/sessions/freelancer/verification.vue?vue&type=template&id=e7bf3106&\");\n/* harmony import */ var _verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verification.vue?vue&type=script&lang=js& */ \"./src/views/app/sessions/freelancer/verification.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _verification_vue_vue_type_template_id_e7bf3106___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _verification_vue_vue_type_template_id_e7bf3106___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/app/sessions/freelancer/verification.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/app/sessions/freelancer/verification.vue?");

/***/ }),

/***/ "./src/views/app/sessions/freelancer/verification.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./src/views/app/sessions/freelancer/verification.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./verification.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/sessions/freelancer/verification.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/app/sessions/freelancer/verification.vue?");

/***/ }),

/***/ "./src/views/app/sessions/freelancer/verification.vue?vue&type=template&id=e7bf3106&":
/*!*******************************************************************************************!*\
  !*** ./src/views/app/sessions/freelancer/verification.vue?vue&type=template&id=e7bf3106& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a4b4262e_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verification_vue_vue_type_template_id_e7bf3106___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a4b4262e-vue-loader-template\"}!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./verification.vue?vue&type=template&id=e7bf3106& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"a4b4262e-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/sessions/freelancer/verification.vue?vue&type=template&id=e7bf3106&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a4b4262e_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verification_vue_vue_type_template_id_e7bf3106___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a4b4262e_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verification_vue_vue_type_template_id_e7bf3106___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/app/sessions/freelancer/verification.vue?");

/***/ })

}]);