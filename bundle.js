(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = global || self, factory(global.Vue));
}(this, function (Vue) { 'use strict';

  Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script = {
    name: 'AppInput',
    props: {
      title: { type: String, default: '' },
      help: { type: String, default: '' },
      bad: { type: String, default: '' }
    }
  };

  function normalizeComponent(compiledTemplate, injectStyle, defaultExport, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, isShadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof isShadowMode === 'function') {
          createInjectorSSR = createInjector;
          createInjector = isShadowMode;
          isShadowMode = false;
      }
      // Vue.extend constructor export interop
      var options = typeof defaultExport === 'function' ? defaultExport.options : defaultExport;
      // render functions
      if (compiledTemplate && compiledTemplate.render) {
          options.render = compiledTemplate.render;
          options.staticRenderFns = compiledTemplate.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      var hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (injectStyle) {
                  injectStyle.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (injectStyle) {
          hook = isShadowMode
              ? function () {
                  injectStyle.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
              }
              : function (context) {
                  injectStyle.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              var originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              var existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return defaultExport;
  }

  var isOldIE = typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
      return function (id, style) { return addStyle(id, style); };
  }
  var HEAD = document.head || document.getElementsByTagName('head')[0];
  var styles = {};
  function addStyle(id, css) {
      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
      if (!style.ids.has(id)) {
          style.ids.add(id);
          var code = css.source;
          if (css.map) {
              // https://developer.chrome.com/devtools/docs/javascript-debugging
              // this makes source maps inside style tags work properly in Chrome
              code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
              // http://stackoverflow.com/a/26603875
              code +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                      ' */';
          }
          if (!style.element) {
              style.element = document.createElement('style');
              style.element.type = 'text/css';
              if (css.media)
                  { style.element.setAttribute('media', css.media); }
              HEAD.appendChild(style.element);
          }
          if ('styleSheet' in style.element) {
              style.styles.push(code);
              style.element.styleSheet.cssText = style.styles
                  .filter(Boolean)
                  .join('\n');
          }
          else {
              var index = style.ids.size - 1;
              var textNode = document.createTextNode(code);
              var nodes = style.element.childNodes;
              if (nodes[index])
                  { style.element.removeChild(nodes[index]); }
              if (nodes.length)
                  { style.element.insertBefore(textNode, nodes[index]); }
              else
                  { style.element.appendChild(textNode); }
          }
      }
  }

  /* script */
  var __vue_script__ = script;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script.__file = "/home/travis/build/SevereCloud/test-registration/src/components/AppInput.vue";

  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"input"},[_c('div',{staticClass:"input-title"},[_c('div',[_vm._v("\n      "+_vm._s(_vm.title)+"\n    ")]),(_vm.help.length>0)?_c('div',{staticClass:"input-help"},[_c('div',{staticClass:"input-help-button"},[_vm._v("\n        ?\n      ")]),_c('div',{staticClass:"input-help-text"},[_vm._v(_vm._s(_vm.help))])]):_vm._e(),(_vm.bad.length>0)?_c('div',{staticClass:"input-bad"},[_vm._v("\n      "+_vm._s(_vm.bad)+"\n    ")]):_vm._e()]),_c('div',{staticClass:"input-content"},[_vm._t("default")],2)])};
  var __vue_staticRenderFns__ = [];

    /* style */
    var __vue_inject_styles__ = function (inject) {
      if (!inject) { return }
      inject("data-v-03359be6_0", { source: ".input-title{display:flex;align-items:baseline;font-size:24px;color:#b7b7b7;margin-bottom:13px}.input{margin-bottom:40px}.input-content input{width:100%;padding:14px 18px;background:#f7f7f7;border:1px solid #f5f5f5;box-sizing:border-box;border-radius:5px;font-size:18px;line-height:21px;color:#b7b7b7}.input-content input.notValid{border:1px solid red}.input-content input.valid{border:1px solid #00ff38}.input-help{position:relative;width:12px}.input-help-text{display:none;width:198px;position:absolute;bottom:20px;left:16px;padding:5px 17px;font-size:14px;line-height:19px;white-space:pre;color:#b200f0;background:#fefefe;box-shadow:0 4px 10px rgba(0,0,0,.05);border-radius:3px}.input-help-text::after{content:'';position:absolute;border:10px solid transparent;border-left:20px solid #fefefe;bottom:-10px;left:0}.input-help:hover .input-help-text{display:block}.input-help-button{position:absolute;width:11px;height:11px;margin-left:3px;bottom:0;border-radius:50%;border:1px solid #000;box-sizing:border-box;font-family:Roboto;font-style:normal;font-weight:900;font-size:6px;line-height:7px;text-align:center;user-select:none;color:#000}.input-bad{margin-left:7px;font-size:13px;line-height:15px;color:red}", map: undefined, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__ = undefined;
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* style inject SSR */
    

    
    var AppInput = normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      createInjector,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$1 = {
    name: 'AppButton',
    props: {
      title: { type: String, default: '' }
    }
  };

  /* script */
  var __vue_script__$1 = script$1;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$1.__file = "/home/travis/build/SevereCloud/test-registration/src/components/AppButton.vue";

  /* template */
  var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"button",on:{"click":function($event){_vm.$emit('click');},"mouseover":function($event){_vm.$emit('mouseover');}}},[_vm._v("\n  "+_vm._s(_vm.title)+"\n")])};
  var __vue_staticRenderFns__$1 = [];

    /* style */
    var __vue_inject_styles__$1 = function (inject) {
      if (!inject) { return }
      inject("data-v-4398ec30_0", { source: ".button{padding:11px 73px;background:#0075ff;border:1px solid #f5f5f5;box-sizing:border-box;border-radius:5px;font-family:Roboto;font-style:normal;font-weight:400;font-size:24px;line-height:28px;color:#fff;cursor:pointer;user-select:none}.button:active{background:#0061cf}", map: undefined, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$1 = undefined;
    /* module identifier */
    var __vue_module_identifier__$1 = undefined;
    /* functional template */
    var __vue_is_functional_template__$1 = false;
    /* style inject SSR */
    

    
    var AppButton = normalizeComponent(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      createInjector,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script$2 = {
    name: 'AppCheckBox',
    computed: {
      proxyValue: {
        get: function get() { return this.value },
        set: function set(newValue) { this.$emit('input', newValue); }
      }
    }
  };

  /* script */
  var __vue_script__$2 = script$2;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$2.__file = "/home/travis/build/SevereCloud/test-registration/src/components/AppCheckBox.vue";

  /* template */
  var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.proxyValue),expression:"proxyValue"}],attrs:{"id":"checkbox","type":"checkbox"},domProps:{"checked":Array.isArray(_vm.proxyValue)?_vm._i(_vm.proxyValue,null)>-1:(_vm.proxyValue)},on:{"change":function($event){var $$a=_vm.proxyValue,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.proxyValue=$$a.concat([$$v]));}else{$$i>-1&&(_vm.proxyValue=$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.proxyValue=$$c;}}}}),_c('label',{staticClass:"checkbox-text",attrs:{"for":"checkbox"}},[_vm._t("default")],2)])};
  var __vue_staticRenderFns__$2 = [];

    /* style */
    var __vue_inject_styles__$2 = function (inject) {
      if (!inject) { return }
      inject("data-v-b03bd286_0", { source: "#checkbox{position:absolute;z-index:-1;opacity:0}#checkbox+label{position:relative;padding:0 0 0 29px;cursor:pointer}#checkbox+label:before{content:'';position:absolute;top:1px;left:0;width:17px;height:17px;border:1px solid #000;transition:.2s}#checkbox+label:after{content:'';position:absolute;top:4px;left:3px;width:13px;height:13px}#checkbox:checked+label:after{background:#00ff38}.checkbox-text{font-family:Roboto;font-style:normal;font-weight:400;font-size:18px;line-height:21px;vertical-align:center;color:#b5b5b5}.checkbox-text a{color:#b200f0;text-decoration:none}.checkbox-text a:hover{color:#b200f0}.checkbox-text a:visited{color:#b200f0;text-decoration:none}", map: undefined, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$2 = undefined;
    /* module identifier */
    var __vue_module_identifier__$2 = undefined;
    /* functional template */
    var __vue_is_functional_template__$2 = false;
    /* style inject SSR */
    

    
    var AppCheckBox = normalizeComponent(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      createInjector,
      undefined
    );

  //


  var minScore = 0.5;
  var tokenEmail = '78af7a17b8f9eee803b58093c431365a';
  var tokenPhone = '8547f7cc4ea646352763e685b3481c0b';

  var controllerPhone = new AbortController();
  var controllerEmail = new AbortController();

  var script$3 = {
    name: 'App',
    components: { AppInput: AppInput, AppButton: AppButton, AppCheckBox: AppCheckBox },
    data: function () {
      return {
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        accept: false,
        country: '',
        internationalFormat: '',
        validPhone: false,
        validEmail: false,
        validEmailScore: false,
        viewErr: false,
        helpPassword: "Password\n(!@#$%^&*(),.)\nabcde 1- A 2- a\n123",
      };
    },
    computed: {
      badEmail: {
        get: function get() {
          if (!this.viewErr) {
            return '';
          }
          if (!this.validEmail) {
            return 'Not valid';
          }
          if (!this.validEmailScore) {
            return 'Not meet the requirements';
          }
          return '';
        },
        set: function set() {}
      },
      badPhone: {
        get: function get() {
          if (!this.viewErr) {
            return '';
          }
          if (!this.validPhone) {
            return 'Not valid';
          }
          return '';
        }
      },
      badPassword: {
        get: function get() {
          if (!this.viewErr) {
            return '';
          }
          if (!this.validPassword) {
            return 'Not valid';
          }
          return '';
        }
      },
      badConfirmPassword: {
        get: function get() {
          if (!this.viewErr) {
            return '';
          }
          if (!this.validConfirmPassword) {
            return 'Not match';
          }
          return '';
        }
      },
      validPassword: {
        get: function get() {
          return this.password.length > 5 &&
            this.password.search(/.*?[!@#$%^&*(),.].*?/) > -1 &&
            this.password.search(/.*?abcde.*?/) === -1 &&
            this.password.search(/.*?123.*?/) === -1 &&
            this.password.search(/.*?[0-9].*?[0-9].*?/) > -1 &&
            this.password.charAt(0) === this.password.charAt(0).toUpperCase() &&
            true;
        }
      },
      validConfirmPassword: {
        get: function get() {
          return this.password === this.confirmPassword &&
          this.confirmPassword !== '';
        }
      }
    },
    methods: {
      checkPhone: function () {
        var this$1 = this;

        controllerPhone.abort();
        controllerPhone = new AbortController();
        var signal = controllerPhone.signal;
        fetch(
          ("https://apilayer.net/api/validate?access_key=" + tokenPhone + "&number=" + (this.phone)),
          {
            signal: signal,
          }
        )
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            this$1.country = data.country_name;
            this$1.internationalFormat = data.international_format;
            this$1.validPhone = data.valid;
          })
          .catch(function (error) { return console.log(error); });
      },
      checkEmail: function () {
        var this$1 = this;

        controllerEmail.abort();
        controllerEmail = new AbortController();
        var signal = controllerEmail.signal;
        fetch(
          ("https://apilayer.net/api/check?access_key=" + tokenEmail + "&email=" + (this.email)),
          {
            signal: signal,
          }
        )
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            this$1.validEmail = data.format_valid;
            this$1.validEmailScore = data.score >= minScore && !data.disposable;
          })
          .catch(function (error) { return console.log(error); });
      },
      subAlert: function () {
        if (
          this.accept &&
          this.validPassword &&
          this.validConfirmPassword &&
          this.validPhone &&
          this.validEmail &&
          this.validEmailScore) {
          /* eslint-disable no-alert */
          alert("e-mail: " + (this.email) + "\n" +
            "phone: " + (this.internationalFormat) + "\n" +
            "password: " + (this.password));
        }
      }
    },
  };

  /* script */
  var __vue_script__$3 = script$3;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$3.__file = "/home/travis/build/SevereCloud/test-registration/src/App.vue";

  /* template */
  var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"layout",attrs:{"id":"app"}},[_c('div',{staticClass:"body"},[_c('div',{staticClass:"header"},[_vm._v("\n      РЕГИСТРАЦИЯ\n    ")]),_c('div',{staticClass:"content"},[_c('app-input',{attrs:{"title":"E-mail","bad":_vm.badEmail}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],class:{
              valid: _vm.validEmail && _vm.validEmailScore,
              notValid: (!_vm.validEmail || !_vm.validEmailScore) && _vm.viewErr
            },attrs:{"type":"text"},domProps:{"value":(_vm.email)},on:{"change":_vm.checkEmail,"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value;}}})]),_c('app-input',{attrs:{"title":"Phone number","bad":_vm.badPhone}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.phone),expression:"phone"}],class:{
              valid: _vm.validPhone,
              notValid: !_vm.validPhone && _vm.viewErr
            },attrs:{"type":"text"},domProps:{"value":(_vm.phone)},on:{"change":_vm.checkPhone,"input":function($event){if($event.target.composing){ return; }_vm.phone=$event.target.value;}}}),_c('span',[_vm._v("\n          "+_vm._s(_vm.country)+"\n        ")])]),_c('app-input',{attrs:{"title":"Password","help":_vm.helpPassword,"bad":_vm.badPassword,"mask":"*"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],class:{
              valid: _vm.validPassword,
              notValid: !_vm.validPassword && _vm.viewErr
            },attrs:{"type":"password"},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value;}}})]),_c('app-input',{attrs:{"title":"Сonfirm Password","bad":_vm.badConfirmPassword}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.confirmPassword),expression:"confirmPassword"}],class:{
              valid: _vm.validConfirmPassword,
              notValid: !_vm.validConfirmPassword && _vm.viewErr
            },attrs:{"type":"password","mask":"*"},domProps:{"value":(_vm.confirmPassword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.confirmPassword=$event.target.value;}}})]),_c('div',{staticStyle:{"margin-bottom":"50px"}},[_c('app-check-box',{model:{value:(_vm.accept),callback:function ($$v) {_vm.accept=$$v;},expression:"accept"}},[_c('span',[_vm._v("\n            I accept privacy policy and it so\n          ")]),_c('a',{attrs:{"href":"#"}},[_vm._v("\n            cool\n          ")])])],1),_c('div',{staticClass:"right"},[_c('app-button',{attrs:{"title":"Subscribe"},on:{"click":_vm.subAlert,"mouseover":function($event){_vm.viewErr=true;}}})],1)],1)])])};
  var __vue_staticRenderFns__$3 = [];

    /* style */
    var __vue_inject_styles__$3 = function (inject) {
      if (!inject) { return }
      inject("data-v-ce9b9272_0", { source: ".layout{display:flex;min-height:100vh}.body{width:650px;margin:auto;background:#fefefe;box-shadow:0 5px 20px rgba(0,0,0,.05);border-radius:10px}.header{background:#373737;box-shadow:0 5px 20px rgba(0,0,0,.05);border-radius:10px 10px 0 0;text-align:center;padding:34px;font-family:Roboto;font-style:normal;font-weight:700;font-size:36px;color:#fff}.content{padding:60px 100px}.right{display:flex;flex-direction:column;align-items:flex-end}", map: undefined, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$3 = undefined;
    /* module identifier */
    var __vue_module_identifier__$3 = undefined;
    /* functional template */
    var __vue_is_functional_template__$3 = false;
    /* style inject SSR */
    

    
    var App = normalizeComponent(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
      __vue_inject_styles__$3,
      __vue_script__$3,
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
      createInjector,
      undefined
    );

  var app = new Vue({
    render: function (h) { return h(App); }
  });

  app.$mount('app');

}));
