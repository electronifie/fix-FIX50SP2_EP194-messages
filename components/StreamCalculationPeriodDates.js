var StreamCalculationPeriodBusinessCenterGrp = require('../components/StreamCalculationPeriodBusinessCenterGrp');
var StreamCalculationPeriodDateGrp = require('../components/StreamCalculationPeriodDateGrp');
var StreamFirstPeriodStartDateBusinessCenterGrp = require('../components/StreamFirstPeriodStartDateBusinessCenterGrp');
var StreamCalculationPeriodDatesXID = require('../fields/StreamCalculationPeriodDatesXID');
var StreamCalculationPeriodDatesXIDRef = require('../fields/StreamCalculationPeriodDatesXIDRef');
var StreamCalculationPeriodBusinessDayConvention = require('../fields/StreamCalculationPeriodBusinessDayConvention');
var StreamFirstPeriodStartDateUnadjusted = require('../fields/StreamFirstPeriodStartDateUnadjusted');
var StreamFirstPeriodStartDateBusinessDayConvention = require('../fields/StreamFirstPeriodStartDateBusinessDayConvention');
var StreamFirstPeriodStartDateAdjusted = require('../fields/StreamFirstPeriodStartDateAdjusted');
var StreamFirstRegularPeriodStartDateUnadjusted = require('../fields/StreamFirstRegularPeriodStartDateUnadjusted');
var StreamFirstCompoundingPeriodEndDateUnadjusted = require('../fields/StreamFirstCompoundingPeriodEndDateUnadjusted');
var StreamLastRegularPeriodEndDateUnadjusted = require('../fields/StreamLastRegularPeriodEndDateUnadjusted');
var StreamCalculationFrequencyPeriod = require('../fields/StreamCalculationFrequencyPeriod');
var StreamCalculationFrequencyUnit = require('../fields/StreamCalculationFrequencyUnit');
var StreamCalculationRollConvention = require('../fields/StreamCalculationRollConvention');
var StreamCalculationBalanceOfFirstPeriod = require('../fields/StreamCalculationBalanceOfFirstPeriod');
var StreamCalculationCorrectionPeriod = require('../fields/StreamCalculationCorrectionPeriod');
var StreamCalculationCorrectionUnit = require('../fields/StreamCalculationCorrectionUnit');

function StreamCalculationPeriodDates (streamCalculationPeriodDates) {
  this.message = streamCalculationPeriodDates;
}
/* component */
StreamCalculationPeriodDates.prototype.streamCalculationPeriodBusinessCenterGrp = function () {
  return this.message.groups[StreamCalculationPeriodBusinessCenterGrp.Tag]
    .map(function (streamCalculationPeriodBusinessCenterGrp) {
      return new StreamCalculationPeriodBusinessCenterGrp(streamCalculationPeriodBusinessCenterGrp);
  });
};

/* component */
StreamCalculationPeriodDates.prototype.streamCalculationPeriodDateGrp = function () {
  return this.message.groups[StreamCalculationPeriodDateGrp.Tag]
    .map(function (streamCalculationPeriodDateGrp) {
      return new StreamCalculationPeriodDateGrp(streamCalculationPeriodDateGrp);
  });
};

/* component */
StreamCalculationPeriodDates.prototype.streamFirstPeriodStartDateBusinessCenterGrp = function () {
  return this.message.groups[StreamFirstPeriodStartDateBusinessCenterGrp.Tag]
    .map(function (streamFirstPeriodStartDateBusinessCenterGrp) {
      return new StreamFirstPeriodStartDateBusinessCenterGrp(streamFirstPeriodStartDateBusinessCenterGrp);
  });
};

/* field */
StreamCalculationPeriodDates.prototype.streamCalculationPeriodDatesXid = function () {
  return new StreamCalculationPeriodDatesXID(this.message.tags[StreamCalculationPeriodDatesXID.Tag]);
};

/* field */
StreamCalculationPeriodDates.prototype.streamCalculationPeriodDatesXidref = function () {
  return new StreamCalculationPeriodDatesXIDRef(this.message.tags[StreamCalculationPeriodDatesXIDRef.Tag]);
};

/* field */
StreamCalculationPeriodDates.prototype.streamCalculationPeriodBusinessDayConvention = function () {
  return new StreamCalculationPeriodBusinessDayConvention(this.message.tags[StreamCalculationPeriodBusinessDayConvention.Tag]);
};

/* field */
StreamCalculationPeriodDates.prototype.streamFirstPeriodStartDateUnadjusted = function () {
  return new StreamFirstPeriodStartDateUnadjusted(this.message.tags[StreamFirstPeriodStartDateUnadjusted.Tag]);
};

/* field */
StreamCalculationPeriodDates.prototype.streamFirstPeriodStartDateBusinessDayConvention = function () {
  return new StreamFirstPeriodStartDateBusinessDayConvention(this.message.tags[StreamFirstPeriodStartDateBusinessDayConvention.Tag]);
};

/* field */
StreamCalculationPeriodDates.prototype.streamFirstPeriodStartDateAdjusted = function () {
  return new StreamFirstPeriodStartDateAdjusted(this.message.tags[StreamFirstPeriodStartDateAdjusted.Tag]);
};

/* field */
StreamCalculationPeriodDates.prototype.streamFirstRegularPeriodStartDateUnadjusted = function () {
  return new StreamFirstRegularPeriodStartDateUnadjusted(this.message.tags[StreamFirstRegularPeriodStartDateUnadjusted.Tag]);
};

/* field */
StreamCalculationPeriodDates.prototype.streamFirstCompoundingPeriodEndDateUnadjusted = function () {
  return new StreamFirstCompoundingPeriodEndDateUnadjusted(this.message.tags[StreamFirstCompoundingPeriodEndDateUnadjusted.Tag]);
};

/* field */
StreamCalculationPeriodDates.prototype.streamLastRegularPeriodEndDateUnadjusted = function () {
  return new StreamLastRegularPeriodEndDateUnadjusted(this.message.tags[StreamLastRegularPeriodEndDateUnadjusted.Tag]);
};

/* field */
StreamCalculationPeriodDates.prototype.streamCalculationFrequencyPeriod = function () {
  return new StreamCalculationFrequencyPeriod(this.message.tags[StreamCalculationFrequencyPeriod.Tag]);
};

/* field */
StreamCalculationPeriodDates.prototype.streamCalculationFrequencyUnit = function () {
  return new StreamCalculationFrequencyUnit(this.message.tags[StreamCalculationFrequencyUnit.Tag]);
};

/* field */
StreamCalculationPeriodDates.prototype.streamCalculationRollConvention = function () {
  return new StreamCalculationRollConvention(this.message.tags[StreamCalculationRollConvention.Tag]);
};

/* field */
StreamCalculationPeriodDates.prototype.streamCalculationBalanceOfFirstPeriod = function () {
  return new StreamCalculationBalanceOfFirstPeriod(this.message.tags[StreamCalculationBalanceOfFirstPeriod.Tag]);
};

/* field */
StreamCalculationPeriodDates.prototype.streamCalculationCorrectionPeriod = function () {
  return new StreamCalculationCorrectionPeriod(this.message.tags[StreamCalculationCorrectionPeriod.Tag]);
};

/* field */
StreamCalculationPeriodDates.prototype.streamCalculationCorrectionUnit = function () {
  return new StreamCalculationCorrectionUnit(this.message.tags[StreamCalculationCorrectionUnit.Tag]);
};



StreamCalculationPeriodDates.Tag = '41244';

module.exports = StreamCalculationPeriodDates;