var PaymentStreamRate = require('../fields/PaymentStreamRate');
var PaymentStreamFixedAmount = require('../fields/PaymentStreamFixedAmount');
var PaymentStreamRateOrAmountCurrency = require('../fields/PaymentStreamRateOrAmountCurrency');
var PaymentStreamFixedAmountUnitOfMeasure = require('../fields/PaymentStreamFixedAmountUnitOfMeasure');
var PaymentStreamTotalFixedAmount = require('../fields/PaymentStreamTotalFixedAmount');
var PaymentStreamFutureValueNotional = require('../fields/PaymentStreamFutureValueNotional');
var PaymentStreamFutureValueDateAdjusted = require('../fields/PaymentStreamFutureValueDateAdjusted');
var PaymentStreamWorldScaleRate = require('../fields/PaymentStreamWorldScaleRate');
var PaymentStreamContractPrice = require('../fields/PaymentStreamContractPrice');
var PaymentStreamContractPriceCurrency = require('../fields/PaymentStreamContractPriceCurrency');

function PaymentStreamFixedRate (paymentStreamFixedRate) {
  this.message = paymentStreamFixedRate;
}
/* field */
PaymentStreamFixedRate.prototype.paymentStreamRate = function () {
  return new PaymentStreamRate(this.message.tags[PaymentStreamRate.Tag]);
};

/* field */
PaymentStreamFixedRate.prototype.paymentStreamFixedAmount = function () {
  return new PaymentStreamFixedAmount(this.message.tags[PaymentStreamFixedAmount.Tag]);
};

/* field */
PaymentStreamFixedRate.prototype.paymentStreamRateOrAmountCurrency = function () {
  return new PaymentStreamRateOrAmountCurrency(this.message.tags[PaymentStreamRateOrAmountCurrency.Tag]);
};

/* field */
PaymentStreamFixedRate.prototype.paymentStreamFixedAmountUnitOfMeasure = function () {
  return new PaymentStreamFixedAmountUnitOfMeasure(this.message.tags[PaymentStreamFixedAmountUnitOfMeasure.Tag]);
};

/* field */
PaymentStreamFixedRate.prototype.paymentStreamTotalFixedAmount = function () {
  return new PaymentStreamTotalFixedAmount(this.message.tags[PaymentStreamTotalFixedAmount.Tag]);
};

/* field */
PaymentStreamFixedRate.prototype.paymentStreamFutureValueNotional = function () {
  return new PaymentStreamFutureValueNotional(this.message.tags[PaymentStreamFutureValueNotional.Tag]);
};

/* field */
PaymentStreamFixedRate.prototype.paymentStreamFutureValueDateAdjusted = function () {
  return new PaymentStreamFutureValueDateAdjusted(this.message.tags[PaymentStreamFutureValueDateAdjusted.Tag]);
};

/* field */
PaymentStreamFixedRate.prototype.paymentStreamWorldScaleRate = function () {
  return new PaymentStreamWorldScaleRate(this.message.tags[PaymentStreamWorldScaleRate.Tag]);
};

/* field */
PaymentStreamFixedRate.prototype.paymentStreamContractPrice = function () {
  return new PaymentStreamContractPrice(this.message.tags[PaymentStreamContractPrice.Tag]);
};

/* field */
PaymentStreamFixedRate.prototype.paymentStreamContractPriceCurrency = function () {
  return new PaymentStreamContractPriceCurrency(this.message.tags[PaymentStreamContractPriceCurrency.Tag]);
};



PaymentStreamFixedRate.Tag = '40784';

module.exports = PaymentStreamFixedRate;