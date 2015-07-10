var UnderlyingPaymentStreamRate = require('../fields/UnderlyingPaymentStreamRate');
var UnderlyingPaymentStreamFixedAmount = require('../fields/UnderlyingPaymentStreamFixedAmount');
var UnderlyingPaymentStreamRateOrAmountCurrency = require('../fields/UnderlyingPaymentStreamRateOrAmountCurrency');
var UnderlyingPaymentStreamFixedAmountUnitOfMeasure = require('../fields/UnderlyingPaymentStreamFixedAmountUnitOfMeasure');
var UnderlyingPaymentStreamTotalFixedAmount = require('../fields/UnderlyingPaymentStreamTotalFixedAmount');
var UnderlyingPaymentStreamFutureValueNotional = require('../fields/UnderlyingPaymentStreamFutureValueNotional');
var UnderlyingPaymentStreamFutureValueDateAdjusted = require('../fields/UnderlyingPaymentStreamFutureValueDateAdjusted');
var UnderlyingPaymentStreamWorldScaleRate = require('../fields/UnderlyingPaymentStreamWorldScaleRate');
var UnderlyingPaymentStreamContractPrice = require('../fields/UnderlyingPaymentStreamContractPrice');
var UnderlyingPaymentStreamContractPriceCurrency = require('../fields/UnderlyingPaymentStreamContractPriceCurrency');

function UnderlyingPaymentStreamFixedRate (underlyingPaymentStreamFixedRate) {
  this.message = underlyingPaymentStreamFixedRate;
}
/* field */
UnderlyingPaymentStreamFixedRate.prototype.underlyingPaymentStreamRate = function () {
  return new UnderlyingPaymentStreamRate(this.message.tags[UnderlyingPaymentStreamRate.Tag]);
};

/* field */
UnderlyingPaymentStreamFixedRate.prototype.underlyingPaymentStreamFixedAmount = function () {
  return new UnderlyingPaymentStreamFixedAmount(this.message.tags[UnderlyingPaymentStreamFixedAmount.Tag]);
};

/* field */
UnderlyingPaymentStreamFixedRate.prototype.underlyingPaymentStreamRateOrAmountCurrency = function () {
  return new UnderlyingPaymentStreamRateOrAmountCurrency(this.message.tags[UnderlyingPaymentStreamRateOrAmountCurrency.Tag]);
};

/* field */
UnderlyingPaymentStreamFixedRate.prototype.underlyingPaymentStreamFixedAmountUnitOfMeasure = function () {
  return new UnderlyingPaymentStreamFixedAmountUnitOfMeasure(this.message.tags[UnderlyingPaymentStreamFixedAmountUnitOfMeasure.Tag]);
};

/* field */
UnderlyingPaymentStreamFixedRate.prototype.underlyingPaymentStreamTotalFixedAmount = function () {
  return new UnderlyingPaymentStreamTotalFixedAmount(this.message.tags[UnderlyingPaymentStreamTotalFixedAmount.Tag]);
};

/* field */
UnderlyingPaymentStreamFixedRate.prototype.underlyingPaymentStreamFutureValueNotional = function () {
  return new UnderlyingPaymentStreamFutureValueNotional(this.message.tags[UnderlyingPaymentStreamFutureValueNotional.Tag]);
};

/* field */
UnderlyingPaymentStreamFixedRate.prototype.underlyingPaymentStreamFutureValueDateAdjusted = function () {
  return new UnderlyingPaymentStreamFutureValueDateAdjusted(this.message.tags[UnderlyingPaymentStreamFutureValueDateAdjusted.Tag]);
};

/* field */
UnderlyingPaymentStreamFixedRate.prototype.underlyingPaymentStreamWorldScaleRate = function () {
  return new UnderlyingPaymentStreamWorldScaleRate(this.message.tags[UnderlyingPaymentStreamWorldScaleRate.Tag]);
};

/* field */
UnderlyingPaymentStreamFixedRate.prototype.underlyingPaymentStreamContractPrice = function () {
  return new UnderlyingPaymentStreamContractPrice(this.message.tags[UnderlyingPaymentStreamContractPrice.Tag]);
};

/* field */
UnderlyingPaymentStreamFixedRate.prototype.underlyingPaymentStreamContractPriceCurrency = function () {
  return new UnderlyingPaymentStreamContractPriceCurrency(this.message.tags[UnderlyingPaymentStreamContractPriceCurrency.Tag]);
};



UnderlyingPaymentStreamFixedRate.Tag = '40615';

module.exports = UnderlyingPaymentStreamFixedRate;