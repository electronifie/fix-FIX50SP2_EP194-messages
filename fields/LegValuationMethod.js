var invert = require('invert-obj');

function LegValuationMethod (legValuationMethod) {
  this.message = legValuationMethod;
}

LegValuationMethod.prototype.value = function () {
  return this.message;
};

LegValuationMethod.Tag = '2196';

LegValuationMethod.Type = 'STRING';

module.exports = LegValuationMethod;