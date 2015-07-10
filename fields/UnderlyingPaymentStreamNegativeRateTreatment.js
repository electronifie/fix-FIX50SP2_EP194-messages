var invert = require('invert-obj');

function UnderlyingPaymentStreamNegativeRateTreatment (underlyingPaymentStreamNegativeRateTreatment) {
  this.message = underlyingPaymentStreamNegativeRateTreatment;
}

UnderlyingPaymentStreamNegativeRateTreatment.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamNegativeRateTreatment.Tag = '40638';

UnderlyingPaymentStreamNegativeRateTreatment.Type = 'INT';

module.exports = UnderlyingPaymentStreamNegativeRateTreatment;