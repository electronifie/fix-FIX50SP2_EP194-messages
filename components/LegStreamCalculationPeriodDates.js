var LegStreamCalculationPeriodBusinessCenterGrp = require('../components/LegStreamCalculationPeriodBusinessCenterGrp');
var LegStreamCalculationPeriodDateGrp = require('../components/LegStreamCalculationPeriodDateGrp');
var LegStreamFirstPeriodStartDateBusinessCenterGrp = require('../components/LegStreamFirstPeriodStartDateBusinessCenterGrp');
var LegStreamCalculationPeriodDatesXID = require('../fields/LegStreamCalculationPeriodDatesXID');
var LegStreamCalculationPeriodDatesXIDRef = require('../fields/LegStreamCalculationPeriodDatesXIDRef');
var LegStreamCalculationPeriodBusinessDayConvention = require('../fields/LegStreamCalculationPeriodBusinessDayConvention');
var LegStreamFirstPeriodStartDateUnadjusted = require('../fields/LegStreamFirstPeriodStartDateUnadjusted');
var LegStreamFirstPeriodStartDateBusinessDayConvention = require('../fields/LegStreamFirstPeriodStartDateBusinessDayConvention');
var LegStreamFirstPeriodStartDateAdjusted = require('../fields/LegStreamFirstPeriodStartDateAdjusted');
var LegStreamFirstRegularPeriodStartDateUnadjusted = require('../fields/LegStreamFirstRegularPeriodStartDateUnadjusted');
var LegStreamFirstCompoundingPeriodEndDateUnadjusted = require('../fields/LegStreamFirstCompoundingPeriodEndDateUnadjusted');
var LegStreamLastRegularPeriodEndDateUnadjusted = require('../fields/LegStreamLastRegularPeriodEndDateUnadjusted');
var LegStreamCalculationFrequencyPeriod = require('../fields/LegStreamCalculationFrequencyPeriod');
var LegStreamCalculationFrequencyUnit = require('../fields/LegStreamCalculationFrequencyUnit');
var LegStreamCalculationRollConvention = require('../fields/LegStreamCalculationRollConvention');
var LegStreamCalculationBalanceOfFirstPeriod = require('../fields/LegStreamCalculationBalanceOfFirstPeriod');
var LegStreamCalculationCorrectionPeriod = require('../fields/LegStreamCalculationCorrectionPeriod');
var LegStreamCalculationCorrectionUnit = require('../fields/LegStreamCalculationCorrectionUnit');

function LegStreamCalculationPeriodDates (legStreamCalculationPeriodDates) {
  this.message = legStreamCalculationPeriodDates;
}
/* component */
LegStreamCalculationPeriodDates.prototype.legStreamCalculationPeriodBusinessCenterGrp = function () {
  return this.message.groups[LegStreamCalculationPeriodBusinessCenterGrp.Tag]
    .map(function (legStreamCalculationPeriodBusinessCenterGrp) {
      return new LegStreamCalculationPeriodBusinessCenterGrp(legStreamCalculationPeriodBusinessCenterGrp);
  });
};

/* component */
LegStreamCalculationPeriodDates.prototype.legStreamCalculationPeriodDateGrp = function () {
  return this.message.groups[LegStreamCalculationPeriodDateGrp.Tag]
    .map(function (legStreamCalculationPeriodDateGrp) {
      return new LegStreamCalculationPeriodDateGrp(legStreamCalculationPeriodDateGrp);
  });
};

/* component */
LegStreamCalculationPeriodDates.prototype.legStreamFirstPeriodStartDateBusinessCenterGrp = function () {
  return this.message.groups[LegStreamFirstPeriodStartDateBusinessCenterGrp.Tag]
    .map(function (legStreamFirstPeriodStartDateBusinessCenterGrp) {
      return new LegStreamFirstPeriodStartDateBusinessCenterGrp(legStreamFirstPeriodStartDateBusinessCenterGrp);
  });
};

/* field */
LegStreamCalculationPeriodDates.prototype.legStreamCalculationPeriodDatesXid = function () {
  return new LegStreamCalculationPeriodDatesXID(this.message.tags[LegStreamCalculationPeriodDatesXID.Tag]);
};

