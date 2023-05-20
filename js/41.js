(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/sessions/register.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/sessions/register.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_USER_2_Desktop_Youness_codrocket_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _parts_common_tutorial_panel_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../parts/common/tutorial_panel.vue */ \"./src/views/parts/common/tutorial_panel.vue\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  metaInfo: {\n    title: \"S'inscrire - Gestion des colis e-commerce  |  Livraison e-commerce au Maroc  | codrocket.com\",\n    meta: [{\n      name: 'description',\n      content: 'Créez votre compte sur notre plateforme COD Rocket dediée à la gestion des ventes avec système de paiement à la livraison. Nous fournissons tous les services qui aident les e-commerçants et les distributeurs au Maroc à gérer leur business de manière professionnelle.'\n    }]\n  },\n  data: function data() {\n    return {\n      help_id: 1,\n      open: false,\n      currentStep: 1,\n      bgImage: __webpack_require__(/*! @/assets/images/photo-wide-4.jpg */ \"./src/assets/images/photo-wide-4.jpg\"),\n      logo: __webpack_require__(/*! @/assets/images/main-logo-light.svg */ \"./src/assets/images/main-logo-light.svg\"),\n      signInImage: __webpack_require__(/*! @/assets/images/photo-long-3.jpg */ \"./src/assets/images/photo-long-3.jpg\"),\n      form: {\n        role: 'merchant'\n      },\n      formErrors: {},\n      selected: 'merchant',\n      roleOptions: [{\n        value: 'merchant',\n        text: this.lang('auth.buttons.merchant'),\n        description: this.lang('auth.merchant_role_description')\n      }, {\n        value: 'deliverer',\n        text: this.lang('auth.buttons.deliverer'),\n        description: this.lang('auth.deliverer_role_description')\n      }],\n      loading: false,\n      show_testing_alert: false,\n      show_tuto: true,\n      referral: null\n    };\n  },\n  components: {\n    Tutorialpanel: _parts_common_tutorial_panel_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  computed: Object(C_Users_USER_2_Desktop_Youness_codrocket_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(C_Users_USER_2_Desktop_Youness_codrocket_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__[\"mapGetters\"])(['getLanguage'])), {}, {\n    isActive: function isActive() {\n      var _this = this;\n\n      return function (lang) {\n        return lang == _this.getLanguage;\n      };\n    }\n  }),\n  created: function created() {\n    if (this.$route.query.ref) {\n      localStorage.setItem('ref', this.$route.query.ref);\n    }\n  },\n  methods: Object(C_Users_USER_2_Desktop_Youness_codrocket_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(C_Users_USER_2_Desktop_Youness_codrocket_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__[\"mapActions\"])(['register'])), {}, {\n    changeLanguage: function changeLanguage(lang) {\n      this.$store.commit('setLanguage', lang);\n    },\n\n    /**\r\n     * submit register form\r\n     */\n    submit: function submit() {\n      var _this2 = this;\n\n      this.loading = true;\n      this.formErrors = {};\n      this.register(this.form).then(function (res) {\n        if (res.status === 'error') {\n          _this2.loading = false;\n          _this2.formErrors = res.data;\n        }\n      }).catch(function () {\n        _this2.loading = false;\n        swal.toast(_this2.lang('messages.server_error'), 'error');\n      });\n    },\n    chek_role: function chek_role() {\n      if (this.form.role == 'merchant') {\n        this.show_testing_alert = false;\n      } else {\n        this.show_testing_alert = false;\n      }\n    },\n    toggle_tuto_panel: function toggle_tuto_panel() {\n      this.open = !this.open;\n    }\n  }),\n  watch: {\n    form: function form(newVal, oldVal) {}\n  }\n});\n\n//# sourceURL=webpack:///./src/views/app/sessions/register.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7a292758-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/sessions/register.vue?vue&type=template&id=3270d386&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7a292758-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/sessions/register.vue?vue&type=template&id=3270d386& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar render = function render() {\n  var _vm = this,\n      _c = _vm._self._c;\n\n  return _c(\"div\", [_c(\"Tutorialpanel\", {\n    attrs: {\n      show: _vm.open,\n      id: _vm.help_id\n    }\n  }), _c(\"div\", {\n    staticClass: \"bg-gray-50 h-screen\"\n  }, [_c(\"div\", {\n    staticClass: \"register p-0\"\n  }, [_c(\"div\", {\n    staticClass: \"rounded-0 w-full mx-auto\"\n  }, [_c(\"div\", {\n    staticClass: \"relative w-full p-4 mb-2 bg-primary border-r flex justify-center flex-col\",\n    staticStyle: {\n      height: \"50vh\"\n    }\n  }, [_c(\"router-link\", {\n    staticClass: \"mb-5 md:mb-0 block w-full self-center h-16 md:h-20 bg-contain bg-no-repeat bg-center open\",\n    style: \"background-image: url(\".concat(_vm.logo, \")\"),\n    attrs: {\n      to: \"/\"\n    }\n  }), _c(\"ul\", {\n    staticClass: \"text-white flex mx-auto\"\n  }, [_c(\"li\", {\n    staticClass: \"hover:bg-white hover:text-purple-900 w-24 -mr-px text-center cursor-pointer border border-white px-2 py-1\",\n    class: {\n      \"bg-white text-primary\": _vm.isActive(\"en\")\n    },\n    on: {\n      click: function click($event) {\n        $event.preventDefault();\n        return _vm.changeLanguage(\"en\");\n      }\n    }\n  }, [_vm._v(\" English \")]), _c(\"li\", {\n    staticClass: \"hover:bg-white hover:text-purple-900 w-24 text-center cursor-pointer border border-white px-2 py-1\",\n    class: {\n      \"bg-white text-primary\": _vm.isActive(\"ar\")\n    },\n    on: {\n      click: function click($event) {\n        $event.preventDefault();\n        return _vm.changeLanguage(\"ar\");\n      }\n    }\n  }, [_vm._v(\" العربية \")])])], 1), _c(\"div\", {\n    staticClass: \"p-4 -mt-32 relative\"\n  }, [_vm.currentStep == 1 ? _c(\"div\", {\n    staticClass: \"flex flex-wrap w-full md:w-3/4 lg:w-1/2 xl:w-2/5 mx-auto bg-white rounded-lg mine-shadow overflow-hidden\"\n  }, [_c(\"div\", {\n    staticClass: \"w-full p-4\"\n  }, [_c(\"div\", {\n    staticClass: \"w-full text-center mx-auto\"\n  }, [_c(\"h1\", {\n    staticClass: \"text-center text-xl\"\n  }, [_vm._v(_vm._s(_vm.lang(\"auth.register\")))])]), _c(\"form\", [_c(\"p\", {\n    staticClass: \"text-center\"\n  }, [_vm._v(\" \" + _vm._s(_vm.lang(\"auth.already_have_account\")) + \" \"), _c(\"router-link\", {\n    staticClass: \"text-center text-primary\",\n    attrs: {\n      to: {\n        name: \"login\"\n      }\n    }\n  }, [_vm._v(\" \" + _vm._s(_vm.lang(\"auth.buttons.login\")) + \" \")])], 1), _c(\"div\", {\n    staticClass: \"border-t border-gray-300 py-3\"\n  }, [_c(\"p\", [_vm._v(_vm._s(_vm.lang(\"auth.please_choose_account_type\")))]), _c(\"div\", {\n    staticClass: \"grid grid-cols-1 md:grid-cols-3 gap-4 mt-3\"\n  }, [_vm._l(_vm.roleOptions, function (role) {\n    return _c(\"div\", {\n      key: role.value\n    }, [_c(\"input\", {\n      directives: [{\n        name: \"model\",\n        rawName: \"v-model\",\n        value: _vm.form.role,\n        expression: \"form.role\"\n      }],\n      staticClass: \"hidden user-role\",\n      attrs: {\n        id: role.value,\n        name: \"role\",\n        type: \"radio\"\n      },\n      domProps: {\n        value: role.value,\n        checked: _vm._q(_vm.form.role, role.value)\n      },\n      on: {\n        change: function change($event) {\n          return _vm.$set(_vm.form, \"role\", role.value);\n        }\n      }\n    }), _c(\"label\", {\n      staticClass: \"user-role-label border bg-gray-50 cursor-pointer border-gray-700 rounded-lg flex flex-col items-center py-4\",\n      attrs: {\n        for: role.value\n      }\n    }, [_c(\"img\", {\n      staticClass: \"w-11 mx-auto\",\n      attrs: {\n        loading: \"lazy\",\n        src: __webpack_require__(\"./src/assets sync recursive ^\\\\.\\\\/.*\\\\.png$\")(\"./\" + role.value + \".png\"),\n        alt: \"\"\n      }\n    }), _c(\"span\", {\n      staticClass: \"font-bold mt-2\"\n    }, [_vm._v(_vm._s(role.text))]), _c(\"p\", {\n      staticClass: \"text-center text-xs px-3 mb-0 mt-1 text-gray-400\"\n    }, [_vm._v(_vm._s(role.description))])])]);\n  }), _c(\"div\", [_c(\"router-link\", {\n    staticClass: \"user-role-label border bg-gray-50 cursor-pointer border-gray-700 rounded-lg flex flex-col items-center py-4\",\n    attrs: {\n      tag: \"label\",\n      to: {\n        name: \"freelancer.register\"\n      }\n    }\n  }, [_c(\"img\", {\n    staticClass: \"w-11 mx-auto\",\n    attrs: {\n      loading: \"lazy\",\n      src: __webpack_require__(/*! @/assets/freelancer.png */ \"./src/assets/freelancer.png\"),\n      alt: \"\"\n    }\n  }), _c(\"span\", {\n    staticClass: \"font-bold mt-2\"\n  }, [_vm._v(_vm._s(_vm.lang(\"auth.buttons.freelancer\")))]), _c(\"p\", {\n    staticClass: \"text-center text-xs px-3 mb-0 mt-1 text-gray-400\"\n  }, [_vm._v(\" \" + _vm._s(_vm.lang(\"auth.freelancer_role_description\")) + \" \")])])], 1)], 2)]), _c(\"div\", {\n    staticClass: \"w-full flex justify-end\"\n  }, [_c(\"button\", {\n    staticClass: \"w-full md:w-auto justify-center items-center btn btn-primary mt-4 text-14\",\n    staticStyle: {\n      display: \"flex\"\n    },\n    on: {\n      click: function click($event) {\n        _vm.currentStep = 2;\n      }\n    }\n  }, [_vm._v(\" \" + _vm._s(_vm.lang(\"layout.buttons.next\")) + \" \"), _c(\"svg\", {\n    staticClass: \"w-6 h-6 px-1\",\n    attrs: {\n      xmlns: \"http://www.w3.org/2000/svg\",\n      fill: \"none\",\n      viewBox: \"0 0 24 24\",\n      \"stroke-width\": \"1.5\",\n      stroke: \"currentColor\"\n    }\n  }, [_c(\"path\", {\n    attrs: {\n      \"stroke-linecap\": \"round\",\n      \"stroke-linejoin\": \"round\",\n      d: \"M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75\"\n    }\n  })])])])])])]) : _vm._e(), _vm.currentStep == 2 ? _c(\"div\", {\n    staticClass: \"flex-wrap w-full md:w-3/4 lg:w-1/2 xl:w-2/5 mx-auto bg-white rounded-lg mine-shadow overflow-hidden\"\n  }, [_c(\"div\", {\n    staticClass: \"w-full p-4\"\n  }, [_c(\"div\", {\n    staticClass: \"w-full flex justify-between items-center\"\n  }, [_c(\"h1\", {\n    staticClass: \"text-center text-md-left text-xl\"\n  }, [_vm._v(_vm._s(_vm.lang(\"auth.register\")))]), _c(\"span\", {\n    staticClass: \"btn_tuto opacity-70 rounded-md p-1 cursor-pointer justify-center items-center px-2 text-white\",\n    on: {\n      click: function click($event) {\n        return _vm.toggle_tuto_panel();\n      }\n    }\n  }, [_vm._v(_vm._s(_vm.lang(\"auth.show_tuto\")))])]), _c(\"form\", [_c(\"div\", {\n    staticClass: \"form-group\"\n  }, [_c(\"label\", {\n    attrs: {\n      for: \"username\"\n    }\n  }, [_vm._v(_vm._s(_vm.lang(\"layout.fields.business_name\"))), _c(\"span\", {\n    staticClass: \"text-red-500 px-1\"\n  }, [_vm._v(\"*\")])]), _c(\"input\", {\n    directives: [{\n      name: \"model\",\n      rawName: \"v-model\",\n      value: _vm.form.username,\n      expression: \"form.username\"\n    }],\n    staticClass: \"form-control\",\n    class: {\n      \"is-invalid\": _vm.formErrors.username\n    },\n    attrs: {\n      type: \"text\",\n      id: \"username\"\n    },\n    domProps: {\n      value: _vm.form.username\n    },\n    on: {\n      input: function input($event) {\n        if ($event.target.composing) return;\n\n        _vm.$set(_vm.form, \"username\", $event.target.value);\n      }\n    }\n  }), _vm.formErrors.username ? _c(\"div\", {\n    staticClass: \"invalid-feedback\"\n  }, [_vm._v(_vm._s(_vm.formErrors.username[0]))]) : _vm._e()]), _c(\"div\", {\n    staticClass: \"form-group\"\n  }, [_c(\"label\", {\n    attrs: {\n      for: \"email\"\n    }\n  }, [_vm._v(_vm._s(_vm.lang(\"layout.fields.email\"))), _c(\"span\", {\n    staticClass: \"text-red-500 px-1\"\n  }, [_vm._v(\"*\")])]), _c(\"input\", {\n    directives: [{\n      name: \"model\",\n      rawName: \"v-model\",\n      value: _vm.form.email,\n      expression: \"form.email\"\n    }],\n    staticClass: \"form-control\",\n    class: {\n      \"is-invalid\": _vm.formErrors.email\n    },\n    attrs: {\n      type: \"email\",\n      id: \"email\"\n    },\n    domProps: {\n      value: _vm.form.email\n    },\n    on: {\n      input: function input($event) {\n        if ($event.target.composing) return;\n\n        _vm.$set(_vm.form, \"email\", $event.target.value);\n      }\n    }\n  }), _vm.formErrors.email ? _c(\"div\", {\n    staticClass: \"invalid-feedback\"\n  }, [_vm._v(_vm._s(_vm.formErrors.email[0]))]) : _vm._e()]), _c(\"div\", {\n    staticClass: \"form-group\"\n  }, [_c(\"label\", {\n    attrs: {\n      for: \"password\"\n    }\n  }, [_vm._v(_vm._s(_vm.lang(\"layout.fields.password\"))), _c(\"span\", {\n    staticClass: \"text-red-500 px-1\"\n  }, [_vm._v(\"*\")])]), _c(\"input\", {\n    directives: [{\n      name: \"model\",\n      rawName: \"v-model\",\n      value: _vm.form.password,\n      expression: \"form.password\"\n    }],\n    staticClass: \"form-control\",\n    class: {\n      \"is-invalid\": _vm.formErrors.password\n    },\n    attrs: {\n      type: \"password\",\n      id: \"password\"\n    },\n    domProps: {\n      value: _vm.form.password\n    },\n    on: {\n      input: function input($event) {\n        if ($event.target.composing) return;\n\n        _vm.$set(_vm.form, \"password\", $event.target.value);\n      }\n    }\n  }), _vm.formErrors.password ? _c(\"div\", {\n    staticClass: \"invalid-feedback\"\n  }, [_vm._v(_vm._s(_vm.formErrors.password[0]))]) : _vm._e()]), _c(\"div\", {\n    staticClass: \"w-full flex mt-3\"\n  }, [_c(\"div\", {\n    staticClass: \"w-1/3 md:w-1/2\"\n  }, [_c(\"button\", {\n    staticClass: \"w-full justify-center items-center md:w-auto btn btn-secondary text-14\",\n    staticStyle: {\n      display: \"flex\"\n    },\n    on: {\n      click: function click($event) {\n        _vm.currentStep = 1;\n      }\n    }\n  }, [_c(\"svg\", {\n    staticClass: \"w-6 h-6 px-1\",\n    attrs: {\n      xmlns: \"http://www.w3.org/2000/svg\",\n      fill: \"none\",\n      viewBox: \"0 0 24 24\",\n      \"stroke-width\": \"1.5\",\n      stroke: \"currentColor\"\n    }\n  }, [_c(\"path\", {\n    attrs: {\n      \"stroke-linecap\": \"round\",\n      \"stroke-linejoin\": \"round\",\n      d: \"M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75\"\n    }\n  })]), _vm._v(\" \" + _vm._s(_vm.lang(\"layout.buttons.back\")) + \" \")])]), _c(\"div\", {\n    staticClass: \"w-2/3 md:w-1/2 flex justify-end ml-1 md:ml-0\"\n  }, [_c(\"button\", {\n    staticClass: \"w-full justify-center items-center md:w-auto btn btn-primary text-14\",\n    staticStyle: {\n      display: \"flex\"\n    },\n    attrs: {\n      disabled: _vm.loading\n    },\n    on: {\n      click: function click($event) {\n        $event.preventDefault();\n        return _vm.submit.apply(null, arguments);\n      }\n    }\n  }, [_vm.loading ? _c(\"b-spinner\", {\n    staticStyle: {\n      \"vertical-align\": \"middle\"\n    },\n    attrs: {\n      small: \"\"\n    }\n  }) : _vm._e(), _vm._v(\" \" + _vm._s(_vm.lang(\"auth.buttons.register\")) + \" \"), _c(\"svg\", {\n    staticClass: \"w-6 h-6 px-1\",\n    attrs: {\n      xmlns: \"http://www.w3.org/2000/svg\",\n      fill: \"none\",\n      viewBox: \"0 0 24 24\",\n      \"stroke-width\": \"1.5\",\n      stroke: \"currentColor\"\n    }\n  }, [_c(\"path\", {\n    attrs: {\n      \"stroke-linecap\": \"round\",\n      \"stroke-linejoin\": \"round\",\n      d: \"M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75\"\n    }\n  })])], 1)])])])])]) : _vm._e()])])])])], 1);\n};\n\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/views/app/sessions/register.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%227a292758-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/sessions/register.vue?vue&type=style&index=0&id=3270d386&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/sessions/register.vue?vue&type=style&index=0&id=3270d386&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".spinner.sm {\\n  height: 2em;\\n  width: 2em;\\n}\\n.btn_tuto {\\n  background-color: #cd00fc;\\n  border-radius: 23px;\\n}\\nlabel.user-role-label img {\\n  -webkit-filter: grayscale(100%);\\n          filter: grayscale(100%);\\n}\\nlabel.user-role-label {\\n  border-radius: 0.3rem !important;\\n}\\ninput[type='radio'].user-role:checked + label {\\n  outline: 2px #792e88 solid !important;\\n  background: #792e881a;\\n}\\ninput[type='radio'].user-role:checked + label img {\\n  -webkit-filter: grayscale(0%);\\n          filter: grayscale(0%);\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"C:/Users/USER 2/Desktop/Youness/codrocket-app/src/views/app/sessions/C:/Users/USER 2/Desktop/Youness/codrocket-app/src/views/app/sessions/register.vue\"],\"names\":[],\"mappings\":\"AACA;EACC,WAAW;EACX,UAAU;AAAA;AAEX;EACC,yBAAyB;EACzB,mBAAmB;AAAA;AAGpB;EACC,+BAAuB;UAAvB,uBAAuB;AAAA;AAGxB;EACC,gCAAgC;AAAA;AAEjC;EACC,qCAAqC;EACrC,qBAAqB;AAAA;AAGtB;EACC,6BAAqB;UAArB,qBAAqB;AAAA\",\"file\":\"register.vue\",\"sourcesContent\":[\"\\r\\n.spinner.sm {\\r\\n\\theight: 2em;\\r\\n\\twidth: 2em;\\r\\n}\\r\\n.btn_tuto {\\r\\n\\tbackground-color: #cd00fc;\\r\\n\\tborder-radius: 23px;\\r\\n}\\r\\n\\r\\nlabel.user-role-label img {\\r\\n\\tfilter: grayscale(100%);\\r\\n}\\r\\n\\r\\nlabel.user-role-label {\\r\\n\\tborder-radius: 0.3rem !important;\\r\\n}\\r\\ninput[type='radio'].user-role:checked + label {\\r\\n\\toutline: 2px #792e88 solid !important;\\r\\n\\tbackground: #792e881a;\\r\\n}\\r\\n\\r\\ninput[type='radio'].user-role:checked + label img {\\r\\n\\tfilter: grayscale(0%);\\r\\n}\\r\\n\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/views/app/sessions/register.vue?./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/sessions/register.vue?vue&type=style&index=0&id=3270d386&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/sessions/register.vue?vue&type=style&index=0&id=3270d386&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=style&index=0&id=3270d386&lang=scss& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/sessions/register.vue?vue&type=style&index=0&id=3270d386&lang=scss&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"ca9c1a36\", content, false, {\"sourceMap\":true,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/views/app/sessions/register.vue?./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/assets sync recursive ^\\.\\/.*\\.png$":
/*!***************************************!*\
  !*** ./src/assets sync ^\.\/.*\.png$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./analytics/staff-graph.png\": \"./src/assets/analytics/staff-graph.png\",\n\t\"./analytics/top-products.png\": \"./src/assets/analytics/top-products.png\",\n\t\"./analytics/top-staff.png\": \"./src/assets/analytics/top-staff.png\",\n\t\"./auth/deliverer.png\": \"./src/assets/auth/deliverer.png\",\n\t\"./auth/freelancer.png\": \"./src/assets/auth/freelancer.png\",\n\t\"./auth/merchant.png\": \"./src/assets/auth/merchant.png\",\n\t\"./deliverer.png\": \"./src/assets/deliverer.png\",\n\t\"./freelancer.png\": \"./src/assets/freelancer.png\",\n\t\"./images/Angular_Icon.png\": \"./src/assets/images/Angular_Icon.png\",\n\t\"./images/Html_Icon.png\": \"./src/assets/images/Html_Icon.png\",\n\t\"./images/Sass_icon.png\": \"./src/assets/images/Sass_icon.png\",\n\t\"./images/bg-1.png\": \"./src/assets/images/bg-1.png\",\n\t\"./images/bootstrap-logo.png\": \"./src/assets/images/bootstrap-logo.png\",\n\t\"./images/coming-soon.png\": \"./src/assets/images/coming-soon.png\",\n\t\"./images/gull-large-sidebar.png\": \"./src/assets/images/gull-large-sidebar.png\",\n\t\"./images/laravel-logo.png\": \"./src/assets/images/laravel-logo.png\",\n\t\"./images/logo-text.png\": \"./src/assets/images/logo-text.png\",\n\t\"./images/logo.png\": \"./src/assets/images/logo.png\",\n\t\"./images/master-card.png\": \"./src/assets/images/master-card.png\",\n\t\"./images/no-orders.png\": \"./src/assets/images/no-orders.png\",\n\t\"./images/page-bg-bottom.png\": \"./src/assets/images/page-bg-bottom.png\",\n\t\"./images/paypal.png\": \"./src/assets/images/paypal.png\",\n\t\"./images/products/cloud-346710_1280.png\": \"./src/assets/images/products/cloud-346710_1280.png\",\n\t\"./images/screenshots/02_preview.png\": \"./src/assets/images/screenshots/02_preview.png\",\n\t\"./images/screenshots/04_preview.png\": \"./src/assets/images/screenshots/04_preview.png\",\n\t\"./images/screenshots/dashboard.v1.png\": \"./src/assets/images/screenshots/dashboard.v1.png\",\n\t\"./images/screenshots/dashboard.v2.png\": \"./src/assets/images/screenshots/dashboard.v2.png\",\n\t\"./images/screenshots/verticallayout.png\": \"./src/assets/images/screenshots/verticallayout.png\",\n\t\"./images/visa.png\": \"./src/assets/images/visa.png\",\n\t\"./logo.png\": \"./src/assets/logo.png\",\n\t\"./merchant.png\": \"./src/assets/merchant.png\",\n\t\"./payments/balance.png\": \"./src/assets/payments/balance.png\",\n\t\"./payments/stripe.png\": \"./src/assets/payments/stripe.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets sync recursive ^\\\\.\\\\/.*\\\\.png$\";\n\n//# sourceURL=webpack:///./src/assets_sync_^\\.\\/.*\\.png$?");

/***/ }),

