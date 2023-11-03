"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = _interopRequireDefault(require("../models/user.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getUser(req, res, next) {
  return regeneratorRuntime.async(function getUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.render('index');

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}

;

function userCreatePost(req, res, next) {
  var userData, newUser;
  return regeneratorRuntime.async(function userCreatePost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          userData = req.body;
          console.log(userData);
          _context2.next = 4;
          return regeneratorRuntime.awrap(_user["default"].create(userData));

        case 4:
          newUser = _context2.sent;

          if (!newUser) {
            _context2.next = 9;
            break;
          }

          res.send('User success created');
          _context2.next = 10;
          break;

        case 9:
          throw new HTTPError('Invalid create user, 400');

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  });
}

;

function userReadAll(req, res, next) {
  var users;
  return regeneratorRuntime.async(function userReadAll$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(User.readAll());

        case 2:
          users = _context3.sent;
          console.log(users);
          res.json(users);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}

var _default = {
  userCreatePost: userCreatePost,
  userReadAll: userReadAll,
  getUser: getUser
};
exports["default"] = _default;
//# sourceMappingURL=UserController.dev.js.map
