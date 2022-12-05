(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/parts/deliverers-manager/ShowPartnerRequestsPricing.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/parts/deliverers-manager/ShowPartnerRequestsPricing.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_user_Desktop_codrocket_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ \"./node_modules/core-js/modules/es.number.constructor.js\");\n/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      editPrices: false,\n      editnewlocationsPrices: false,\n      non_subscribed_locations: []\n    };\n  },\n  props: {\n    deliveryLocations: {\n      required: true,\n      type: Array\n    },\n    deliverer_id: {\n      required: true,\n      type: Number\n    }\n  },\n  created: function created() {\n    this.get_non_subscribed_cities();\n    console.log('deliveryLocations = ', this.deliveryLocations);\n  },\n  methods: {\n    toggleEditPrices: function toggleEditPrices() {\n      this.editPrices = !this.editPrices;\n    },\n    toggleEditNewLocationsPrices: function toggleEditNewLocationsPrices() {\n      this.editnewlocationsPrices = !this.editnewlocationsPrices;\n    },\n    request_fee_update: function request_fee_update() {\n      var _this = this;\n\n      //console.log('deliveryLocations = ', this.deliveryLocations)\n      var form = {\n        locations: this.deliveryLocations.map(function (location) {\n          return {\n            id: location.id,\n            delivery_fees: location.pivot.delivery_fees,\n            cancel_fees: location.pivot.cancel_fees,\n            refused_fees: location.pivot.refused_fees,\n            packing_fees: location.pivot.packing_fees\n          };\n        }),\n        deliverer_id: this.deliverer_id\n      };\n      console.log('form = ', form);\n      Api.updateObj('/api/partnerships/request_update', form).then(function (res) {\n        if (res.data.status == 'success') {\n          _this.$emit('update_requested');\n\n          _this.hideModal('pricing');\n        } else {\n          console.log('somthing went wrong');\n        }\n      }).catch(function (err) {\n        console.error(err.message);\n      });\n    },\n    accept_fee_update: function accept_fee_update() {\n      var _this2 = this;\n\n      console.log('deliveryLocations = ', this.deliveryLocations);\n      var form = {\n        locations: this.deliveryLocations.map(function (location) {\n          return {\n            id: location.id,\n            merchant_id: location.pivot.merchant_id,\n            delivery_fees: location.pivot.delivery_fees,\n            cancel_fees: location.pivot.cancel_fees,\n            refused_fees: location.pivot.refused_fees,\n            packing_fees: location.pivot.packing_fees\n          };\n        }),\n        deliverer_id: this.deliverer_id\n      };\n      console.log('form = ', form);\n      Api.updateObj('/api/partnerships/accept_update', form).then(function (res) {\n        if (res.data.status == 'success') {\n          _this2.$emit('partnerships_updated');\n\n          _this2.hideModal('pricing');\n        } else {\n          console.log('somthing went wrong');\n        }\n      }).catch(function (err) {\n        console.error(err.message);\n      });\n    },\n    refuse_fee_update: function refuse_fee_update() {\n      var _this3 = this;\n\n      var form = {\n        locations: this.deliveryLocations.map(function (location) {\n          return {\n            id: location.id,\n            merchant_id: location.pivot.merchant_id,\n            delivery_fees: location.pivot.delivery_fees,\n            cancel_fees: location.pivot.cancel_fees,\n            refused_fees: location.pivot.refused_fees,\n            packing_fees: location.pivot.packing_fees\n          };\n        }),\n        deliverer_id: this.deliverer_id\n      };\n      Api.updateObj('/api/partnerships/refuse_update', form).then(function (res) {\n        if (res.data.status == 'success') {\n          _this3.$emit('partnerships_updated');\n\n          _this3.hideModal('pricing');\n        } else {\n          console.log('somthing went wrong');\n        }\n      }).catch(function (err) {\n        console.error(err.message);\n      });\n    },\n    get_non_subscribed_cities: function get_non_subscribed_cities() {\n      var _this4 = this;\n\n      var rolename = this.loggedInUser.role;\n      var merchantId = null;\n\n      if (rolename == \"staff_merchant\") {\n        merchantId = this.loggedInUser.employer_id;\n      } else {\n        merchantId = this.loggedInUser.id;\n      }\n\n      Api.get(\"/api/partnerships/non_subscribed_cities/\".concat(this.deliverer_id, \"/\").concat(merchantId)).then(function (res) {\n        _this4.non_subscribed_locations = res.data.non_subscribed_locations;\n\n        _this4.non_subscribed_locations.forEach(function (location) {\n          location.pivot = {\n            delivery_fees: location.delivery_fees,\n            cancel_fees: location.cancel_fees,\n            packing_fees: location.packing_fees,\n            refused_fees: location.refused_fees\n          };\n        });\n      }).catch(function (err) {\n        console.error(err.message);\n      });\n    },\n    send_new_locations_request: function send_new_locations_request() {\n      var _this5 = this;\n\n      console.log('non_subscribed_locations = ', this.non_subscribed_locations);\n      var form = {\n        delivery_locations: this.non_subscribed_locations.map(function (location) {\n          return {\n            delivery_location_id: location.id,\n            delivery_fees: location.pivot.delivery_fees,\n            cancel_fees: location.pivot.cancel_fees,\n            refused_fees: location.pivot.refused_fees,\n            packing_fees: location.pivot.packing_fees,\n            warehouse_id: location.warehouse_id\n          };\n        }),\n        deliverer_id: this.deliverer_id\n      }; //console.log('form = ', form)\n\n      Api.updateObj('/api/partnerships/request_add_new_locations', form).then(function (res) {\n        if (res.data.status == 'success') {\n          _this5.hideModal('pricing');\n        } else {\n          console.log('somthing went wrong');\n        }\n      }).catch(function (err) {\n        console.error(err.message);\n      });\n    }\n  },\n  computed: Object(C_Users_user_Desktop_codrocket_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(C_Users_user_Desktop_codrocket_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__[\"mapGetters\"])(['loggedInUser'])), {}, {\n    hasStock: function hasStock() {\n      return this.deliveryLocations.some(function (location) {\n        return location.warehouse;\n      });\n    },\n    hasAtLeastOneNotAcceptedYet: function hasAtLeastOneNotAcceptedYet() {\n      return this.deliveryLocations.some(function (location) {\n        return location.pivot.status === 0;\n      });\n    },\n    feesChanged: function feesChanged() {\n      return this.deliveryLocations.some(function (location) {\n        return location.delivery_fees !== location.pivot.delivery_fees || location.cancel_fees !== location.pivot.cancel_fees || location.packing_fees !== location.pivot.packing_fees || location.refused_fees !== location.pivot.refused_fees;\n      });\n    },\n    request_update: function request_update() {\n      return this.deliveryLocations.some(function (location) {\n        return location.pivot.requeste_update == 1;\n      });\n    }\n  })\n});\n\n//# sourceURL=webpack:///./src/views/parts/deliverers-manager/ShowPartnerRequestsPricing.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"24cc4fea-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/parts/deliverers-manager/ShowPartnerRequestsPricing.vue?vue&type=template&id=347d45ac&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"24cc4fea-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/parts/deliverers-manager/ShowPartnerRequestsPricing.vue?vue&type=template&id=347d45ac& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar render = function render() {\n  var _vm = this,\n      _c = _vm._self._c;\n\n  return _c(\"b-modal\", {\n    attrs: {\n      visible: \"\",\n      title: _vm.lang(\"marchent_dashboard.deliverer.show_delivery_pricing\"),\n      size: \"lg\",\n      \"hide-footer\": \"\"\n    },\n    on: {\n      hidden: function hidden($event) {\n        return _vm.hideModal(\"pricing\");\n      }\n    }\n  }, [[\"merchant\", \"staff_merchant\"].includes(_vm.loggedInUser.role) ? _c(\"div\", {\n    directives: [{\n      name: \"can\",\n      rawName: \"v-can\",\n      value: \"deliverers-edit\",\n      expression: \"'deliverers-edit'\"\n    }],\n    staticClass: \"flex justify-between\"\n  }, [_c(\"div\", {\n    staticClass: \"flex flex-col sm:flex-row\"\n  }), !_vm.editPrices ? _c(\"button\", {\n    staticClass: \"float-right btn btn-primary mb-2 py-0 btn-info shadow-none\",\n    staticStyle: {\n      height: \"fit-content\"\n    },\n    on: {\n      click: function click($event) {\n        $event.preventDefault();\n        return _vm.toggleEditPrices.apply(null, arguments);\n      }\n    }\n  }, [_vm._v(\" \" + _vm._s(_vm.lang(\"common.warehouse.edit_fees\")) + \" \")]) : _vm._e()]) : _vm._e(), _c(\"table\", {\n    staticClass: \"table table-bordered table-sm\"\n  }, [_c(\"thead\", {\n    staticClass: \"thead-light\"\n  }, [_c(\"tr\", [_vm.hasStock ? _c(\"th\", [_vm._v(_vm._s(_vm.lang(\"common.warehouse.title\")))]) : _vm._e(), _c(\"th\", [_vm._v(_vm._s(_vm.lang(\"layout.fields.region\")))]), _c(\"th\", [_vm._v(_vm._s(_vm.lang(\"common.warehouse.delivery_fees\")))]), _c(\"th\", [_vm._v(_vm._s(_vm.lang(\"common.warehouse.packing_fees\")))]), _c(\"th\", [_vm._v(_vm._s(_vm.lang(\"common.warehouse.cancel_fees\")))]), _c(\"th\", [_vm._v(_vm._s(_vm.lang(\"common.warehouse.refused_fees\")))])])]), _c(\"tbody\", _vm._l(_vm.deliveryLocations, function (location, index) {\n    return _c(\"tr\", {\n      key: index\n    }, [location.warehouse ? _c(\"td\", [_c(\"span\", [_vm._v(_vm._s(location.warehouse.name))])]) : _vm._e(), _c(\"td\", [location.pivot.status === 0 ? _c(\"span\", {\n      staticClass: \"text-red-500\"\n    }, [_vm._v(\"#\")]) : _vm._e(), _c(\"a\", {\n      staticClass: \"text-dark\",\n      attrs: {\n        href: \"\"\n      },\n      on: {\n        click: function click($event) {\n          $event.preventDefault();\n        }\n      }\n    }, [_vm._v(_vm._s(location.region.name))])]), _c(\"td\", [_c(\"span\", {\n      staticClass: \"font-weight-bold\"\n    }, [_vm.editPrices === true ? _c(\"input\", {\n      directives: [{\n        name: \"model\",\n        rawName: \"v-model\",\n        value: location.pivot.delivery_fees,\n        expression: \"location.pivot.delivery_fees\"\n      }],\n      staticStyle: {\n        width: \"80%\"\n      },\n      attrs: {\n        type: \"number\"\n      },\n      domProps: {\n        value: location.pivot.delivery_fees\n      },\n      on: {\n        input: function input($event) {\n          if ($event.target.composing) return;\n\n          _vm.$set(location.pivot, \"delivery_fees\", $event.target.value);\n        }\n      }\n    }) : _c(\"span\", [_vm._v(_vm._s(location.pivot.delivery_fees) + \" \"), location.delivery_fees != location.pivot.delivery_fees && location.pivot.status != 0 ? _c(\"span\", {\n      staticClass: \"text-danger\"\n    }, [_vm._v(\" (\" + _vm._s(location.pivot.delivery_fees) + \") \")]) : _vm._e()]), location.pivot.requeste_update == 1 && location.pivot.delivery_fees != location.pivot.requested_delivery_fees ? _c(\"span\", {\n      staticClass: \"text-blue-500\"\n    }, [_vm._v(\"(\" + _vm._s(location.pivot.requested_delivery_fees) + \")\")]) : _vm._e()])]), _c(\"td\", [_c(\"span\", {\n      staticClass: \"font-weight-bold\"\n    }, [_vm.editPrices === true ? _c(\"input\", {\n      directives: [{\n        name: \"model\",\n        rawName: \"v-model\",\n        value: location.pivot.packing_fees,\n        expression: \"location.pivot.packing_fees\"\n      }],\n      staticStyle: {\n        width: \"80%\"\n      },\n      attrs: {\n        type: \"number\"\n      },\n      domProps: {\n        value: location.pivot.packing_fees\n      },\n      on: {\n        input: function input($event) {\n          if ($event.target.composing) return;\n\n          _vm.$set(location.pivot, \"packing_fees\", $event.target.value);\n        }\n      }\n    }) : _c(\"span\", [_vm._v(_vm._s(location.pivot.packing_fees) + \" \"), location.packing_fees != location.pivot.packing_fees && location.pivot.status != 0 ? _c(\"span\", {\n      staticClass: \"text-danger\"\n    }, [_vm._v(\" (\" + _vm._s(location.pivot.packing_fees) + \") \")]) : _vm._e()]), location.pivot.requeste_update == 1 && location.pivot.packing_fees != location.pivot.requested_packing_fees ? _c(\"span\", {\n      staticClass: \"text-blue-500\"\n    }, [_vm._v(\"(\" + _vm._s(location.pivot.requested_packing_fees) + \")\")]) : _vm._e()])]), _c(\"td\", [_c(\"span\", {\n      staticClass: \"font-weight-bold\"\n    }, [_vm.editPrices === true ? _c(\"input\", {\n      directives: [{\n        name: \"model\",\n        rawName: \"v-model\",\n        value: location.pivot.cancel_fees,\n        expression: \"location.pivot.cancel_fees\"\n      }],\n      staticStyle: {\n        width: \"80%\"\n      },\n      attrs: {\n        type: \"number\"\n      },\n      domProps: {\n        value: location.pivot.cancel_fees\n      },\n      on: {\n        input: function input($event) {\n          if ($event.target.composing) return;\n\n          _vm.$set(location.pivot, \"cancel_fees\", $event.target.value);\n        }\n      }\n    }) : _c(\"span\", [_vm._v(_vm._s(location.pivot.cancel_fees) + \" \"), location.cancel_fees != location.pivot.cancel_fees && location.pivot.status != 0 ? _c(\"span\", {\n      staticClass: \"text-danger\"\n    }, [_vm._v(\" (\" + _vm._s(location.pivot.cancel_fees) + \") \")]) : _vm._e()]), location.pivot.requeste_update == 1 && location.pivot.cancel_fees != location.pivot.requested_cancel_fees ? _c(\"span\", {\n      staticClass: \"text-blue-500\"\n    }, [_vm._v(\"(\" + _vm._s(location.pivot.requested_cancel_fees) + \")\")]) : _vm._e()])]), _c(\"td\", [_c(\"span\", {\n      staticClass: \"font-weight-bold\"\n    }, [_vm.editPrices === true ? _c(\"input\", {\n      directives: [{\n        name: \"model\",\n        rawName: \"v-model\",\n        value: location.pivot.refused_fees,\n        expression: \"location.pivot.refused_fees\"\n      }],\n      staticStyle: {\n        width: \"80%\"\n      },\n      attrs: {\n        type: \"number\"\n      },\n      domProps: {\n        value: location.pivot.refused_fees\n      },\n      on: {\n        input: function input($event) {\n          if ($event.target.composing) return;\n\n          _vm.$set(location.pivot, \"refused_fees\", $event.target.value);\n        }\n      }\n    }) : _c(\"span\", [_vm._v(_vm._s(location.pivot.refused_fees) + \" \"), location.refused_fees != location.pivot.refused_fees && location.pivot.status != 0 ? _c(\"span\", {\n      staticClass: \"text-danger\"\n    }, [_vm._v(\" (\" + _vm._s(location.pivot.refused_fees) + \") \")]) : _vm._e()]), location.pivot.requeste_update == 1 && location.pivot.refused_fees != location.pivot.requested_refused_fees ? _c(\"span\", {\n      staticClass: \"text-blue-500\"\n    }, [_vm._v(\"(\" + _vm._s(location.pivot.requested_refused_fees) + \")\")]) : _vm._e()])])]);\n  }), 0)]), _vm.editPrices == true ? _c(\"div\", {\n    staticClass: \"flex justify-between\"\n  }, [_c(\"div\", {\n    staticClass: \"flex flex-col sm:flex-row\"\n  }), _vm.editPrices ? _c(\"button\", {\n    staticClass: \"float-right btn btn-primary py-0 btn-info shadow-none\",\n    staticStyle: {\n      height: \"fit-content\"\n    },\n    on: {\n      click: function click($event) {\n        $event.preventDefault();\n        return _vm.request_fee_update();\n      }\n    }\n  }, [_vm._v(\" \" + _vm._s(_vm.lang(\"deliverer_profile.request_fee_update\")) + \" \")]) : _vm._e()]) : _vm._e(), _vm.request_update && _vm.loggedInUser.role == \"deliverer\" ? _c(\"div\", {\n    staticClass: \"flex justify-between\"\n  }, [_c(\"div\"), _c(\"div\", {\n    staticClass: \"flex\"\n  }, [_c(\"button\", {\n    staticClass: \"btn btn-danger py-0 btn-info shadow-none mr-1\",\n    staticStyle: {\n      height: \"fit-content\"\n    },\n    on: {\n      click: function click($event) {\n        $event.preventDefault();\n        return _vm.refuse_fee_update();\n      }\n    }\n  }, [_vm._v(\" \" + _vm._s(_vm.lang(\"deliverer_profile.refuse_request\")) + \" \")]), _c(\"button\", {\n    staticClass: \"btn btn-primary py-0 btn-info shadow-none mr-1\",\n    staticStyle: {\n      height: \"fit-content\"\n    },\n    on: {\n      click: function click($event) {\n        $event.preventDefault();\n        return _vm.accept_fee_update();\n      }\n    }\n  }, [_vm._v(\" \" + _vm._s(_vm.lang(\"deliverer_profile.accept_request\")) + \" \")])])]) : _vm._e(), _c(\"div\", {\n    staticClass: \"flex\"\n  }, [_vm.feesChanged || _vm.request_update ? _c(\"div\", {\n    staticClass: \"text-danger mx-1\"\n  }, [_vm._v(\" \" + _vm._s(_vm.lang(\"deliverer_profile.proposed_fees\")) + \" \")]) : _vm._e(), _vm.feesChanged || _vm.request_update ? _c(\"div\", {\n    staticClass: \"text-blue-500 mx-2\"\n  }, [_vm._v(\" \" + _vm._s(_vm.lang(\"deliverer_profile.proposed_fees_new\")) + \" \")]) : _vm._e(), _vm.feesChanged || _vm.request_update ? _c(\"div\", {\n    staticClass: \"mx-1\"\n  }, [_c(\"span\", {\n    staticClass: \"text-red-500\"\n  }, [_vm._v(\"#\")]), _vm._v(\": \" + _vm._s(_vm.lang(\"deliverer_profile.not_yet_activated\")) + \" \")]) : _vm._e()]), [\"merchant\", \"staff_merchant\"].includes(_vm.loggedInUser.role) && _vm.non_subscribed_locations.length > 0 ? _c(\"div\", {\n    directives: [{\n      name: \"can\",\n      rawName: \"v-can\",\n      value: \"deliverers-edit\",\n      expression: \"'deliverers-edit'\"\n    }]\n  }, [_c(\"div\", {\n    staticClass: \"flex justify-between mt-2 items-center\"\n  }, [_c(\"p\", [_vm._v(_vm._s(_vm.lang(\"layout.fields.other_locations_for_this_delivry\")))]), !_vm.editnewlocationsPrices ? _c(\"button\", {\n    staticClass: \"float-right btn btn-primary py-0 btn-info shadow-none\",\n    staticStyle: {\n      height: \"fit-content\"\n    },\n    on: {\n      click: function click($event) {\n        $event.preventDefault();\n        return _vm.toggleEditNewLocationsPrices.apply(null, arguments);\n      }\n    }\n  }, [_vm._v(\" \" + _vm._s(_vm.lang(\"common.warehouse.edit_fees\")) + \" \")]) : _vm._e()]), _c(\"table\", {\n    staticClass: \"table table-bordered table-sm\"\n  }, [_c(\"thead\", {\n    staticClass: \"thead-light\"\n  }, [_c(\"tr\", [_vm.hasStock ? _c(\"th\", [_vm._v(_vm._s(_vm.lang(\"common.warehouse.title\")))]) : _vm._e(), _c(\"th\", [_vm._v(_vm._s(_vm.lang(\"layout.fields.region\")))]), _c(\"th\", [_vm._v(_vm._s(_vm.lang(\"common.warehouse.delivery_fees\")))]), _c(\"th\", [_vm._v(_vm._s(_vm.lang(\"common.warehouse.packing_fees\")))]), _c(\"th\", [_vm._v(_vm._s(_vm.lang(\"common.warehouse.cancel_fees\")))]), _c(\"th\", [_vm._v(_vm._s(_vm.lang(\"common.warehouse.refused_fees\")))])])]), _c(\"tbody\", _vm._l(_vm.non_subscribed_locations, function (location, index) {\n    return _c(\"tr\", {\n      key: index\n    }, [location.warehouse ? _c(\"td\", [_c(\"span\", [_vm._v(_vm._s(location.warehouse.name))])]) : _vm._e(), _c(\"td\", [_c(\"a\", {\n      staticClass: \"text-dark\",\n      attrs: {\n        href: \"\"\n      },\n      on: {\n        click: function click($event) {\n          $event.preventDefault();\n        }\n      }\n    }, [_vm._v(_vm._s(location.region.name))])]), _c(\"td\", [_c(\"span\", {\n      staticClass: \"font-weight-bold\"\n    }, [_vm.editnewlocationsPrices === true ? _c(\"input\", {\n      directives: [{\n        name: \"model\",\n        rawName: \"v-model\",\n        value: location.pivot.delivery_fees,\n        expression: \"location.pivot.delivery_fees\"\n      }],\n      staticStyle: {\n        width: \"80%\"\n      },\n      attrs: {\n        type: \"number\"\n      },\n      domProps: {\n        value: location.pivot.delivery_fees\n      },\n      on: {\n        input: function input($event) {\n          if ($event.target.composing) return;\n\n          _vm.$set(location.pivot, \"delivery_fees\", $event.target.value);\n        }\n      }\n    }) : _c(\"span\", [_vm._v(_vm._s(location.pivot.delivery_fees) + \" \"), location.delivery_fees != location.pivot.delivery_fees ? _c(\"span\", {\n      staticClass: \"text-danger\"\n    }, [_vm._v(\" (\" + _vm._s(location.pivot.delivery_fees) + \") \")]) : _vm._e()])])]), _c(\"td\", [_c(\"span\", {\n      staticClass: \"font-weight-bold\"\n    }, [_vm.editnewlocationsPrices === true ? _c(\"input\", {\n      directives: [{\n        name: \"model\",\n        rawName: \"v-model\",\n        value: location.pivot.packing_fees,\n        expression: \"location.pivot.packing_fees\"\n      }],\n      staticStyle: {\n        width: \"80%\"\n      },\n      attrs: {\n        type: \"number\"\n      },\n      domProps: {\n        value: location.pivot.packing_fees\n      },\n      on: {\n        input: function input($event) {\n          if ($event.target.composing) return;\n\n          _vm.$set(location.pivot, \"packing_fees\", $event.target.value);\n        }\n      }\n    }) : _c(\"span\", [_vm._v(_vm._s(location.pivot.packing_fees) + \" \"), location.packing_fees != location.pivot.packing_fees ? _c(\"span\", {\n      staticClass: \"text-danger\"\n    }, [_vm._v(\" (\" + _vm._s(location.pivot.packing_fees) + \") \")]) : _vm._e()])])]), _c(\"td\", [_c(\"span\", {\n      staticClass: \"font-weight-bold\"\n    }, [_vm.editnewlocationsPrices === true ? _c(\"input\", {\n      directives: [{\n        name: \"model\",\n        rawName: \"v-model\",\n        value: location.pivot.cancel_fees,\n        expression: \"location.pivot.cancel_fees\"\n      }],\n      staticStyle: {\n        width: \"80%\"\n      },\n      attrs: {\n        type: \"number\"\n      },\n      domProps: {\n        value: location.pivot.cancel_fees\n      },\n      on: {\n        input: function input($event) {\n          if ($event.target.composing) return;\n\n          _vm.$set(location.pivot, \"cancel_fees\", $event.target.value);\n        }\n      }\n    }) : _c(\"span\", [_vm._v(_vm._s(location.pivot.cancel_fees) + \" \"), location.cancel_fees != location.pivot.cancel_fees ? _c(\"span\", {\n      staticClass: \"text-danger\"\n    }, [_vm._v(\" (\" + _vm._s(location.pivot.cancel_fees) + \") \")]) : _vm._e()])])]), _c(\"td\", [_c(\"span\", {\n      staticClass: \"font-weight-bold\"\n    }, [_vm.editnewlocationsPrices === true ? _c(\"input\", {\n      directives: [{\n        name: \"model\",\n        rawName: \"v-model\",\n        value: location.pivot.refused_fees,\n        expression: \"location.pivot.refused_fees\"\n      }],\n      staticStyle: {\n        width: \"80%\"\n      },\n      attrs: {\n        type: \"number\"\n      },\n      domProps: {\n        value: location.pivot.refused_fees\n      },\n      on: {\n        input: function input($event) {\n          if ($event.target.composing) return;\n\n          _vm.$set(location.pivot, \"refused_fees\", $event.target.value);\n        }\n      }\n    }) : _c(\"span\", [_vm._v(_vm._s(location.pivot.refused_fees) + \" \"), location.refused_fees != location.pivot.refused_fees ? _c(\"span\", {\n      staticClass: \"text-danger\"\n    }, [_vm._v(\" (\" + _vm._s(location.pivot.refused_fees) + \") \")]) : _vm._e()])])])]);\n  }), 0)]), _c(\"div\", {\n    staticClass: \"flex justify-end\"\n  }, [_c(\"button\", {\n    staticClass: \"float-right btn btn-primary py-0 btn-info shadow-none\",\n    staticStyle: {\n      height: \"fit-content\"\n    },\n    on: {\n      click: function click($event) {\n        $event.preventDefault();\n        return _vm.send_new_locations_request();\n      }\n    }\n  }, [_vm._v(\" \" + _vm._s(_vm.lang(\"layout.buttons.send_request\")) + \" \")])])]) : _vm._e()]);\n};\n\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/views/parts/deliverers-manager/ShowPartnerRequestsPricing.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2224cc4fea-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/parts/deliverers-manager/ShowPartnerRequestsPricing.vue":
/*!***************************************************************************!*\
  !*** ./src/views/parts/deliverers-manager/ShowPartnerRequestsPricing.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ShowPartnerRequestsPricing_vue_vue_type_template_id_347d45ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowPartnerRequestsPricing.vue?vue&type=template&id=347d45ac& */ \"./src/views/parts/deliverers-manager/ShowPartnerRequestsPricing.vue?vue&type=template&id=347d45ac&\");\n/* harmony import */ var _ShowPartnerRequestsPricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowPartnerRequestsPricing.vue?vue&type=script&lang=js& */ \"./src/views/parts/deliverers-manager/ShowPartnerRequestsPricing.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _ShowPartnerRequestsPricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _ShowPartnerRequestsPricing_vue_vue_type_template_id_347d45ac___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _ShowPartnerRequestsPricing_vue_vue_type_template_id_347d45ac___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/parts/deliverers-manager/ShowPartnerRequestsPricing.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/parts/deliverers-manager/ShowPartnerRequestsPricing.vue?");

