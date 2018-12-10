webpackJsonp([1,0,3],Array(26).concat([
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(94)
/* template */
var __vue_template__ = __webpack_require__(96)
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
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(92)
/* template */
var __vue_template__ = __webpack_require__(93)
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
Component.options.__file = "resources/js/views/admin/home/home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05c69920", Component.options)
  } else {
    hotAPI.reload("data-v-05c69920", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./article/article.vue": 99,
	"./essay/essay.vue": 104,
	"./essay/write-essay.vue": 107,
	"./home/home.vue": 88,
	"./login/login.vue": 26,
	"./main.vue": 11,
	"./module/module.vue": 116,
	"./role/components/auth-tree/auth-tree-node.vue": 97,
	"./role/components/auth-tree/auth-tree.vue": 98,
	"./role/role.vue": 130,
	"./user/user.vue": 134
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 89;

/***/ }),
/* 90 */,
/* 91 */,
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Home',
    data: function data() {
        return {};
    },

    computed: {},
    watch: {},
    methods: {},
    created: function created() {}
});

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("h1", [_vm._v("欢迎登录本系统")])])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-05c69920", module.exports)
  }
}

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_api_login_js__ = __webpack_require__(95);
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



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            loading: false,
            form: {
                userName: '',
                password: ''
            },
            rules: {
                userName: [{ required: true, whitespace: true, message: '用户名不能为空', trigger: 'blur' }],
                password: [{ required: true, whitespace: true, message: '密码不能为空', trigger: 'blur' }]
            }
        };
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
        }
    },
    created: function created() {}
});

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_libs_axios_js__ = __webpack_require__(5);
/**
 * Imports the APP API URL from the config.
 */


/* harmony default export */ __webpack_exports__["a"] = ({

    postAccessToken: function postAccessToken(data) {
        return __WEBPACK_IMPORTED_MODULE_0__js_libs_axios_js__["a" /* default */].post('/login', data);
    }
});

/***/ }),
/* 96 */
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

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(119)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(121)
/* template */
var __vue_template__ = __webpack_require__(123)
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
Component.options.__file = "resources/js/views/admin/role/components/auth-tree/auth-tree-node.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64072517", Component.options)
  } else {
    hotAPI.reload("data-v-64072517", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(124)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(126)
/* template */
var __vue_template__ = __webpack_require__(129)
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
Component.options.__file = "resources/js/views/admin/role/components/auth-tree/auth-tree.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cfaf2370", Component.options)
  } else {
    hotAPI.reload("data-v-cfaf2370", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(100)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(102)
/* template */
var __vue_template__ = __webpack_require__(103)
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
Component.options.__file = "resources/js/views/admin/article/article.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f52602e", Component.options)
  } else {
    hotAPI.reload("data-v-2f52602e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(101);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("2ac9a70a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f52602e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./article.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f52602e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./article.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "\n.ivu-layout-pages .ivu-layout-sider::after {\r\n    content: '';\r\n    display: block;\r\n    width: 1px;\r\n    height: 100%;\r\n    background: #dcdee2;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    z-index: 1;\n}\r\n", ""]);

