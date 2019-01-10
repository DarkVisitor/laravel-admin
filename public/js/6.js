webpackJsonp([6],{

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(168)
/* template */
var __vue_template__ = __webpack_require__(169)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/errors/419.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c57bef7", Component.options)
  } else {
    hotAPI.reload("data-v-3c57bef7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },

    methods: {
        backHome: function backHome() {
            this.$router.replace({
                name: 'admin'
            });
        },
        backPrev: function backPrev() {
            this.$router.go(-1);
        }
    }
});

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "error-page" }, [
    _c("div", { staticClass: "container" }, [
      _c("img", { attrs: { src: "/svg/error-401.svg" } }),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "back-btn-group" },
        [
          _c(
            "Button",
            {
              attrs: { type: "text", size: "large" },
              on: { click: _vm.backHome }
            },
            [_vm._v("返回首页")]
          ),
          _vm._v(" "),
          _c(
            "Button",
            {
              attrs: { type: "text", size: "large" },
              on: { click: _vm.backPrev }
            },
            [_vm._v("返回上一页")]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-con" }, [
      _c("h4", [_vm._v("404")]),
      _vm._v(" "),
      _c("h5", [_vm._v("Oh~~您没有浏览这个页面的权限~")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3c57bef7", module.exports)
  }
}

/***/ })

});