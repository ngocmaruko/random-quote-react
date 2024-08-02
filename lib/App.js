'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _logoSvg = require('./logo.svg');

var _logoSvg2 = _interopRequireDefault(_logoSvg);

require('./App.css');

var _ComponentsRandomQuoteRandomQuote = require('./Components/RandomQuote/RandomQuote');

function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(_ComponentsRandomQuoteRandomQuote.RandomQuote, null)
  );
}

exports['default'] = App;
module.exports = exports['default'];