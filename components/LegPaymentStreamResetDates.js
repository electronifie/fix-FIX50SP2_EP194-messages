var LegPaymentStreamResetDateBusinessCenterGrp = require('../components/LegPaymentStreamResetDateBusinessCenterGrp');
var LegPaymentStreamInitialFixingDateBusinessCenterGrp = require('../components/LegPaymentStreamInitialFixingDateBusinessCenterGrp');
var LegPaymentStreamFixingDateBusinessCenterGrp = require('../components/LegPaymentStreamFixingDateBusinessCenterGrp');
var LegPaymentStreamResetDateRelativeTo = require('../fields/LegPaymentStreamResetDateRelativeTo');
var LegPaymentStreamResetDateBusinessDayConvention = require('../fields/LegPaymentStreamResetDateBusinessDayConvention');
var LegPaymentStreamResetFrequencyPeriod = require('../fields/LegPaymentStreamResetFrequencyPeriod');
var LegPaymentStreamResetFrequencyUnit = require('../fields/LegPaymentStreamResetFrequencyUnit');
var LegPaymentStreamResetWeeklyRollConvention = require('../fields/LegPaymentStreamResetWeeklyRollConvention');
var LegPaymentStreamInitialFixingDateRelativeTo = require('../fields/LegPaymentStreamInitialFixingDateRelativeTo');
var LegPaymentStreamInitialFixingDateBusinessDayConvention = require('../fields/LegPaymentStreamInitialFixingDateBusinessDayConvention');
var LegPaymentStreamInitialFixingDateOffsetPeriod = require('../fields/LegPaymentStreamInitialFixingDateOffsetPeriod');
var LegPaymentStreamInitialFixingDateOffsetUnit = require('../fields/LegPaymentStreamInitialFixingDateOffsetUnit');
var LegPaymentStreamInitialFixingDateOffsetDayType = require('../fields/LegPaymentStreamInitialFixingDateOffsetDayType');
var LegPaymentStreamInitialFixingDateAdjusted = require('../fields/LegPaymentStreamInitialFixingDateAdjusted');
var LegPaymentStreamFixingDateRelativeTo = require('../fields/LegPaymentStreamFixingDateRelativeTo');
var LegPaymentStreamFixingDateBusinessDayConvention = require('../fields/LegPaymentStreamFixingDateBusinessDayConvention');
var LegPaymentStreamFixingDateOffsetPeriod = require('../fields/LegPaymentStreamFixingDateOffsetPeriod');
var LegPaymentStreamFixingDateOffsetUnit = require('../fields/LegPaymentStreamFixingDateOffsetUnit');
var LegPaymentStreamFixingDateOffsetDayType = require('../fields/LegPaymentStreamFixingDateOffsetDayType');
var LegPaymentStreamFixingDateAdjusted = require('../fields/LegPaymentStreamFixingDateAdjusted');
var LegPaymentStreamRateCutoffOffsetPeriod = require('../fields/LegPaymentStreamRateCutoffOffsetPeriod');
var LegPaymentStreamRateCutoffOffsetUnit = require('../fields/LegPaymentStreamRateCutoffOffsetUnit');
var LegPaymentStreamRateCutoffOffsetDayType = require('../fields/LegPaymentStreamRateCutoffOffsetDayType');

function LegPaymentStreamResetDates (legPaymentStreamResetDates) {
  this.message = legPaymentStreamResetDates;
}
/* component */
LegPaymentStreamResetDates.prototype.legPaymentStreamResetDateBusinessCenterGrp = function () {
  return this.message.groups[LegPaymentStreamResetDateBusinessCenterGrp.Tag]
    .map(function (legPaymentStreamResetDateBusinessCenterGrp) {
      return new LegPaymentStreamResetDateBusinessCenterGrp(legPaymentStreamResetDateBusinessCenterGrp);
  });
};

/* component */
LegPaymentStreamResetDates.prototype.legPaymentStreamInitialFixingDateBusinessCenterGrp = function () {
  return this.message.groups[LegPaymentStreamInitialFixingDateBusinessCenterGrp.Tag]
    .map(function (legPaymentStreamInitialFixingDateBusinessCenterGrp) {
      return new LegPaymentStreamInitialFixingDateBusinessCenterGrp(legPaymentStreamInitialFixingDateBusinessCenterGrp);
  });
};

/* component */
LegPaymentStreamResetDates.prototype.legPaymentStreamFixingDateBusinessCenterGrp = function () {
  return this.message.groups[LegPaymentStreamFixingDateBusinessCenterGrp.Tag]
    .map(function (legPaymentStreamFixingDateBusinessCenterGrp) {
      return new LegPaymentStreamFixingDateBusinessCenterGrp(legPaymentStreamFixingDateBusinessCenterGrp);
  });
};

/* field */
LegPaymentStreamResetDates.prototype.legPaymentStreamResetDateRelativeTo = function () {
  return new LegPaymentStreamResetDateRelativeTo(this.message.tags[LegPaymentStreamResetDateRelativeTo.Tag]);
};

/* field */
LegPaymentStreamResetDates.prototype.legPaymentStreamResetDateBusinessDayConvention = function () {
  return new LegPaymentStreamResetDateBusinessDayConvention(this.message.tags[LegPaymentStreamResetDateBusinessDayConvention.Tag]);
};