/***/ }),

/***/ "./src/views/parts/deliverers-manager/ShowPartnerRequestsPricing.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./src/views/parts/deliverers-manager/ShowPartnerRequestsPricing.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPartnerRequestsPricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowPartnerRequestsPricing.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/parts/deliverers-manager/ShowPartnerRequestsPricing.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPartnerRequestsPricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/parts/deliverers-manager/ShowPartnerRequestsPricing.vue?");

/***/ }),

/***/ "./src/views/parts/deliverers-manager/ShowPartnerRequestsPricing.vue?vue&type=template&id=347d45ac&":
/*!**********************************************************************************************************!*\
  !*** ./src/views/parts/deliverers-manager/ShowPartnerRequestsPricing.vue?vue&type=template&id=347d45ac& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_24cc4fea_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPartnerRequestsPricing_vue_vue_type_template_id_347d45ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"24cc4fea-vue-loader-template\"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowPartnerRequestsPricing.vue?vue&type=template&id=347d45ac& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"24cc4fea-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/parts/deliverers-manager/ShowPartnerRequestsPricing.vue?vue&type=template&id=347d45ac&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_24cc4fea_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPartnerRequestsPricing_vue_vue_type_template_id_347d45ac___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_24cc4fea_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPartnerRequestsPricing_vue_vue_type_template_id_347d45ac___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/parts/deliverers-manager/ShowPartnerRequestsPricing.vue?");

/***/ })

}]);