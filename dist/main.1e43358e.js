// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/CST.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CST = void 0;
var CST = exports.CST = {
  SCENES: {
    LOAD: "LOAD",
    MENU: "MENU",
    GAMES: "GAMES"
  }
};
},{}],"src/scenes/load_scene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.load_scene = void 0;
var _CST = require("../CST");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var load_scene = exports.load_scene = /*#__PURE__*/function (_Phaser$Scene) {
  function load_scene() {
    _classCallCheck(this, load_scene);
    return _callSuper(this, load_scene, [{
      key: _CST.CST.SCENES.LOAD
    }]);
  }
  _inherits(load_scene, _Phaser$Scene);
  return _createClass(load_scene, [{
    key: "init",
    value: function init() {
      this.game.canvas.style.marginLeft = '100px';
    }
  }, {
    key: "preload",
    value: function preload() {
      var _this = this;
      this.dress_qty = 0;
      this.edit_qty = Number(Math.max(localStorage.getItem('slot'), 0));
      this.dress_icon = document.getElementById('dress_qty');
      this.edit_icon = document.getElementById('edit_qty');
      this.heart_icon = document.getElementById('heart_icon');
      this.comment_icon = document.getElementById('comment_icon');
      this.solar_icon = document.getElementById('solar_icon');

      //Graphic Assets
      this.load.image("logo_bg", "./assets/solar tech.png");
      this.load.image("bg_menu", "./assets/background_menu.jpg");
      this.load.image("bg_menu2", "./assets/backgrounds/background_menu2.jpg");
      this.load.image("title", "./assets/title.png");
      this.load.image("main_doll", "./assets/doll/doll_preview.png");
      this.load.image("play_btn", "./assets/play.png");
      this.load.image("backdrop_1", "./assets/bottom_graphics.png");
      this.load.image("backdrop_1_front", "./assets/bottom_graphics_front.png");
      this.load.image("slot_1", "./assets/slot_sprite.png");

      // Music
      this.load.audio('musicaudio', './assets/music/neonrunner_loop.ogg');

      // SFX
      this.load.audio('tap1', './assets/sfx/tap_1.ogg');
      this.load.audio('tap2', './assets/sfx/tap_2.WAV');
      this.load.audio('tap3', './assets/sfx/tap_3.WAV');
      this.load.audio('tap3_2', './assets/sfx/tap_3_reverse.wav');
      this.load.audio('tap4', './assets/sfx/tap_4.WAV');
      this.load.audio('metal', './assets/sfx/metalic.ogg');
      this.load.audio('takepic', './assets/sfx/picture_taken.ogg');

      // Cloth Icon Medium
      this.load.spritesheet('dresses', "./assets/dress_spritesheet.png", {
        frameWidth: 96,
        frameHeight: 96
      });
      this.load.spritesheet('tops', "./assets/tops_spritesheet.png", {
        frameWidth: 96,
        frameHeight: 96
      });
      this.load.spritesheet('faceacc', "./assets/faceacc_spritesheet.png", {
        frameWidth: 96,
        frameHeight: 96
      });
      this.load.spritesheet('hairs', "./assets/hair_spritesheet.png", {
        frameWidth: 96,
        frameHeight: 96
      });
      this.load.spritesheet('backhairs', "./assets/backhair_spritesheet.png", {
        frameWidth: 96,
        frameHeight: 96
      });
      this.load.spritesheet('shirts', "./assets/shirt_spritesheet.png", {
        frameWidth: 96,
        frameHeight: 96
      });
      this.load.spritesheet('skirts', "./assets/skirt_spritesheet.png", {
        frameWidth: 96,
        frameHeight: 96
      });
      this.load.spritesheet('pants', "./assets/pants_spritesheet.png", {
        frameWidth: 96,
        frameHeight: 96
      });
      this.load.spritesheet('acc1', "./assets/acc1_spritesheet.png", {
        frameWidth: 96,
        frameHeight: 96
      });
      this.load.spritesheet('acc2', "./assets/acc2_spritesheet.png", {
        frameWidth: 96,
        frameHeight: 96
      });
      this.load.spritesheet('acc3', "./assets/acc3_spritesheet.png", {
        frameWidth: 96,
        frameHeight: 96
      });
      this.load.spritesheet('eyes', "./assets/eye_spritesheet.png", {
        frameWidth: 96,
        frameHeight: 96
      });
      this.load.spritesheet('eyebrows', "./assets/eyebrow_spritesheet.png", {
        frameWidth: 96,
        frameHeight: 96
      });
      this.load.spritesheet('backgrounds', "./assets/background_spritesheet.png", {
        frameWidth: 96,
        frameHeight: 96
      });
      this.load.spritesheet('noses', "./assets/nose_spritesheet.png", {
        frameWidth: 96,
        frameHeight: 96
      });
      this.load.spritesheet('mouths', "./assets/mouth_spritesheet.png", {
        frameWidth: 96,
        frameHeight: 96
      });
      this.load.spritesheet('ears', "./assets/ear_spritesheet.png", {
        frameWidth: 96,
        frameHeight: 96
      });
      this.load.spritesheet('skins', "./assets/skincolors/skins_spritesheet.png", {
        frameWidth: 19,
        frameHeight: 19
      });
      this.load.spritesheet('dolls', "./assets/doll/dolls.png", {
        frameWidth: 680,
        frameHeight: 920
      });

      // EFX
      this.load.spritesheet('particle1', "./assets/anims/particle1/particles1_spritesheet.png", {
        frameWidth: 360,
        frameHeight: 360
      });
      // Load Atlas EFX
      this.load.atlas('efx', "./assets/anims/particle1/particles1_spritesheet.png", './assets/anims/particle1/efx1_atlas.json');

      // EFX 2 (Click)
      this.load.spritesheet('particle2', "./assets/anims/particle2/click_anim.png", {
        frameWidth: 96,
        frameHeight: 96
      });
      // Load Atlas EFX 2 (Click)
      this.load.atlas('efx2', "./assets/anims/particle2/click_anim.png", './assets/anims/particle2/click_anim_atlas.json');

      // Transitions
      // Transition 1
      this.load.spritesheet('trans1', "./assets/anims/transition1/trans1.png", {
        frameWidth: 360,
        frameHeight: 640
      });
      // Load Atlas Transition 1
      this.load.atlas('transfx1', "./assets/anims/transition1/trans1.png", './assets/anims/transition1/trans1_atlas.json');

      // Dolls 1
      this.load.atlas('dollskin', "./assets/doll/dolls.png", "./assets/doll/dolls_atlas.json");

      // Icons
      this.load.image("dress_icon1", "./assets/dress_icon.png");
      this.load.image("dress_icon2", "./assets/dress_icon2.png");
      this.load.image("dress_icon3", "./assets/dress_icon3.png");
      this.load.image("dress_icon4", "./assets/dress_icon4.png");
      this.load.image("dress_icon5", "./assets/dress_icon5.png");
      this.load.image("dress_icon6", "./assets/dress_icon6.png");
      this.load.image("dress_icon7", "./assets/dress_icon7.png");
      this.load.image("dress_icon8", "./assets/dress_icon8.png");
      this.load.image("dress_icon9", "./assets/dress_icon9.png");
      this.load.image("dress_icon10", "./assets/dress_icon10.png");
      this.load.image("dress_icon11", "./assets/dress_icon11.png");
      this.load.image("dress_icon12", "./assets/dress_icon12.png");
      this.load.image("dress_icon13", "./assets/dress_icon13.png");
      this.load.image("dress_icon14", "./assets/dress_icon14.png");
      this.load.image("dress_icon15", "./assets/dress_icon15.png");
      this.load.image("dress_icon16", "./assets/dress_icon16.png");
      this.load.image("dress_icon17", "./assets/dress_icon17.png");

      // Dress Graphics
      this.load.image("dress_1", "./assets/dress/dress_gph1.png");
      this.load.image("dress_2", "./assets/dress/dress_gph2.png");
      this.load.image("dress_3", "./assets/dress/dress_gph3.png");
      this.dress_qty += 3;

      // Tops Graphics
      this.load.image("top_1", "./assets/top/top_gph1.png");
      this.load.image("top_2", "./assets/top/top_gph2.png");
      this.load.image("top_3", "./assets/top/top_gph3.png");
      this.load.image("top_4", "./assets/top/top_gph4.png");
      this.load.image("top_5", "./assets/top/top_gph5.png");
      this.load.image("top_6", "./assets/top/top_gph6.png");
      this.load.image("top_7", "./assets/top/top_gph7.png");
      this.load.image("top_8", "./assets/top/top_gph8.png");
      this.load.image("top_9", "./assets/top/top_gph9.png");
      this.load.image("top_10", "./assets/top/top_gph10.png");
      this.load.image("top_11", "./assets/top/top_gph11.png");
      this.load.image("top_12", "./assets/top/top_gph12.png");
      this.load.image("top_13", "./assets/top/top_gph13.png");
      this.load.image("top_13_2", "./assets/top/top_gph13_2.png");
      this.load.image("top_14", "./assets/top/top_gph14.png");
      this.load.image("top_14_2", "./assets/top/top_gph14_2.png");
      this.load.image("top_14_3", "./assets/top/top_gph14_3.png");
      this.load.image("top_14_4", "./assets/top/top_gph14_4.png");
      this.load.image("top_14_5", "./assets/top/top_gph14_5.png");
      this.load.image("top_14_6", "./assets/top/top_gph14_6.png");
      this.load.image("top_14_7", "./assets/top/top_gph14_7.png");
      this.load.image("top_15", "./assets/top/top_gph15.png");
      this.load.image("top_16", "./assets/top/top_gph16.png");
      this.load.image("top_17", "./assets/top/top_gph17.png");
      this.load.image("top_18", "./assets/top/top_gph18.png");
      this.load.image("top_19", "./assets/top/top_gph19.png");
      this.load.image("top_20", "./assets/top/top_gph20.png");
      this.load.image("top_21", "./assets/top/top_gph21.png");
      this.load.image("top_22", "./assets/top/top_gph22.png");
      this.load.image("top_23", "./assets/top/top_gph23.png");
      this.dress_qty += 23;

      // Hair Graphics
      this.load.image("hair_1", "./assets/hair/hair_gph1.png");
      this.load.image("hair_2", "./assets/hair/hair_gph2.png");
      this.load.image("hair_3", "./assets/hair/hair_gph3.png");
      this.load.image("hair_4", "./assets/hair/hair_gph4.png");
      this.load.image("hair_5", "./assets/hair/hair_gph5.png");
      this.load.image("hair_6", "./assets/hair/hair_gph6.png");
      this.load.image("hair_7", "./assets/hair/hair_gph7.png");
      this.load.image("hair_8", "./assets/hair/hair_gph8.png");
      this.load.image("hair_9", "./assets/hair/hair_gph9.png");
      this.load.image("hair_10", "./assets/hair/hair_gph10.png");
      this.dress_qty += 10;

      // BackHair Graphics
      this.load.image("backhair_1", "./assets/backhair/backhair_gph1.png");
      this.load.image("backhair_2", "./assets/backhair/backhair_gph2.png");
      this.load.image("backhair_3", "./assets/backhair/backhair_gph3.png");
      this.load.image("backhair_4", "./assets/backhair/backhair_gph4.png");
      this.load.image("backhair_5", "./assets/backhair/backhair_gph5.png");
      this.load.image("backhair_6", "./assets/backhair/backhair_gph6.png");
      this.load.image("backhair_7", "./assets/backhair/backhair_gph7.png");
      this.dress_qty += 7;

      // Shirt Graphics
      this.load.image("shirt_1_1", "./assets/shirt/shirt_gph1_1.png");
      this.load.image("shirt_1_2", "./assets/shirt/shirt_gph1_2.png");
      this.load.image("shirt_2_1", "./assets/shirt/shirt_gph2_1.png");
      this.load.image("shirt_2_2", "./assets/shirt/shirt_gph2_2.png");
      this.load.image("shirt_3_1", "./assets/shirt/shirt_gph3_1.png");
      this.load.image("shirt_3_2", "./assets/shirt/shirt_gph3_2.png");
      this.load.image("shirt_3_3", "./assets/shirt/shirt_gph3_3.png");
      this.load.image("shirt_4_1", "./assets/shirt/shirt_gph4_1.png");
      this.load.image("shirt_4_2", "./assets/shirt/shirt_gph4_2.png");
      this.load.image("shirt_4_3", "./assets/shirt/shirt_gph4_3.png");
      this.load.image("shirt_4_4", "./assets/shirt/shirt_gph4_4.png");
      this.dress_qty += 4;

      // Pants Graphics
      this.load.image("pants_1_1", "./assets/pants/pants_gph1_1.png");
      this.load.image("pants_1_2", "./assets/pants/pants_gph1_2.png");
      this.load.image("pants_2_1", "./assets/pants/pants_gph2_1.png");
      this.load.image("pants_2_2", "./assets/pants/pants_gph2_2.png");
      this.load.image("pants_2_3", "./assets/pants/pants_gph2_3.png");
      this.load.image("pants_3_1", "./assets/pants/pants_gph3_1.png");
      this.load.image("pants_3_2", "./assets/pants/pants_gph3_2.png");
      this.load.image("pants_3_3", "./assets/pants/pants_gph3_3.png");
      this.load.image("pants_3_4", "./assets/pants/pants_gph3_4.png");
      this.load.image("pants_4_1", "./assets/pants/pants_gph4_1.png");
      this.load.image("pants_4_2", "./assets/pants/pants_gph4_2.png");
      this.load.image("pants_4_3", "./assets/pants/pants_gph4_3.png");
      this.load.image("pants_4_4", "./assets/pants/pants_gph4_4.png");
      this.dress_qty += 4;

      // Skirt Graphics
      this.load.image("skirt_1_1", "./assets/skirt/skirt_gph1_1.png");
      this.load.image("skirt_1_2", "./assets/skirt/skirt_gph1_2.png");
      this.load.image("skirt_1_3", "./assets/skirt/skirt_gph1_3.png");
      this.load.image("skirt_1_4", "./assets/skirt/skirt_gph1_4.png");
      this.load.image("skirt_1_5", "./assets/skirt/skirt_gph1_5.png");
      this.load.image("skirt_1_6", "./assets/skirt/skirt_gph1_6.png");
      this.load.image("skirt_1_7", "./assets/skirt/skirt_gph1_7.png");
      this.load.image("skirt_1_8", "./assets/skirt/skirt_gph1_8.png");
      this.load.image("skirt_1_9", "./assets/skirt/skirt_gph1_9.png");
      this.load.image("skirt_2_1", "./assets/skirt/skirt_gph2_1.png");
      this.load.image("skirt_2_2", "./assets/skirt/skirt_gph2_2.png");
      this.load.image("skirt_2_3", "./assets/skirt/skirt_gph2_3.png");
      this.load.image("skirt_2_4", "./assets/skirt/skirt_gph2_4.png");
      this.load.image("skirt_2_5", "./assets/skirt/skirt_gph2_5.png");
      this.load.image("skirt_2_6", "./assets/skirt/skirt_gph2_6.png");
      this.load.image("skirt_2_7", "./assets/skirt/skirt_gph2_7.png");
      this.load.image("skirt_2_8", "./assets/skirt/skirt_gph2_8.png");
      this.load.image("skirt_2_9", "./assets/skirt/skirt_gph2_9.png");
      this.load.image("skirt_3_1", "./assets/skirt/skirt_gph3_1.png");
      this.load.image("skirt_3_2", "./assets/skirt/skirt_gph3_2.png");
      this.dress_qty += 3;

      // STRAINS (Acc1) Graphics
      this.load.image("strains_1", "./assets/strains/strains_1.png");
      this.dress_qty += 1;

      // Acc2 Graphics
      this.load.image("acc2_1_1", "./assets/acc2/acc2_gph1_1.png");
      this.load.image("acc2_1_2", "./assets/acc2/acc2_gph1_2.png");
      this.load.image("acc2_2_1", "./assets/acc2/acc2_gph2_1.png");
      this.load.image("acc2_3_1", "./assets/acc2/acc2_gph3_1.png");
      this.load.image("acc2_3_2", "./assets/acc2/acc2_gph3_2.png");
      this.load.image("acc2_3_3", "./assets/acc2/acc2_gph3_3.png");
      this.load.image("acc2_3_4", "./assets/acc2/acc2_gph3_4.png");
      this.dress_qty += 3;

      // Acc3 Graphics
      this.load.image("acc3_1", "./assets/acc3/acc3_gph1.png");
      this.load.image("acc3_2", "./assets/acc3/acc3_gph2.png");
      this.dress_qty += 1;

      // Eyes
      this.load.image("eye1_1", "./assets/eyes/eye1/eye1_gph1.png");
      this.load.image("eye1_2", "./assets/eyes/eye1/eye1_gph2.png");
      this.load.image("eye1_3", "./assets/eyes/eye1/eye1_gph3.png");
      this.load.image("eye1_4", "./assets/eyes/eye1/eye1_gph4.png");
      this.load.image("eye1_5", "./assets/eyes/eye1/eye1_gph5.png");
      this.load.image("eye1_6", "./assets/eyes/eye1/eye1_gph6.png");
      this.dress_qty += 1;

      // Eyebrows
      this.load.image("eyebrow_1", "./assets/eyebrows/eyebrow_gph1.png");
      this.load.image("eyebrow_2", "./assets/eyebrows/eyebrow_gph2.png");
      this.load.image("eyebrow_3", "./assets/eyebrows/eyebrow_gph3.png");
      this.load.image("eyebrow_4", "./assets/eyebrows/eyebrow_gph4.png");
      this.load.image("eyebrow_5", "./assets/eyebrows/eyebrow_gph5.png");
      this.load.image("eyebrow_6", "./assets/eyebrows/eyebrow_gph6.png");
      this.load.image("eyebrow_7", "./assets/eyebrows/eyebrow_gph7.png");
      this.load.image("eyebrow_8", "./assets/eyebrows/eyebrow_gph8.png");
      this.load.image("eyebrow_9", "./assets/eyebrows/eyebrow_gph9.png");
      this.load.image("eyebrow_10", "./assets/eyebrows/eyebrow_gph10.png");
      this.load.image("eyebrow_11", "./assets/eyebrows/eyebrow_gph11.png");
      this.dress_qty += 11;

      // Backgronds
      this.load.image("background_0", "./assets/backgrounds/background_0.jpg");
      this.load.image("background_1", "./assets/backgrounds/background_1.png");
      this.load.image("background_2", "./assets/backgrounds/background_2.png");
      this.load.image("background_3", "./assets/backgrounds/background_3.png");
      this.dress_qty += 4;
      // Noses
      this.load.image("nose_1", "./assets/nose/nose_1.png");
      this.load.image("nose_2", "./assets/nose/nose_2.png");
      this.load.image("nose_3", "./assets/nose/nose_3.png");
      this.load.image("nose_4", "./assets/nose/nose_4.png");
      this.load.image("nose_5", "./assets/nose/nose_5.png");
      this.load.image("nose_6", "./assets/nose/nose_6.png");
      this.load.image("nose_7", "./assets/nose/nose_7.png");
      this.load.image("nose_8", "./assets/nose/nose_8.png");
      this.load.image("nose_9", "./assets/nose/nose_9.png");
      this.load.image("nose_10", "./assets/nose/nose_10.png");
      this.load.image("nose_11", "./assets/nose/nose_11.png");
      this.dress_qty += 11;

      // Mouths
      this.load.image("mouth_1", "./assets/mouth/mouth_1.png");
      this.load.image("mouth_2", "./assets/mouth/mouth_2.png");
      this.load.image("mouth_3", "./assets/mouth/mouth_3.png");
      this.load.image("mouth_4", "./assets/mouth/mouth_4.png");
      this.load.image("mouth_5", "./assets/mouth/mouth_5.png");
      this.load.image("mouth_6", "./assets/mouth/mouth_6.png");
      this.load.image("mouth_7", "./assets/mouth/mouth_7.png");
      this.load.image("mouth_8", "./assets/mouth/mouth_8.png");
      this.load.image("mouth_9", "./assets/mouth/mouth_9.png");
      this.load.image("mouth_10", "./assets/mouth/mouth_10.png");
      this.load.image("mouth_11", "./assets/mouth/mouth_11.png");
      this.dress_qty += 11;

      // Ears 
      this.load.image("ear_1", "./assets/ears/ear_1.png");
      this.load.image("ear_2", "./assets/ears/ear_2.png");
      // Ear 2 Color Variations
      this.load.image("ear2_1", "./assets/ears/ear2/ear2_1.png");
      this.load.image("ear2_2", "./assets/ears/ear2/ear2_2.png");
      this.load.image("ear2_3", "./assets/ears/ear2/ear2_3.png");
      this.load.image("ear2_4", "./assets/ears/ear2/ear2_4.png");
      this.load.image("ear2_5", "./assets/ears/ear2/ear2_5.png");
      this.load.image("ear2_6", "./assets/ears/ear2/ear2_6.png");
      this.load.image("ear2_7", "./assets/ears/ear2/ear2_7.png");
      this.load.image("ear2_8", "./assets/ears/ear2/ear2_8.png");
      this.load.image("ear2_9", "./assets/ears/ear2/ear2_9.png");
      this.load.image("ear2_10", "./assets/ears/ear2/ear2_10.png");
      this.load.image("ear2_11", "./assets/ears/ear2/ear2_11.png");
      this.load.image("ear2_12", "./assets/ears/ear2/ear2_12.png");
      this.load.image("ear2_13", "./assets/ears/ear2/ear2_13.png");
      this.load.image("ear2_14", "./assets/ears/ear2/ear2_14.png");
      this.load.image("ear2_15", "./assets/ears/ear2/ear2_15.png");
      this.load.image("ear2_16", "./assets/ears/ear2/ear2_16.png");
      this.load.image("ear2_17", "./assets/ears/ear2/ear2_17.png");
      this.dress_qty += 2;

      // Etc
      this.load.image("right_arrow1", "./assets/right_arrow_1.png");
      this.load.image("left_arrow1", "./assets/left_arrow_1.png");
      this.load.image("frame", "./assets/frame.png");
      this.load.image("facecolor", "./assets/icons/facecolor_icon.png");
      this.load.image("menu", "./assets/icons/menu_icon.png");
      this.load.image("recycle", "./assets/icons/recycle_icon.png");
      this.load.image("del_clothes", "./assets/delete_clothes.png");
      this.load.image("return", "./assets/close_1.png");
      this.load.image("takepic", "./assets/takepic.png");
      this.load.image("download_img", "./assets/download_pic.png");
      this.load.image("download_img2", "./assets/download_pic2.png");
      this.load.image("save_img", "./assets/save_pic.png");
      this.load.image("save_img_gray", "./assets/save_pic_gray.png");
      this.load.image("save_lore", "./assets/save_lore.png");
      this.load.image("backdrop_menu", "./assets/backdrop_menu.png");
      this.load.image("sound", "./assets/sound_mixer.png");
      this.load.image("quit_btn", "./assets/quit_btn.png");
      this.load.image("load_btn", "./assets/load.png");
      this.load.image("credits_btn", "./assets/credits.png");
      this.load.image("add_new", "./assets/add_new.png");
      this.load.image("load_doll", "./assets/load_doll.png");
      this.load.image("menu_btn", "./assets/menu.png");
      this.load.image("playload", "./assets/play_load.png");
      this.load.image("frameload", "./assets/frame_load.png");
      this.load.image("recycle2", "./assets/recycle bin 2.png");
      this.load.image("yes_btn", "./assets/yes_btn.png");
      this.load.image("no_btn", "./assets/no_btn.png");
      this.load.image("icon_outline", "./assets/icon_outline.png");
      this.load.image("color_panel", "./assets/color_panel.png");
      this.load.image("white_dot", "./assets/whitedot.png");
      this.load.image("fullscreen", "./assets/full_screen.png");
      this.load.image("camera", "./assets/camera.png");
      this.load.image("save", "./assets/save.png");
      this.load.image("loadreturn", "./assets/load_return.png");
      this.load.image("quitgamebtn", "./assets/quitgame_btn.png");
      this.load.image("whitedot_sel", "./assets/whitedot_sel.png");
      this.load.image("bottom_menu", "./assets/bottom_menu.png");
      this.load.image("loading_face", "./assets/loading.png");
      this.load.image("lore_btn", "./assets/note.png");
      this.load.image("return_load", "./assets/return_load.png");
      this.load.image("return_save", "./assets/return_save.png");
      this.load.image("dontsave", "./assets/dontsave.png");
      this.load.image("up_arrow", "./assets/icons/up_arrow.png");
      this.load.image("down_arrow", "./assets/icons/down_arrow.png");

      //socials
      this.load.image("x_icon", "./assets/web/x_icon.png");

      // Transition
      this.load.image("transition1", "./assets/velocity_sprite.png");

      // wallpaper
      this.load.image("loading_img", "./assets/backgrounds/placeholder2.jpg");

      //Lista de Valores

      // Imagen in Loadingy

      // Create a large rectangle
      var rectangle = this.add.graphics();
      rectangle.fillGradientStyle(0x4c68f5, 0x4c68f5, 0x020826, 0x020826, 1);
      rectangle.fillRect(0, 0, 720, 1280);

      // bg bar
      var bgBar = this.add.graphics();
      bgBar.fillStyle(0xffffff, 1);
      bgBar.fillRect(this.game.renderer.width * 0.1, this.game.renderer.height / 2 + 100, this.game.renderer.width * 0.8, 50);
      var loading_bar = this.add.graphics();
      this.load.on("progress", function (percent) {
        loading_bar.clear();
        loading_bar.fillStyle(0x00ff00, 1);
        loading_bar.fillRect(_this.game.renderer.width * 0.1, _this.game.renderer.height / 2 + 100, _this.game.renderer.width * 0.8 * percent, 50);
      });
      this.load.on("complete", function () {
        _this.timedEvent = new Phaser.Time.TimerEvent({
          delay: 2000
        });
        _this.time.addEvent(_this.timedEvent);
      });
    }
  }, {
    key: "create",
    value: function create() {
      this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.50, "logo_bg");
      this.dress_icon.innerHTML = this.dress_qty;
      this.edit_icon.innerHTML = this.edit_qty;
      this.heart_icon.style.filter = "brightness(0)";
      this.comment_icon.style.filter = "brightness(0)";
      this.solar_icon.style.filter = "brightness(0)";
    }
  }, {
    key: "update",
    value: function update() {
      var progress = this.timedEvent.getProgress();
      if (progress === 1) {
        this.scene.start(_CST.CST.SCENES.MENU);
      }
    }
  }]);
}(Phaser.Scene);
},{"../CST":"src/CST.js"}],"src/scenes/menu_scene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menu_scene = void 0;
var _CST = require("../CST");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var menu_scene = exports.menu_scene = /*#__PURE__*/function (_Phaser$Scene) {
  function menu_scene() {
    _classCallCheck(this, menu_scene);
    return _callSuper(this, menu_scene, [{
      key: _CST.CST.SCENES.MENU
    }]);
  }
  _inherits(menu_scene, _Phaser$Scene);
  return _createClass(menu_scene, [{
    key: "init",
    value: function init(data) {
      if (localStorage.getItem('start') != 1) {
        localStorage.setItem('slot', 0);
        this.slotstr = localStorage.getItem('slot');
        this.slotnum = parseInt(this.slotstr);
        localStorage.setItem('start', 1);
        localStorage.setItem('music_volume', 1);
        localStorage.setItem('sfx_volume', 1);
      } else if (localStorage.getItem('start') != 0) {
        this.slotstr = localStorage.getItem('slot');
        this.slotnum = parseInt(this.slotstr);
      }
      this.enter_load = data.enter_load;
    }
  }, {
    key: "preload",
    value: function preload() {}
  }, {
    key: "create",
    value: function create() {
      var _this = this;
      if (this.anims.exists('efx')) {} else {
        var particle1 = this.anims.create({
          key: "efx",
          frameRate: 8,
          frames: this.anims.generateFrameNames("efx", {
            scale: 2.7,
            prefix: "particles_f",
            start: 1,
            end: 5
          })
        });
      }
      if (this.anims.exists('efx2')) {} else {
        var particle2 = this.anims.create({
          key: "efx2",
          frameRate: 22,
          frames: this.anims.generateFrameNames("efx2", {
            scale: 3.5,
            prefix: "click_fx",
            start: 1,
            end: 5
          })
        });
      }
      this.input.on('pointerdown', function (pointer) {
        var clickfx = Phaser.GameObjects.Sprite = _this.add.sprite(pointer.x, pointer.y, "efx2", 'click_fx1');
        clickfx.play("efx2");
        clickfx.setScale(3.5);
        clickfx.setDepth(99);
        clickfx.on('animationcomplete', function () {
          clickfx.destroy();
        });
      });
      if (this.anims.exists('transfx1')) {} else {
        var trans1 = this.anims.create({
          key: "transfx1",
          frameRate: 32,
          frames: this.anims.generateFrameNames("transfx1", {
            scale: 2,
            prefix: "trans1_f",
            start: 1,
            end: 6
          })
        });
      }
      var trans_efx1 = Phaser.GameObjects.Sprite = this.add.sprite(this.game.renderer.width / 2, this.game.renderer.height / 2, "transfx1", 'trans1_f1');
      trans_efx1.playReverse("transfx1");
      trans_efx1.setScale(2);
      trans_efx1.setDepth(99);
      trans_efx1.on('animationcomplete', function () {
        trans_efx1.destroy();
      });

      // Camera
      var cameraWidth = this.cameras.main.width;
      var cameraHeight = this.cameras.main.height;

      // Background
      var bg = this.add.image(0, 0, "bg_menu2").setOrigin(0);
      bg.setScale(Math.max(cameraWidth / bg.width, cameraHeight / bg.height));

      // Music
      this.music = this.sound.add('musicaudio');
      this.music.setLoop(true);
      this.music.setMute(true);
      this.music.play();

      // Botones
      this.textinfo1 = this.add.text(this.game.renderer.width / 2, this.game.renderer.height * 0.60, "Saved Files: " + this.slotnum + "/999", {
        fontSize: '42px',
        fill: '#ff0000'
      }).setOrigin(0.5);
      this.textinfo1.setDepth(16);
      this.textinfo1.setVisible(false);

      // SFX
      var tap1 = this.sound.add('tap1');
      var tap2 = this.sound.add('tap2');
      var tap3 = this.sound.add('tap3');
      var tap4 = this.sound.add('tap4');

      // Main Doll Sprite
      this.doll = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.62, "main_doll").setScale(1.1);

      // Movimiento de la muñeca
      this.tween = this.tweens.add({
        targets: this.doll,
        y: this.game.renderer.height * 0.50,
        ease: 'Sine.easeIn',
        duration: 500,
        paused: true
      });

      // Flags
      this.flag0 = 0;
      this.flag5 = 0;
      this.flag_load = 0;
      this.flag_lore = 0;
      this.flag_lock = 0;

      // timers
      this.timer1 = 0;
      this.timer2 = 0;

      // otros
      this.move_rightblock = 0;
      this.move_leftblock = 0;

      // Logo Title
      this.titleimg = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.15, "title").setScale(2);

      // Play Button
      this.playButton = this.add.image(this.game.renderer.width * 0.81, this.game.renderer.height * 0.57, "play_btn").setOrigin(0.5).setScale(0.8);
      this.playButton.setInteractive();
      this.tween2 = this.tweens.add({
        targets: this.playButton,
        scale: 1.4,
        ease: 'Sine.easeInOut',
        duration: 700,
        paused: true,
        alpha: {
          getStart: function getStart() {
            return 1;
          },
          getEnd: function getEnd() {
            return 0;
          }
        },
        onComplete: function onComplete() {
          var trans_efx1 = Phaser.GameObjects.Sprite = _this.add.sprite(_this.game.renderer.width / 2, _this.game.renderer.height / 2, "transfx1", 'trans1_f1');
          trans_efx1.play("transfx1");
          trans_efx1.setScale(2);
          trans_efx1.on('animationcomplete', function () {
            var loading_face = _this.add.image(_this.game.renderer.width / 2, _this.game.renderer.height / 2, 'loading_face');
            var load_text = _this.add.text(_this.game.renderer.width / 2, _this.game.renderer.height * 0.65, 'Loading!', {
              fontSize: '52px',
              fill: '#ffffff'
            });
          });
        }
      });
      var effect = this.playButton.postFX.addGlow();
      effect.color = 0xffffff;
      effect.outerStrength = 30;
      effect.innerStrength = 0;
      effect.knockout = false;
      effect.quality = 0.1;
      this.playButton.postFX.remove(effect);
      this.playButton.on("pointerover", function () {
        _this.playButton.postFX.add(effect);
      });
      this.playButton.on("pointerout", function () {
        _this.playButton.postFX.remove(effect);
      });
      if (localStorage.getItem('slot') < 999) {
        this.playButton.once("pointerdown", function (pointer) {
          _this.loadButton.destroy(true);
          tap1.play();
          _this.tween2.play();
          var pimple = Phaser.GameObjects.Sprite = _this.add.sprite(pointer.x, pointer.y, "efx", 'particles_f1');
          pimple.play("efx");
          pimple.on('animationcomplete', function () {
            pimple.destroy();
          });
        });
      }
      if (localStorage.getItem('slot') == 999) {
        this.playButton.on("pointerdown", function () {
          var info_txt = _this.add.text(_this.game.renderer.width / 2, _this.game.renderer.height * 0.35, 'Slots Máximos (999/999)!', {
            fontSize: '38px',
            fill: '#FF0000'
          });
          info_txt.setDepth(50);
          info_txt.setOrigin(0.5);
          _this.tweens.add({
            targets: info_txt,
            alpha: 0,
            y: '-=50',
            duration: 1000,
            onComplete: function onComplete() {
              info_txt.destroy();
            }
          });
        });
      }

      // Credits Button
      this.creditsButton = this.add.image(this.game.renderer.width * 0.02, this.game.renderer.height * 0.9, "credits_btn");
      this.creditsButton.setScale(1.4);
      this.creditsButton.setInteractive();
      this.creditsButton.setOrigin(0);
      this.creditsButton.on('pointerdown', function () {
        var width = _this.sys.game.config.width;
        var height = _this.sys.game.config.height;
        var menurectangle = _this.add.rectangle(width / 2, height / 2, width / 1.2, height / 1.5, 0x000000);
        menurectangle.setInteractive();
        menurectangle.setDepth(2);
        var textCreditsl1 = _this.add.text(width / 2, height * 0.3, 'Programmed By:', {
          fontSize: '54px',
          color: 'yellow'
        });
        textCreditsl1.setOrigin(0.5);
        textCreditsl1.setDepth(2);
        var textCreditsl2 = _this.add.text(width / 2, height * 0.4, 'Tenubar', {
          fontSize: '54px',
          color: 'white'
        });
        textCreditsl2.setOrigin(0.5);
        textCreditsl2.setDepth(2);
        var textCreditsl3 = _this.add.text(width / 2, height * 0.55, 'Art By:', {
          fontSize: '54px',
          color: 'yellow'
        });
        textCreditsl3.setOrigin(0.5);
        textCreditsl3.setDepth(2);
        var textCreditsl4 = _this.add.text(width / 2, height * 0.65, 'DLuci', {
          fontSize: '54px',
          color: 'white'
        });
        textCreditsl4.setOrigin(0.5);
        textCreditsl4.setDepth(2);

        // socials
        var xIcon1 = _this.add.image(width * 0.76, height * 0.4, 'x_icon');
        xIcon1.setDepth(2);
        xIcon1.setScale(1.4);
        xIcon1.setInteractive();
        xIcon1.on('pointerdown', function () {
          window.open('https://x.com/tenubar', '_blank');
        });
        var xIcon2 = _this.add.image(width * 0.76, height * 0.65, 'x_icon');
        xIcon2.setDepth(2);
        xIcon2.setScale(1.4);
        xIcon2.setInteractive();
        xIcon2.on('pointerdown', function () {
          window.open('https://x.com/dluci', '_blank');
        });
        var flagscreen = _this.add.rectangle(0, 0, width, height, 0x000000);
        flagscreen.setAlpha(0.01);
        flagscreen.setDepth(1);
        flagscreen.setInteractive();
        flagscreen.setOrigin(0);
        flagscreen.on('pointerdown', function () {
          menurectangle.destroy();
          textCreditsl1.destroy();
          textCreditsl2.destroy();
          textCreditsl3.destroy();
          textCreditsl4.destroy();
          xIcon1.destroy();
          xIcon2.destroy();
          flagscreen.destroy();
        });
      });

      // Load Button
      this.loadButton = this.add.image(this.game.renderer.width * 0.82, this.game.renderer.height * 0.72, "load_btn").setOrigin(0.5);
      this.loadButton.setScale(1.4);
      this.loadButton.setInteractive();
      this.loadButton.on('pointerdown', function (pointer) {
        var _this2 = this;
        if (this.flag_load === 0) {
          this.playButton.destroy();
          this.creditsButton.destroy();

          // Transition to Load Screen

          // Load Screen    
          this.tween7 = this.tweens.add({
            targets: this.loadButton,
            scale: 2.2,
            ease: 'Sine.easeInOut',
            duration: 300,
            paused: true,
            alpha: {
              getStart: function getStart() {
                return 1;
              },
              getEnd: function getEnd() {
                return 0;
              }
            },
            onComplete: function onComplete(pointer) {
              var transition_gph = _this2.add.image(_this2.game.renderer.width, 0, "transition1").setOrigin(0).setScale(1.4, 1);
              _this2.tween8 = _this2.tweens.add({
                targets: _this2.doll,
                x: _this2.game.renderer.width * -1,
                ease: 'Sine.easeInOut',
                duration: 300,
                paused: true,
                onComplete: function onComplete() {
                  _this2.doll.destroy(true);
                }
              });
              _this2.tween9 = _this2.tweens.add({
                targets: transition_gph,
                x: _this2.game.renderer.width * -1.4,
                ease: 'Sine.easeInOut',
                duration: 300,
                paused: true,
                onComplete: function onComplete() {
                  transition_gph.destroy();
                }
              });
              _this2.tween10 = _this2.tweens.add({
                targets: _this2.titleimg,
                x: _this2.game.renderer.width * -1,
                ease: 'Sine.easeInOut',
                duration: 300,
                paused: true,
                onComplete: function onComplete() {
                  _this2.titleimg.destroy(true);
                }
              });
              _this2.tween11 = _this2.tweens.add({
                targets: bg,
                x: -80,
                ease: 'Sine.easeInOut',
                duration: 300,
                paused: true
              });
              _this2.tween8.play();
              _this2.tween9.play();
              _this2.tween10.play();
              _this2.tween11.play();
              _this2.layer1 = _this2.add.container(0, -55);
              _this2.layer1.setDepth(21);
              _this2.layer2 = _this2.add.container(0, 0);
              _this2.layer2.setDepth(22);
              _this2.layer3 = _this2.add.container(0, 0);
              _this2.layer3.setDepth(23);
              _this2.layer4 = _this2.add.container(0, 0);
              _this2.layer4.setDepth(24);
              _this2.layer5 = _this2.add.container(0, 0);
              _this2.layer5.setDepth(25);
              _this2.layer6 = _this2.add.container(0, 0);
              _this2.layer6.setDepth(26);
              _this2.layer7 = _this2.add.container(0, 0);
              _this2.layer7.setDepth(27);
              _this2.layer8 = _this2.add.container(0, 0);
              _this2.layer8.setDepth(28);
              _this2.layer9 = _this2.add.container(0, 0);
              _this2.layer9.setDepth(29);
              _this2.layer10 = _this2.add.container(0, 0);
              _this2.layer10.setDepth(30);
              _this2.layer11 = _this2.add.container(0, 0);
              _this2.layer11.setDepth(31);
              _this2.layer12 = _this2.add.container(0, 0);
              _this2.layer12.setDepth(32);
              _this2.layer15 = _this2.add.container(0, 0);
              _this2.layer15.setDepth(15);
              _this2.layer17 = _this2.add.container(0, 0);
              _this2.layer17.setDepth(37);
              _this2.layer18 = _this2.add.container(0, 0);
              _this2.layer18.setDepth(38);
              _this2.layer19 = _this2.add.container(0, 0);
              _this2.layer19.setDepth(39);
              _this2.layer20 = _this2.add.container(0, 0);
              _this2.layer20.setDepth(50);

              // this.titleimg.destroy();
              // this.doll.destroy();
              _this2.playButton.destroy();
              // this.loadButton.setVisible(false);

              // Assets
              _this2.menuback = _this2.add.image(12, _this2.game.renderer.height * 0.04, "menu_btn").setOrigin(0).setScale(1.5);
              _this2.menuback.setInteractive();
              _this2.menuback.setDepth(50);
              _this2.menuback.setVisible(false);
              _this2.menuback.on('pointerdown', function () {
                var trans_efx1 = Phaser.GameObjects.Sprite = _this2.add.sprite(_this2.game.renderer.width / 2, _this2.game.renderer.height / 2, "transfx1", 'trans1_f1');
                trans_efx1.play("transfx1");
                trans_efx1.setScale(2);
                trans_efx1.setDepth(99);
                trans_efx1.on('animationcomplete', function () {
                  var inputs = document.getElementsByClassName('inputs');
                  // Remove the elements
                  while (inputs.length > 0) {
                    inputs[0].parentNode.removeChild(inputs[0]);
                  }
                  _this2.scene.start(_CST.CST.SCENES.MENU, {
                    enter_load: 0
                  });
                });
              });
              _this2.bottom_menu = _this2.add.image(_this2.game.renderer.width, _this2.game.renderer.height * 0.65, 'bottom_menu').setOrigin(0);
              _this2.bottom_menu.setDepth(12);
              _this2.tween5 = _this2.tweens.add({
                targets: _this2.bottom_menu,
                ease: 'Sine.easeInOut',
                x: 0,
                duration: 300,
                paused: true,
                alpha: {
                  getStart: function getStart() {
                    return 0;
                  },
                  getEnd: function getEnd() {
                    return 1;
                  }
                },
                onComplete: function onComplete() {
                  more_btn.setVisible(true);
                  less_btn.setVisible(true);
                  _this2.menuback.setVisible(true);
                  _this2.textinfo1.setVisible(true);
                }
              });
              _this2.tween5.play();

              // Añade un timer para:

              _this2.frameload = _this2.add.image(20, _this2.game.renderer.height * 0.65, 'frameload').setOrigin(0);
              // this.frameload = this.add.image(this.game.renderer.width, this.game.renderer.height * 0.65,'frameload').setOrigin(0);
              _this2.frameload.setDepth(17);
              _this2.frameload.setVisible(false);
              var more_btn = _this2.add.image(_this2.game.renderer.width * 0.90, _this2.game.renderer.height * 0.55, 'right_arrow1').setOrigin(0).setScale(2);
              more_btn.setDepth(40);
              more_btn.setInteractive();
              more_btn.setVisible(false);
              var less_btn = _this2.add.image(10, _this2.game.renderer.height * 0.55, 'left_arrow1').setOrigin(0).setScale(2);
              less_btn.setDepth(40);
              less_btn.setInteractive();
              less_btn.setVisible(false);
              var recycle_btn = _this2.add.image(35, _this2.game.renderer.height * 0.66, 'recycle2').setOrigin(0);
              recycle_btn.setVisible(false);
              recycle_btn.setScale(2);
              recycle_btn.setDepth(40);
              recycle_btn.setInteractive();
              recycle_btn.on('pointerdown', function () {
                if (_this2.flag5 === 0) {
                  var width = _this2.sys.game.config.width;
                  var height = _this2.sys.game.config.height;
                  var rectangle = _this2.add.rectangle(width / 2, height / 2, width, height, 0x000000);
                  var rectangle2 = _this2.add.rectangle(width / 2, height / 2, width / 1.2, height / 3, 0x000000);
                  rectangle.setAlpha(0.5);
                  rectangle.setDepth(40);
                  rectangle2.setDepth(41);

                  // Texto
                  var textconfirm = _this2.add.text(width / 2, height / 2.5, "Delete This Girl?", {
                    fontSize: '42px',
                    fill: '#ffffff'
                  }).setOrigin(0.5);
                  textconfirm.setDepth(42);
                  var yes_btn = _this2.add.image(width / 2.2, height / 1.8, 'yes_btn').setOrigin(1, 0.5).setDepth(42).setScale(1.5);
                  yes_btn.setInteractive();
                  yes_btn.on('pointerdown', function () {
                    _this2.flag_load = 0;
                    var dress_local = [];
                    var top_local = [];
                    var hair_local = [];
                    var backhair_local = [];
                    var shirt_local = [];
                    var skirt_local = [];
                    var pants_local = [];
                    var acc1_local = [];
                    var acc2_local = [];
                    var acc3_local = [];
                    var eye_local = [];
                    var eye1_local = [];
                    var eyebrow_local = [];
                    var background_local = [];
                    var skin_local = [];
                    var nose_local = [];
                    var mouth_local = [];
                    var ear_local = [];

                    // Posiciones
                    var dressxpos_local = [];
                    var dressypos_local = [];
                    var shirtxpos_local = [];
                    var shirtypos_local = [];
                    var skirtxpos_local = [];
                    var skirtypos_local = [];
                    var pantsxpos_local = [];
                    var pantsypos_local = [];

                    // Manhattan
                    var dressxmanh_local = [];
                    var dressymanh_local = [];
                    var shirtxmanh_local = [];
                    var shirtymanh_local = [];
                    var skirtxmanh_local = [];
                    var skirtymanh_local = [];
                    var pantsxmanh_local = [];
                    var pantsymanh_local = [];

                    // Inputs

                    var input_local = [];
                    var bio_local = [];
                    var note_local = [];

                    // Flags
                    var shirtflag_local = [];

                    // Variaciones de Colores

                    var shirtvar1_local = [];
                    var shirtvar2_local = [];
                    var shirtvar3_local = [];
                    var shirtvar4_local = [];
                    var pantsvar1_local = [];
                    var pantsvar2_local = [];
                    var pantsvar3_local = [];
                    var pantsvar4_local = [];
                    var skirtvar1_local = [];
                    var skirtvar2_local = [];
                    var skirtvar3_local = [];
                    var acc2var1_local = [];
                    var acc2var2_local = [];
                    var acc2var3_local = [];
                    if (localStorage.getItem('slot') > 0) {
                      var id_del = _this2.slotnum - recycle_btn.id;

                      // Guardar datos de los Slots siguientes (Check)
                      for (var i = 0; i < id_del; i++) {
                        var ide = recycle_btn.id + 1 + i;
                        dress_local.push([localStorage.getItem('dress_id' + ide)]);
                        top_local.push([localStorage.getItem('top_id' + ide)]);
                        hair_local.push([localStorage.getItem('hair_id' + ide)]);
                        backhair_local.push([localStorage.getItem('backhair_id' + ide)]);
                        shirt_local.push([localStorage.getItem('shirt_id' + ide)]);
                        skirt_local.push([localStorage.getItem('skirt_id' + ide)]);
                        pants_local.push([localStorage.getItem('pants_id' + ide)]);
                        acc1_local.push([localStorage.getItem('acc1_id' + ide)]);
                        acc2_local.push([localStorage.getItem('acc2_id' + ide)]);
                        acc3_local.push([localStorage.getItem('acc3_id' + ide)]);
                        eye1_local.push([localStorage.getItem('eye1_id' + ide)]);
                        eye_local.push([localStorage.getItem('eye_id' + ide)]);
                        eyebrow_local.push([localStorage.getItem('eyebrow_id' + ide)]);
                        background_local.push([localStorage.getItem('background_id' + ide)]);
                        skin_local.push([localStorage.getItem('skin_id' + ide)]);
                        nose_local.push([localStorage.getItem('nose_id' + ide)]);
                        mouth_local.push([localStorage.getItem('mouth_id' + ide)]);
                        ear_local.push([localStorage.getItem('ear_id' + ide)]);

                        // Positions
                        dressxpos_local.push([localStorage.getItem('dressxpos' + ide)]);
                        dressypos_local.push([localStorage.getItem('dressypos' + ide)]);
                        shirtxpos_local.push([localStorage.getItem('shirtxpos' + ide)]);
                        shirtypos_local.push([localStorage.getItem('shirtypos' + ide)]);
                        skirtxpos_local.push([localStorage.getItem('skirtxpos' + ide)]);
                        skirtypos_local.push([localStorage.getItem('skirtypos' + ide)]);
                        pantsxpos_local.push([localStorage.getItem('pantsxpos' + ide)]);
                        pantsypos_local.push([localStorage.getItem('pantsypos' + ide)]);

                        // Manhattan
                        dressxmanh_local.push([localStorage.getItem('dressxmanh' + ide)]);
                        dressymanh_local.push([localStorage.getItem('dressymanh' + ide)]);
                        shirtxmanh_local.push([localStorage.getItem('shirtxmanh' + ide)]);
                        shirtymanh_local.push([localStorage.getItem('shirtymanh' + ide)]);
                        skirtxmanh_local.push([localStorage.getItem('skirtxmanh' + ide)]);
                        skirtymanh_local.push([localStorage.getItem('skirtymanh' + ide)]);
                        pantsxmanh_local.push([localStorage.getItem('pantsxmanh' + ide)]);
                        pantsymanh_local.push([localStorage.getItem('pantsymanh' + ide)]);

                        // Inputs
                        input_local.push([localStorage.getItem('input' + ide)]);
                        bio_local.push([localStorage.getItem('bio_id' + ide)]);
                        note_local.push([localStorage.getItem('note_id' + ide)]);

                        // Flags
                        shirtflag_local.push([localStorage.getItem('shirt_flag' + ide)]);

                        // Shirt Color Var
                        shirtvar1_local.push([localStorage.getItem('shirt_var1_' + ide)]);
                        shirtvar2_local.push([localStorage.getItem('shirt_var2_' + ide)]);
                        shirtvar3_local.push([localStorage.getItem('shirt_var3_' + ide)]);
                        shirtvar4_local.push([localStorage.getItem('shirt_var4_' + ide)]);

                        // pants Color Var
                        pantsvar1_local.push([localStorage.getItem('pants_var1_' + ide)]);
                        pantsvar2_local.push([localStorage.getItem('pants_var2_' + ide)]);
                        pantsvar3_local.push([localStorage.getItem('pants_var3_' + ide)]);
                        pantsvar4_local.push([localStorage.getItem('pants_var4_' + ide)]);

                        // Skirt Color Var
                        skirtvar1_local.push([localStorage.getItem('skirt_var1_' + ide)]);
                        skirtvar2_local.push([localStorage.getItem('skirt_var2_' + ide)]);
                        skirtvar3_local.push([localStorage.getItem('skirt_var3_' + ide)]);

                        // Acc2 Color Var
                        acc2var1_local.push([localStorage.getItem('acc2_var1_' + ide)]);
                        acc2var2_local.push([localStorage.getItem('acc2_var2_' + ide)]);
                        acc2var3_local.push([localStorage.getItem('acc2_var3_' + ide)]);
                      }

                      // Eliminar Slots desde el Seleccionado en Adelante (Check)
                      for (var _i = 0; _i < id_del + 1; _i++) {
                        var ide2 = recycle_btn.id + _i;
                        localStorage.removeItem('dress_id' + ide2);
                        localStorage.removeItem('top_id' + ide2);
                        localStorage.removeItem('hair_id' + ide2);
                        localStorage.removeItem('backhair_id' + ide2);
                        localStorage.removeItem('shirt_id' + ide2);
                        localStorage.removeItem('skirt_id' + ide2);
                        localStorage.removeItem('pants_id' + ide2);
                        localStorage.removeItem('acc1_id' + ide2);
                        localStorage.removeItem('acc2_id' + ide2);
                        localStorage.removeItem('acc3_id' + ide2);
                        localStorage.removeItem('eye1_id' + ide2);
                        localStorage.removeItem('eye_id' + ide2);
                        localStorage.removeItem('eyebrow_id' + ide2);
                        localStorage.removeItem('background_id' + ide2);
                        localStorage.removeItem('skin_id' + ide2);
                        localStorage.removeItem('nose_id' + ide2);
                        localStorage.removeItem('mouth_id' + ide2);
                        localStorage.removeItem('ear_id' + ide2);

                        // Positions
                        localStorage.removeItem('dressxpos' + ide2);
                        localStorage.removeItem('dressypos' + ide2);
                        localStorage.removeItem('shirtxpos' + ide2);
                        localStorage.removeItem('shirtypos' + ide2);
                        localStorage.removeItem('skirtxpos' + ide2);
                        localStorage.removeItem('skirtypos' + ide2);
                        localStorage.removeItem('pantsxpos' + ide2);
                        localStorage.removeItem('pantsypos' + ide2);

                        // Manhattan
                        localStorage.removeItem('dressxmanh' + ide2);
                        localStorage.removeItem('dressymanh' + ide2);
                        localStorage.removeItem('shirtxmanh' + ide2);
                        localStorage.removeItem('shirtymanh' + ide2);
                        localStorage.removeItem('skirtxmanh' + ide2);
                        localStorage.removeItem('skirtymanh' + ide2);
                        localStorage.removeItem('pantsxmanh' + ide2);
                        localStorage.removeItem('pantsymanh' + ide2);

                        // Inputs
                        localStorage.removeItem('input' + ide2);
                        localStorage.removeItem('bio_id' + ide2);
                        localStorage.removeItem('note_id' + ide2);

                        // Flags
                        localStorage.removeItem('shirt_flag' + ide2);

                        // Shirt Color Var
                        localStorage.removeItem('shirt_var1_' + ide2);
                        localStorage.removeItem('shirt_var2_' + ide2);
                        localStorage.removeItem('shirt_var3_' + ide2);
                        localStorage.removeItem('shirt_var4_' + ide2);

                        // Pants Color Var
                        localStorage.removeItem('pants_var1_' + ide2);
                        localStorage.removeItem('pants_var2_' + ide2);
                        localStorage.removeItem('pants_var3_' + ide2);
                        localStorage.removeItem('pants_var4_' + ide2);

                        // Skirt Color Var
                        localStorage.removeItem('skirt_var1_' + ide2);
                        localStorage.removeItem('skirt_var2_' + ide2);
                        localStorage.removeItem('skirt_var3_' + ide2);

                        // ACC2 Color Var
                        localStorage.removeItem('acc2_var1_' + ide2);
                        localStorage.removeItem('acc2_var2_' + ide2);
                        localStorage.removeItem('acc2_var3_' + ide2);

                        // Eye Color Var (Necesita Mejora)
                      }

                      // Se Disminuye 1 Punto la Cantidad de Slots (Check)
                      _this2.slotnum--;

                      // Se Crean Slots desde el seleccionado en Adelante Menos 1
                      for (var _i2 = 0; _i2 < id_del; _i2++) {
                        var ide3 = recycle_btn.id + _i2;
                        localStorage.setItem('dress_id' + ide3, dress_local[_i2]);
                        localStorage.setItem('top_id' + ide3, top_local[_i2]);
                        localStorage.setItem('hair_id' + ide3, hair_local[_i2]);
                        localStorage.setItem('backhair_id' + ide3, backhair_local[_i2]);
                        localStorage.setItem('shirt_id' + ide3, shirt_local[_i2]);
                        localStorage.setItem('skirt_id' + ide3, skirt_local[_i2]);
                        localStorage.setItem('pants_id' + ide3, pants_local[_i2]);
                        localStorage.setItem('acc1_id' + ide3, acc1_local[_i2]);
                        localStorage.setItem('acc2_id' + ide3, acc2_local[_i2]);
                        localStorage.setItem('acc3_id' + ide3, acc3_local[_i2]);
                        localStorage.setItem('eye1_id' + ide3, eye1_local[_i2]);
                        localStorage.setItem('eye_id' + ide3, eye_local[_i2]);
                        localStorage.setItem('eyebrow_id' + ide3, eyebrow_local[_i2]);
                        localStorage.setItem('background_id' + ide3, background_local[_i2]);
                        localStorage.setItem('skin_id' + ide3, skin_local[_i2]);
                        localStorage.setItem('nose_id' + ide3, nose_local[_i2]);
                        localStorage.setItem('mouth_id' + ide3, mouth_local[_i2]);
                        localStorage.setItem('ear_id' + ide3, ear_local[_i2]);

                        // Positions
                        localStorage.setItem('dressxpos' + ide3, dressxpos_local[_i2]);
                        localStorage.setItem('dressypos' + ide3, dressypos_local[_i2]);
                        localStorage.setItem('shirtxpos' + ide3, shirtxpos_local[_i2]);
                        localStorage.setItem('shirtypos' + ide3, shirtypos_local[_i2]);
                        localStorage.setItem('skirtxpos' + ide3, skirtxpos_local[_i2]);
                        localStorage.setItem('skirtypos' + ide3, skirtypos_local[_i2]);
                        localStorage.setItem('pantsxpos' + ide3, skirtxpos_local[_i2]);
                        localStorage.setItem('pantsypos' + ide3, skirtypos_local[_i2]);

                        // Manhattan
                        localStorage.setItem('dressxmanh' + ide3, dressxmanh_local[_i2]);
                        localStorage.setItem('dressymanh' + ide3, dressymanh_local[_i2]);
                        localStorage.setItem('shirtxmanh' + ide3, shirtxmanh_local[_i2]);
                        localStorage.setItem('shirtymanh' + ide3, shirtymanh_local[_i2]);
                        localStorage.setItem('skirtxmanh' + ide3, skirtxmanh_local[_i2]);
                        localStorage.setItem('skirtymanh' + ide3, skirtymanh_local[_i2]);
                        localStorage.setItem('pantsxmanh' + ide3, skirtxmanh_local[_i2]);
                        localStorage.setItem('pantsymanh' + ide3, skirtymanh_local[_i2]);

                        // Inputs
                        localStorage.setItem('input' + ide3, input_local[_i2]);
                        localStorage.setItem('bio_id' + ide3, bio_local[_i2]);
                        localStorage.setItem('note_id' + ide3, note_local[_i2]);

                        // Flags
                        localStorage.setItem('shirt_flag' + ide3, shirtflag_local[_i2]);

                        // Shirt Color Var
                        localStorage.setItem('shirt_var1_' + ide3, shirtvar1_local[_i2]);
                        localStorage.setItem('shirt_var2_' + ide3, shirtvar2_local[_i2]);
                        localStorage.setItem('shirt_var3_' + ide3, shirtvar3_local[_i2]);
                        localStorage.setItem('shirt_var4_' + ide3, shirtvar4_local[_i2]);

                        // Pants Color Var
                        localStorage.setItem('pants_var1_' + ide3, pantsvar1_local[_i2]);
                        localStorage.setItem('pants_var2_' + ide3, pantsvar2_local[_i2]);
                        localStorage.setItem('pants_var3_' + ide3, pantsvar3_local[_i2]);
                        localStorage.setItem('pants_var4_' + ide3, pantsvar4_local[_i2]);

                        // Skirt Color Var
                        localStorage.setItem('skirt_var1_' + ide3, skirtvar1_local[_i2]);
                        localStorage.setItem('skirt_var2_' + ide3, skirtvar2_local[_i2]);
                        localStorage.setItem('skirt_var3_' + ide3, skirtvar3_local[_i2]);

                        // ACC2 Color Var
                        localStorage.setItem('acc2_var1_' + ide3, acc2var1_local[_i2]);
                        localStorage.setItem('acc2_var2_' + ide3, acc2var2_local[_i2]);
                        localStorage.setItem('acc2_var3_' + ide3, acc2var3_local[_i2]);
                      }
                    }

                    // Numero de Slots
                    localStorage.setItem('slot', localStorage.getItem('slot') - 1);
                    rectangle.destroy();
                    rectangle2.destroy();
                    textconfirm.destroy();
                    yes_btn.destroy();
                    no_btn.destroy();
                    _this2.layer1.destroy();
                    _this2.layer2.destroy();
                    _this2.layer3.destroy();
                    _this2.layer4.destroy();
                    _this2.layer5.destroy();
                    _this2.layer6.destroy();
                    _this2.layer7.destroy();
                    _this2.layer8.destroy();
                    _this2.layer9.destroy();
                    _this2.layer10.destroy();
                    _this2.layer11.destroy();
                    _this2.layer12.destroy();
                    _this2.layer17.destroy();
                    _this2.layer18.destroy();
                    _this2.layer19.destroy();
                    var inputs = document.getElementsByClassName('inputs');
                    // Remove the elements

                    while (inputs.length > 0) {
                      inputs[0].parentNode.removeChild(inputs[0]);
                    }
                    _this2.frameload.destroy();
                    doll.destroy();
                    dress.destroy();
                    top.destroy();
                    hair.destroy();
                    backhair.destroy();
                    shirt.destroy();
                    skirt.destroy();
                    pants.destroy();
                    acc1.destroy();
                    acc2.destroy();
                    acc3.destroy();
                    eye1.destroy();
                    eyebrow.destroy();
                    background.destroy();
                    nose.destroy();
                    mouth.destroy();
                    ear.destroy();
                    recycle_btn.destroy();
                    _this2.layer15.destroy();
                    _this2.addnew.destroy();
                    _this2.lore.setVisible(false);
                    _this2.playload.setVisible(false);
                    _this2.loadButton.emit('pointerdown', pointer);
                    _this2.textinfo1.setText("Saved Files: " + _this2.slotnum + "/999", {
                      fontSize: '42px',
                      fill: '#ff0000'
                    });
                    _this2.tween7.complete();
                    _this2.tween8.complete();
                    _this2.tween9.complete();
                    _this2.tween10.complete();
                    _this2.tween11.complete();
                    _this2.flag5 = 0;
                    _this2.edit_icon = document.getElementById('edit_qty');
                    _this2.edit_icon.innerHTML = Number(Math.max(localStorage.getItem('slot'), 0));
                  });
                  var no_btn = _this2.add.image(width / 1.8, height / 1.8, 'no_btn').setOrigin(0, 0.5).setDepth(42).setScale(1.5);
                  no_btn.setInteractive();
                  no_btn.on('pointerdown', function () {
                    rectangle.destroy();
                    rectangle2.destroy();
                    textconfirm.destroy();
                    yes_btn.destroy();
                    no_btn.destroy();
                    _this2.flag5 = 0;
                  });
                  _this2.flag5 = 1;
                }
              });
              _this2.playload = _this2.add.image(_this2.game.renderer.width * 0.74, _this2.game.renderer.height * 0.04, "playload").setOrigin(0).setScale(1.5);
              _this2.playload.setVisible(false);
              _this2.playload.setDepth(50);
              _this2.lore = _this2.add.image(_this2.game.renderer.width * 0.82, _this2.game.renderer.height * 0.15, "lore_btn").setOrigin(0).setScale(1.3);
              _this2.lore.setVisible(false);
              _this2.lore.setDepth(50);
              if (_this2.anims.exists('dollskin')) {} else {
                var dollskins = _this2.anims.create({
                  key: "dollskin",
                  frameRate: 17,
                  frames: _this2.anims.generateFrameNames("dollskin", {
                    scale: 1,
                    prefix: "doll_skin",
                    start: 1,
                    end: 17
                  })
                });
              }
              var doll = Phaser.GameObjects.Sprite = _this2.add.sprite(_this2.game.renderer.width / 2, _this2.game.renderer.height * 0.42, "dollskin", 'doll_skin1');
              doll.setDepth(4);
              doll.setVisible(false);
              doll.play("dollskin");
              doll.anims.pause();
              doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[1]);

              // Dresses
              var dress = _this2.add.image(_this2.game.renderer.width / 2, _this2.game.renderer.height * 0.42, "dress_1");
              dress.setVisible(false);
              dress.setDepth(10);

              // Top
              var top = _this2.add.image(_this2.game.renderer.width / 2, _this2.game.renderer.height * 0.42, "top_1");
              top.setVisible(false);
              top.setDepth(4);

              // Hair
              var hair = _this2.add.image(_this2.game.renderer.width / 2, _this2.game.renderer.height * 0.42, "hair_1");
              hair.setVisible(false);
              hair.setDepth(10);

              // BackHair
              var backhair = _this2.add.image(_this2.game.renderer.width / 2, _this2.game.renderer.height * 0.42, "backhair_1");
              backhair.setVisible(false);
              backhair.setDepth(3);

              // Shirt 
              var shirt = _this2.add.image(_this2.game.renderer.width / 2, _this2.game.renderer.height * 0.42, "shirt_1_1");
              shirt.setVisible(false);
              shirt.setDepth(9);

              // Skirt 
              var skirt = _this2.add.image(_this2.game.renderer.width / 2, _this2.game.renderer.height * 0.42, "skirt_1_1");
              skirt.setVisible(false);
              skirt.setDepth(6);

              // Pants
              var pants = _this2.add.image(_this2.game.renderer.width / 2, _this2.game.renderer.height * 0.42, "pants_1_1");
              pants.setVisible(false);
              pants.setDepth(5);

              // ACC 1
              var acc1 = _this2.add.image(_this2.game.renderer.width / 2, _this2.game.renderer.height * 0.42, "strains_1");
              acc1.setVisible(false);
              acc1.setDepth(11);

              // ACC 2
              var acc2 = _this2.add.image(_this2.game.renderer.width / 2, _this2.game.renderer.height * 0.42, "acc2_1_1");
              acc2.setVisible(false);
              acc2.setDepth(12);

              // ACC 3
              var acc3 = _this2.add.image(_this2.game.renderer.width / 2, _this2.game.renderer.height * 0.42, "acc3_1");
              acc3.setVisible(false);
              acc3.setDepth(2);

              // Eyes
              var eye1 = _this2.add.image(_this2.game.renderer.width / 2, _this2.game.renderer.height * 0.42, "eye1_1");
              eye1.setVisible(false);
              eye1.setDepth(7);

              // EyeBrows
              var eyebrow = _this2.add.image(_this2.game.renderer.width / 2, _this2.game.renderer.height * 0.42, "eyebrow_1");
              eyebrow.setVisible(false);
              eyebrow.setDepth(8);

              // Background
              var background = _this2.add.image(_this2.game.renderer.width / 2, _this2.game.renderer.height * 0.42, "background_0");
              background.setScale(1.6);
              background.setVisible(false);
              background.setDepth(1);

              // Noses
              var nose = _this2.add.image(_this2.game.renderer.width / 2, _this2.game.renderer.height * 0.42, "nose_1");
              nose.setVisible(false);
              nose.setDepth(5);

              // Mouths
              var mouth = _this2.add.image(_this2.game.renderer.width / 2, _this2.game.renderer.height * 0.42, "mouth_1");
              mouth.setVisible(false);
              mouth.setDepth(5);

              // Ears
              var ear = _this2.add.image(_this2.game.renderer.width / 2, _this2.game.renderer.height * 0.42, "ear_2");
              ear.setVisible(false);
              ear.setDepth(19);

              // Existentes Doll Gráficos en Grande
              if (_this2.slotnum > 0) {
                var _loop = function _loop() {
                  var loadslot = _this2.add.image(_this2.game.renderer.width + i * 220, _this2.game.renderer.height * 0.65, 'load_doll').setOrigin(0);
                  loadslot.setDepth(15);
                  _this2.loadslot = loadslot;

                  // Transición Derecha a Izquierda

                  _this2.tween3 = _this2.tweens.add({
                    targets: loadslot,
                    ease: 'Sine.easeInOut',
                    x: 20 + i * 220,
                    duration: 300,
                    paused: true,
                    alpha: {
                      getStart: function getStart() {
                        return 0;
                      },
                      getEnd: function getEnd() {
                        return 1;
                      }
                    },
                    onComplete: function onComplete() {
                      loadslot.setInteractive();
                    }
                  });
                  _this2.tween3.play();
                  _this2.layer15.add(loadslot);
                  loadslot.myValue = i + 1;
                  _this2.flag3 = Math.floor((i + 1) / 3);
                  _this2.flag4 = 0;
                  loadslot.on('pointerdown', function () {
                    if (_this2.flag_lore === 0) {
                      _this2.cur_slot = loadslot.myValue;
                      _this2.frameload.x = loadslot.x;
                      _this2.frameload.y = loadslot.y;
                      recycle_btn.x = loadslot.x + 162;
                      recycle_btn.y = loadslot.y + 12;
                      recycle_btn.id = loadslot.myValue;
                      _this2.frameload.setVisible(true);
                      recycle_btn.setVisible(true);
                      _this2.playload.setVisible(true);
                      _this2.lore.setVisible(true);

                      // Doll
                      doll.setVisible(true);

                      // Cargar Apariencia 
                      dress.setVisible(false);
                      top.setVisible(false);
                      hair.setVisible(false);
                      backhair.setVisible(false);
                      shirt.setVisible(false);
                      skirt.setVisible(false);
                      pants.setVisible(false);
                      acc1.setVisible(false);
                      acc2.setVisible(false);
                      acc3.setVisible(false);
                      eye1.setVisible(false);
                      eyebrow.setVisible(false);
                      background.setVisible(false);
                      nose.setVisible(false);
                      mouth.setVisible(false);
                      ear.setVisible(false);

                      // Doll Skin

                      doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[localStorage.getItem('skin_id' + _this2.cur_slot)]);

                      // Dress
                      if (localStorage.getItem('dress_id' + _this2.cur_slot) > 0) {
                        dress.setTexture("dress_" + localStorage.getItem('dress_id' + _this2.cur_slot));
                        // dress.setPosition(localStorage.getItem('dressxpos' + this.cur_slot), localStorage.getItem('dressypos' + this.cur_slot))
                        dress.setVisible(true);
                        dress.setDepth(10);
                      }

                      // Top
                      if (localStorage.getItem('top_id' + _this2.cur_slot) > 0) {
                        top.setTexture("top_" + localStorage.getItem('top_id' + _this2.cur_slot));
                        top.setVisible(true);
                        top.setDepth(4);
                      }

                      // Hair
                      if (localStorage.getItem('hair_id' + _this2.cur_slot) > 0) {
                        hair.setTexture("hair_" + localStorage.getItem('hair_id' + _this2.cur_slot));
                        hair.setVisible(true);
                        hair.setDepth(12);
                      }

                      // BackHair
                      if (localStorage.getItem('backhair_id' + _this2.cur_slot) > 0) {
                        backhair.setTexture("backhair_" + localStorage.getItem('backhair_id' + _this2.cur_slot));
                        backhair.setVisible(true);
                        backhair.setDepth(3);
                      }

                      // Shirt
                      if (localStorage.getItem('shirt_id' + _this2.cur_slot) > 0) {
                        shirt.setTexture("shirt_" + localStorage.getItem('shirt_id' + _this2.cur_slot) + "_" + Number(localStorage.getItem('shirt_var' + localStorage.getItem('shirt_id' + _this2.cur_slot) + "_" + _this2.cur_slot)));
                        var shirt_flag = localStorage.getItem('shirt_flag' + _this2.cur_slot);
                        shirt.setVisible(true);
                        shirt.setDepth(9 - shirt_flag * 5);
                      }

                      // skirt
                      if (localStorage.getItem('skirt_id' + _this2.cur_slot) > 0) {
                        skirt.setTexture("skirt_" + localStorage.getItem('skirt_id' + _this2.cur_slot) + "_" + Number(localStorage.getItem('skirt_var' + localStorage.getItem('skirt_id' + _this2.cur_slot) + "_" + _this2.cur_slot)));
                        skirt.setVisible(true);
                        skirt.setDepth(5);
                      }

                      // Pants
                      if (localStorage.getItem('pants_id' + _this2.cur_slot) > 0) {
                        pants.setTexture("pants_" + localStorage.getItem('pants_id' + _this2.cur_slot) + "_" + Number(localStorage.getItem('pants_var' + localStorage.getItem('pants_id' + _this2.cur_slot) + "_" + _this2.cur_slot)));
                        pants.setVisible(true);
                        pants.setDepth(6);
                      }

                      // ACC 1
                      if (localStorage.getItem('acc1_id' + _this2.cur_slot) > 0) {
                        acc1.setTexture("strains_" + localStorage.getItem('acc1_id' + _this2.cur_slot));
                        acc1.setVisible(true);
                        acc1.setDepth(11);
                      }

                      // ACC 2
                      if (localStorage.getItem('acc2_id' + _this2.cur_slot) > 0) {
                        acc2.setTexture("acc2_" + localStorage.getItem('acc2_id' + _this2.cur_slot) + "_" + Number(localStorage.getItem('acc2_var' + localStorage.getItem('acc2_id' + _this2.cur_slot) + "_" + _this2.cur_slot)));
                        acc2.setVisible(true);
                        acc2.setDepth(10);
                      }

                      // ACC 3
                      if (localStorage.getItem('acc3_id' + _this2.cur_slot) > 0) {
                        acc3.setTexture("acc3_" + localStorage.getItem('acc3_id' + _this2.cur_slot));
                        acc3.setVisible(true);
                        acc3.setDepth(2);
                      }

                      // Eyes
                      if (localStorage.getItem('eye1_id' + _this2.cur_slot) > 0) {
                        eye1.setTexture("eye1_" + localStorage.getItem('eye1_id' + _this2.cur_slot));
                        eye1.setVisible(true);
                        eye1.setDepth(7);
                      }

                      // Eyebrow
                      if (localStorage.getItem('eyebrow_id' + _this2.cur_slot) > 0) {
                        eyebrow.setTexture("eyebrow_" + localStorage.getItem('eyebrow_id' + _this2.cur_slot));
                        eyebrow.setVisible(true);
                        eyebrow.setDepth(8);
                      }

                      // Backgrounds
                      if (localStorage.getItem('background_id' + _this2.cur_slot) > 0) {
                        background.setTexture("background_" + localStorage.getItem('background_id' + _this2.cur_slot));
                        background.setVisible(true);
                        background.setDepth(1);
                      }

                      // Nose
                      if (localStorage.getItem('nose_id' + _this2.cur_slot) > 0) {
                        nose.setTexture("nose_" + localStorage.getItem('nose_id' + _this2.cur_slot));
                        nose.setVisible(true);
                        nose.setDepth(5);
                      }

                      // Mouth
                      if (localStorage.getItem('mouth_id' + _this2.cur_slot) > 0) {
                        mouth.setTexture("mouth_" + localStorage.getItem('mouth_id' + _this2.cur_slot));
                        mouth.setVisible(true);
                        mouth.setDepth(5);
                      }

                      // Ear
                      if (localStorage.getItem('ear_id' + _this2.cur_slot) > 1) {
                        var num = Number(localStorage.getItem('skin_id' + _this2.cur_slot));
                        var curskin = Number(num + 1);
                        ear.setTexture("ear" + localStorage.getItem('ear_id' + _this2.cur_slot) + "_" + curskin);
                        ear.setVisible(true);
                        ear.setDepth(4);
                      }
                    }
                  });
                  more_btn.on('pointerdown', function () {
                    if (_this2.flag3 > 0) {
                      loadslot.x = loadslot.x - 660;
                      recycle_btn.x = recycle_btn.x - 660;
                    }
                  });
                  less_btn.on('pointerdown', function () {
                    if (_this2.flag4 > 0) {
                      loadslot.x = loadslot.x + 660;
                      recycle_btn.x = recycle_btn.x + 660;
                    }
                  });
                };
                for (var i = 0; i < _this2.slotnum; i++) {
                  _loop();
                }
              }
              _this2.playload.setInteractive();
              _this2.playload.once('pointerdown', function () {
                var inputs = document.getElementsByClassName('inputs');
                // Remove the elements

                while (inputs.length > 0) {
                  inputs[0].parentNode.removeChild(inputs[0]);
                }
                _this2.scene.start(_CST.CST.SCENES.GAMES, {
                  music: _this2.music,
                  slot_no: _this2.slotnum,
                  slot_cur: _this2.cur_slot,
                  load_true: 1
                });
              });
              var _loop2 = function _loop2() {
                var number = Number(_i3 + 1);
                // Inputs

                // let inputField = this.add.dom(28 + (i * 220), this.game.renderer.height * 0.937, 'input','width:194px; height:36px; font-size:26px; text-align: center; border: 2px solid black; background: transparent; outline: none;');
                var inputField = _this2.add.dom(_this2.game.renderer.width, _this2.game.renderer.height * 0.937, 'input', 'width:194px; height:36px; font-size:26px; text-align: center; border: 2px solid black; background: transparent; outline: none;');
                inputField.setOrigin(0);
                inputField.node.type = 'text';
                inputField.node.value = localStorage.getItem('input' + number);
                inputField.node.id = number;
                inputField.node.classList.add('inputs');
                inputField.node.maxLength = '12';
                _this2.layer20.add(inputField);
                _this2.tween6 = _this2.tweens.add({
                  targets: inputField,
                  ease: 'Sine.easeInOut',
                  x: 28 + _i3 * 220,
                  duration: 300,
                  paused: true,
                  alpha: {
                    getStart: function getStart() {
                      return 0;
                    },
                    getEnd: function getEnd() {
                      return 1;
                    }
                  },
                  onComplete: function onComplete() {}
                });
                _this2.tween6.play();
                _this2.input.on('pointerup', function () {
                  inputField.node.blur();
                });
                more_btn.on('pointerdown', function () {
                  if (_this2.flag3 > 0) {
                    var aux = Number(number + 3 * (_this2.flag4 + 1));
                    inputField.node.value = localStorage.getItem('input' + aux);
                    inputField.node.id = aux;
                    if (aux > _this2.slotnum) {
                      inputField.node.style.visibility = 'hidden';
                    } else if (aux < _this2.slotnum) {
                      inputField.node.style.visibility = 'visible';
                    }
                  }
                });
                less_btn.on('pointerdown', function () {
                  if (_this2.flag4 > 0) {
                    var aux2 = Number(number + 3 * _this2.flag4 - 3);
                    inputField.node.value = localStorage.getItem('input' + aux2);
                    inputField.node.id = aux2;
                    if (aux2 - 1 > _this2.slotnum) {
                      inputField.node.style.visibility = 'hidden';
                    } else if (aux2 - 1 < _this2.slotnum) {
                      inputField.node.style.visibility = 'visible';
                    }
                  }
                });
                inputField.node.addEventListener('keyup', function () {
                  localStorage.setItem('input' + inputField.node.id, inputField.node.value);
                });
              };
              for (var _i3 = 0; _i3 < Math.min(_this2.slotnum, 3); _i3++) {
                _loop2();
              }

              // Lore Button
              _this2.lore.setInteractive();
              _this2.lore.on('pointerdown', function () {
                if (_this2.flag5 === 0) {
                  _this2.menuback.setVisible(false);
                  _this2.playload.setVisible(false);
                  _this2.lore.setVisible(false);
                  more_btn.setVisible(false);
                  less_btn.setVisible(false);
                  var lore_backdrop = _this2.add.graphics();
                  var fillColor = 0x14133F;
                  lore_backdrop.fillStyle(fillColor);
                  lore_backdrop.fillRect(0, 0, _this2.game.renderer.width, _this2.game.renderer.height);
                  lore_backdrop.setDepth(50);
                  _this2.layer20.setVisible(false);
                  var lore_depth = 50;
                  var lore_xpos = _this2.game.renderer.width * 0.734;
                  var lore_ypos = _this2.game.renderer.height * 0.30;
                  var lore_scale = 0.61;

                  // Profundidades Nuevas
                  doll.setDepth(4 + lore_depth);
                  doll.setPosition(lore_xpos, lore_ypos);
                  doll.setScale(lore_scale);
                  dress.setDepth(10 + lore_depth);
                  dress.setPosition(lore_xpos, lore_ypos);
                  dress.setScale(lore_scale);
                  top.setDepth(4 + lore_depth);
                  top.setPosition(lore_xpos, lore_ypos);
                  top.setScale(lore_scale);
                  hair.setDepth(12 + lore_depth);
                  hair.setPosition(lore_xpos, lore_ypos);
                  hair.setScale(lore_scale);
                  backhair.setDepth(3 + lore_depth);
                  backhair.setPosition(lore_xpos, lore_ypos);
                  backhair.setScale(lore_scale);
                  var shirt_flag = localStorage.getItem('shirt_flag' + _this2.cur_slot);
                  shirt.setDepth(9 + lore_depth - shirt_flag * 5);
                  shirt.setPosition(lore_xpos, lore_ypos);
                  shirt.setScale(lore_scale);
                  skirt.setDepth(5 + lore_depth);
                  skirt.setPosition(lore_xpos, lore_ypos);
                  skirt.setScale(lore_scale);
                  pants.setDepth(6 + lore_depth);
                  pants.setPosition(lore_xpos, lore_ypos);
                  pants.setScale(lore_scale);
                  acc1.setDepth(11 + lore_depth);
                  acc1.setPosition(lore_xpos, lore_ypos);
                  acc1.setScale(lore_scale);
                  acc2.setDepth(10 + lore_depth);
                  acc2.setPosition(lore_xpos, lore_ypos);
                  acc2.setScale(lore_scale);
                  acc3.setDepth(2 + lore_depth);
                  acc3.setPosition(lore_xpos, lore_ypos);
                  acc3.setScale(lore_scale);
                  eye1.setDepth(7 + lore_depth);
                  eye1.setPosition(lore_xpos, lore_ypos);
                  eye1.setScale(lore_scale);
                  eyebrow.setDepth(8 + lore_depth);
                  eyebrow.setPosition(lore_xpos, lore_ypos);
                  eyebrow.setScale(lore_scale);
                  background.setDepth(1 + lore_depth);
                  background.setPosition(lore_xpos, lore_ypos);
                  background.setScale(0.50, 0.437);
                  nose.setDepth(5 + lore_depth);
                  nose.setPosition(lore_xpos, lore_ypos);
                  nose.setScale(lore_scale);
                  mouth.setDepth(5 + lore_depth);
                  mouth.setPosition(lore_xpos, lore_ypos);
                  mouth.setScale(lore_scale);
                  ear.setDepth(19 + lore_depth);
                  ear.setPosition(lore_xpos, lore_ypos);
                  ear.setScale(lore_scale);
                  _this2.flag_lore = 1;

                  // Lore Information

                  // Input Name
                  var input_name = _this2.add.dom(_this2.game.renderer.width * 0.022, _this2.game.renderer.height * 0.08, 'input', 'width:284px; height:52px; font-size: 36px; text-align: center; border: 2px solid white; background: transparent; outline: none; color: white; resize:none;');
                  input_name.setOrigin(0);
                  input_name.node.type = 'text';
                  input_name.node.value = localStorage.getItem('input' + _this2.cur_slot);
                  input_name.node.id = 'name';
                  input_name.node.classList.add('input_name');
                  input_name.node.maxLength = '12';
                  var textname = document.getElementById('name');

                  // Input Bio
                  var text_bio = _this2.add.dom(_this2.game.renderer.width * 0.03, _this2.game.renderer.height * 0.14, 'textarea', 'width:254px; height:450px; font-size: 32px; padding: 15px 15px 15px 15px; border: 2px solid white; background: transparent; outline: none; color: white; resize:none;');
                  text_bio.setOrigin(0);
                  text_bio.node.value = localStorage.getItem('bio_id' + _this2.cur_slot);
                  text_bio.node.id = 'bio';
                  text_bio.node.classList.add('input_bio');
                  text_bio.node.maxLength = '160';

                  // Limit Bio
                  var textbio = document.getElementById('bio');
                  var limit_bio = _this2.add.text(_this2.game.renderer.width * 0.338, _this2.game.renderer.height * 0.525, textbio.value.length + '/' + '160', {
                    fontSize: '20px',
                    fill: '#FFFFFF'
                  });
                  limit_bio.setDepth(60);
                  setInterval(function () {
                    limit_bio.setText(textbio.value.length + '/' + '160');
                  }, 30);
                  var text_note = _this2.add.dom(_this2.game.renderer.width * 0.03, _this2.game.renderer.height * 0.54, 'textarea', 'width:640px; height:520px; font-size: 32px; padding: 15px 15px 15px 15px; border: 2px solid white; background: transparent; outline: none; color: white; resize:none;');
                  text_note.setOrigin(0);
                  text_note.node.value = localStorage.getItem('note_id' + _this2.cur_slot);
                  text_note.node.id = 'note';
                  text_note.node.classList.add('input_note');
                  text_note.node.maxLength = '999999';

                  // Limit note
                  var textnote = document.getElementById('note');
                  var limit_note = _this2.add.text(_this2.game.renderer.width * 0.76, _this2.game.renderer.height * 0.98, textnote.value.length + '/' + '160', {
                    fontSize: '20px',
                    fill: '#FFFFFF'
                  });
                  limit_note.setDepth(60);
                  setInterval(function () {
                    limit_note.setText(textnote.value.length + '/' + '999999');
                  }, 30);
                  var save_lore = _this2.add.image(_this2.game.renderer.width * 0.27, _this2.game.renderer.height * 0.015, "save_lore");
                  save_lore.setDepth(lore_depth + 2);
                  save_lore.setInteractive();
                  save_lore.setOrigin(0);
                  save_lore.on('pointerdown', function () {
                    // Texto Aviso 
                    var text_saved = _this2.add.text(_this2.game.renderer.width * 0.38, _this2.game.renderer.height * 0.026, 'Saved', {
                      fontSize: 40
                    });
                    text_saved.setDepth(lore_depth + 7);
                    _this2.tweens.add({
                      targets: text_saved,
                      alpha: 0,
                      y: '-=25',
                      duration: 400,
                      onComplete: function onComplete() {
                        text_saved.destroy();
                      }
                    });

                    // Guardar Titulos
                    localStorage.setItem('input' + _this2.cur_slot, input_name.node.value);
                    // Guardar Biografia
                    localStorage.setItem('bio_id' + _this2.cur_slot, text_bio.node.value);
                    // Guardar Nota
                    localStorage.setItem('note_id' + _this2.cur_slot, text_note.node.value);
                    _this2.flag_lock = 0;
                  });

                  // Flag Lock Save
                  textbio.addEventListener('keydown', function () {
                    _this2.flag_lock = 1;
                  });
                  textnote.addEventListener('keydown', function () {
                    _this2.flag_lock = 1;
                  });
                  textname.addEventListener('keydown', function () {
                    _this2.flag_lock = 1;
                  });
                  var slot_qty = Number(localStorage.getItem('slot'));

                  // Next and Previous Arrow
                  var next_lore = _this2.add.image(_this2.game.renderer.width * 0.95, _this2.game.renderer.height * 0.042, 'right_arrow1');
                  next_lore.setDepth(lore_depth + 7);
                  next_lore.setInteractive();
                  if (_this2.cur_slot === slot_qty) {
                    next_lore.setVisible(false);
                  }
                  next_lore.on('pointerdown', function () {
                    if (_this2.timer1 === 0) {
                      if (_this2.flag_lock === 0) {
                        // sube un numero el cur slot
                        _this2.cur_slot = Number(_this2.cur_slot + 1);
                        if (_this2.cur_slot === slot_qty) {
                          next_lore.setVisible(false);
                        } else if (_this2.cur_slot < slot_qty) {
                          next_lore.setVisible(true);
                        }

                        // elimina el contenido
                        _this2.flag_lore = 0;
                        lore_backdrop.destroy();
                        return_lore.destroy();
                        _this2.menuback.setVisible(true);
                        _this2.playload.setVisible(true);
                        _this2.lore.setVisible(true);
                        more_btn.setVisible(true);
                        less_btn.setVisible(true);
                        _this2.layer20.setVisible(true);
                        input_name.destroy();
                        text_bio.destroy();
                        text_note.destroy();
                        save_lore.destroy();
                        limit_bio.destroy();
                        limit_note.destroy();
                        next_lore.destroy();
                        previous_lore.destroy();

                        // Emite el evento

                        if (_this2.move_rightblock === 1) {
                          more_btn.emit('pointerdown');
                        }

                        // Mover LoadSlot si es necesario
                        // let move_steps = Number(Math.floor((this.cur_slot -1)  / 3));

                        _this2.move_leftblock = Number((_this2.cur_slot - 1) % 3 / 2);
                        _this2.move_rightblock = Math.min(Number((_this2.cur_slot - 1) % 3 / 2), 1);
                        var move_frameload = Number((_this2.cur_slot - 1) % 3 * 220 + 20);
                        _this2.frameload.x = move_frameload;
                        recycle_btn.x = move_frameload + 162;
                        dress.setVisible(false);
                        top.setVisible(false);
                        hair.setVisible(false);
                        backhair.setVisible(false);
                        shirt.setVisible(false);
                        skirt.setVisible(false);
                        pants.setVisible(false);
                        acc1.setVisible(false);
                        acc2.setVisible(false);
                        acc3.setVisible(false);
                        eye1.setVisible(false);
                        eyebrow.setVisible(false);
                        background.setVisible(false);
                        nose.setVisible(false);
                        mouth.setVisible(false);
                        ear.setVisible(false);

                        // Doll Skin

                        doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[localStorage.getItem('skin_id' + _this2.cur_slot)]);

                        // Dress
                        if (localStorage.getItem('dress_id' + _this2.cur_slot) > 0) {
                          dress.setTexture("dress_" + localStorage.getItem('dress_id' + _this2.cur_slot));
                          dress.setPosition(localStorage.getItem('dressxpos' + _this2.cur_slot), localStorage.getItem('dressypos' + _this2.cur_slot));
                          dress.setVisible(true);
                          dress.setDepth(10);
                        }

                        // Top
                        if (localStorage.getItem('top_id' + _this2.cur_slot) > 0) {
                          top.setTexture("top_" + localStorage.getItem('top_id' + _this2.cur_slot));
                          top.setVisible(true);
                          top.setDepth(4);
                        }

                        // Hair
                        if (localStorage.getItem('hair_id' + _this2.cur_slot) > 0) {
                          hair.setTexture("hair_" + localStorage.getItem('hair_id' + _this2.cur_slot));
                          hair.setVisible(true);
                          hair.setDepth(12);
                        }

                        // BackHair
                        if (localStorage.getItem('backhair_id' + _this2.cur_slot) > 0) {
                          backhair.setTexture("backhair_" + localStorage.getItem('backhair_id' + _this2.cur_slot));
                          backhair.setVisible(true);
                          backhair.setDepth(3);
                        }

                        // Shirt
                        if (localStorage.getItem('shirt_id' + _this2.cur_slot) > 0) {
                          shirt.setTexture("shirt_" + localStorage.getItem('shirt_id' + _this2.cur_slot) + "_" + Number(localStorage.getItem('shirt_var' + localStorage.getItem('shirt_id' + _this2.cur_slot) + "_" + _this2.cur_slot)));
                          shirt.setPosition(localStorage.getItem('shirtxpos' + _this2.cur_slot), localStorage.getItem('shirtypos' + _this2.cur_slot));
                          shirt.setVisible(true);
                          var _shirt_flag = localStorage.getItem('shirt_flag' + _this2.cur_slot);
                          shirt.setDepth(9 - _shirt_flag * 5);
                        }

                        // skirt
                        if (localStorage.getItem('skirt_id' + _this2.cur_slot) > 0) {
                          skirt.setTexture("skirt_" + localStorage.getItem('skirt_id' + _this2.cur_slot) + "_" + Number(localStorage.getItem('skirt_var' + localStorage.getItem('skirt_id' + _this2.cur_slot) + "_" + _this2.cur_slot)));
                          skirt.setPosition(localStorage.getItem('skirtxpos' + _this2.cur_slot), localStorage.getItem('skirtypos' + _this2.cur_slot));
                          skirt.setVisible(true);
                          skirt.setDepth(5);
                        }

                        // Pants
                        if (localStorage.getItem('pants_id' + _this2.cur_slot) > 0) {
                          pants.setTexture("pants_" + localStorage.getItem('pants_id' + _this2.cur_slot) + "_" + Number(localStorage.getItem('pants_var' + localStorage.getItem('pants_id' + _this2.cur_slot) + "_" + _this2.cur_slot)));
                          pants.setPosition(localStorage.getItem('pantsxpos' + _this2.cur_slot), localStorage.getItem('pantsypos' + _this2.cur_slot));
                          pants.setVisible(true);
                          pants.setDepth(6);
                        }

                        // ACC 1
                        if (localStorage.getItem('acc1_id' + _this2.cur_slot) > 0) {
                          acc1.setTexture("strains_" + localStorage.getItem('acc1_id' + _this2.cur_slot));
                          acc1.setVisible(true);
                          acc1.setDepth(11);
                        }

                        // ACC 2
                        if (localStorage.getItem('acc2_id' + _this2.cur_slot) > 0) {
                          acc2.setTexture("acc2_" + localStorage.getItem('acc2_id' + _this2.cur_slot) + "_" + Number(localStorage.getItem('acc2_var' + localStorage.getItem('acc2_id' + _this2.cur_slot) + "_" + _this2.cur_slot)));
                          acc2.setVisible(true);
                          acc2.setDepth(10);
                        }

                        // ACC 3
                        if (localStorage.getItem('acc3_id' + _this2.cur_slot) > 0) {
                          acc3.setTexture("acc3_" + localStorage.getItem('acc3_id' + _this2.cur_slot));
                          acc3.setVisible(true);
                          acc3.setDepth(2);
                        }

                        // Eyes
                        if (localStorage.getItem('eye1_id' + _this2.cur_slot) > 0) {
                          eye1.setTexture("eye1_" + localStorage.getItem('eye1_id' + _this2.cur_slot));
                          eye1.setVisible(true);
                          eye1.setDepth(7);
                        }

                        // Eyebrow
                        if (localStorage.getItem('eyebrow_id' + _this2.cur_slot) > 0) {
                          eyebrow.setTexture("eyebrow_" + localStorage.getItem('eyebrow_id' + _this2.cur_slot));
                          eyebrow.setVisible(true);
                          eyebrow.setDepth(8);
                        }

                        // Backgrounds
                        if (localStorage.getItem('background_id' + _this2.cur_slot) > 0) {
                          background.setTexture("background_" + localStorage.getItem('background_id' + _this2.cur_slot));
                          background.setVisible(true);
                          background.setDepth(1);
                        }

                        // Nose
                        if (localStorage.getItem('nose_id' + _this2.cur_slot) > 0) {
                          nose.setTexture("nose_" + localStorage.getItem('nose_id' + _this2.cur_slot));
                          nose.setVisible(true);
                          nose.setDepth(5);
                        }

                        // Mouth
                        if (localStorage.getItem('mouth_id' + _this2.cur_slot) > 0) {
                          mouth.setTexture("mouth_" + localStorage.getItem('mouth_id' + _this2.cur_slot));
                          mouth.setVisible(true);
                          mouth.setDepth(5);
                        }

                        // Ear
                        if (localStorage.getItem('ear_id' + _this2.cur_slot) > 1) {
                          var num = Number(localStorage.getItem('skin_id' + _this2.cur_slot));
                          var curskin = Number(num + 1);
                          ear.setTexture("ear" + localStorage.getItem('ear_id' + _this2.cur_slot) + "_" + curskin);
                          ear.setVisible(true);
                          ear.setDepth(19);
                        }
                        _this2.timer1 = 5;
                        _this2.lore.emit('pointerdown');
                      } else if (_this2.flag_lock === 1) {
                        input_name.setVisible(false);
                        text_bio.setVisible(false);
                        text_note.setVisible(false);
                        save_lore.setVisible(false);
                        limit_bio.setVisible(false);
                        limit_note.setVisible(false);
                        return_lore.removeInteractive();
                        var width = _this2.sys.game.config.width;
                        var height = _this2.sys.game.config.height;
                        var menurectangle = _this2.add.rectangle(width / 2, height / 2, width, height, 0x000000);
                        menurectangle.setAlpha(0.2);
                        menurectangle.setDepth(lore_depth + 5);
                        var backdrop = _this2.add.rectangle(width / 2, height / 2, width / 1.2, height / 3, 0x000000);
                        backdrop.setDepth(lore_depth + 6);
                        var quitlore_btn = _this2.add.text(_this2.game.renderer.width * 0.1, _this2.game.renderer.height * 0.38, 'Change Without Save?', {
                          fontSize: '48px',
                          fill: '#FFFFFF'
                        });
                        quitlore_btn.setDepth(lore_depth + 7);

                        // Save and Quit
                        var return_save = _this2.add.image(_this2.game.renderer.width * 0.3, _this2.game.renderer.height * 0.5, 'save_img');
                        return_save.setDepth(lore_depth + 7);
                        return_save.setScale(1.8);
                        return_save.setInteractive();
                        return_save.on('pointerdown', function () {
                          // Guardar Titulos
                          localStorage.setItem('input' + _this2.cur_slot, input_name.node.value);
                          // Guardar Biografia
                          localStorage.setItem('bio_id' + _this2.cur_slot, text_bio.node.value);
                          // Guardar Nota
                          localStorage.setItem('note_id' + _this2.cur_slot, text_note.node.value);
                          _this2.flag_lock = 0;
                          next_lore.emit('pointerdown');
                          menurectangle.destroy();
                          backdrop.destroy();
                          quitlore_btn.destroy();
                          return_save.destroy();
                          return_load.destroy();
                          // next_lore.destroy();
                          // previous_lore.destroy();
                          // return_lore.emit('pointerdown');
                        });

                        // Quit
                        var return_load = _this2.add.image(_this2.game.renderer.width * 0.7, _this2.game.renderer.height * 0.5, 'dontsave');
                        return_load.setDepth(lore_depth + 7);
                        return_load.setScale(1.8);
                        return_load.setInteractive();
                        return_load.on('pointerdown', function () {
                          menurectangle.destroy();
                          backdrop.destroy();
                          quitlore_btn.destroy();
                          return_save.destroy();
                          return_load.destroy();
                          _this2.flag_lock = 0;
                          next_lore.emit('pointerdown');

                          // next_lore.destroy();
                          // previous_lore.destroy();
                          // return_lore.emit('pointerdown');
                        });
                      }
                    }
                  });
                  var previous_lore = _this2.add.image(_this2.game.renderer.width * 0.52, _this2.game.renderer.height * 0.042, 'left_arrow1');
                  previous_lore.setDepth(lore_depth + 7);
                  previous_lore.setInteractive();
                  if (_this2.cur_slot < 2) {
                    previous_lore.setVisible(false);
                  }
                  previous_lore.on('pointerdown', function () {
                    if (_this2.timer2 === 0) {
                      if (_this2.flag_lock === 0) {
                        // Baja un numero el cur slot
                        _this2.cur_slot = Number(_this2.cur_slot - 1);
                        if (_this2.cur_slot < 2) {
                          previous_lore.setVisible(false);
                        } else if (_this2.cur_slot > 1) {
                          previous_lore.setVisible(true);
                        }

                        // elimina el contenido
                        _this2.flag_lore = 0;
                        lore_backdrop.destroy();
                        return_lore.destroy();
                        _this2.menuback.setVisible(true);
                        _this2.playload.setVisible(true);
                        _this2.lore.setVisible(true);
                        more_btn.setVisible(true);
                        less_btn.setVisible(true);
                        _this2.layer20.setVisible(true);
                        input_name.destroy();
                        text_bio.destroy();
                        text_note.destroy();
                        save_lore.destroy();
                        limit_bio.destroy();
                        limit_note.destroy();
                        next_lore.destroy();
                        previous_lore.destroy();

                        // Emite el evento

                        _this2.move_leftblock = Number((_this2.cur_slot - 1) % 3 / 2);
                        _this2.move_rightblock = Math.min(Number((_this2.cur_slot - 1) % 3 / 2), 1);
                        if (_this2.move_leftblock === 1) {
                          less_btn.emit('pointerdown');
                        }
                        var move_frameload = Number((_this2.cur_slot - 1) % 3 * 220 + 20);
                        _this2.frameload.x = move_frameload;
                        recycle_btn.x = move_frameload + 162;
                        dress.setVisible(false);
                        top.setVisible(false);
                        hair.setVisible(false);
                        backhair.setVisible(false);
                        shirt.setVisible(false);
                        skirt.setVisible(false);
                        pants.setVisible(false);
                        acc1.setVisible(false);
                        acc2.setVisible(false);
                        acc3.setVisible(false);
                        eye1.setVisible(false);
                        eyebrow.setVisible(false);
                        background.setVisible(false);
                        nose.setVisible(false);
                        mouth.setVisible(false);
                        ear.setVisible(false);

                        // Doll Skin

                        doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[localStorage.getItem('skin_id' + _this2.cur_slot)]);

                        // Dress
                        if (localStorage.getItem('dress_id' + _this2.cur_slot) > 0) {
                          dress.setTexture("dress_" + localStorage.getItem('dress_id' + _this2.cur_slot));
                          dress.setPosition(localStorage.getItem('dressxpos' + _this2.cur_slot), localStorage.getItem('dressypos' + _this2.cur_slot));
                          dress.setVisible(true);
                          dress.setDepth(10);
                        }

                        // Top
                        if (localStorage.getItem('top_id' + _this2.cur_slot) > 0) {
                          top.setTexture("top_" + localStorage.getItem('top_id' + _this2.cur_slot));
                          top.setVisible(true);
                          top.setDepth(4);
                        }

                        // Hair
                        if (localStorage.getItem('hair_id' + _this2.cur_slot) > 0) {
                          hair.setTexture("hair_" + localStorage.getItem('hair_id' + _this2.cur_slot));
                          hair.setVisible(true);
                          hair.setDepth(12);
                        }

                        // BackHair
                        if (localStorage.getItem('backhair_id' + _this2.cur_slot) > 0) {
                          backhair.setTexture("backhair_" + localStorage.getItem('backhair_id' + _this2.cur_slot));
                          backhair.setVisible(true);
                          backhair.setDepth(3);
                        }

                        // Shirt
                        if (localStorage.getItem('shirt_id' + _this2.cur_slot) > 0) {
                          shirt.setTexture("shirt_" + localStorage.getItem('shirt_id' + _this2.cur_slot) + "_" + Number(localStorage.getItem('shirt_var' + localStorage.getItem('shirt_id' + _this2.cur_slot) + "_" + _this2.cur_slot)));
                          shirt.setPosition(localStorage.getItem('shirtxpos' + _this2.cur_slot), localStorage.getItem('shirtypos' + _this2.cur_slot));
                          shirt.setVisible(true);
                          var _shirt_flag2 = localStorage.getItem('shirt_flag' + _this2.cur_slot);
                          shirt.setDepth(9 - _shirt_flag2 * 5);
                        }

                        // skirt
                        if (localStorage.getItem('skirt_id' + _this2.cur_slot) > 0) {
                          skirt.setTexture("skirt_" + localStorage.getItem('skirt_id' + _this2.cur_slot) + "_" + Number(localStorage.getItem('skirt_var' + localStorage.getItem('skirt_id' + _this2.cur_slot) + "_" + _this2.cur_slot)));
                          skirt.setPosition(localStorage.getItem('skirtxpos' + _this2.cur_slot), localStorage.getItem('skirtypos' + _this2.cur_slot));
                          skirt.setVisible(true);
                          skirt.setDepth(5);
                        }

                        // Pants
                        if (localStorage.getItem('pants_id' + _this2.cur_slot) > 0) {
                          pants.setTexture("pants_" + localStorage.getItem('pants_id' + _this2.cur_slot) + "_" + Number(localStorage.getItem('pants_var' + localStorage.getItem('pants_id' + _this2.cur_slot) + "_" + _this2.cur_slot)));
                          pants.setPosition(localStorage.getItem('pantsxpos' + _this2.cur_slot), localStorage.getItem('pantsypos' + _this2.cur_slot));
                          pants.setVisible(true);
                          pants.setDepth(6);
                        }

                        // ACC 1
                        if (localStorage.getItem('acc1_id' + _this2.cur_slot) > 0) {
                          acc1.setTexture("strains_" + localStorage.getItem('acc1_id' + _this2.cur_slot));
                          acc1.setVisible(true);
                          acc1.setDepth(11);
                        }

                        // ACC 2
                        if (localStorage.getItem('acc2_id' + _this2.cur_slot) > 0) {
                          acc2.setTexture("acc2_" + localStorage.getItem('acc2_id' + _this2.cur_slot) + "_" + Number(localStorage.getItem('acc2_var' + localStorage.getItem('acc2_id' + _this2.cur_slot) + "_" + _this2.cur_slot)));
                          acc2.setVisible(true);
                          acc2.setDepth(10);
                        }

                        // ACC 3
                        if (localStorage.getItem('acc3_id' + _this2.cur_slot) > 0) {
                          acc3.setTexture("acc3_" + localStorage.getItem('acc3_id' + _this2.cur_slot));
                          acc3.setVisible(true);
                          acc3.setDepth(2);
                        }

                        // Eyes
                        if (localStorage.getItem('eye1_id' + _this2.cur_slot) > 0) {
                          eye1.setTexture("eye1_" + localStorage.getItem('eye1_id' + _this2.cur_slot));
                          eye1.setVisible(true);
                          eye1.setDepth(7);
                        }

                        // Eyebrow
                        if (localStorage.getItem('eyebrow_id' + _this2.cur_slot) > 0) {
                          eyebrow.setTexture("eyebrow_" + localStorage.getItem('eyebrow_id' + _this2.cur_slot));
                          eyebrow.setVisible(true);
                          eyebrow.setDepth(8);
                        }

                        // Backgrounds
                        if (localStorage.getItem('background_id' + _this2.cur_slot) > 0) {
                          background.setTexture("background_" + localStorage.getItem('background_id' + _this2.cur_slot));
                          background.setVisible(true);
                          background.setDepth(1);
                        }

                        // Nose
                        if (localStorage.getItem('nose_id' + _this2.cur_slot) > 0) {
                          nose.setTexture("nose_" + localStorage.getItem('nose_id' + _this2.cur_slot));
                          nose.setVisible(true);
                          nose.setDepth(5);
                        }

                        // Mouth
                        if (localStorage.getItem('mouth_id' + _this2.cur_slot) > 0) {
                          mouth.setTexture("mouth_" + localStorage.getItem('mouth_id' + _this2.cur_slot));
                          mouth.setVisible(true);
                          mouth.setDepth(5);
                        }

                        // Ear
                        if (localStorage.getItem('ear_id' + _this2.cur_slot) > 1) {
                          var num = Number(localStorage.getItem('skin_id' + _this2.cur_slot));
                          var curskin = Number(num + 1);
                          ear.setTexture("ear" + localStorage.getItem('ear_id' + _this2.cur_slot) + "_" + curskin);
                          ear.setVisible(true);
                          ear.setDepth(19);
                        }
                        _this2.timer2 = 5;
                        _this2.lore.emit('pointerdown');
                      } else if (_this2.flag_lock === 1) {
                        input_name.setVisible(false);
                        text_bio.setVisible(false);
                        text_note.setVisible(false);
                        save_lore.setVisible(false);
                        limit_bio.setVisible(false);
                        limit_note.setVisible(false);
                        return_lore.removeInteractive();
                        var width = _this2.sys.game.config.width;
                        var height = _this2.sys.game.config.height;
                        var menurectangle = _this2.add.rectangle(width / 2, height / 2, width, height, 0x000000);
                        menurectangle.setAlpha(0.2);
                        menurectangle.setDepth(lore_depth + 5);
                        var backdrop = _this2.add.rectangle(width / 2, height / 2, width / 1.2, height / 3, 0x000000);
                        backdrop.setDepth(lore_depth + 6);
                        var quitlore_btn = _this2.add.text(_this2.game.renderer.width * 0.1, _this2.game.renderer.height * 0.38, 'Change Without Save?', {
                          fontSize: '48px',
                          fill: '#FFFFFF'
                        });
                        quitlore_btn.setDepth(lore_depth + 7);

                        // Save and Quit
                        var return_save = _this2.add.image(_this2.game.renderer.width * 0.3, _this2.game.renderer.height * 0.5, 'save_img');
                        return_save.setDepth(lore_depth + 7);
                        return_save.setScale(1.8);
                        return_save.setInteractive();
                        return_save.on('pointerdown', function () {
                          // Guardar Titulos
                          localStorage.setItem('input' + _this2.cur_slot, input_name.node.value);
                          // Guardar Biografia
                          localStorage.setItem('bio_id' + _this2.cur_slot, text_bio.node.value);
                          // Guardar Nota
                          localStorage.setItem('note_id' + _this2.cur_slot, text_note.node.value);
                          menurectangle.destroy();
                          backdrop.destroy();
                          quitlore_btn.destroy();
                          return_save.destroy();
                          return_load.destroy();
                          _this2.flag_lock = 0;
                          previous_lore.emit('pointerdown');
                        });

                        // Quit
                        var return_load = _this2.add.image(_this2.game.renderer.width * 0.7, _this2.game.renderer.height * 0.5, 'dontsave');
                        return_load.setDepth(lore_depth + 7);
                        return_load.setScale(1.8);
                        return_load.setInteractive();
                        return_load.on('pointerdown', function () {
                          menurectangle.destroy();
                          backdrop.destroy();
                          quitlore_btn.destroy();
                          return_save.destroy();
                          return_load.destroy();
                          _this2.flag_lock = 0;
                          previous_lore.emit('pointerdown');
                        });
                      }
                    }
                  });
                  var return_lore = _this2.add.image(_this2.game.renderer.width * 0.07, _this2.game.renderer.height * 0.038, "return");
                  return_lore.setDepth(1 + lore_depth);
                  return_lore.setScale(0.7);
                  return_lore.setInteractive();
                  return_lore.on('pointerdown', function () {
                    // Salir (Sin cuadro de guardado)
                    if (_this2.flag_lock === 0) {
                      var return_xpos = _this2.game.renderer.width / 2;
                      var return_ypos = _this2.game.renderer.height * 0.42;
                      doll.setDepth(4);
                      doll.setPosition(return_xpos, return_ypos);
                      doll.setScale(1);
                      dress.setDepth(10);
                      dress.setPosition(return_xpos, return_ypos);
                      dress.setScale(1);
                      top.setDepth(4);
                      top.setPosition(return_xpos, return_ypos);
                      top.setScale(1);
                      hair.setDepth(12);
                      hair.setPosition(return_xpos, return_ypos);
                      hair.setScale(1);
                      backhair.setDepth(3);
                      backhair.setPosition(return_xpos, return_ypos);
                      backhair.setScale(1);
                      var _shirt_flag3 = localStorage.getItem('shirt_flag' + _this2.cur_slot);
                      shirt.setDepth(9 - _shirt_flag3 * 5);
                      shirt.setPosition(return_xpos, return_ypos);
                      shirt.setScale(1);
                      skirt.setDepth(5);
                      skirt.setPosition(return_xpos, return_ypos);
                      skirt.setScale(1);
                      pants.setDepth(6);
                      pants.setPosition(return_xpos, return_ypos);
                      pants.setScale(1);
                      acc1.setDepth(11);
                      acc1.setPosition(return_xpos, return_ypos);
                      acc1.setScale(1);
                      acc2.setDepth(10);
                      acc2.setPosition(return_xpos, return_ypos);
                      acc2.setScale(1);
                      acc3.setDepth(2);
                      acc3.setPosition(return_xpos, return_ypos);
                      acc3.setScale(1);
                      eye1.setDepth(7);
                      eye1.setPosition(return_xpos, return_ypos);
                      eye1.setScale(1);
                      eyebrow.setDepth(8);
                      eyebrow.setPosition(return_xpos, return_ypos);
                      eyebrow.setScale(1);
                      background.setDepth(1);
                      background.setPosition(return_xpos, return_ypos);
                      background.setScale(1.6);
                      nose.setDepth(5);
                      nose.setPosition(return_xpos, return_ypos);
                      nose.setScale(1);
                      mouth.setDepth(5);
                      mouth.setPosition(return_xpos, return_ypos);
                      mouth.setScale(1);
                      ear.setDepth(19);
                      ear.setPosition(return_xpos, return_ypos);
                      ear.setScale(1);
                      _this2.flag_lore = 0;
                      lore_backdrop.destroy();
                      return_lore.destroy();
                      _this2.menuback.setVisible(true);
                      _this2.playload.setVisible(true);
                      _this2.lore.setVisible(true);
                      more_btn.setVisible(true);
                      less_btn.setVisible(true);
                      _this2.layer20.setVisible(true);
                      input_name.destroy();
                      text_bio.destroy();
                      text_note.destroy();
                      save_lore.destroy();
                      limit_bio.destroy();
                      limit_note.destroy();
                      next_lore.destroy();
                      previous_lore.destroy();

                      // Nuevo texto en los nomres de los 3 inputs (Necesita crearse el evento luego de mover los nuevos elementos)

                      for (var _i4 = 0; _i4 < 3; _i4++) {
                        // Obten las id de los 3 inputs, formula:
                        var number = Number(_i4 + 1);
                        var aux = Number(number + 3 * _this2.flag4);
                        var maxslots = Number(localStorage.getItem('slot'));

                        // Cambia el texto de los inputs
                        if (aux <= maxslots) {
                          var inputs = document.getElementsByClassName('inputs');
                          inputs[_i4].value = localStorage.getItem('input' + aux);
                        }
                      }

                      // Salir (Con cuadro de guardado)
                    } else if (_this2.flag_lock === 1) {
                      input_name.setVisible(false);
                      text_bio.setVisible(false);
                      text_note.setVisible(false);
                      save_lore.setVisible(false);
                      limit_bio.setVisible(false);
                      limit_note.setVisible(false);
                      return_lore.removeInteractive();
                      var width = _this2.sys.game.config.width;
                      var height = _this2.sys.game.config.height;
                      var menurectangle = _this2.add.rectangle(width / 2, height / 2, width, height, 0x000000);
                      menurectangle.setAlpha(0.2);
                      menurectangle.setDepth(lore_depth + 5);
                      var backdrop = _this2.add.rectangle(width / 2, height / 2, width / 1.2, height / 3, 0x000000);
                      backdrop.setDepth(lore_depth + 6);
                      var quitlore_btn = _this2.add.text(_this2.game.renderer.width * 0.1, _this2.game.renderer.height * 0.38, 'Return Without Save?', {
                        fontSize: '48px',
                        fill: '#FFFFFF'
                      });
                      quitlore_btn.setDepth(lore_depth + 7);

                      // Save and Quit
                      var return_save = _this2.add.image(_this2.game.renderer.width * 0.3, _this2.game.renderer.height * 0.5, 'return_save');
                      return_save.setDepth(lore_depth + 7);
                      return_save.setScale(1.8);
                      return_save.setInteractive();
                      return_save.on('pointerdown', function () {
                        // Guardar Titulos
                        localStorage.setItem('input' + _this2.cur_slot, input_name.node.value);
                        // Guardar Biografia
                        localStorage.setItem('bio_id' + _this2.cur_slot, text_bio.node.value);
                        // Guardar Nota
                        localStorage.setItem('note_id' + _this2.cur_slot, text_note.node.value);
                        _this2.flag_lock = 0;
                        menurectangle.destroy();
                        backdrop.destroy();
                        quitlore_btn.destroy();
                        return_save.destroy();
                        return_load.destroy();
                        next_lore.destroy();
                        previous_lore.destroy();
                        return_lore.emit('pointerdown');
                      });

                      // Quit
                      var return_load = _this2.add.image(_this2.game.renderer.width * 0.7, _this2.game.renderer.height * 0.5, 'return_load');
                      return_load.setDepth(lore_depth + 7);
                      return_load.setScale(1.8);
                      return_load.setInteractive();
                      return_load.on('pointerdown', function () {
                        _this2.flag_lock = 0;
                        menurectangle.destroy();
                        backdrop.destroy();
                        quitlore_btn.destroy();
                        return_save.destroy();
                        return_load.destroy();
                        next_lore.destroy();
                        previous_lore.destroy();
                        return_lore.emit('pointerdown');
                      });
                    }
                  });
                }
              });

              // Existentes Graficos tumbnails
              if (_this2.slotnum > 0) {
                for (var _i5 = 0; _i5 < _this2.slotnum; _i5++) {
                  // Dresses for Tumbnail

                  // Doll
                  if (_this2.anims.exists('dollskin')) {} else {
                    var dollskins2 = _this2.anims.create({
                      key: "dollskin",
                      frameRate: 17,
                      frames: _this2.anims.generateFrameNames("dollskin", {
                        scale: 0.4,
                        prefix: "doll_skin",
                        start: 1,
                        end: 17
                      })
                    });
                  }
                  var number = Number(_i5 + 1);
                  // Local Storage
                  if (localStorage.getItem('input' + number) === null) {
                    localStorage.setItem('input' + number, ' ');
                  }
                  if (localStorage.getItem('bio_id' + number) === null) {
                    localStorage.setItem('bio_id' + number, ' ');
                  }
                  if (localStorage.getItem('note_id' + number) === null) {
                    localStorage.setItem('note_id' + number, ' ');
                  }

                  // Doll
                  // let doll2 = Phaser.GameObjects.Sprite = this.add.sprite(30 + (i * 220), this.game.renderer.height * 0.70,"dollskin",'doll_skin1');
                  var doll2 = Phaser.GameObjects.Sprite = _this2.add.sprite(_this2.game.renderer.width, _this2.game.renderer.height * 0.70, "dollskin", 'doll_skin1');
                  doll2.setDepth(20);
                  doll2.setVisible(true);
                  doll2.play("dollskin");
                  doll2.anims.pause();
                  doll2.anims.setCurrentFrame(doll2.anims.currentAnim.frames[1]);

                  // Dress
                  // this.dress_gph = this.add.image((30 + (i * 220)) + (localStorage.getItem('dressxmanh' + number) * 0.3), (this.game.renderer.height * 0.70) + (localStorage.getItem('dressymanh' + number) * 0.3),'dress_1');
                  _this2.dress_gph = _this2.add.image(_this2.game.renderer.width + localStorage.getItem('dressxmanh' + number) * 0.3, _this2.game.renderer.height * 0.70 + localStorage.getItem('dressymanh' + number) * 0.3, 'dress_1');
                  _this2.dress_gph.setOrigin(0);
                  _this2.dress_gph.setVisible(false);

                  // Tops
                  // let top_gph = this.add.image(30 + (i * 220), this.game.renderer.height * 0.70,'top_1');
                  var top_gph = _this2.add.image(_this2.game.renderer.width, _this2.game.renderer.height * 0.70, 'top_1');
                  top_gph.setOrigin(0);
                  top_gph.setVisible(false);

                  // Hair
                  // let hair_gph = this.add.image(30 + (i * 220), this.game.renderer.height * 0.70,'hair_1');
                  var hair_gph = _this2.add.image(_this2.game.renderer.width, _this2.game.renderer.height * 0.70, 'hair_1');
                  hair_gph.setOrigin(0);
                  hair_gph.setVisible(false);

                  // BackHair
                  // let backhair_gph = this.add.image(30 + (i * 220), this.game.renderer.height * 0.70,'backhair_1');
                  var backhair_gph = _this2.add.image(_this2.game.renderer.width, _this2.game.renderer.height * 0.70, 'backhair_1');
                  backhair_gph.setOrigin(0);
                  backhair_gph.setVisible(false);

                  // Shirt
                  // let shirt_gph = this.add.image((30 + (i * 220)) + (localStorage.getItem('shirtxmanh' + number) * 0.3), (this.game.renderer.height * 0.70) + (localStorage.getItem('shirtymanh' + number) * 0.3),'shirt_1');
                  var shirt_gph = _this2.add.image(_this2.game.renderer.width + localStorage.getItem('shirtxmanh' + number) * 0.3, _this2.game.renderer.height * 0.70 + localStorage.getItem('shirtymanh' + number) * 0.3, 'shirt_1_1');
                  shirt_gph.setOrigin(0);
                  shirt_gph.setVisible(false);

                  // Skirt
                  // let skirt_gph = this.add.image((30 + (i * 220)) + (localStorage.getItem('skirtxmanh' + number) * 0.3), (this.game.renderer.height * 0.70) + (localStorage.getItem('skirtymanh' + number) * 0.3),'skirt_1');
                  var skirt_gph = _this2.add.image(_this2.game.renderer.width + localStorage.getItem('skirtxmanh' + number) * 0.3, _this2.game.renderer.height * 0.70 + localStorage.getItem('skirtymanh' + number) * 0.3, 'skirt_1_1');
                  skirt_gph.setOrigin(0);
                  skirt_gph.setVisible(false);

                  // Pants
                  // let pants_gph = this.add.image((30 + (i * 220)) + (localStorage.getItem('pantsxmanh' + number) * 0.3), (this.game.renderer.height * 0.70) + (localStorage.getItem('pantsymanh' + number) * 0.3),'pants_1');
                  var pants_gph = _this2.add.image(_this2.game.renderer.width + localStorage.getItem('pantsxmanh' + number) * 0.3, _this2.game.renderer.height * 0.70 + localStorage.getItem('pantsymanh' + number) * 0.3, 'pants_1_1');
                  pants_gph.setOrigin(0);
                  pants_gph.setVisible(false);

                  // ACC 1
                  // let acc1_gph = this.add.image(30 + (i * 220), this.game.renderer.height * 0.70,'strains_1');
                  var acc1_gph = _this2.add.image(_this2.game.renderer.width, _this2.game.renderer.height * 0.70, 'strains_1');
                  acc1_gph.setOrigin(0);
                  acc1_gph.setVisible(false);

                  // ACC 2
                  // let acc2_gph = this.add.image(30 + (i * 220), this.game.renderer.height * 0.70,'acc2_1');
                  var acc2_gph = _this2.add.image(_this2.game.renderer.width, _this2.game.renderer.height * 0.70, 'acc2_1_1');
                  acc2_gph.setOrigin(0);
                  acc2_gph.setVisible(false);

                  // ACC 3
                  // let acc3_gph = this.add.image(30 + (i * 220), this.game.renderer.height * 0.70,'acc3_1');
                  var acc3_gph = _this2.add.image(_this2.game.renderer.width, _this2.game.renderer.height * 0.70, 'acc3_1');
                  acc3_gph.setOrigin(0);
                  acc3_gph.setVisible(false);

                  // Eyes
                  // let eye1_gph = this.add.image(30 + (i * 220), this.game.renderer.height * 0.70,'eye1_1');
                  var eye1_gph = _this2.add.image(_this2.game.renderer.width, _this2.game.renderer.height * 0.70, 'eye1_1');
                  eye1_gph.setOrigin(0);
                  eye1_gph.setVisible(false);

                  // Eyebrow
                  // let eyebrow_gph = this.add.image(30 + (i * 220), this.game.renderer.height * 0.70,'eyebrow_1');
                  var eyebrow_gph = _this2.add.image(_this2.game.renderer.width, _this2.game.renderer.height * 0.70, 'eyebrow_1');
                  eyebrow_gph.setOrigin(0);
                  eyebrow_gph.setVisible(false);

                  // Background
                  // let background_gph = this.add.image(30 + (i * 220), this.game.renderer.height * 0.70,'background_1');
                  var background_gph = _this2.add.image(_this2.game.renderer.width, _this2.game.renderer.height * 0.70, 'background_0');
                  background_gph.setOrigin(0);
                  background_gph.setVisible(false);

                  // Noses
                  // let nose_gph = this.add.image(30 + (i * 220), this.game.renderer.height * 0.70,'nose_1');
                  var nose_gph = _this2.add.image(_this2.game.renderer.width, _this2.game.renderer.height * 0.70, 'nose_1');
                  nose_gph.setOrigin(0);
                  nose_gph.setVisible(false);

                  // Mouths
                  // let mouth_gph = this.add.image(30 + (i * 220), this.game.renderer.height * 0.70,'mouth_1');
                  var mouth_gph = _this2.add.image(_this2.game.renderer.width, _this2.game.renderer.height * 0.70, 'mouth_1');
                  mouth_gph.setOrigin(0);
                  mouth_gph.setVisible(false);

                  // ear 1
                  // let ear_gph = this.add.image(30 + (i * 220), this.game.renderer.height * 0.70,'ear_1');
                  var ear_gph = _this2.add.image(_this2.game.renderer.width, _this2.game.renderer.height * 0.70, 'ear_1');
                  ear_gph.setOrigin(0);
                  ear_gph.setVisible(false);
                  var num = _i5 + 1;
                  doll2.anims.setCurrentFrame(doll2.anims.currentAnim.frames[localStorage.getItem('skin_id' + num)]);
                  doll2.setOrigin(0);
                  doll2.setScale(0.33);
                  _this2.layer4.add(doll2);
                  _this2.tween_doll2 = _this2.tweens.add({
                    targets: doll2,
                    ease: 'Sine.easeInOut',
                    x: 30 + _i5 * 220,
                    duration: 300,
                    paused: true,
                    alpha: {
                      getStart: function getStart() {
                        return 0;
                      },
                      getEnd: function getEnd() {
                        return 1;
                      }
                    },
                    onComplete: function onComplete() {}
                  });
                  _this2.tween_dress = _this2.tweens.add({
                    targets: _this2.dress_gph,
                    ease: 'Sine.easeInOut',
                    x: 30 + _i5 * 220 + localStorage.getItem('dressxmanh' + number) * 0.3,
                    duration: 300,
                    paused: true,
                    alpha: {
                      getStart: function getStart() {
                        return 0;
                      },
                      getEnd: function getEnd() {
                        return 1;
                      }
                    },
                    onComplete: function onComplete() {}
                  });
                  _this2.tween_tops = _this2.tweens.add({
                    targets: top_gph,
                    ease: 'Sine.easeInOut',
                    x: 30 + _i5 * 220,
                    duration: 300,
                    paused: true,
                    alpha: {
                      getStart: function getStart() {
                        return 0;
                      },
                      getEnd: function getEnd() {
                        return 1;
                      }
                    },
                    onComplete: function onComplete() {}
                  });
                  _this2.tween_hairs = _this2.tweens.add({
                    targets: hair_gph,
                    ease: 'Sine.easeInOut',
                    x: 30 + _i5 * 220,
                    duration: 300,
                    paused: true,
                    alpha: {
                      getStart: function getStart() {
                        return 0;
                      },
                      getEnd: function getEnd() {
                        return 1;
                      }
                    },
                    onComplete: function onComplete() {}
                  });
                  _this2.tween_backhairs = _this2.tweens.add({
                    targets: backhair_gph,
                    ease: 'Sine.easeInOut',
                    x: 30 + _i5 * 220,
                    duration: 300,
                    paused: true,
                    alpha: {
                      getStart: function getStart() {
                        return 0;
                      },
                      getEnd: function getEnd() {
                        return 1;
                      }
                    },
                    onComplete: function onComplete() {}
                  });
                  _this2.tween_shirts = _this2.tweens.add({
                    targets: shirt_gph,
                    ease: 'Sine.easeInOut',
                    x: 30 + _i5 * 220 + localStorage.getItem('shirtxmanh' + number) * 0.3,
                    duration: 300,
                    paused: true,
                    alpha: {
                      getStart: function getStart() {
                        return 0;
                      },
                      getEnd: function getEnd() {
                        return 1;
                      }
                    },
                    onComplete: function onComplete() {}
                  });
                  _this2.tween_skirts = _this2.tweens.add({
                    targets: skirt_gph,
                    ease: 'Sine.easeInOut',
                    x: 30 + _i5 * 220 + localStorage.getItem('skirtxmanh' + number) * 0.3,
                    duration: 300,
                    paused: true,
                    alpha: {
                      getStart: function getStart() {
                        return 0;
                      },
                      getEnd: function getEnd() {
                        return 1;
                      }
                    },
                    onComplete: function onComplete() {}
                  });
                  _this2.tween_pants = _this2.tweens.add({
                    targets: pants_gph,
                    ease: 'Sine.easeInOut',
                    x: 30 + _i5 * 220 + localStorage.getItem('pantsxmanh' + number) * 0.3,
                    duration: 300,
                    paused: true,
                    alpha: {
                      getStart: function getStart() {
                        return 0;
                      },
                      getEnd: function getEnd() {
                        return 1;
                      }
                    },
                    onComplete: function onComplete() {}
                  });
                  _this2.tween_acc1 = _this2.tweens.add({
                    targets: acc1_gph,
                    ease: 'Sine.easeInOut',
                    x: 30 + _i5 * 220,
                    duration: 300,
                    paused: true,
                    alpha: {
                      getStart: function getStart() {
                        return 0;
                      },
                      getEnd: function getEnd() {
                        return 1;
                      }
                    },
                    onComplete: function onComplete() {}
                  });
                  _this2.tween_acc2 = _this2.tweens.add({
                    targets: acc2_gph,
                    ease: 'Sine.easeInOut',
                    x: 30 + _i5 * 220,
                    duration: 300,
                    paused: true,
                    alpha: {
                      getStart: function getStart() {
                        return 0;
                      },
                      getEnd: function getEnd() {
                        return 1;
                      }
                    },
                    onComplete: function onComplete() {}
                  });
                  _this2.tween_acc3 = _this2.tweens.add({
                    targets: acc3_gph,
                    ease: 'Sine.easeInOut',
                    x: 30 + _i5 * 220,
                    duration: 300,
                    paused: true,
                    alpha: {
                      getStart: function getStart() {
                        return 0;
                      },
                      getEnd: function getEnd() {
                        return 1;
                      }
                    },
                    onComplete: function onComplete() {}
                  });
                  _this2.tween_eyes = _this2.tweens.add({
                    targets: eye1_gph,
                    ease: 'Sine.easeInOut',
                    x: 30 + _i5 * 220,
                    duration: 300,
                    paused: true,
                    alpha: {
                      getStart: function getStart() {
                        return 0;
                      },
                      getEnd: function getEnd() {
                        return 1;
                      }
                    },
                    onComplete: function onComplete() {}
                  });
                  _this2.tween_eyebrows = _this2.tweens.add({
                    targets: eyebrow_gph,
                    ease: 'Sine.easeInOut',
                    x: 30 + _i5 * 220,
                    duration: 300,
                    paused: true,
                    alpha: {
                      getStart: function getStart() {
                        return 0;
                      },
                      getEnd: function getEnd() {
                        return 1;
                      }
                    },
                    onComplete: function onComplete() {}
                  });
                  _this2.tween_background = _this2.tweens.add({
                    targets: background_gph,
                    ease: 'Sine.easeInOut',
                    x: 30 + _i5 * 220,
                    duration: 300,
                    paused: true,
                    alpha: {
                      getStart: function getStart() {
                        return 0;
                      },
                      getEnd: function getEnd() {
                        return 1;
                      }
                    },
                    onComplete: function onComplete() {}
                  });
                  _this2.tween_noses = _this2.tweens.add({
                    targets: nose_gph,
                    ease: 'Sine.easeInOut',
                    x: 30 + _i5 * 220,
                    duration: 300,
                    paused: true,
                    alpha: {
                      getStart: function getStart() {
                        return 0;
                      },
                      getEnd: function getEnd() {
                        return 1;
                      }
                    },
                    onComplete: function onComplete() {}
                  });
                  _this2.tween_mouths = _this2.tweens.add({
                    targets: mouth_gph,
                    ease: 'Sine.easeInOut',
                    x: 30 + _i5 * 220,
                    duration: 300,
                    paused: true,
                    alpha: {
                      getStart: function getStart() {
                        return 0;
                      },
                      getEnd: function getEnd() {
                        return 1;
                      }
                    },
                    onComplete: function onComplete() {}
                  });
                  _this2.tween_ears = _this2.tweens.add({
                    targets: ear_gph,
                    ease: 'Sine.easeInOut',
                    x: 30 + _i5 * 220,
                    duration: 300,
                    paused: true,
                    alpha: {
                      getStart: function getStart() {
                        return 0;
                      },
                      getEnd: function getEnd() {
                        return 1;
                      }
                    },
                    onComplete: function onComplete() {}
                  });
                  _this2.tween_doll2.play();
                  _this2.tween_dress.play();
                  _this2.tween_tops.play();
                  _this2.tween_eyes.play();
                  _this2.tween_hairs.play();
                  _this2.tween_backhairs.play();
                  _this2.tween_shirts.play();
                  _this2.tween_skirts.play();
                  _this2.tween_pants.play();
                  _this2.tween_acc1.play();
                  _this2.tween_acc2.play();
                  _this2.tween_acc3.play();
                  _this2.tween_background.play();
                  _this2.tween_eyebrows.play();
                  _this2.tween_noses.play();
                  _this2.tween_mouths.play();
                  _this2.tween_ears.play();
                  if (localStorage.getItem('dress_id' + num) > 0) {
                    _this2.dress_gph.setTexture("dress_" + localStorage.getItem('dress_id' + num));
                    _this2.dress_gph.setVisible(true);
                    _this2.dress_gph.setDepth(20);
                    _this2.dress_gph.setScale(0.33);
                    _this2.layer10.add(_this2.dress_gph);
                  }
                  if (localStorage.getItem('top_id' + num) > 0) {
                    top_gph.setTexture("top_" + localStorage.getItem('top_id' + num));
                    top_gph.setVisible(true);
                    top_gph.setDepth(20);
                    top_gph.setScale(0.33);
                    _this2.layer4.add(top_gph);
                  }
                  if (localStorage.getItem('hair_id' + num) > 0) {
                    hair_gph.setTexture("hair_" + localStorage.getItem('hair_id' + num));
                    hair_gph.setVisible(true);
                    hair_gph.setDepth(20);
                    hair_gph.setScale(0.33);
                    _this2.layer12.add(hair_gph);
                  }
                  if (localStorage.getItem('backhair_id' + num) > 0) {
                    backhair_gph.setTexture("backhair_" + localStorage.getItem('backhair_id' + num));
                    backhair_gph.setVisible(true);
                    backhair_gph.setDepth(20);
                    backhair_gph.setScale(0.33);
                    _this2.layer3.add(backhair_gph);
                  }
                  if (localStorage.getItem('shirt_id' + num) > 0) {
                    // shirt_gph.setTexture("shirt_" + localStorage.getItem('shirt_id' + num));
                    shirt_gph.setTexture("shirt_" + localStorage.getItem('shirt_id' + num) + "_" + Number(localStorage.getItem('shirt_var' + localStorage.getItem('shirt_id' + num) + "_" + num)));
                    shirt_gph.setVisible(true);
                    shirt_gph.setDepth(20);
                    shirt_gph.setScale(0.33);
                    if (localStorage.getItem('shirt_flag' + num) == 1) {
                      _this2.layer4.add(shirt_gph);
                    } else {
                      _this2.layer9.add(shirt_gph);
                    }
                  }
                  if (localStorage.getItem('skirt_id' + num) > 0) {
                    skirt_gph.setTexture("skirt_" + localStorage.getItem('skirt_id' + num) + "_" + Number(localStorage.getItem('skirt_var' + localStorage.getItem('skirt_id' + num) + "_" + num)));
                    skirt_gph.setVisible(true);
                    skirt_gph.setDepth(20);
                    skirt_gph.setScale(0.33);
                    _this2.layer5.add(skirt_gph);
                  }
                  if (localStorage.getItem('pants_id' + num) > 0) {
                    pants_gph.setTexture("pants_" + localStorage.getItem('pants_id' + num) + "_" + Number(localStorage.getItem('pants_var' + localStorage.getItem('pants_id' + num) + "_" + num)));
                    pants_gph.setVisible(true);
                    pants_gph.setDepth(20);
                    pants_gph.setScale(0.33);
                    _this2.layer6.add(pants_gph);
                  }
                  if (localStorage.getItem('acc1_id' + num) > 0) {
                    acc1_gph.setTexture("strains_" + localStorage.getItem('acc1_id' + num));
                    acc1_gph.setVisible(true);
                    acc1_gph.setDepth(20);
                    acc1_gph.setScale(0.33);
                    _this2.layer11.add(acc1_gph);
                  }
                  if (localStorage.getItem('acc2_id' + num) > 0) {
                    acc2_gph.setTexture("acc2_" + localStorage.getItem('acc2_id' + num) + "_" + Number(localStorage.getItem('acc2_var' + localStorage.getItem('acc2_id' + num) + "_" + num)));
                    acc2_gph.setVisible(true);
                    acc2_gph.setDepth(20);
                    acc2_gph.setScale(0.33);
                    _this2.layer10.add(acc2_gph);
                  }
                  if (localStorage.getItem('acc3_id' + num) > 0) {
                    acc3_gph.setTexture("acc3_" + localStorage.getItem('acc3_id' + num));
                    acc3_gph.setVisible(true);
                    acc3_gph.setDepth(20);
                    acc3_gph.setScale(0.33);
                    _this2.layer2.add(acc3_gph);
                  }
                  if (localStorage.getItem('eye1_id' + num) > 0) {
                    eye1_gph.setTexture("eye1_" + localStorage.getItem('eye1_id' + num));
                    eye1_gph.setVisible(true);
                    eye1_gph.setDepth(20);
                    eye1_gph.setScale(0.33);
                    _this2.layer7.add(eye1_gph);
                  }
                  if (localStorage.getItem('eyebrow_id' + num) > 0) {
                    eyebrow_gph.setTexture("eyebrow_" + localStorage.getItem('eyebrow_id' + num));
                    eyebrow_gph.setVisible(true);
                    eyebrow_gph.setDepth(20);
                    eyebrow_gph.setScale(0.33);
                    _this2.layer8.add(eyebrow_gph);
                  }
                  if (localStorage.getItem('background_id' + num) > 0) {
                    background_gph.setTexture("background_" + localStorage.getItem('background_id' + num));
                    background_gph.setVisible(true);
                    background_gph.setDepth(20);
                    background_gph.setScale(0.292, 0.39);
                    _this2.layer1.add(background_gph);
                  }
                  if (localStorage.getItem('nose_id' + num) > 0) {
                    nose_gph.setTexture("nose_" + localStorage.getItem('nose_id' + num));
                    nose_gph.setVisible(true);
                    nose_gph.setDepth(20);
                    nose_gph.setScale(0.33);
                    _this2.layer5.add(nose_gph);
                  }
                  if (localStorage.getItem('mouth_id' + num) > 0) {
                    mouth_gph.setTexture("mouth_" + localStorage.getItem('mouth_id' + num));
                    mouth_gph.setVisible(true);
                    mouth_gph.setDepth(20);
                    mouth_gph.setScale(0.33);
                    _this2.layer5.add(mouth_gph);
                  }
                  if (localStorage.getItem('ear_id' + num) > 1) {
                    var str = Number(localStorage.getItem('skin_id' + num));
                    var curskin = Number(str + 1);
                    ear_gph.setTexture("ear" + localStorage.getItem('ear_id' + num) + "_" + curskin);
                    ear_gph.setVisible(true);
                    ear_gph.setDepth(20);
                    ear_gph.setScale(0.33);
                    _this2.layer4.add(ear_gph);
                  }
                }
              }
              // Nuevo. La posicion se ubica luego de los existentes
              // this.addnew = this.add.image(20 + (this.slotnum * 220), this.game.renderer.height * 0.65, "add_new").setOrigin(0);
              _this2.addnew = _this2.add.image(_this2.game.renderer.width, _this2.game.renderer.height * 0.65, "add_new").setOrigin(0);
              _this2.addnew.setDepth(17);
              _this2.tween4 = _this2.tweens.add({
                targets: _this2.addnew,
                ease: 'Sine.easeInOut',
                x: 20 + _this2.slotnum * 220,
                duration: 300,
                paused: true,
                alpha: {
                  getStart: function getStart() {
                    return 0;
                  },
                  getEnd: function getEnd() {
                    return 1;
                  }
                },
                onComplete: function onComplete() {
                  _this2.addnew.setInteractive();
                }
              });
              _this2.tween4.play();
              if (localStorage.getItem('slot') < 999) {
                _this2.addnew.on('pointerdown', function () {
                  if (_this2.flag_lore === 0) {
                    var inputs = document.getElementsByClassName('inputs');
                    // Remove the elements

                    while (inputs.length > 0) {
                      inputs[0].parentNode.removeChild(inputs[0]);
                    }
                    _this2.slotnum++;
                    _this2.scene.start(_CST.CST.SCENES.GAMES, {
                      music: _this2.music,
                      slot_no: _this2.slotnum,
                      slot_cur: _this2.slotnum,
                      load_true: 0
                    });
                  }
                });
              }
              if (localStorage.getItem('slot') == 999) {
                _this2.addnew.on('pointerdown', function () {
                  var info_txt = _this2.add.text(_this2.game.renderer.width / 2, _this2.game.renderer.height * 0.35, 'Slots Máximos (999/999)!', {
                    fontSize: '38px',
                    fill: '#FF0000'
                  });
                  info_txt.setDepth(50);
                  info_txt.setOrigin(0.5);
                  _this2.tweens.add({
                    targets: info_txt,
                    alpha: 0,
                    y: '-=50',
                    duration: 1000,
                    onComplete: function onComplete() {
                      info_txt.destroy();
                    }
                  });
                });
              }
              more_btn.on('pointerdown', function () {
                if (_this2.flag3 > 0) {
                  _this2.addnew.x = _this2.addnew.x - 660;
                  _this2.frameload.x = _this2.frameload.x - 660;

                  // Layer Movement
                  _this2.layer1.x = _this2.layer1.x - 660;
                  _this2.layer2.x = _this2.layer2.x - 660;
                  _this2.layer3.x = _this2.layer3.x - 660;
                  _this2.layer4.x = _this2.layer4.x - 660;
                  _this2.layer5.x = _this2.layer5.x - 660;
                  _this2.layer6.x = _this2.layer6.x - 660;
                  _this2.layer7.x = _this2.layer7.x - 660;
                  _this2.layer8.x = _this2.layer8.x - 660;
                  _this2.layer9.x = _this2.layer9.x - 660;
                  _this2.layer10.x = _this2.layer10.x - 660;
                  _this2.layer11.x = _this2.layer11.x - 660;
                  _this2.layer12.x = _this2.layer12.x - 660;
                  _this2.layer17.x = _this2.layer17.x - 660;
                  _this2.layer18.x = _this2.layer18.x - 660;
                  _this2.layer19.x = _this2.layer19.x - 660;
                  _this2.flag3 = Math.max(_this2.flag3 - 1, 0);
                  _this2.flag4++;
                }
              });
              less_btn.on('pointerdown', function () {
                if (_this2.flag4 > 0) {
                  _this2.addnew.x = _this2.addnew.x + 660;
                  _this2.frameload.x = _this2.frameload.x + 660;

                  // Layer Movement
                  _this2.layer1.x = _this2.layer1.x + 660;
                  _this2.layer2.x = _this2.layer2.x + 660;
                  _this2.layer3.x = _this2.layer3.x + 660;
                  _this2.layer4.x = _this2.layer4.x + 660;
                  _this2.layer5.x = _this2.layer5.x + 660;
                  _this2.layer6.x = _this2.layer6.x + 660;
                  _this2.layer7.x = _this2.layer7.x + 660;
                  _this2.layer8.x = _this2.layer8.x + 660;
                  _this2.layer9.x = _this2.layer9.x + 660;
                  _this2.layer10.x = _this2.layer10.x + 660;
                  _this2.layer11.x = _this2.layer11.x + 660;
                  _this2.layer12.x = _this2.layer12.x + 660;
                  _this2.layer17.x = _this2.layer17.x + 660;
                  _this2.layer18.x = _this2.layer18.x + 660;
                  _this2.layer19.x = _this2.layer19.x + 660;
                  _this2.flag3++;
                  _this2.flag4--;
                }
              });
            }
          });
          this.tween7.play();
          this.flag_load = 1;
        }
      }, this);
      if (this.enter_load === 1) {
        this.loadButton.emit('pointerdown');
        this.tween7.complete();
        this.tween8.complete();
        this.tween9.complete();
        this.tween10.complete();
        this.tween11.complete();
        this.loadButton.setVisible(false);
        this.enter_load = 0;
      }
    }
  }, {
    key: "update",
    value: function update() {
      if (this.tween2.isDestroyed() && this.flag0 === 0) {
        this.tween.play();
        this.flag0 = 1;
      } else if (this.tween.isDestroyed()) {
        this.slotnum++;
        this.scene.start(_CST.CST.SCENES.GAMES, {
          music: this.music,
          slot_no: this.slotnum,
          slot_cur: this.slotnum,
          load_true: 0
        });
      }
      if (this.timer1 > 0) {
        this.timer1--;
      }
      if (this.timer2 > 0) {
        this.timer2--;
      }
    }
  }]);
}(Phaser.Scene);
},{"../CST":"src/CST.js"}],"src/scenes/game_scene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.game_scene = void 0;
var _CST = require("../CST");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var game_scene = exports.game_scene = /*#__PURE__*/function (_Phaser$Scene) {
  function game_scene() {
    _classCallCheck(this, game_scene);
    return _callSuper(this, game_scene, [{
      key: _CST.CST.SCENES.GAMES
    }]);
  }
  _inherits(game_scene, _Phaser$Scene);
  return _createClass(game_scene, [{
    key: "init",
    value: function init(data) {
      this.slot_no = data.slot_no;
      this.slot_cur = data.slot_cur;
      this.load_true = data.load_true;
    }
  }, {
    key: "preload",
    value: function preload() {
      this.data.set('val1', 0);
      this.data.set('val2', 0);
      this.data.set('val3', 0);
      this.data.set('val4', 0);
      this.data.set('val5', 0);
      this.data.set('val6', 0);
      this.data.set('val7', 0);
      this.data.set('val8', 0);
      this.data.set('val9', 0);
      this.data.set('val10', 0);
      // Ojo Casilla
      this.data.set('val11', 0);
      // Ojo 1
      this.data.set('val11_1', 0);
      // Ojo 2
      this.data.set('val11_2', 0);
      this.data.set('val12', 0);
      this.data.set('val13', 0);
      // Skin Colors
      this.data.set('val14', 0);

      // Layers Extras
      this.data.set('val15', 0);
      this.data.set('val16', 0);

      // Ear Slot
      this.data.set('val17', 0);
      this.data.set('dress1', 0);
      this.data.set('dress2', 0);
      this.data.set('dress3', 0);
      this.data.set('top1', 0);
      this.data.set('top2', 0);
      this.data.set('top3', 0);
      this.data.set('top4', 0);
      this.data.set('top5', 0);
      this.data.set('top6', 0);
      this.data.set('top7', 0);
      this.data.set('top8', 0);
      this.data.set('top9', 0);
      this.data.set('top10', 0);
      this.data.set('top11', 0);
      this.data.set('top12', 0);
      this.data.set('top13', 0);
      this.data.set('top14', 0);
      this.data.set('top15', 0);
      this.data.set('top16', 0);
      this.data.set('top17', 0);
      this.data.set('top18', 0);
      this.data.set('top19', 0);
      this.data.set('top20', 0);
      this.data.set('top21', 0);
      this.data.set('top22', 0);
      this.data.set('top23', 0);
      this.data.set('top24', 0);
      this.data.set('top25', 0);
      this.data.set('top26', 0);
      this.data.set('top27', 0);
      this.data.set('hair1', 0);
      this.data.set('hair2', 0);
      this.data.set('hair3', 0);
      this.data.set('hair4', 0);
      this.data.set('hair5', 0);
      this.data.set('hair6', 0);
      this.data.set('hair7', 0);
      this.data.set('hair8', 0);
      this.data.set('hair9', 0);
      this.data.set('hair10', 0);
      this.data.set('backhair1', 0);
      this.data.set('backhair2', 0);
      this.data.set('backhair3', 0);
      this.data.set('backhair4', 0);
      this.data.set('backhair5', 0);
      this.data.set('backhair6', 0);
      this.data.set('backhair7', 0);
      this.data.set('shirt1', 0);
      this.data.set('shirt2', 0);
      this.data.set('shirt3', 0);
      this.data.set('shirt4', 0);

      // Variaciones de Color para la Camisa
      this.data.set('shirt_var1', 0);
      this.data.set('shirt_var2', 0);
      this.data.set('shirt_var3', 0);
      this.data.set('shirt_var4', 0);
      this.data.set('pants1', 0);
      this.data.set('pants2', 0);
      this.data.set('pants3', 0);
      this.data.set('pants4', 0);

      // Variaciones de Color para los Pantalones
      this.data.set('pants_var1', 0);
      this.data.set('pants_var2', 0);
      this.data.set('pants_var3', 0);
      this.data.set('pants_var4', 0);
      this.data.set('skirt1', 0);
      this.data.set('skirt2', 0);
      this.data.set('skirt3', 0);

      // Variaciones de Color para las Skirts
      this.data.set('skirt_var1', 0);
      this.data.set('skirt_var2', 0);
      this.data.set('skirt_var3', 0);
      this.data.set('acc1_1', 0);
      this.data.set('acc2_1', 0);
      this.data.set('acc2_2', 0);
      this.data.set('acc2_3', 0);

      // Variaciones de Color para los ACC2
      this.data.set('acc2_var1', 0);
      this.data.set('acc2_var2', 0);
      this.data.set('acc2_var3', 0);
      this.data.set('acc3_1', 0);
      this.data.set('acc3_2', 0);
      this.data.set('acc3_3', 0);
      this.data.set('eye1_1', 0);
      this.data.set('eye1_2', 0);
      this.data.set('eye1_3', 0);
      this.data.set('eye1_4', 0);
      this.data.set('eye1_5', 0);
      this.data.set('eye1_6', 0);
      this.data.set('eyebrow_1', 0);
      this.data.set('eyebrow_2', 0);
      this.data.set('eyebrow_3', 0);
      this.data.set('eyebrow_4', 0);
      this.data.set('eyebrow_5', 0);
      this.data.set('eyebrow_6', 0);
      this.data.set('eyebrow_7', 0);
      this.data.set('eyebrow_8', 0);
      this.data.set('eyebrow_9', 0);
      this.data.set('eyebrow_10', 0);
      this.data.set('eyebrow_11', 0);
      this.data.set('nose_1', 0);
      this.data.set('nose_2', 0);
      this.data.set('nose_3', 0);
      this.data.set('nose_4', 0);
      this.data.set('nose_5', 0);
      this.data.set('nose_6', 0);
      this.data.set('nose_7', 0);
      this.data.set('nose_8', 0);
      this.data.set('nose_9', 0);
      this.data.set('nose_10', 0);
      this.data.set('nose_11', 0);
      this.data.set('mouth_1', 0);
      this.data.set('mouth_2', 0);
      this.data.set('mouth_3', 0);
      this.data.set('mouth_4', 0);
      this.data.set('mouth_5', 0);
      this.data.set('mouth_6', 0);
      this.data.set('mouth_7', 0);
      this.data.set('mouth_8', 0);
      this.data.set('mouth_9', 0);
      this.data.set('mouth_10', 0);
      this.data.set('mouth_11', 0);
      this.data.set('ear_1', 0);
      this.data.set('ear_2', 0);
      this.data.set('background_1', 0);
      this.data.set('background_2', 0);
      this.data.set('background_3', 0);

      // Shirt Depht Flag
      this.data.set('shirt_flag' + this.slot_cur, localStorage.getItem('shirt_flag' + this.slot_cur));
    }
  }, {
    key: "create",
    value: function create(data) {
      var _this = this;
      this.music = data.music;

      // Flags
      // Flag 1 => Cuantas movidas hacia la derecha puede hacerse al scroll de seleccion de ropas
      var flag1 = 6;
      // Flag 2 => Abrir / Cerrar los tonos de piel
      var flag2 = 0;
      var flag4 = 0;
      var last_shirt1 = Number(Math.max(localStorage.getItem('shirt_var1_' + this.slot_cur), 0) - 1);
      var last_shirt2 = Number(Math.max(localStorage.getItem('shirt_var2_' + this.slot_cur), 0) - 1);
      var last_shirt3 = Number(Math.max(localStorage.getItem('shirt_var3_' + this.slot_cur), 0) - 1);
      var last_shirt4 = Number(Math.max(localStorage.getItem('shirt_var4_' + this.slot_cur), 0) - 1);
      var last_pants1 = Number(Math.max(localStorage.getItem('pants_var1_' + this.slot_cur), 0) - 1);
      var last_pants2 = Number(Math.max(localStorage.getItem('pants_var2_' + this.slot_cur), 0) - 1);
      var last_pants3 = Number(Math.max(localStorage.getItem('pants_var3_' + this.slot_cur), 0) - 1);
      var last_pants4 = Number(Math.max(localStorage.getItem('pants_var4_' + this.slot_cur), 0) - 1);
      var last_skirt1 = Number(Math.max(localStorage.getItem('pants_var1_' + this.slot_cur), 0) - 1);
      var last_skirt2 = Number(Math.max(localStorage.getItem('pants_var2_' + this.slot_cur), 0) - 1);
      var last_skirt3 = Number(Math.max(localStorage.getItem('pants_var3_' + this.slot_cur), 0) - 1);
      var last_acc2_1 = Number(Math.max(localStorage.getItem('acc2_var1_' + this.slot_cur), 0) - 1);
      var last_acc2_2 = Number(Math.max(localStorage.getItem('acc2_var2_' + this.slot_cur), 0) - 1);
      var last_acc2_3 = Number(Math.max(localStorage.getItem('acc2_var3_' + this.slot_cur), 0) - 1);
      var layer16_qty = 0;
      var layer16_limit = 0;
      var layer16_y_cap = 0;

      // Camera
      var cameraWidth = this.cameras.main.width;
      var cameraHeight = this.cameras.main.height;

      // Background
      var bg = this.add.image(-1400, -1400, "bg_menu").setOrigin(0);
      bg.setScale(Math.max(cameraWidth / bg.width, cameraHeight / bg.height));

      // Main Doll Sprite
      // let doll = this.add.image(0, 0, "main_doll").setDepth(2)
      if (this.anims.exists('dollskin')) {} else {
        var dollskins = this.anims.create({
          key: "dollskin",
          frameRate: 17,
          frames: this.anims.generateFrameNames("dollskin", {
            scale: 1,
            prefix: "doll_skin",
            start: 1,
            end: 17
          })
        });
      }
      var doll = Phaser.GameObjects.Sprite = this.add.sprite(0, 0, "dollskin", 'doll_skin1');
      doll.setDepth(2);
      doll.play("dollskin");
      doll.anims.pause();
      // doll.setScale(0.9);
      doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[0]);

      // CLICK FX

      if (this.anims.exists('efx2')) {} else {
        var particle2 = this.anims.create({
          key: "efx2",
          frameRate: 22,
          frames: this.anims.generateFrameNames("efx2", {
            scale: 3.5,
            prefix: "click_fx",
            start: 1,
            end: 5
          })
        });
      }
      this.input.on('pointerdown', function (pointer) {
        var clickfx = Phaser.GameObjects.Sprite = _this.add.sprite(pointer.x, pointer.y, "efx2", 'click_fx1');
        clickfx.play("efx2");
        clickfx.setScale(3.5);
        clickfx.setDepth(99);
        clickfx.setAlpha(0.5);
        clickfx.on('animationcomplete', function () {
          clickfx.destroy();
        });
      });
      if (this.anims.exists('transfx1')) {} else {
        var trans1 = this.anims.create({
          key: "transfx1",
          frameRate: 32,
          frames: this.anims.generateFrameNames("transfx1", {
            scale: 2,
            prefix: "trans1_f",
            start: 1,
            end: 6,
            repeat: -1
          })
        });
      }
      var trans_efx1 = Phaser.GameObjects.Sprite = this.add.sprite(this.game.renderer.width / 2, this.game.renderer.height / 2, "transfx1", 'trans1_f1');
      trans_efx1.playReverse("transfx1");
      trans_efx1.setScale(2);
      trans_efx1.setDepth(99);
      trans_efx1.on('animationcomplete', function () {
        trans_efx1.destroy();
      });

      // SFX
      var tap1 = this.sound.add('tap1');
      var tap2 = this.sound.add('tap2');
      var tap3 = this.sound.add('tap3');
      var tap3_2 = this.sound.add('tap3_2');
      var tap4 = this.sound.add('tap4');
      var metal = this.sound.add('metal');
      var takepic = this.sound.add('takepic');
      var soundsfx = [tap1, tap2, tap3, tap3_2, tap4, metal, takepic];
      soundsfx.forEach(function (sound) {
        sound.volume = localStorage.getItem('sfx_volume');
      });
      var backdrop = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.84, "backdrop_1");
      backdrop.setDepth(2);
      var backdrop_front = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.73, "backdrop_1_front");
      backdrop_front.setDepth(17);
      var color_panel = this.add.image(24, this.game.renderer.height * 0.765, "color_panel").setOrigin(0);
      color_panel.setDepth(18);
      var del_clothes = this.add.image(0, -500, "del_clothes");
      del_clothes.setDepth(31);
      del_clothes.setOrigin(0);

      // Iconos Derecha
      this.menu = this.add.image(this.game.renderer.width, this.game.renderer.height * 0.05, "menu").setDepth(5).setScale(1.4).setOrigin(0.5);
      this.menu.setInteractive();
      this.menu.on('pointerdown', function () {
        var _this2 = this;
        up_arrow.x = this.game.renderer.width * 1.50;
        down_arrow.x = this.game.renderer.width * 1.50;
        if (flag2 === 1) {
          tap3_2.play();
          this.skins.destroy(true, true);
          flag2 = 0;
        }
        flag4 = 1;
        var width = this.sys.game.config.width;
        var height = this.sys.game.config.height;
        var menurectangle = this.add.rectangle(width / 2, height / 2, width, height, 0x000000);
        menurectangle.setAlpha(0.2);
        menurectangle.setDepth(19);
        menurectangle.setInteractive();
        var backdrop_menu = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2.2, 'backdrop_menu').setDepth(20);

        // Music Setting
        var music_mix = this.add.image(this.game.renderer.width * 0.23, this.game.renderer.height * 0.23, 'sound').setDepth(20).setScale(1.2);

        // Bar Rectangle
        var barBackground = this.add.rectangle(music_mix.x + music_mix.width * 1.3, music_mix.y, 320, 40, 0xffffff).setDepth(20).setOrigin(0, 0.5);

        // Text Percentage
        var text = this.add.text(barBackground.x + barBackground.width * 0.85, barBackground.y + barBackground.height * 0.8, Math.round(localStorage.getItem('music_volume') * 100) + '%', {
          fontSize: '42px',
          fill: '#ffffff'
        }).setDepth(20).setOrigin(0.5, 0);

        // Bar Filler
        var barFill = this.add.rectangle(barBackground.x, barBackground.y, 1, barBackground.height, 0xffff00).setDepth(20);

        // Set the origin to the left edge
        barFill.setOrigin(0, 0.5);

        // Create an interactive area over the sound bar
        var barArea = this.add.zone(barBackground.x - 12, barBackground.y - barBackground.height / 2, barBackground.width + 34, barBackground.height).setDepth(21).setOrigin(0);
        barArea.setInteractive();
        barFill.width = localStorage.getItem('music_volume') * barBackground.width;
        // Change the width of the fill rectangle when the pointer is down
        barArea.on('pointermove', function (pointer) {
          if (pointer.isDown) {
            var value = Phaser.Math.Clamp((pointer.x - barBackground.x) / barBackground.width, 0, 1);
            barFill.width = value * barBackground.width;
            // Here you can update the volume of your game
            this.music = data.music;
            this.music.volume = value;
            localStorage.setItem('music_volume', value);
            text.setText(Math.round(value * 100) + '%');
          }
        }, this);

        // Set the volume for all sounds
        soundsfx.forEach(function (sound) {
          _this2.soundffx = sound.volume;
        });

        // SFX Setting
        var sfx_mix = this.add.image(this.game.renderer.width * 0.23, this.game.renderer.height * 0.32, 'sound').setDepth(20).setScale(1.2);

        // Bar Rectangle
        var barBackground2 = this.add.rectangle(sfx_mix.x + sfx_mix.width * 1.3, sfx_mix.y, 320, 40, 0xffffff).setDepth(20).setOrigin(0, 0.5);

        // Text Percentage
        var text2 = this.add.text(barBackground2.x + barBackground2.width * 0.85, barBackground2.y + barBackground2.height * 0.8, Math.round(localStorage.getItem('sfx_volume') * 100) + '%', {
          fontSize: '42px',
          fill: '#ffffff'
        }).setDepth(20).setOrigin(0.5, 0);

        // Bar Filler
        var barFill2 = this.add.rectangle(barBackground2.x, barBackground2.y, 1, barBackground2.height, 0xffff00).setDepth(20);

        // Set the origin to the left edge
        barFill2.setOrigin(0, 0.5);

        // Create an interactive area over the sound bar
        var barArea2 = this.add.zone(barBackground2.x - 12, barBackground2.y - barBackground2.height / 2, barBackground2.width + 34, barBackground2.height).setDepth(21).setOrigin(0);
        barArea2.setInteractive();
        barFill2.width = localStorage.getItem('sfx_volume') * barBackground2.width;
        barArea2.on('pointermove', function (pointer) {
          if (pointer.isDown) {
            var value2 = Phaser.Math.Clamp((pointer.x - barBackground2.x) / barBackground2.width, 0, 1);
            barFill2.width = value2 * barBackground2.width;
            localStorage.setItem('sfx_volume', value2);
            // Set the volume for all sounds
            soundsfx.forEach(function (sound) {
              sound.volume = value2;
            });
            text2.setText(Math.round(value2 * 100) + '%');
          }
        }, this);

        // Full Screen
        var option1 = this.add.rectangle(this.game.renderer.width / 5.2, this.game.renderer.height * 0.41, 448, 50, 0xFFFFFF, 0).setDepth(23).setOrigin(0);
        // Take Picture
        var option2 = this.add.rectangle(this.game.renderer.width / 5.2, this.game.renderer.height * 0.48, 448, 50, 0xFFFFFF, 0).setDepth(23).setOrigin(0);
        // Save
        var option3 = this.add.rectangle(this.game.renderer.width / 5.2, this.game.renderer.height * 0.55, 448, 50, 0xFFFFFF, 0).setDepth(23).setOrigin(0);
        // Load
        var option4 = this.add.rectangle(this.game.renderer.width / 5.2, this.game.renderer.height * 0.62, 448, 50, 0xFFFFFF, 0).setDepth(23).setOrigin(0);
        // Quit Game
        var option5 = this.add.rectangle(this.game.renderer.width / 5.2, this.game.renderer.height * 0.69, 448, 50, 0xFFFFFF, 0).setDepth(23).setOrigin(0);
        var option1_text = this.add.text(option1.x + 90, option1.y, 'Full Screen', {
          fontSize: '46px',
          color: '#ffffff'
        }).setDepth(22);
        var option2_text = this.add.text(option2.x + 90, option2.y, 'Take Picture', {
          fontSize: '46px',
          color: '#ffffff'
        }).setDepth(22);
        var option3_text = this.add.text(option3.x + 90, option3.y, 'Save', {
          fontSize: '46px',
          color: '#ffffff'
        }).setDepth(22);
        var option4_text = this.add.text(option4.x + 90, option4.y, 'Load', {
          fontSize: '46px',
          color: '#ffffff'
        }).setDepth(22);
        var option5_text = this.add.text(option5.x + 90, option5.y, 'Quit Game', {
          fontSize: '46px',
          color: '#ffffff'
        }).setDepth(22);
        var option1_img = this.add.image(this.game.renderer.width * 0.23, this.game.renderer.height * 0.43, "fullscreen").setDepth(22);
        var option2_img = this.add.image(this.game.renderer.width * 0.23, this.game.renderer.height * 0.50, "camera").setDepth(22);
        var option3_img = this.add.image(this.game.renderer.width * 0.23, this.game.renderer.height * 0.57, "save").setDepth(22);
        var option4_img = this.add.image(this.game.renderer.width * 0.23, this.game.renderer.height * 0.64, "loadreturn").setDepth(22);
        var option5_img = this.add.image(this.game.renderer.width * 0.23, this.game.renderer.height * 0.71, "quitgamebtn").setDepth(22);

        // let setfullscreen = this.add.text(this.game.renderer.width / 2, this.game.renderer.height * 0.43, 'Full Screen', { fontSize: '48px', fill: '#ffffff' }).setDepth(20).setOrigin(0.5, 0);
        option1.setInteractive();
        option1.on('pointerdown', function () {
          _this2.init_y = frameout.y;
          _this2.tween_derecha_back.play();
          _this2.tween_izquierda_back.play();
          _this2.tween_down_back.play();
          quithandler();
          _this2.flag3 = 1;
          _this2.time.delayedCall(600, function () {
            _this2.input.on('pointerdown', function () {
              if (this.flag3 === 1) {
                this.tween_derecha.play();
                this.tween_izquierda.play();
                // this.tween_down_backdrop.play();
                this.tween_down_colorpanel.play();
                this.tween_down_layer15.play();
                this.tween_down_layer16.play();
                this.tween_down_layer20.play();
                this.tween_down_frameout.play();
                this.flag3 = 0;
                up_arrow.x = this.game.renderer.width * 0.90;
                down_arrow.x = this.game.renderer.width * 0.90;
              }
            }, _this2);
          });
        });

        // Camera Function
        option2.setInteractive();
        option2.on('pointerdown', function camera() {
          var _this3 = this;
          this.init_y = frameout.y;
          this.tween_derecha_back.play();
          this.tween_izquierda_back.play();
          this.tween_down_back.play();
          quithandler();
          this.time.delayedCall(600, function () {
            _this3.takepic_btn = _this3.add.image(_this3.game.renderer.width / 2, _this3.game.renderer.height * 0.85, "takepic").setDepth(20).setScale(1.2).setOrigin(0.5);
            _this3.return_btn = _this3.add.image(_this3.game.renderer.width * 0.1, _this3.game.renderer.height * 0.72, "return").setDepth(20).setOrigin(0.5);
            _this3.return_btn.setInteractive();
            _this3.return_btn.on('pointerdown', function () {
              this.tween_derecha.play();
              this.tween_izquierda.play();
              // this.tween_down_backdrop.play();
              this.tween_down_colorpanel.play();
              this.tween_down_layer15.play();
              this.tween_down_layer16.play();
              this.tween_down_layer20.play();
              this.tween_down_frameout.play();
              this.return_btn.destroy();
              this.takepic_btn.destroy();
              up_arrow.x = this.game.renderer.width * 0.90;
              down_arrow.x = this.game.renderer.width * 0.90;
            }, _this3);
            var rect = _this3.add.rectangle(_this3.game.renderer.width, _this3.game.renderer.height, _this3.game.renderer.width, _this3.game.renderer.height, 0xffffff).setOrigin(0).setDepth(20);
            _this3.rect_fade = _this3.tweens.add({
              targets: rect,
              alpha: 0,
              duration: 20,
              paused: true
            });
            _this3.takepic_btn.setInteractive();
            _this3.takepic_btn.on('pointerdown', function () {
              var _this4 = this;
              rect.x = 0;
              rect.y = 0;
              takepic.play();
              this.rect_fade.play();
              this.takepic_btn.destroy();
              this.return_btn.destroy();
              this.time.delayedCall(600, function () {
                _this4.return_btn = _this4.add.image(_this4.game.renderer.width * 0.1, _this4.game.renderer.height * 0.72, "return").setDepth(20).setOrigin(0.5);
                _this4.return_btn.setInteractive();
                _this4.return_btn.on('pointerdown', function () {
                  this.tween_derecha.play();
                  this.tween_izquierda.play();
                  // this.tween_down_backdrop.play();
                  this.tween_down_colorpanel.play();
                  this.tween_down_layer15.play();
                  this.tween_down_layer16.play();
                  this.tween_down_layer20.play();
                  this.tween_down_frameout.play();
                  this.download_img.destroy();
                  this.return_btn.destroy();
                  this.save_img.destroy();
                  up_arrow.x = this.game.renderer.width * 0.90;
                  down_arrow.x = this.game.renderer.width * 0.90;
                }, _this4);
                _this4.save_img = _this4.add.image(_this4.game.renderer.width / 1.2, _this4.game.renderer.height * 0.90, 'save_img_gray').setDepth(20).setScale(2).setOrigin(0.5);
                _this4.download_img = _this4.add.image(_this4.game.renderer.width / 1.2, _this4.game.renderer.height * 0.75, 'download_img').setDepth(20).setScale(2).setOrigin(0.5);
                _this4.download_img.setInteractive();
                _this4.download_img.on('pointerdown', function () {
                  _this4.download_img.destroy();
                  _this4.return_btn.destroy();
                  _this4.save_img.destroy();
                  var newWidth = 720;
                  var newHeight = 870;
                  _this4.sys.game.scale.setGameSize(newWidth, newHeight);
                  _this4.time.delayedCall(300, function () {
                    var screenshotDataUrl = _this4.sys.game.canvas.toDataURL();

                    // Create a link element
                    var link = document.createElement('a');

                    // Set the link's href to the data URL of the screenshot
                    link.href = screenshotDataUrl;

                    // Set the download attribute of the link
                    link.download = 'screenshot.png';

                    // Trigger a click event on the link
                    link.click();
                    var oldWidth = 720;
                    var oldHeight = 1280;
                    _this4.sys.game.scale.setGameSize(oldWidth, oldHeight);
                    _this4.save_img = _this4.add.image(_this4.game.renderer.width / 1.2, _this4.game.renderer.height * 0.90, 'save_img_gray').setDepth(20).setScale(2).setOrigin(0.5);
                    _this4.return_btn = _this4.add.image(_this4.game.renderer.width * 0.1, _this4.game.renderer.height * 0.1, "return").setDepth(20).setScale(1.2).setOrigin(0.5);
                    _this4.return_btn.setInteractive();
                    _this4.return_btn.on('pointerdown', function () {
                      this.tween_derecha.play();
                      this.tween_izquierda.play();
                      // this.tween_down_backdrop.play();
                      this.tween_down_colorpanel.play();
                      this.tween_down_layer15.play();
                      this.tween_down_layer16.play();
                      this.tween_down_layer20.play();
                      this.download_img.destroy();
                      this.return_btn.destroy();
                      this.save_img.destroy();
                      up_arrow.x = this.game.renderer.width * 0.90;
                      down_arrow.x = this.game.renderer.width * 0.90;
                    }, _this4);
                  });
                });
              });
            }, _this3);
          });
        }, this);

        // let save = this.add.text(this.game.renderer.width / 2, this.game.renderer.height * 0.55, 'Save', { fontSize: '48px', fill: '#ffffff' }).setDepth(20).setOrigin(0.5, 0);
        option3.setInteractive();
        option3.on('pointerdown', function () {
          localStorage.setItem('slot', _this2.slot_no);
          _this2.edit_icon = document.getElementById('edit_qty');
          _this2.edit_icon.innerHTML = Number(Math.max(localStorage.getItem('slot'), 0));

          // Current Position (Dress)
          // localStorage.setItem('dressxpos' + this.slot_cur, layer9.x.toString());
          // localStorage.setItem('dressypos' + this.slot_cur, layer9.y.toString());

          // localStorage.setItem('dressxmanh' + this.slot_cur, layer9.x - layer4.x.toString());
          // localStorage.setItem('dressymanh' + this.slot_cur, layer9.y - layer4.y.toString());

          // // Current Position (Shirt)
          // localStorage.setItem('shirtxpos' + this.slot_cur, layer9.x.toString());
          // localStorage.setItem('shirtypos' + this.slot_cur, layer9.y.toString());

          // localStorage.setItem('shirtxmanh' + this.slot_cur, layer9.x - layer4.x.toString());
          // localStorage.setItem('shirtymanh' + this.slot_cur, layer9.y - layer4.y.toString());

          // // Current Position (Skirt)
          // localStorage.setItem('skirtxpos' + this.slot_cur, layer6.x.toString());
          // localStorage.setItem('skirtypos' + this.slot_cur, layer6.y.toString());

          // localStorage.setItem('skirtxmanh' + this.slot_cur, layer6.x - layer4.x.toString());
          // localStorage.setItem('skirtymanh' + this.slot_cur, layer6.y - layer4.y.toString());

          // // Current Position (Pants)
          // localStorage.setItem('pantsxpos' + this.slot_cur, layer5.x.toString());
          // localStorage.setItem('pantsypos' + this.slot_cur, layer5.y.toString());

          // localStorage.setItem('pantsxmanh' + this.slot_cur, layer5.x - layer4.x.toString());
          // localStorage.setItem('pantsymanh' + this.slot_cur, layer5.y - layer4.y.toString());

          // Save Dress
          var dress_id = _this2.data.get('val1');
          localStorage.setItem('dress_id' + _this2.slot_cur, dress_id.toString());

          // Save Top
          var top_id = _this2.data.get('val2');
          localStorage.setItem('top_id' + _this2.slot_cur, top_id.toString());

          // Save Hair
          var hair_id = _this2.data.get('val3');
          localStorage.setItem('hair_id' + _this2.slot_cur, hair_id.toString());

          // Save BackHair
          var backhair_id = _this2.data.get('val4');
          localStorage.setItem('backhair_id' + _this2.slot_cur, backhair_id.toString());

          // Save Shirt
          var shirt_id = _this2.data.get('val5');
          localStorage.setItem('shirt_id' + _this2.slot_cur, shirt_id.toString());

          // Save Skirt
          var skirt_id = _this2.data.get('val6');
          localStorage.setItem('skirt_id' + _this2.slot_cur, skirt_id.toString());

          // Save Pants
          var pants_id = _this2.data.get('val7');
          localStorage.setItem('pants_id' + _this2.slot_cur, pants_id.toString());

          // Save Acc1
          var acc1_id = _this2.data.get('val8');
          localStorage.setItem('acc1_id' + _this2.slot_cur, acc1_id.toString());

          // Save Acc2
          var acc2_id = _this2.data.get('val9');
          localStorage.setItem('acc2_id' + _this2.slot_cur, acc2_id.toString());

          // Save Acc3
          var acc3_id = _this2.data.get('val10');
          localStorage.setItem('acc3_id' + _this2.slot_cur, acc3_id.toString());

          // Save Eye
          var eye_id = _this2.data.get('val11');
          localStorage.setItem('eye_id' + _this2.slot_cur, eye_id.toString());

          // ** Save Eye 1 Colors
          var eye1_id = _this2.data.get('val11_1');
          localStorage.setItem('eye1_id' + _this2.slot_cur, eye1_id.toString());

          // Save Eyebrows
          var eyebrow_id = _this2.data.get('val12');
          localStorage.setItem('eyebrow_id' + _this2.slot_cur, eyebrow_id.toString());

          // Save Background
          var background_id = _this2.data.get('val13');
          localStorage.setItem('background_id' + _this2.slot_cur, background_id.toString());

          // Save Skin Colors
          var skin_id = _this2.data.get('val14');
          localStorage.setItem('skin_id' + _this2.slot_cur, skin_id.toString());

          // Save Nose
          var nose_id = _this2.data.get('val15');
          localStorage.setItem('nose_id' + _this2.slot_cur, nose_id.toString());

          // Save Mouth
          var mouth_id = _this2.data.get('val16');
          localStorage.setItem('mouth_id' + _this2.slot_cur, mouth_id.toString());

          // Save Color Ear
          var ear_id = _this2.data.get('val17');
          localStorage.setItem('ear_id' + _this2.slot_cur, ear_id.toString());

          // Save Shirt Flag
          if (localStorage.getItem('shirt_flag' + _this2.slot_cur) == null) {
            localStorage.setItem('shirt_flag' + _this2.slot_cur, 0);
          } else {
            localStorage.setItem('shirt_flag' + _this2.slot_cur, _this2.data.get('shirt_flag' + _this2.slot_cur));
          }

          // Save Shirt Color Variations
          localStorage.setItem('shirt_var1_' + _this2.slot_cur, _this2.data.get('shirt_var1'));
          localStorage.setItem('shirt_var2_' + _this2.slot_cur, _this2.data.get('shirt_var2'));
          localStorage.setItem('shirt_var3_' + _this2.slot_cur, _this2.data.get('shirt_var3'));
          localStorage.setItem('shirt_var4_' + _this2.slot_cur, _this2.data.get('shirt_var4'));

          // Save Pants Color Variations
          localStorage.setItem('pants_var1_' + _this2.slot_cur, _this2.data.get('pants_var1'));
          localStorage.setItem('pants_var2_' + _this2.slot_cur, _this2.data.get('pants_var2'));
          localStorage.setItem('pants_var3_' + _this2.slot_cur, _this2.data.get('pants_var3'));
          localStorage.setItem('pants_var4_' + _this2.slot_cur, _this2.data.get('pants_var4'));

          // Save Skirt
          localStorage.setItem('skirt_var1_' + _this2.slot_cur, _this2.data.get('skirt_var1'));
          localStorage.setItem('skirt_var2_' + _this2.slot_cur, _this2.data.get('skirt_var2'));
          localStorage.setItem('skirt_var3_' + _this2.slot_cur, _this2.data.get('skirt_var3'));

          // Save ACC 2
          localStorage.setItem('acc2_var1_' + _this2.slot_cur, _this2.data.get('acc2_var1'));
          localStorage.setItem('acc2_var2_' + _this2.slot_cur, _this2.data.get('acc2_var2'));
          localStorage.setItem('acc2_var3_' + _this2.slot_cur, _this2.data.get('acc2_var3'));

          // Se ha Guardado (Aviso)
          var save_txt = _this2.add.text(_this2.game.renderer.width / 2, _this2.game.renderer.height * 0.55, 'Guardado!', {
            fontSize: '64px',
            fill: '#00FF3B'
          });
          save_txt.setDepth(50);
          save_txt.setOrigin(0.5);
          _this2.tweens.add({
            targets: save_txt,
            alpha: 0,
            y: '-=50',
            duration: 1000,
            onComplete: function onComplete() {
              save_txt.destroy();
            }
          });
        });

        // let load = this.add.text(this.game.renderer.width / 2, this.game.renderer.height * 0.62, 'Load', { fontSize: '48px', fill: '#ffffff' }).setDepth(20).setOrigin(0.5, 0);
        option4.setInteractive();
        option4.on('pointerdown', function () {
          var width = _this2.sys.game.config.width;
          var height = _this2.sys.game.config.height;
          var rectangle = _this2.add.rectangle(width / 2, height / 2, width, height, 0x000000);
          var rectangle2 = _this2.add.rectangle(width / 2, height / 2, width / 1.2, height / 3, 0x000000);
          rectangle.setAlpha(0.5);
          rectangle.setDepth(40);
          rectangle.setInteractive();
          rectangle2.setDepth(41);

          // Texto
          var textconfirm = _this2.add.text(width / 2, height / 2.5, "Quit to Load?", {
            fontSize: '72px',
            fill: '#ffffff'
          }).setOrigin(0.5);
          textconfirm.setDepth(42);
          var yes_btn = _this2.add.image(width / 2.2, height / 1.8, 'yes_btn').setOrigin(1, 0.5).setDepth(42).setScale(1.5);
          yes_btn.setInteractive();
          yes_btn.on('pointerdown', function () {
            _this2.scene.start(_CST.CST.SCENES.MENU, {
              enter_load: 1
            });
          });
          var no_btn = _this2.add.image(width / 1.8, height / 1.8, 'no_btn').setOrigin(0, 0.5).setDepth(42).setScale(1.5);
          no_btn.setInteractive();
          no_btn.on('pointerdown', function () {
            rectangle.destroy();
            rectangle2.destroy();
            textconfirm.destroy();
            yes_btn.destroy();
            no_btn.destroy();
            _this2.menu.x = _this2.game.renderer.width / 1.07;
            up_arrow.x = _this2.game.renderer.width * 0.90;
            down_arrow.x = _this2.game.renderer.width * 0.90;
          });
          quithandler();
        });

        // load.on('pointerdown',()=>{

        // let Return = this.add.text(this.game.renderer.width / 2, this.game.renderer.height * 0.69, 'Quit to Menu', { fontSize: '48px', fill: '#ffffff' }).setDepth(20).setOrigin(0.5, 0);
        option5.setInteractive();
        option5.on('pointerdown', function () {
          var width = _this2.sys.game.config.width;
          var height = _this2.sys.game.config.height;
          var rectangle = _this2.add.rectangle(width / 2, height / 2, width, height, 0x000000);
          var rectangle2 = _this2.add.rectangle(width / 2, height / 2, width / 1.2, height / 3, 0x000000);
          rectangle.setAlpha(0.5);
          rectangle.setDepth(40);
          rectangle.setInteractive();
          rectangle2.setDepth(41);

          // Texto
          var textconfirm = _this2.add.text(width / 2, height / 2.5, "Quit to Menu?", {
            fontSize: '72px',
            fill: '#ffffff'
          }).setOrigin(0.5);
          textconfirm.setDepth(42);
          var yes_btn = _this2.add.image(width / 2.2, height / 1.8, 'yes_btn').setOrigin(1, 0.5).setDepth(42).setScale(1.5);
          yes_btn.setInteractive();
          yes_btn.on('pointerdown', function () {
            _this2.scene.start(_CST.CST.SCENES.MENU, {
              enter_load: 0
            });
          });
          var no_btn = _this2.add.image(width / 1.8, height / 1.8, 'no_btn').setOrigin(0, 0.5).setDepth(42).setScale(1.5);
          no_btn.setInteractive();
          no_btn.on('pointerdown', function () {
            rectangle.destroy();
            rectangle2.destroy();
            textconfirm.destroy();
            yes_btn.destroy();
            no_btn.destroy();
            _this2.menu.x = _this2.game.renderer.width / 1.07;
            up_arrow.x = _this2.game.renderer.width * 0.90;
            down_arrow.x = _this2.game.renderer.width * 0.90;
          });
          quithandler();
          // this.scene.start(CST.SCENES.MENU);
        });
        var quit_btn = this.add.image(this.game.renderer.width / 1.15, this.game.renderer.height * 0.15, 'quit_btn').setDepth(20).setScale(1.2);
        quit_btn.setInteractive();
        quit_btn.on('pointerdown', function () {
          up_arrow.x = _this2.game.renderer.width * 0.90;
          down_arrow.x = _this2.game.renderer.width * 0.90;
          _this2.menu.x = _this2.game.renderer.width / 1.07;
          quithandler();
        });
        function quithandler() {
          option1.destroy();
          option1_text.destroy();
          option2.destroy();
          option2_text.destroy();
          option3.destroy();
          option3_text.destroy();
          option4.destroy();
          option4_text.destroy();
          option5.destroy();
          option5_text.destroy();
          option1_img.destroy();
          option2_img.destroy();
          option3_img.destroy();
          option4_img.destroy();
          option5_img.destroy();
          backdrop_menu.destroy();
          sfx_mix.destroy();
          music_mix.destroy();
          barBackground.destroy();
          text.destroy();
          barFill.destroy();
          barArea.destroy();
          barBackground2.destroy();
          text2.destroy();
          barFill2.destroy();
          barArea2.destroy();
          quit_btn.destroy();
          menurectangle.destroy();
          flag4 = 0;
        }
        this.menu.x = this.game.renderer.width + 100;
      }, this);

      // Iconos Izquierda
      var facecolor = this.add.image(-200, this.game.renderer.height * 0.56, "facecolor").setDepth(5).setScale(1.4).setOrigin(0.5);
      this.tween_derecha = this.tweens.add({
        targets: [this.menu],
        x: this.game.renderer.width / 1.07,
        ease: 'Sine.easeIn',
        duration: 500,
        paused: true,
        persist: true
      });
      this.tween_derecha.play();
      this.tween_derecha_back = this.tweens.add({
        targets: [this.menu],
        x: this.game.renderer.width + 100,
        ease: 'Sine.easeIn',
        duration: 500,
        paused: true,
        persist: true
      });
      this.tween_izquierda = this.tweens.add({
        targets: [facecolor],
        x: this.game.renderer.width * 0.07,
        ease: 'Sine.easeIn',
        duration: 500,
        paused: true,
        persist: true
      });
      this.tween_izquierda.play();
      this.tween_izquierda_back = this.tweens.add({
        targets: [facecolor],
        x: -200,
        ease: 'Sine.easeIn',
        duration: 500,
        paused: true,
        persist: true
      });

      // Facecolor Function

      facecolor.setInteractive();
      facecolor.on('pointerdown', function () {
        if (flag2 === 0) {
          tap3.play();
          var skins = _this.add.group();
          skins.createMultiple({
            key: 'skins',
            frame: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            repeat: -1
          });
          _this.skins = skins;
          skins.setDepth(11);
          skins.scaleX(1.5);
          skins.scaleY(1.5);
          skins.setOrigin(0);
          var skin_gph = _this.skins.getChildren();
          Phaser.Actions.GridAlign(skins.getChildren(), {
            width: 2,
            height: 12,
            cellWidth: 48,
            x: 6,
            y: _this.game.renderer.height * 0.18
          });
          skin_gph[0].setTint(0xEB957F);
          skin_gph[0].setInteractive();
          skin_gph[0].on('pointerdown', function () {
            tap2.play();
            doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[0]);
            _this.data.set('val14', 0);
            ear_2.setTexture('ear2_1');
          });
          skin_gph[1].setTint(0xF3AB80);
          skin_gph[1].setInteractive();
          skin_gph[1].on('pointerdown', function () {
            tap2.play();
            doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[1]);
            _this.data.set('val14', 1);
            ear_2.setTexture('ear2_2');
          });
          skin_gph[2].setTint(0xE86248);
          skin_gph[2].setInteractive();
          skin_gph[2].on('pointerdown', function () {
            tap2.play();
            doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[2]);
            _this.data.set('val14', 2);
            ear_2.setTexture('ear2_3');
          });
          skin_gph[3].setTint(0xE48169);
          skin_gph[3].setInteractive();
          skin_gph[3].on('pointerdown', function () {
            tap2.play();
            doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[3]);
            _this.data.set('val14', 3);
            ear_2.setTexture('ear2_4');
          });
          skin_gph[4].setTint(0xAA5F50);
          skin_gph[4].setInteractive();
          skin_gph[4].on('pointerdown', function () {
            tap2.play();
            doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[4]);
            _this.data.set('val14', 4);
            ear_2.setTexture('ear2_5');
          });
          skin_gph[5].setTint(0x8D675F);
          skin_gph[5].setInteractive();
          skin_gph[5].on('pointerdown', function () {
            tap2.play();
            doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[5]);
            _this.data.set('val14', 5);
            ear_2.setTexture('ear2_6');
          });
          skin_gph[6].setTint(0xE6A090);
          skin_gph[6].setInteractive();
          skin_gph[6].on('pointerdown', function () {
            tap2.play();
            doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[6]);
            _this.data.set('val14', 6);
            ear_2.setTexture('ear2_7');
          });
          skin_gph[7].setTint(0xE99891);
          skin_gph[7].setInteractive();
          skin_gph[7].on('pointerdown', function () {
            tap2.play();
            doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[7]);
            _this.data.set('val14', 7);
            ear_2.setTexture('ear2_8');
          });
          skin_gph[8].setTint(0xF6BBAC);
          skin_gph[8].setInteractive();
          skin_gph[8].on('pointerdown', function () {
            tap2.play();
            doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[8]);
            _this.data.set('val14', 8);
            ear_2.setTexture('ear2_9');
          });
          skin_gph[9].setTint(0xF8BBB6);
          skin_gph[9].setInteractive();
          skin_gph[9].on('pointerdown', function () {
            tap2.play();
            doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[9]);
            _this.data.set('val14', 9);
            ear_2.setTexture('ear2_10');
          });
          skin_gph[10].setTint(0xEDC5BC);
          skin_gph[10].setInteractive();
          skin_gph[10].on('pointerdown', function () {
            tap2.play();
            doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[10]);
            _this.data.set('val14', 10);
            ear_2.setTexture('ear2_11');
          });
          skin_gph[11].setTint(0xAD9DC6);
          skin_gph[11].setInteractive();
          skin_gph[11].on('pointerdown', function () {
            tap2.play();
            doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[11]);
            _this.data.set('val14', 11);
            ear_2.setTexture('ear2_12');
          });
          skin_gph[12].setTint(0x9DA9C6);
          skin_gph[12].setInteractive();
          skin_gph[12].on('pointerdown', function () {
            tap2.play();
            doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[12]);
            _this.data.set('val14', 12);
            ear_2.setTexture('ear2_13');
          });
          skin_gph[13].setTint(0x9EC7C1);
          skin_gph[13].setInteractive();
          skin_gph[13].on('pointerdown', function () {
            tap2.play();
            doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[13]);
            _this.data.set('val14', 13);
            ear_2.setTexture('ear2_14');
          });
          skin_gph[14].setTint(0x747474);
          skin_gph[14].setInteractive();
          skin_gph[14].on('pointerdown', function () {
            tap2.play();
            doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[14]);
            _this.data.set('val14', 14);
            ear_2.setTexture('ear2_15');
          });
          skin_gph[15].setTint(0xAEACAB);
          skin_gph[15].setInteractive();
          skin_gph[15].on('pointerdown', function () {
            tap2.play();
            doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[15]);
            _this.data.set('val14', 15);
            ear_2.setTexture('ear2_16');
          });
          skin_gph[16].setTint(0xD8CECC);
          skin_gph[16].setInteractive();
          skin_gph[16].on('pointerdown', function () {
            tap2.play();
            doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[16]);
            _this.data.set('val14', 16);
            ear_2.setTexture('ear2_17');
          });
          flag2 = 1;
        } else if (flag2 === 1) {
          tap3_2.play();
          _this.skins.destroy(true, true);
          flag2 = 0;
        }
      });
      var layerxpos = this.game.renderer.width / 2;
      var layerypos = this.game.renderer.height * 0.36;
      var layer1 = this.add.container(layerxpos, layerypos);
      layer1.setSize(720, 1280);
      layer1.setScale(1.2);
      layer1.setDepth(1);
      var layer2 = this.add.container(layerxpos, layerypos);
      layer2.setSize(680, 920);
      layer2.setDepth(2);
      layer2.setScale(0.9);
      var layer3 = this.add.container(layerxpos, layerypos);
      layer3.setSize(360, 360);
      layer3.setDepth(3);
      layer3.setScale(0.9);
      var layer4 = this.add.container(layerxpos, layerypos);
      layer4.setSize(680, 920);
      layer4.setDepth(4);
      layer4.setScale(0.9);
      var layer5 = this.add.container(layerxpos, layerypos);
      layer5.setSize(350, 450);
      layer5.setDepth(5);
      layer5.setScale(0.9);
      var layer6 = this.add.container(layerxpos, layerypos);
      layer6.setSize(350, 450);
      layer6.setDepth(6);
      layer6.setScale(0.9);
      var layer7 = this.add.container(layerxpos, layerypos);
      layer7.setSize(180, 180);
      layer7.setDepth(7);
      layer7.setScale(0.9);
      var layer8 = this.add.container(layerxpos, layerypos);
      layer8.setSize(180, 180);
      layer8.setDepth(8);
      layer8.setScale(0.9);
      var layer9 = this.add.container(layerxpos, layerypos);
      layer9.setSize(350, 450);
      layer9.setDepth(9);
      layer9.setScale(0.9);
      var layer10 = this.add.container(layerxpos, layerypos);
      layer10.setSize(360, 360);
      layer10.setDepth(10);
      layer10.setScale(0.9);
      var layer11 = this.add.container(layerxpos, layerypos);
      layer11.setSize(680, 920);
      layer11.setDepth(11);
      layer11.setScale(0.9);
      var layer12 = this.add.container(layerxpos, layerypos);
      layer12.setSize(680, 920);
      layer12.setDepth(12);
      layer12.setScale(0.9);
      var layer13 = this.add.container(layerxpos, layerypos);
      layer13.setSize(680, 920);
      layer13.setDepth(13);
      layer13.setScale(0.9);
      var layer14 = this.add.container(layerxpos, layerypos);
      layer14.setSize(680, 920);
      layer14.setDepth(14);
      layer14.setScale(0.9);
      var layer15 = this.add.container(275, this.game.renderer.height * 0.72);
      layer15.setSize(400, 120);
      layer15.setDepth(19);
      layer15.setInteractive();
      var layer16 = this.add.container(0, 0);
      layer16.setSize(this.game.renderer.width, this.game.renderer.height);
      layer16.setDepth(16);
      var layer17 = this.add.container(layerxpos, layerypos);
      layer17.setSize(680, 920);
      layer17.setDepth(17);
      layer17.setScale(0.9);
      var layer18 = this.add.container(layerxpos, layerypos);
      layer18.setSize(680, 920);
      layer18.setDepth(18);
      layer18.setScale(0.9);
      var layer19 = this.add.container(layerxpos, layerypos);
      layer19.setSize(680, 920);
      layer19.setDepth(19);
      layer19.setScale(0.9);

      // Color Variations
      var layer20 = this.add.container(0, 0);
      layer20.setSize(this.game.renderer.width, this.game.renderer.height);
      layer20.setDepth(19);

      // Up Shirt & Down Shirt
      var up_arrow = this.add.image(this.game.renderer.width * 0.90, this.game.renderer.height * 0.30, 'up_arrow');
      up_arrow.setDepth(20);
      up_arrow.setInteractive();
      up_arrow.on('pointerdown', function () {
        // localStorage.setItem('shirt_flag' + this.slot_cur,0);
        _this.data.set('shirt_flag' + _this.slot_cur, 0);
        up_arrow.setTint(0x5c5c5c);
        down_arrow.setTint(0xffffff);
        _this.data.set('shirt_flag', 0);
        layer9.setDepth(9);
      });
      var down_arrow = this.add.image(this.game.renderer.width * 0.90, this.game.renderer.height * 0.38, 'down_arrow');
      down_arrow.setDepth(20);
      down_arrow.setInteractive();
      down_arrow.on('pointerdown', function () {
        // localStorage.setItem('shirt_flag' + this.slot_cur, 1);
        _this.data.set('shirt_flag' + _this.slot_cur, 1);
        up_arrow.setTint(0xffffff);
        down_arrow.setTint(0x5c5c5c);
        _this.data.set('shirt_flag', 1);
        layer9.setDepth(4);
      });

      // Shirt Flag 
      if (this.data.get('shirt_flag' + this.slot_cur) != 1) {
        up_arrow.setTint(0x5c5c5c);
        layer9.setDepth(9);
      } else {
        down_arrow.setTint(0x5c5c5c);
        layer9.setDepth(4);
      }
      up_arrow.setVisible(false);
      down_arrow.setVisible(false);

      // Create a rectangle that represents the clickable zone

      var zone = new Phaser.Geom.Rectangle(0, this.game.renderer.height * 0.66, this.game.renderer.width, 142);
      this.input.on('pointerdown', function (pointer) {
        this.draginit = 1;
        this.initx = pointer.x;
        this.layerpos = layer15.x;
      });
      this.input.on('pointerup', function (pointer) {
        this.isDragging = false;
        this.draginit = 0;
      });
      this.input.on('pointermove', function (pointer) {
        if (flag4 === 0) {
          if (this.draginit === 1) {
            this.xpos = this.initx - pointer.x;
            if (zone.contains(pointer.x, pointer.y)) {
              this.isDragging = true;
              layer15.x = Math.min(Math.max(this.layerpos - this.xpos, -930), 280);
            } else if (!zone.contains(pointer.x, pointer.y)) {
              this.isDragging = false;
              this.draginit = 0;
            }
          }
        }
      });
      var zone2 = new Phaser.Geom.Rectangle(0, this.game.renderer.height * 0.78, this.game.renderer.width, 300);
      var width = this.sys.game.config.width;
      var height = this.sys.game.config.height;
      this.input.on('pointerdown', function (pointer) {
        this.draginit_y = 1;
        this.init_y = pointer.y;
        this.layerpos_y = layer16.y;
      });
      this.input.on('pointerup', function (pointer) {
        this.isDragging_y = false;
        this.draginit_y = 0;
        zone2.setPosition(0, height * 0.78);
        zone2.setSize(width, 300);
      });
      this.input.on('pointermove', function (pointer) {
        if (flag4 === 0) {
          if (this.draginit_y === 1) {
            this.ypos = this.init_y - pointer.y;
            if (zone2.contains(pointer.x, pointer.y)) {
              this.isDragging_y = true;
              zone2.y = 0;
              zone2.setSize(720, 1280);
              // Establece el Límite Aquí
              layer16.y = Math.min(Math.max(this.layerpos_y - this.ypos, -160 * (1 * Math.max(layer16_y_cap - 1, 0))), 0);
              frameout.y = itemypos + Math.min(Math.max(this.layerpos_y - this.ypos, -160 * (1 * Math.max(layer16_y_cap - 1, 0))), 0);
              if (frameout.y < 905) {
                frameout.setVisible(false);
              } else {
                frameout.setVisible(true);
              }
              layer16_limit = Number(Math.floor(layer16.y / -120));
              if (layer16_y_cap > 0) {
                if (layer16.y <= -120) {
                  for (var e = 0; e < 5; e++) {
                    var limit2 = Number(e + 5 * Math.max(layer16_limit - 1), 0);
                    layer16.getAt(limit2).setVisible(false);
                  }
                }
                var manh = -120 - 120 * layer16_limit;
                if (layer16.y >= manh) {
                  for (var i = 0; i < 5; i++) {
                    var limit = Number(i + 5 * layer16_limit);
                    layer16.getAt(limit).setVisible(true);
                  }
                }
              }
            } else if (!zone2.contains(pointer.x, pointer.y)) {
              this.isDragging_y = false;
              this.draginit_y = 0;
              zone2.setPosition(0, height * 0.78);
              zone2.setSize(width, 300);
            }
          }
        }
      });
      layer4.add([doll]);

      // Dresses
      var dress1 = this.add.image(-400, -400, "dress_1");
      var dress2 = this.add.image(-400, -400, "dress_2");
      var dress3 = this.add.image(-400, -400, "dress_3");
      this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        gameObject.x = dragX;
        gameObject.y = dragY;
        del_clothes.setPosition(0, 970);
      });
      layer5.on('drag', function (pointer) {
        layer5.setDepth(30);
      });
      layer6.on('drag', function (pointer) {
        layer6.setDepth(30);
      });
      layer9.on('drag', function (pointer) {
        layer9.setDepth(30);
      });
      this.input.on('dragend', function (pointer) {
        layer5.setDepth(5);
        layer6.setDepth(6);
        layer9.setDepth(9);
        del_clothes.setPosition(0, -500);
      });

      // Clothes, Shirts, Top
      this.input.on('dragend', function () {
        if (layer9.y > 840) {
          layer9.remove([dress1.setPosition(-400, -400), dress2.setPosition(-400, -400), dress3.setPosition(-400, -400), shirt1.setPosition(-400, -400), shirt2.setPosition(-400, -400), top1.setPosition(-400, -400), top2.setPosition(-400, -400)]);

          // Current Cloth

          _this.data.set('val1', 0);
          _this.data.set('val2', 0);
          _this.data.set('val5', 0);
          _this.data.set('dress1', 0);
          _this.data.set('dress2', 0);
          _this.data.set('dress3', 0);
          _this.data.set('top1', 0);
          _this.data.set('top2', 0);
          _this.data.set('shirt1', 0);
          _this.data.set('shirt2', 0);
          frameout.setPosition(-170, itemypos);
          metal.play();
        }
      });

      //pants
      this.input.on('dragend', function () {
        if (layer5.y > 840) {
          layer5.remove([pants1.setPosition(-400, -400), pants2.setPosition(-400, -400), pants3.setPosition(-400, -400), pants4.setPosition(-400, -400)]);
          // Current Cloth
          _this.data.set('val7', 0);
          _this.data.set('pants1', 0);
          _this.data.set('pants2', 0);
          _this.data.set('pants3', 0);
          _this.data.set('pants4', 0);
          frameout.setPosition(-170, itemypos);
          metal.play();
        }
      });

      // Skirts
      this.input.on('dragend', function () {
        if (layer6.y > 840) {
          layer6.remove([skirt1.setPosition(-400, -400), skirt2.setPosition(-400, -400), skirt3.setPosition(-400, -400), skirt4.setPosition(-400, -400)]);
          // Current Cloth
          _this.data.set('val6', 0);
          _this.data.set('skirt1', 0);
          _this.data.set('skirt2', 0);
          _this.data.set('skirt3', 0);
          _this.data.set('skirt4', 0);
          frameout.setPosition(-170, itemypos);
          metal.play();
        }
      });

      // dress1.on('pointerup', ()=> {
      //     this.isDragging = false;
      // })

      // Shirts
      var shirt1 = this.add.image(-400, -400, "shirt_1_1");
      var shirt2 = this.add.image(-400, -400, "shirt_2_1");
      var shirt3 = this.add.image(-400, -400, "shirt_3_1");
      var shirt4 = this.add.image(-400, -400, "shirt_4_1");

      // Tops
      var top1 = this.add.image(-400, -400, "top_1");
      var top2 = this.add.image(-400, -400, "top_2");
      var top3 = this.add.image(-400, -400, "top_3");
      var top4 = this.add.image(-400, -400, "top_4");
      var top5 = this.add.image(-400, -400, "top_5");
      var top6 = this.add.image(-400, -400, "top_6");
      var top7 = this.add.image(-400, -400, "top_7");
      var top8 = this.add.image(-400, -400, "top_8");
      var top9 = this.add.image(-400, -400, "top_9");
      var top10 = this.add.image(-400, -400, "top_10");
      var top11 = this.add.image(-400, -400, "top_11");
      var top12 = this.add.image(-400, -400, "top_12");
      var top13 = this.add.image(-400, -400, "top_13");
      var top14 = this.add.image(-400, -400, "top_14");
      var top15 = this.add.image(-400, -400, "top_15");

      // Hairs
      var hair1 = this.add.image(-400, -400, "hair_1");
      var hair2 = this.add.image(-400, -400, "hair_2");
      var hair3 = this.add.image(-400, -400, "hair_3");
      var hair4 = this.add.image(-400, -400, "hair_4");
      var hair5 = this.add.image(-400, -400, "hair_5");
      var hair6 = this.add.image(-400, -400, "hair_6");
      var hair7 = this.add.image(-400, -400, "hair_7");
      var hair8 = this.add.image(-400, -400, "hair_8");
      var hair9 = this.add.image(-400, -400, "hair_9");
      var hair10 = this.add.image(-400, -400, "hair_10");

      // Back-Hair
      var backhair1 = this.add.image(-400, -400, "backhair_1");
      var backhair2 = this.add.image(-400, -400, "backhair_2");
      var backhair3 = this.add.image(-400, -400, "backhair_3");
      var backhair4 = this.add.image(-400, -400, "backhair_4");
      var backhair5 = this.add.image(-400, -400, "backhair_5");
      var backhair6 = this.add.image(-400, -400, "backhair_6");
      var backhair7 = this.add.image(-400, -400, "backhair_7");

      // Skirt
      var skirt1 = this.add.image(-400, -400, "skirt_1_1");
      var skirt2 = this.add.image(-400, -400, "skirt_2_1");
      var skirt3 = this.add.image(-400, -400, "skirt_3_1");

      // Pants
      var pants1 = this.add.image(-400, -400, "pants_1_1");
      var pants2 = this.add.image(-400, -400, "pants_2_1");
      var pants3 = this.add.image(-400, -400, "pants_3_1");
      var pants4 = this.add.image(-400, -400, "pants_4_1");

      // STRAINS (ACC1)
      var acc1_1 = this.add.image(-400, -400, "strains_1");

      // Accessories 2
      var acc2_1 = this.add.image(-400, -400, "acc2_1_1");
      var acc2_2 = this.add.image(-400, -400, "acc2_2_1");
      var acc2_3 = this.add.image(-400, -400, "acc2_3_1");

      // Accessories 3
      var acc3_1 = this.add.image(-400, -400, "acc3_1");
      var acc3_2 = this.add.image(-400, -400, "acc3_2");

      // Eyes
      var eye1_1 = this.add.image(-400, -400, "eye1_1");
      var eye1_2 = this.add.image(-400, -400, "eye1_2");

      // Eyebrows
      var eyebrow_1 = this.add.image(-400, -400, "eyebrow_1");
      var eyebrow_2 = this.add.image(-400, -400, "eyebrow_2");
      var eyebrow_3 = this.add.image(-400, -400, "eyebrow_3");
      var eyebrow_4 = this.add.image(-400, -400, "eyebrow_4");
      var eyebrow_5 = this.add.image(-400, -400, "eyebrow_5");
      var eyebrow_6 = this.add.image(-400, -400, "eyebrow_6");
      var eyebrow_7 = this.add.image(-400, -400, "eyebrow_7");
      var eyebrow_8 = this.add.image(-400, -400, "eyebrow_8");
      var eyebrow_9 = this.add.image(-400, -400, "eyebrow_9");
      var eyebrow_10 = this.add.image(-400, -400, "eyebrow_10");
      var eyebrow_11 = this.add.image(-400, -400, "eyebrow_11");

      // Backgrounds
      var background_0 = this.add.image(-900, -1200, "background_0");
      var background_1 = this.add.image(-900, -1200, "background_1");
      var background_2 = this.add.image(-900, -1200, "background_2");
      var background_3 = this.add.image(-900, -1200, "background_3");

      // Noses
      var nose_1 = this.add.image(-400, -400, "nose_1");
      var nose_2 = this.add.image(-400, -400, "nose_2");
      var nose_3 = this.add.image(-400, -400, "nose_3");
      var nose_4 = this.add.image(-400, -400, "nose_4");
      var nose_5 = this.add.image(-400, -400, "nose_5");
      var nose_6 = this.add.image(-400, -400, "nose_6");
      var nose_7 = this.add.image(-400, -400, "nose_7");
      var nose_8 = this.add.image(-400, -400, "nose_8");
      var nose_9 = this.add.image(-400, -400, "nose_9");
      var nose_10 = this.add.image(-400, -400, "nose_10");
      var nose_11 = this.add.image(-400, -400, "nose_11");

      // Mouths
      var mouth_1 = this.add.image(-400, -400, "mouth_1");
      var mouth_2 = this.add.image(-400, -400, "mouth_2");
      var mouth_3 = this.add.image(-400, -400, "mouth_3");
      var mouth_4 = this.add.image(-400, -400, "mouth_4");
      var mouth_5 = this.add.image(-400, -400, "mouth_5");
      var mouth_6 = this.add.image(-400, -400, "mouth_6");
      var mouth_7 = this.add.image(-400, -400, "mouth_7");
      var mouth_8 = this.add.image(-400, -400, "mouth_8");
      var mouth_9 = this.add.image(-400, -400, "mouth_9");
      var mouth_10 = this.add.image(-400, -400, "mouth_10");
      var mouth_11 = this.add.image(-400, -400, "mouth_11");

      // Ears
      var ear_1 = this.add.image(-400, -400, "ear_1");
      var ear_2 = this.add.image(-400, -400, "ear_2");

      // Frame
      var frameout = this.add.image(-400, -400, "frame").setOrigin(0);
      frameout.setDepth(16);

      // Icon Outline
      var iconoutline = this.add.image(-400, -400, "icon_outline");
      iconoutline.setDepth(40);

      // Iconos
      var cur_icon = 0;

      // Default Sets

      layer1.add([background_1.setPosition(0, 0)]);
      layer7.add([eye1_1.setPosition(0, 0)]);
      layer8.add([eyebrow_1.setPosition(0, 0)]);
      layer5.add([nose_1.setPosition(0, 0)]);
      layer5.add([pants1.setPosition(0, 0)]);
      layer5.add([mouth_1.setPosition(0, 0)]);
      layer3.add([backhair1.setPosition(0, 0)]);
      layer9.add([shirt1.setPosition(0, 0)]);
      layer12.add([hair1.setPosition(0, 0)]);
      this.data.set('val3', 1);
      this.data.set('val4', 1);
      this.data.set('val5', 1);
      this.data.set('val7', 1);
      this.data.set('val11', 1);
      this.data.set('val11_1', 1);
      this.data.set('val12', 1);
      this.data.set('val13', 1);
      this.data.set('val15', 1);
      this.data.set('val16', 1);
      this.data.set('val17', 1);
      this.data.set('shirt_var1', 1);
      this.data.set('pants_var1', 1);

      // Default Y Pos for Icon Clothes

      var itemypos = this.game.renderer.height * 0.81;
      this.init_y = this.game.renderer.height * 0.81;

      // Slot Icono 1
      var dress_slot = this.add.image(75, this.game.renderer.height * 0.72, 'dress_icon1');
      dress_slot.setInteractive();
      dress_slot.setDepth(18);
      dress_slot.on('pointerdown', function () {
        _this.assetdestroy.emit('destroy');
        iconoutline.setPosition(-200 + 118 * 12, 0);

        // ACC3 (2)
        layer2.removeInteractive();
        // BackHair (3)
        layer3.removeInteractive();
        // Doll (4)

        // Pants (5)
        layer5.removeInteractive();
        // Skirt (6)
        layer6.removeInteractive();
        // Eyes (7)
        layer7.removeInteractive();
        // Cejas (8)
        layer8.removeInteractive();
        // Dress - Top - Shirt (9)

        // Hairs (10)
        layer10.removeInteractive();
        // ACC1 (11)
        layer11.removeInteractive();
        // ACC2 (12)
        layer12.removeInteractive();

        // if(this.data.get('val1') != 0){
        // layer9.setInteractive();
        // this.input.setDraggable(layer9);
        // }else if(this.data.get('val1') === 0){
        // layer9.removeInteractive();
        // }

        // Tap Sound
        tap4.play();
        up_arrow.setVisible(false);
        down_arrow.setVisible(false);

        // Casilla 1 -- Vestidos --
        var dress = _this.add.group();
        dress.createMultiple({
          key: 'dresses',
          frame: [0, 1, 2],
          repeat: -1
        });
        _this.dress = dress;
        dress.setDepth(11);
        var dress_qty = 0;
        var dress_pick = [dress1, dress2, dress3];
        layer16_qty = dress_pick.length;
        layer16_y_cap = Number(Math.floor(dress_pick.length / 5));
        layer16.setVisible(true);
        layer16.y = 0;
        tap4.play();
        itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val1') - 1) / 5, 99));
        frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val1'), 1) + 130 * Math.max(_this.data.get('val1') - (1 + 5 * Math.floor(Math.min((_this.data.get('val1') - 1) / 5, 99))), 0), itemypos);
        dress.getChildren().forEach(function (child) {
          layer16.add(child);
          child.setInteractive();
          dress_qty++;
          child.id = dress_qty;

          // Trigger
          child.on('pointerdown', function () {
            tap2.play();

            // Remove all Images
            _this.data.set('val1', 0);
            layer10.remove([dress1.setPosition(-800, -400), dress2.setPosition(-800, -400), dress3.setPosition(-800, -400)]);

            // If not selected before, add image
            if (_this.data.get('dress' + child.id) === 0) {
              var i = 0;
              dress.getChildren().forEach(function (child) {
                i++;
                _this.data.set('dress' + i, 0);
              });
              var child_id = Number(child.id - 1);
              layer10.setPosition(layerxpos, layerypos);
              layer10.add([dress_pick[child_id].setPosition(0, 0)]);
              _this.data.set('val1', child.id);
              _this.data.set('dress' + child.id, 1);
              frameout.setVisible(true);
            }

            // If selected before, remove image 
            else if (_this.data.get('dress' + child.id) === 1) {
              _this.data.set('dress' + child.id, 0);
              frameout.setVisible(false);
            }
            itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val1') - 1) / 5, 99));
            frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val1'), 1) + 130 * Math.max(_this.data.get('val1') - (1 + 5 * Math.floor(Math.min((_this.data.get('val1') - 1) / 5, 99))), 0), itemypos + layer16.y);
          });
        });
        Phaser.Actions.GridAlign(dress.getChildren(), {
          width: 5,
          height: 5,
          cellWidth: 130,
          x: 54,
          y: _this.game.renderer.height * 0.81
        });
      });
      // dress.getChildren().forEach(child => {
      //     layer16.add(child);
      // });

      // Phaser.Actions.GridAlign(dress.getChildren(), {
      // width: 5,
      // height: 5,
      // cellWidth: 130,
      // x: 54,
      // y: itemypos
      // });

      // frameout.setPosition(-170 + (224 * Math.min(this.data.get('val1'),1)) + 130 * Math.max(this.data.get('val1')-1,0), itemypos);

      // // Vestido 1
      // dress_gph[0].setInteractive();
      // dress_gph[0].on('pointerdown',()=>{

      // layer9.setInteractive();
      // this.input.setDraggable(layer9);
      // tap2.play();

      // layer9.remove([
      // dress2.setPosition(-400,-400),
      // dress3.setPosition(-400,-400)
      // ])
      // layer9.remove([ 
      // shirt1.setPosition(-400,-400),
      // shirt2.setPosition(-400,-400),
      // shirt3.setPosition(-400,-400),
      // shirt4.setPosition(-400,-400),
      // ])

      // // Current Frame
      // this.data.set('val1', 1);
      // this.data.set('val5', 0);

      // // Checker
      // if(this.data.get('dress1') === 0 ){

      // layer9.setPosition(layerxpos, layerypos);
      // layer9.add([
      // dress1.setPosition(0,0)
      // ])
      // this.data.set('dress1', 1);
      // this.data.set('dress2', 0);
      // this.data.set('dress3', 0);
      // this.data.set('shirt1', 0);
      // this.data.set('shirt2', 0);
      // this.data.set('shirt3', 0);
      // this.data.set('shirt4', 0);

      // }else if(this.data.get('dress1') === 1){

      // layer9.removeInteractive();
      // layer9.remove([
      // dress1.setPosition(-400,-400)
      // ])

      // this.data.set('val1', 0);
      // this.data.set('dress1', 0); 
      // }
      // // Frame Position
      // frameout.setPosition(-170 + (224 * Math.min(this.data.get('val1'),1)) + 130 * Math.max(this.data.get('val1')-1,0), itemypos);
      // })

      // // Vestido 2
      // dress_gph[1].setInteractive();
      // dress_gph[1].on('pointerdown',()=>{

      // layer9.setInteractive();
      // this.input.setDraggable(layer9);
      // tap2.play();

      // // Adding Clothes
      // layer9.remove([
      // dress1.setPosition(-400,-400),
      // dress3.setPosition(-400,-400)
      // ])
      // layer9.remove([ 
      // shirt1.setPosition(-400,-400),
      // shirt2.setPosition(-400,-400),
      // shirt3.setPosition(-400,-400),
      // shirt4.setPosition(-400,-400),
      // ])

      // // Current Frame
      // this.data.set('val1', 2);
      // this.data.set('val5', 0);

      // // Checker
      // if(this.data.get('dress2') === 0 ){

      // layer9.setPosition(layerxpos, layerypos);
      // layer9.add([
      // dress2.setPosition(0,0)
      // ])
      // this.data.set('dress1', 0);
      // this.data.set('dress2', 1);  
      // this.data.set('dress3', 0);
      // this.data.set('shirt1', 0);
      // this.data.set('shirt2', 0);
      // this.data.set('shirt3', 0);
      // this.data.set('shirt4', 0);

      // }else if(this.data.get('dress2') === 1){
      // layer9.removeInteractive();
      // layer9.remove([
      // dress2.setPosition(-400,-400)
      // ])
      // this.data.set('val1', 0);
      // this.data.set('dress2', 0); 
      // }

      // // Frame Position
      // frameout.setPosition(-170 + (224 * Math.min(this.data.get('val1'),1)) + 130 * Math.max(this.data.get('val1')-1,0), itemypos);

      // })

      // // Vestido 3
      // dress_gph[2].setInteractive();
      // dress_gph[2].on('pointerdown',()=>{

      // layer9.setInteractive();
      // this.input.setDraggable(layer9);
      // tap2.play();

      // layer9.remove([
      // dress1.setPosition(-400,-400),
      // dress2.setPosition(-400,-400),
      // ])
      // layer9.remove([ 
      // shirt1.setPosition(-400,-400),
      // shirt2.setPosition(-400,-400),
      // shirt3.setPosition(-400,-400),
      // shirt4.setPosition(-400,-400),
      // ])

      // // Current Cloth
      // this.data.set('val1', 3);
      // this.data.set('val5', 0);

      // // Checker
      // if(this.data.get('dress3') === 0 ){

      // layer9.setPosition(layerxpos, layerypos);
      // layer9.add([
      // dress3.setPosition(0,0)
      // ])
      // this.data.set('dress1', 0);
      // this.data.set('dress2', 0);  
      // this.data.set('dress3', 1);
      // this.data.set('shirt1', 0);
      // this.data.set('shirt2', 0);
      // this.data.set('shirt3', 0);
      // this.data.set('shirt4', 0);

      // }else if(this.data.get('dress3') === 1){
      // layer9.removeInteractive();
      // layer9.remove([
      // dress3.setPosition(-400,-400)
      // ])
      // this.data.set('val1', 0);
      // this.data.set('dress3', 0); 
      // }

      // // Frame Position
      // frameout.setPosition(-170 + (224 * Math.min(this.data.get('val1'),1)) + 130 * Math.max(this.data.get('val1')-1,0), itemypos);
      // })

      // Slot Icono 2
      var top_slot = this.add.image(75 * 2 + 20, this.game.renderer.height * 0.72, 'dress_icon2');
      top_slot.setInteractive();
      top_slot.setDepth(12);
      top_slot.on('pointerdown', function () {
        _this.assetdestroy.emit('destroy');
        iconoutline.setPosition(-200 + 118 * 2, 0);

        // Remove Interactivity
        // Background (1)

        // ACC3 (2)
        layer2.removeInteractive();
        // BackHair (3)
        layer3.removeInteractive();
        // Doll (4)

        // Pants (5)
        layer5.removeInteractive();
        // Skirt (6)
        layer6.removeInteractive();
        // Eyes (7)
        layer7.removeInteractive();
        // Cejas (8)
        layer8.removeInteractive();
        // Dress - Top - Shirt (9)

        // Hairs (10)
        layer10.removeInteractive();
        // ACC1 (11)
        layer11.removeInteractive();
        // ACC2 (12)
        layer12.removeInteractive();
        tap4.play();
        up_arrow.setVisible(false);
        down_arrow.setVisible(false);
        layer16.setVisible(true);
        layer16.y = 0;
        // Casilla 2 -- TOPS --

        var tops = _this.add.group();
        tops.createMultiple({
          key: 'faceacc',
          frame: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
          repeat: -1
        });
        _this.tops = tops;
        tops.setDepth(11);
        // let top_gph = this.tops.getChildren();

        var top_qty = 0;
        var top_pick = [top1, top2, top3, top4, top5, top6, top7, top8, top9, top10, top11, top12, top13, top14, top15];
        layer16_qty = top_pick.length;
        layer16_y_cap = Number(Math.floor(top_pick.length / 6));
        itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val2') - 1) / 5, 99));
        frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val2'), 1) + 130 * Math.max(_this.data.get('val2') - (1 + 5 * Math.floor(Math.min((_this.data.get('val2') - 1) / 5, 99))), 0), itemypos);
        frameout.setVisible(true);
        tops.getChildren().forEach(function (child) {
          layer16.add(child);
          child.setInteractive();
          top_qty++;
          child.id = top_qty;
          child.on('pointerdown', function () {
            tap2.play();
            _this.data.set('val2', 0);
            layer4.remove([top1.setPosition(-400, -400), top2.setPosition(-400, -400), top3.setPosition(-400, -400), top4.setPosition(-400, -400), top5.setPosition(-400, -400), top6.setPosition(-400, -400), top7.setPosition(-400, -400), top8.setPosition(-400, -400), top9.setPosition(-400, -400), top10.setPosition(-400, -400), top11.setPosition(-400, -400), top12.setPosition(-400, -400), top13.setPosition(-400, -400), top14.setPosition(-400, -400), top15.setPosition(-400, -400)]);
            if (_this.data.get('top' + child.id) === 0) {
              var i = 0;
              tops.getChildren().forEach(function (child) {
                i++;
                _this.data.set('top' + i, 0);
              });
              var child_id = Number(child.id - 1);
              layer4.setPosition(layerxpos, layerypos);
              layer4.add([top_pick[child_id].setPosition(0, 0)]);
              _this.data.set('val2', child.id);
              _this.data.set('top' + child.id, 1);
              frameout.setVisible(true);
            } else if (_this.data.get('top' + child.id) === 1) {
              _this.data.set('top' + child.id, 0);
              frameout.setVisible(false);
            }
            itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val2') - 1) / 5, 99));
            frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val2'), 1) + 130 * Math.max(_this.data.get('val2') - (1 + 5 * Math.floor(Math.min((_this.data.get('val2') - 1) / 5, 99))), 0), itemypos + layer16.y);
          });
        });
        Phaser.Actions.GridAlign(tops.getChildren(), {
          width: 5,
          height: 5,
          cellWidth: 130,
          x: 54,
          y: _this.game.renderer.height * 0.81
        });
      });

      // Slot Icono 3
      var hair_slot = this.add.image(75 * 3 + 40, this.game.renderer.height * 0.72, 'dress_icon3');
      hair_slot.setInteractive();
      hair_slot.setDepth(10);
      hair_slot.on('pointerdown', function () {
        _this.assetdestroy.emit('destroy');
        iconoutline.setPosition(-200 + 118 * 6, 0);

        // Remove Interactivity
        // Background (1)

        // ACC3 (2)
        layer2.removeInteractive();
        // BackHair (3)
        layer3.removeInteractive();
        // Doll (4)

        // Pants (5)
        layer5.removeInteractive();
        // Skirt (6)
        layer6.removeInteractive();
        // Eyes (7)
        layer7.removeInteractive();
        // Cejas (8)
        layer8.removeInteractive();
        // Dress - Top - Shirt (9)
        layer9.removeInteractive();
        // Hairs (10)

        // ACC1 (11)
        layer11.removeInteractive();
        // ACC2 (12)
        layer12.removeInteractive();
        tap4.play();
        up_arrow.setVisible(false);
        down_arrow.setVisible(false);

        // Casilla 3 -- Cabellos --
        var hairs = _this.add.group();
        hairs.createMultiple({
          key: 'hairs',
          frame: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          repeat: -1
        });
        _this.hairs = hairs;
        hairs.setDepth(11);
        var hairs_qty = 0;
        var hairs_pick = [hair1, hair2, hair3, hair4, hair5, hair6, hair7, hair8, hair9, hair10];
        layer16_qty = hairs_pick.length;
        layer16_y_cap = Number(Math.floor(hairs_pick.length / 6));
        layer16.setVisible(true);
        layer16.y = 0;
        tap4.play();
        itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val3') - 1) / 5, 99));
        frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val3'), 1) + 130 * Math.max(_this.data.get('val3') - (1 + 5 * Math.floor(Math.min((_this.data.get('val3') - 1) / 5, 99))), 0), itemypos);
        hairs.getChildren().forEach(function (child) {
          layer16.add(child);
          child.setInteractive();
          hairs_qty++;
          child.id = hairs_qty;

          // Trigger
          child.on('pointerdown', function () {
            tap2.play();

            // Remove all Images
            _this.data.set('val3', 0);
            layer12.remove([hair1.setPosition(-800, -400), hair2.setPosition(-800, -400), hair3.setPosition(-800, -400), hair4.setPosition(-800, -400), hair5.setPosition(-800, -400), hair6.setPosition(-800, -400), hair7.setPosition(-800, -400), hair8.setPosition(-800, -400), hair9.setPosition(-800, -400), hair10.setPosition(-800, -400)]);

            // If not selected before, add image
            if (_this.data.get('hair' + child.id) === 0) {
              var i = 0;
              hairs.getChildren().forEach(function (child) {
                i++;
                _this.data.set('hair' + i, 0);
              });
              var child_id = Number(child.id - 1);
              layer12.setPosition(layerxpos, layerypos);
              layer12.add([hairs_pick[child_id].setPosition(0, 0)]);
              _this.data.set('val3', child.id);
              _this.data.set('hair' + child.id, 1);
              frameout.setVisible(true);
            }

            // If selected before, remove image 
            else if (_this.data.get('hair' + child.id) === 1) {
              var _i = 0;
              hairs.getChildren().forEach(function (child) {
                _i++;
                _this.data.set('hair' + _i, 0);
              });
              layer12.setPosition(layerxpos, layerypos);
              layer12.add([hair1.setPosition(0, 0)]);
              _this.data.set('val3', 1);
              _this.data.set('hair1', 1);
              // this.data.set('hair' + child.id, 0);
              // frameout.setVisible(false);
            }

            // Icon Outline new Position
            itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val3') - 1) / 5, 99));
            frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val3'), 1) + 130 * Math.max(_this.data.get('val3') - (1 + 5 * Math.floor(Math.min((_this.data.get('val3') - 1) / 5, 99))), 0), itemypos + layer16.y);
          });
        });
        Phaser.Actions.GridAlign(hairs.getChildren(), {
          width: 5,
          height: 5,
          cellWidth: 130,
          x: 54,
          y: _this.game.renderer.height * 0.81
        });
      });

      // Slot Icono 4
      var backhair_slot = this.add.image(75 * 4 + 60, this.game.renderer.height * 0.72, 'dress_icon4');
      backhair_slot.setInteractive();
      backhair_slot.setDepth(10);
      backhair_slot.on('pointerdown', function () {
        _this.assetdestroy.emit('destroy');
        iconoutline.setPosition(-200 + 118 * 7, 0);

        // ACC3 (2)
        layer2.removeInteractive();
        // Pants (5)
        layer5.removeInteractive();
        // Skirt (6)
        layer6.removeInteractive();
        // Eyes (7)
        layer7.removeInteractive();
        // Cejas (8)
        layer8.removeInteractive();
        // Dress - Top - Shirt (9)
        layer9.removeInteractive();
        // Hairs (10)
        layer10.removeInteractive();
        // ACC1 (11)
        layer11.removeInteractive();
        // ACC2 (12)
        layer12.removeInteractive();
        tap4.play();
        up_arrow.setVisible(false);
        down_arrow.setVisible(false);

        // Casilla 4 -- Cabello Atras --
        var backhairs = _this.add.group();
        backhairs.createMultiple({
          key: 'backhairs',
          frame: [0, 1, 2, 3, 4, 5, 6],
          repeat: -1
        });
        _this.backhairs = backhairs;
        backhairs.setDepth(11);
        var backhairs_qty = 0;
        var backhairs_pick = [backhair1, backhair2, backhair3, backhair4, backhair5, backhair6, backhair7];
        layer16_qty = backhairs_pick.length;
        layer16_y_cap = Number(Math.floor(backhairs_pick.length / 6));
        layer16.setVisible(true);
        layer16.y = 0;
        tap4.play();
        itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val4') - 1) / 5, 99));
        frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val4'), 1) + 130 * Math.max(_this.data.get('val4') - (1 + 5 * Math.floor(Math.min((_this.data.get('val4') - 1) / 5, 99))), 0), itemypos);
        backhairs.getChildren().forEach(function (child) {
          layer16.add(child);
          child.setInteractive();
          backhairs_qty++;
          child.id = backhairs_qty;

          // Trigger
          child.on('pointerdown', function () {
            tap2.play();

            // Remove all Images
            _this.data.set('val4', 0);
            layer3.remove([backhair1.setPosition(-800, -400), backhair2.setPosition(-800, -400), backhair3.setPosition(-800, -400), backhair4.setPosition(-800, -400), backhair5.setPosition(-800, -400), backhair6.setPosition(-800, -400), backhair7.setPosition(-800, -400)]);

            // If not selected before, add image
            if (_this.data.get('backhair' + child.id) === 0) {
              var i = 0;
              backhairs.getChildren().forEach(function (child) {
                i++;
                _this.data.set('backhair' + i, 0);
              });
              var child_id = Number(child.id - 1);
              layer3.setPosition(layerxpos, layerypos);
              layer3.add([backhairs_pick[child_id].setPosition(0, 0)]);
              _this.data.set('val4', child.id);
              _this.data.set('backhair' + child.id, 1);
              frameout.setVisible(true);
            }

            // If selected before, remove image 
            else if (_this.data.get('backhair' + child.id) === 1) {
              var _i2 = 0;
              backhairs.getChildren().forEach(function (child) {
                _i2++;
                _this.data.set('backhair' + _i2, 0);
              });
              layer3.setPosition(layerxpos, layerypos);
              layer3.add([backhair1.setPosition(0, 0)]);
              _this.data.set('val4', 1);
              _this.data.set('backhair1', 1);

              // this.data.set('backhair' + child.id, 0);
              // frameout.setVisible(false);
            }

            // Icon Outline new Position
            itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val4') - 1) / 5, 99));
            frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val4'), 1) + 130 * Math.max(_this.data.get('val4') - (1 + 5 * Math.floor(Math.min((_this.data.get('val4') - 1) / 5, 99))), 0), itemypos + layer16.y);
          });
          Phaser.Actions.GridAlign(backhairs.getChildren(), {
            width: 5,
            height: 5,
            cellWidth: 130,
            x: 54,
            y: _this.game.renderer.height * 0.81
          });
        });
      });

      // Slot Icono 5
      var shirt_slot = this.add.image(75 * 5 + 80, this.game.renderer.height * 0.72, 'dress_icon5');
      shirt_slot.setInteractive();
      shirt_slot.setDepth(10);
      shirt_slot.on('pointerdown', function () {
        _this.assetdestroy.emit('destroy');
        iconoutline.setPosition(-200 + 118 * 9, 0);

        // Remove Interactivity
        // Background (1)

        // ACC3 (2)
        layer2.removeInteractive();
        // BackHair (3)
        layer3.removeInteractive();
        // Doll (4)

        // Pants (5)
        layer5.removeInteractive();
        // Skirt (6)
        layer6.removeInteractive();
        // Eyes (7)
        layer7.removeInteractive();
        // Cejas (8)
        layer8.removeInteractive();
        // Dress - Top - Shirt (9)

        // Hairs (10)
        layer10.removeInteractive();
        // ACC1 (11)
        layer11.removeInteractive();
        // ACC2 (12)
        layer12.removeInteractive();
        tap4.play();
        up_arrow.setVisible(true);
        down_arrow.setVisible(true);

        // Casilla 5 -- Camisas --
        var shirts = _this.add.group();
        shirts.createMultiple({
          key: 'shirts',
          frame: [0, 1, 2, 3],
          repeat: -1
        });
        _this.shirts = shirts;
        shirts.setDepth(11);
        var shirts_qty = 0;
        var shirts_pick = [shirt1, shirt2, shirt3, shirt4];
        layer16_qty = shirts_pick.length;
        layer16_y_cap = Number(Math.floor(shirts_pick.length / 5));
        itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val5') - 1) / 5, 99));
        frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val5'), 1) + 130 * Math.max(_this.data.get('val5') - (1 + 5 * Math.floor(Math.min((_this.data.get('val5') - 1) / 5, 99))), 0), itemypos);
        frameout.setVisible(true);
        _this.eventEmitter = new Phaser.Events.EventEmitter();
        _this.eventEmitter.on('shirt_var', function () {
          _this.data.set('shirt_var1', 0);
          _this.data.set('shirt_var2', 0);
          _this.data.set('shirt_var3', 0);
          _this.data.set('shirt_var4', 0);
          var color_shirt = _this.add.group({
            key: 'white_dot',
            frameQuantity: _this.var_qty
          });
          _this.color_shirt = color_shirt;
          Phaser.Actions.GridAlign(color_shirt.getChildren(), {
            width: 10,
            height: 10,
            cellWidth: 64,
            x: color_panel.x + 26,
            y: color_panel.y + 7
          });
          color_shirt.getChildren().forEach(function (child) {
            layer20.add(child);
          });
        });

        // Variacion de Color Shirt 1
        _this.eventEmitter2 = new Phaser.Events.EventEmitter();
        _this.eventEmitter2.on('shirt_var2', function () {
          if (_this.data.get('val5') === 1) {
            _this.var_qty = 2;
            _this.eventEmitter.emit('shirt_var');
            _this.data.set('shirt_var1', 1 + Math.max(last_shirt1, 0));
            var colorshirt_gph = _this.color_shirt.getChildren();
            colorshirt_gph[0].setTint(0x522733);
            colorshirt_gph[0].setInteractive();
            colorshirt_gph[0].on('pointerdown', function () {
              shirt1.setTexture('shirt_1_1');
              _this.data.set('shirt_var1', 1);
              _this.data.set('shirt_var2', 0);
              _this.data.set('shirt_var3', 0);
              _this.data.set('shirt_var4', 0);
              last_shirt1 = 0;
            });
            colorshirt_gph[1].setTint(0x2F161D);
            colorshirt_gph[1].setInteractive();
            colorshirt_gph[1].on('pointerdown', function () {
              shirt1.setTexture('shirt_1_2');
              _this.data.set('shirt_var1', 2);
              _this.data.set('shirt_var2', 0);
              _this.data.set('shirt_var3', 0);
              _this.data.set('shirt_var4', 0);
              last_shirt1 = 1;
            });
          }

          // Variacion de Color Shirt 2
          if (_this.data.get('val5') === 2) {
            _this.var_qty = 2;
            _this.eventEmitter.emit('shirt_var');
            _this.data.set('shirt_var2', 1 + Math.max(last_shirt2, 0));
            var _colorshirt_gph = _this.color_shirt.getChildren();
            _colorshirt_gph[0].setTint(0x290E16);
            _colorshirt_gph[0].setInteractive();
            _colorshirt_gph[0].on('pointerdown', function () {
              shirt2.setTexture('shirt_2_1');
              _this.data.set('shirt_var1', 0);
              _this.data.set('shirt_var2', 1);
              _this.data.set('shirt_var3', 0);
              _this.data.set('shirt_var4', 0);
              last_shirt2 = 0;
            });
            _colorshirt_gph[1].setTint(0xF2EBE2);
            _colorshirt_gph[1].setInteractive();
            _colorshirt_gph[1].on('pointerdown', function () {
              shirt2.setTexture('shirt_2_2');
              _this.data.set('shirt_var1', 0);
              _this.data.set('shirt_var2', 2);
              _this.data.set('shirt_var3', 0);
              _this.data.set('shirt_var4', 0);
              last_shirt2 = 1;
            });
          }

          // Variacion de Color Shirt 3
          if (_this.data.get('val5') === 3) {
            _this.var_qty = 3;
            _this.eventEmitter.emit('shirt_var');
            _this.data.set('shirt_var3', 1 + Math.max(last_shirt3, 0));
            var _colorshirt_gph2 = _this.color_shirt.getChildren();
            _colorshirt_gph2[0].setTint(0x290E16);
            _colorshirt_gph2[0].setInteractive();
            _colorshirt_gph2[0].on('pointerdown', function () {
              shirt3.setTexture('shirt_3_1');
              _this.data.set('shirt_var1', 0);
              _this.data.set('shirt_var2', 0);
              _this.data.set('shirt_var3', 1);
              _this.data.set('shirt_var4', 0);
              last_shirt3 = 0;
            });
            _colorshirt_gph2[1].setTint(0x5B2D2D);
            _colorshirt_gph2[1].setInteractive();
            _colorshirt_gph2[1].on('pointerdown', function () {
              shirt3.setTexture('shirt_3_2');
              _this.data.set('shirt_var1', 0);
              _this.data.set('shirt_var2', 0);
              _this.data.set('shirt_var3', 2);
              _this.data.set('shirt_var4', 0);
              last_shirt3 = 1;
            });
            _colorshirt_gph2[2].setTint(0xE0B3AA);
            _colorshirt_gph2[2].setInteractive();
            _colorshirt_gph2[2].on('pointerdown', function () {
              shirt3.setTexture('shirt_3_3');
              _this.data.set('shirt_var1', 0);
              _this.data.set('shirt_var2', 0);
              _this.data.set('shirt_var3', 3);
              _this.data.set('shirt_var4', 0);
              last_shirt3 = 2;
            });
          }

          // Variacion de Color Shirt 4
          if (_this.data.get('val5') === 4) {
            _this.var_qty = 4;
            _this.eventEmitter.emit('shirt_var');
            _this.data.set('shirt_var4', 1 + Math.max(last_shirt4, 0));
            var _colorshirt_gph3 = _this.color_shirt.getChildren();
            _colorshirt_gph3[0].setTint(0x986C71);
            _colorshirt_gph3[0].setInteractive();
            _colorshirt_gph3[0].on('pointerdown', function () {
              shirt4.setTexture('shirt_4_1');
              _this.data.set('shirt_var1', 0);
              _this.data.set('shirt_var2', 0);
              _this.data.set('shirt_var3', 0);
              _this.data.set('shirt_var4', 1);
              last_shirt4 = 0;
            });
            _colorshirt_gph3[1].setTint(0x99202C);
            _colorshirt_gph3[1].setInteractive();
            _colorshirt_gph3[1].on('pointerdown', function () {
              shirt4.setTexture('shirt_4_2');
              _this.data.set('shirt_var1', 0);
              _this.data.set('shirt_var2', 0);
              _this.data.set('shirt_var3', 0);
              _this.data.set('shirt_var4', 2);
              last_shirt4 = 1;
            });
            _colorshirt_gph3[2].setTint(0xDB6A3B);
            _colorshirt_gph3[2].setInteractive();
            _colorshirt_gph3[2].on('pointerdown', function () {
              shirt4.setTexture('shirt_4_3');
              _this.data.set('shirt_var1', 0);
              _this.data.set('shirt_var2', 0);
              _this.data.set('shirt_var3', 0);
              _this.data.set('shirt_var4', 3);
              last_shirt4 = 2;
            });
            _colorshirt_gph3[3].setTint(0xDFB2A9);
            _colorshirt_gph3[3].setInteractive();
            _colorshirt_gph3[3].on('pointerdown', function () {
              shirt4.setTexture('shirt_4_4');
              _this.data.set('shirt_var1', 0);
              _this.data.set('shirt_var2', 0);
              _this.data.set('shirt_var3', 0);
              _this.data.set('shirt_var4', 4);
              last_shirt4 = 3;
            });
          }
        });
        _this.eventEmitter2.emit('shirt_var2');
        shirts.getChildren().forEach(function (child) {
          layer16.add(child);
          child.setInteractive();
          shirts_qty++;
          child.id = shirts_qty;
          child.on('pointerdown', function () {
            _this.color_shirt.destroy(true);
            tap2.play();
            _this.data.set('val5', 0);
            layer9.remove([shirt1.setPosition(-800, -400), shirt2.setPosition(-800, -400), shirt3.setPosition(-800, -400), shirt4.setPosition(-800, -400)]);
            if (_this.data.get('shirt' + child.id) === 0) {
              var i = 0;
              shirts.getChildren().forEach(function (child) {
                i++;
                _this.data.set('shirt' + i, 0);
              });
              var child_id = Number(child.id - 1);
              layer9.setPosition(layerxpos, layerypos);
              layer9.add([shirts_pick[child_id].setPosition(0, 0)]);
              _this.data.set('val5', child.id);
              _this.data.set('shirt' + child.id, 1);
              frameout.setVisible(true);
            } else if (_this.data.get('shirt' + child.id) === 1) {
              var _i3 = 0;
              shirts.getChildren().forEach(function (child) {
                _i3++;
                _this.data.set('shirt' + _i3, 0);
              });
              layer9.setPosition(layerxpos, layerypos);
              layer9.add([shirt1.setPosition(0, 0)]);
              _this.data.set('val5', 1);
              _this.data.set('shirt1', 1);

              // this.data.set('shirt' + child.id, 0);
              // frameout.setVisible(false);
            }
            _this.eventEmitter2.emit('shirt_var2');
            itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val5') - 1) / 5, 99));
            frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val5'), 1) + 130 * Math.max(_this.data.get('val5') - (1 + 5 * Math.floor(Math.min((_this.data.get('val5') - 1) / 5, 99))), 0), itemypos + layer16.y);
          });
        });
        Phaser.Actions.GridAlign(shirts.getChildren(), {
          width: 5,
          height: 5,
          cellWidth: 130,
          x: 54,
          y: _this.game.renderer.height * 0.81
        });
      });

      // Slot Icono 6
      var skirt_slot = this.add.image(75 * 6 + 100, this.game.renderer.height * 0.72, 'dress_icon6');
      skirt_slot.setInteractive();
      skirt_slot.setDepth(10);
      skirt_slot.on('pointerdown', function () {
        _this.assetdestroy.emit('destroy');
        iconoutline.setPosition(-200 + 118 * 10, 0);

        // Remove Interactivity
        // Background (1)

        // ACC3 (2)
        layer2.removeInteractive();
        // BackHair (3)
        layer3.removeInteractive();
        // Doll (4)

        // Pants (5)
        layer5.removeInteractive();
        // Skirt (6)

        // Eyes (7)
        layer7.removeInteractive();
        // Cejas (8)
        layer8.removeInteractive();
        // Dress - Top - Shirt (9)
        layer9.removeInteractive();
        // Hairs (10)
        layer10.removeInteractive();
        // ACC1 (11)
        layer11.removeInteractive();
        // ACC2 (12)
        layer12.removeInteractive();
        tap4.play();
        up_arrow.setVisible(false);
        down_arrow.setVisible(false);

        // Casilla 6 -- Faldas --
        var skirts = _this.add.group();
        skirts.createMultiple({
          key: 'skirts',
          frame: [0, 1, 2],
          repeat: -1
        });
        _this.skirts = skirts;
        skirts.setDepth(11);
        var skirts_qty = 0;
        var skirts_pick = [skirt1, skirt2, skirt3];
        layer16_qty = skirts_pick.length;
        layer16_y_cap = Number(Math.floor(skirts_pick.length / 5));
        layer16.setVisible(true);
        layer16.y = 0;
        tap4.play();
        itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val6') - 1) / 5, 99));
        frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val6'), 1) + 130 * Math.max(_this.data.get('val6') - (1 + 5 * Math.floor(Math.min((_this.data.get('val6') - 1) / 5, 99))), 0), itemypos);
        _this.skirtEmitter = new Phaser.Events.EventEmitter();
        _this.skirtEmitter.on('skirt_var', function () {
          _this.data.set('skirt_var1', 0);
          _this.data.set('skirt_var2', 0);
          _this.data.set('skirt_var3', 0);
          _this.data.set('skirt_var4', 0);
          var color_skirt = _this.add.group({
            key: 'white_dot',
            frameQuantity: _this.var_qty
          });
          _this.color_skirt = color_skirt;
          Phaser.Actions.GridAlign(color_skirt.getChildren(), {
            width: 10,
            height: 10,
            cellWidth: 64,
            x: color_panel.x + 26,
            y: color_panel.y + 7
          });
          color_skirt.getChildren().forEach(function (child) {
            layer20.add(child);
          });
        });

        // Variacion de Color Skirt 1
        _this.skirtEmitter2 = new Phaser.Events.EventEmitter();
        _this.skirtEmitter2.on('skirt_var2', function () {
          if (_this.data.get('val6') === 1) {
            _this.var_qty = 9;
            _this.skirtEmitter.emit('skirt_var');
            _this.data.set('skirt_var1', 1 + Math.max(last_skirt1, 0));
            var colorskirt_gph = _this.color_skirt.getChildren();
            colorskirt_gph[0].setTint(0xE0B3AA);
            colorskirt_gph[0].setInteractive();
            colorskirt_gph[0].on('pointerdown', function () {
              skirt1.setTexture('skirt_1_1');
              _this.data.set('skirt_var1', 1);
              _this.data.set('skirt_var2', 0);
              _this.data.set('skirt_var3', 0);
              last_skirt1 = 0;
            });
            colorskirt_gph[1].setTint(0xDDCDCA);
            colorskirt_gph[1].setInteractive();
            colorskirt_gph[1].on('pointerdown', function () {
              skirt1.setTexture('skirt_1_2');
              _this.data.set('skirt_var1', 2);
              _this.data.set('skirt_var2', 0);
              _this.data.set('skirt_var3', 0);
              last_skirt1 = 1;
            });
            colorskirt_gph[2].setTint(0xDDCDC9);
            colorskirt_gph[2].setInteractive();
            colorskirt_gph[2].on('pointerdown', function () {
              skirt1.setTexture('skirt_1_3');
              _this.data.set('skirt_var1', 3);
              _this.data.set('skirt_var2', 0);
              _this.data.set('skirt_var3', 0);
              last_skirt1 = 2;
            });
            colorskirt_gph[3].setTint(0x3A5177);
            colorskirt_gph[3].setInteractive();
            colorskirt_gph[3].on('pointerdown', function () {
              skirt1.setTexture('skirt_1_4');
              _this.data.set('skirt_var1', 4);
              _this.data.set('skirt_var2', 0);
              _this.data.set('skirt_var3', 0);
              last_skirt1 = 3;
            });
            colorskirt_gph[4].setTint(0xA7140F);
            colorskirt_gph[4].setInteractive();
            colorskirt_gph[4].on('pointerdown', function () {
              skirt1.setTexture('skirt_1_5');
              _this.data.set('skirt_var1', 5);
              _this.data.set('skirt_var2', 0);
              _this.data.set('skirt_var3', 0);
              last_skirt1 = 4;
            });
            colorskirt_gph[5].setTint(0xDC6A3B);
            colorskirt_gph[5].setInteractive();
            colorskirt_gph[5].on('pointerdown', function () {
              skirt1.setTexture('skirt_1_6');
              _this.data.set('skirt_var1', 6);
              _this.data.set('skirt_var2', 0);
              _this.data.set('skirt_var3', 0);
              last_skirt1 = 5;
            });
            colorskirt_gph[6].setTint(0x290D15);
            colorskirt_gph[6].setInteractive();
            colorskirt_gph[6].on('pointerdown', function () {
              skirt1.setTexture('skirt_1_7');
              _this.data.set('skirt_var1', 7);
              _this.data.set('skirt_var2', 0);
              _this.data.set('skirt_var3', 0);
              last_skirt1 = 6;
            });
            colorskirt_gph[7].setTint(0xE1B3AA);
            colorskirt_gph[7].setInteractive();
            colorskirt_gph[7].on('pointerdown', function () {
              skirt1.setTexture('skirt_1_8');
              _this.data.set('skirt_var1', 8);
              _this.data.set('skirt_var2', 0);
              _this.data.set('skirt_var3', 0);
              last_skirt1 = 7;
            });
            colorskirt_gph[8].setTint(0x2A0F17);
            colorskirt_gph[8].setInteractive();
            colorskirt_gph[8].on('pointerdown', function () {
              skirt1.setTexture('skirt_1_9');
              _this.data.set('skirt_var1', 9);
              _this.data.set('skirt_var2', 0);
              _this.data.set('skirt_var3', 0);
              last_skirt1 = 8;
            });
          }

          // Variacion de Color Skirt 2
          if (_this.data.get('val6') === 2) {
            _this.var_qty = 9;
            _this.skirtEmitter.emit('skirt_var');
            _this.data.set('skirt_var2', 1 + Math.max(last_skirt2, 0));
            var _colorskirt_gph = _this.color_skirt.getChildren();
            _colorskirt_gph[0].setTint(0x866261);
            _colorskirt_gph[0].setInteractive();
            _colorskirt_gph[0].on('pointerdown', function () {
              skirt2.setTexture('skirt_2_1');
              _this.data.set('skirt_var1', 0);
              _this.data.set('skirt_var2', 1);
              _this.data.set('skirt_var3', 0);
              last_skirt2 = 0;
            });
            _colorskirt_gph[1].setTint(0xE1B4AA);
            _colorskirt_gph[1].setInteractive();
            _colorskirt_gph[1].on('pointerdown', function () {
              skirt2.setTexture('skirt_2_2');
              _this.data.set('skirt_var1', 0);
              _this.data.set('skirt_var2', 2);
              _this.data.set('skirt_var3', 0);
              last_skirt2 = 1;
            });
            _colorskirt_gph[2].setTint(0x846060);
            _colorskirt_gph[2].setInteractive();
            _colorskirt_gph[2].on('pointerdown', function () {
              skirt2.setTexture('skirt_2_3');
              _this.data.set('skirt_var1', 0);
              _this.data.set('skirt_var2', 3);
              _this.data.set('skirt_var3', 0);
              last_skirt2 = 2;
            });
            _colorskirt_gph[3].setTint(0xDFA397);
            _colorskirt_gph[3].setInteractive();
            _colorskirt_gph[3].on('pointerdown', function () {
              skirt2.setTexture('skirt_2_4');
              _this.data.set('skirt_var1', 0);
              _this.data.set('skirt_var2', 4);
              _this.data.set('skirt_var3', 0);
              last_skirt2 = 3;
            });
            _colorskirt_gph[4].setTint(0xDFB2A9);
            _colorskirt_gph[4].setInteractive();
            _colorskirt_gph[4].on('pointerdown', function () {
              skirt2.setTexture('skirt_2_5');
              _this.data.set('skirt_var1', 0);
              _this.data.set('skirt_var2', 5);
              _this.data.set('skirt_var3', 0);
              last_skirt2 = 4;
            });
            _colorskirt_gph[5].setTint(0x2A0F17);
            _colorskirt_gph[5].setInteractive();
            _colorskirt_gph[5].on('pointerdown', function () {
              skirt2.setTexture('skirt_2_6');
              _this.data.set('skirt_var1', 0);
              _this.data.set('skirt_var2', 6);
              _this.data.set('skirt_var3', 0);
              last_skirt2 = 5;
            });
            _colorskirt_gph[6].setTint(0xAF2822);
            _colorskirt_gph[6].setInteractive();
            _colorskirt_gph[6].on('pointerdown', function () {
              skirt2.setTexture('skirt_2_7');
              _this.data.set('skirt_var1', 0);
              _this.data.set('skirt_var2', 7);
              _this.data.set('skirt_var3', 0);
              last_skirt2 = 6;
            });
            _colorskirt_gph[7].setTint(0xA7140F);
            _colorskirt_gph[7].setInteractive();
            _colorskirt_gph[7].on('pointerdown', function () {
              skirt2.setTexture('skirt_2_8');
              _this.data.set('skirt_var1', 0);
              _this.data.set('skirt_var2', 8);
              _this.data.set('skirt_var3', 0);
              last_skirt2 = 7;
            });
            _colorskirt_gph[8].setTint(0xA7140F);
            _colorskirt_gph[8].setInteractive();
            _colorskirt_gph[8].on('pointerdown', function () {
              skirt2.setTexture('skirt_2_9');
              _this.data.set('skirt_var1', 0);
              _this.data.set('skirt_var2', 9);
              _this.data.set('skirt_var3', 0);
              last_skirt2 = 8;
            });
          }

          // Variacion de Color Skirt 3
          if (_this.data.get('val6') === 3) {
            _this.var_qty = 2;
            _this.skirtEmitter.emit('skirt_var');
            _this.data.set('skirt_var3', 1 + Math.max(last_skirt3, 0));
            var _colorskirt_gph2 = _this.color_skirt.getChildren();
            _colorskirt_gph2[0].setTint(0xE0B3AA);
            _colorskirt_gph2[0].setInteractive();
            _colorskirt_gph2[0].on('pointerdown', function () {
              skirt3.setTexture('skirt_3_1');
              _this.data.set('skirt_var1', 0);
              _this.data.set('skirt_var2', 0);
              _this.data.set('skirt_var3', 1);
              last_skirt3 = 0;
            });
            _colorskirt_gph2[1].setTint(0x290E16);
            _colorskirt_gph2[1].setInteractive();
            _colorskirt_gph2[1].on('pointerdown', function () {
              skirt3.setTexture('skirt_3_2');
              _this.data.set('skirt_var1', 0);
              _this.data.set('skirt_var2', 0);
              _this.data.set('skirt_var3', 2);
              last_skirt3 = 1;
            });
          }
        });
        _this.skirtEmitter2.emit('skirt_var2');
        skirts.getChildren().forEach(function (child) {
          layer16.add(child);
          child.setInteractive();
          skirts_qty++;
          child.id = skirts_qty;

          // Trigger
          child.on('pointerdown', function () {
            tap2.play();
            _this.color_skirt.destroy(true);

            // Remove all Images
            _this.data.set('val6', 0);
            layer5.remove([skirt1.setPosition(-800, -400), skirt2.setPosition(-800, -400), skirt3.setPosition(-800, -400)]);

            // If not selected before, add image
            if (_this.data.get('skirt' + child.id) === 0) {
              var i = 0;
              skirts.getChildren().forEach(function (child) {
                i++;
                _this.data.set('skirt' + i, 0);
              });
              var child_id = Number(child.id - 1);
              layer5.setPosition(layerxpos, layerypos);
              layer5.add([skirts_pick[child_id].setPosition(0, 0)]);
              _this.data.set('val6', child.id);
              _this.data.set('skirt' + child.id, 1);
              frameout.setVisible(true);
            }

            // If selected before, remove image 
            // Nuevo => Hacer que ponga la imagen 1 como default
            else if (_this.data.get('skirt' + child.id) === 1) {
              _this.data.set('skirt' + child.id, 0);
              frameout.setVisible(false);
            }
            _this.skirtEmitter2.emit('skirt_var2');
            // Select Outline new Position
            itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val6') - 1) / 5, 99));
            frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val6'), 1) + 130 * Math.max(_this.data.get('val6') - (1 + 5 * Math.floor(Math.min((_this.data.get('val6') - 1) / 5, 99))), 0), itemypos + layer16.y);
          });
        });
        Phaser.Actions.GridAlign(skirts.getChildren(), {
          width: 5,
          height: 5,
          cellWidth: 130,
          x: 54,
          y: _this.game.renderer.height * 0.81
        });
      });

      // Slot Icono 7
      var pants_slot = this.add.image(75 * 7 + 120, this.game.renderer.height * 0.72, 'dress_icon7');
      pants_slot.setInteractive();
      pants_slot.setDepth(10);
      pants_slot.on('pointerdown', function () {
        _this.assetdestroy.emit('destroy');
        iconoutline.setPosition(-200 + 118 * 11, 0);

        // Remove Interactivity
        // Background (1)

        // ACC3 (2)
        layer2.removeInteractive();
        // BackHair (3)
        layer3.removeInteractive();
        // Doll (4)

        // Pants (5)

        // Skirt (6)
        layer6.removeInteractive();
        // Eyes (7)
        layer7.removeInteractive();
        // Cejas (8)
        layer8.removeInteractive();
        // Dress - Top - Shirt (9)
        layer9.removeInteractive();
        // Hairs (10)
        layer10.removeInteractive();
        // ACC1 (11)
        layer11.removeInteractive();
        // ACC2 (12)
        layer12.removeInteractive();

        // if(this.data.get('val7') != 0){
        // layer5.setInteractive();
        // this.input.setDraggable(layer5);
        // }else if(this.data.get('val7') === 0){
        // layer5.removeInteractive();
        // }

        tap4.play();
        up_arrow.setVisible(true);
        down_arrow.setVisible(true);

        // Casilla 7 -- Pantalones --

        var pants = _this.add.group();
        pants.createMultiple({
          key: 'pants',
          frame: [0, 1, 2, 3],
          repeat: -1
        });
        _this.pants = pants;
        pants.setDepth(11);
        var pants_qty = 0;
        var pants_pick = [pants1, pants2, pants3, pants4];
        layer16_qty = pants_pick.length;
        layer16_y_cap = Number(Math.floor(pants_pick.length / 5));
        layer16.setVisible(true);
        layer16.y = 0;
        tap4.play();
        itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val7') - 1) / 5, 99));
        frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val7'), 1) + 130 * Math.max(_this.data.get('val7') - (1 + 5 * Math.floor(Math.min((_this.data.get('val7') - 1) / 5, 99))), 0), itemypos);
        _this.pantsEmitter = new Phaser.Events.EventEmitter();
        _this.pantsEmitter.on('pants_var', function () {
          _this.data.set('pants_var1', 0);
          _this.data.set('pants_var2', 0);
          _this.data.set('pants_var3', 0);
          _this.data.set('pants_var4', 0);
          var color_pants = _this.add.group({
            key: 'white_dot',
            frameQuantity: _this.var_qty
          });
          _this.color_pants = color_pants;
          Phaser.Actions.GridAlign(color_pants.getChildren(), {
            width: 10,
            height: 10,
            cellWidth: 64,
            x: color_panel.x + 26,
            y: color_panel.y + 7
          });
          color_pants.getChildren().forEach(function (child) {
            layer20.add(child);
          });
        });

        // Variacion de Color Pants 1
        _this.pantsEmitter2 = new Phaser.Events.EventEmitter();
        _this.pantsEmitter2.on('pants_var2', function () {
          if (_this.data.get('val7') === 1) {
            _this.var_qty = 2;
            _this.pantsEmitter.emit('pants_var');
            _this.data.set('pants_var1', 1 + Math.max(last_pants1, 0));
            var colorpants_gph = _this.color_pants.getChildren();
            colorpants_gph[0].setTint(0x522733);
            colorpants_gph[0].setInteractive();
            colorpants_gph[0].on('pointerdown', function () {
              pants1.setTexture('pants_1_1');
              _this.data.set('pants_var1', 1);
              _this.data.set('pants_var2', 0);
              _this.data.set('pants_var3', 0);
              _this.data.set('pants_var4', 0);
              last_pants1 = 0;
            });
            colorpants_gph[1].setTint(0x291319);
            colorpants_gph[1].setInteractive();
            colorpants_gph[1].on('pointerdown', function () {
              pants1.setTexture('pants_1_2');
              _this.data.set('pants_var1', 2);
              _this.data.set('pants_var2', 0);
              _this.data.set('pants_var3', 0);
              _this.data.set('pants_var4', 0);
              last_pants1 = 1;
            });
          }

          // Variacion de Color Pants 2
          if (_this.data.get('val7') === 2) {
            _this.var_qty = 3;
            _this.pantsEmitter.emit('pants_var');
            _this.data.set('pants_var2', 1 + Math.max(last_pants2, 0));
            var _colorpants_gph = _this.color_pants.getChildren();
            _colorpants_gph[0].setTint(0xA7140F);
            _colorpants_gph[0].setInteractive();
            _colorpants_gph[0].on('pointerdown', function () {
              pants2.setTexture('pants_2_1');
              _this.data.set('pants_var1', 0);
              _this.data.set('pants_var2', 1);
              _this.data.set('pants_var3', 0);
              _this.data.set('pants_var4', 0);
              last_pants2 = 0;
            });
            _colorpants_gph[1].setTint(0x3A5177);
            _colorpants_gph[1].setInteractive();
            _colorpants_gph[1].on('pointerdown', function () {
              pants2.setTexture('pants_2_2');
              _this.data.set('pants_var1', 0);
              _this.data.set('pants_var2', 2);
              _this.data.set('pants_var3', 0);
              _this.data.set('pants_var4', 0);
              last_pants2 = 1;
            });
            _colorpants_gph[2].setTint(0xDC6A3B);
            _colorpants_gph[2].setInteractive();
            _colorpants_gph[2].on('pointerdown', function () {
              pants2.setTexture('pants_2_3');
              _this.data.set('pants_var1', 0);
              _this.data.set('pants_var2', 3);
              _this.data.set('pants_var3', 0);
              _this.data.set('pants_var4', 0);
              last_pants2 = 2;
            });
          }

          // Variacion de Color Pants 3
          if (_this.data.get('val7') === 3) {
            _this.var_qty = 4;
            _this.pantsEmitter.emit('pants_var');
            _this.data.set('pants_var3', 1 + Math.max(last_pants3, 0));
            var _colorpants_gph2 = _this.color_pants.getChildren();
            _colorpants_gph2[0].setTint(0x290E16);
            _colorpants_gph2[0].setInteractive();
            _colorpants_gph2[0].on('pointerdown', function () {
              pants3.setTexture('pants_3_1');
              _this.data.set('pants_var1', 0);
              _this.data.set('pants_var2', 0);
              _this.data.set('pants_var3', 1);
              _this.data.set('pants_var4', 0);
              last_pants3 = 0;
            });
            _colorpants_gph2[1].setTint(0xA6140F);
            _colorpants_gph2[1].setInteractive();
            _colorpants_gph2[1].on('pointerdown', function () {
              pants3.setTexture('pants_3_2');
              _this.data.set('pants_var1', 0);
              _this.data.set('pants_var2', 0);
              _this.data.set('pants_var3', 2);
              _this.data.set('pants_var4', 0);
              last_pants3 = 1;
            });
            _colorpants_gph2[2].setTint(0x992631);
            _colorpants_gph2[2].setInteractive();
            _colorpants_gph2[2].on('pointerdown', function () {
              pants3.setTexture('pants_3_3');
              _this.data.set('pants_var1', 0);
              _this.data.set('pants_var2', 0);
              _this.data.set('pants_var3', 3);
              _this.data.set('pants_var4', 0);
              last_pants3 = 2;
            });
            _colorpants_gph2[3].setTint(0xDFB2A9);
            _colorpants_gph2[3].setInteractive();
            _colorpants_gph2[3].on('pointerdown', function () {
              pants3.setTexture('pants_3_4');
              _this.data.set('pants_var1', 0);
              _this.data.set('pants_var2', 0);
              _this.data.set('pants_var3', 4);
              _this.data.set('pants_var4', 0);
              last_pants3 = 3;
            });
          }

          // Variacion de Color Pants 4
          if (_this.data.get('val7') === 4) {
            _this.var_qty = 4;
            _this.pantsEmitter.emit('pants_var');
            _this.data.set('pants_var4', 1 + Math.max(last_pants4, 0));
            var _colorpants_gph3 = _this.color_pants.getChildren();
            _colorpants_gph3[0].setTint(0x936E72);
            _colorpants_gph3[0].setInteractive();
            _colorpants_gph3[0].on('pointerdown', function () {
              pants4.setTexture('pants_4_1');
              _this.data.set('pants_var1', 0);
              _this.data.set('pants_var2', 0);
              _this.data.set('pants_var3', 0);
              _this.data.set('pants_var4', 1);
              last_pants4 = 0;
            });
            _colorpants_gph3[1].setTint(0x9D8182);
            _colorpants_gph3[1].setInteractive();
            _colorpants_gph3[1].on('pointerdown', function () {
              pants4.setTexture('pants_4_2');
              _this.data.set('pants_var1', 0);
              _this.data.set('pants_var2', 0);
              _this.data.set('pants_var3', 0);
              _this.data.set('pants_var4', 2);
              last_pants4 = 1;
            });
            _colorpants_gph3[2].setTint(0xDFB2A9);
            _colorpants_gph3[2].setInteractive();
            _colorpants_gph3[2].on('pointerdown', function () {
              pants4.setTexture('pants_4_3');
              _this.data.set('pants_var1', 0);
              _this.data.set('pants_var2', 0);
              _this.data.set('pants_var3', 0);
              _this.data.set('pants_var4', 3);
              last_pants4 = 2;
            });
            _colorpants_gph3[3].setTint(0x3A5177);
            _colorpants_gph3[3].setInteractive();
            _colorpants_gph3[3].on('pointerdown', function () {
              pants4.setTexture('pants_4_4');
              _this.data.set('pants_var1', 0);
              _this.data.set('pants_var2', 0);
              _this.data.set('pants_var3', 0);
              _this.data.set('pants_var4', 4);
              last_pants4 = 3;
            });
          }
        });
        _this.pantsEmitter2.emit('pants_var2');
        pants.getChildren().forEach(function (child) {
          layer16.add(child);
          child.setInteractive();
          pants_qty++;
          child.id = pants_qty;

          // Trigger
          child.on('pointerdown', function () {
            _this.color_pants.destroy(true);
            tap2.play();

            // Remove all Images
            _this.data.set('val7', 0);
            layer6.remove([pants1.setPosition(-800, -400), pants2.setPosition(-800, -400), pants3.setPosition(-800, -400), pants4.setPosition(-800, -400)]);

            // If not selected before, add image
            if (_this.data.get('pants' + child.id) === 0) {
              var i = 0;
              pants.getChildren().forEach(function (child) {
                i++;
                _this.data.set('pants' + i, 0);
              });
              var child_id = Number(child.id - 1);
              layer6.setPosition(layerxpos, layerypos);
              layer6.add([pants_pick[child_id].setPosition(0, 0)]);
              _this.data.set('val7', child.id);
              _this.data.set('pants' + child.id, 1);
              frameout.setVisible(true);
            }

            // If selected before, remove image 
            // Nuevo => Hacer que ponga la imagen 1 como default
            else if (_this.data.get('pants' + child.id) === 1) {
              var _i4 = 0;
              pants.getChildren().forEach(function (child) {
                _i4++;
                _this.data.set('pants' + _i4, 0);
              });
              layer6.setPosition(layerxpos, layerypos);
              layer6.add([pants1.setPosition(0, 0)]);
              _this.data.set('val7', 1);
              _this.data.set('pants1', 1);

              // this.data.set('pants' + child.id, 0);
              // frameout.setVisible(false);
            }
            _this.pantsEmitter2.emit('pants_var2');
            // Select Outline new Position
            itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val7') - 1) / 5, 99));
            frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val7'), 1) + 130 * Math.max(_this.data.get('val7') - (1 + 5 * Math.floor(Math.min((_this.data.get('val7') - 1) / 5, 99))), 0), itemypos + layer16.y);
          });
        });
        Phaser.Actions.GridAlign(pants.getChildren(), {
          width: 5,
          height: 5,
          cellWidth: 130,
          x: 54,
          y: _this.game.renderer.height * 0.81
        });
      });

      // Slot Icono 8 --HAIR STRANS--
      var acc1_slot = this.add.image(75 * 8 + 140, this.game.renderer.height * 0.72, 'dress_icon8');
      acc1_slot.setInteractive();
      acc1_slot.setDepth(10);
      acc1_slot.on('pointerdown', function () {
        _this.assetdestroy.emit('destroy');
        iconoutline.setPosition(-200 + 118 * 8, 0);
        // ACC3 (2)
        layer2.removeInteractive();
        // BackHair (3)
        layer3.removeInteractive();
        // Doll (4)
        // Pants (5)
        layer5.removeInteractive();
        // Skirt (6)
        layer6.removeInteractive();
        // Eyes (7)
        layer7.removeInteractive();
        // Cejas (8)
        layer8.removeInteractive();
        // Dress - Top - Shirt (9)
        layer9.removeInteractive();
        // Hairs (10)
        layer10.removeInteractive();
        // ACC2 (12)
        layer12.removeInteractive();
        tap4.play();
        up_arrow.setVisible(false);
        down_arrow.setVisible(false);

        // Casilla 8 -- STRANS --

        var acc1 = _this.add.group();
        acc1.createMultiple({
          key: 'acc1',
          frame: [0],
          repeat: -1
        });
        _this.acc1 = acc1;
        acc1.setDepth(11);
        var acc1_qty = 0;
        var acc1_pick = [acc1_1];
        layer16_qty = acc1_pick.length;
        layer16_y_cap = Number(Math.floor(acc1_pick.length / 5));
        layer16.setVisible(true);
        layer16.y = 0;
        tap4.play();
        itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val8') - 1) / 5, 99));
        frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val8'), 1) + 130 * Math.max(_this.data.get('val8') - (1 + 5 * Math.floor(Math.min((_this.data.get('val8') - 1) / 5, 99))), 0), itemypos);
        acc1.getChildren().forEach(function (child) {
          layer16.add(child);
          child.setInteractive();
          acc1_qty++;
          child.id = acc1_qty;

          // Trigger
          child.on('pointerdown', function () {
            tap2.play();

            // Remove all Images
            _this.data.set('val8', 0);
            layer18.remove([acc1_1.setPosition(-800, -400)]);

            // If not selected before, add image
            if (_this.data.get('acc1_' + child.id) === 0) {
              var i = 0;
              acc1.getChildren().forEach(function (child) {
                i++;
                _this.data.set('acc1_' + i, 0);
              });
              var child_id = Number(child.id - 1);
              layer18.setPosition(layerxpos, layerypos);
              layer18.add([acc1_pick[child_id].setPosition(0, 0)]);
              _this.data.set('val8', child.id);
              _this.data.set('acc1_' + child.id, 1);
              frameout.setVisible(true);
            }

            // If selected before, remove image 
            // Nuevo => Hacer que ponga la imagen 1 como default
            else if (_this.data.get('acc1_' + child.id) === 1) {
              _this.data.set('acc1_' + child.id, 0);
              frameout.setVisible(false);
            }

            // Select Outline new Position
            itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val8') - 1) / 5, 99));
            frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val8'), 1) + 130 * Math.max(_this.data.get('val8') - (1 + 5 * Math.floor(Math.min((_this.data.get('val8') - 1) / 5, 99))), 0), itemypos + layer16.y);
          });
        });
        Phaser.Actions.GridAlign(acc1.getChildren(), {
          width: 5,
          height: 5,
          cellWidth: 130,
          x: 54,
          y: _this.game.renderer.height * 0.81
        });
      });

      // Slot Icono 9
      var acc2_slot = this.add.image(75 * 9 + 160, this.game.renderer.height * 0.72, 'dress_icon9');
      acc2_slot.setInteractive();
      acc2_slot.setDepth(10);
      acc2_slot.on('pointerdown', function () {
        _this.assetdestroy.emit('destroy');
        iconoutline.setPosition(-200 + 118 * 13, 0);

        // ACC3 (2)
        layer2.removeInteractive();
        // BackHair (3)
        layer3.removeInteractive();
        // Pants (5)
        layer5.removeInteractive();
        // Skirt (6)
        layer6.removeInteractive();
        // Eyes (7)
        layer7.removeInteractive();
        // Cejas (8)
        layer8.removeInteractive();
        // Dress - Top - Shirt (9)
        layer9.removeInteractive();
        // Hairs (10)
        layer10.removeInteractive();
        // ACC1 (11)
        layer11.removeInteractive();
        // ACC2 (12)

        tap4.play();
        up_arrow.setVisible(false);
        down_arrow.setVisible(false);

        // Casilla 9 -- Accesorios 2 --
        var acc2 = _this.add.group();
        acc2.createMultiple({
          key: 'acc2',
          frame: [0, 1, 2],
          repeat: -1
        });
        _this.acc2 = acc2;
        acc2.setDepth(11);
        var acc2_qty = 0;
        var acc2_pick = [acc2_1, acc2_2, acc2_3];
        layer16_qty = acc2_pick.length;
        layer16_y_cap = Number(Math.floor(acc2_pick.length / 5));
        layer16.setVisible(true);
        layer16.y = 0;
        tap4.play();
        itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val9') - 1) / 5, 99));
        frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val9'), 1) + 130 * Math.max(_this.data.get('val9') - (1 + 5 * Math.floor(Math.min((_this.data.get('val9') - 1) / 5, 99))), 0), itemypos);
        _this.acc2Emitter = new Phaser.Events.EventEmitter();
        _this.acc2Emitter.on('acc2_var', function () {
          _this.data.set('acc2_var1', 0);
          _this.data.set('acc2_var2', 0);
          _this.data.set('acc2_var3', 0);
          var color_acc2 = _this.add.group({
            key: 'white_dot',
            frameQuantity: _this.var_qty
          });
          _this.color_acc2 = color_acc2;
          Phaser.Actions.GridAlign(color_acc2.getChildren(), {
            width: 10,
            height: 10,
            cellWidth: 64,
            x: color_panel.x + 26,
            y: color_panel.y + 7
          });
          color_acc2.getChildren().forEach(function (child) {
            layer20.add(child);
          });
        });

        // Variacion de Color ACC2 (1)
        _this.acc2Emitter2 = new Phaser.Events.EventEmitter();
        _this.acc2Emitter2.on('acc2_var2', function () {
          if (_this.data.get('val9') === 1) {
            _this.var_qty = 2;
            _this.acc2Emitter.emit('acc2_var');
            _this.data.set('acc2_var1', 1 + Math.max(last_acc2_1, 0));
            var coloracc2_gph = _this.color_acc2.getChildren();
            coloracc2_gph[0].setTint(0x522733);
            coloracc2_gph[0].setInteractive();
            coloracc2_gph[0].on('pointerdown', function () {
              acc2_1.setTexture('acc2_1_1');
              _this.data.set('acc2_var1', 1);
              _this.data.set('acc2_var2', 0);
              _this.data.set('acc2_var3', 0);
              last_acc2_1 = 0;
            });
            coloracc2_gph[1].setTint(0x291319);
            coloracc2_gph[1].setInteractive();
            coloracc2_gph[1].on('pointerdown', function () {
              acc2_1.setTexture('acc2_1_2');
              _this.data.set('acc2_var1', 2);
              _this.data.set('acc2_var2', 0);
              _this.data.set('acc2_var3', 0);
              last_acc2_1 = 1;
            });
          }

          // Variacion de Color Pants 2
          if (_this.data.get('val9') === 2) {
            _this.data.set('acc2_var1', 0);
            _this.data.set('acc2_var2', 1);
            _this.data.set('acc2_var3', 0);
            last_acc2_2 = 0;

            // this.var_qty = 3;
            // this.acc2Emitter.emit('acc2_var');
            // this.data.set('acc2_var2', 1 + Math.max(last_acc2_2,0));
            // let coloracc2_gph = this.color_acc2.getChildren();  

            // coloracc2_gph[0].setTint(0xA7140F);
            // coloracc2_gph[0].setInteractive();
            // coloracc2_gph[0].on('pointerdown',()=>{
            // acc2_2.setTexture('acc2_2_1');
            // this.data.set('acc2_var1', 0);
            // this.data.set('acc2_var2', 1);
            // this.data.set('acc2_var3', 0);
            // this.data.set('acc2_var4', 0);
            // last_acc2_2 = 0;
            // });
          }

          // Variacion de Color Pants 3
          if (_this.data.get('val9') === 3) {
            _this.var_qty = 4;
            _this.acc2Emitter.emit('acc2_var');
            _this.data.set('acc2_var3', 1 + Math.max(last_acc2_3, 0));
            var _coloracc2_gph = _this.color_acc2.getChildren();
            _coloracc2_gph[0].setTint(0x290E16);
            _coloracc2_gph[0].setInteractive();
            _coloracc2_gph[0].on('pointerdown', function () {
              acc2_3.setTexture('acc2_3_1');
              _this.data.set('acc2_var1', 0);
              _this.data.set('acc2_var2', 0);
              _this.data.set('acc2_var3', 1);
              last_acc2_3 = 0;
            });
            _coloracc2_gph[1].setTint(0xA6140F);
            _coloracc2_gph[1].setInteractive();
            _coloracc2_gph[1].on('pointerdown', function () {
              acc2_3.setTexture('acc2_3_2');
              _this.data.set('acc2_var1', 0);
              _this.data.set('acc2_var2', 0);
              _this.data.set('acc2_var3', 2);
              last_acc2_3 = 1;
            });
            _coloracc2_gph[2].setTint(0x992631);
            _coloracc2_gph[2].setInteractive();
            _coloracc2_gph[2].on('pointerdown', function () {
              acc2_3.setTexture('acc2_3_3');
              _this.data.set('acc2_var1', 0);
              _this.data.set('acc2_var2', 0);
              _this.data.set('acc2_var3', 3);
              last_acc2_3 = 2;
            });
            _coloracc2_gph[3].setTint(0xDFB2A9);
            _coloracc2_gph[3].setInteractive();
            _coloracc2_gph[3].on('pointerdown', function () {
              acc2_3.setTexture('acc2_3_4');
              _this.data.set('acc2_var1', 0);
              _this.data.set('acc2_var2', 0);
              _this.data.set('acc2_var3', 4);
              last_acc2_3 = 3;
            });
          }
        });
        _this.acc2Emitter2.emit('acc2_var2');
        acc2.getChildren().forEach(function (child) {
          layer16.add(child);
          child.setInteractive();
          acc2_qty++;
          child.id = acc2_qty;

          // Trigger
          child.on('pointerdown', function () {
            tap2.play();
            _this.color_acc2.destroy(true);

            // Remove all Images
            _this.data.set('val9', 0);
            layer10.remove([acc2_1.setPosition(-800, -400), acc2_2.setPosition(-800, -400), acc2_3.setPosition(-800, -400)]);

            // If not selected before, add image
            if (_this.data.get('acc2_' + child.id) === 0) {
              var i = 0;
              acc2.getChildren().forEach(function (child) {
                i++;
                _this.data.set('acc2_' + i, 0);
              });
              var child_id = Number(child.id - 1);
              layer10.setPosition(layerxpos, layerypos);
              layer10.add([acc2_pick[child_id].setPosition(0, 0)]);
              _this.data.set('val9', child.id);
              _this.data.set('acc2_' + child.id, 1);
              frameout.setVisible(true);
            }

            // If selected before, remove image 
            else if (_this.data.get('acc2_' + child.id) === 1) {
              _this.data.set('acc2_' + child.id, 0);
              frameout.setVisible(false);
            }
            _this.acc2Emitter2.emit('acc2_var2');
            // Select Outline new Position
            itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val9') - 1) / 5, 99));
            frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val9'), 1) + 130 * Math.max(_this.data.get('val9') - (1 + 5 * Math.floor(Math.min((_this.data.get('val9') - 1) / 5, 99))), 0), itemypos + layer16.y);
          });
        });
        Phaser.Actions.GridAlign(acc2.getChildren(), {
          width: 5,
          height: 5,
          cellWidth: 130,
          x: 54,
          y: _this.game.renderer.height * 0.81
        });
      });

      // Slot Icono 10
      var acc3_slot = this.add.image(75 * 10 + 180, this.game.renderer.height * 0.72, 'dress_icon10');
      acc3_slot.setInteractive();
      acc3_slot.setDepth(10);
      acc3_slot.on('pointerdown', function () {
        _this.assetdestroy.emit('destroy');
        iconoutline.setPosition(-200 + 118 * 14, 0);

        // BackHair (3)
        layer3.removeInteractive();
        // Pants (5)
        layer5.removeInteractive();
        // Skirt (6)
        layer6.removeInteractive();
        // Eyes (7)
        layer7.removeInteractive();
        // Cejas (8)
        layer8.removeInteractive();
        // Dress - Top - Shirt (9)
        layer9.removeInteractive();
        // Hairs (10)
        layer10.removeInteractive();
        // ACC1 (11)
        layer11.removeInteractive();
        // ACC2 (12)
        layer12.removeInteractive();
        tap4.play();
        up_arrow.setVisible(false);
        down_arrow.setVisible(false);

        // Casilla 10 -- Accesorios 3 --
        var acc3 = _this.add.group();
        acc3.createMultiple({
          key: 'acc3',
          frame: [0, 1],
          repeat: -1
        });
        _this.acc3 = acc3;
        acc3.setDepth(11);
        var acc3_qty = 0;
        var acc3_pick = [acc3_1, acc3_2];
        layer16_qty = acc3_pick.length;
        layer16_y_cap = Number(Math.floor(acc3_pick.length / 5));
        layer16.setVisible(true);
        layer16.y = 0;
        tap4.play();
        itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val10') - 1) / 5, 99));
        frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val10'), 1) + 130 * Math.max(_this.data.get('val10') - (1 + 5 * Math.floor(Math.min((_this.data.get('val10') - 1) / 5, 99))), 0), itemypos);
        acc3.getChildren().forEach(function (child) {
          layer16.add(child);
          child.setInteractive();
          acc3_qty++;
          child.id = acc3_qty;

          // Trigger
          child.on('pointerdown', function () {
            tap2.play();

            // Remove all Images
            _this.data.set('val10', 0);
            layer2.remove([acc3_1.setPosition(-800, -400), acc3_2.setPosition(-800, -400)]);

            // If not selected before, add image
            if (_this.data.get('acc3_' + child.id) === 0) {
              var i = 0;
              acc3.getChildren().forEach(function (child) {
                i++;
                _this.data.set('acc3_' + i, 0);
              });
              var child_id = Number(child.id - 1);
              layer2.setPosition(layerxpos, layerypos);
              layer2.add([acc3_pick[child_id].setPosition(0, 0)]);
              _this.data.set('val10', child.id);
              _this.data.set('acc3_' + child.id, 1);
              frameout.setVisible(true);
            }

            // If selected before, remove image 
            else if (_this.data.get('acc3_' + child.id) === 1) {
              _this.data.set('acc3_' + child.id, 0);
              frameout.setVisible(false);
            }

            // Select Outline new Position
            itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val10') - 1) / 5, 99));
            frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val10'), 1) + 130 * Math.max(_this.data.get('val10') - (1 + 5 * Math.floor(Math.min((_this.data.get('val10') - 1) / 5, 99))), 0), itemypos + layer16.y);
          });
        });
        Phaser.Actions.GridAlign(acc3.getChildren(), {
          width: 5,
          height: 5,
          cellWidth: 130,
          x: 54,
          y: _this.game.renderer.height * 0.81
        });
      });

      // Slot Icono 11
      var eye_slot = this.add.image(75 * 11 + 200, this.game.renderer.height * 0.72, 'dress_icon11');
      eye_slot.setInteractive();
      eye_slot.setDepth(11);
      eye_slot.on('pointerdown', function () {
        _this.assetdestroy.emit('destroy');
        iconoutline.setPosition(-200, 0);

        // Remove Interactivity
        // Background (1)

        // ACC3 (2)
        layer2.removeInteractive();
        // BackHair (3)
        layer3.removeInteractive();
        // Doll (4)

        // Pants (5)
        layer5.removeInteractive();
        // Skirt (6)
        layer6.removeInteractive();
        // Eyes (7)

        // Cejas (8)
        layer8.removeInteractive();
        // Dress - Top - Shirt (9)
        layer9.removeInteractive();
        // Hairs (10)
        layer10.removeInteractive();
        // ACC1 (11)
        layer11.removeInteractive();
        // ACC2 (12)
        layer12.removeInteractive();

        // layer7.setInteractive();
        // this.input.setDraggable(layer7);

        tap4.play();
        up_arrow.setVisible(false);
        down_arrow.setVisible(false);
        layer16.setVisible(true);
        layer16.y = 0;
        layer16_qty = 1;
        layer16_y_cap = 0;

        // Casilla 11 -- Ojos --
        var eyes = _this.add.group();
        eyes.createMultiple({
          key: 'eyes',
          frame: [0],
          repeat: -1
        });
        _this.eyes = eyes;
        eyes.setDepth(11);
        var eyes_gph = _this.eyes.getChildren();
        eyes.getChildren().forEach(function (child) {
          layer16.add(child);
        });
        var color_eyes = _this.add.group({
          key: 'white_dot',
          frameQuantity: 6
        });
        _this.color_eyes = color_eyes;
        color_eyes.setDepth(12);
        var coloreyes_gph = _this.color_eyes.getChildren();
        Phaser.Actions.GridAlign(color_eyes.getChildren(), {
          width: 10,
          height: 10,
          cellWidth: 64,
          x: color_panel.x + 26,
          y: color_panel.y + 7
        });
        itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val11') - 1) / 5, 99));
        frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val11'), 1) + 130 * Math.max(_this.data.get('val11') - (1 + 5 * Math.floor(Math.min((_this.data.get('val11') - 1) / 5, 99))), 0), itemypos);
        color_eyes.getChildren().forEach(function (child) {
          layer20.add(child);
        });
        coloreyes_gph[0].setTint(0xA7140F);
        coloreyes_gph[1].setTint(0xA70F8A);
        coloreyes_gph[2].setTint(0x0FA2A7);
        coloreyes_gph[3].setTint(0x33C432);
        coloreyes_gph[4].setTint(0xFFE800);
        coloreyes_gph[5].setTint(0xFF6B14);
        var curcolor = Number(_this.data.get('val11_1') - 1);
        coloreyes_gph[curcolor].setTexture('whitedot_sel');
        coloreyes_gph[0].setInteractive();
        coloreyes_gph[1].setInteractive();
        coloreyes_gph[2].setInteractive();
        coloreyes_gph[3].setInteractive();
        coloreyes_gph[4].setInteractive();
        coloreyes_gph[5].setInteractive();
        coloreyes_gph[0].on('pointerdown', function () {
          tap2.play();
          eye1_1.setTexture('eye1_1');
          _this.data.set('val11_1', 1);
          coloreyes_gph[0].setTexture('whitedot_sel');
          coloreyes_gph[1].setTexture('white_dot');
          coloreyes_gph[2].setTexture('white_dot');
          coloreyes_gph[3].setTexture('white_dot');
          coloreyes_gph[4].setTexture('white_dot');
          coloreyes_gph[5].setTexture('white_dot');
        });
        coloreyes_gph[1].on('pointerdown', function () {
          tap2.play();
          eye1_1.setTexture('eye1_2');
          eye1_1.idval = 2;
          _this.data.set('val11_1', 2);
          coloreyes_gph[0].setTexture('white_dot');
          coloreyes_gph[1].setTexture('whitedot_sel');
          coloreyes_gph[2].setTexture('white_dot');
          coloreyes_gph[3].setTexture('white_dot');
          coloreyes_gph[4].setTexture('white_dot');
          coloreyes_gph[5].setTexture('white_dot');
        });
        coloreyes_gph[2].on('pointerdown', function () {
          tap2.play();
          eye1_1.setTexture('eye1_3');
          _this.data.set('val11_1', 3);
          coloreyes_gph[0].setTexture('white_dot');
          coloreyes_gph[1].setTexture('white_dot');
          coloreyes_gph[2].setTexture('whitedot_sel');
          coloreyes_gph[3].setTexture('white_dot');
          coloreyes_gph[4].setTexture('white_dot');
          coloreyes_gph[5].setTexture('white_dot');
        });
        coloreyes_gph[3].on('pointerdown', function () {
          tap2.play();
          eye1_1.setTexture('eye1_4');
          _this.data.set('val11_1', 4);
          coloreyes_gph[0].setTexture('white_dot');
          coloreyes_gph[1].setTexture('white_dot');
          coloreyes_gph[2].setTexture('white_dot');
          coloreyes_gph[3].setTexture('whitedot_sel');
          coloreyes_gph[4].setTexture('white_dot');
          coloreyes_gph[5].setTexture('white_dot');
        });
        coloreyes_gph[4].on('pointerdown', function () {
          tap2.play();
          eye1_1.setTexture('eye1_5');
          _this.data.set('val11_1', 5);
          coloreyes_gph[0].setTexture('white_dot');
          coloreyes_gph[1].setTexture('white_dot');
          coloreyes_gph[2].setTexture('white_dot');
          coloreyes_gph[3].setTexture('white_dot');
          coloreyes_gph[4].setTexture('whitedot_sel');
          coloreyes_gph[5].setTexture('white_dot');
        });
        coloreyes_gph[5].on('pointerdown', function () {
          tap2.play();
          eye1_1.setTexture('eye1_6');
          _this.data.set('val11_1', 6);
          coloreyes_gph[0].setTexture('white_dot');
          coloreyes_gph[1].setTexture('white_dot');
          coloreyes_gph[2].setTexture('white_dot');
          coloreyes_gph[3].setTexture('white_dot');
          coloreyes_gph[4].setTexture('white_dot');
          coloreyes_gph[5].setTexture('whitedot_sel');
        });
        Phaser.Actions.GridAlign(eyes.getChildren(), {
          width: 5,
          height: 5,
          cellWidth: 130,
          x: 54,
          y: _this.game.renderer.height * 0.81
        });

        // Eye 1
        eyes_gph[0].setInteractive();
        eyes_gph[0].on('pointerdown', function () {
          tap2.play();
          layer7.remove([eye1_2.setPosition(-400, -400)]);

          // Current Cloth
          _this.data.set('val11', 1);

          // Checker
          if (_this.data.get('eye1_1') === 0) {
            layer7.setPosition(layerxpos, layerypos);
            layer7.add([eye1_1.setPosition(0, 0)]);
            _this.data.set('eye1_1', 1);
            _this.data.set('eye1_2', 0);
          } else if (_this.data.get('eye1_1') === 1) {}

          // Frame Position
          itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val11') - 1) / 5, 99));
          frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val11'), 1) + 130 * Math.max(_this.data.get('val11') - (1 + 5 * Math.floor(Math.min((_this.data.get('val11') - 1) / 5, 99))), 0), itemypos);
        });
      });

      // Slot Icono 12
      var eyebrow_slot = this.add.image(75 * 12 + 220, this.game.renderer.height * 0.72, 'dress_icon12');
      eyebrow_slot.setInteractive();
      eyebrow_slot.setDepth(11);
      eyebrow_slot.on('pointerdown', function () {
        _this.assetdestroy.emit('destroy');
        iconoutline.setPosition(-200 + 118 * 4, 0);

        // Remove Interactivity
        // Background (1)

        // ACC3 (2)
        layer2.removeInteractive();
        // BackHair (3)
        layer3.removeInteractive();
        // Doll (4)

        // Pants (5)
        layer5.removeInteractive();
        // Skirt (6)
        layer6.removeInteractive();
        // Eyes (7)
        layer7.removeInteractive();
        // Cejas (8)

        // Dress - Top - Shirt (9)
        layer9.removeInteractive();
        // Hairs (10)
        layer10.removeInteractive();
        // ACC1 (11)
        layer11.removeInteractive();
        // ACC2 (12)
        layer12.removeInteractive();
        tap4.play();
        up_arrow.setVisible(false);
        down_arrow.setVisible(false);

        // Casilla 12 -- Cejas --
        var eyebrows = _this.add.group();
        eyebrows.createMultiple({
          key: 'eyebrows',
          frame: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          repeat: -1
        });
        _this.eyebrows = eyebrows;
        eyebrows.setDepth(11);
        var eyebrows_qty = 0;
        var eyebrows_pick = [eyebrow_1, eyebrow_2, eyebrow_3, eyebrow_4, eyebrow_5, eyebrow_6, eyebrow_7, eyebrow_8, eyebrow_9, eyebrow_10, eyebrow_11];
        layer16_qty = eyebrows_pick.length;
        layer16_y_cap = Number(Math.floor(eyebrows_pick.length / 5));
        layer16.setVisible(true);
        layer16.y = 0;
        tap4.play();
        itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val12') - 1) / 5, 99));
        frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val12'), 1) + 130 * Math.max(_this.data.get('val12') - (1 + 5 * Math.floor(Math.min((_this.data.get('val12') - 1) / 5, 99))), 0), itemypos);
        eyebrows.getChildren().forEach(function (child) {
          layer16.add(child);
          child.setInteractive();
          eyebrows_qty++;
          child.id = eyebrows_qty;

          // Trigger
          child.on('pointerdown', function () {
            tap2.play();

            // Remove all Images
            _this.data.set('val12', 0);
            layer8.remove([eyebrow_1.setPosition(-800, -400), eyebrow_2.setPosition(-800, -400), eyebrow_3.setPosition(-800, -400), eyebrow_4.setPosition(-800, -400), eyebrow_5.setPosition(-800, -400), eyebrow_6.setPosition(-800, -400), eyebrow_7.setPosition(-800, -400), eyebrow_8.setPosition(-800, -400), eyebrow_9.setPosition(-800, -400), eyebrow_10.setPosition(-800, -400), eyebrow_11.setPosition(-800, -400)]);

            // If not selected before, add image
            if (_this.data.get('eyebrow_' + child.id) === 0) {
              var i = 0;
              eyebrows.getChildren().forEach(function (child) {
                i++;
                _this.data.set('eyebrow_' + i, 0);
              });
              var child_id = Number(child.id - 1);
              layer8.setPosition(layerxpos, layerypos);
              layer8.add([eyebrows_pick[child_id].setPosition(0, 0)]);
              _this.data.set('val12', child.id);
              _this.data.set('eyebrow_' + child.id, 1);
              frameout.setVisible(true);
            }

            // If selected before, remove image 
            else if (_this.data.get('eyebrow_' + child.id) === 1) {
              var _i5 = 0;
              eyebrows.getChildren().forEach(function (child) {
                _i5++;
                _this.data.set('eyebrow_' + _i5, 0);
              });
              layer8.setPosition(layerxpos, layerypos);
              layer8.add([eyebrow_1.setPosition(0, 0)]);
              _this.data.set('val12', 1);
              _this.data.set('eyebrow_1', 1);
              // this.data.set('eyebrow_' + child.id, 0);
              // frameout.setVisible(false);
            }
            itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val12') - 1) / 5, 99));
            frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val12'), 1) + 130 * Math.max(_this.data.get('val12') - (1 + 5 * Math.floor(Math.min((_this.data.get('val12') - 1) / 5, 99))), 0), itemypos + layer16.y);
          });
        });
        Phaser.Actions.GridAlign(eyebrows.getChildren(), {
          width: 5,
          height: 5,
          cellWidth: 130,
          x: 54,
          y: _this.game.renderer.height * 0.81
        });
      });

      // Slot Icono 13
      var background_slot = this.add.image(75 * 13 + 240, this.game.renderer.height * 0.72, 'dress_icon13');
      background_slot.setInteractive();
      background_slot.setDepth(11);
      background_slot.on('pointerdown', function () {
        _this.assetdestroy.emit('destroy');
        iconoutline.setPosition(-200 + 118 * 15, 0);

        // Remove Interactivity
        // Background (1)

        // ACC3 (2)
        layer2.removeInteractive();
        // BackHair (3)
        layer3.removeInteractive();
        // Doll (4)

        // Pants (5)
        layer5.removeInteractive();
        // Skirt (6)
        layer6.removeInteractive();
        // Eyes (7)
        layer7.removeInteractive();
        // Cejas (8)
        layer8.removeInteractive();
        // Dress - Top - Shirt (9)
        layer9.removeInteractive();
        // Hairs (10)
        layer10.removeInteractive();
        // ACC1 (11)
        layer11.removeInteractive();
        // ACC2 (12)
        layer12.removeInteractive();
        tap4.play();
        up_arrow.setVisible(false);
        down_arrow.setVisible(false);

        // Casilla 13 -- Fondos --
        var backgrounds = _this.add.group();
        backgrounds.createMultiple({
          key: 'backgrounds',
          frame: [0, 1, 2],
          repeat: -1
        });
        _this.backgrounds = backgrounds;
        backgrounds.setDepth(11);
        var backgrounds_qty = 0;
        var backgrounds_pick = [background_1, background_2, background_3];
        layer16_qty = backgrounds_pick.length;
        layer16_y_cap = Number(Math.floor(backgrounds_pick.length / 5));
        layer16.setVisible(true);
        layer16.y = 0;
        tap4.play();
        itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val13') - 1) / 5, 99));
        frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val13'), 1) + 130 * Math.max(_this.data.get('val13') - (1 + 5 * Math.floor(Math.min((_this.data.get('val13') - 1) / 5, 99))), 0), itemypos);
        backgrounds.getChildren().forEach(function (child) {
          layer16.add(child);
          child.setInteractive();
          backgrounds_qty++;
          child.id = backgrounds_qty;

          // Trigger
          child.on('pointerdown', function () {
            tap2.play();

            // Remove all Images
            _this.data.set('val13', 0);
            layer1.remove([background_1.setPosition(-900, -1200), background_2.setPosition(-900, -1200), background_3.setPosition(-900, -1200)]);

            // If not selected before, add image
            if (_this.data.get('background_' + child.id) === 0) {
              var i = 0;
              backgrounds.getChildren().forEach(function (child) {
                i++;
                _this.data.set('background_' + i, 0);
              });
              var child_id = Number(child.id - 1);
              layer1.setPosition(layerxpos, layerypos);
              layer1.add([backgrounds_pick[child_id].setPosition(0, 0)]);
              _this.data.set('val13', child.id);
              _this.data.set('background_' + child.id, 1);
              frameout.setVisible(true);
            }

            // If selected before, remove image 
            else if (_this.data.get('background_' + child.id) === 1) {
              var _i6 = 0;
              backgrounds.getChildren().forEach(function (child) {
                _i6++;
                _this.data.set('background_' + _i6, 0);
              });
              layer1.setPosition(layerxpos, layerypos);
              layer1.add([background_1.setPosition(0, 0)]);
              _this.data.set('val13', 1);
              _this.data.set('background_1', 1);
            }
            itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val13') - 1) / 5, 99));
            frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val13'), 1) + 130 * Math.max(_this.data.get('val13') - (1 + 5 * Math.floor(Math.min((_this.data.get('val13') - 1) / 5, 99))), 0), itemypos + layer16.y);
          });
        });
        Phaser.Actions.GridAlign(backgrounds.getChildren(), {
          width: 5,
          height: 5,
          cellWidth: 130,
          x: 54,
          y: _this.game.renderer.height * 0.81
        });
      });

      // Slot Icono 14
      var nose_slot = this.add.image(75 * 14 + 240, this.game.renderer.height * 0.72, 'dress_icon15');
      nose_slot.setInteractive();
      nose_slot.setDepth(11);
      nose_slot.on('pointerdown', function () {
        _this.assetdestroy.emit('destroy');
        iconoutline.setPosition(-200 + 118 * 3, 0);

        // Remove Interactivity
        // Background (1)

        // ACC3 (2)
        layer2.removeInteractive();
        // BackHair (3)
        layer3.removeInteractive();
        // Doll (4)

        // Pants (5)
        layer5.removeInteractive();
        // Skirt (6)
        layer6.removeInteractive();
        // Eyes (7)
        layer7.removeInteractive();
        // Cejas (8)
        layer8.removeInteractive();
        // Dress - Top - Shirt (9)
        layer9.removeInteractive();
        // Hairs (10)
        layer10.removeInteractive();
        // ACC1 (11)
        layer11.removeInteractive();
        // ACC2 (12)
        layer12.removeInteractive();
        tap4.play();
        up_arrow.setVisible(false);
        down_arrow.setVisible(false);

        // Slot Icono 14 
        var noses = _this.add.group();
        noses.createMultiple({
          key: 'noses',
          frame: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          repeat: -1
        });
        _this.noses = noses;
        noses.setDepth(11);
        var noses_qty = 0;
        var noses_pick = [nose_1, nose_2, nose_3, nose_4, nose_4, nose_5, nose_6, nose_7, nose_8, nose_9, nose_10, nose_11];
        layer16_qty = noses_pick.length;
        layer16_y_cap = Number(Math.floor(noses_pick.length / 6));
        layer16.setVisible(true);
        layer16.y = 0;
        tap4.play();
        itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val15') - 1) / 5, 99));
        frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val15'), 1) + 130 * Math.max(_this.data.get('val15') - (1 + 5 * Math.floor(Math.min((_this.data.get('val15') - 1) / 5, 99))), 0), itemypos);
        noses.getChildren().forEach(function (child) {
          layer16.add(child);
          child.setInteractive();
          noses_qty++;
          child.id = noses_qty;

          // Trigger
          child.on('pointerdown', function () {
            tap2.play();

            // Remove all Images
            _this.data.set('val15', 0);
            layer5.remove([nose_1.setPosition(-800, -400), nose_2.setPosition(-800, -400), nose_3.setPosition(-800, -400), nose_4.setPosition(-800, -400), nose_5.setPosition(-800, -400), nose_6.setPosition(-800, -400), nose_7.setPosition(-800, -400), nose_8.setPosition(-800, -400), nose_9.setPosition(-800, -400), nose_10.setPosition(-800, -400), nose_11.setPosition(-800, -400)]);

            // If not selected before, add image
            if (_this.data.get('nose_' + child.id) === 0) {
              var i = 0;
              noses.getChildren().forEach(function (child) {
                i++;
                _this.data.set('nose_' + i, 0);
              });
              var child_id = Number(child.id - 1);
              layer5.setPosition(layerxpos, layerypos);
              layer5.add([noses_pick[child_id].setPosition(0, 0)]);
              _this.data.set('val15', child.id);
              _this.data.set('nose_' + child.id, 1);
              frameout.setVisible(true);
            }

            // If selected before, remove image 
            else if (_this.data.get('nose_' + child.id) === 1) {
              var _i7 = 0;
              noses.getChildren().forEach(function (child) {
                _i7++;
                _this.data.set('nose_' + _i7, 0);
              });
              layer5.setPosition(layerxpos, layerypos);
              layer5.add([nose_1.setPosition(0, 0)]);
              _this.data.set('val15', 1);
              _this.data.set('nose_1', 1);
              // this.data.set('nose_' + child.id, 0);
              // frameout.setVisible(false);
            }

            // Select Outline new Position
            itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val15') - 1) / 5, 99));
            frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val15'), 1) + 130 * Math.max(_this.data.get('val15') - (1 + 5 * Math.floor(Math.min((_this.data.get('val15') - 1) / 5, 99))), 0), itemypos + layer16.y);
          });
        });
        Phaser.Actions.GridAlign(noses.getChildren(), {
          width: 5,
          height: 5,
          cellWidth: 130,
          x: 54,
          y: _this.game.renderer.height * 0.81
        });
      });

      // Slot Icono 15
      var mouth_slot = this.add.image(75 * 15 + 240, this.game.renderer.height * 0.72, 'dress_icon16');
      mouth_slot.setInteractive();
      mouth_slot.setDepth(11);
      mouth_slot.on('pointerdown', function () {
        _this.assetdestroy.emit('destroy');
        iconoutline.setPosition(-200 + 118 * 1, 0);

        // Remove Interactivity
        // Background (1)

        // ACC3 (2)
        layer2.removeInteractive();
        // BackHair (3)
        layer3.removeInteractive();
        // Doll (4)

        // Pants (5)
        layer5.removeInteractive();
        // Skirt (6)
        layer6.removeInteractive();
        // Eyes (7)
        layer7.removeInteractive();
        // Cejas (8)
        layer8.removeInteractive();
        // Dress - Top - Shirt (9)
        layer9.removeInteractive();
        // Hairs (10)
        layer10.removeInteractive();
        // ACC1 (11)
        layer11.removeInteractive();
        // ACC2 (12)
        layer12.removeInteractive();
        var mouths = _this.add.group();
        mouths.createMultiple({
          key: 'mouths',
          frame: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          repeat: -1
        });
        _this.mouths = mouths;
        mouths.setDepth(11);
        // let mouth_gph = this.mouths.getChildren(); 

        // Comprimir estos 8 Eventos para usarlos para cada slot de ropa
        var mouth_qty = 0;
        var mouth_pick = [mouth_1, mouth_2, mouth_3, mouth_4, mouth_5, mouth_6, mouth_7, mouth_8, mouth_9, mouth_10, mouth_11];
        layer16_qty = mouth_pick.length;
        layer16_y_cap = Number(Math.floor(mouth_pick.length / 5));
        layer16.setVisible(true);
        layer16.y = 0;
        tap4.play();
        itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val16') - 1) / 5, 99));
        frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val16'), 1) + 130 * Math.max(_this.data.get('val16') - (1 + 5 * Math.floor(Math.min((_this.data.get('val16') - 1) / 5, 99))), 0), itemypos);
        mouths.getChildren().forEach(function (child) {
          layer16.add(child);
          child.setInteractive();
          mouth_qty++;
          child.id = mouth_qty;

          // Trigger
          child.on('pointerdown', function () {
            tap2.play();

            // Remove all Images
            _this.data.set('val16', 0);
            layer5.remove([mouth_1.setPosition(-400, -400), mouth_2.setPosition(-400, -400), mouth_3.setPosition(-400, -400), mouth_4.setPosition(-400, -400), mouth_5.setPosition(-400, -400), mouth_6.setPosition(-400, -400), mouth_7.setPosition(-400, -400), mouth_8.setPosition(-400, -400), mouth_9.setPosition(-400, -400), mouth_10.setPosition(-400, -400), mouth_11.setPosition(-400, -400)]);

            // If not selected before, add image
            if (_this.data.get('mouth_' + child.id) === 0) {
              var i = 0;
              mouths.getChildren().forEach(function (child) {
                i++;
                _this.data.set('mouth_' + i, 0);
              });
              var child_id = Number(child.id - 1);
              layer5.setPosition(layerxpos, layerypos);
              layer5.add([mouth_pick[child_id].setPosition(0, 0)]);
              _this.data.set('val16', child.id);
              _this.data.set('mouth_' + child.id, 1);
              frameout.setVisible(true);
            }

            // If selected before, remove image 
            // Nuevo => Hacer que ponga la imagen 1 como default
            else if (_this.data.get('mouth_' + child.id) === 1) {
              var _i8 = 0;
              mouths.getChildren().forEach(function (child) {
                _i8++;
                _this.data.set('mouth_' + _i8, 0);
              });
              layer5.setPosition(layerxpos, layerypos);
              layer5.add([mouth_1.setPosition(0, 0)]);
              _this.data.set('val16', 1);
              _this.data.set('mouth_1', 1);

              // this.data.set('mouth_' + child.id, 0);
              // frameout.setVisible(false);
            }

            // Select Outline new Position
            itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val16') - 1) / 5, 99));
            frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val16'), 1) + 130 * Math.max(_this.data.get('val16') - (1 + 5 * Math.floor(Math.min((_this.data.get('val16') - 1) / 5, 99))), 0), itemypos + layer16.y);
          });
        });
        Phaser.Actions.GridAlign(mouths.getChildren(), {
          width: 5,
          height: 5,
          cellWidth: 130,
          x: 54,
          y: _this.game.renderer.height * 0.81
        });
      });

      // Slot Icono 16
      var ear_slot = this.add.image(75 * 16 + 240, this.game.renderer.height * 0.72, 'dress_icon17');
      ear_slot.setInteractive();
      ear_slot.setDepth(11);
      ear_slot.on('pointerdown', function () {
        _this.assetdestroy.emit('destroy');
        iconoutline.setPosition(-200 + 118 * 5, 0);

        // Remove Interactivity
        // Background (1)

        // ACC3 (2)
        layer2.removeInteractive();
        // BackHair (3)
        layer3.removeInteractive();
        // Doll (4)

        // Pants (5)
        layer5.removeInteractive();
        // Skirt (6)
        layer6.removeInteractive();
        // Eyes (7)
        layer7.removeInteractive();
        // Cejas (8)
        layer8.removeInteractive();
        // Dress - Top - Shirt (9)
        layer9.removeInteractive();
        // Hairs (10)
        layer10.removeInteractive();
        // ACC1 (11)
        layer11.removeInteractive();
        // ACC2 (12)
        layer12.removeInteractive();
        tap4.play();
        up_arrow.setVisible(false);
        down_arrow.setVisible(false);

        // Slot Icono 15 
        var ears = _this.add.group();
        ears.createMultiple({
          key: 'ears',
          frame: [0, 1],
          repeat: -1
        });
        _this.ears = ears;
        ears.setDepth(11);
        var ears_qty = 0;
        var ears_pick = [ear_1, ear_2];
        layer16_qty = ears_pick.length;
        layer16_y_cap = Number(Math.floor(ears_pick.length / 5));
        layer16.setVisible(true);
        layer16.y = 0;
        tap4.play();
        itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val17') - 1) / 5, 99));
        frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val17'), 1) + 130 * Math.max(_this.data.get('val17') - (1 + 5 * Math.floor(Math.min((_this.data.get('val17') - 1) / 5, 99))), 0), itemypos);
        ears.getChildren().forEach(function (child) {
          layer16.add(child);
          child.setInteractive();
          ears_qty++;
          child.id = ears_qty;

          // Trigger
          child.on('pointerdown', function () {
            tap2.play();

            // Remove all Images
            _this.data.set('val17', 0);
            layer4.remove([ear_2.setPosition(-800, -400)]);

            // If not selected before, add image
            if (_this.data.get('ear_' + child.id) === 0) {
              var i = 0;
              ears.getChildren().forEach(function (child) {
                i++;
                _this.data.set('ear_' + i, 0);
              });
              var child_id = Number(child.id - 1);
              layer4.setPosition(layerxpos, layerypos);
              layer4.add([ears_pick[child_id].setPosition(0, 0)]);
              _this.data.set('val17', child.id);
              _this.data.set('ear_' + child.id, 1);
              frameout.setVisible(true);
            }

            // If selected before, remove image 
            else if (_this.data.get('ear_' + child.id) === 1) {
              var _i9 = 0;
              ears.getChildren().forEach(function (child) {
                _i9++;
                _this.data.set('ear_' + _i9, 0);
              });
              layer4.setPosition(layerxpos, layerypos);
              layer4.add([ear_1.setPosition(0, 0)]);
              _this.data.set('val17', 1);
              _this.data.set('ear_1', 1);

              // this.data.set('ear_' + child.id, 0);
              // frameout.setVisible(false);
            }

            // Select Outline new Position
            itemypos = _this.game.renderer.height * 0.81 + 130 * Math.floor(Math.min((_this.data.get('val17') - 1) / 5, 99));
            frameout.setPosition(-170 + 224 * Math.min(_this.data.get('val17'), 1) + 130 * Math.max(_this.data.get('val17') - (1 + 5 * Math.floor(Math.min((_this.data.get('val17') - 1) / 5, 99))), 0), itemypos + layer16.y);
          });
        });
        Phaser.Actions.GridAlign(ears.getChildren(), {
          width: 5,
          height: 5,
          cellWidth: 130,
          x: 54,
          y: _this.game.renderer.height * 0.81
        });

        // let ear_gph = this.ears.getChildren(); 

        // ears.getChildren().forEach(child => {
        //     layer16.add(child);
        // });

        // Phaser.Actions.GridAlign(ears.getChildren(), {
        // width: 5,
        // height: 5,
        // cellWidth: 130,
        // x: 54,
        // y: itemypos
        // });

        // frameout.setPosition(-170 + (224 * Math.min(this.data.get('val17'),1)) + 130 * Math.max(this.data.get('val17')-1,0), itemypos);

        // // Ear 1

        // ear_gph[0].setInteractive();
        // ear_gph[0].on('pointerdown',()=>{

        // tap2.play();

        // layer19.remove([ 
        // ear_2.setPosition(-400,-400),
        // ])

        // // Current Cloth
        // this.data.set('val17', 1);

        // // Checker
        // if(this.data.get('ear_1') === 0 ){

        // this.data.set('ear_1', 1);
        // this.data.set('ear_2', 0);
        // }else if(this.data.get('ear_1') === 1){

        // }

        // // Frame Position
        // frameout.setPosition(-170 + (224 * Math.min(this.data.get('val17'),1)) + 130 * Math.max(this.data.get('val17')-1,0), itemypos);
        // })

        // // Ear 2

        // ear_gph[1].setInteractive();
        // ear_gph[1].on('pointerdown',()=>{

        // tap2.play();

        // // Current Cloth
        // this.data.set('val17', 2);

        // // Checker
        // if(this.data.get('ear_2') === 0 ){

        // layer19.setPosition(layerxpos, layerypos);
        // layer19.add([
        // ear_2.setPosition(0,0)
        // ])
        // ear_2.setTexture('ear2_' + Number(this.data.get('val14')+1));
        // this.data.set('ear_1', 0);
        // this.data.set('ear_2', 1);
        // }else if(this.data.get('ear_2') === 1){
        // layer19.remove([
        // ear_2.setPosition(-400,-400)
        // ])

        // this.data.set('ear_1', 1);
        // this.data.set('ear_2', 0);
        // this.data.set('val17', 1);
        // }

        // // Frame Position
        // frameout.setPosition(-170 + (224 * Math.min(this.data.get('val17'),1)) + 130 * Math.max(this.data.get('val17')-1,0), itemypos);
        // })
      });
      layer15.add([dress_slot.setPosition(-200 + 118 * 12, 0), top_slot.setPosition(-200 + 118 * 2, 0),
      // Face Accesory
      hair_slot.setPosition(-200 + 118 * 6, 0), backhair_slot.setPosition(-200 + 118 * 7, 0), shirt_slot.setPosition(-200 + 118 * 9, 0), skirt_slot.setPosition(-200 + 118 * 10, 0), pants_slot.setPosition(-200 + 118 * 11, 0), acc1_slot.setPosition(-200 + 118 * 8, 0),
      // Strands
      acc2_slot.setPosition(-200 + 118 * 13, 0),
      // Accesory Front
      acc3_slot.setPosition(-200 + 118 * 14, 0),
      // Accesory Back
      eye_slot.setPosition(-200, 0), eyebrow_slot.setPosition(-200 + 118 * 4, 0), background_slot.setPosition(-200 + 118 * 15, 0), nose_slot.setPosition(-200 + 118 * 3, 0), mouth_slot.setPosition(-200 + 118 * 1, 0), ear_slot.setPosition(-200 + 118 * 5, 0), iconoutline.setPosition(-200, 0)]);
      this.tween_down_back = this.tweens.add({
        // targets: [backdrop, layer15,layer16, layer20, frameout, color_panel],
        targets: [layer15, layer16, layer20, frameout, color_panel],
        y: this.game.renderer.height + 420,
        ease: 'Sine.easeIn',
        duration: 500,
        paused: true,
        persist: true
      });
      this.tween_down_frameout = this.tweens.add({
        targets: [frameout],
        y: this.init_y,
        ease: 'Sine.easeIn',
        duration: 500,
        paused: true,
        persist: true,
        onComplete: function onComplete() {
          frameout.y = _this.init_y;
        }
      });

      // this.tween_down_backdrop = this.tweens.add({
      //     targets: [backdrop],
      //     y: this.game.renderer.height * 0.84,
      //     ease: 'Sine.easeIn',
      //     duration: 500,
      //     paused: true,
      //     persist: true
      // })

      this.tween_down_colorpanel = this.tweens.add({
        targets: [color_panel],
        y: this.game.renderer.height * 0.765,
        ease: 'Sine.easeIn',
        duration: 500,
        paused: true,
        persist: true
      });
      this.tween_down_layer15 = this.tweens.add({
        targets: [layer15],
        y: this.game.renderer.height * 0.72,
        ease: 'Sine.easeIn',
        duration: 500,
        paused: true,
        persist: true
      });
      this.tween_down_layer16 = this.tweens.add({
        targets: [layer16],
        y: 0,
        ease: 'Sine.easeIn',
        duration: 500,
        paused: true,
        persist: true
      });
      this.tween_down_layer20 = this.tweens.add({
        targets: [layer20],
        y: 0,
        ease: 'Sine.easeIn',
        duration: 500,
        paused: true,
        persist: true
      });
      this.newdress();

      // Load

      if (this.load_true === 1) {
        // Load Skin Colors
        var skinid = parseInt(localStorage.getItem('skin_id' + this.slot_cur));
        for (var i = 0; i < 18; i++) {
          var numb = i - 1;
          if (skinid === numb) {
            doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[numb]);
            this.data.set('val14', skinid);
          }
        }

        // Load Dress
        var dressesid = parseInt(localStorage.getItem('dress_id' + this.slot_cur));
        var dresses_no = [dress1, dress2, dress3];
        var dresses_length = dresses_no.length;
        for (var _i10 = 0; _i10 < dresses_length; _i10++) {
          var id = _i10 + 1;
          if (dressesid === id) {
            // layer10.setInteractive();
            // this.input.setDraggable(layer10);
            this.data.set('dress' + id, 1);
            this.data.set('val1', id);
            frameout.setPosition(-170 + 224 * Math.min(this.data.get('val1'), 1) + 130 * Math.max(this.data.get('val1') - 1, 0), itemypos);
            // layer10.setPosition(localStorage.getItem('dressxpos' + this.slot_cur), localStorage.getItem('dressypos' + this.slot_cur));
            layer10.add([
            // dresses_no[i].setPosition(localStorage.getItem('dressxpos' + this.slot_cur) - this.game.renderer.width / 2, localStorage.getItem('dressypos' + this.slot_cur) - this.game.renderer.height * 0.42)
            dresses_no[_i10].setPosition(0, 0)]);
          }
        }

        // Load Tops
        var topsid = parseInt(localStorage.getItem('top_id' + this.slot_cur));
        var tops_no = [top1, top2, top3, top4, top5, top6, top7, top8, top9, top10, top11, top12, top13, top14, top15];
        var tops_length = tops_no.length;
        for (var _i11 = 0; _i11 < tops_length; _i11++) {
          var _id = _i11 + 1;
          if (topsid === _id) {
            this.data.set('top' + _id, 1);
            this.data.set('val2', _id);
            layer4.add([tops_no[_i11].setPosition(0, 0)]);
          }
        }

        // Load Hair
        var hairid = parseInt(localStorage.getItem('hair_id' + this.slot_cur));
        var hair_no = [hair1, hair2, hair3, hair4, hair5, hair6, hair7, hair8, hair9, hair10];
        var hair_length = hair_no.length;
        for (var _i12 = 0; _i12 < hair_length; _i12++) {
          var _id2 = _i12 + 1;
          if (hairid === _id2) {
            layer12.remove([hair1.setPosition(-800, -400)]);
            this.data.set('hair' + _id2, 1);
            this.data.set('val3', _id2);
            layer12.add([hair_no[_i12].setPosition(0, 0)]);
          }
        }

        // Load Backhair
        var backhairid = parseInt(localStorage.getItem('backhair_id' + this.slot_cur));
        var backhairid_no = [backhair1, backhair2, backhair3, backhair4, backhair5, backhair6, backhair7];
        var backhairid_length = backhairid_no.length;
        for (var _i13 = 0; _i13 < backhairid_length; _i13++) {
          var _id3 = _i13 + 1;
          if (backhairid === _id3) {
            layer3.remove([backhair1.setPosition(-800, -400)]);
            this.data.set('hair' + _id3, 1);
            this.data.set('val4', _id3);
            layer3.add([backhairid_no[_i13].setPosition(0, 0)]);
          }
        }

        // Load Shirt
        var shirtid = parseInt(localStorage.getItem('shirt_id' + this.slot_cur));
        var shirtid_no = [shirt1, shirt2, shirt3, shirt4];
        var shirtid_length = shirtid_no.length;
        for (var _i14 = 0; _i14 < shirtid_length; _i14++) {
          var _id4 = _i14 + 1;
          if (shirtid === _id4) {
            // Cambiar la Textura

            layer9.remove([shirt1.setPosition(-800, -400)]);
            this.data.set('shirt' + _id4, 1);
            this.data.set('val5', _id4);
            this.data.set('shirt_var1', 0);

            // layer9.setPosition(localStorage.getItem('shirtxpos' + this.slot_cur), localStorage.getItem('shirtypos' + this.slot_cur));
            layer9.add([shirtid_no[_i14].setPosition(0, 0)]);
            shirtid_no[_i14].setTexture('shirt_' + _id4 + '_' + Number(localStorage.getItem('shirt_var' + _id4 + "_" + this.slot_cur)));
            this.data.set('shirt_var' + _id4, Number(localStorage.getItem('shirt_var' + _id4 + "_" + this.slot_cur)));
          }
        }

        // Load Skirt
        var skirtid = parseInt(localStorage.getItem('skirt_id' + this.slot_cur));
        var skirtid_no = [skirt1, skirt2, skirt3];
        var skirtid_length = skirtid_no.length;
        for (var _i15 = 0; _i15 < skirtid_length; _i15++) {
          var _id5 = _i15 + 1;
          if (skirtid === _id5) {
            this.data.set('skirt' + _id5, 1);
            this.data.set('val6', _id5);

            // layer6.setPosition(localStorage.getItem('skirtxpos' + this.slot_cur), localStorage.getItem('skirtypos' + this.slot_cur));
            layer5.add([skirtid_no[_i15].setPosition(0, 0)]);
            skirtid_no[_i15].setTexture('skirt_' + _id5 + '_' + Number(localStorage.getItem('skirt_var' + _id5 + "_" + this.slot_cur)));
            this.data.set('skirt_var' + _id5, Number(localStorage.getItem('skirt_var' + _id5 + "_" + this.slot_cur)));
          }
        }

        // Load Pants
        var pantsid = parseInt(localStorage.getItem('pants_id' + this.slot_cur));
        var pantsid_no = [pants1, pants2, pants3, pants4];
        var pantsid_length = pantsid_no.length;
        for (var _i16 = 0; _i16 < pantsid_length; _i16++) {
          var _id6 = _i16 + 1;
          if (pantsid === _id6) {
            layer6.remove([pants1.setPosition(-800, -400)]);

            // layer5.setInteractive();
            // this.input.setDraggable(layer5);

            this.data.set('pants' + _id6, 1);
            this.data.set('val7', _id6);
            this.data.set('pants_var1', 0);

            // layer5.setPosition(localStorage.getItem('pantsxpos' + this.slot_cur), localStorage.getItem('pantsypos' + this.slot_cur));
            layer6.add([pantsid_no[_i16].setPosition(0, 0)]);
            pantsid_no[_i16].setTexture('pants_' + _id6 + '_' + Number(localStorage.getItem('pants_var' + _id6 + "_" + this.slot_cur)));
            this.data.set('pants_var' + _id6, Number(localStorage.getItem('pants_var' + _id6 + "_" + this.slot_cur)));
          }
        }

        // Load ACC 1
        var acc1id = parseInt(localStorage.getItem('acc1_id' + this.slot_cur));
        var acc1id_no = [acc1_1];
        var acc1id_length = acc1id_no.length;
        for (var _i17 = 0; _i17 < acc1id_length; _i17++) {
          var _id7 = _i17 + 1;
          if (acc1id === _id7) {
            this.data.set('acc1_' + _id7, 1);
            this.data.set('val8', _id7);
            layer11.add([acc1id_no[_i17].setPosition(0, 0)]);
          }
        }

        // Load ACC 2
        var acc2id = parseInt(localStorage.getItem('acc2_id' + this.slot_cur));
        var acc2id_no = [acc2_1, acc2_2, acc2_3];
        var acc2id_length = acc2id_no.length;
        for (var _i18 = 0; _i18 < acc2id_length; _i18++) {
          var _id8 = _i18 + 1;
          if (acc2id === _id8) {
            this.data.set('acc2_' + _id8, 1);
            this.data.set('val9', _id8);
            this.data.set('acc2_var1', 0);
            layer10.add([acc2id_no[_i18].setPosition(0, 0)]);
            acc2id_no[_i18].setTexture('acc2_' + _id8 + '_' + Number(localStorage.getItem('acc2_var' + _id8 + "_" + this.slot_cur)));
            this.data.set('acc2_var' + _id8, Number(localStorage.getItem('acc2_var' + _id8 + "_" + this.slot_cur)));
          }
        }

        // Load ACC 3
        var acc3id = parseInt(localStorage.getItem('acc3_id' + this.slot_cur));
        var acc3id_no = [acc3_1, acc3_2];
        var acc3id_length = acc3id_no.length;
        for (var _i19 = 0; _i19 < acc3id_length; _i19++) {
          var _id9 = _i19 + 1;
          if (acc3id === _id9) {
            this.data.set('acc3_' + _id9, 1);
            this.data.set('val10', _id9);
            layer2.add([acc3id_no[_i19].setPosition(0, 0)]);
          }
        }

        // Load Eyes
        var eye1id = parseInt(localStorage.getItem('eye_id' + this.slot_cur));
        var eye1id_no = [eye1_1];
        var eye1id_length = eye1id_no.length;
        var eye1_colorid = parseInt(localStorage.getItem('eye1_id' + this.slot_cur));
        for (var _i20 = 0; _i20 < eye1id_length; _i20++) {
          var _id10 = _i20 + 1;
          if (eye1id === _id10) {
            layer7.remove([eye1_1.setPosition(-400, -400)]);
            this.data.set('eye_' + _id10, 1);
            this.data.set('val11', _id10);
            this.data.set('val11_1', eye1_colorid);
            layer7.add([eye1id_no[_i20].setPosition(0, 0)]);
            eye1id_no[_i20].setTexture('eye1_' + eye1_colorid);
          }
        }

        // Load Eyebrows
        var eyebrowid = parseInt(localStorage.getItem('eyebrow_id' + this.slot_cur));
        var eyebrowid_no = [eyebrow_1, eyebrow_2, eyebrow_3, eyebrow_4, eyebrow_5, eyebrow_6, eyebrow_7, eyebrow_8, eyebrow_9, eyebrow_10, eyebrow_11];
        var eyebrowid_length = eyebrowid_no.length;
        for (var _i21 = 0; _i21 < eyebrowid_length; _i21++) {
          var _id11 = _i21 + 1;
          if (eyebrowid === _id11) {
            layer8.remove([eyebrow_1.setPosition(0, 0)]);
            this.data.set('eyebrow_' + _id11, 1);
            this.data.set('val12', _id11);
            layer8.add([eyebrowid_no[_i21].setPosition(0, 0)]);
          }
        }

        // Load Backgrounds
        var backgroundid = parseInt(localStorage.getItem('background_id' + this.slot_cur));
        var backgroundid_no = [background_1, background_2, background_3];
        var backgroundid_length = backgroundid_no.length;
        for (var _i22 = 0; _i22 < backgroundid_length; _i22++) {
          var _id12 = _i22 + 1;
          if (backgroundid === _id12) {
            layer1.remove([background_1.setPosition(-900, -1400)]);
            this.data.set('background_' + _id12, 1);
            this.data.set('val13', _id12);
            layer1.add([backgroundid_no[_i22].setPosition(0, 0)]);
          }
        }

        // Load Noses
        var noseid = parseInt(localStorage.getItem('nose_id' + this.slot_cur));
        var noseid_no = [nose_1, nose_2, nose_3, nose_4, nose_5, nose_6, nose_7, nose_8, nose_9, nose_10, nose_11];
        var noseid_length = noseid_no.length;
        for (var _i23 = 0; _i23 < noseid_length; _i23++) {
          var _id13 = _i23 + 1;
          if (noseid === _id13) {
            layer5.remove([nose_1.setPosition(-400, -400)]);
            this.data.set('nose_' + _id13, 1);
            this.data.set('val15', _id13);
            layer5.add([noseid_no[_i23].setPosition(0, 0)]);
          }
        }

        // Load Mouths
        var mouthid = parseInt(localStorage.getItem('mouth_id' + this.slot_cur));
        var mouthid_no = [mouth_1, mouth_2, mouth_3, mouth_4, mouth_5, mouth_6, mouth_7, mouth_8, mouth_9, mouth_10, mouth_11];
        var mouthid_length = mouthid_no.length;
        for (var _i24 = 0; _i24 < mouthid_length; _i24++) {
          var _id14 = _i24 + 1;
          if (mouthid === _id14) {
            layer5.remove([mouth_1.setPosition(-400, -400)]);
            this.data.set('mouth_' + _id14, 1);
            this.data.set('val16', _id14);
            layer5.add([mouthid_no[_i24].setPosition(0, 0)]);
          }
        }

        // Load Ears

        var earid = parseInt(localStorage.getItem('ear_id' + this.slot_cur));
        var earid_no = [ear_2, ear_2];
        var earid_length = earid_no.length;
        var skin = parseInt(localStorage.getItem('skin_id' + this.slot_cur));
        var curskin = Number(skin + 1);
        for (var _i25 = 0; _i25 < earid_length; _i25++) {
          var _id15 = _i25 + 2;
          if (earid === _id15) {
            this.data.set('ear_' + _id15, 1);
            this.data.set('val17', _id15);
            layer19.add([earid_no[_i25].setPosition(0, 0)]);
            earid_no[_i25].setTexture("ear" + earid + "_" + curskin);
          }
        }
        this.load_true = 0;
      }

      // if(this.data.get('val1') != 0){
      //     layer9.setInteractive();
      //     this.input.setDraggable(layer9);
      //     }else if(this.data.get('val1') === 0){
      //     layer9.removeInteractive();
      //     }

      // this.data.set('val13', 1);    
      // layer1.setPosition(layerxpos, layerypos);
      // layer1.add([
      // background_0.setPosition(0,0)
      // ])

      eye_slot.emit('pointerdown');
    }
  }, {
    key: "newdress",
    value: function newdress() {
      var _this5 = this;
      // Identificar los otros
      var dress = this.add.group();
      this.dress = dress;
      var tops = this.add.group();
      this.tops = tops;
      var hairs = this.add.group();
      this.hairs = hairs;
      var backhairs = this.add.group();
      this.backhairs = backhairs;
      var shirts = this.add.group();
      this.shirts = shirts;
      var skirts = this.add.group();
      this.skirts = skirts;
      var pants = this.add.group();
      this.pants = pants;
      var acc1 = this.add.group();
      this.acc1 = acc1;
      var acc2 = this.add.group();
      this.acc2 = acc2;
      var acc3 = this.add.group();
      this.acc3 = acc3;
      var eyes = this.add.group();
      this.eyes = eyes;
      var eyebrows = this.add.group();
      this.eyebrows = eyebrows;
      var backgrounds = this.add.group();
      this.backgrounds = backgrounds;
      var noses = this.add.group();
      this.noses = noses;
      var mouths = this.add.group();
      this.mouths = mouths;
      var colors = this.add.group();
      this.colors = colors;
      var color_eyes = this.add.group();
      this.color_eyes = color_eyes;
      var ears = this.add.group();
      this.ears = ears;
      var color_shirt = this.add.group();
      this.color_shirt = color_shirt;
      var color_pants = this.add.group();
      this.color_pants = color_pants;
      var color_skirt = this.add.group();
      this.color_skirt = color_skirt;
      var color_acc2 = this.add.group();
      this.color_acc2 = color_acc2;
      this.assetdestroy = new Phaser.Events.EventEmitter();
      this.assetdestroy.on('destroy', function () {
        _this5.tops.destroy(true);
        _this5.dress.destroy(true);
        _this5.hairs.destroy(true);
        _this5.backhairs.destroy(true);
        _this5.shirts.destroy(true);
        _this5.skirts.destroy(true);
        _this5.pants.destroy(true);
        _this5.acc1.destroy(true);
        _this5.acc2.destroy(true);
        _this5.acc3.destroy(true);
        _this5.eyes.destroy(true);
        _this5.eyebrows.destroy(true);
        _this5.noses.destroy(true);
        _this5.mouths.destroy(true);
        _this5.ears.destroy(true);
        _this5.color_eyes.destroy(true);
        _this5.backgrounds.destroy(true);
        _this5.color_shirt.destroy(true);
        _this5.color_pants.destroy(true);
        _this5.color_skirt.destroy(true);
        _this5.color_acc2.destroy(true);
      });
    }
  }, {
    key: "update",
    value: function update() {}
  }]);
}(Phaser.Scene);
},{"../CST":"src/CST.js"}],"src/main.js":[function(require,module,exports) {
"use strict";

var _load_scene = require("./scenes/load_scene");
var _menu_scene = require("./scenes/menu_scene");
var _game_scene = require("./scenes/game_scene");
document.getElementById('startButton').addEventListener('click', function () {
  var element = document.getElementById('startButton');
  var intro_element = document.getElementById('intro');
  var config = {
    type: Phaser.AUTO,
    width: 720,
    height: 1280,
    scale: {
      mode: Phaser.Scale.FIT,
      // autoCenter: Phaser.Scale.CENTER_BOTH,
      autoCenter: Phaser.Scale.NO_CENTER
    },
    parent: 'phaser-parent',
    dom: {
      createContainer: true
    },
    scene: [_load_scene.load_scene, _menu_scene.menu_scene, _game_scene.game_scene],
    render: {
      preserveDrawingBuffer: true
    }
  };
  var game = new Phaser.Game(config);
  element.remove();
  intro_element.remove();
});
},{"./scenes/load_scene":"src/scenes/load_scene.js","./scenes/menu_scene":"src/scenes/menu_scene.js","./scenes/game_scene":"src/scenes/game_scene.js"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50953" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1e43358e.js.map