/***/ "./src/assets/analytics/staff-graph.png":
/*!**********************************************!*\
  !*** ./src/assets/analytics/staff-graph.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/staff-graph.b4240728.png\";\n\n//# sourceURL=webpack:///./src/assets/analytics/staff-graph.png?");

/***/ }),

/***/ "./src/assets/analytics/top-products.png":
/*!***********************************************!*\
  !*** ./src/assets/analytics/top-products.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/top-products.7f75c946.png\";\n\n//# sourceURL=webpack:///./src/assets/analytics/top-products.png?");

/***/ }),

/***/ "./src/assets/analytics/top-staff.png":
/*!********************************************!*\
  !*** ./src/assets/analytics/top-staff.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/top-staff.eb0e7b8c.png\";\n\n//# sourceURL=webpack:///./src/assets/analytics/top-staff.png?");

/***/ }),

/***/ "./src/assets/auth/deliverer.png":
/*!***************************************!*\
  !*** ./src/assets/auth/deliverer.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/deliverer.972a86ad.png\";\n\n//# sourceURL=webpack:///./src/assets/auth/deliverer.png?");

/***/ }),

/***/ "./src/assets/auth/freelancer.png":
/*!****************************************!*\
  !*** ./src/assets/auth/freelancer.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/freelancer.a360b067.png\";\n\n//# sourceURL=webpack:///./src/assets/auth/freelancer.png?");

/***/ }),

