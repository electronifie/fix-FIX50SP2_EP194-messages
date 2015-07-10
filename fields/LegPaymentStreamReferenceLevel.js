var invert = require('invert-obj');

function LegPaymentStreamReferenceLevel (legPaymentStreamReferenceLevel) {
  this.message = legPaymentStreamReferenceLevel;
}

LegPaymentStreamReferenceLevel.prototype.value = function () {
  return this.message;
};

LegPaymentStreamReferenceLevel.Tag = '41569';

LegPaymentStreamReferenceLevel.Type = 'QTY';

module.exports = LegPaymentStreamReferenceLevel;