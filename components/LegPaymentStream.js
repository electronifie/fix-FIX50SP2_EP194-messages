var LegPaymentStreamPaymentDates = require('../components/LegPaymentStreamPaymentDates');
var LegPaymentStreamResetDates = require('../components/LegPaymentStreamResetDates');
var LegPaymentStreamFixedRate = require('../components/LegPaymentStreamFixedRate');
var LegPaymentStreamFloatingRate = require('../components/LegPaymentStreamFloatingRate');
var LegPaymentStreamNonDeliverableSettlTerms = require('../components/LegPaymentStreamNonDeliverableSettlTerms');
var LegPaymentStreamType = require('../fields/LegPaymentStreamType');
var LegPaymentStreamMarketRate = require('../fields/LegPaymentStreamMarketRate');
var LegPaymentStreamDelayIndicator = require('../fields/LegPaymentStreamDelayIndicator');
var LegPaymentStreamSettlCurrency = require('../fields/LegPaymentStreamSettlCurrency');
var LegPaymentStreamDayCount = require('../fields/LegPaymentStreamDayCount');
var LegPaymentStreamAccrualDays = require('../fields/LegPaymentStreamAccrualDays');
var LegPaymentStreamDiscountType = require('../fields/LegPaymentStreamDiscountType');
var LegPaymentStreamDiscountRate = require('../fields/LegPaymentStreamDiscountRate');
var LegPaymentStreamDiscountRateDayCount = require('../fields/LegPaymentStreamDiscountRateDayCount');
var LegPaymentStreamCompoundingMethod = require('../fields/LegPaymentStreamCompoundingMethod');
var LegPaymentStreamInitialPrincipalExchangeIndicator = require('../fields/LegPaymentStreamInitialPrincipalExchangeIndicator');
var LegPaymentStreamInterimPrincipalExchangeIndicator = require('../fields/LegPaymentStreamInterimPrincipalExchangeIndicator');
var LegPaymentStreamFinalPrincipalExchangeIndicator = require('../fields/LegPaymentStreamFinalPrincipalExchangeIndicator');
var LegPaymentStreamFlatRateIndicator = require('../fields/LegPaymentStreamFlatRateIndicator');
var LegPaymentStreamFlatRateAmount = require('../fields/LegPaymentStreamFlatRateAmount');
var LegPaymentStreamFlatRateCurrency = require('../fields/LegPaymentStreamFlatRateCurrency');
var LegStreamMaximumPaymentAmount = require('../fields/LegStreamMaximumPaymentAmount');
var LegStreamMaximumPaymentCurrency = require('../fields/LegStreamMaximumPaymentCurrency');
var LegStreamMaximumTransactionAmount = require('../fields/LegStreamMaximumTransactionAmount');
var LegStreamMaximumTransactionCurrency = require('../fields/LegStreamMaximumTransactionCurrency');

function LegPaymentStream (legPaymentStream) {
  this.message = legPaymentStream;
}
/* component */
LegPaymentStream.prototype.legPaymentStreamPaymentDates = function () {
  return this.message.groups[LegPaymentStreamPaymentDates.Tag]
    .map(function (legPaymentStreamPaymentDates) {
      return new LegPaymentStreamPaymentDates(legPaymentStreamPaymentDates);
  });
};

/* component */
LegPaymentStream.prototype.legPaymentStreamResetDates = function () {
  return this.message.groups[LegPaymentStreamResetDates.Tag]
    .map(function (legPaymentStreamResetDates) {
      return new LegPaymentStreamResetDates(legPaymentStreamResetDates);
  });
};

/* component */
LegPaymentStream.prototype.legPaymentStreamFixedRate = function () {
  return this.message.groups[LegPaymentStreamFixedRate.Tag]
    .map(function (legPaymentStreamFixedRate) {
      return new LegPaymentStreamFixedRate(legPaymentStreamFixedRate);
  });
};

/* component */
LegPaymentStream.prototype.legPaymentStreamFloatingRate = function () {
  return this.message.groups[LegPaymentStreamFloatingRate.Tag]
    .map(function (legPaymentStreamFloatingRate) {
      return new LegPaymentStreamFloatingRate(legPaymentStreamFloatingRate);
  });
};

/* component */
LegPaymentStream.prototype.legPaymentStreamNonDeliverableSettlTerms = function () {
  return this.message.groups[LegPaymentStreamNonDeliverableSettlTerms.Tag]
    .map(function (legPaymentStreamNonDeliverableSettlTerms) {
      return new LegPaymentStreamNonDeliverableSettlTerms(legPaymentStreamNonDeliverableSettlTerms);
  });
};