/***/ "./src/assets/auth/merchant.png":
/*!**************************************!*\
  !*** ./src/assets/auth/merchant.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/merchant.ec8da83c.png\";\n\n//# sourceURL=webpack:///./src/assets/auth/merchant.png?");

/***/ }),

/***/ "./src/assets/deliverer.png":
/*!**********************************!*\
  !*** ./src/assets/deliverer.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/deliverer.2420e304.png\";\n\n//# sourceURL=webpack:///./src/assets/deliverer.png?");

/***/ }),

/***/ "./src/assets/freelancer.png":
/*!***********************************!*\
  !*** ./src/assets/freelancer.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/freelancer.feb56c95.png\";\n\n//# sourceURL=webpack:///./src/assets/freelancer.png?");

/***/ }),

/***/ "./src/assets/images/Angular_Icon.png":
/*!********************************************!*\
  !*** ./src/assets/images/Angular_Icon.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/Angular_Icon.8ca579fd.png\";\n\n//# sourceURL=webpack:///./src/assets/images/Angular_Icon.png?");

/***/ }),

/***/ "./src/assets/images/Html_Icon.png":
/*!*****************************************!*\
  !*** ./src/assets/images/Html_Icon.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/Html_Icon.6c724ec7.png\";\n\n//# sourceURL=webpack:///./src/assets/images/Html_Icon.png?");

/***/ }),

