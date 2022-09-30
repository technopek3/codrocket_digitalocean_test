(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/deliverers-marketplace/home.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/deliverers-marketplace/home.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_user_Desktop_codrocket_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _parts_marketplace_all_deliverers_DelivererCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @parts/marketplace/all_deliverers/DelivererCard */ \"./src/views/parts/marketplace/all_deliverers/DelivererCard.vue\");\n/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-awesome-swiper */ \"./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js\");\n/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/swiper.css */ \"./node_modules/swiper/css/swiper.css\");\n/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    DelivererCard: _parts_marketplace_all_deliverers_DelivererCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    Swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__[\"Swiper\"],\n    // eslint-disable-line vue/no-unused-components\n    SwiperSlide: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__[\"SwiperSlide\"] // eslint-disable-line vue/no-unused-components\n\n  },\n  metaInfo: {\n    title: \"Liste des livreurs & sociétés de livraison - Livraison e-Commerce Maroc | codrocket.com\",\n    meta: [{\n      name: 'description',\n      content: \"Si vous recherchez un livreur ou une société de livraison qui collecte, stocke et livre vos colis e-commerce pour vous, COD Rocket vous permet de trouver les meilleurs livreurs pour votre projet e-commerce au maroc\"\n    }]\n  },\n  computed: Object(C_Users_user_Desktop_codrocket_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(C_Users_user_Desktop_codrocket_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__[\"mapGetters\"])(['getLanguage', 'getAuthUser'])), {}, {\n    isGuest: function isGuest() {\n      return this.getAuthUser == null;\n    }\n  }),\n  data: function data() {\n    return {\n      topRegions: [],\n      topDeliverers: [],\n      trendingDeliverers: [],\n      loading: true,\n      swiperOption: {\n        slidesPerView: 2,\n        spaceBetween: 5,\n        pagination: {\n          el: '.swiper-pagination',\n          clickable: true,\n          type: 'bullets'\n        },\n        breakpoints: {\n          1280: {\n            slidesPerView: 4,\n            spaceBetween: 25\n          },\n          1024: {\n            slidesPerView: 3,\n            spaceBetween: 25\n          },\n          768: {\n            slidesPerView: 2,\n            spaceBetween: 25\n          },\n          100: {\n            slidesPerView: 1.15,\n            spaceBetween: 10\n          }\n        }\n      }\n    };\n  },\n  filters: {\n    cityName: function cityName(region) {\n      if (region) {\n        return region.city.name;\n      } else {\n        return 'No Region Selected';\n      }\n    }\n  },\n  methods: {\n    /**\r\n     * get top_regions, top_deliverers and trending_deliverers\r\n     */\n    getData: function getData() {\n      var _this = this;\n\n      return Api.get('/api/marketplace').then(function (res) {\n        var data = res.data;\n        _this.topRegions = data.top_regions;\n        _this.topDeliverers = data.top_deliverers;\n        _this.trendingDeliverers = data.trending_deliverers;\n        _this.loading = false;\n      });\n    },\n    changeLanguage: function changeLanguage(lang) {\n      this.$store.commit('setLanguage', lang);\n    }\n  },\n  directives: {\n    swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__[\"directive\"]\n  },\n  created: function created() {\n    this.getData();\n  }\n});\n\n//# sourceURL=webpack:///./src/views/app/deliverers-marketplace/home.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"354d5308-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/deliverers-marketplace/home.vue?vue&type=template&id=1e2431b7&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"354d5308-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/deliverers-marketplace/home.vue?vue&type=template&id=1e2431b7& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar render = function render() {\n  var _vm = this,\n      _c = _vm._self._c;\n\n  return _c(\"div\", [_vm.getAuthUser === null ? _c(\"div\", {\n    staticClass: \"fixed z-20 top-0 h-screen w-screen\"\n  }, [_c(\"div\", {\n    staticClass: \"relative flex justify-center items-center w-screen h-screen\"\n  }, [_c(\"div\", {\n    staticClass: \"absolute z-20 w-screen h-screen inset-0 bg-gray-500 bg-opacity-75 transition-opacity\"\n  }), _c(\"div\", {\n    staticClass: \"bg-white z-30 w-full lg:max-w-lg rounded-md m-2\"\n  }, [_c(\"div\", {\n    staticClass: \"header bg-primary flex justify-center items-center p-2 rounded-t-md text-white\"\n  }, [_c(\"h2\", [_vm._v(_vm._s(_vm.lang(\"home.notif.header\")))]), _c(\"b-dropdown\", {\n    attrs: {\n      id: \"change-lang\",\n      \"toggle-class\": \"text-decoration-none\",\n      \"menu-class\": \"text-center\",\n      \"no-caret\": \"\",\n      variant: \"link\"\n    }\n  }, [_c(\"template\", {\n    slot: \"button-content\"\n  }, [_c(\"i\", {\n    staticClass: \"i-Globe header-icon text-white\",\n    attrs: {\n      role: \"button\",\n      id: \"dropdownMenuButton2\",\n      \"data-toggle\": \"change-lang\",\n      \"aria-haspopup\": \"true\",\n      \"aria-expanded\": \"false\"\n    }\n  })]), _c(\"div\", {\n    staticClass: \"shadow-sm\"\n  }, [_c(\"b-dropdown-item\", {\n    attrs: {\n      disabled: _vm.getLanguage == \"en\"\n    },\n    on: {\n      click: function click($event) {\n        $event.preventDefault();\n        return _vm.changeLanguage(\"en\");\n      }\n    }\n  }, [_vm._v(\" English \")]), _c(\"b-dropdown-item\", {\n    attrs: {\n      disabled: _vm.getLanguage == \"ar\"\n    },\n    on: {\n      click: function click($event) {\n        $event.preventDefault();\n        return _vm.changeLanguage(\"ar\");\n      }\n    }\n  }, [_vm._v(\" عربي \")])], 1)], 2)], 1), _c(\"div\", {\n    staticClass: \"p-2\"\n  }, [_c(\"div\", {\n    staticClass: \"grid grid-cols-3 gap-4 items-center\"\n  }, [_c(\"img\", {\n    attrs: {\n      src: __webpack_require__(/*! @/assets/svgs/auth.svg */ \"./src/assets/svgs/auth.svg\"),\n      alt: \"\"\n    }\n  }), _c(\"div\", {\n    staticClass: \"col-span-2 pr-4\"\n  }, [_c(\"p\", {\n    staticClass: \"text-sm leading-relaxed\"\n  }, [_vm._v(\" \" + _vm._s(_vm.lang(\"home.notif.body\")) + \" \")]), _c(\"div\", {\n    staticClass: \"flex gap-4 mt-4\"\n  }, [_c(\"router-link\", {\n    staticClass: \"flex-1 text-center rounded-md border border-primary p-2\",\n    attrs: {\n      to: {\n        name: \"login\"\n      }\n    }\n  }, [_vm._v(_vm._s(_vm.lang(\"auth.login\")))]), _c(\"router-link\", {\n    staticClass: \"flex-1 text-center rounded-md bg-primary text-white border-primary border-1 p-2\",\n    attrs: {\n      to: {\n        name: \"register\"\n      }\n    }\n  }, [_vm._v(_vm._s(_vm.lang(\"auth.register\")))])], 1)])])])])])]) : _vm._e(), _c(\"div\", {\n    staticClass: \"p-5 pt-48 bg-cover bg-no-repeat bg-center skew-line overflow-hidden relative\",\n    style: \"background-image: url(\".concat(__webpack_require__(/*! @/assets/images/home-bg.svg */ \"./src/assets/images/home-bg.svg\"), \");\")\n  }, [_c(\"div\", {\n    staticClass: \"flex mt-5 default-py relative\"\n  }, [_c(\"div\", {\n    staticClass: \"w-11/12 md:w-10/12 mx-auto\"\n  }, [_c(\"div\", {\n    staticClass: \"flex flex-wrap\"\n  }, [_c(\"div\", {\n    staticClass: \"w-full md:w-1/2\"\n  }, [_c(\"div\", {\n    staticClass: \"flex h-full justify-between row\"\n  }, [_c(\"div\", {\n    staticClass: \"self-center\"\n  }, [_c(\"h2\", {\n    staticClass: \"marketplace-headline text-3xl md:text-5xl xl:text-7xl xl:w-10/12 text-white md:mt-5 mb-2\"\n  }, [_vm._v(\" \" + _vm._s(_vm.lang(\"marketplace.headline\")) + \" \")]), _c(\"p\", {\n    staticClass: \"text-gray-200 text-base mt-4\"\n  }, [_vm._v(\" \" + _vm._s(_vm.lang(\"marketplace.sub_headline\")) + \" \")])]), _c(\"div\", {\n    staticClass: \"self-center\"\n  }, [_c(\"router-link\", {\n    staticClass: \"btn text-white border-solid border-white text-16 hover:bg-white hover:bg-opacity-10 mr-3 my-1\",\n    attrs: {\n      to: {\n        name: \"merketplace.deliverers\"\n      }\n    }\n  }, [_vm._v(\" \" + _vm._s(_vm.lang(\"marketplace.buttons.ghost\")) + \" \")]), _vm.isGuest ? _c(\"router-link\", {\n    staticClass: \"btn bg-white text-primary text-16 my-1\",\n    attrs: {\n      to: {\n        name: \"register\"\n      }\n    }\n  }, [_vm._v(\" \" + _vm._s(_vm.lang(\"marketplace.buttons.cta\")) + \" \")]) : _vm._e()], 1)])]), _c(\"div\", {\n    staticClass: \"w-full md:w-1/2 hidden md:block self-start\"\n  }, [_c(\"img\", {\n    staticClass: \"object-fill w-11/12 mt-5 md:mt-0 mx-auto\",\n    staticStyle: {\n      \"max-height\": \"500px\",\n      \"min-height\": \"250px\"\n    },\n    attrs: {\n      src: __webpack_require__(/*! @/assets/on-the-way.svg */ \"./src/assets/on-the-way.svg\"),\n      alt: \"\"\n    }\n  })])])])])]), _c(\"div\", {\n    staticClass: \"flex default-py skew-line relative bg-light\"\n  }, [_c(\"div\", {\n    staticClass: \"w-11/12 md:w-10/12 mx-auto pb-4\"\n  }, [_c(\"div\", {\n    directives: [{\n      name: \"swiper\",\n      rawName: \"v-swiper:topRegionsSwiper\",\n      value: _vm.swiperOption,\n      expression: \"swiperOption\",\n      arg: \"topRegionsSwiper\"\n    }],\n    staticClass: \"pb-5\"\n  }, [_c(\"div\", {\n    staticClass: \"text-center\"\n  }, [_c(\"h4\", {\n    staticClass: \"text-3xl mb-0 text-dark text-center\"\n  }, [_vm._v(_vm._s(_vm.lang(\"marketplace.region_section.title\")))]), _c(\"span\", {\n    staticClass: \"w-24 inline-block border-t-2 border-solid border-primary text-center\"\n  })]), !_vm.loading ? _c(\"div\", {\n    staticClass: \"swiper-wrapper mt-4 cursor-move\"\n  }, _vm._l(_vm.topRegions, function (region, index) {\n    return _c(\"div\", {\n      key: index,\n      staticClass: \"swiper-slide\"\n    }, [_c(\"custom-card\", {\n      staticClass: \"relative mt-3\"\n    }, [_c(\"span\", {\n      staticClass: \"absolute top-0 left-0 -mt-3 ml-2 text-white bg-primary px-2 rounded-lg py-1\"\n    }, [_vm._v(_vm._s(region.name))]), _c(\"img\", {\n      staticClass: \"object-fill w-full h-52 py-1\",\n      attrs: {\n        src: \"/img/regions/\".concat(region.id, \".svg#\"),\n        alt: \"\"\n      }\n    }), _c(\"p\", {\n      staticClass: \"text-right -mb-1\"\n    }, [_vm._v(\" \" + _vm._s(region.count + \" \" + _vm.lang(\"marketplace.region_section.deliverers\")) + \" \")])])], 1);\n  }), 0) : _c(\"div\", {\n    staticClass: \"swiper-wrapper mt-4\"\n  }, _vm._l(4, function (i, index) {\n    return _c(\"div\", {\n      key: index,\n      staticClass: \"card swiper-slide\"\n    }, [_c(\"b-skeleton\", {\n      staticClass: \"d-block m-0 p-0\",\n      attrs: {\n        width: \"100%\",\n        height: \"250px\"\n      }\n    })], 1);\n  }), 0), _c(\"div\", {\n    staticClass: \"swiper-pagination -mb-1\"\n  })])])]), _c(\"div\", {\n    staticClass: \"flex default-py skew-line relative bg-white\"\n  }, [_c(\"div\", {\n    staticClass: \"w-11/12 md:w-10/12 mx-auto\"\n  }, [_c(\"div\", {\n    directives: [{\n      name: \"swiper\",\n      rawName: \"v-swiper:topDeliverersSwiper\",\n      value: _vm.swiperOption,\n      expression: \"swiperOption\",\n      arg: \"topDeliverersSwiper\"\n    }],\n    staticClass: \"top-deliverers my-5\"\n  }, [_c(\"div\", {\n    staticClass: \"text-center my-4\"\n  }, [_c(\"h4\", {\n    staticClass: \"text-3xl mb-0 text-dark text-center\"\n  }, [_vm._v(_vm._s(_vm.lang(\"marketplace.deliverer_section.top\")))]), _c(\"span\", {\n    staticClass: \"w-24 inline-block border-t-2 border-solid border-primary text-center\"\n  })]), _c(\"div\", {\n    staticClass: \"swiper-wrapper mb-48\"\n  }, _vm._l(_vm.topDeliverers, function (deliverer, index) {\n    return _c(\"div\", {\n      key: index,\n      staticClass: \"swiper-slide\"\n    }, [_c(\"deliverer-card\", {\n      attrs: {\n        deliverer: deliverer\n      }\n    })], 1);\n  }), 0), _c(\"div\", {\n    staticClass: \"swiper-pagination\"\n  })])])]), _c(\"div\", {\n    staticClass: \"flex pt-4 md:pt-0 pb-5 relative bg-light\"\n  }, [_c(\"div\", {\n    staticClass: \"w-11/12 md:w-10/12 mx-auto\"\n  }, [_c(\"div\", {\n    directives: [{\n      name: \"swiper\",\n      rawName: \"v-swiper:trendingDeliveresSwiper\",\n      value: _vm.swiperOption,\n      expression: \"swiperOption\",\n      arg: \"trendingDeliveresSwiper\"\n    }],\n    staticClass: \"trending-deliverers my-5\"\n  }, [_c(\"div\", {\n    staticClass: \"text-center my-4\"\n  }, [_c(\"h4\", {\n    staticClass: \"text-3xl mb-0 text-dark text-center\"\n  }, [_vm._v(_vm._s(_vm.lang(\"marketplace.deliverer_section.trending\")))]), _c(\"span\", {\n    staticClass: \"w-24 inline-block border-t-2 border-solid border-primary text-center\"\n  })]), _c(\"div\", {\n    staticClass: \"swiper-wrapper mb-48\"\n  }, _vm._l(_vm.trendingDeliverers, function (deliverer, index) {\n    return _c(\"div\", {\n      key: index,\n      staticClass: \"swiper-slide\"\n    }, [_c(\"deliverer-card\", {\n      attrs: {\n        deliverer: deliverer\n      }\n    })], 1);\n  }), 0), _c(\"div\", {\n    staticClass: \"swiper-pagination\"\n  })])])])]);\n};\n\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/views/app/deliverers-marketplace/home.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22354d5308-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/deliverers-marketplace/home.vue?vue&type=style&index=0&id=1e2431b7&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/deliverers-marketplace/home.vue?vue&type=style&index=0&id=1e2431b7&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".default-py {\\n  padding: 4rem 0;\\n}\\n.marketplace-headline {\\n  line-height: 1.3;\\n}\\n.skew-line {\\n  position: relative;\\n}\\n.skew-line:after {\\n    content: '';\\n    background-color: var(--light);\\n    display: block;\\n    width: 200%;\\n    height: 100px;\\n    left: -10px;\\n    position: absolute;\\n    bottom: -100px;\\n    -webkit-transform: rotate(3deg);\\n            transform: rotate(3deg);\\n    z-index: 2;\\n}\\n.skew-line.skew-light:after {\\n    background-color: var(--white);\\n}\\n.swiper-pagination-bullet.swiper-pagination-bullet-active {\\n  width: 25px;\\n  border-radius: 5px;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"C:/Users/user/Desktop/codrocket/src/views/app/deliverers-marketplace/C:/Users/user/Desktop/codrocket/src/views/app/deliverers-marketplace/home.vue\"],\"names\":[],\"mappings\":\"AACA;EACC,eAAe;AAAA;AAGhB;EACC,gBAAgB;AAAA;AAGjB;EACC,kBAAkB;AAAA;AADnB;IAGE,WAAW;IACX,8BAA8B;IAC9B,cAAc;IACd,WAAW;IACX,aAAa;IACb,WAAW;IACX,kBAAkB;IAClB,cAAc;IACd,+BAAuB;YAAvB,uBAAuB;IACvB,UAAU;AAAA;AAZZ;IAgBE,8BAA8B;AAAA;AAIhC;EACC,WAAW;EACX,kBAAkB;AAAA\",\"file\":\"home.vue\",\"sourcesContent\":[\"\\r\\n.default-py {\\r\\n\\tpadding: 4rem 0;\\r\\n}\\r\\n\\r\\n.marketplace-headline {\\r\\n\\tline-height: 1.3;\\r\\n}\\r\\n\\r\\n.skew-line {\\r\\n\\tposition: relative;\\r\\n\\t&:after {\\r\\n\\t\\tcontent: '';\\r\\n\\t\\tbackground-color: var(--light);\\r\\n\\t\\tdisplay: block;\\r\\n\\t\\twidth: 200%;\\r\\n\\t\\theight: 100px;\\r\\n\\t\\tleft: -10px;\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\tbottom: -100px;\\r\\n\\t\\ttransform: rotate(3deg);\\r\\n\\t\\tz-index: 2;\\r\\n\\t}\\r\\n\\r\\n\\t&.skew-light:after {\\r\\n\\t\\tbackground-color: var(--white);\\r\\n\\t}\\r\\n}\\r\\n\\r\\n.swiper-pagination-bullet.swiper-pagination-bullet-active {\\r\\n\\twidth: 25px;\\r\\n\\tborder-radius: 5px;\\r\\n}\\r\\n\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/views/app/deliverers-marketplace/home.vue?./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/deliverers-marketplace/home.vue?vue&type=style&index=0&id=1e2431b7&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/app/deliverers-marketplace/home.vue?vue&type=style&index=0&id=1e2431b7&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=style&index=0&id=1e2431b7&lang=scss& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/deliverers-marketplace/home.vue?vue&type=style&index=0&id=1e2431b7&lang=scss&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"34e869d2\", content, false, {\"sourceMap\":true,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/views/app/deliverers-marketplace/home.vue?./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/assets/images/home-bg.svg":
/*!***************************************!*\
  !*** ./src/assets/images/home-bg.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/home-bg.f7310f20.svg\";\n\n//# sourceURL=webpack:///./src/assets/images/home-bg.svg?");

/***/ }),

