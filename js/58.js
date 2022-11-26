(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/deliverers-manager/settings/delivery_locations.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/deliverers-manager/settings/delivery_locations.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_user_Desktop_codrocket_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _parts_common_WarehousesSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @parts/common/WarehousesSettings */ \"./src/views/parts/common/WarehousesSettings.vue\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _parts_common_tutorial_panel_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../parts/common/tutorial_panel.vue */ \"./src/views/parts/common/tutorial_panel.vue\");\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    WarehousesSettings: _parts_common_WarehousesSettings__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    Tutorialpanel: _parts_common_tutorial_panel_vue__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n  },\n  data: function data() {\n    return {\n      help_id: 28,\n      open: false,\n      loadingLocations: true,\n      delivererDeliveryLocations: [],\n      savingData: false\n    };\n  },\n  computed: Object(C_Users_user_Desktop_codrocket_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(C_Users_user_Desktop_codrocket_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__[\"mapGetters\"])(['getAuthUser'])), {}, {\n    /**\r\n     * check if user can create stock\r\n     */\n    hasStock: function hasStock() {\n      var hasStock = this.getAuthUser.permissions.includes('create stock');\n      return hasStock;\n    }\n  }),\n  methods: {\n    show_overview_tutorial: function show_overview_tutorial() {\n      this.help_id = 28;\n      this.toggle_tuto_panel();\n    },\n    toggle_tuto_panel: function toggle_tuto_panel() {\n      this.open = !this.open;\n    },\n    getDelivererDeliveryLocations: function getDelivererDeliveryLocations() {\n      var _this = this;\n\n      Api.get('/api/delivery_locations').then(function (res) {\n        _this.loadingLocations = false;\n        var data = res.data; // deliverer has stock push warehouses\n\n        if (_this.hasStock) {\n          _this.delivererDeliveryLocations = data.map(function (warehouse) {\n            var locations = warehouse.delivery_locations;\n            return {\n              id: warehouse.id,\n              name: warehouse.name,\n              active: warehouse.active,\n              locations: locations.map(function (location) {\n                return {\n                  id: location.region_id,\n                  location_id: location.id,\n                  label: location.region.name,\n                  delivery_fees: location.delivery_fees,\n                  cancel_fees: location.cancel_fees,\n                  packing_fees: location.packing_fees,\n                  refused_fees: location.refused_fees\n                };\n              })\n            };\n          });\n        } else {\n          // if delivere has not stock\n          _this.delivererDeliveryLocations = [{\n            locations: data.map(function (location) {\n              return {\n                id: location.region_id,\n                location_id: location.id,\n                label: location.region.name,\n                delivery_fees: location.delivery_fees,\n                cancel_fees: location.cancel_fees,\n                packing_fees: location.packing_fees,\n                refused_fees: location.refused_fees\n              };\n            })\n          }];\n        }\n      });\n    },\n\n    /**\r\n     * update warehouses and delivery locations\r\n     * @param {object} warehouse warehouse to update\r\n     */\n    updateWarehouses: function updateWarehouses(warehouse) {\n      var _this2 = this;\n\n      // fill form data\n      var form = {\n        name: warehouse.name,\n        active: warehouse.active ? 1 : 0,\n        locations: warehouse.locations.map(function (location) {\n          return {\n            id: location.id,\n            delivery_fees: location.delivery_fees ? location.delivery_fees : 0,\n            cancel_fees: location.cancel_fees ? location.cancel_fees : 0,\n            refused_fees: location.refused_fees ? location.refused_fees : 0,\n            packing_fees: location.packing_fees ? location.packing_fees : 0\n          };\n        })\n      };\n      this.savingData = true;\n      Api.updateObj(\"/api/delivery_locations/\".concat(warehouse.id), form).then(function (res) {\n        _this2.savingData = false;\n        var response = res.data;\n\n        if (response.status === 'success') {\n          warehouse.id = response.data.id;\n\n          _this2.$_info(response.message, 'success');\n        } else if (response.status === 'error') {\n          _this2.$_info(response.message, 'error');\n        }\n      });\n    },\n\n    /**\r\n     * update delivery locations\r\n     */\n    updateLocations: function updateLocations(locations) {\n      var _this3 = this;\n\n      var form = {\n        locations: locations.map(function (location) {\n          return {\n            id: location.id,\n            delivery_fees: location.delivery_fees ? location.delivery_fees : 0,\n            cancel_fees: location.cancel_fees ? location.cancel_fees : 0,\n            refused_fees: location.refused_fees ? location.refused_fees : 0,\n            packing_fees: location.packing_fees ? location.packing_fees : 0\n          };\n        })\n      };\n      this.savingData = true;\n      Api.updateObj(\"/api/delivery_locations/\".concat(0), form).then(function (res) {\n        _this3.savingData = false;\n        var response = res.data;\n\n        _this3.$_info(response.message, response.status);\n      });\n    }\n  },\n  created: function created() {\n    this.getDelivererDeliveryLocations();\n  }\n});\n\n//# sourceURL=webpack:///./src/views/app/deliverers-manager/settings/delivery_locations.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"24cc4fea-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/deliverers-manager/settings/delivery_locations.vue?vue&type=template&id=2258ba0e&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"24cc4fea-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/deliverers-manager/settings/delivery_locations.vue?vue&type=template&id=2258ba0e& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n      _c = _vm._self._c;\n\n  return _c(\"div\", [_c(\"Tutorialpanel\", {\n    attrs: {\n      show: _vm.open,\n      id: _vm.help_id\n    }\n  }), _c(\"breadcumb\", {\n    attrs: {\n      page: _vm.lang(\"deliverer_dashboard.sidebar.warehouse\")\n    }\n  }), _c(\"div\", {\n    staticClass: \"warehouses-page\"\n  }, [_vm.loadingLocations ? _c(\"div\", {\n    staticClass: \"py-4\"\n  }, [_c(\"b-skeleton\", {\n    staticClass: \"mb-3\",\n    attrs: {\n      width: \"85%\",\n      height: \"30px\"\n    }\n  }), _c(\"b-skeleton\", {\n    staticClass: \"mb-3\",\n    attrs: {\n      width: \"55%\",\n      height: \"30px\"\n    }\n  }), _c(\"b-skeleton\", {\n    staticClass: \"mb-3\",\n    attrs: {\n      width: \"70%\",\n      height: \"30px\"\n    }\n  }), _c(\"b-skeleton\", {\n    staticClass: \"mb-3\",\n    attrs: {\n      width: \"66%\",\n      height: \"30px\"\n    }\n  }), _c(\"b-skeleton\", {\n    staticClass: \"mb-3\",\n    attrs: {\n      width: \"90%\",\n      height: \"30px\"\n    }\n  })], 1) : _c(\"warehouses-settings\", {\n    attrs: {\n      \"fetched-warehouses\": _vm.delivererDeliveryLocations\n    },\n    scopedSlots: _vm._u([_vm.hasStock ? {\n      key: \"warehouse-actions-slot\",\n      fn: function fn(_ref) {\n        var warehouse = _ref.warehouse;\n        return [_c(\"button\", {\n          staticClass: \"btn btn-primary py-1\",\n          attrs: {\n            disabled: _vm.savingData\n          },\n          on: {\n            click: function click($event) {\n              $event.preventDefault();\n              return _vm.updateWarehouses(warehouse);\n            }\n          }\n        }, [_c(\"span\", [_vm._v(_vm._s(_vm.lang(\"layout.buttons.save\")))]), _vm.savingData ? _c(\"b-spinner\", {\n          attrs: {\n            small: \"\"\n          }\n        }) : _vm._e()], 1)];\n      }\n    } : {\n      key: \"delivery-locations-actions-slot\",\n      fn: function fn(_ref2) {\n        var deliveryLocations = _ref2.deliveryLocations;\n        return [_c(\"button\", {\n          staticClass: \"btn btn-info py-1\",\n          attrs: {\n            disabled: _vm.savingData\n          },\n          on: {\n            click: function click($event) {\n              $event.preventDefault();\n              return _vm.updateLocations(deliveryLocations);\n            }\n          }\n        }, [_c(\"span\", [_vm._v(_vm._s(_vm.lang(\"layout.buttons.update\")))]), _vm.savingData ? _c(\"b-spinner\", {\n          attrs: {\n            small: \"\"\n          }\n        }) : _vm._e()], 1)];\n      }\n    }], null, true)\n  })], 1), _c(\"div\", {\n    staticClass: \"w-full flex justify-center items-center my-3\"\n  }, [_c(\"p\", [_c(\"svg\", {\n    staticClass: \"h-6 w-6 text-primary\",\n    attrs: {\n      xmlns: \"http://www.w3.org/2000/svg\",\n      fill: \"none\",\n      viewBox: \"0 0 24 24\",\n      stroke: \"currentColor\",\n      \"stroke-width\": \"2\"\n    }\n  }, [_c(\"path\", {\n    attrs: {\n      \"stroke-linecap\": \"round\",\n      \"stroke-linejoin\": \"round\",\n      d: \"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"\n    }\n  })])]), _c(\"p\", [_vm._v(\" \" + _vm._s(_vm.lang(\"layout.messages.learnmoreabout\")) + \" : \"), _c(\"a\", {\n    attrs: {\n      href: \"#\"\n    },\n    on: {\n      click: function click($event) {\n        $event.preventDefault();\n        return _vm.show_overview_tutorial();\n      }\n    }\n  }, [_vm._v(_vm._s(_vm.lang(\"deliverer_dashboard.sidebar.warehouse\")))])])])], 1);\n};\n\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/views/app/deliverers-manager/settings/delivery_locations.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2224cc4fea-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/deliverers-manager/settings/delivery_locations.vue?vue&type=style&index=0&id=2258ba0e&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/deliverers-manager/settings/delivery_locations.vue?vue&type=style&index=0&id=2258ba0e&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \"\\n.warehouses-page {\\r\\n\\tpadding: 10px;\\r\\n\\tbackground-color: white;\\r\\n\\tborder: 1px solid #eee;\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"C:/Users/user/Desktop/codrocket/src/views/app/deliverers-manager/settings/delivery_locations.vue\"],\"names\":[],\"mappings\":\";AACA;CACC,aAAa;CACb,uBAAuB;CACvB,sBAAsB;AACvB\",\"file\":\"delivery_locations.vue\",\"sourcesContent\":[\"\\r\\n.warehouses-page {\\r\\n\\tpadding: 10px;\\r\\n\\tbackground-color: white;\\r\\n\\tborder: 1px solid #eee;\\r\\n}\\r\\n\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/views/app/deliverers-manager/settings/delivery_locations.vue?./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/deliverers-manager/settings/delivery_locations.vue?vue&type=style&index=0&id=2258ba0e&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/deliverers-manager/settings/delivery_locations.vue?vue&type=style&index=0&id=2258ba0e&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./delivery_locations.vue?vue&type=style&index=0&id=2258ba0e&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/deliverers-manager/settings/delivery_locations.vue?vue&type=style&index=0&id=2258ba0e&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"0d18d506\", content, false, {\"sourceMap\":true,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/views/app/deliverers-manager/settings/delivery_locations.vue?./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/app/deliverers-manager/settings/delivery_locations.vue":
/*!**************************************************************************!*\
  !*** ./src/views/app/deliverers-manager/settings/delivery_locations.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _delivery_locations_vue_vue_type_template_id_2258ba0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delivery_locations.vue?vue&type=template&id=2258ba0e& */ \"./src/views/app/deliverers-manager/settings/delivery_locations.vue?vue&type=template&id=2258ba0e&\");\n/* harmony import */ var _delivery_locations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delivery_locations.vue?vue&type=script&lang=js& */ \"./src/views/app/deliverers-manager/settings/delivery_locations.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _delivery_locations_vue_vue_type_style_index_0_id_2258ba0e_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delivery_locations.vue?vue&type=style&index=0&id=2258ba0e&lang=css& */ \"./src/views/app/deliverers-manager/settings/delivery_locations.vue?vue&type=style&index=0&id=2258ba0e&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _delivery_locations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _delivery_locations_vue_vue_type_template_id_2258ba0e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _delivery_locations_vue_vue_type_template_id_2258ba0e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/app/deliverers-manager/settings/delivery_locations.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/app/deliverers-manager/settings/delivery_locations.vue?");

