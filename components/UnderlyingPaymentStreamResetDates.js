var UnderlyingPaymentStreamResetDateBusinessCenterGrp = require('../components/UnderlyingPaymentStreamResetDateBusinessCenterGrp');
var UnderlyingPaymentStreamInitialFixingDateBusinessCenterGrp = require('../components/UnderlyingPaymentStreamInitialFixingDateBusinessCenterGrp');
var UnderlyingPaymentStreamFixingDateBusinessCenterGrp = require('../components/UnderlyingPaymentStreamFixingDateBusinessCenterGrp');
var UnderlyingPaymentStreamResetDateRelativeTo = require('../fields/UnderlyingPaymentStreamResetDateRelativeTo');
var UnderlyingPaymentStreamResetDateBusinessDayConvention = require('../fields/UnderlyingPaymentStreamResetDateBusinessDayConvention');
var UnderlyingPaymentStreamResetFrequencyPeriod = require('../fields/UnderlyingPaymentStreamResetFrequencyPeriod');
var UnderlyingPaymentStreamResetFrequencyUnit = require('../fields/UnderlyingPaymentStreamResetFrequencyUnit');
var UnderlyingPaymentStreamResetWeeklyRollConvention = require('../fields/UnderlyingPaymentStreamResetWeeklyRollConvention');
var UnderlyingPaymentStreamInitialFixingDateRelativeTo = require('../fields/UnderlyingPaymentStreamInitialFixingDateRelativeTo');
var UnderlyingPaymentStreamInitialFixingDateBusinessDayConvention = require('../fields/UnderlyingPaymentStreamInitialFixingDateBusinessDayConvention');
var UnderlyingPaymentStreamInitialFixingDateOffsetPeriod = require('../fields/UnderlyingPaymentStreamInitialFixingDateOffsetPeriod');
var UnderlyingPaymentStreamInitialFixingDateOffsetUnit = require('../fields/UnderlyingPaymentStreamInitialFixingDateOffsetUnit');
var UnderlyingPaymentStreamInitialFixingDateOffsetDayType = require('../fields/UnderlyingPaymentStreamInitialFixingDateOffsetDayType');
var UnderlyingPaymentStreamInitialFixingDateAdjusted = require('../fields/UnderlyingPaymentStreamInitialFixingDateAdjusted');
var UnderlyingPaymentStreamFixingDateRelativeTo = require('../fields/UnderlyingPaymentStreamFixingDateRelativeTo');
var UnderlyingPaymentStreamFixingDateBusinessDayConvention = require('../fields/UnderlyingPaymentStreamFixingDateBusinessDayConvention');
var UnderlyingPaymentStreamFixingDateOffsetPeriod = require('../fields/UnderlyingPaymentStreamFixingDateOffsetPeriod');
var UnderlyingPaymentStreamFixingDateOffsetUnit = require('../fields/UnderlyingPaymentStreamFixingDateOffsetUnit');
var UnderlyingPaymentStreamFixingDateOffsetDayType = require('../fields/UnderlyingPaymentStreamFixingDateOffsetDayType');
var UnderlyingPaymentStreamFixingDateAdjusted = require('../fields/UnderlyingPaymentStreamFixingDateAdjusted');
var UnderlyingPaymentStreamRateCutoffOffsetPeriod = require('../fields/UnderlyingPaymentStreamRateCutoffOffsetPeriod');
var UnderlyingPaymentStreamRateCutoffOffsetUnit = require('../fields/UnderlyingPaymentStreamRateCutoffOffsetUnit');
var UnderlyingPaymentStreamRateCutoffOffsetDayType = require('../fields/UnderlyingPaymentStreamRateCutoffOffsetDayType');