/***/ "./src/assets/on-the-way.svg":
/*!***********************************!*\
  !*** ./src/assets/on-the-way.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/on-the-way.00ae6845.svg\";\n\n//# sourceURL=webpack:///./src/assets/on-the-way.svg?");

/***/ }),

/***/ "./src/assets/svgs/auth.svg":
/*!**********************************!*\
  !*** ./src/assets/svgs/auth.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/auth.9e785269.svg\";\n\n//# sourceURL=webpack:///./src/assets/svgs/auth.svg?");

/***/ }),

/***/ "./src/views/app/deliverers-marketplace/home.vue":
/*!*******************************************************!*\
  !*** ./src/views/app/deliverers-marketplace/home.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_vue_vue_type_template_id_1e2431b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=1e2431b7& */ \"./src/views/app/deliverers-marketplace/home.vue?vue&type=template&id=1e2431b7&\");\n/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ \"./src/views/app/deliverers-marketplace/home.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _home_vue_vue_type_style_index_0_id_1e2431b7_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.vue?vue&type=style&index=0&id=1e2431b7&lang=scss& */ \"./src/views/app/deliverers-marketplace/home.vue?vue&type=style&index=0&id=1e2431b7&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _home_vue_vue_type_template_id_1e2431b7___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _home_vue_vue_type_template_id_1e2431b7___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/app/deliverers-marketplace/home.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/app/deliverers-marketplace/home.vue?");

