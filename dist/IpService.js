"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _yahooWeather = require("yahoo-weather");

var _yahooWeather2 = _interopRequireDefault(_yahooWeather);

var _nodeFetch = require("node-fetch");

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IpService = function () {
  function IpService() {
    _classCallCheck(this, IpService);
  }

  _createClass(IpService, [{
    key: "getCityByIp",
    value: function getCityByIp(container) {
      return (0, _nodeFetch2.default)("http://api.db-ip.com/addrinfo?api_key=bc2ab711d740d7cfa6fcb0ca8822cb327e38844f&addr=" + container.ip).then(function (response) {
        return response.json().then(function (json) {
          return json.city || false;
        });
      });
    }
  }, {
    key: "getWeather",
    value: function getWeather(container) {
      return (0, _yahooWeather2.default)(container.city).then(function (info) {
        if (!info) return false;
        return {
          temp: info.item.condition.temp,
          wind: info.wind,
          atmosphere: info.atmosphere,
          city: info.location.city
        };
      });
    }
  }]);

  return IpService;
}();

exports.default = IpService;