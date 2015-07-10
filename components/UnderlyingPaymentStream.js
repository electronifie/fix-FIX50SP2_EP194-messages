var UnderlyingPaymentStreamPaymentDates = require('../components/UnderlyingPaymentStreamPaymentDates');
var UnderlyingPaymentStreamResetDates = require('../components/UnderlyingPaymentStreamResetDates');
var UnderlyingPaymentStreamFixedRate = require('../components/UnderlyingPaymentStreamFixedRate');
var UnderlyingPaymentStreamFloatingRate = require('../components/UnderlyingPaymentStreamFloatingRate');
var UnderlyingPaymentStreamNonDeliverableSettlTerms = require('../components/UnderlyingPaymentStreamNonDeliverableSettlTerms');
var UnderlyingPaymentStreamType = require('../fields/UnderlyingPaymentStreamType');
var UnderlyingPaymentStreamMarketRate = require('../fields/UnderlyingPaymentStreamMarketRate');
var UnderlyingPaymentStreamDelayIndicator = require('../fields/UnderlyingPaymentStreamDelayIndicator');
var UnderlyingPaymentStreamSettlCurrency = require('../fields/UnderlyingPaymentStreamSettlCurrency');
var UnderlyingPaymentStreamDayCount = require('../fields/UnderlyingPaymentStreamDayCount');
var UnderlyingPaymentStreamAccrualDays = require('../fields/UnderlyingPaymentStreamAccrualDays');
var UnderlyingPaymentStreamDiscountType = require('../fields/UnderlyingPaymentStreamDiscountType');
var UnderlyingPaymentStreamDiscountRate = require('../fields/UnderlyingPaymentStreamDiscountRate');
var UnderlyingPaymentStreamDiscountRateDayCount = require('../fields/UnderlyingPaymentStreamDiscountRateDayCount');
var UnderlyingPaymentStreamCompoundingMethod = require('../fields/UnderlyingPaymentStreamCompoundingMethod');
var UnderlyingPaymentStreamInitialPrincipalExchangeIndicator = require('../fields/UnderlyingPaymentStreamInitialPrincipalExchangeIndicator');
var UnderlyingPaymentStreamInterimPrincipalExchangeIndicator = require('../fields/UnderlyingPaymentStreamInterimPrincipalExchangeIndicator');
var UnderlyingPaymentStreamFinalPrincipalExchangeIndicator = require('../fields/UnderlyingPaymentStreamFinalPrincipalExchangeIndicator');
var UnderlyingPaymentStreamFlatRateIndicator = require('../fields/UnderlyingPaymentStreamFlatRateIndicator');
var UnderlyingPaymentStreamFlatRateAmount = require('../fields/UnderlyingPaymentStreamFlatRateAmount');
var UnderlyingPaymentStreamFlatRateCurrency = require('../fields/UnderlyingPaymentStreamFlatRateCurrency');
var UnderlyingPaymentStreamMaximumPaymentAmount = require('../fields/UnderlyingPaymentStreamMaximumPaymentAmount');
var UnderlyingPaymentStreamMaximumPaymentCurrency = require('../fields/UnderlyingPaymentStreamMaximumPaymentCurrency');
var UnderlyingPaymentStreamMaximumTransactionAmount = require('../fields/UnderlyingPaymentStreamMaximumTransactionAmount');
var UnderlyingPaymentStreamMaximumTransactionCurrency = require('../fields/UnderlyingPaymentStreamMaximumTransactionCurrency');

function UnderlyingPaymentStream (underlyingPaymentStream) {
  this.message = underlyingPaymentStream;
}
/* component */
UnderlyingPaymentStream.prototype.underlyingPaymentStreamPaymentDates = function () {
  return this.message.groups[UnderlyingPaymentStreamPaymentDates.Tag]
    .map(function (underlyingPaymentStreamPaymentDates) {
      return new UnderlyingPaymentStreamPaymentDates(underlyingPaymentStreamPaymentDates);
  });
};

/* component */
UnderlyingPaymentStream.prototype.underlyingPaymentStreamResetDates = function () {
  return this.message.groups[UnderlyingPaymentStreamResetDates.Tag]
    .map(function (underlyingPaymentStreamResetDates) {
      return new UnderlyingPaymentStreamResetDates(underlyingPaymentStreamResetDates);
  });
};

/* component */
UnderlyingPaymentStream.prototype.underlyingPaymentStreamFixedRate = function () {
  return this.message.groups[UnderlyingPaymentStreamFixedRate.Tag]
    .map(function (underlyingPaymentStreamFixedRate) {
      return new UnderlyingPaymentStreamFixedRate(underlyingPaymentStreamFixedRate);
  });
};

/* component */
UnderlyingPaymentStream.prototype.underlyingPaymentStreamFloatingRate = function () {
  return this.message.groups[UnderlyingPaymentStreamFloatingRate.Tag]
    .map(function (underlyingPaymentStreamFloatingRate) {
      return new UnderlyingPaymentStreamFloatingRate(underlyingPaymentStreamFloatingRate);
  });
};

/* component */
UnderlyingPaymentStream.prototype.underlyingPaymentStreamNonDeliverableSettlTerms = function () {
  return this.message.groups[UnderlyingPaymentStreamNonDeliverableSettlTerms.Tag]
    .map(function (underlyingPaymentStreamNonDeliverableSettlTerms) {
      return new UnderlyingPaymentStreamNonDeliverableSettlTerms(underlyingPaymentStreamNonDeliverableSettlTerms);
  });
};

