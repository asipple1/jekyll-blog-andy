webpackJsonp([1],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/_js/components/_home-marquee.vue?vue&type=template&id=69707c8f&
var _home_marqueevue_type_template_id_69707c8f__render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "home-marquee",
      style: { backgroundImage: "url(" + _vm.imageUrl + ")" }
    },
    [_vm._m(0)]
  )
}
var _home_marqueevue_type_template_id_69707c8f__staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container home-marquee__container" }, [
      _c("h1", { staticClass: "h1 home-marquee__headline" }, [
        _vm._v("ALOHA, I'M ANDY!")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "h5 font-green home-marquee__subhead" }, [
        _vm._v("Web Developer")
      ])
    ])
  }
]
_home_marqueevue_type_template_id_69707c8f__render._withStripped = true


// CONCATENATED MODULE: ./assets/_js/components/_home-marquee.vue?vue&type=template&id=69707c8f&

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(16);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/lib??vue-loader-options!./assets/_js/components/_home-marquee.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//


/* harmony default export */ var _home_marqueevue_type_script_lang_js_ = ({
  name: 'marquee',
  data: function data() {
    return {
      what: 'this is from vue',
      gifySearchTag: '',
      imageUrl: ''
    };
  },
  mounted: function mounted() {
    this.menuLinkHover();
    this.getGify();
  },

  methods: {
    menuLinkHover: function menuLinkHover() {
      var _this = this;

      var navLinks = document.getElementsByClassName('navigation__item');
      var navBar = document.querySelector('.navigation');
      var main = document.querySelector('.home-marquee');
      main.addEventListener("mouseenter", function (e) {
        main.classList.remove('home-marquee--image');
      });
      Array.from(navLinks).forEach(function (link) {
        link.addEventListener("mouseover", function (e) {
          _this.gifySearchTag = link.getAttribute('data-gify');
          main.classList.add('home-marquee--image');
          _this.getGify();
        });
        link.addEventListener("mouseout", function (e) {
          _this.gifySearchTag = '';
          _this.imageUrl = '';
        });
      });
    },
    getGify: function getGify() {
      var _this2 = this;

      axios_default.a.get('//api.giphy.com/v1/stickers/random?tag=' + this.gifySearchTag + '&api_key=S2yXMMc8VI8qHZNdR2PWH086Ff8fI52w&limit=1&rating=g').then(function (response) {
        _this2.imageUrl = response.data.data.images.original.url;
      });
    }
  }
});
// CONCATENATED MODULE: ./assets/_js/components/_home-marquee.vue?vue&type=script&lang=js&
 /* harmony default export */ var components__home_marqueevue_type_script_lang_js_ = (_home_marqueevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(34);

// CONCATENATED MODULE: ./assets/_js/components/_home-marquee.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components__home_marqueevue_type_script_lang_js_,
  _home_marqueevue_type_template_id_69707c8f__render,
  _home_marqueevue_type_template_id_69707c8f__staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/Users/andrews/Documents/code/andysipple.com/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('69707c8f', component.options)
    } else {
      api.reload('69707c8f', component.options)
    }
    module.hot.accept("./_home-marquee.vue?vue&type=template&id=69707c8f&", function () {
      api.rerender('69707c8f', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "assets/_js/components/_home-marquee.vue"
/* harmony default export */ var _home_marquee = (component.exports);
// CONCATENATED MODULE: ./assets/_js/_home-marquee.js



function init() {
  var marqueeSelector = document.getElementById('home-marquee');
  if (!marqueeSelector) {
    return;
  }
  var maruqeeVue = new vue_runtime_esm["a" /* default */]({
    el: marqueeSelector,
    render: function render(h) {
      return h(_home_marquee);
    }
  });
}

/* harmony default export */ var _js__home_marquee = ({
  init: init
});
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(35);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);

// CONCATENATED MODULE: ./assets/_js/main.js



if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    _js__home_marquee.init();
    menuBar();
    window.addEventListener('resize', debounce_default()(menuBar, 100), false);
  });
}

function menuBar() {
  var navLinks = document.getElementsByClassName('navigation__item');
  Array.from(navLinks).forEach(function (link) {
    var linkBarData = link.getAttribute('data-link-var');
    console.log(link);
    var linkPosition = link.getBoundingClientRect();
    var linkPositionLeft = linkPosition.left;
    document.documentElement.style.setProperty('--' + linkBarData, linkPositionLeft + 'px');
  });
}

/***/ })

},[12]);
//# sourceMappingURL=main.bundle.js.map