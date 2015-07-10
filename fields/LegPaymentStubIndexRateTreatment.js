var invert = require('invert-obj');

function LegPaymentStubIndexRateTreatment (legPaymentStubIndexRateTreatment) {
  this.message = legPaymentStubIndexRateTreatment;
}

LegPaymentStubIndexRateTreatment.prototype.value = function () {
  return this.message;
};

LegPaymentStubIndexRateTreatment.Tag = '40431';

LegPaymentStubIndexRateTreatment.Type = 'INT';

module.exports = LegPaymentStubIndexRateTreatment;