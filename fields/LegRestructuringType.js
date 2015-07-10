var invert = require('invert-obj');

function LegRestructuringType (legRestructuringType) {
  this.message = legRestructuringType;
}

LegRestructuringType.prototype.value = function () {
  return this.message;
};

LegRestructuringType.Tag = '2149';

LegRestructuringType.Type = 'STRING';

module.exports = LegRestructuringType;