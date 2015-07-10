var NoPayments = require('../fields/NoPayments');
var PaymentBusinessCenterGrp = require('../components/PaymentBusinessCenterGrp');
var PaymentSettlGrp = require('../components/PaymentSettlGrp');
var PaymentType = require('../fields/PaymentType');
var PaymentSubType = require('../fields/PaymentSubType');
var PaymentPaySide = require('../fields/PaymentPaySide');
var PaymentReceiveSide = require('../fields/PaymentReceiveSide');
var PaymentCurrency = require('../fields/PaymentCurrency');
var PaymentAmount = require('../fields/PaymentAmount');
var PaymentPrice = require('../fields/PaymentPrice');
var PaymentPriceType = require('../fields/PaymentPriceType');
var PaymentUnitOfMeasure = require('../fields/PaymentUnitOfMeasure');
var PaymentDateUnadjusted = require('../fields/PaymentDateUnadjusted');
var PaymentBusinessDayConvention = require('../fields/PaymentBusinessDayConvention');
var PaymentDateRelativeTo = require('../fields/PaymentDateRelativeTo');
var PaymentDateOffsetPeriod = require('../fields/PaymentDateOffsetPeriod');
var PaymentDateOffsetUnit = require('../fields/PaymentDateOffsetUnit');
var PaymentDateDayType = require('../fields/PaymentDateDayType');
var PaymentDateAdjusted = require('../fields/PaymentDateAdjusted');
var PaymentForwardStartType = require('../fields/PaymentForwardStartType');
var PaymentDiscountFactor = require('../fields/PaymentDiscountFactor');
var PaymentPresentValueAmount = require('../fields/PaymentPresentValueAmount');
var PaymentPresentValueCurrency = require('../fields/PaymentPresentValueCurrency');
var PaymentSettlStyle = require('../fields/PaymentSettlStyle');
var PaymentMethod = require('../fields/PaymentMethod');
var PaymentLegRefID = require('../fields/PaymentLegRefID');
var PaymentText = require('../fields/PaymentText');
var EncodedPaymentTextLen = require('../fields/EncodedPaymentTextLen');
var EncodedPaymentText = require('../fields/EncodedPaymentText');

function PaymentGrp (paymentGrp) {
  this.message = paymentGrp;
}

/* group */

/* component */
PaymentGrp.prototype.paymentBusinessCenterGrp = function () {
  return this.message.groups[PaymentBusinessCenterGrp.Tag]
    .map(function (paymentBusinessCenterGrp) {
      return new PaymentBusinessCenterGrp(paymentBusinessCenterGrp);
  });
};

/* component */
PaymentGrp.prototype.paymentSettlGrp = function () {
  return this.message.groups[PaymentSettlGrp.Tag]
    .map(function (paymentSettlGrp) {
      return new PaymentSettlGrp(paymentSettlGrp);
  });
};

/* field */
PaymentGrp.prototype.paymentType = function () {
  return new PaymentType(this.message.tags[PaymentType.Tag]);
};

/* field */
PaymentGrp.prototype.paymentSubType = function () {
  return new PaymentSubType(this.message.tags[PaymentSubType.Tag]);
};

/* field */
PaymentGrp.prototype.paymentPaySide = function () {
  return new PaymentPaySide(this.message.tags[PaymentPaySide.Tag]);
};

/* field */
PaymentGrp.prototype.paymentReceiveSide = function () {
  return new PaymentReceiveSide(this.message.tags[PaymentReceiveSide.Tag]);
};

/* field */
PaymentGrp.prototype.paymentCurrency = function () {
  return new PaymentCurrency(this.message.tags[PaymentCurrency.Tag]);
};

/* field */
PaymentGrp.prototype.paymentAmount = function () {
  return new PaymentAmount(this.message.tags[PaymentAmount.Tag]);
};

/* field */
PaymentGrp.prototype.paymentPrice = function () {
  return new PaymentPrice(this.message.tags[PaymentPrice.Tag]);
};

/* field */
PaymentGrp.prototype.paymentPriceType = function () {
  return new PaymentPriceType(this.message.tags[PaymentPriceType.Tag]);
};

/* field */
PaymentGrp.prototype.paymentUnitOfMeasure = function () {
  return new PaymentUnitOfMeasure(this.message.tags[PaymentUnitOfMeasure.Tag]);
};

/* field */
PaymentGrp.prototype.paymentDateUnadjusted = function () {
  return new PaymentDateUnadjusted(this.message.tags[PaymentDateUnadjusted.Tag]);
};

/* field */
PaymentGrp.prototype.paymentBusinessDayConvention = function () {
  return new PaymentBusinessDayConvention(this.message.tags[PaymentBusinessDayConvention.Tag]);
};

/* field */
PaymentGrp.prototype.paymentDateRelativeTo = function () {
  return new PaymentDateRelativeTo(this.message.tags[PaymentDateRelativeTo.Tag]);
};

/* field */
PaymentGrp.prototype.paymentDateOffsetPeriod = function () {
  return new PaymentDateOffsetPeriod(this.message.tags[PaymentDateOffsetPeriod.Tag]);
};

/* field */
PaymentGrp.prototype.paymentDateOffsetUnit = function () {
  return new PaymentDateOffsetUnit(this.message.tags[PaymentDateOffsetUnit.Tag]);
};

/* field */
PaymentGrp.prototype.paymentDateDayType = function () {
  return new PaymentDateDayType(this.message.tags[PaymentDateDayType.Tag]);
};

/* field */
PaymentGrp.prototype.paymentDateAdjusted = function () {
  return new PaymentDateAdjusted(this.message.tags[PaymentDateAdjusted.Tag]);
};

/* field */
PaymentGrp.prototype.paymentForwardStartType = function () {
  return new PaymentForwardStartType(this.message.tags[PaymentForwardStartType.Tag]);
};

/* field */
PaymentGrp.prototype.paymentDiscountFactor = function () {
  return new PaymentDiscountFactor(this.message.tags[PaymentDiscountFactor.Tag]);
};

/* field */
PaymentGrp.prototype.paymentPresentValueAmount = function () {
  return new PaymentPresentValueAmount(this.message.tags[PaymentPresentValueAmount.Tag]);
};

/* field */
PaymentGrp.prototype.paymentPresentValueCurrency = function () {
  return new PaymentPresentValueCurrency(this.message.tags[PaymentPresentValueCurrency.Tag]);
};

/* field */
PaymentGrp.prototype.paymentSettlStyle = function () {
  return new PaymentSettlStyle(this.message.tags[PaymentSettlStyle.Tag]);
};

/* field */
PaymentGrp.prototype.paymentMethod = function () {
  return new PaymentMethod(this.message.tags[PaymentMethod.Tag]);
};

/* field */
PaymentGrp.prototype.paymentLegRefId = function () {
  return new PaymentLegRefID(this.message.tags[PaymentLegRefID.Tag]);
};

/* field */
PaymentGrp.prototype.paymentText = function () {
  return new PaymentText(this.message.tags[PaymentText.Tag]);
};

/* field */
PaymentGrp.prototype.encodedPaymentTextLen = function () {
  return new EncodedPaymentTextLen(this.message.tags[EncodedPaymentTextLen.Tag]);
};

/* field */
PaymentGrp.prototype.encodedPaymentText = function () {
  return new EncodedPaymentText(this.message.tags[EncodedPaymentText.Tag]);
};

/* end group */

PaymentGrp.Tag = '40212';

module.exports = PaymentGrp;