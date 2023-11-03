"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _userRoutes = _interopRequireDefault(require("./routes/userRoutes.js"));

var _teamRoutes = _interopRequireDefault(require("./routes/teamRoutes.js"));

var _playerRoutes = _interopRequireDefault(require("./routes/playerRoutes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _morgan["default"])('tiny'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"]["static"]('public'));
app.use(_userRoutes["default"]);
app.use(_teamRoutes["default"]);
app.use(_playerRoutes["default"]);
app.listen(3000, function () {
  console.log("Server Online in Port 3000!");
});
//# sourceMappingURL=app.dev.js.map