/***/ "./src/assets/images/Sass_icon.png":
/*!*****************************************!*\
  !*** ./src/assets/images/Sass_icon.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/Sass_icon.ffb9976a.png\";\n\n//# sourceURL=webpack:///./src/assets/images/Sass_icon.png?");

/***/ }),

/***/ "./src/assets/images/bg-1.png":
/*!************************************!*\
  !*** ./src/assets/images/bg-1.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/bg-1.26341795.png\";\n\n//# sourceURL=webpack:///./src/assets/images/bg-1.png?");

/***/ }),

/***/ "./src/assets/images/bootstrap-logo.png":
/*!**********************************************!*\
  !*** ./src/assets/images/bootstrap-logo.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/bootstrap-logo.7e0c7538.png\";\n\n//# sourceURL=webpack:///./src/assets/images/bootstrap-logo.png?");

/***/ }),

/***/ "./src/assets/images/coming-soon.png":
/*!*******************************************!*\
  !*** ./src/assets/images/coming-soon.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/coming-soon.be75c0c7.png\";\n\n//# sourceURL=webpack:///./src/assets/images/coming-soon.png?");

/***/ }),

/***/ "./src/assets/images/gull-large-sidebar.png":
/*!**************************************************!*\
  !*** ./src/assets/images/gull-large-sidebar.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/gull-large-sidebar.2ad0cc0a.png\";\n\n//# sourceURL=webpack:///./src/assets/images/gull-large-sidebar.png?");

/***/ }),

