var invert = require('invert-obj');

function UnderlyingPaymentStreamWorldScaleRate (underlyingPaymentStreamWorldScaleRate) {
  this.message = underlyingPaymentStreamWorldScaleRate;
}

UnderlyingPaymentStreamWorldScaleRate.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamWorldScaleRate.Tag = '41906';

UnderlyingPaymentStreamWorldScaleRate.Type = 'FLOAT';

module.exports = UnderlyingPaymentStreamWorldScaleRate;