var PaymentStreamResetDateBusinessCenterGrp = require('../components/PaymentStreamResetDateBusinessCenterGrp');
var PaymentStreamInitialFixingDateBusinessCenterGrp = require('../components/PaymentStreamInitialFixingDateBusinessCenterGrp');
var PaymentStreamFixingDateBusinessCenterGrp = require('../components/PaymentStreamFixingDateBusinessCenterGrp');
var PaymentStreamResetDateRelativeTo = require('../fields/PaymentStreamResetDateRelativeTo');
var PaymentStreamResetDateBusinessDayConvention = require('../fields/PaymentStreamResetDateBusinessDayConvention');
var PaymentStreamResetFrequencyPeriod = require('../fields/PaymentStreamResetFrequencyPeriod');
var PaymentStreamResetFrequencyUnit = require('../fields/PaymentStreamResetFrequencyUnit');
var PaymentStreamResetWeeklyRollConvention = require('../fields/PaymentStreamResetWeeklyRollConvention');
var PaymentStreamInitialFixingDateRelativeTo = require('../fields/PaymentStreamInitialFixingDateRelativeTo');
var PaymentStreamInitialFixingDateBusinessDayConvention = require('../fields/PaymentStreamInitialFixingDateBusinessDayConvention');
var PaymentStreamInitialFixingDateOffsetPeriod = require('../fields/PaymentStreamInitialFixingDateOffsetPeriod');
var PaymentStreamInitialFixingDateOffsetUnit = require('../fields/PaymentStreamInitialFixingDateOffsetUnit');
var PaymentStreamInitialFixingDateOffsetDayType = require('../fields/PaymentStreamInitialFixingDateOffsetDayType');
var PaymentStreamInitialFixingDateAdjusted = require('../fields/PaymentStreamInitialFixingDateAdjusted');
var PaymentStreamFixingDateRelativeTo = require('../fields/PaymentStreamFixingDateRelativeTo');
var PaymentStreamFixingDateBusinessDayConvention = require('../fields/PaymentStreamFixingDateBusinessDayConvention');
var PaymentStreamFixingDateOffsetPeriod = require('../fields/PaymentStreamFixingDateOffsetPeriod');
var PaymentStreamFixingDateOffsetUnit = require('../fields/PaymentStreamFixingDateOffsetUnit');
var PaymentStreamFixingDateOffsetDayType = require('../fields/PaymentStreamFixingDateOffsetDayType');
var PaymentStreamFixingDateAdjusted = require('../fields/PaymentStreamFixingDateAdjusted');
var PaymentStreamRateCutoffOffsetPeriod = require('../fields/PaymentStreamRateCutoffOffsetPeriod');
var PaymentStreamRateCutoffOffsetUnit = require('../fields/PaymentStreamRateCutoffOffsetUnit');
var PaymentStreamRateCutoffOffsetDayType = require('../fields/PaymentStreamRateCutoffOffsetDayType');

function PaymentStreamResetDates (paymentStreamResetDates) {
  this.message = paymentStreamResetDates;
}
/* component */
PaymentStreamResetDates.prototype.paymentStreamResetDateBusinessCenterGrp = function () {
  return this.message.groups[PaymentStreamResetDateBusinessCenterGrp.Tag]
    .map(function (paymentStreamResetDateBusinessCenterGrp) {
      return new PaymentStreamResetDateBusinessCenterGrp(paymentStreamResetDateBusinessCenterGrp);
  });
};

/* component */
PaymentStreamResetDates.prototype.paymentStreamInitialFixingDateBusinessCenterGrp = function () {
  return this.message.groups[PaymentStreamInitialFixingDateBusinessCenterGrp.Tag]
    .map(function (paymentStreamInitialFixingDateBusinessCenterGrp) {
      return new PaymentStreamInitialFixingDateBusinessCenterGrp(paymentStreamInitialFixingDateBusinessCenterGrp);
  });
};

/* component */
PaymentStreamResetDates.prototype.paymentStreamFixingDateBusinessCenterGrp = function () {
  return this.message.groups[PaymentStreamFixingDateBusinessCenterGrp.Tag]
    .map(function (paymentStreamFixingDateBusinessCenterGrp) {
      return new PaymentStreamFixingDateBusinessCenterGrp(paymentStreamFixingDateBusinessCenterGrp);
  });
};

/* field */
PaymentStreamResetDates.prototype.paymentStreamResetDateRelativeTo = function () {
  return new PaymentStreamResetDateRelativeTo(this.message.tags[PaymentStreamResetDateRelativeTo.Tag]);
};

/* field */
PaymentStreamResetDates.prototype.paymentStreamResetDateBusinessDayConvention = function () {
  return new PaymentStreamResetDateBusinessDayConvention(this.message.tags[PaymentStreamResetDateBusinessDayConvention.Tag]);
};

