/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/e172f12afafa6f56dd418c17471ee62f', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/e172f12afafa6f56dd418c17471ee62f',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "ct"
	  ],
	  "style": {
	    "height": function () {return this.ctHeight}
	  },
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "img"
	      ],
	      "style": {
	        "width": 400,
	        "height": 400
	      },
	      "attr": {
	        "src": function () {return this.img}
	      }
	    },
	    {
	      "type": "text",
	      "style": {
	        "fontSize": 42
	      },
	      "attr": {
	        "value": "Hello Weex!!!"
	      }
	    },
	    {
	      "type": "input",
	      "attr": {
	        "type": "url",
	        "autofocus": "true",
	        "placeholder": "...",
	        "value": "http://alibaba.github.io/weex/"
	      },
	      "style": {
	        "placeholderColor": "#666666"
	      }
	    },
	    {
	      "type": "slider",
	      "classList": [
	        "slider"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "slider-pages"
	          ],
	          "repeat": function () {return this.itemList},
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "img"
	              ],
	              "attr": {
	                "src": function () {return this.pictureUrl}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "title"
	              ],
	              "attr": {
	                "value": function () {return this.title}
	              }
	            }
	          ]
	        },
	        {
	          "type": "indicator",
	          "classList": [
	            "indicator"
	          ]
	        }
	      ]
	    },
	    {
	      "type": "scroller",
	      "children": [
	        {
	          "type": "div",
	          "repeat": function () {return this.list},
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return (this.name) + ': $' + (this.price)}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "muted:"
	          }
	        },
	        {
	          "type": "switch",
	          "attr": {
	            "checked": "true"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "ct": {
	    "width": 750,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "img": {
	    "marginBottom": 20,
	    "width": 150,
	    "height": 150
	  },
	  "title": {
	    "flex": 1,
	    "color": "#ff0000",
	    "fontSize": 48,
	    "fontWeight": "bold",
	    "backgroundColor": "#eeeeee"
	  },
	  "slider": {
	    "flexDirection": "row",
	    "margin": 18,
	    "width": 714,
	    "height": 230
	  },
	  "slider-pages": {
	    "flexDirection": "row",
	    "width": 714,
	    "height": 200
	  },
	  "indicator": {
	    "width": 714,
	    "height": 200,
	    "position": "absolute",
	    "top": 1,
	    "left": 1,
	    "itemColor": "red",
	    "itemSelectedColor": "blue",
	    "itemSize": 20
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    ctHeight: 800,
	    img: '//gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg',

	    itemList: [{ itemId: '520421163634', title: 'item1', pictureUrl: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg' }, { itemId: '522076777462', title: 'item2', pictureUrl: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg' }, { itemId: '522076777462', title: 'iten3', pictureUrl: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg' }],

	    list: [{ name: '...', price: 100 }, { name: '...', price: 500 }, { name: '...', price: 1.5 }]

	  }},
	  ready: function ready() {
	    this.ctHeight = this.$getConfig().env.deviceHeight;
	  }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);