"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = 3000;

_app["default"].listen(PORT);

console.log('Server running on port ' + PORT);