/* field */
LegPaymentStream.prototype.legPaymentStreamType = function () {
  return new LegPaymentStreamType(this.message.tags[LegPaymentStreamType.Tag]);
};

/* field */
LegPaymentStream.prototype.legPaymentStreamMarketRate = function () {
  return new LegPaymentStreamMarketRate(this.message.tags[LegPaymentStreamMarketRate.Tag]);
};

/* field */
LegPaymentStream.prototype.legPaymentStreamDelayIndicator = function () {
  return new LegPaymentStreamDelayIndicator(this.message.tags[LegPaymentStreamDelayIndicator.Tag]);
};

/* field */
LegPaymentStream.prototype.legPaymentStreamSettlCurrency = function () {
  return new LegPaymentStreamSettlCurrency(this.message.tags[LegPaymentStreamSettlCurrency.Tag]);
};

/* field */
LegPaymentStream.prototype.legPaymentStreamDayCount = function () {
  return new LegPaymentStreamDayCount(this.message.tags[LegPaymentStreamDayCount.Tag]);
};

/* field */
LegPaymentStream.prototype.legPaymentStreamAccrualDays = function () {
  return new LegPaymentStreamAccrualDays(this.message.tags[LegPaymentStreamAccrualDays.Tag]);
};

/* field */
LegPaymentStream.prototype.legPaymentStreamDiscountType = function () {
  return new LegPaymentStreamDiscountType(this.message.tags[LegPaymentStreamDiscountType.Tag]);
};

/* field */
LegPaymentStream.prototype.legPaymentStreamDiscountRate = function () {
  return new LegPaymentStreamDiscountRate(this.message.tags[LegPaymentStreamDiscountRate.Tag]);
};

/* field */
LegPaymentStream.prototype.legPaymentStreamDiscountRateDayCount = function () {
  return new LegPaymentStreamDiscountRateDayCount(this.message.tags[LegPaymentStreamDiscountRateDayCount.Tag]);
};

/* field */
LegPaymentStream.prototype.legPaymentStreamCompoundingMethod = function () {
  return new LegPaymentStreamCompoundingMethod(this.message.tags[LegPaymentStreamCompoundingMethod.Tag]);
};

/* field */
LegPaymentStream.prototype.legPaymentStreamInitialPrincipalExchangeIndicator = function () {
  return new LegPaymentStreamInitialPrincipalExchangeIndicator(this.message.tags[LegPaymentStreamInitialPrincipalExchangeIndicator.Tag]);
};

/* field */
LegPaymentStream.prototype.legPaymentStreamInterimPrincipalExchangeIndicator = function () {
  return new LegPaymentStreamInterimPrincipalExchangeIndicator(this.message.tags[LegPaymentStreamInterimPrincipalExchangeIndicator.Tag]);
};

/* field */
LegPaymentStream.prototype.legPaymentStreamFinalPrincipalExchangeIndicator = function () {
  return new LegPaymentStreamFinalPrincipalExchangeIndicator(this.message.tags[LegPaymentStreamFinalPrincipalExchangeIndicator.Tag]);
};

/* field */
LegPaymentStream.prototype.legPaymentStreamFlatRateIndicator = function () {
  return new LegPaymentStreamFlatRateIndicator(this.message.tags[LegPaymentStreamFlatRateIndicator.Tag]);
};

/* field */
LegPaymentStream.prototype.legPaymentStreamFlatRateAmount = function () {
  return new LegPaymentStreamFlatRateAmount(this.message.tags[LegPaymentStreamFlatRateAmount.Tag]);
};

/* field */
LegPaymentStream.prototype.legPaymentStreamFlatRateCurrency = function () {
  return new LegPaymentStreamFlatRateCurrency(this.message.tags[LegPaymentStreamFlatRateCurrency.Tag]);
};

/* field */
LegPaymentStream.prototype.legStreamMaximumPaymentAmount = function () {
  return new LegStreamMaximumPaymentAmount(this.message.tags[LegStreamMaximumPaymentAmount.Tag]);
};

/* field */
LegPaymentStream.prototype.legStreamMaximumPaymentCurrency = function () {
  return new LegStreamMaximumPaymentCurrency(this.message.tags[LegStreamMaximumPaymentCurrency.Tag]);
};

/* field */
LegPaymentStream.prototype.legStreamMaximumTransactionAmount = function () {
  return new LegStreamMaximumTransactionAmount(this.message.tags[LegStreamMaximumTransactionAmount.Tag]);
};

/* field */
LegPaymentStream.prototype.legStreamMaximumTransactionCurrency = function () {
  return new LegStreamMaximumTransactionCurrency(this.message.tags[LegStreamMaximumTransactionCurrency.Tag]);
};



LegPaymentStream.Tag = '40279';

module.exports = LegPaymentStream;