function UnderlyingPaymentStreamResetDates (underlyingPaymentStreamResetDates) {
  this.message = underlyingPaymentStreamResetDates;
}
/* component */
UnderlyingPaymentStreamResetDates.prototype.underlyingPaymentStreamResetDateBusinessCenterGrp = function () {
  return this.message.groups[UnderlyingPaymentStreamResetDateBusinessCenterGrp.Tag]
    .map(function (underlyingPaymentStreamResetDateBusinessCenterGrp) {
      return new UnderlyingPaymentStreamResetDateBusinessCenterGrp(underlyingPaymentStreamResetDateBusinessCenterGrp);
  });
};

/* component */
UnderlyingPaymentStreamResetDates.prototype.underlyingPaymentStreamInitialFixingDateBusinessCenterGrp = function () {
  return this.message.groups[UnderlyingPaymentStreamInitialFixingDateBusinessCenterGrp.Tag]
    .map(function (underlyingPaymentStreamInitialFixingDateBusinessCenterGrp) {
      return new UnderlyingPaymentStreamInitialFixingDateBusinessCenterGrp(underlyingPaymentStreamInitialFixingDateBusinessCenterGrp);
  });
};

/* component */
UnderlyingPaymentStreamResetDates.prototype.underlyingPaymentStreamFixingDateBusinessCenterGrp = function () {
  return this.message.groups[UnderlyingPaymentStreamFixingDateBusinessCenterGrp.Tag]
    .map(function (underlyingPaymentStreamFixingDateBusinessCenterGrp) {
      return new UnderlyingPaymentStreamFixingDateBusinessCenterGrp(underlyingPaymentStreamFixingDateBusinessCenterGrp);
  });
};

/* field */
UnderlyingPaymentStreamResetDates.prototype.underlyingPaymentStreamResetDateRelativeTo = function () {
  return new UnderlyingPaymentStreamResetDateRelativeTo(this.message.tags[UnderlyingPaymentStreamResetDateRelativeTo.Tag]);
};

/* field */
UnderlyingPaymentStreamResetDates.prototype.underlyingPaymentStreamResetDateBusinessDayConvention = function () {
  return new UnderlyingPaymentStreamResetDateBusinessDayConvention(this.message.tags[UnderlyingPaymentStreamResetDateBusinessDayConvention.Tag]);
};

/* field */
UnderlyingPaymentStreamResetDates.prototype.underlyingPaymentStreamResetFrequencyPeriod = function () {
  return new UnderlyingPaymentStreamResetFrequencyPeriod(this.message.tags[UnderlyingPaymentStreamResetFrequencyPeriod.Tag]);
};

/* field */
UnderlyingPaymentStreamResetDates.prototype.underlyingPaymentStreamResetFrequencyUnit = function () {
  return new UnderlyingPaymentStreamResetFrequencyUnit(this.message.tags[UnderlyingPaymentStreamResetFrequencyUnit.Tag]);
};

/* field */
UnderlyingPaymentStreamResetDates.prototype.underlyingPaymentStreamResetWeeklyRollConvention = function () {
  return new UnderlyingPaymentStreamResetWeeklyRollConvention(this.message.tags[UnderlyingPaymentStreamResetWeeklyRollConvention.Tag]);
};

/* field */
UnderlyingPaymentStreamResetDates.prototype.underlyingPaymentStreamInitialFixingDateRelativeTo = function () {
  return new UnderlyingPaymentStreamInitialFixingDateRelativeTo(this.message.tags[UnderlyingPaymentStreamInitialFixingDateRelativeTo.Tag]);
};

/* field */
UnderlyingPaymentStreamResetDates.prototype.underlyingPaymentStreamInitialFixingDateBusinessDayConvention = function () {
  return new UnderlyingPaymentStreamInitialFixingDateBusinessDayConvention(this.message.tags[UnderlyingPaymentStreamInitialFixingDateBusinessDayConvention.Tag]);
};

/* field */
UnderlyingPaymentStreamResetDates.prototype.underlyingPaymentStreamInitialFixingDateOffsetPeriod = function () {
  return new UnderlyingPaymentStreamInitialFixingDateOffsetPeriod(this.message.tags[UnderlyingPaymentStreamInitialFixingDateOffsetPeriod.Tag]);
};