/* field */
UnderlyingPaymentStream.prototype.underlyingPaymentStreamType = function () {
  return new UnderlyingPaymentStreamType(this.message.tags[UnderlyingPaymentStreamType.Tag]);
};

/* field */
UnderlyingPaymentStream.prototype.underlyingPaymentStreamMarketRate = function () {
  return new UnderlyingPaymentStreamMarketRate(this.message.tags[UnderlyingPaymentStreamMarketRate.Tag]);
};

/* field */
UnderlyingPaymentStream.prototype.underlyingPaymentStreamDelayIndicator = function () {
  return new UnderlyingPaymentStreamDelayIndicator(this.message.tags[UnderlyingPaymentStreamDelayIndicator.Tag]);
};

/* field */
UnderlyingPaymentStream.prototype.underlyingPaymentStreamSettlCurrency = function () {
  return new UnderlyingPaymentStreamSettlCurrency(this.message.tags[UnderlyingPaymentStreamSettlCurrency.Tag]);
};

/* field */
UnderlyingPaymentStream.prototype.underlyingPaymentStreamDayCount = function () {
  return new UnderlyingPaymentStreamDayCount(this.message.tags[UnderlyingPaymentStreamDayCount.Tag]);
};

/* field */
UnderlyingPaymentStream.prototype.underlyingPaymentStreamAccrualDays = function () {
  return new UnderlyingPaymentStreamAccrualDays(this.message.tags[UnderlyingPaymentStreamAccrualDays.Tag]);
};

/* field */
UnderlyingPaymentStream.prototype.underlyingPaymentStreamDiscountType = function () {
  return new UnderlyingPaymentStreamDiscountType(this.message.tags[UnderlyingPaymentStreamDiscountType.Tag]);
};

/* field */
UnderlyingPaymentStream.prototype.underlyingPaymentStreamDiscountRate = function () {
  return new UnderlyingPaymentStreamDiscountRate(this.message.tags[UnderlyingPaymentStreamDiscountRate.Tag]);
};

/* field */
UnderlyingPaymentStream.prototype.underlyingPaymentStreamDiscountRateDayCount = function () {
  return new UnderlyingPaymentStreamDiscountRateDayCount(this.message.tags[UnderlyingPaymentStreamDiscountRateDayCount.Tag]);
};

/* field */
UnderlyingPaymentStream.prototype.underlyingPaymentStreamCompoundingMethod = function () {
  return new UnderlyingPaymentStreamCompoundingMethod(this.message.tags[UnderlyingPaymentStreamCompoundingMethod.Tag]);
};

/* field */
UnderlyingPaymentStream.prototype.underlyingPaymentStreamInitialPrincipalExchangeIndicator = function () {
  return new UnderlyingPaymentStreamInitialPrincipalExchangeIndicator(this.message.tags[UnderlyingPaymentStreamInitialPrincipalExchangeIndicator.Tag]);
};

/* field */
UnderlyingPaymentStream.prototype.underlyingPaymentStreamInterimPrincipalExchangeIndicator = function () {
  return new UnderlyingPaymentStreamInterimPrincipalExchangeIndicator(this.message.tags[UnderlyingPaymentStreamInterimPrincipalExchangeIndicator.Tag]);
};

/* field */
UnderlyingPaymentStream.prototype.underlyingPaymentStreamFinalPrincipalExchangeIndicator = function () {
  return new UnderlyingPaymentStreamFinalPrincipalExchangeIndicator(this.message.tags[UnderlyingPaymentStreamFinalPrincipalExchangeIndicator.Tag]);
};

/* field */
UnderlyingPaymentStream.prototype.underlyingPaymentStreamFlatRateIndicator = function () {
  return new UnderlyingPaymentStreamFlatRateIndicator(this.message.tags[UnderlyingPaymentStreamFlatRateIndicator.Tag]);
};

/* field */
UnderlyingPaymentStream.prototype.underlyingPaymentStreamFlatRateAmount = function () {
  return new UnderlyingPaymentStreamFlatRateAmount(this.message.tags[UnderlyingPaymentStreamFlatRateAmount.Tag]);
};

/* field */
UnderlyingPaymentStream.prototype.underlyingPaymentStreamFlatRateCurrency = function () {
  return new UnderlyingPaymentStreamFlatRateCurrency(this.message.tags[UnderlyingPaymentStreamFlatRateCurrency.Tag]);
};

/* field */
UnderlyingPaymentStream.prototype.underlyingPaymentStreamMaximumPaymentAmount = function () {
  return new UnderlyingPaymentStreamMaximumPaymentAmount(this.message.tags[UnderlyingPaymentStreamMaximumPaymentAmount.Tag]);
};

/* field */
UnderlyingPaymentStream.prototype.underlyingPaymentStreamMaximumPaymentCurrency = function () {
  return new UnderlyingPaymentStreamMaximumPaymentCurrency(this.message.tags[UnderlyingPaymentStreamMaximumPaymentCurrency.Tag]);
};

/* field */
UnderlyingPaymentStream.prototype.underlyingPaymentStreamMaximumTransactionAmount = function () {
  return new UnderlyingPaymentStreamMaximumTransactionAmount(this.message.tags[UnderlyingPaymentStreamMaximumTransactionAmount.Tag]);
};

/* field */
UnderlyingPaymentStream.prototype.underlyingPaymentStreamMaximumTransactionCurrency = function () {
  return new UnderlyingPaymentStreamMaximumTransactionCurrency(this.message.tags[UnderlyingPaymentStreamMaximumTransactionCurrency.Tag]);
};



UnderlyingPaymentStream.Tag = '40568';

module.exports = UnderlyingPaymentStream;