/***/ "./src/assets/images/laravel-logo.png":
/*!********************************************!*\
  !*** ./src/assets/images/laravel-logo.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/laravel-logo.d1390764.png\";\n\n//# sourceURL=webpack:///./src/assets/images/laravel-logo.png?");

/***/ }),

/***/ "./src/assets/images/logo-text.png":
/*!*****************************************!*\
  !*** ./src/assets/images/logo-text.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/logo-text.57f54f2a.png\";\n\n//# sourceURL=webpack:///./src/assets/images/logo-text.png?");

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/logo.bc089e74.png\";\n\n//# sourceURL=webpack:///./src/assets/images/logo.png?");

/***/ }),

/***/ "./src/assets/images/main-logo-light.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/main-logo-light.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/main-logo-light.b796e857.svg\";\n\n//# sourceURL=webpack:///./src/assets/images/main-logo-light.svg?");

/***/ }),

/***/ "./src/assets/images/master-card.png":
/*!*******************************************!*\
  !*** ./src/assets/images/master-card.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,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\"\n\n//# sourceURL=webpack:///./src/assets/images/master-card.png?");

/***/ }),

/***/ "./src/assets/images/no-orders.png":
/*!*****************************************!*\
  !*** ./src/assets/images/no-orders.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/no-orders.ad6385d8.png\";\n\n//# sourceURL=webpack:///./src/assets/images/no-orders.png?");

/***/ }),