/***/ }),

/***/ "./src/views/app/deliverers-manager/settings/delivery_locations.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./src/views/app/deliverers-manager/settings/delivery_locations.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_delivery_locations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./delivery_locations.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/deliverers-manager/settings/delivery_locations.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_delivery_locations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/app/deliverers-manager/settings/delivery_locations.vue?");

/***/ }),

/***/ "./src/views/app/deliverers-manager/settings/delivery_locations.vue?vue&type=style&index=0&id=2258ba0e&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./src/views/app/deliverers-manager/settings/delivery_locations.vue?vue&type=style&index=0&id=2258ba0e&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_delivery_locations_vue_vue_type_style_index_0_id_2258ba0e_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./delivery_locations.vue?vue&type=style&index=0&id=2258ba0e&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/deliverers-manager/settings/delivery_locations.vue?vue&type=style&index=0&id=2258ba0e&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_delivery_locations_vue_vue_type_style_index_0_id_2258ba0e_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_delivery_locations_vue_vue_type_style_index_0_id_2258ba0e_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_delivery_locations_vue_vue_type_style_index_0_id_2258ba0e_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_delivery_locations_vue_vue_type_style_index_0_id_2258ba0e_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/views/app/deliverers-manager/settings/delivery_locations.vue?");

/***/ }),

/***/ "./src/views/app/deliverers-manager/settings/delivery_locations.vue?vue&type=template&id=2258ba0e&":
/*!*********************************************************************************************************!*\
  !*** ./src/views/app/deliverers-manager/settings/delivery_locations.vue?vue&type=template&id=2258ba0e& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_24cc4fea_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_delivery_locations_vue_vue_type_template_id_2258ba0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"24cc4fea-vue-loader-template\"}!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./delivery_locations.vue?vue&type=template&id=2258ba0e& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"24cc4fea-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/deliverers-manager/settings/delivery_locations.vue?vue&type=template&id=2258ba0e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_24cc4fea_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_delivery_locations_vue_vue_type_template_id_2258ba0e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_24cc4fea_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_delivery_locations_vue_vue_type_template_id_2258ba0e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/app/deliverers-manager/settings/delivery_locations.vue?");

/***/ })

}]);