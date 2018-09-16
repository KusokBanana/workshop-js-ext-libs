"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _routes = require("./routes");

var _routes2 = _interopRequireDefault(_routes);

var _bottle = require("./bottle");

var _bottle2 = _interopRequireDefault(_bottle);

var _IpService = require("./IpService");

var _IpService2 = _interopRequireDefault(_IpService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var ipService = new _IpService2.default();

_bottle2.default.factory("getCityByIp", ipService.getCityByIp);
_bottle2.default.factory("getWeather", ipService.getWeather);

(0, _routes2.default)(app);

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});