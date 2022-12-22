(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/deliverers-manager/add_cities.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/deliverers-manager/add_cities.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @riophae/vue-treeselect */ \"./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.cjs.js\");\n/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var read_excel_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! read-excel-file */ \"./node_modules/read-excel-file/index.js\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    treeselect: _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_4___default.a\n  },\n  data: function data() {\n    return {\n      cities: [],\n      numFields: 0,\n      form: [],\n      regionsOptions: [],\n      is_sumiting: false\n    };\n  },\n  methods: {\n    addNewcity: function addNewcity() {\n      this.form.push({\n        name: null,\n        alern_names: null,\n        region: null\n      });\n    },\n    getRegionsList: function getRegionsList() {\n      var _this = this;\n\n      return Api.get('/api/countries/MA').then(function (res) {\n        _this.regionsOptions = res.data.map(function (region) {\n          return {\n            id: region.a1code,\n            label: region.name\n          };\n        });\n      });\n    },\n    submit_new_cities: function submit_new_cities() {\n      var _this2 = this;\n\n      this.is_sumiting = true;\n      Api.postObj('/api/region/addcities', {\n        form: this.form\n      }).then(function (res) {\n        swal.toast(res.data.created + ' created cities', 'warning');\n        _this2.is_sumiting = false;\n\n        _this2.form.forEach(function (city) {\n          console.log('city = ', city);\n        });\n      }).catch(function (err) {\n        swal.toast(res.data.created + 'Error created cities try again', 'error');\n        console.log('ERROR: ', err);\n        _this2.is_sumiting = false;\n      });\n    },\n    trigger_file: function trigger_file() {\n      this.$refs.excel_file.click();\n    },\n    set_city: function set_city(event, field, index) {\n      var _this$form$index$aler, _this$form$index, _this$form$index$regi, _this$form$index2, _this$form$index$name, _this$form$index3, _this$form$index$regi2, _this$form$index4, _this$form$index$name2, _this$form$index5, _this$form$index$aler2, _this$form$index6;\n\n      switch (field) {\n        case 'name':\n          this.form[index] = {\n            name: event,\n            alern_names: (_this$form$index$aler = (_this$form$index = this.form[index]) === null || _this$form$index === void 0 ? void 0 : _this$form$index.alern_names) !== null && _this$form$index$aler !== void 0 ? _this$form$index$aler : null,\n            region: (_this$form$index$regi = (_this$form$index2 = this.form[index]) === null || _this$form$index2 === void 0 ? void 0 : _this$form$index2.region) !== null && _this$form$index$regi !== void 0 ? _this$form$index$regi : null\n          };\n          break;\n\n        case 'alern_names':\n          this.form[index] = {\n            name: (_this$form$index$name = (_this$form$index3 = this.form[index]) === null || _this$form$index3 === void 0 ? void 0 : _this$form$index3.name) !== null && _this$form$index$name !== void 0 ? _this$form$index$name : null,\n            alern_names: event,\n            region: (_this$form$index$regi2 = (_this$form$index4 = this.form[index]) === null || _this$form$index4 === void 0 ? void 0 : _this$form$index4.region) !== null && _this$form$index$regi2 !== void 0 ? _this$form$index$regi2 : null\n          };\n          break;\n\n        case 'region':\n          this.form[index] = {\n            name: (_this$form$index$name2 = (_this$form$index5 = this.form[index]) === null || _this$form$index5 === void 0 ? void 0 : _this$form$index5.name) !== null && _this$form$index$name2 !== void 0 ? _this$form$index$name2 : null,\n            alern_names: (_this$form$index$aler2 = (_this$form$index6 = this.form[index]) === null || _this$form$index6 === void 0 ? void 0 : _this$form$index6.alern_names) !== null && _this$form$index$aler2 !== void 0 ? _this$form$index$aler2 : null,\n            region: event\n          };\n          break;\n      }\n\n      console.log('form = ', this.form);\n    },\n    read_file: function read_file(event) {\n      var _this3 = this;\n\n      this.excel = event.target.files[0];\n      Object(read_excel_file__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(event.target.files[0]).then(function (rows) {\n        console.log('data = ', rows); // this.numFields = rows.length\n\n        rows.forEach(function (row, index) {\n          // console.log('row = ',row[0])\n          if (row.length > 1) {\n            var record = {\n              name: row[1],\n              alern_names: null,\n              region: null\n            };\n\n            _this3.form.push(record);\n          } else {\n            _this3.form.push(record);\n          }\n        });\n      });\n    }\n  },\n  created: function created() {\n    this.getRegionsList();\n  }\n});\n\n//# sourceURL=webpack:///./src/views/app/deliverers-manager/add_cities.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"24cc4fea-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/deliverers-manager/add_cities.vue?vue&type=template&id=42b529dd&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"24cc4fea-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/deliverers-manager/add_cities.vue?vue&type=template&id=42b529dd& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar render = function render() {\n  var _vm = this,\n      _c = _vm._self._c;\n\n  return _c(\"div\", [_c(\"section\", _vm._l(_vm.form, function (record, i) {\n    return _c(\"div\", {\n      key: record,\n      staticClass: \"flex gap-4 mb-3 items-center\"\n    }, [_c(\"div\", {\n      staticClass: \"flex-1\"\n    }, [_c(\"label\", {\n      attrs: {\n        for: \"\"\n      }\n    }, [_vm._v(\"City\")]), _c(\"b-form-input\", {\n      attrs: {\n        value: record.name,\n        type: \"text\"\n      },\n      on: {\n        change: function change(e) {\n          return _vm.set_city(e, \"name\", i);\n        }\n      }\n    })], 1), _c(\"div\", {\n      staticClass: \"px-1 flex-1\"\n    }, [_c(\"label\", {\n      attrs: {\n        for: \"\"\n      }\n    }, [_vm._v(\" altern Names \")]), _c(\"b-form-tags\", {\n      attrs: {\n        type: \"text\",\n        placeholder: \"alternative\"\n      },\n      on: {\n        input: function input(e) {\n          return _vm.set_city(e, \"alern_names\", i);\n        }\n      }\n    })], 1), _c(\"div\", {\n      staticClass: \"flex-1\"\n    }, [_c(\"label\", {\n      attrs: {\n        for: \"\"\n      }\n    }, [_vm._v(\" Region \")]), _c(\"treeselect\", {\n      attrs: {\n        options: _vm.regionsOptions,\n        \"disable-branch-nodes\": true,\n        \"search-nested\": \"\",\n        multiple: false\n      },\n      on: {\n        input: function input(e) {\n          return _vm.set_city(e, \"region\", i);\n        }\n      }\n    })], 1)]);\n  }), 0), _c(\"div\", {\n    staticClass: \"w-full flex justify-between\"\n  }, [_c(\"b-button\", {\n    staticClass: \"mt-4\",\n    attrs: {\n      size: \"sm\",\n      variant: \"primary\"\n    },\n    on: {\n      click: _vm.submit_new_cities\n    }\n  }, [_vm.is_sumiting == true ? _c(\"b-spinner\", {\n    staticClass: \"mx-1\",\n    attrs: {\n      small: \"\"\n    }\n  }) : _vm._e(), _c(\"span\", [_vm._v(\"Submit (\" + _vm._s(_vm.form.length) + \")\")])], 1), _c(\"div\", {\n    staticClass: \"flex\"\n  }, [_c(\"button\", {\n    staticClass: \"text-primary mt-4 border border-primary py-2 px-3 rounded-full flex items-center justify-center\",\n    on: {\n      click: _vm.trigger_file\n    }\n  }, [_c(\"svg\", {\n    staticClass: \"w-4 h-4\",\n    attrs: {\n      xmlns: \"http://www.w3.org/2000/svg\",\n      fill: \"none\",\n      viewBox: \"0 0 24 24\",\n      \"stroke-width\": \"1.5\",\n      stroke: \"currentColor\"\n    }\n  }, [_c(\"path\", {\n    attrs: {\n      \"stroke-linecap\": \"round\",\n      \"stroke-linejoin\": \"round\",\n      d: \"M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5\"\n    }\n  })]), _c(\"span\", {\n    staticClass: \"mx-1\"\n  }, [_vm._v(\" upload from excel\")])]), _c(\"button\", {\n    staticClass: \"text-primary mt-4 border border-primary py-2 px-3 rounded-full\",\n    on: {\n      click: _vm.addNewcity\n    }\n  }, [_c(\"i\", {\n    staticClass: \"fa fa-plus\"\n  }), _vm._v(\" \" + _vm._s(_vm.lang(\"layout.buttons.new_city\")) + \" \")])])], 1), _c(\"form\", {\n    staticClass: \"hidden\",\n    attrs: {\n      action: \"\"\n    }\n  }, [_c(\"input\", {\n    ref: \"excel_file\",\n    attrs: {\n      accept: \".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\",\n      type: \"file\",\n      name: \"excel_file\"\n    },\n    on: {\n      change: _vm.read_file\n    }\n  })])]);\n};\n\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/views/app/deliverers-manager/add_cities.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2224cc4fea-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/app/deliverers-manager/add_cities.vue":
/*!*********************************************************!*\
  !*** ./src/views/app/deliverers-manager/add_cities.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_cities_vue_vue_type_template_id_42b529dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_cities.vue?vue&type=template&id=42b529dd& */ \"./src/views/app/deliverers-manager/add_cities.vue?vue&type=template&id=42b529dd&\");\n/* harmony import */ var _add_cities_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_cities.vue?vue&type=script&lang=js& */ \"./src/views/app/deliverers-manager/add_cities.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _add_cities_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _add_cities_vue_vue_type_template_id_42b529dd___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _add_cities_vue_vue_type_template_id_42b529dd___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/app/deliverers-manager/add_cities.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/app/deliverers-manager/add_cities.vue?");

/***/ }),

/***/ "./src/views/app/deliverers-manager/add_cities.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/views/app/deliverers-manager/add_cities.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_cities_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./add_cities.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/deliverers-manager/add_cities.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_cities_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/app/deliverers-manager/add_cities.vue?");

/***/ }),

/***/ "./src/views/app/deliverers-manager/add_cities.vue?vue&type=template&id=42b529dd&":
/*!****************************************************************************************!*\
  !*** ./src/views/app/deliverers-manager/add_cities.vue?vue&type=template&id=42b529dd& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_24cc4fea_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_cities_vue_vue_type_template_id_42b529dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"24cc4fea-vue-loader-template\"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./add_cities.vue?vue&type=template&id=42b529dd& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"24cc4fea-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/deliverers-manager/add_cities.vue?vue&type=template&id=42b529dd&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_24cc4fea_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_cities_vue_vue_type_template_id_42b529dd___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_24cc4fea_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_cities_vue_vue_type_template_id_42b529dd___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/app/deliverers-manager/add_cities.vue?");

/***/ })

}]);