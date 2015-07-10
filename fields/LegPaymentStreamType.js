var invert = require('invert-obj');

function LegPaymentStreamType (legPaymentStreamType) {
  this.message = legPaymentStreamType;
}

LegPaymentStreamType.prototype.value = function () {
  return this.message;
};

LegPaymentStreamType.Tag = '40279';

LegPaymentStreamType.Type = 'INT';

module.exports = LegPaymentStreamType;