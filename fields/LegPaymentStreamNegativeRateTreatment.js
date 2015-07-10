var invert = require('invert-obj');

function LegPaymentStreamNegativeRateTreatment (legPaymentStreamNegativeRateTreatment) {
  this.message = legPaymentStreamNegativeRateTreatment;
}

LegPaymentStreamNegativeRateTreatment.prototype.value = function () {
  return this.message;
};

LegPaymentStreamNegativeRateTreatment.Tag = '40349';

LegPaymentStreamNegativeRateTreatment.Type = 'INT';

module.exports = LegPaymentStreamNegativeRateTreatment;