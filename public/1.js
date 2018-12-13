webpackJsonp([1],{

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(155);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("796ba4d3", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-83191bd8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-83191bd8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "\n.refresh-verify-code { \n    position: absolute; \n    width: 144px; \n    height: 32px;\n    top: 1px; \n    right: -3px; \n    background: transparent!important;\n}\n", ""]);

// exports


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(154)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(97)
/* template */
var __vue_template__ = __webpack_require__(98)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources/js/views/admin/login/login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-83191bd8", Component.options)
  } else {
    hotAPI.reload("data-v-83191bd8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_api_login_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_libs_util_js__ = __webpack_require__(1);
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
        return {
            loading: false,
            form: {
                userName: '',
                password: '',
                verifyCode: ''
            },
            rules: {
                userName: [{ required: true, whitespace: true, message: '用户名不能为空', trigger: 'blur' }],
                password: [{ required: true, whitespace: true, message: '密码不能为空', trigger: 'blur' }],
                verifyCode: [{ required: true, whitespace: true, message: '验证码不能为空', trigger: 'blur' }]
            }
        };
    },

    computed: {
        verifyCodeImage: function verifyCodeImage() {
            return this.$store.getters.getVerifyCode;
        }
    },
    methods: {
        handleSubmit: function handleSubmit() {
            var _this = this;

            this.$refs.loginForm.validate(function (valid) {
                if (valid) {
                    var that = _this;
                    that.loading = true; //设置登录按钮提交状态
                    __WEBPACK_IMPORTED_MODULE_0__js_api_login_js__["a" /* default */].postAccessToken({ username: _this.form.userName, password: _this.form.password }).then(function (response) {
                        //console.log(response.data);
                        var res = response.data;
                        if (res.code) {
                            that.$Notice.error({
                                title: '登录失败',
                                desc: res.msg,
                                duration: 3
                            });
                            that.loading = false; //修改为可提交状态
                        } else {
                            that.$Notice.success({
                                title: '登录成功',
                                desc: res.msg,
                                duration: 3
                            });
                            Object(__WEBPACK_IMPORTED_MODULE_1__js_libs_util_js__["e" /* setToken */])(res.data);
                            //移除所有本地存储信息
                            localStorage.clear();
                            that.loading = false; //修改为可提交状态
                            //跳转到后台首页
                            /* that.$router.push({
                                name: 'admin'
                            }); */
                            that.$router.push({
                                path: '/admin/home'
                            });
                        }
                    }).catch(function (e) {
                        that.$Message.info('系统繁忙，请稍后再试!');
                        that.loading = false; //修改为可提交状态
                    });
                }
            });
        },

        /**
         * Refresh verify code.
         */
        handleRefreshVerifyCode: function handleRefreshVerifyCode() {
            console.log('debug');
            this.$store.dispatch('loadVerifyCode', { t: Date.now() });
        }
    },
    created: function created() {
        this.$store.dispatch('loadVerifyCode', { t: Date.now() });
    }
});

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "login",
      on: {
        keydown: function($event) {
          if (
            !("button" in $event) &&
            _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
          ) {
            return null
          }
          return _vm.handleSubmit($event)
        }
      }
    },
    [
      _c(
        "div",
        { staticClass: "login-con" },
        [
          _c("Card", { attrs: { bordered: false } }, [
            _c(
              "p",
              { attrs: { slot: "title" }, slot: "title" },
              [
                _c("Icon", { attrs: { type: "log-in" } }),
                _vm._v("\n                欢迎登录LaravelAdmin\n            ")
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-con" },
              [
                _c(
                  "Form",
                  {
                    ref: "loginForm",
                    attrs: { model: _vm.form, rules: _vm.rules }
                  },
                  [
                    _c(
                      "FormItem",
                      { attrs: { prop: "userName" } },
                      [
                        _c(
                          "Input",
                          {
                            attrs: { placeholder: "请输入用户名" },
                            model: {
                              value: _vm.form.userName,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "userName", $$v)
                              },
                              expression: "form.userName"
                            }
                          },
                          [
                            _c(
                              "span",
                              { attrs: { slot: "prepend" }, slot: "prepend" },
                              [
                                _c("Icon", {
                                  attrs: { size: 16, type: "ios-person" }
                                })
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "FormItem",
                      { attrs: { prop: "password" } },
                      [
                        _c(
                          "Input",
                          {
                            attrs: {
                              type: "password",
                              placeholder: "请输入密码"
                            },
                            model: {
                              value: _vm.form.password,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "password", $$v)
                              },
                              expression: "form.password"
                            }
                          },
                          [
                            _c(
                              "span",
                              { attrs: { slot: "prepend" }, slot: "prepend" },
                              [
                                _c("Icon", {
                                  attrs: { size: 14, type: "md-lock" }
                                })
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "FormItem",
                      { attrs: { prop: "verifyCode" } },
                      [
                        _c("Input", {
                          staticStyle: { width: "120px" },
                          attrs: { placeholder: "请输入验证码" },
                          model: {
                            value: _vm.form.verifyCode,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "verifyCode", $$v)
                            },
                            expression: "form.verifyCode"
                          }
                        }),
                        _vm._v(" "),
                        _c("Avatar", {
                          staticStyle: { width: "144px" },
                          attrs: { shape: "square", src: _vm.verifyCodeImage }
                        }),
                        _vm._v(" "),
                        _c("Button", {
                          staticClass: "refresh-verify-code",
                          attrs: { type: "text" },
                          on: { click: _vm.handleRefreshVerifyCode }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "FormItem",
                      [
                        _c(
                          "Button",
                          {
                            attrs: {
                              loading: _vm.loading,
                              type: "primary",
                              long: ""
                            },
                            on: { click: _vm.handleSubmit }
                          },
                          [
                            !_vm.loading
                              ? _c("span", [_vm._v("登录")])
                              : _c("span", [_vm._v("登录中")])
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("p", { staticClass: "login-tip" }, [
                  _vm._v("\n                    输入任意用户名和密码即可"),
                  _c("br"),
                  _vm._v(
                    "\n                    ©版权所有：xxx\n                "
                  )
                ])
              ],
              1
            )
          ])
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-83191bd8", module.exports)
  }
}

/***/ })

});