// exports


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_components_tags_nav__ = __webpack_require__(28);
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
    components: {
        TagsNav: __WEBPACK_IMPORTED_MODULE_0__js_components_tags_nav__["a" /* default */]
    },
    data: function data() {
        return {};
    },

    computed: {},
    watch: {},
    methods: {},
    created: function created() {}
});

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "ivu-layout-pages" },
    [_c("Layout", [_c("Content", [_c("router-view")], 1)], 1)],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2f52602e", module.exports)
  }
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(105)
/* template */
var __vue_template__ = __webpack_require__(106)
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
Component.options.__file = "resources/js/views/admin/essay/essay.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-26ba313c", Component.options)
  } else {
    hotAPI.reload("data-v-26ba313c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_api_essay_js__ = __webpack_require__(27);
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
        var _this = this;

        return {
            searchDateTime: '',
            formSearchParams: {
                keyword: '',
                typeid: '',
                datetime: [],
                limit: 10,
                page: 1
            },
            columns4: [{
                type: 'selection',
                width: 60,
                align: 'center'
            }, {
                title: '标题',
                align: 'center',
                key: 'title'
            }, {
                title: '分类',
                align: 'center',
                render: function render(h, params) {
                    return h('span', params.row.belongs_to_category.title);
                }
            }, {
                title: '标签',
                align: 'center',
                render: function render(h, params) {
                    var rows = [],
                        tags = params.row.belongs_to_many_tag;
                    if (tags.length) {
                        $.each(tags, function (key, val) {
                            rows.push(h('Tag', {
                                props: {
                                    color: 'orange'
                                }
                            }, val.title));
                        });
                    }
                    return h('div', {
                        style: {
                            textAlign: 'left'
                        }
                    }, rows);
                }
            }, {
                title: '状态',
                align: 'center',
                render: function render(h, params) {
                    switch (params.row.status) {
                        case 0:
                            return h('Tag', {
                                props: {
                                    color: 'primary'
                                }
                            }, '仅保存');
                            break;
                        case 1:
                            return h('Tag', {
                                props: {
                                    color: 'success'
                                }
                            }, '上线');
                            break;
                    }
                }
            }, {
                title: '发布时间',
                key: 'created_at'
            }, {
                title: '操作',
                key: 'action',
                width: 180,
                align: 'center',
                render: function render(h, params) {
                    return h('div', [h('Button', {
                        props: {
                            type: 'info',
                            size: 'small',
                            icon: 'md-eye',
                            to: '/essay/detail/' + params.row.id,
                            replace: true,
                            target: '_blank'
                        },
                        attrs: {
                            title: '预览'
                        }
                    }), h('Button', {
                        props: {
                            type: 'info',
                            size: 'small',
                            icon: 'ios-create-outline',
                            to: '/admin/article/essays/write/' + params.row.id
                        },
                        attrs: {
                            title: '编辑'
                        }
                    }), h('Poptip', {
                        props: {
                            trigger: 'click',
                            title: '您确认删除这条记录吗？',
                            placement: 'top-end',
                            confirm: true,
                            okText: '确定',
                            cancelText: '取消',
                            wordWrap: true
                        },
                        on: {
                            'on-ok': function onOk() {
                                _this.deleteEssay(params.row.id);
                            }
                        }
                    }, [h('Button', {
                        props: {
                            type: 'error',
                            size: 'small',
                            icon: 'md-trash'
                        },
                        attrs: {
                            title: '删除'
                        }
                    })])]);
                }
            }],
            options2: {
                shortcuts: [{
                    text: '最近一周',
                    value: function value() {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        return [start, end];
                    }
                }, {
                    text: '最近一个月',
                    value: function value() {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        return [start, end];
                    }
                }, {
                    text: '最近三个月',
                    value: function value() {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        return [start, end];
                    }
                }]
            }
        };
    },

    computed: {
        essayList: function essayList() {
            return this.$store.getters.getEssayList;
        },
        pageTotal: function pageTotal() {
            return this.$store.getters.getPageTotal;
        },
        categorys: function categorys() {
            return this.$store.getters.getCategoryList.data;
        }
    },
    methods: {
        /**
         * 提交筛选
         */
        handleSubmit: function handleSubmit(name) {
            this.$store.dispatch('loadEssayList', this.formSearchParams);
        },
        handleSelectAll: function handleSelectAll(name) {
            this.$refs.selection.selectAll(status);
        },

        /**
         * 重置筛选条件
         */
        handleReset: function handleReset(name) {
            this.$refs[name].resetFields();
        },

        selectedSecond: function selectedSecond(index) {

            this.$router.push({ path: index });
        },
        /**
         * 日期选择器发生改变时将model绑定的值格式化
         */
        changeFormatDateTime: function changeFormatDateTime(datetime) {
            this.formSearchParams.datetime = datetime;
        },
        /**
         * 当页数发生改变时，重新请求数据
         */
        changePage: function changePage(size) {
            this.params.page = size;
            this.$store.dispatch('loadEssayList', this.formSearchParams);
        },
        /**
         * 当每页条数发生改变时，重新请求数据
         */
        changePageLimit: function changePageLimit(limit) {
            this.params.limit = limit;
            this.$store.dispatch('loadEssayList', this.formSearchParams);
        },
        /**
         * 删除文章
         */
        deleteEssay: function deleteEssay(id) {
            var that = this;
            __WEBPACK_IMPORTED_MODULE_0__js_api_essay_js__["a" /* default */].deleteEssayInfo({ id: id }).then(function (response) {
                if (response.data.code) {
                    that.$Message.error(response.data.msg);
                } else {
                    that.$Message.success(response.data.msg);
                    that.$store.dispatch('loadEssayList');
                }
            }).catch(function () {
                that.$Message.info('系统繁忙，请稍后再试!');
            });
        }
    },
    created: function created() {
        this.$store.dispatch('loadEssayList', this.params);
        this.$store.dispatch('loadCategoryList');
    }
});

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "content-header" },
      [
        _c(
          "Form",
          {
            ref: "formSearchData",
            attrs: { model: _vm.formSearchParams, inline: "" }
          },
          [
            _c(
              "FormItem",
              {
                attrs: { prop: "keyword", label: "关键字", "label-width": 60 }
              },
              [
                _c("Input", {
                  staticClass: "header-form-search",
                  attrs: { type: "text", clearable: "", placeholder: "请输入" },
                  model: {
                    value: _vm.formSearchParams.keyword,
                    callback: function($$v) {
                      _vm.$set(_vm.formSearchParams, "keyword", $$v)
                    },
                    expression: "formSearchParams.keyword"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "FormItem",
              {
                attrs: { prop: "typeid", label: "文章分类", "label-width": 60 }
              },
              [
                _c(
                  "Select",
                  {
                    staticClass: "header-form-search",
                    attrs: { clearable: "" },
                    model: {
                      value: _vm.formSearchParams.typeid,
                      callback: function($$v) {
                        _vm.$set(_vm.formSearchParams, "typeid", $$v)
                      },
                      expression: "formSearchParams.typeid"
                    }
                  },
                  _vm._l(_vm.categorys, function(item) {
                    return _c(
                      "Option",
                      { key: item.id, attrs: { value: item.id } },
                      [_vm._v(_vm._s(item.title))]
                    )
                  })
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "FormItem",
              {
                attrs: {
                  prop: "datetime",
                  label: "发布时间",
                  "label-width": 60
                }
              },
              [
                _c("DatePicker", {
                  staticClass: "header-form-search",
                  attrs: {
                    type: "daterange",
                    format: "yyyy-MM-dd",
                    options: _vm.options2,
                    placement: "bottom-end",
                    placeholder: "请选择日期"
                  },
                  on: { "on-change": _vm.changeFormatDateTime },
                  model: {
                    value: _vm.formSearchParams.datetime,
                    callback: function($$v) {
                      _vm.$set(_vm.formSearchParams, "datetime", $$v)
                    },
                    expression: "formSearchParams.datetime"
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
                    attrs: { type: "primary", icon: "ios-search" },
                    on: {
                      click: function($event) {
                        _vm.handleSubmit("formSearchData")
                      }
                    }
                  },
                  [_vm._v("搜索")]
                ),
                _vm._v(" "),
                _c(
                  "Button",
                  {
                    attrs: { type: "default" },
                    on: {
                      click: function($event) {
                        _vm.handleReset("formSearchData")
                      }
                    }
                  },
                  [_vm._v("重置")]
                )
              ],
              1
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
      { staticStyle: { "margin-bottom": "20px" } },
      [
        _c("Table", {
          ref: "selection",
          attrs: { columns: _vm.columns4, data: _vm.essayList, border: true }
        })
      ],
      1
    ),
    _vm._v(" "),
    _vm.pageTotal
      ? _c(
          "div",
          [
            _c("Page", {
              attrs: {
                total: _vm.pageTotal,
                "show-elevator": "",
                "show-total": "",
                "show-sizer": ""
              },
              on: {
                "on-change": _vm.changePage,
                "on-page-size-change": _vm.changePageLimit
              }
            })
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-26ba313c", module.exports)
  }
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(108)
/* template */
var __vue_template__ = __webpack_require__(115)
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
Component.options.__file = "resources/js/views/admin/essay/write-essay.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d90078e", Component.options)
  } else {
    hotAPI.reload("data-v-2d90078e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_api_essay_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_components_upload_picture__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_config_js__ = __webpack_require__(12);
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
    components: {
        UploadPicture: __WEBPACK_IMPORTED_MODULE_1__js_components_upload_picture__["a" /* default */]
    },
    data: function data() {
        return {
            trueValue: 1,
            falseValue: 0,
            isModal: false,
            title: '发布文章',
            essayData: {
                title: '',
                picture: '',
                abstract: '',
                content: '',
                category_id: '',
                tags: [],
                is_private: 0,
                status: 0
            },
            essayValidate: {
                title: [{ required: true, message: '请输入文章标题', trigger: 'blur' }]
            }
        };
    },

    computed: {
        categorys: function categorys() {
            return this.$store.state.essay.categoryList.data;
        },
        tags: function tags() {
            return this.$store.getters.getTagList.data;
        },
        action: function action() {
            return __WEBPACK_IMPORTED_MODULE_2__js_config_js__["a" /* APP_CONFIG */].API_URL + '/upload';
        }
    },
    methods: {
        handleSubmit: function handleSubmit(status) {
            var _this = this;

            this.essayData.status = status;
            this.$refs.essayData.validate(function (valid) {
                if (valid) {
                    var that = _this;
                    __WEBPACK_IMPORTED_MODULE_0__js_api_essay_js__["a" /* default */].postEssayInfo(that.essayData).then(function (response) {
                        if (response.data.code) {
                            that.$Message.error(response.data.msg);
                        } else {
                            that.$Message.success(response.data.msg);
                            that.isModal = false;
                            that.$refs.essayData.resetFields();
                        }
                    }).catch(function () {
                        that.$Message.info('系统繁忙，请稍后再试!');
                    });
                } else {}
            });
        },
        releaseEssay: function releaseEssay() {
            if (this.essayData.title) {
                this.isModal = true;
            } else {
                this.$Message.warning('请输入文章标题');
            }
        },
        modalCancel: function modalCancel() {
            //隐藏弹框
            this.isModal = false;
        },
        editChange: function editChange(d_value, d_render) {
            this.essayData.abstract = d_render;
        },

        /**
         * 编辑文章
         */
        editEssay: function editEssay() {
            var id = this.$route.params.id,
                that = this;
            if (id != undefined) {
                that.$Message.loading({
                    content: 'Loading...',
                    duration: 0
                });
                __WEBPACK_IMPORTED_MODULE_0__js_api_essay_js__["a" /* default */].getEssayInfo({ id: id }).then(function (response) {
                    that.$Message.destroy();
                    that.essayData = response.data.data;
                }).catch(function () {
                    that.$Message.info('系统繁忙，请稍后再试!');
                    that.$router.go(-1);
                });
            }
        },
        $imgAdd: function $imgAdd(pos, $file) {
            var that = this;
            var formdata = new FormData();
            formdata.append('picture', $file);
            axios({
                url: __WEBPACK_IMPORTED_MODULE_2__js_config_js__["a" /* APP_CONFIG */].API_URL + '/upload',
                method: 'post',
                data: formdata,
                headers: { 'Content-Type': 'multipart/form-data' }
            }).then(function (res) {
                that.$refs.md.$img2Url(pos, res.data.url);
            });
        }
    },
    created: function created() {
        this.$store.dispatch('loadCategoryList');
        this.$store.dispatch('loadTagList');
        this.editEssay();
    }
});

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__upload_picture_vue__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__upload_picture_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__upload_picture_vue__);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__upload_picture_vue___default.a);

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(111)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(113)
/* template */
var __vue_template__ = __webpack_require__(114)
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
Component.options.__file = "resources/js/components/upload-picture/upload-picture.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01daa9f4", Component.options)
  } else {
    hotAPI.reload("data-v-01daa9f4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(112);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("20ff98c0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01daa9f4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./upload-picture.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01daa9f4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./upload-picture.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "\n.upload-picture {\n    margin: 12px auto;\n}\n.upload-picture .ivu-upload .ivu-chart-circle {\n    width: 178px;\n    height: 178px;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n}\n.demo-upload-list{\n    display: inline-block;\n    width: 60px;\n    height: 60px;\n    text-align: center;\n    line-height: 60px;\n    border: 1px solid transparent;\n    border-radius: 4px;\n    overflow: hidden;\n    background: #fff;\n    position: relative;\n    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.2);\n            box-shadow: 0 1px 1px rgba(0,0,0,.2);\n    margin-right: 4px;\n}\n.demo-upload-list img{\n    width: 100%;\n    height: 100%;\n}\n.demo-upload-list-cover{\n    display: none;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0,0,0,.6);\n}\n.demo-upload-list:hover .demo-upload-list-cover{\n    display: block;\n}\n.demo-upload-list-cover i{\n    color: #fff;\n    font-size: 20px;\n    cursor: pointer;\n    margin: 0 2px;\n}\n", ""]);

// exports


/***/ }),
/* 113 */
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
    name: 'upload-picture',
    props: {
        value: {
            type: String,
            default: ''
        },
        action: {
            type: String,
            default: ''
        },
        headers: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        fileData: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        name: {
            type: String,
            default: 'file'
        },
        format: {
            type: Array,
            default: function _default() {
                return ['jpg', 'jpeg', 'png'];
            }
        },
        maxSize: {
            type: Number,
            default: 2048
        },
        width: {
            type: Number,
            default: 200
        },
        height: {
            type: Number,
            default: 200
        }
    },
    data: function data() {
        return {
            pictureUrl: '',
            oldPictureUrl: '',
            uploadStatus: false,
            uploadProgress: 0

        };
    },

    watch: {
        value: function value(curVal, oldVal) {
            this.pictureUrl = curVal;
        },
        pictureUrl: function pictureUrl(curVal, oldVal) {
            this.$emit('input', curVal);
        }
    },
    methods: {
        handleBeforeUpload: function handleBeforeUpload() {
            this.uploadStatus = true;
            this.oldPictureUrl = this.pictureUrl;
            this.pictureUrl = '';
        },
        handleProgress: function handleProgress(event, file) {
            this.uploadProgress = parseInt(event.percent);
            if (event.percent == 100) {
                this.uploadStatus = false;
                this.uploadProgress = 0;
            }
        },
        handleSuccess: function handleSuccess(res, file) {
            if (res.code) {
                this.$Notice.error({
                    title: '图片上传',
                    desc: res.msg
                });
            } else {
                this.pictureUrl = res.url;
            }
        },
        handleError: function handleError(err, file) {
            this.pictureUrl = this.oldPictureUrl;
        },
        handleFormatError: function handleFormatError(file) {
            this.$Notice.warning({
                title: 'The file format is incorrect',
                desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
            });
        },
        handleMaxSize: function handleMaxSize(file) {
            this.$Notice.warning({
                title: 'Exceeding file size limit',
                desc: 'File  ' + file.name + ' is too large, no more than 2M.'
            });
        },
        handleRemove: function handleRemove(file) {
            var fileList = this.$refs.upload.fileList;
            this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
        }
    },
    mounted: function mounted() {
        if (this.value) {
            this.pictureUrl = this.value;
        }
    }
});

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "upload-picture", attrs: { value: _vm.value } },
    [
      _c(
        "Upload",
        {
          ref: "upload",
          style: { display: "inline-block", width: _vm.width + "px" },
          attrs: {
            action: _vm.action,
            headers: _vm.headers,
            data: _vm.fileData,
            name: _vm.name,
            "show-upload-list": false,
            type: "drag",
            accept: "image/*",
            format: _vm.format,
            "max-size": _vm.maxSize,
            "before-upload": _vm.handleBeforeUpload,
            "on-progress": _vm.handleProgress,
            "on-success": _vm.handleSuccess,
            "on-error": _vm.handleError,
            "on-format-error": _vm.handleFormatError,
            "on-exceeded-size": _vm.handleMaxSize
          }
        },
        [
          _c(
            "div",
            {
              style: {
                width: _vm.width + "px",
                height: _vm.height + "px",
                lineHeight: _vm.height + "px"
              }
            },
            [
              _vm.uploadStatus
                ? _c("i-circle", { attrs: { percent: _vm.uploadProgress } }, [
                    _c(
                      "span",
                      {
                        staticClass: "demo-Circle-inner",
                        staticStyle: { "font-size": "24px" }
                      },
                      [_vm._v(_vm._s(_vm.uploadProgress) + "%")]
                    )
                  ])
                : !_vm.pictureUrl
                  ? _c("Icon", { attrs: { type: "ios-camera", size: "20" } })
                  : _c("img", {
                      staticStyle: { width: "100%", height: "100%" },
                      attrs: { src: _vm.pictureUrl }
                    })
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-01daa9f4", module.exports)
  }
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        { staticClass: "essay-header-title" },
        [
          _c("Input", {
            attrs: { type: "text", size: "large", placeholder: "文章标题" },
            model: {
              value: _vm.essayData.title,
              callback: function($$v) {
                _vm.$set(_vm.essayData, "title", $$v)
              },
              expression: "essayData.title"
            }
          }),
          _vm._v(" "),
          _c(
            "Button",
            {
              attrs: { type: "primary", size: "large" },
              on: { click: _vm.releaseEssay }
            },
            [_vm._v("发布")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "essay-content" }),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: { title: _vm.title },
          model: {
            value: _vm.isModal,
            callback: function($$v) {
              _vm.isModal = $$v
            },
            expression: "isModal"
          }
        },
        [
          _c(
            "div",
            [
              _c(
                "Form",
                { ref: "essayData", attrs: { model: _vm.essayData } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "文章封面" } },
                    [
                      _c("upload-picture", {
                        attrs: {
                          action: _vm.action,
                          name: "picture",
                          width: 400,
                          height: 200
                        },
                        model: {
                          value: _vm.essayData.picture,
                          callback: function($$v) {
                            _vm.$set(_vm.essayData, "picture", $$v)
                          },
                          expression: "essayData.picture"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    { attrs: { label: "文章分类" } },
                    [
                      _c(
                        "RadioGroup",
                        {
                          model: {
                            value: _vm.essayData.category_id,
                            callback: function($$v) {
                              _vm.$set(_vm.essayData, "category_id", $$v)
                            },
                            expression: "essayData.category_id"
                          }
                        },
                        _vm._l(_vm.categorys, function(item) {
                          return _c(
                            "Radio",
                            { key: item.id, attrs: { label: item.id } },
                            [_vm._v(_vm._s(item.title))]
                          )
                        })
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    { attrs: { label: "文章标签" } },
                    [
                      _c(
                        "CheckboxGroup",
                        {
                          model: {
                            value: _vm.essayData.tags,
                            callback: function($$v) {
                              _vm.$set(_vm.essayData, "tags", $$v)
                            },
                            expression: "essayData.tags"
                          }
                        },
                        _vm._l(_vm.tags, function(item) {
                          return _c(
                            "Checkbox",
                            { key: item.id, attrs: { label: item.id } },
                            [_vm._v(_vm._s(item.title))]
                          )
                        })
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    { attrs: { label: "私密文章", prop: "isPrivate" } },
                    [
                      _c("i-switch", {
                        attrs: {
                          "true-value": _vm.trueValue,
                          "false-value": _vm.falseValue
                        },
                        model: {
                          value: _vm.essayData.is_private,
                          callback: function($$v) {
                            _vm.$set(_vm.essayData, "is_private", $$v)
                          },
                          expression: "essayData.is_private"
                        }
                      })
                    ],
                    1
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
            { attrs: { slot: "footer" }, slot: "footer" },
            [
              _c(
                "Button",
                { attrs: { type: "default" }, on: { click: _vm.modalCancel } },
                [_vm._v("取消")]
              ),
              _vm._v(" "),
              _c(
                "Button",
                {
                  attrs: { type: "default" },
                  on: {
                    click: function($event) {
                      _vm.handleSubmit(0)
                    }
                  }
                },
                [_vm._v("保存为草稿")]
              ),
              _vm._v(" "),
              _c(
                "Button",
                {
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      _vm.handleSubmit(1)
                    }
                  }
                },
                [_vm._v("发布文章")]
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2d90078e", module.exports)
  }
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(117)
/* template */
var __vue_template__ = __webpack_require__(118)
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
Component.options.__file = "resources/js/views/admin/module/module.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c3f86000", Component.options)
  } else {
    hotAPI.reload("data-v-c3f86000", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_api_module_js__ = __webpack_require__(29);
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
        var _this = this;

        return {
            isModal: false,
            modalTitle: '新增',
            trueValue: 1,
            falseValue: 0,
            spinShow: false,
            loading: false,
            moduleData: {
                id: '',
                parent_id: -1,
                title: '',
                vue_router: '',
                laravel_router: '',
                is_menu: 1,
                icon: '',
                sort: 1,
                status: 1
            },
            ruleValidate: {
                parent_id: [{ required: true, type: 'number', min: 0, message: '请选择上级菜单', trigger: 'change' }],
                title: [{ required: true, message: '请输入菜单名称', trigger: 'blur' }]
            },
            columns4: [{
                title: '菜单名称',
                align: 'left',
                minWidth: 180,
                render: function render(h, params) {
                    return h("div", {
                        style: {
                            paddingLeft: params.row.index * 30 + 'px'
                        }
                    }, params.row.title);
                }
            }, {
                title: 'Vue路由',
                key: 'vue_router',
                align: 'left',
                minWidth: 120
            }, {
                title: 'Laravel路由',
                key: 'laravel_router',
                align: 'left',
                minWidth: 120
            }, {
                title: 'icon',
                key: 'icon',
                align: 'center',
                minWidth: 80,
                render: function render(h, params) {
                    return h("Icon", {
                        props: {
                            type: params.row.icon
                        }
                    });
                }
            }, {
                title: '排序',
                key: 'sort',
                align: 'center',
                minWidth: 80
            }, {
                title: '状态',
                align: 'center',
                width: 100,
                render: function render(h, params) {
                    return h('i-switch', {
                        props: {
                            value: params.row.status,
                            size: 'large',
                            trueValue: 1,
                            falseValue: 0,
                            loading: params.row.loading
                        },
                        on: {
                            'on-change': function onChange(value) {
                                //开关状态更改事件
                                _this.updateModuleStatus(params.index, params.row.id, value);
                            }
                        }
                    }, [h('span', {
                        slot: 'open'
                    }, '开启'), h('span', {
                        slot: 'close'
                    }, '关闭')]);
                }
            }, {
                title: '操作',
                key: 'action',
                width: 180,
                align: 'center',
                render: function render(h, params) {
                    return h('div', [h('Button', {
                        props: {
                            type: 'primary',
                            size: 'small',
                            icon: 'ios-create-outline'
                        },
                        attrs: {
                            title: '编辑模块'
                        },
                        on: {
                            click: function click() {
                                _this.updateModuleInfo(params.row.id);
                            }
                        }
                    }), h('Poptip', {
                        props: {
                            trigger: 'click',
                            title: '您确认删除这条记录吗？',
                            placement: 'top-end',
                            confirm: true,
                            okText: '确定',
                            cancelText: '取消',
                            wordWrap: true
                        },
                        on: {
                            'on-ok': function onOk() {
                                _this.deleteModule(params.row.id);
                            }
                        }
                    }, [h('Button', {
                        props: {
                            type: 'error',
                            size: 'small',
                            icon: 'md-trash'
                        },
                        attrs: {
                            title: '删除模块'
                        }
                    })])]);
                }
            }]
        };
    },

    computed: {
        modules: function modules() {
            return this.$store.getters.getModuleList.data;
        },
        menuModules: function menuModules() {
            return this.$store.getters.getMenuModule.data;
        },
        moduleInfo: function moduleInfo() {
            return this.$store.getters.getModuleInfo.data;
        }
    },
    methods: {
        /* handleSelectAll (status) {
            this.$refs.selection.selectAll(status);
        },
        selectedSecond:function(index){
             this.$router.push({path:index})
        }, */
        /** Create module info. */
        createModuleInfo: function createModuleInfo() {
            this.isModal = true;
            this.modalTitle = '新增';
            this.$store.dispatch('loadIsMenuModule');
        },

        /** Update module info. */
        updateModuleInfo: function updateModuleInfo(id) {
            var that = this;
            that.modalTitle = '编辑';
            that.$store.dispatch('loadIsMenuModule');
            that.isModal = true;
            that.spinShow = true;
            __WEBPACK_IMPORTED_MODULE_0__js_api_module_js__["a" /* default */].getModuleInfo(id).then(function (response) {
                if (response.data.code) {
                    that.$Message.error(response.data.msg);
                    that.isModal = false;
                } else {
                    that.moduleData = response.data.data;
                }
                that.spinShow = false;
            }).catch(function () {
                that.$Message.info('系统繁忙，请稍后再试!');
                that.isModal = false;
                that.spinShow = false;
            });
        },

        /** Module cancel event. */
        handleInfoCancel: function handleInfoCancel() {
            // reset from
            this.$refs['moduleData'].resetFields();
            // hide modal
            this.isModal = false;
        },

        /** Save module info event. */
        handleInfoSave: function handleInfoSave() {
            var _this2 = this;

            this.$refs['moduleData'].validate(function (valid) {
                if (valid) {
                    var that = _this2;
                    that.loading = true;
                    __WEBPACK_IMPORTED_MODULE_0__js_api_module_js__["a" /* default */].saveFromModule(_this2.moduleData).then(function (response) {
                        if (response.data.code) {
                            that.$Message.error(response.data.msg);
                        } else {
                            that.$Message.success(response.data.msg);
                            that.$store.dispatch('loadModule');
                            that.isModal = false;
                        }
                        that.loading = false;
                    }).catch(function () {
                        that.$Message.info('系统繁忙，请稍后再试!');
                        that.loading = false;
                    });
                }
            });
        },


        /** 监听Modal显示状态发生改变时 */
        listenVisibleChange: function listenVisibleChange(visible) {
            //Modal隐藏时重置表单
            if (!visible) this.$refs['moduleData'].resetFields();
        },
        /** 顶级菜单列表样式 */
        selectPaddingLeft: function selectPaddingLeft(child) {
            return child * 16 + 16;
        },
        /** Delete menu record. */
        deleteModule: function deleteModule(id) {
            var that = this;
            __WEBPACK_IMPORTED_MODULE_0__js_api_module_js__["a" /* default */].deleteModule({ id: id }).then(function (response) {
                if (response.data.code) {
                    that.$Message.error(response.data.msg);
                } else {
                    that.$Message.success(response.data.msg);
                }
                that.$store.dispatch('loadModule');
            }).catch(function () {
                that.$Message.info('系统繁忙，请稍后再试!');
            });
        },
        /** Update module status */
        updateModuleStatus: function updateModuleStatus(index, id, status) {
            var that = this;
            that.modules[index].loading = true;
            __WEBPACK_IMPORTED_MODULE_0__js_api_module_js__["a" /* default */].updateModuleStatus({ id: id, status: status }).then(function (response) {
                if (response.data.code) {
                    that.$Message.error(response.data.msg);
                } else {
                    that.$Message.success(response.data.msg);
                }
                that.$store.dispatch('loadModule');
                that.modules[index].loading = false;
            }).catch(function () {
                that.$Message.info('系统繁忙，请稍后再试!');
                that.modules[index].loading = false;
            });
        }
    },
    created: function created() {
        this.$store.dispatch('loadModule');
    }
});

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "content-header" }, [
        _c(
          "div",
          { staticClass: "header-action" },
          [
            _c(
              "Button",
              {
                attrs: { type: "success", icon: "android-add" },
                on: { click: _vm.createModuleInfo }
              },
              [_vm._v("新增")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticStyle: { "margin-bottom": "20px" } },
        [
          _c("Table", {
            ref: "expand",
            attrs: { columns: _vm.columns4, data: _vm.modules, border: true }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: { title: _vm.modalTitle },
          on: { "on-visible-change": _vm.listenVisibleChange },
          model: {
            value: _vm.isModal,
            callback: function($$v) {
              _vm.isModal = $$v
            },
            expression: "isModal"
          }
        },
        [
          _vm.spinShow
            ? _c(
                "Spin",
                { attrs: { fix: "" } },
                [
                  _c("Icon", {
                    staticClass: "demo-spin-icon-load",
                    attrs: { type: "ios-loading", size: "50" }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "Form",
            {
              ref: "moduleData",
              attrs: {
                model: _vm.moduleData,
                rules: _vm.ruleValidate,
                "label-width": 100
              }
            },
            [
              _c(
                "FormItem",
                { attrs: { label: "上级菜单", prop: "parent_id" } },
                [
                  _c(
                    "Select",
                    {
                      staticClass: "modal-form-item",
                      model: {
                        value: _vm.moduleData.parent_id,
                        callback: function($$v) {
                          _vm.$set(_vm.moduleData, "parent_id", $$v)
                        },
                        expression: "moduleData.parent_id"
                      }
                    },
                    [
                      _c("Option", { attrs: { value: 0 } }, [
                        _vm._v("顶级菜单")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.menuModules, function(item) {
                        return _c(
                          "Option",
                          {
                            key: item.id,
                            style: {
                              paddingLeft:
                                _vm.selectPaddingLeft(item.index) + "px"
                            },
                            attrs: { value: item.id }
                          },
                          [_vm._v(_vm._s(item.title))]
                        )
                      })
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: "菜单名称", prop: "title" } },
                [
                  _c("Input", {
                    staticClass: "modal-form-item",
                    attrs: { placeholder: "请输入菜单名称" },
                    model: {
                      value: _vm.moduleData.title,
                      callback: function($$v) {
                        _vm.$set(_vm.moduleData, "title", $$v)
                      },
                      expression: "moduleData.title"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: "Vue路由" } },
                [
                  _c("Input", {
                    staticClass: "modal-form-item",
                    attrs: { placeholder: "请输入Vue路由" },
                    model: {
                      value: _vm.moduleData.vue_router,
                      callback: function($$v) {
                        _vm.$set(_vm.moduleData, "vue_router", $$v)
                      },
                      expression: "moduleData.vue_router"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: "Laravel路由" } },
                [
                  _c("Input", {
                    staticClass: "modal-form-item",
                    attrs: { placeholder: "请输入Laravel路由" },
                    model: {
                      value: _vm.moduleData.laravel_router,
                      callback: function($$v) {
                        _vm.$set(_vm.moduleData, "laravel_router", $$v)
                      },
                      expression: "moduleData.laravel_router"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: "导航菜单" } },
                [
                  _c(
                    "i-switch",
                    {
                      attrs: {
                        size: "large",
                        "true-value": _vm.trueValue,
                        "false-value": _vm.falseValue
                      },
                      model: {
                        value: _vm.moduleData.is_menu,
                        callback: function($$v) {
                          _vm.$set(_vm.moduleData, "is_menu", $$v)
                        },
                        expression: "moduleData.is_menu"
                      }
                    },
                    [
                      _c("span", { attrs: { slot: "open" }, slot: "open" }, [
                        _vm._v("是")
                      ]),
                      _vm._v(" "),
                      _c("span", { attrs: { slot: "close" }, slot: "close" }, [
                        _vm._v("否")
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: "icon" } },
                [
                  _c("Input", {
                    staticClass: "modal-form-item",
                    attrs: { placeholder: "请输入icon" },
                    model: {
                      value: _vm.moduleData.icon,
                      callback: function($$v) {
                        _vm.$set(_vm.moduleData, "icon", $$v)
                      },
                      expression: "moduleData.icon"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: "排序" } },
                [
                  _c("InputNumber", {
                    staticClass: "modal-form-item",
                    attrs: { min: 1 },
                    model: {
                      value: _vm.moduleData.sort,
                      callback: function($$v) {
                        _vm.$set(_vm.moduleData, "sort", $$v)
                      },
                      expression: "moduleData.sort"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: "状态" } },
                [
                  _c(
                    "i-switch",
                    {
                      attrs: {
                        size: "large",
                        "true-value": _vm.trueValue,
                        "false-value": _vm.falseValue
                      },
                      model: {
                        value: _vm.moduleData.status,
                        callback: function($$v) {
                          _vm.$set(_vm.moduleData, "status", $$v)
                        },
                        expression: "moduleData.status"
                      }
                    },
                    [
                      _c("span", { attrs: { slot: "open" }, slot: "open" }, [
                        _vm._v("开启")
                      ]),
                      _vm._v(" "),
                      _c("span", { attrs: { slot: "close" }, slot: "close" }, [
                        _vm._v("关闭")
                      ])
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
            { attrs: { slot: "footer" }, slot: "footer" },
            [
              _c(
                "Button",
                {
                  attrs: { type: "text", size: "large" },
                  on: { click: _vm.handleInfoCancel }
                },
                [_vm._v("取消")]
              ),
              _vm._v(" "),
              _c(
                "Button",
                {
                  attrs: {
                    type: "primary",
                    size: "large",
                    loading: _vm.loading
                  },
                  on: { click: _vm.handleInfoSave }
                },
                [_vm._v("保存")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c3f86000", module.exports)
  }
}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(120);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("c208612a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-64072517\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./auth-tree-node.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-64072517\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./auth-tree-node.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_tree_node_vue__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_tree_node_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__auth_tree_node_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_iview_src_mixins_emitter_js__ = __webpack_require__(122);
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
    name: 'auth-tree-node',
    mixins: [__WEBPACK_IMPORTED_MODULE_1_iview_src_mixins_emitter_js__["a" /* default */]],
    components: { AuthTreeNode: __WEBPACK_IMPORTED_MODULE_0__auth_tree_node_vue___default.a },
    props: ['model'],
    data: function data() {
        return {};
    },

    computed: {
        isFolder: function isFolder() {
            return this.model.children && this.model.children.length;
        },
        isChildren: function isChildren() {
            return !this.model.children || !this.model.children.length ? 'active-children' : '';
        }
    },
    methods: {
        onChangeAuth: function onChangeAuth(isCheck) {
            //Vue2.x已移除dispatch方法，该方法使用的是iview-UI自定义的方法，用于事件分发，源码：iview/src/mixins/emitter.js
            this.dispatch('auth-tree', 'on-check', { checked: isCheck, nodeKey: this.model.nodeKey });
        }
    }
});

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function broadcast(componentName, eventName, params) {
    this.$children.forEach(child => {
        const name = child.$options.name;

        if (name === componentName) {
            child.$emit.apply(child, [eventName].concat(params));
        } else {
            // todo 如果 params 是空数组，接收到的会是 undefined
            broadcast.apply(child, [componentName, eventName].concat([params]));
        }
    });
}
/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        dispatch(componentName, eventName, params) {
            let parent = this.$parent || this.$root;
            let name = parent.$options.name;

            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;

                if (parent) {
                    name = parent.$options.name;
                }
            }
            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        },
        broadcast(componentName, eventName, params) {
            broadcast.call(this, componentName, eventName, params);
        }
    }
});

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    { class: _vm.isChildren },
    [
      _c(
        "Checkbox",
        {
          attrs: {
            "true-value": 1,
            "false-value": 0,
            indeterminate: _vm.model.indeterminate
          },
          on: { "on-change": _vm.onChangeAuth },
          model: {
            value: _vm.model.isChecked,
            callback: function($$v) {
              _vm.$set(_vm.model, "isChecked", $$v)
            },
            expression: "model.isChecked"
          }
        },
        [_c("span", [_vm._v(_vm._s(_vm.model.title))])]
      ),
      _vm._v(" "),
      _vm.isFolder
        ? _c(
            "ul",
            { staticClass: "auth-tree-node" },
            _vm._l(_vm.model.children, function(model, key, index) {
              return _c("auth-tree-node", {
                key: index,
                attrs: { index: key, model: model }
              })
            })
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-64072517", module.exports)
  }
}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(125);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("7b518773", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cfaf2370\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./auth-tree.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cfaf2370\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./auth-tree.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_tree_node_vue__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_tree_node_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__auth_tree_node_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_scss__);
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
    name: 'auth-tree',
    components: { AuthTreeNode: __WEBPACK_IMPORTED_MODULE_0__auth_tree_node_vue___default.a },
    model: {
        prop: 'treeData',
        event: 'change'
    },
    props: {
        treeData: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    data: function data() {
        return {
            authTree: [],
            flatAuth: []
        };
    },

    computed: {},
    watch: {
        treeData: function treeData(newVal) {
            this.authTree = newVal;
            this.flatAuth = this.compileFlatAuth();
            this.rebuildTree();
        },
        authTree: function authTree(newVal) {
            this.$emit('change', newVal);
        }
    },
    methods: {
        /** Screening permissions for role groups. */
        compileFlatAuth: function compileFlatAuth() {
            var keyCounter = 0;
            var flatTree = [];
            function flattenChildren(node, parent) {
                node.nodeKey = keyCounter++;
                flatTree[node.nodeKey] = { node: node, nodeKey: node.nodeKey };
                if (typeof parent != 'undefined') {
                    flatTree[node.nodeKey].parent = parent.nodeKey;
                    flatTree[parent.nodeKey]['children'].push(node.nodeKey);
                }

                if (node['children']) {
                    flatTree[node.nodeKey]['children'] = [];
                    node['children'].forEach(function (child) {
                        return flattenChildren(child, node);
                    });
                }
            }

            this.authTree.forEach(function (rootNode) {
                flattenChildren(rootNode);
            });

            return flatTree;
        },
        refreshTreeUp: function refreshTreeUp(nodeKey) {
            //向上刷新树节点数据
            var parentKey = this.flatAuth[nodeKey].parent;
            if (typeof parentKey == 'undefined') return;

            var nullCount = 0;
            var fullCount = 0;
            var node = this.flatAuth[nodeKey].node;
            var parentNode = this.flatAuth[parentKey].node;

            for (var key in parentNode['children']) {
                if (parentNode['children'][key].isChecked === 0) {
                    nullCount++;
                } else if (parentNode['children'][key].isChecked === 1 && !parentNode['children'][key].indeterminate) {
                    fullCount++;
                }
            }

            if (parentNode['children'].length === nullCount) {
                this.$set(parentNode, 'isChecked', 0);
                this.$set(parentNode, 'indeterminate', false);
            } else if (parentNode['children'].length === fullCount) {
                this.$set(parentNode, 'isChecked', 1);
                this.$set(parentNode, 'indeterminate', false);
            } else {
                this.$set(parentNode, 'isChecked', 1);
                this.$set(parentNode, 'indeterminate', true);
            }

            this.refreshTreeUp(parentKey);
        },
        refreshTreeDown: function refreshTreeDown(node) {
            var _this = this;

            var changes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            //向下刷新树节点数据

            for (var key in changes) {
                this.$set(node, key, changes[key]);
            }
            if (node['children']) {
                node['children'].forEach(function (child) {
                    _this.refreshTreeDown(child, changes);
                });
            }
        },
        rebuildTree: function rebuildTree() {
            for (var key in this.flatAuth) {
                if (this.flatAuth[key].node.isChecked) {
                    this.refreshTreeUp(this.flatAuth[key].nodeKey);
                }
            }
        },
        handleCheck: function handleCheck(_ref) {
            var checked = _ref.checked,
                nodeKey = _ref.nodeKey;

            var node = this.flatAuth[nodeKey].node;
            this.$set(node, 'isChecked', checked);
            this.$set(node, 'indeterminate', false);

            this.refreshTreeUp(nodeKey);
            this.refreshTreeDown(node, { isChecked: checked, indeterminate: false });
        }
    },
    mounted: function mounted() {
        this.$on('on-check', this.handleCheck);
    }
});

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(128);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(90)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, ".role-author-tree ul {\n  list-style-type: none; }\n\n.role-author-tree .auth-tree > li {\n  padding: 15px;\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 14px;\n  box-shadow: 0 2px 2px 0 #ddd; }\n\n.role-author-tree .auth-tree .auth-tree-node {\n  display: inline-block;\n  vertical-align: middle; }\n\n.role-author-tree .auth-tree .auth-tree-node .active-children {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 4px; }\n\n.role-author-tree .auth-tree li .ivu-checkbox-wrapper {\n  width: 100px; }\n", ""]);

// exports


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "role-author-tree" }, [
    _c(
      "ul",
      { staticClass: "auth-tree" },
      _vm._l(_vm.authTree, function(model, key, index) {
        return _c("auth-tree-node", {
          key: index,
          attrs: { index: key, model: model }
        })
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-cfaf2370", module.exports)
  }
}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(131)
/* template */
var __vue_template__ = __webpack_require__(133)
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
Component.options.__file = "resources/js/views/admin/role/role.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61d1e100", Component.options)
  } else {
    hotAPI.reload("data-v-61d1e100", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_auth_tree__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_api_role_js__ = __webpack_require__(30);
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
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        AuthTree: __WEBPACK_IMPORTED_MODULE_0__components_auth_tree__["a" /* default */]
    },
    data: function data() {
        var _this = this;

        return {
            roleId: '',
            loading: false,
            spinShow: false,
            isInfoModal: false,
            infoModalTitle: '新增',
            isMemberModal: false,
            memberList: [],
            allotMemberList: [],
            transferTitle: ['未分配成员', '已分配成员'],
            isAuthModal: false,
            roleGroupAuthList: [],
            roleGroupForm: {
                id: '',
                title: '',
                remarks: ''
            },
            ruleValidate: {
                title: [{ required: true, message: '请输入分组名称', trigger: 'blur' }]
            },
            columns4: [{
                type: 'index',
                title: '编号',
                width: 60,
                align: 'center'
            }, {
                title: '分组名称',
                key: 'title',
                align: 'center',
                minWidth: 120
            }, {
                title: '分组描述',
                key: 'remarks',
                align: 'center',
                minWidth: 120
            }, {
                title: '用户列表',
                align: 'center',
                minWidth: 320,
                render: function render(h, params) {
                    var rows = [];
                    var admins = params.row.belongs_to_many_admin;
                    if (admins.length) {
                        $.each(admins, function (key, val) {
                            rows.push(h('Tag', {
                                props: {
                                    color: 'cyan'
                                }
                            }, val.name));
                        });
                    }
                    return h('div', {
                        style: {
                            textAlign: 'left'
                        }
                    }, rows);
                }
            }, {
                title: '操作',
                key: 'action',
                width: 200,
                align: 'center',
                render: function render(h, params) {
                    return h('div', [h('Button', {
                        props: {
                            type: 'info',
                            size: 'small',
                            icon: 'md-lock',
                            disabled: params.row.id == '8bce12cbdfaf480fa69172e28eefb891' ? true : false
                        },
                        on: {
                            click: function click() {
                                _this.handleRoleGroupAuth(params.row.id);
                                _this.roleId = params.row.id;
                            }
                        },
                        attrs: {
                            title: '权限分配'
                        }
                    }), h('Button', {
                        props: {
                            type: 'success',
                            size: 'small',
                            icon: 'md-person-add'
                        },
                        attrs: {
                            title: '成员分配'
                        },
                        on: {
                            click: function click() {
                                _this.handleAllotMembers(params.row.id);
                            }
                        }
                    }), h('Button', {
                        props: {
                            type: 'primary',
                            size: 'small',
                            icon: 'ios-create-outline',
                            disabled: params.row.id == '8bce12cbdfaf480fa69172e28eefb891' ? true : false
                        },
                        attrs: {
                            title: '编辑分组'
                        },
                        on: {
                            click: function click() {
                                _this.updateRoleGroupInfo(params.row.id);
                            }
                        }
                    }), h('Poptip', {
                        props: {
                            trigger: 'click',
                            title: '您确认删除这条记录吗？',
                            placement: 'top-end',
                            confirm: true,
                            okText: '确定',
                            cancelText: '取消',
                            wordWrap: true
                        },
                        on: {
                            'on-ok': function onOk() {
                                _this.deleteRole(params.index, params.row.id);
                            }
                        }
                    }, [h('Button', {
                        props: {
                            type: 'error',
                            size: 'small',
                            icon: 'md-trash',
                            disabled: params.row.id == '8bce12cbdfaf480fa69172e28eefb891' ? true : false
                        },
                        attrs: {
                            title: '删除分组'
                        }
                    })])]);
                }
            }]
        };
    },

    computed: {
        roleList: function roleList() {
            this.loading = false;
            return this.$store.getters.getRoleList.data;
        },
        roleInfo: function roleInfo() {
            return this.$store.getters.getRoleInfo.data;
        }
    },
    watch: {},
    methods: {
        /** Create role group info. */
        createRoleGroupInfo: function createRoleGroupInfo() {
            this.isInfoModal = true;
            this.infoModalTitle = '新增';
        },

        /** Update role group info. */
        updateRoleGroupInfo: function updateRoleGroupInfo(id) {
            var that = this;
            that.infoModalTitle = '编辑';
            that.spinShow = true;
            that.isInfoModal = true;
            __WEBPACK_IMPORTED_MODULE_1__js_api_role_js__["a" /* default */].getRoleInfo({ id: id }).then(function (response) {
                if (response.data.code) {
                    that.isInfoModal = false;
                    that.$Message.error(response.data.msg);
                } else {
                    that.roleGroupForm = response.data.data;
                }
                that.spinShow = false;
            }).catch(function () {
                that.$Message.info('系统繁忙，请稍后再试!');
                that.isInfoModal = false;
                that.spinShow = false;
            });
        },

        /** Admin group modal cancel event. */
        handleInfoCancel: function handleInfoCancel() {
            // Reset from
            this.$refs['roleGroupForm'].resetFields();
            this.resetRoleGroupFormFields();
            // Hide modal
            this.isInfoModal = false;
        },

        /** Administrator group form submission event. */
        handleInfoSave: function handleInfoSave() {
            var _this2 = this;

            this.$refs.roleGroupForm.validate(function (valid) {
                if (valid) {
                    var that = _this2;
                    that.loading = true;
                    __WEBPACK_IMPORTED_MODULE_1__js_api_role_js__["a" /* default */].postRoleInfo(that.roleGroupForm).then(function (response) {
                        if (response.data.code) {
                            that.$Message.error(response.data.msg);
                        } else {
                            that.$Message.success(response.data.msg);
                            that.$store.dispatch('loadRoleList');
                            that.isInfoModal = false;
                        }
                        that.loading = false;
                    }).catch(function () {
                        that.$Message.info('系统繁忙，请稍后再试!');
                        that.loading = false;
                    });
                }
            });
        },

        /** Listen for User Group Information Modal Box to Send Change Events. */
        listenInfoModalChange: function listenInfoModalChange(visible) {
            if (!visible) {
                this.$refs.roleGroupForm.resetFields();
                this.resetRoleGroupFormFields();
            }
        },

        /** Reset role group fileds. */
        resetRoleGroupFormFields: function resetRoleGroupFormFields() {
            this.roleGroupForm = {
                id: '',
                title: '',
                remarks: ''
            };
        },

        /** Delete user group information. */
        deleteRole: function deleteRole(index, id) {
            var that = this;
            __WEBPACK_IMPORTED_MODULE_1__js_api_role_js__["a" /* default */].delRoleInfo({ id: id }).then(function (response) {
                if (response.data.code) {
                    that.$Message.error(response.data.msg);
                } else {
                    that.$Message.success(response.data.msg);
                    that.roleList.splice(index, 1);
                }
            }).catch(function () {
                that.$Message.info('系统繁忙，请稍后再试！');
            });
        },

        /** Allot member to role. */
        handleAllotMembers: function handleAllotMembers(id) {
            var that = this;
            that.roleId = id;
            that.isMemberModal = true;
            that.spinShow = true;
            __WEBPACK_IMPORTED_MODULE_1__js_api_role_js__["a" /* default */].findRoleByMember({ id: id }).then(function (response) {
                if (response.data.code) {
                    that.isMemberModal = false;
                    that.$Message.error(response.data.msg);
                } else {
                    that.memberList = response.data.adminList;
                    that.allotMemberList = response.data.roleMembers;
                }
                that.spinShow = false;
            }).catch(function (error) {
                that.$Message.info('系统繁忙，请稍后再试！');
                that.isMemberModal = false;
                that.spinShow = false;
            });
        },

        /** Allocation member. */
        handleAllotMemberChange: function handleAllotMemberChange(newTargetKeys) {
            this.allotMemberList = newTargetKeys;
        },

        /** Cancel member assignment operation. */
        handleMemberCancel: function handleMemberCancel() {
            this.isMemberModal = false;
        },

        /** Save member assignment information. */
        handleMemberSave: function handleMemberSave() {
            var that = this;
            that.loading = true;
            __WEBPACK_IMPORTED_MODULE_1__js_api_role_js__["a" /* default */].postAllotMember({ id: that.roleId, member: that.allotMemberList }).then(function (response) {
                if (response.data.code) {
                    that.$Message.error(response.data.msg);
                } else {
                    that.$Message.success(response.data.msg);
                    that.isMemberModal = false;
                    that.$store.dispatch('loadRoleList');
                }
                that.loading = false;
            }).catch(function (error) {
                that.$Message.info('系统繁忙，请稍后再试！');
                that.loading = false;
            });
        },

        /** Allocate role group permissions. */
        handleRoleGroupAuth: function handleRoleGroupAuth(id) {
            var that = this;
            that.isAuthModal = true;
            that.spinShow = true;
            __WEBPACK_IMPORTED_MODULE_1__js_api_role_js__["a" /* default */].getRoleAuth({ id: id }).then(function (response) {
                if (response.data.code) {
                    that.$Message.error(response.data.msg);
                    that.isAuthModal = false;
                } else {
                    that.roleGroupAuthList = response.data.authTree;
                }
                that.spinShow = false;
            }).catch(function () {
                that.$Message.info('系统繁忙，请稍后再试!');
                that.isAuthModal = false;
                that.spinShow = false;
            });
        },

        /** Cancel assigning role group permissions. */
        handleAuthCancel: function handleAuthCancel() {
            this.isAuthModal = false;
        },

        /** Save role group permission information. */
        handleAuthSave: function handleAuthSave() {
            var that = this;
            that.loading = true;
            __WEBPACK_IMPORTED_MODULE_1__js_api_role_js__["a" /* default */].postRoleAuth({ id: this.roleId, authority: this.roleGroupAuthList }).then(function (response) {
                if (response.data.code) {
                    that.$Message.error(response.data.msg);
                } else {
                    that.$Message.success(response.data.msg);
                    that.isAuthModal = false;
                }
                that.loading = false;
            }).catch(function () {
                that.$Message.info('系统繁忙，请稍后再试!');
                that.loading = false;
            });
        }
    },
    mounted: function mounted() {
        this.loading = true;
        this.$store.dispatch('loadRoleList');
    }
});

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_tree_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_tree_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__auth_tree_vue__);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__auth_tree_vue___default.a);

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "content-header" }, [
        _c(
          "div",
          { staticClass: "header-action" },
          [
            _c(
              "Button",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: true,
                    expression: "true"
                  }
                ],
                attrs: { type: "info", icon: "android-add" },
                on: { click: _vm.createRoleGroupInfo }
              },
              [_vm._v("新增")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticStyle: { "margin-bottom": "20px" } },
        [
          _c("Table", {
            ref: "table",
            attrs: {
              columns: _vm.columns4,
              data: _vm.roleList,
              border: true,
              loading: _vm.loading
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: { title: _vm.infoModalTitle },
          on: { "on-visible-change": _vm.listenInfoModalChange },
          model: {
            value: _vm.isInfoModal,
            callback: function($$v) {
              _vm.isInfoModal = $$v
            },
            expression: "isInfoModal"
          }
        },
        [
          _vm.spinShow
            ? _c(
                "Spin",
                { attrs: { fix: "" } },
                [
                  _c("Icon", {
                    staticClass: "demo-spin-icon-load",
                    attrs: { type: "ios-loading", size: "50" }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "Form",
            {
              ref: "roleGroupForm",
              attrs: {
                model: _vm.roleGroupForm,
                rules: _vm.ruleValidate,
                "label-width": 100
              }
            },
            [
              _c(
                "FormItem",
                { attrs: { label: "分组名称", prop: "title" } },
                [
                  _c("Input", {
                    staticClass: "modal-form-item",
                    attrs: { placeholder: "请输入分组名称" },
                    model: {
                      value: _vm.roleGroupForm.title,
                      callback: function($$v) {
                        _vm.$set(_vm.roleGroupForm, "title", $$v)
                      },
                      expression: "roleGroupForm.title"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: "分组描述", prop: "remarks" } },
                [
                  _c("Input", {
                    staticClass: "modal-form-item",
                    attrs: {
                      type: "textarea",
                      rows: 4,
                      placeholder: "请输入分组描述"
                    },
                    model: {
                      value: _vm.roleGroupForm.remarks,
                      callback: function($$v) {
                        _vm.$set(_vm.roleGroupForm, "remarks", $$v)
                      },
                      expression: "roleGroupForm.remarks"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { attrs: { slot: "footer" }, slot: "footer" },
            [
              _c(
                "Button",
                {
                  attrs: { type: "text", size: "large" },
                  on: { click: _vm.handleInfoCancel }
                },
                [_vm._v("取消")]
              ),
              _vm._v(" "),
              _c(
                "Button",
                {
                  attrs: {
                    type: "primary",
                    size: "large",
                    loading: _vm.loading
                  },
                  on: { click: _vm.handleInfoSave }
                },
                [_vm._v("保存")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: { title: "成员分配" },
          model: {
            value: _vm.isMemberModal,
            callback: function($$v) {
              _vm.isMemberModal = $$v
            },
            expression: "isMemberModal"
          }
        },
        [
          _vm.spinShow
            ? _c(
                "Spin",
                { attrs: { fix: "" } },
                [
                  _c("Icon", {
                    staticClass: "demo-spin-icon-load",
                    attrs: { type: "ios-loading", size: "50" }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("Transfer", {
            attrs: {
              data: _vm.memberList,
              targetKeys: _vm.allotMemberList,
              titles: _vm.transferTitle,
              "list-style": { width: "210px" },
              filterable: "",
              "filter-placeholder": "请输入成员名称"
            },
            on: { "on-change": _vm.handleAllotMemberChange }
          }),
          _vm._v(" "),
          _c(
            "div",
            { attrs: { slot: "footer" }, slot: "footer" },
            [
              _c(
                "Button",
                {
                  attrs: { type: "text", size: "large" },
                  on: { click: _vm.handleMemberCancel }
                },
                [_vm._v("取消")]
              ),
              _vm._v(" "),
              _c(
                "Button",
                {
                  attrs: {
                    type: "primary",
                    size: "large",
                    loading: _vm.loading
                  },
                  on: { click: _vm.handleMemberSave }
                },
                [_vm._v("保存")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: { title: "权限分配", width: "80%" },
          model: {
            value: _vm.isAuthModal,
            callback: function($$v) {
              _vm.isAuthModal = $$v
            },
            expression: "isAuthModal"
          }
        },
        [
          _vm.spinShow
            ? _c(
                "Spin",
                { attrs: { fix: "" } },
                [
                  _c("Icon", {
                    staticClass: "demo-spin-icon-load",
                    attrs: { type: "ios-loading", size: "50" }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("auth-tree", {
            model: {
              value: _vm.roleGroupAuthList,
              callback: function($$v) {
                _vm.roleGroupAuthList = $$v
              },
              expression: "roleGroupAuthList"
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            { attrs: { slot: "footer" }, slot: "footer" },
            [
              _c(
                "Button",
                {
                  attrs: { type: "text", size: "large" },
                  on: { click: _vm.handleAuthCancel }
                },
                [_vm._v("取消")]
              ),
              _vm._v(" "),
              _c(
                "Button",
                {
                  attrs: {
                    type: "primary",
                    size: "large",
                    loading: _vm.loading
                  },
                  on: { click: _vm.handleAuthSave }
                },
                [_vm._v("保存")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-61d1e100", module.exports)
  }
}

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(135)
/* template */
var __vue_template__ = __webpack_require__(136)
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
Component.options.__file = "resources/js/views/admin/user/user.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ee24ca0", Component.options)
  } else {
    hotAPI.reload("data-v-0ee24ca0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 135 */
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
        var _this = this;

        return {
            searchDateTime: '',
            formSearchData: {
                keyword: '',
                typeid: '',
                datetime: ''
            },
            columns4: [{
                type: 'index',
                width: 60,
                align: 'center'
            }, {
                title: '头像',
                align: 'center',
                render: function render(h, params) {
                    return h('Avatar', {
                        props: {
                            shape: 'square',
                            size: 'large',
                            src: params.row.avatar,
                            icon: 'ios-person'
                        }
                    });
                }
            }, {
                title: '昵称',
                key: 'nickname'
            }, {
                title: 'Email',
                key: 'email'
            }, {
                title: '状态',
                width: 100,
                align: 'center',
                render: function render(h, params) {
                    return h('i-switch', {
                        props: {
                            value: params.row.status,
                            size: 'large',
                            trueValue: 1,
                            falseValue: 0
                        },
                        on: {
                            'on-change': function onChange(value) {
                                console.log(value);
                                //开关状态更改事件
                                console.log(params);
                            }
                        }
                    }, [h('span', {
                        slot: 'open'
                    }, '开启'), h('span', {
                        slot: 'close'
                    }, '关闭')]);
                }
            }, {
                title: '注册时间',
                key: 'created_at'
            }, {
                title: '操作',
                key: 'action',
                fixed: 'right',
                width: 180,
                align: 'center',
                render: function render(h, params) {
                    return h('div', [h('Button', {
                        props: {
                            type: 'info',
                            size: 'small',
                            icon: 'md-eye'
                        },
                        attrs: {
                            title: '预览'
                        },
                        on: {
                            click: function click() {
                                console.log(params.row);
                                _this.selectedSecond("/form");
                            }
                        }
                    }), h('Button', {
                        props: {
                            type: 'info',
                            size: 'small',
                            icon: 'ios-create-outline'
                        },
                        attrs: {
                            title: '编辑'
                        }
                    }), h('Button', {
                        props: {
                            type: 'error',
                            size: 'small',
                            icon: 'md-trash'
                        },
                        attrs: {
                            title: '删除'
                        }
                    })]);
                }
            }],
            data1: [{
                nickname: 'John Brown',
                email: '123@163.com',
                status: 1,
                created_at: '2016-10-03'
            }, {
                nickname: 'Jim Green',
                email: '10001@qq.com',
                status: 1,
                created_at: '2016-10-01'
            }, {
                nickname: 'Joe Black',
                email: '12345@qq.com',
                status: 0,
                created_at: '2016-10-02'
            }, {
                nickname: 'Jon Snow',
                email: '12345@163.com',
                status: 1,
                created_at: '2016-10-04'
            }],
            cityList: [{
                value: 'New York',
                label: 'New York'
            }, {
                value: 'London',
                label: 'London'
            }, {
                value: 'Sydney',
                label: 'Sydney'
            }, {
                value: 'Ottawa',
                label: 'Ottawa'
            }, {
                value: 'Paris',
                label: 'Paris'
            }, {
                value: 'Canberra',
                label: 'Canberra'
            }],
            model1: '',
            options2: {
                shortcuts: [{
                    text: '最近一周',
                    value: function value() {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        return [start, end];
                    }
                }, {
                    text: '最近一个月',
                    value: function value() {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        return [start, end];
                    }
                }, {
                    text: '最近三个月',
                    value: function value() {
                        var end = new Date();
                        var start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        return [start, end];
                    }
                }]
            }
        };
    },

    methods: {
        handleSubmit: function handleSubmit(name) {
            console.log(this.formSearchData);
        },
        handleSelectAll: function handleSelectAll(name) {
            this.$refs.selection.selectAll(status);
        },
        handleReset: function handleReset(name) {
            this.$refs[name].resetFields();
            //重置时清除时间组件数据
            this.searchDateTime = '';
        },

        selectedSecond: function selectedSecond(index) {

            this.$router.push({ path: index });
        },
        changeDateTime: function changeDateTime(datetime) {
            this.$set(this.formSearchData, 'datetime', datetime.join(','));
        }
    }
});

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "content-header" },
      [
        _c(
          "Form",
          {
            ref: "formSearchData",
            attrs: { model: _vm.formSearchData, inline: "" }
          },
          [
            _c(
              "FormItem",
              {
                attrs: { prop: "keyword", label: "关键字", "label-width": 60 }
              },
              [
                _c("Input", {
                  staticClass: "header-form-search",
                  attrs: { type: "text", clearable: "", placeholder: "请输入" },
                  model: {
                    value: _vm.formSearchData.keyword,
                    callback: function($$v) {
                      _vm.$set(_vm.formSearchData, "keyword", $$v)
                    },
                    expression: "formSearchData.keyword"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "FormItem",
              {
                attrs: { prop: "typeid", label: "文章分类", "label-width": 60 }
              },
              [
                _c(
                  "Select",
                  {
                    staticClass: "header-form-search",
                    attrs: { clearable: "" },
                    model: {
                      value: _vm.formSearchData.typeid,
                      callback: function($$v) {
                        _vm.$set(_vm.formSearchData, "typeid", $$v)
                      },
                      expression: "formSearchData.typeid"
                    }
                  },
                  _vm._l(_vm.cityList, function(item) {
                    return _c(
                      "Option",
                      { key: item.value, attrs: { value: item.value } },
                      [_vm._v(_vm._s(item.label))]
                    )
                  })
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "FormItem",
              {
                attrs: {
                  prop: "datetime",
                  label: "注册时间",
                  "label-width": 60
                }
              },
              [
                _c("DatePicker", {
                  staticClass: "header-form-search",
                  attrs: {
                    type: "daterange",
                    format: "yyyy-MM-dd",
                    options: _vm.options2,
                    placement: "bottom-end",
                    placeholder: "请选择日期"
                  },
                  on: { "on-change": _vm.changeDateTime },
                  model: {
                    value: _vm.searchDateTime,
                    callback: function($$v) {
                      _vm.searchDateTime = $$v
                    },
                    expression: "searchDateTime"
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
                    attrs: { type: "primary", icon: "ios-search" },
                    on: {
                      click: function($event) {
                        _vm.handleSubmit("formSearchData")
                      }
                    }
                  },
                  [_vm._v("搜索")]
                ),
                _vm._v(" "),
                _c(
                  "Button",
                  {
                    attrs: { type: "default" },
                    on: {
                      click: function($event) {
                        _vm.handleReset("formSearchData")
                      }
                    }
                  },
                  [_vm._v("重置")]
                )
              ],
              1
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
      { staticStyle: { "margin-bottom": "20px" } },
      [
        _c("Table", {
          ref: "selection",
          attrs: { columns: _vm.columns4, data: _vm.data1 }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      [
        _c("Page", {
          attrs: {
            total: 100,
            "show-elevator": "",
            "show-total": "",
            "show-sizer": ""
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0ee24ca0", module.exports)
  }
}

/***/ })
]));