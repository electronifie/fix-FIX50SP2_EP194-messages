var invert = require('invert-obj');

function UnderlyingPaymentStreamRateTreatment (underlyingPaymentStreamRateTreatment) {
  this.message = underlyingPaymentStreamRateTreatment;
}

UnderlyingPaymentStreamRateTreatment.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamRateTreatment.Tag = '40627';

UnderlyingPaymentStreamRateTreatment.Type = 'INT';

module.exports = UnderlyingPaymentStreamRateTreatment;