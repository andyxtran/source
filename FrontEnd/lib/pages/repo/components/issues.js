'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

var _List = require('@material-ui/core/List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('@material-ui/core/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemIcon = require('@material-ui/core/ListItemIcon');

var _ListItemIcon2 = _interopRequireDefault(_ListItemIcon);

var _ListItemText = require('@material-ui/core/ListItemText');

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _Error = require('@material-ui/icons/Error');

var _Error2 = _interopRequireDefault(_Error);

var _Comment = require('@material-ui/icons/Comment');

var _Comment2 = _interopRequireDefault(_Comment);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    }
  };
};

var InsetList = function (_React$Component) {
  _inherits(InsetList, _React$Component);

  function InsetList() {
    _classCallCheck(this, InsetList);

    return _possibleConstructorReturn(this, (InsetList.__proto__ || Object.getPrototypeOf(InsetList)).apply(this, arguments));
  }

  _createClass(InsetList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Paper2.default,
          { className: 'RepoPageIssuesPaper', elevation: 0 },
          _react2.default.createElement(
            _List2.default,
            { component: 'nav' },
            this.props.issues !== false && this.props.issues !== undefined && this.props.issues.map(function (n, index) {
              return _react2.default.createElement(
                _ListItem2.default,
                { button: true, onClick: function onClick() {
                    return _this2.props.handleIssue(n._id);
                  } },
                _react2.default.createElement(
                  _ListItemIcon2.default,
                  null,
                  _react2.default.createElement(_Error2.default, null)
                ),
                _react2.default.createElement(_ListItemText2.default, { inset: true, primary: n.title, secondary: '#' + index + ' asked by ' + n.creator + ' on ' + n.created }),
                _react2.default.createElement(
                  _ListItemIcon2.default,
                  null,
                  _react2.default.createElement(_Comment2.default, null)
                ),
                _react2.default.createElement(
                  'p',
                  { style: { color: "grey" } },
                  '# coming soon'
                )
              );
            })
          )
        )
      );
    }
  }]);

  return InsetList;
}(_react2.default.Component);

InsetList.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(InsetList);