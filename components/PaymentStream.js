var PaymentStreamPaymentDates = require('../components/PaymentStreamPaymentDates');
var PaymentStreamResetDates = require('../components/PaymentStreamResetDates');
var PaymentStreamFixedRate = require('../components/PaymentStreamFixedRate');
var PaymentStreamFloatingRate = require('../components/PaymentStreamFloatingRate');
var PaymentStreamNonDeliverableSettlTerms = require('../components/PaymentStreamNonDeliverableSettlTerms');
var PaymentStreamType = require('../fields/PaymentStreamType');
var PaymentStreamMarketRate = require('../fields/PaymentStreamMarketRate');
var PaymentStreamDelayIndicator = require('../fields/PaymentStreamDelayIndicator');
var PaymentStreamSettlCurrency = require('../fields/PaymentStreamSettlCurrency');
var PaymentStreamDayCount = require('../fields/PaymentStreamDayCount');
var PaymentStreamAccrualDays = require('../fields/PaymentStreamAccrualDays');
var PaymentStreamDiscountType = require('../fields/PaymentStreamDiscountType');
var PaymentStreamDiscountRate = require('../fields/PaymentStreamDiscountRate');
var PaymentStreamDiscountRateDayCount = require('../fields/PaymentStreamDiscountRateDayCount');
var PaymentStreamCompoundingMethod = require('../fields/PaymentStreamCompoundingMethod');
var PaymentStreamInitialPrincipalExchangeIndicator = require('../fields/PaymentStreamInitialPrincipalExchangeIndicator');
var PaymentStreamInterimPrincipalExchangeIndicator = require('../fields/PaymentStreamInterimPrincipalExchangeIndicator');
var PaymentStreamFinalPrincipalExchangeIndicator = require('../fields/PaymentStreamFinalPrincipalExchangeIndicator');
var PaymentStreamFlatRateIndicator = require('../fields/PaymentStreamFlatRateIndicator');
var PaymentStreamFlatRateAmount = require('../fields/PaymentStreamFlatRateAmount');
var PaymentStreamFlatRateCurrency = require('../fields/PaymentStreamFlatRateCurrency');
var PaymentStreamMaximumPaymentAmount = require('../fields/PaymentStreamMaximumPaymentAmount');
var PaymentStreamMaximumPaymentCurrency = require('../fields/PaymentStreamMaximumPaymentCurrency');
var PaymentStreamMaximumTransactionAmount = require('../fields/PaymentStreamMaximumTransactionAmount');
var PaymentStreamMaximumTransactionCurrency = require('../fields/PaymentStreamMaximumTransactionCurrency');

function PaymentStream (paymentStream) {
  this.message = paymentStream;
}
/* component */
PaymentStream.prototype.paymentStreamPaymentDates = function () {
  return this.message.groups[PaymentStreamPaymentDates.Tag]
    .map(function (paymentStreamPaymentDates) {
      return new PaymentStreamPaymentDates(paymentStreamPaymentDates);
  });
};

/* component */
PaymentStream.prototype.paymentStreamResetDates = function () {
  return this.message.groups[PaymentStreamResetDates.Tag]
    .map(function (paymentStreamResetDates) {
      return new PaymentStreamResetDates(paymentStreamResetDates);
  });
};

/* component */
PaymentStream.prototype.paymentStreamFixedRate = function () {
  return this.message.groups[PaymentStreamFixedRate.Tag]
    .map(function (paymentStreamFixedRate) {
      return new PaymentStreamFixedRate(paymentStreamFixedRate);
  });
};

/* component */
PaymentStream.prototype.paymentStreamFloatingRate = function () {
  return this.message.groups[PaymentStreamFloatingRate.Tag]
    .map(function (paymentStreamFloatingRate) {
      return new PaymentStreamFloatingRate(paymentStreamFloatingRate);
  });
};

/* component */
PaymentStream.prototype.paymentStreamNonDeliverableSettlTerms = function () {
  return this.message.groups[PaymentStreamNonDeliverableSettlTerms.Tag]
    .map(function (paymentStreamNonDeliverableSettlTerms) {
      return new PaymentStreamNonDeliverableSettlTerms(paymentStreamNonDeliverableSettlTerms);
  });
};

/* field */
PaymentStream.prototype.paymentStreamType = function () {
  return new PaymentStreamType(this.message.tags[PaymentStreamType.Tag]);
};

