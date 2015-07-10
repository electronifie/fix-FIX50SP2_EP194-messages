var invert = require('invert-obj');

function LegPaymentStreamRateTreatment (legPaymentStreamRateTreatment) {
  this.message = legPaymentStreamRateTreatment;
}

LegPaymentStreamRateTreatment.prototype.value = function () {
  return this.message;
};

LegPaymentStreamRateTreatment.Tag = '40338';

LegPaymentStreamRateTreatment.Type = 'INT';

module.exports = LegPaymentStreamRateTreatment;