/* field */
LegStreamCalculationPeriodDates.prototype.legStreamCalculationPeriodDatesXidref = function () {
  return new LegStreamCalculationPeriodDatesXIDRef(this.message.tags[LegStreamCalculationPeriodDatesXIDRef.Tag]);
};

/* field */
LegStreamCalculationPeriodDates.prototype.legStreamCalculationPeriodBusinessDayConvention = function () {
  return new LegStreamCalculationPeriodBusinessDayConvention(this.message.tags[LegStreamCalculationPeriodBusinessDayConvention.Tag]);
};

/* field */
LegStreamCalculationPeriodDates.prototype.legStreamFirstPeriodStartDateUnadjusted = function () {
  return new LegStreamFirstPeriodStartDateUnadjusted(this.message.tags[LegStreamFirstPeriodStartDateUnadjusted.Tag]);
};

/* field */
LegStreamCalculationPeriodDates.prototype.legStreamFirstPeriodStartDateBusinessDayConvention = function () {
  return new LegStreamFirstPeriodStartDateBusinessDayConvention(this.message.tags[LegStreamFirstPeriodStartDateBusinessDayConvention.Tag]);
};

/* field */
LegStreamCalculationPeriodDates.prototype.legStreamFirstPeriodStartDateAdjusted = function () {
  return new LegStreamFirstPeriodStartDateAdjusted(this.message.tags[LegStreamFirstPeriodStartDateAdjusted.Tag]);
};

/* field */
LegStreamCalculationPeriodDates.prototype.legStreamFirstRegularPeriodStartDateUnadjusted = function () {
  return new LegStreamFirstRegularPeriodStartDateUnadjusted(this.message.tags[LegStreamFirstRegularPeriodStartDateUnadjusted.Tag]);
};

/* field */
LegStreamCalculationPeriodDates.prototype.legStreamFirstCompoundingPeriodEndDateUnadjusted = function () {
  return new LegStreamFirstCompoundingPeriodEndDateUnadjusted(this.message.tags[LegStreamFirstCompoundingPeriodEndDateUnadjusted.Tag]);
};

/* field */
LegStreamCalculationPeriodDates.prototype.legStreamLastRegularPeriodEndDateUnadjusted = function () {
  return new LegStreamLastRegularPeriodEndDateUnadjusted(this.message.tags[LegStreamLastRegularPeriodEndDateUnadjusted.Tag]);
};

/* field */
LegStreamCalculationPeriodDates.prototype.legStreamCalculationFrequencyPeriod = function () {
  return new LegStreamCalculationFrequencyPeriod(this.message.tags[LegStreamCalculationFrequencyPeriod.Tag]);
};

/* field */
LegStreamCalculationPeriodDates.prototype.legStreamCalculationFrequencyUnit = function () {
  return new LegStreamCalculationFrequencyUnit(this.message.tags[LegStreamCalculationFrequencyUnit.Tag]);
};

/* field */
LegStreamCalculationPeriodDates.prototype.legStreamCalculationRollConvention = function () {
  return new LegStreamCalculationRollConvention(this.message.tags[LegStreamCalculationRollConvention.Tag]);
};

/* field */
LegStreamCalculationPeriodDates.prototype.legStreamCalculationBalanceOfFirstPeriod = function () {
  return new LegStreamCalculationBalanceOfFirstPeriod(this.message.tags[LegStreamCalculationBalanceOfFirstPeriod.Tag]);
};

/* field */
LegStreamCalculationPeriodDates.prototype.legStreamCalculationCorrectionPeriod = function () {
  return new LegStreamCalculationCorrectionPeriod(this.message.tags[LegStreamCalculationCorrectionPeriod.Tag]);
};

/* field */
LegStreamCalculationPeriodDates.prototype.legStreamCalculationCorrectionUnit = function () {
  return new LegStreamCalculationCorrectionUnit(this.message.tags[LegStreamCalculationCorrectionUnit.Tag]);
};



LegStreamCalculationPeriodDates.Tag = '41641';

module.exports = LegStreamCalculationPeriodDates;