/* field */
UnderlyingPaymentStreamResetDates.prototype.underlyingPaymentStreamInitialFixingDateOffsetUnit = function () {
  return new UnderlyingPaymentStreamInitialFixingDateOffsetUnit(this.message.tags[UnderlyingPaymentStreamInitialFixingDateOffsetUnit.Tag]);
};

/* field */
UnderlyingPaymentStreamResetDates.prototype.underlyingPaymentStreamInitialFixingDateOffsetDayType = function () {
  return new UnderlyingPaymentStreamInitialFixingDateOffsetDayType(this.message.tags[UnderlyingPaymentStreamInitialFixingDateOffsetDayType.Tag]);
};

/* field */
UnderlyingPaymentStreamResetDates.prototype.underlyingPaymentStreamInitialFixingDateAdjusted = function () {
  return new UnderlyingPaymentStreamInitialFixingDateAdjusted(this.message.tags[UnderlyingPaymentStreamInitialFixingDateAdjusted.Tag]);
};

/* field */
UnderlyingPaymentStreamResetDates.prototype.underlyingPaymentStreamFixingDateRelativeTo = function () {
  return new UnderlyingPaymentStreamFixingDateRelativeTo(this.message.tags[UnderlyingPaymentStreamFixingDateRelativeTo.Tag]);
};

/* field */
UnderlyingPaymentStreamResetDates.prototype.underlyingPaymentStreamFixingDateBusinessDayConvention = function () {
  return new UnderlyingPaymentStreamFixingDateBusinessDayConvention(this.message.tags[UnderlyingPaymentStreamFixingDateBusinessDayConvention.Tag]);
};

/* field */
UnderlyingPaymentStreamResetDates.prototype.underlyingPaymentStreamFixingDateOffsetPeriod = function () {
  return new UnderlyingPaymentStreamFixingDateOffsetPeriod(this.message.tags[UnderlyingPaymentStreamFixingDateOffsetPeriod.Tag]);
};

/* field */
UnderlyingPaymentStreamResetDates.prototype.underlyingPaymentStreamFixingDateOffsetUnit = function () {
  return new UnderlyingPaymentStreamFixingDateOffsetUnit(this.message.tags[UnderlyingPaymentStreamFixingDateOffsetUnit.Tag]);
};

/* field */
UnderlyingPaymentStreamResetDates.prototype.underlyingPaymentStreamFixingDateOffsetDayType = function () {
  return new UnderlyingPaymentStreamFixingDateOffsetDayType(this.message.tags[UnderlyingPaymentStreamFixingDateOffsetDayType.Tag]);
};

/* field */
UnderlyingPaymentStreamResetDates.prototype.underlyingPaymentStreamFixingDateAdjusted = function () {
  return new UnderlyingPaymentStreamFixingDateAdjusted(this.message.tags[UnderlyingPaymentStreamFixingDateAdjusted.Tag]);
};

/* field */
UnderlyingPaymentStreamResetDates.prototype.underlyingPaymentStreamRateCutoffOffsetPeriod = function () {
  return new UnderlyingPaymentStreamRateCutoffOffsetPeriod(this.message.tags[UnderlyingPaymentStreamRateCutoffOffsetPeriod.Tag]);
};

/* field */
UnderlyingPaymentStreamResetDates.prototype.underlyingPaymentStreamRateCutoffOffsetUnit = function () {
  return new UnderlyingPaymentStreamRateCutoffOffsetUnit(this.message.tags[UnderlyingPaymentStreamRateCutoffOffsetUnit.Tag]);
};

/* field */
UnderlyingPaymentStreamResetDates.prototype.underlyingPaymentStreamRateCutoffOffsetDayType = function () {
  return new UnderlyingPaymentStreamRateCutoffOffsetDayType(this.message.tags[UnderlyingPaymentStreamRateCutoffOffsetDayType.Tag]);
};



UnderlyingPaymentStreamResetDates.Tag = '40592';

module.exports = UnderlyingPaymentStreamResetDates;