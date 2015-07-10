var PaymentStreamPaymentDateBusinessCenterGrp = require('../components/PaymentStreamPaymentDateBusinessCenterGrp');
var PaymentStreamPaymentDateGrp = require('../components/PaymentStreamPaymentDateGrp');
var PaymentStreamPaymentDateBusinessDayConvention = require('../fields/PaymentStreamPaymentDateBusinessDayConvention');
var PaymentStreamPaymentFrequencyPeriod = require('../fields/PaymentStreamPaymentFrequencyPeriod');
var PaymentStreamPaymentFrequencyUnit = require('../fields/PaymentStreamPaymentFrequencyUnit');
var PaymentStreamPaymentRollConvention = require('../fields/PaymentStreamPaymentRollConvention');
var PaymentStreamFirstPaymentDateUnadjusted = require('../fields/PaymentStreamFirstPaymentDateUnadjusted');
var PaymentStreamLastRegularPaymentDateUnadjusted = require('../fields/PaymentStreamLastRegularPaymentDateUnadjusted');
var PaymentStreamPaymentDateRelativeTo = require('../fields/PaymentStreamPaymentDateRelativeTo');
var PaymentStreamPaymentOffsetPeriod = require('../fields/PaymentStreamPaymentOffsetPeriod');
var PaymentStreamPaymentOffsetUnit = require('../fields/PaymentStreamPaymentOffsetUnit');
var PaymentStreamPaymentOffsetDayType = require('../fields/PaymentStreamPaymentOffsetDayType');
var PaymentStreamMasterAgreementPaymentDatesIndicator = require('../fields/PaymentStreamMasterAgreementPaymentDatesIndicator');

function PaymentStreamPaymentDates (paymentStreamPaymentDates) {
  this.message = paymentStreamPaymentDates;
}
/* component */
PaymentStreamPaymentDates.prototype.paymentStreamPaymentDateBusinessCenterGrp = function () {
  return this.message.groups[PaymentStreamPaymentDateBusinessCenterGrp.Tag]
    .map(function (paymentStreamPaymentDateBusinessCenterGrp) {
      return new PaymentStreamPaymentDateBusinessCenterGrp(paymentStreamPaymentDateBusinessCenterGrp);
  });
};

/* component */
PaymentStreamPaymentDates.prototype.paymentStreamPaymentDateGrp = function () {
  return this.message.groups[PaymentStreamPaymentDateGrp.Tag]
    .map(function (paymentStreamPaymentDateGrp) {
      return new PaymentStreamPaymentDateGrp(paymentStreamPaymentDateGrp);
  });
};

/* field */
PaymentStreamPaymentDates.prototype.paymentStreamPaymentDateBusinessDayConvention = function () {
  return new PaymentStreamPaymentDateBusinessDayConvention(this.message.tags[PaymentStreamPaymentDateBusinessDayConvention.Tag]);
};

/* field */
PaymentStreamPaymentDates.prototype.paymentStreamPaymentFrequencyPeriod = function () {
  return new PaymentStreamPaymentFrequencyPeriod(this.message.tags[PaymentStreamPaymentFrequencyPeriod.Tag]);
};

/* field */
PaymentStreamPaymentDates.prototype.paymentStreamPaymentFrequencyUnit = function () {
  return new PaymentStreamPaymentFrequencyUnit(this.message.tags[PaymentStreamPaymentFrequencyUnit.Tag]);
};

/* field */
PaymentStreamPaymentDates.prototype.paymentStreamPaymentRollConvention = function () {
  return new PaymentStreamPaymentRollConvention(this.message.tags[PaymentStreamPaymentRollConvention.Tag]);
};

/* field */
PaymentStreamPaymentDates.prototype.paymentStreamFirstPaymentDateUnadjusted = function () {
  return new PaymentStreamFirstPaymentDateUnadjusted(this.message.tags[PaymentStreamFirstPaymentDateUnadjusted.Tag]);
};

/* field */
PaymentStreamPaymentDates.prototype.paymentStreamLastRegularPaymentDateUnadjusted = function () {
  return new PaymentStreamLastRegularPaymentDateUnadjusted(this.message.tags[PaymentStreamLastRegularPaymentDateUnadjusted.Tag]);
};

/* field */
PaymentStreamPaymentDates.prototype.paymentStreamPaymentDateRelativeTo = function () {
  return new PaymentStreamPaymentDateRelativeTo(this.message.tags[PaymentStreamPaymentDateRelativeTo.Tag]);
};

/* field */
PaymentStreamPaymentDates.prototype.paymentStreamPaymentOffsetPeriod = function () {
  return new PaymentStreamPaymentOffsetPeriod(this.message.tags[PaymentStreamPaymentOffsetPeriod.Tag]);
};

/* field */
PaymentStreamPaymentDates.prototype.paymentStreamPaymentOffsetUnit = function () {
  return new PaymentStreamPaymentOffsetUnit(this.message.tags[PaymentStreamPaymentOffsetUnit.Tag]);
};

/* field */
PaymentStreamPaymentDates.prototype.paymentStreamPaymentOffsetDayType = function () {
  return new PaymentStreamPaymentOffsetDayType(this.message.tags[PaymentStreamPaymentOffsetDayType.Tag]);
};

/* field */
PaymentStreamPaymentDates.prototype.paymentStreamMasterAgreementPaymentDatesIndicator = function () {
  return new PaymentStreamMasterAgreementPaymentDatesIndicator(this.message.tags[PaymentStreamMasterAgreementPaymentDatesIndicator.Tag]);
};



PaymentStreamPaymentDates.Tag = '40751';

module.exports = PaymentStreamPaymentDates;