'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cleanDeep;

var _lodash = require('lodash.isempty');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.isplainobject');

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = require('lodash.transform');

var _lodash6 = _interopRequireDefault(_lodash5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Export `cleanDeep` function.
 */

function cleanDeep(object) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _ref$emptyArrays = _ref.emptyArrays;
  let emptyArrays = _ref$emptyArrays === undefined ? true : _ref$emptyArrays;
  var _ref$emptyObjects = _ref.emptyObjects;
  let emptyObjects = _ref$emptyObjects === undefined ? true : _ref$emptyObjects;
  var _ref$emptyStrings = _ref.emptyStrings;
  let emptyStrings = _ref$emptyStrings === undefined ? true : _ref$emptyStrings;
  var _ref$nullValues = _ref.nullValues;
  let nullValues = _ref$nullValues === undefined ? true : _ref$nullValues;
  var _ref$undefinedValues = _ref.undefinedValues;
  let undefinedValues = _ref$undefinedValues === undefined ? true : _ref$undefinedValues;

  return (0, _lodash6.default)(object, (result, value, key) => {
    // Recurse into objects.
    if ((0, _lodash4.default)(value)) {
      value = cleanDeep(value, { emptyArrays: emptyArrays, emptyObjects: emptyObjects, emptyStrings: emptyStrings, nullValues: nullValues, undefinedValues: undefinedValues });
    }

    // Exclude empty objects.
    if (emptyObjects && (0, _lodash4.default)(value) && (0, _lodash2.default)(value)) {
      return;
    }

    // Exclude empty arrays.
    if (emptyArrays && Array.isArray(value) && !value.length) {
      return;
    }

    // Exclude empty strings.
    if (emptyStrings && value === '') {
      return;
    }

    // Exclude null values.
    if (nullValues && value === null) {
      return;
    }

    // Exclude undefined values.
    if (undefinedValues && value === undefined) {
      return;
    }

    result[key] = value;
  });
}
/**
 * Module dependencies.
 */

module.exports = exports['default'];