/* field */
LegPaymentStreamResetDates.prototype.legPaymentStreamResetFrequencyPeriod = function () {
  return new LegPaymentStreamResetFrequencyPeriod(this.message.tags[LegPaymentStreamResetFrequencyPeriod.Tag]);
};

/* field */
LegPaymentStreamResetDates.prototype.legPaymentStreamResetFrequencyUnit = function () {
  return new LegPaymentStreamResetFrequencyUnit(this.message.tags[LegPaymentStreamResetFrequencyUnit.Tag]);
};

/* field */
LegPaymentStreamResetDates.prototype.legPaymentStreamResetWeeklyRollConvention = function () {
  return new LegPaymentStreamResetWeeklyRollConvention(this.message.tags[LegPaymentStreamResetWeeklyRollConvention.Tag]);
};

/* field */
LegPaymentStreamResetDates.prototype.legPaymentStreamInitialFixingDateRelativeTo = function () {
  return new LegPaymentStreamInitialFixingDateRelativeTo(this.message.tags[LegPaymentStreamInitialFixingDateRelativeTo.Tag]);
};

/* field */
LegPaymentStreamResetDates.prototype.legPaymentStreamInitialFixingDateBusinessDayConvention = function () {
  return new LegPaymentStreamInitialFixingDateBusinessDayConvention(this.message.tags[LegPaymentStreamInitialFixingDateBusinessDayConvention.Tag]);
};

/* field */
LegPaymentStreamResetDates.prototype.legPaymentStreamInitialFixingDateOffsetPeriod = function () {
  return new LegPaymentStreamInitialFixingDateOffsetPeriod(this.message.tags[LegPaymentStreamInitialFixingDateOffsetPeriod.Tag]);
};

/* field */
LegPaymentStreamResetDates.prototype.legPaymentStreamInitialFixingDateOffsetUnit = function () {
  return new LegPaymentStreamInitialFixingDateOffsetUnit(this.message.tags[LegPaymentStreamInitialFixingDateOffsetUnit.Tag]);
};

/* field */
LegPaymentStreamResetDates.prototype.legPaymentStreamInitialFixingDateOffsetDayType = function () {
  return new LegPaymentStreamInitialFixingDateOffsetDayType(this.message.tags[LegPaymentStreamInitialFixingDateOffsetDayType.Tag]);
};

/* field */
LegPaymentStreamResetDates.prototype.legPaymentStreamInitialFixingDateAdjusted = function () {
  return new LegPaymentStreamInitialFixingDateAdjusted(this.message.tags[LegPaymentStreamInitialFixingDateAdjusted.Tag]);
};

/* field */
LegPaymentStreamResetDates.prototype.legPaymentStreamFixingDateRelativeTo = function () {
  return new LegPaymentStreamFixingDateRelativeTo(this.message.tags[LegPaymentStreamFixingDateRelativeTo.Tag]);
};

/* field */
LegPaymentStreamResetDates.prototype.legPaymentStreamFixingDateBusinessDayConvention = function () {
  return new LegPaymentStreamFixingDateBusinessDayConvention(this.message.tags[LegPaymentStreamFixingDateBusinessDayConvention.Tag]);
};

/* field */
LegPaymentStreamResetDates.prototype.legPaymentStreamFixingDateOffsetPeriod = function () {
  return new LegPaymentStreamFixingDateOffsetPeriod(this.message.tags[LegPaymentStreamFixingDateOffsetPeriod.Tag]);
};

/* field */
LegPaymentStreamResetDates.prototype.legPaymentStreamFixingDateOffsetUnit = function () {
  return new LegPaymentStreamFixingDateOffsetUnit(this.message.tags[LegPaymentStreamFixingDateOffsetUnit.Tag]);
};

/* field */
LegPaymentStreamResetDates.prototype.legPaymentStreamFixingDateOffsetDayType = function () {
  return new LegPaymentStreamFixingDateOffsetDayType(this.message.tags[LegPaymentStreamFixingDateOffsetDayType.Tag]);
};

/* field */
LegPaymentStreamResetDates.prototype.legPaymentStreamFixingDateAdjusted = function () {
  return new LegPaymentStreamFixingDateAdjusted(this.message.tags[LegPaymentStreamFixingDateAdjusted.Tag]);
};

/* field */
LegPaymentStreamResetDates.prototype.legPaymentStreamRateCutoffOffsetPeriod = function () {
  return new LegPaymentStreamRateCutoffOffsetPeriod(this.message.tags[LegPaymentStreamRateCutoffOffsetPeriod.Tag]);
};

/* field */
LegPaymentStreamResetDates.prototype.legPaymentStreamRateCutoffOffsetUnit = function () {
  return new LegPaymentStreamRateCutoffOffsetUnit(this.message.tags[LegPaymentStreamRateCutoffOffsetUnit.Tag]);
};

/* field */
LegPaymentStreamResetDates.prototype.legPaymentStreamRateCutoffOffsetDayType = function () {
  return new LegPaymentStreamRateCutoffOffsetDayType(this.message.tags[LegPaymentStreamRateCutoffOffsetDayType.Tag]);
};



LegPaymentStreamResetDates.Tag = '40303';

module.exports = LegPaymentStreamResetDates;