/***/ }),

/***/ "./src/views/app/deliverers-marketplace/home.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./src/views/app/deliverers-marketplace/home.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/deliverers-marketplace/home.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/app/deliverers-marketplace/home.vue?");

/***/ }),

/***/ "./src/views/app/deliverers-marketplace/home.vue?vue&type=style&index=0&id=1e2431b7&lang=scss&":
/*!*****************************************************************************************************!*\
  !*** ./src/views/app/deliverers-marketplace/home.vue?vue&type=style&index=0&id=1e2431b7&lang=scss& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_1e2431b7_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=style&index=0&id=1e2431b7&lang=scss& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/deliverers-marketplace/home.vue?vue&type=style&index=0&id=1e2431b7&lang=scss&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_1e2431b7_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_1e2431b7_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_1e2431b7_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_1e2431b7_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/views/app/deliverers-marketplace/home.vue?");

/***/ }),

/***/ "./src/views/app/deliverers-marketplace/home.vue?vue&type=template&id=1e2431b7&":
/*!**************************************************************************************!*\
  !*** ./src/views/app/deliverers-marketplace/home.vue?vue&type=template&id=1e2431b7& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_354d5308_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_1e2431b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"354d5308-vue-loader-template\"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=template&id=1e2431b7& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"354d5308-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/app/deliverers-marketplace/home.vue?vue&type=template&id=1e2431b7&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_354d5308_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_1e2431b7___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_354d5308_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_1e2431b7___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/app/deliverers-marketplace/home.vue?");

/***/ })

}]);