var LegPaymentStreamRate = require('../fields/LegPaymentStreamRate');
var LegPaymentStreamFixedAmount = require('../fields/LegPaymentStreamFixedAmount');
var LegPaymentStreamRateOrAmountCurrency = require('../fields/LegPaymentStreamRateOrAmountCurrency');
var LegPaymentStreamFixedAmountUnitOfMeasure = require('../fields/LegPaymentStreamFixedAmountUnitOfMeasure');
var LegPaymentStreamTotalFixedAmount = require('../fields/LegPaymentStreamTotalFixedAmount');
var LegPaymentStreamFutureValueNotional = require('../fields/LegPaymentStreamFutureValueNotional');
var LegPaymentStreamFutureValueDateAdjusted = require('../fields/LegPaymentStreamFutureValueDateAdjusted');
var LegPaymentStreamWorldScaleRate = require('../fields/LegPaymentStreamWorldScaleRate');
var LegPaymentStreamContractPrice = require('../fields/LegPaymentStreamContractPrice');
var LegPaymentStreamContractPriceCurrency = require('../fields/LegPaymentStreamContractPriceCurrency');

function LegPaymentStreamFixedRate (legPaymentStreamFixedRate) {
  this.message = legPaymentStreamFixedRate;
}
/* field */
LegPaymentStreamFixedRate.prototype.legPaymentStreamRate = function () {
  return new LegPaymentStreamRate(this.message.tags[LegPaymentStreamRate.Tag]);
};

/* field */
LegPaymentStreamFixedRate.prototype.legPaymentStreamFixedAmount = function () {
  return new LegPaymentStreamFixedAmount(this.message.tags[LegPaymentStreamFixedAmount.Tag]);
};

/* field */
LegPaymentStreamFixedRate.prototype.legPaymentStreamRateOrAmountCurrency = function () {
  return new LegPaymentStreamRateOrAmountCurrency(this.message.tags[LegPaymentStreamRateOrAmountCurrency.Tag]);
};

/* field */
LegPaymentStreamFixedRate.prototype.legPaymentStreamFixedAmountUnitOfMeasure = function () {
  return new LegPaymentStreamFixedAmountUnitOfMeasure(this.message.tags[LegPaymentStreamFixedAmountUnitOfMeasure.Tag]);
};

/* field */
LegPaymentStreamFixedRate.prototype.legPaymentStreamTotalFixedAmount = function () {
  return new LegPaymentStreamTotalFixedAmount(this.message.tags[LegPaymentStreamTotalFixedAmount.Tag]);
};

/* field */
LegPaymentStreamFixedRate.prototype.legPaymentStreamFutureValueNotional = function () {
  return new LegPaymentStreamFutureValueNotional(this.message.tags[LegPaymentStreamFutureValueNotional.Tag]);
};

/* field */
LegPaymentStreamFixedRate.prototype.legPaymentStreamFutureValueDateAdjusted = function () {
  return new LegPaymentStreamFutureValueDateAdjusted(this.message.tags[LegPaymentStreamFutureValueDateAdjusted.Tag]);
};

/* field */
LegPaymentStreamFixedRate.prototype.legPaymentStreamWorldScaleRate = function () {
  return new LegPaymentStreamWorldScaleRate(this.message.tags[LegPaymentStreamWorldScaleRate.Tag]);
};

/* field */
LegPaymentStreamFixedRate.prototype.legPaymentStreamContractPrice = function () {
  return new LegPaymentStreamContractPrice(this.message.tags[LegPaymentStreamContractPrice.Tag]);
};

/* field */
LegPaymentStreamFixedRate.prototype.legPaymentStreamContractPriceCurrency = function () {
  return new LegPaymentStreamContractPriceCurrency(this.message.tags[LegPaymentStreamContractPriceCurrency.Tag]);
};



LegPaymentStreamFixedRate.Tag = '40326';

module.exports = LegPaymentStreamFixedRate;