"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bottle = require("./bottle");

var _bottle2 = _interopRequireDefault(_bottle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  app.get("/api/:ip", function (req, res, next) {
    _bottle2.default.value("ip", req.params.ip);
    _bottle2.default.container.getCityByIp.then(function (city) {
      if (!city) return next(new Error("Incorrect ip"));
      _bottle2.default.value("city", city);

      _bottle2.default.container.getWeather.then(function (weather) {
        if (!weather) return next(new Error("Incorrect ip"));
        res.send(JSON.stringify(weather));
      });
    });
  });
};