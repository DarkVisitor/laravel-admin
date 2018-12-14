webpackJsonp([1],{

/***/ 100:
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
                _vm._v(
                  "\n                " + _vm._s(_vm.title) + "\n            "
                )
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
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.isLoginOrReset,
                        expression: "isLoginOrReset"
                      }
                    ],
                    ref: "loginForm",
                    attrs: { model: _vm.form, rules: _vm.rules }
                  },
                  [
                    _c(
                      "FormItem",
                      { attrs: { prop: "userName" } },
                      [
                        _c("Input", {
                          attrs: {
                            clearable: "",
                            placeholder: "用户名/手机号/邮箱"
                          },
                          model: {
                            value: _vm.form.userName,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "userName", $$v)
                            },
                            expression: "form.userName"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "FormItem",
                      { attrs: { prop: "password" } },
                      [
                        _c("Input", {
                          attrs: {
                            type: "password",
                            clearable: "",
                            placeholder: "登录密码"
                          },
                          model: {
                            value: _vm.form.password,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "password", $$v)
                            },
                            expression: "form.password"
                          }
                        })
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
                          attrs: { clearable: "", placeholder: "验证码" },
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
                            on: { click: _vm.handleLoginSubmit }
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
                _c(
                  "Form",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.isLoginOrReset,
                        expression: "!isLoginOrReset"
                      }
                    ],
                    ref: "resetForm",
                    attrs: { model: _vm.resetFrom, rules: _vm.resetRules }
                  },
                  [
                    _c(
                      "FormItem",
                      { attrs: { prop: "userName" } },
                      [
                        _c("Input", {
                          attrs: { placeholder: "手机号或邮箱" },
                          model: {
                            value: _vm.resetFrom.userName,
                            callback: function($$v) {
                              _vm.$set(_vm.resetFrom, "userName", $$v)
                            },
                            expression: "resetFrom.userName"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "FormItem",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.isCheck,
                            expression: "isCheck"
                          }
                        ],
                        attrs: { prop: "verifyCode" }
                      },
                      [
                        _c("Input", {
                          staticStyle: { width: "120px" },
                          attrs: { placeholder: "验证码" },
                          model: {
                            value: _vm.resetFrom.verifyCode,
                            callback: function($$v) {
                              _vm.$set(_vm.resetFrom, "verifyCode", $$v)
                            },
                            expression: "resetFrom.verifyCode"
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
                      { attrs: { prop: "remoteVerifyCode" } },
                      [
                        _c("Input", {
                          staticStyle: { width: "150px" },
                          attrs: { placeholder: "短信验证码/邮箱验证码" },
                          model: {
                            value: _vm.resetFrom.remoteVerifyCode,
                            callback: function($$v) {
                              _vm.$set(_vm.resetFrom, "remoteVerifyCode", $$v)
                            },
                            expression: "resetFrom.remoteVerifyCode"
                          }
                        }),
                        _vm._v(" "),
                        _vm.isSend
                          ? _c(
                              "Button",
                              {
                                staticClass: "verify-code",
                                attrs: { type: "default", disabled: "" }
                              },
                              [_vm._v(_vm._s(_vm.t) + " 秒后可重发")]
                            )
                          : _c(
                              "Button",
                              {
                                staticClass: "verify-code",
                                attrs: { type: "default" },
                                on: { click: _vm.sendVerifyCode }
                              },
                              [_vm._v("获取验证码")]
                            )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "FormItem",
                      { attrs: { prop: "password" } },
                      [
                        _c("Input", {
                          attrs: { type: "password", placeholder: "登录密码" },
                          model: {
                            value: _vm.resetFrom.password,
                            callback: function($$v) {
                              _vm.$set(_vm.resetFrom, "password", $$v)
                            },
                            expression: "resetFrom.password"
                          }
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
                            on: { click: _vm.handleResetSubmit }
                          },
                          [
                            !_vm.loading
                              ? _c("span", [_vm._v("重置密码")])
                              : _c("span", [_vm._v("重置密码中")])
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticStyle: {
                      "text-align": "right",
                      "margin-bottom": "20px"
                    }
                  },
                  [
                    _c(
                      "a",
                      {
                        staticStyle: { "user-select": "none" },
                        on: { click: _vm.switchLoginReset }
                      },
                      [_vm._v(_vm._s(_vm.loginReset))]
                    )
                  ]
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

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(97)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(99)
/* template */
var __vue_template__ = __webpack_require__(100)
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
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
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

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "\n.refresh-verify-code { \n    position: absolute; \n    width: 144px; \n    height: 32px;\n    top: 1px; \n    right: -3px; \n    background: transparent!important;\n}\n.verify-code {\n    width: 110px;\n    margin-right: 0!important;\n}\n.switch-login-reset {\n    /* position: absolute;\n    top: 32px;\n    right: 0px; */\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    line-height: 24px;\n}\n", ""]);

// exports


/***/ }),

/***/ 99:
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
            title: '欢迎登录LaravelAdmin',
            loading: false,
            loginReset: '忘记密码？',
            isLoginOrReset: true,
            t: 60,
            isSend: false,
            isCheck: false,
            form: {
                userName: '',
                password: '',
                verifyCode: ''
            },
            rules: {
                userName: [{ required: true, whitespace: true, message: '请输入用户名或手机号或邮箱', trigger: 'blur' }],
                password: [{ required: true, whitespace: true, message: '请输入登录密码', trigger: 'blur' }],
                verifyCode: [{ required: true, whitespace: true, message: '请输入验证码', trigger: 'blur' }]
            },
            resetFrom: {
                userName: '',
                password: '',
                verifyCode: '',
                remoteVerifyCode: ''
            },
            resetRules: {
                userName: [{ required: true, whitespace: true, message: '请输入手机号或邮箱', trigger: 'blur' }, { type: 'string', validator: function validator(rule, value, callback) {
                        if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value) && !/^1\d{10}$/.test(value)) {
                            callback('无效的手机号或邮箱');
                        } else {
                            callback();
                        }
                    }, trigger: 'blur' }],
                password: [{ required: true, whitespace: true, message: '请输入登录密码', trigger: 'blur' }],
                verifyCode: [{ required: true, whitespace: true, message: '请输入验证码', trigger: 'blur' }],
                remoteVerifyCode: [{ required: true, whitespace: true, message: '请输入短信验证码或邮箱验证码', trigger: 'blur' }]
            }
        };
    },

    computed: {
        verifyCodeImage: function verifyCodeImage() {
            return this.$store.getters.getVerifyCode;
        }
    },
    watch: {
        'resetFrom.userName': function resetFromUserName(curVal) {
            this.isCheck = true;
        }
    },
    methods: {
        /**
         * Switch login or reset password.
         */
        switchLoginReset: function switchLoginReset() {
            this.isLoginOrReset = !this.isLoginOrReset;
            this.loginReset = this.isLoginOrReset ? '忘记密码？' : '立即登录';
            this.title = this.isLoginOrReset ? '欢迎登录LaravelAdmin' : '重置密码';
            this.handleRefreshVerifyCode();
        },

        /**
         * Send verification code countdown timer.
         */
        countDown: function countDown() {
            var that = this;
            setTimeout(function () {
                if (that.t) {
                    that.countDown();
                    that.t = that.t - 1;
                } else {
                    that.isSend = false;
                    that.t = 60;
                }
            }, 1000);
        },

        /**
         * Send SMS or email verification code.
         */
        sendVerifyCode: function sendVerifyCode() {
            var _this = this;

            this.$refs.resetForm.validateField('userName', function (valid) {
                if (!valid) {
                    _this.$refs.resetForm.validateField('verifyCode', function (error) {
                        if (!error) {
                            _this.isSend = true;
                            _this.countDown();
                        }
                    });
                }
            });
        },

        /**
         * Submit login data.
         */
        handleLoginSubmit: function handleLoginSubmit() {
            var _this2 = this;

            this.$refs.loginForm.validate(function (valid) {
                if (valid) {
                    var that = _this2;
                    that.loading = true; //设置登录按钮提交状态
                    console.log('debug');
                    __WEBPACK_IMPORTED_MODULE_0__js_api_login_js__["a" /* default */].postAccessToken({ username: _this2.form.userName, password: _this2.form.password, verify_code: _this2.form.verifyCode }).then(function (response) {
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
         * Submit reset password data.
         */
        handleResetSubmit: function handleResetSubmit() {},

        /**
         * Refresh verify code.
         */
        handleRefreshVerifyCode: function handleRefreshVerifyCode() {
            this.$store.dispatch('loadVerifyCode', { t: Date.now() });
        }
    },
    created: function created() {
        this.$store.dispatch('loadVerifyCode', { t: Date.now() });
    }
});

/***/ })

});