/* field */
PaymentStream.prototype.paymentStreamMarketRate = function () {
  return new PaymentStreamMarketRate(this.message.tags[PaymentStreamMarketRate.Tag]);
};

/* field */
PaymentStream.prototype.paymentStreamDelayIndicator = function () {
  return new PaymentStreamDelayIndicator(this.message.tags[PaymentStreamDelayIndicator.Tag]);
};

/* field */
PaymentStream.prototype.paymentStreamSettlCurrency = function () {
  return new PaymentStreamSettlCurrency(this.message.tags[PaymentStreamSettlCurrency.Tag]);
};

/* field */
PaymentStream.prototype.paymentStreamDayCount = function () {
  return new PaymentStreamDayCount(this.message.tags[PaymentStreamDayCount.Tag]);
};

/* field */
PaymentStream.prototype.paymentStreamAccrualDays = function () {
  return new PaymentStreamAccrualDays(this.message.tags[PaymentStreamAccrualDays.Tag]);
};

/* field */
PaymentStream.prototype.paymentStreamDiscountType = function () {
  return new PaymentStreamDiscountType(this.message.tags[PaymentStreamDiscountType.Tag]);
};

/* field */
PaymentStream.prototype.paymentStreamDiscountRate = function () {
  return new PaymentStreamDiscountRate(this.message.tags[PaymentStreamDiscountRate.Tag]);
};

/* field */
PaymentStream.prototype.paymentStreamDiscountRateDayCount = function () {
  return new PaymentStreamDiscountRateDayCount(this.message.tags[PaymentStreamDiscountRateDayCount.Tag]);
};

/* field */
PaymentStream.prototype.paymentStreamCompoundingMethod = function () {
  return new PaymentStreamCompoundingMethod(this.message.tags[PaymentStreamCompoundingMethod.Tag]);
};

/* field */
PaymentStream.prototype.paymentStreamInitialPrincipalExchangeIndicator = function () {
  return new PaymentStreamInitialPrincipalExchangeIndicator(this.message.tags[PaymentStreamInitialPrincipalExchangeIndicator.Tag]);
};

/* field */
PaymentStream.prototype.paymentStreamInterimPrincipalExchangeIndicator = function () {
  return new PaymentStreamInterimPrincipalExchangeIndicator(this.message.tags[PaymentStreamInterimPrincipalExchangeIndicator.Tag]);
};

/* field */
PaymentStream.prototype.paymentStreamFinalPrincipalExchangeIndicator = function () {
  return new PaymentStreamFinalPrincipalExchangeIndicator(this.message.tags[PaymentStreamFinalPrincipalExchangeIndicator.Tag]);
};

/* field */
PaymentStream.prototype.paymentStreamFlatRateIndicator = function () {
  return new PaymentStreamFlatRateIndicator(this.message.tags[PaymentStreamFlatRateIndicator.Tag]);
};

/* field */
PaymentStream.prototype.paymentStreamFlatRateAmount = function () {
  return new PaymentStreamFlatRateAmount(this.message.tags[PaymentStreamFlatRateAmount.Tag]);
};

/* field */
PaymentStream.prototype.paymentStreamFlatRateCurrency = function () {
  return new PaymentStreamFlatRateCurrency(this.message.tags[PaymentStreamFlatRateCurrency.Tag]);
};

/* field */
PaymentStream.prototype.paymentStreamMaximumPaymentAmount = function () {
  return new PaymentStreamMaximumPaymentAmount(this.message.tags[PaymentStreamMaximumPaymentAmount.Tag]);
};

/* field */
PaymentStream.prototype.paymentStreamMaximumPaymentCurrency = function () {
  return new PaymentStreamMaximumPaymentCurrency(this.message.tags[PaymentStreamMaximumPaymentCurrency.Tag]);
};

/* field */
PaymentStream.prototype.paymentStreamMaximumTransactionAmount = function () {
  return new PaymentStreamMaximumTransactionAmount(this.message.tags[PaymentStreamMaximumTransactionAmount.Tag]);
};

/* field */
PaymentStream.prototype.paymentStreamMaximumTransactionCurrency = function () {
  return new PaymentStreamMaximumTransactionCurrency(this.message.tags[PaymentStreamMaximumTransactionCurrency.Tag]);
};



PaymentStream.Tag = '40738';

module.exports = PaymentStream;