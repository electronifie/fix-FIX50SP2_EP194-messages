var invert = require('invert-obj');

function LegPaymentStubIndex2RateTreatment (legPaymentStubIndex2RateTreatment) {
  this.message = legPaymentStubIndex2RateTreatment;
}

LegPaymentStubIndex2RateTreatment.prototype.value = function () {
  return this.message;
};

LegPaymentStubIndex2RateTreatment.Tag = '40445';

LegPaymentStubIndex2RateTreatment.Type = 'INT';

module.exports = LegPaymentStubIndex2RateTreatment;