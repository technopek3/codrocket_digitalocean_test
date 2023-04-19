(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/sessions/register.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/sessions/register.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_USER_2_Desktop_Youness_codrocket_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _parts_common_tutorial_panel_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../parts/common/tutorial_panel.vue */ \"./src/views/parts/common/tutorial_panel.vue\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  metaInfo: {\n    title: \"S'inscrire - Gestion des colis e-commerce  |  Livraison e-commerce au Maroc  | codrocket.com\",\n    meta: [{\n      name: 'description',\n      content: 'Créez votre compte sur notre plateforme COD Rocket dediée à la gestion des ventes avec système de paiement à la livraison. Nous fournissons tous les services qui aident les e-commerçants et les distributeurs au Maroc à gérer leur business de manière professionnelle.'\n    }]\n  },\n  data: function data() {\n    return {\n      help_id: 1,\n      open: false,\n      bgImage: __webpack_require__(/*! @/assets/images/photo-wide-4.jpg */ \"./src/assets/images/photo-wide-4.jpg\"),\n      logo: __webpack_require__(/*! @/assets/images/main-logo-light.svg */ \"./src/assets/images/main-logo-light.svg\"),\n      signInImage: __webpack_require__(/*! @/assets/images/photo-long-3.jpg */ \"./src/assets/images/photo-long-3.jpg\"),\n      form: {},\n      formErrors: {},\n      selected: 'merchant',\n      roleOptions: [{\n        value: 'merchant',\n        text: this.lang('auth.buttons.merchant')\n      }, {\n        value: 'delivrer',\n        text: this.lang('auth.buttons.deliverer')\n      }],\n      loading: false,\n      show_testing_alert: false,\n      show_tuto: true,\n      referral: null\n    };\n  },\n  components: {\n    Tutorialpanel: _parts_common_tutorial_panel_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  computed: Object(C_Users_USER_2_Desktop_Youness_codrocket_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(C_Users_USER_2_Desktop_Youness_codrocket_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__[\"mapGetters\"])(['getLanguage'])), {}, {\n    isActive: function isActive() {\n      var _this = this;\n\n      return function (lang) {\n        return lang == _this.getLanguage;\n      };\n    }\n  }),\n  created: function created() {\n    if (this.$route.query.ref) {\n      localStorage.setItem('ref', this.$route.query.ref);\n    }\n  },\n  methods: Object(C_Users_USER_2_Desktop_Youness_codrocket_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(C_Users_USER_2_Desktop_Youness_codrocket_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__[\"mapActions\"])(['register'])), {}, {\n    changeLanguage: function changeLanguage(lang) {\n      this.$store.commit('setLanguage', lang);\n    },\n\n    /**\r\n     * submit register form\r\n     */\n    submit: function submit() {\n      var _this2 = this;\n\n      this.loading = true;\n      this.formErrors = {};\n      this.register(this.form).then(function (res) {\n        if (res.status === 'error') {\n          _this2.loading = false;\n          _this2.formErrors = res.data;\n        }\n      }).catch(function () {\n        _this2.loading = false;\n        swal.toast(_this2.lang('messages.server_error'), 'error');\n      });\n    },\n    chek_role: function chek_role() {\n      if (this.form.role == 'merchant') {\n        this.show_testing_alert = false;\n      } else {\n        this.show_testing_alert = false;\n      }\n    },\n    toggle_tuto_panel: function toggle_tuto_panel() {\n      this.open = !this.open;\n    }\n  }),\n  watch: {\n    form: function form(newVal, oldVal) {}\n  }\n});\n\n//# sourceURL=webpack:///./src/views/app/sessions/register.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7a292758-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/sessions/register.vue?vue&type=template&id=3270d386&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7a292758-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/sessions/register.vue?vue&type=template&id=3270d386& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n      _c = _vm._self._c;\n\n  return _c(\"div\", [_c(\"Tutorialpanel\", {\n    attrs: {\n      show: _vm.open,\n      id: _vm.help_id\n    }\n  }), _c(\"div\", {\n    staticClass: \"bg-gray-50 h-screen\"\n  }, [_c(\"div\", {\n    staticClass: \"register p-0\"\n  }, [_c(\"div\", {\n    staticClass: \"rounded-0 w-full mx-auto\"\n  }, [_c(\"div\", {\n    staticClass: \"relative w-full p-4 mb-2 bg-primary border-r flex justify-center flex-col\",\n    staticStyle: {\n      height: \"50vh\"\n    }\n  }, [_c(\"router-link\", {\n    staticClass: \"mb-5 md:mb-0 block w-full self-center h-16 md:h-20 bg-contain bg-no-repeat bg-center open\",\n    style: \"background-image: url(\".concat(_vm.logo, \")\"),\n    attrs: {\n      to: \"/\"\n    }\n  }), _c(\"ul\", {\n    staticClass: \"text-white flex mx-auto\"\n  }, [_c(\"li\", {\n    staticClass: \"hover:bg-white hover:text-purple-900 w-24 -mr-px text-center cursor-pointer border border-white px-2 py-1\",\n    class: {\n      \"bg-white text-primary\": _vm.isActive(\"en\")\n    },\n    on: {\n      click: function click($event) {\n        $event.preventDefault();\n        return _vm.changeLanguage(\"en\");\n      }\n    }\n  }, [_vm._v(\" English \")]), _c(\"li\", {\n    staticClass: \"hover:bg-white hover:text-purple-900 w-24 text-center cursor-pointer border border-white px-2 py-1\",\n    class: {\n      \"bg-white text-primary\": _vm.isActive(\"ar\")\n    },\n    on: {\n      click: function click($event) {\n        $event.preventDefault();\n        return _vm.changeLanguage(\"ar\");\n      }\n    }\n  }, [_vm._v(\" العربية \")])])], 1), _c(\"div\", {\n    staticClass: \"p-4 -mt-32 relative\"\n  }, [_c(\"div\", {\n    staticClass: \"flex flex-wrap w-full md:w-3/4 lg:w-1/2 xl:w-2/5 mx-auto bg-white rounded-lg mine-shadow overflow-hidden\"\n  }, [_c(\"div\", {\n    staticClass: \"w-full p-4\"\n  }, [_c(\"div\", {\n    staticClass: \"w-full flex justify-between items-center\"\n  }, [_c(\"h1\", {\n    staticClass: \"text-center text-md-left text-xl\"\n  }, [_vm._v(_vm._s(_vm.lang(\"auth.register\")))]), _c(\"span\", {\n    staticClass: \"btn_tuto opacity-70 rounded-md p-1 cursor-pointer justify-center items-center px-2 text-white\",\n    on: {\n      click: function click($event) {\n        return _vm.toggle_tuto_panel();\n      }\n    }\n  }, [_vm._v(_vm._s(_vm.lang(\"auth.show_tuto\")))])]), _c(\"form\", [_c(\"div\", {\n    staticClass: \"form-group\"\n  }, [_c(\"label\", {\n    attrs: {\n      for: \"\"\n    }\n  }, [_vm._v(_vm._s(_vm.lang(\"auth.buttons.are_you\"))), _c(\"span\", {\n    staticClass: \"text-red-500 px-1\"\n  }, [_vm._v(\"*\")])]), _c(\"b-form-radio-group\", {\n    staticClass: \"w-100\",\n    attrs: {\n      id: \"radio-group-1\",\n      options: _vm.roleOptions,\n      buttons: \"\",\n      name: \"radios-btn-default\",\n      \"button-variant\": \"outline-primary w-100\"\n    },\n    on: {\n      change: _vm.chek_role\n    },\n    model: {\n      value: _vm.form.role,\n      callback: function callback($$v) {\n        _vm.$set(_vm.form, \"role\", $$v);\n      },\n      expression: \"form.role\"\n    }\n  }), _vm.show_testing_alert == true ? _c(\"p\", {\n    staticClass: \"mb-4 text-center text-primary mt-4\"\n  }, [_vm._v(\" \" + _vm._s(_vm.lang(\"auth.messages.testing\")) + \" \")]) : _vm._e(), _vm.formErrors.role ? _c(\"div\", {\n    staticClass: \"invalid-feedback d-block\"\n  }, [_vm._v(_vm._s(_vm.formErrors.role[0]))]) : _vm._e()], 1), _c(\"div\", {\n    staticClass: \"form-group\"\n  }, [_c(\"label\", {\n    attrs: {\n      for: \"username\"\n    }\n  }, [_vm._v(_vm._s(_vm.lang(\"layout.fields.business_name\"))), _c(\"span\", {\n    staticClass: \"text-red-500 px-1\"\n  }, [_vm._v(\"*\")])]), _c(\"input\", {\n    directives: [{\n      name: \"model\",\n      rawName: \"v-model\",\n      value: _vm.form.username,\n      expression: \"form.username\"\n    }],\n    staticClass: \"form-control\",\n    class: {\n      \"is-invalid\": _vm.formErrors.username\n    },\n    attrs: {\n      type: \"text\",\n      id: \"username\"\n    },\n    domProps: {\n      value: _vm.form.username\n    },\n    on: {\n      input: function input($event) {\n        if ($event.target.composing) return;\n\n        _vm.$set(_vm.form, \"username\", $event.target.value);\n      }\n    }\n  }), _vm.formErrors.username ? _c(\"div\", {\n    staticClass: \"invalid-feedback\"\n  }, [_vm._v(_vm._s(_vm.formErrors.username[0]))]) : _vm._e()]), _c(\"div\", {\n    staticClass: \"form-group\"\n  }, [_c(\"label\", {\n    attrs: {\n      for: \"email\"\n    }\n  }, [_vm._v(_vm._s(_vm.lang(\"layout.fields.email\"))), _c(\"span\", {\n    staticClass: \"text-red-500 px-1\"\n  }, [_vm._v(\"*\")])]), _c(\"input\", {\n    directives: [{\n      name: \"model\",\n      rawName: \"v-model\",\n      value: _vm.form.email,\n      expression: \"form.email\"\n    }],\n    staticClass: \"form-control\",\n    class: {\n      \"is-invalid\": _vm.formErrors.email\n    },\n    attrs: {\n      type: \"email\",\n      id: \"email\"\n    },\n    domProps: {\n      value: _vm.form.email\n    },\n    on: {\n      input: function input($event) {\n        if ($event.target.composing) return;\n\n        _vm.$set(_vm.form, \"email\", $event.target.value);\n      }\n    }\n  }), _vm.formErrors.email ? _c(\"div\", {\n    staticClass: \"invalid-feedback\"\n  }, [_vm._v(_vm._s(_vm.formErrors.email[0]))]) : _vm._e()]), _c(\"div\", {\n    staticClass: \"form-group\"\n  }, [_c(\"label\", {\n    attrs: {\n      for: \"password\"\n    }\n  }, [_vm._v(_vm._s(_vm.lang(\"layout.fields.password\"))), _c(\"span\", {\n    staticClass: \"text-red-500 px-1\"\n  }, [_vm._v(\"*\")])]), _c(\"input\", {\n    directives: [{\n      name: \"model\",\n      rawName: \"v-model\",\n      value: _vm.form.password,\n      expression: \"form.password\"\n    }],\n    staticClass: \"form-control\",\n    class: {\n      \"is-invalid\": _vm.formErrors.password\n    },\n    attrs: {\n      type: \"password\",\n      id: \"password\"\n    },\n    domProps: {\n      value: _vm.form.password\n    },\n    on: {\n      input: function input($event) {\n        if ($event.target.composing) return;\n\n        _vm.$set(_vm.form, \"password\", $event.target.value);\n      }\n    }\n  }), _vm.formErrors.password ? _c(\"div\", {\n    staticClass: \"invalid-feedback\"\n  }, [_vm._v(_vm._s(_vm.formErrors.password[0]))]) : _vm._e()]), _c(\"button\", {\n    staticClass: \"btn btn-primary w-100 mt-4\",\n    attrs: {\n      disabled: _vm.loading\n    },\n    on: {\n      click: function click($event) {\n        $event.preventDefault();\n        return _vm.submit.apply(null, arguments);\n      }\n    }\n  }, [_vm.loading ? _c(\"b-spinner\", {\n    staticStyle: {\n      \"vertical-align\": \"middle\"\n    },\n    attrs: {\n      small: \"\"\n    }\n  }) : _vm._e(), _vm._v(\" \" + _vm._s(_vm.lang(\"auth.buttons.register\")) + \" \")], 1), _c(\"div\", {\n    staticClass: \"text-center mt-4\"\n  }, [_c(\"router-link\", {\n    staticClass: \"text-center d-block\",\n    attrs: {\n      to: {\n        name: \"login\"\n      }\n    }\n  }, [_vm._v(\" \" + _vm._s(_vm.lang(\"auth.links.login\")) + \" \")])], 1)])])])])])])])], 1);\n};\n\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/views/app/sessions/register.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%227a292758-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/sessions/register.vue?vue&type=style&index=0&id=3270d386&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/sessions/register.vue?vue&type=style&index=0&id=3270d386&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".spinner.sm {\\n  height: 2em;\\n  width: 2em;\\n}\\n.btn_tuto {\\n  background-color: #cd00fc;\\n  border-radius: 23px;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"C:/Users/USER 2/Desktop/Youness/codrocket-app/src/views/app/sessions/C:/Users/USER 2/Desktop/Youness/codrocket-app/src/views/app/sessions/register.vue\"],\"names\":[],\"mappings\":\"AACA;EACC,WAAW;EACX,UAAU;AAAA;AAEX;EACC,yBAAyB;EACzB,mBAAmB;AAAA\",\"file\":\"register.vue\",\"sourcesContent\":[\"\\r\\n.spinner.sm {\\r\\n\\theight: 2em;\\r\\n\\twidth: 2em;\\r\\n}\\r\\n.btn_tuto {\\r\\n\\tbackground-color: #cd00fc;\\r\\n\\tborder-radius: 23px;\\r\\n}\\r\\n.tuto_title {\\r\\n}\\r\\n\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/views/app/sessions/register.vue?./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/sessions/register.vue?vue&type=style&index=0&id=3270d386&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/sessions/register.vue?vue&type=style&index=0&id=3270d386&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=style&index=0&id=3270d386&lang=scss& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/sessions/register.vue?vue&type=style&index=0&id=3270d386&lang=scss&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"ca9c1a36\", content, false, {\"sourceMap\":true,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/views/app/sessions/register.vue?./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/assets/images/main-logo-light.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/main-logo-light.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/main-logo-light.b796e857.svg\";\n\n//# sourceURL=webpack:///./src/assets/images/main-logo-light.svg?");

/***/ }),