/***/ "./src/assets/images/paypal.png":
/*!**************************************!*\
  !*** ./src/assets/images/paypal.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,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\"\n\n//# sourceURL=webpack:///./src/assets/images/paypal.png?");

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

/***/ "./src/assets/images/products/cloud-346710_1280.png":
/*!**********************************************************!*\
  !*** ./src/assets/images/products/cloud-346710_1280.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/cloud-346710_1280.687c25bf.png\";\n\n//# sourceURL=webpack:///./src/assets/images/products/cloud-346710_1280.png?");

/***/ }),

/***/ "./src/assets/images/screenshots/02_preview.png":
/*!******************************************************!*\
  !*** ./src/assets/images/screenshots/02_preview.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/02_preview.3d0f03f7.png\";\n\n//# sourceURL=webpack:///./src/assets/images/screenshots/02_preview.png?");

/***/ }),

/***/ "./src/assets/images/screenshots/04_preview.png":
/*!******************************************************!*\
  !*** ./src/assets/images/screenshots/04_preview.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/04_preview.2abe079f.png\";\n\n//# sourceURL=webpack:///./src/assets/images/screenshots/04_preview.png?");

/***/ }),

/***/ "./src/assets/images/screenshots/dashboard.v1.png":
/*!********************************************************!*\
  !*** ./src/assets/images/screenshots/dashboard.v1.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/dashboard.v1.f5297388.png\";\n\n//# sourceURL=webpack:///./src/assets/images/screenshots/dashboard.v1.png?");

/***/ }),