/* field */
PaymentStreamResetDates.prototype.paymentStreamResetFrequencyPeriod = function () {
  return new PaymentStreamResetFrequencyPeriod(this.message.tags[PaymentStreamResetFrequencyPeriod.Tag]);
};

/* field */
PaymentStreamResetDates.prototype.paymentStreamResetFrequencyUnit = function () {
  return new PaymentStreamResetFrequencyUnit(this.message.tags[PaymentStreamResetFrequencyUnit.Tag]);
};

/* field */
PaymentStreamResetDates.prototype.paymentStreamResetWeeklyRollConvention = function () {
  return new PaymentStreamResetWeeklyRollConvention(this.message.tags[PaymentStreamResetWeeklyRollConvention.Tag]);
};

/* field */
PaymentStreamResetDates.prototype.paymentStreamInitialFixingDateRelativeTo = function () {
  return new PaymentStreamInitialFixingDateRelativeTo(this.message.tags[PaymentStreamInitialFixingDateRelativeTo.Tag]);
};

/* field */
PaymentStreamResetDates.prototype.paymentStreamInitialFixingDateBusinessDayConvention = function () {
  return new PaymentStreamInitialFixingDateBusinessDayConvention(this.message.tags[PaymentStreamInitialFixingDateBusinessDayConvention.Tag]);
};

/* field */
PaymentStreamResetDates.prototype.paymentStreamInitialFixingDateOffsetPeriod = function () {
  return new PaymentStreamInitialFixingDateOffsetPeriod(this.message.tags[PaymentStreamInitialFixingDateOffsetPeriod.Tag]);
};

/* field */
PaymentStreamResetDates.prototype.paymentStreamInitialFixingDateOffsetUnit = function () {
  return new PaymentStreamInitialFixingDateOffsetUnit(this.message.tags[PaymentStreamInitialFixingDateOffsetUnit.Tag]);
};

/* field */
PaymentStreamResetDates.prototype.paymentStreamInitialFixingDateOffsetDayType = function () {
  return new PaymentStreamInitialFixingDateOffsetDayType(this.message.tags[PaymentStreamInitialFixingDateOffsetDayType.Tag]);
};

/* field */
PaymentStreamResetDates.prototype.paymentStreamInitialFixingDateAdjusted = function () {
  return new PaymentStreamInitialFixingDateAdjusted(this.message.tags[PaymentStreamInitialFixingDateAdjusted.Tag]);
};

/* field */
PaymentStreamResetDates.prototype.paymentStreamFixingDateRelativeTo = function () {
  return new PaymentStreamFixingDateRelativeTo(this.message.tags[PaymentStreamFixingDateRelativeTo.Tag]);
};

/* field */
PaymentStreamResetDates.prototype.paymentStreamFixingDateBusinessDayConvention = function () {
  return new PaymentStreamFixingDateBusinessDayConvention(this.message.tags[PaymentStreamFixingDateBusinessDayConvention.Tag]);
};

/* field */
PaymentStreamResetDates.prototype.paymentStreamFixingDateOffsetPeriod = function () {
  return new PaymentStreamFixingDateOffsetPeriod(this.message.tags[PaymentStreamFixingDateOffsetPeriod.Tag]);
};

/* field */
PaymentStreamResetDates.prototype.paymentStreamFixingDateOffsetUnit = function () {
  return new PaymentStreamFixingDateOffsetUnit(this.message.tags[PaymentStreamFixingDateOffsetUnit.Tag]);
};

/* field */
PaymentStreamResetDates.prototype.paymentStreamFixingDateOffsetDayType = function () {
  return new PaymentStreamFixingDateOffsetDayType(this.message.tags[PaymentStreamFixingDateOffsetDayType.Tag]);
};

/* field */
PaymentStreamResetDates.prototype.paymentStreamFixingDateAdjusted = function () {
  return new PaymentStreamFixingDateAdjusted(this.message.tags[PaymentStreamFixingDateAdjusted.Tag]);
};

/* field */
PaymentStreamResetDates.prototype.paymentStreamRateCutoffOffsetPeriod = function () {
  return new PaymentStreamRateCutoffOffsetPeriod(this.message.tags[PaymentStreamRateCutoffOffsetPeriod.Tag]);
};

/* field */
PaymentStreamResetDates.prototype.paymentStreamRateCutoffOffsetUnit = function () {
  return new PaymentStreamRateCutoffOffsetUnit(this.message.tags[PaymentStreamRateCutoffOffsetUnit.Tag]);
};

/* field */
PaymentStreamResetDates.prototype.paymentStreamRateCutoffOffsetDayType = function () {
  return new PaymentStreamRateCutoffOffsetDayType(this.message.tags[PaymentStreamRateCutoffOffsetDayType.Tag]);
};



PaymentStreamResetDates.Tag = '40761';

module.exports = PaymentStreamResetDates;