/***/ "./src/assets/images/photo-long-3.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/photo-long-3.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/photo-long-3.f4e38da9.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/photo-long-3.jpg?");

/***/ }),

/***/ "./src/assets/images/photo-wide-4.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/photo-wide-4.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/photo-wide-4.2e142cde.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/photo-wide-4.jpg?");

/***/ }),

/***/ "./src/views/app/sessions/register.vue":
/*!*********************************************!*\
  !*** ./src/views/app/sessions/register.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _register_vue_vue_type_template_id_3270d386___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=3270d386& */ \"./src/views/app/sessions/register.vue?vue&type=template&id=3270d386&\");\n/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ \"./src/views/app/sessions/register.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _register_vue_vue_type_style_index_0_id_3270d386_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.vue?vue&type=style&index=0&id=3270d386&lang=scss& */ \"./src/views/app/sessions/register.vue?vue&type=style&index=0&id=3270d386&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _register_vue_vue_type_template_id_3270d386___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _register_vue_vue_type_template_id_3270d386___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/app/sessions/register.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/app/sessions/register.vue?");

/***/ }),

/***/ "./src/views/app/sessions/register.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/views/app/sessions/register.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/sessions/register.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/app/sessions/register.vue?");

/***/ }),

/***/ "./src/views/app/sessions/register.vue?vue&type=style&index=0&id=3270d386&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./src/views/app/sessions/register.vue?vue&type=style&index=0&id=3270d386&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_3270d386_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=style&index=0&id=3270d386&lang=scss& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/sessions/register.vue?vue&type=style&index=0&id=3270d386&lang=scss&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_3270d386_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_3270d386_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_3270d386_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_3270d386_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/views/app/sessions/register.vue?");

/***/ }),

/***/ "./src/views/app/sessions/register.vue?vue&type=template&id=3270d386&":
/*!****************************************************************************!*\
  !*** ./src/views/app/sessions/register.vue?vue&type=template&id=3270d386& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7a292758_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_3270d386___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7a292758-vue-loader-template\"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=3270d386& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"7a292758-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/sessions/register.vue?vue&type=template&id=3270d386&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7a292758_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_3270d386___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7a292758_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_3270d386___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/app/sessions/register.vue?");

/***/ })

}]);