/***/ "./src/assets/images/screenshots/dashboard.v2.png":
/*!********************************************************!*\
  !*** ./src/assets/images/screenshots/dashboard.v2.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/dashboard.v2.729065db.png\";\n\n//# sourceURL=webpack:///./src/assets/images/screenshots/dashboard.v2.png?");

/***/ }),

/***/ "./src/assets/images/screenshots/verticallayout.png":
/*!**********************************************************!*\
  !*** ./src/assets/images/screenshots/verticallayout.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/verticallayout.d03f2a0d.png\";\n\n//# sourceURL=webpack:///./src/assets/images/screenshots/verticallayout.png?");

/***/ }),

/***/ "./src/assets/images/visa.png":
/*!************************************!*\
  !*** ./src/assets/images/visa.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,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\"\n\n//# sourceURL=webpack:///./src/assets/images/visa.png?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/logo.bc089e74.png\";\n\n//# sourceURL=webpack:///./src/assets/logo.png?");

/***/ }),

/***/ "./src/assets/merchant.png":
/*!*********************************!*\
  !*** ./src/assets/merchant.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/merchant.9307d129.png\";\n\n//# sourceURL=webpack:///./src/assets/merchant.png?");

/***/ }),

/***/ "./src/assets/payments/balance.png":
/*!*****************************************!*\
  !*** ./src/assets/payments/balance.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/balance.8a89c71d.png\";\n\n//# sourceURL=webpack:///./src/assets/payments/balance.png?");

/***/ }),

/***/ "./src/assets/payments/stripe.png":
/*!****************************************!*\
  !*** ./src/assets/payments/stripe.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,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\"\n\n//# sourceURL=webpack:///./src/assets/payments/stripe.png?");

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