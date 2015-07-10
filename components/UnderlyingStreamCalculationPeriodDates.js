var UnderlyingStreamCalculationPeriodBusinessCenterGrp = require('../components/UnderlyingStreamCalculationPeriodBusinessCenterGrp');
var UnderlyingStreamCalculationPeriodDateGrp = require('../components/UnderlyingStreamCalculationPeriodDateGrp');
var UnderlyingStreamFirstPeriodStartDateBusinessCenterGrp = require('../components/UnderlyingStreamFirstPeriodStartDateBusinessCenterGrp');
var UnderlyingStreamCalculationPeriodDatesXID = require('../fields/UnderlyingStreamCalculationPeriodDatesXID');
var UnderlyingStreamCalculationPeriodDatesXIDRef = require('../fields/UnderlyingStreamCalculationPeriodDatesXIDRef');
var UnderlyingStreamCalculationPeriodBusinessDayConvention = require('../fields/UnderlyingStreamCalculationPeriodBusinessDayConvention');
var UnderlyingStreamFirstPeriodStartDateUnadjusted = require('../fields/UnderlyingStreamFirstPeriodStartDateUnadjusted');
var UnderlyingStreamFirstPeriodStartDateBusinessDayConvention = require('../fields/UnderlyingStreamFirstPeriodStartDateBusinessDayConvention');
var UnderlyingStreamFirstPeriodStartDateAdjusted = require('../fields/UnderlyingStreamFirstPeriodStartDateAdjusted');
var UnderlyingStreamFirstRegularPeriodStartDateUnadjusted = require('../fields/UnderlyingStreamFirstRegularPeriodStartDateUnadjusted');
var UnderlyingStreamFirstCompoundingPeriodEndDateUnadjusted = require('../fields/UnderlyingStreamFirstCompoundingPeriodEndDateUnadjusted');
var UnderlyingStreamLastRegularPeriodEndDateUnadjusted = require('../fields/UnderlyingStreamLastRegularPeriodEndDateUnadjusted');
var UnderlyingStreamCalculationFrequencyPeriod = require('../fields/UnderlyingStreamCalculationFrequencyPeriod');
var UnderlyingStreamCalculationFrequencyUnit = require('../fields/UnderlyingStreamCalculationFrequencyUnit');
var UnderlyingStreamCalculationRollConvention = require('../fields/UnderlyingStreamCalculationRollConvention');
var UnderlyingStreamCalculationBalanceOfFirstPeriod = require('../fields/UnderlyingStreamCalculationBalanceOfFirstPeriod');
var UnderlyingStreamCalculationCorrectionPeriod = require('../fields/UnderlyingStreamCalculationCorrectionPeriod');
var UnderlyingStreamCalculationCorrectionUnit = require('../fields/UnderlyingStreamCalculationCorrectionUnit');

function UnderlyingStreamCalculationPeriodDates (underlyingStreamCalculationPeriodDates) {
  this.message = underlyingStreamCalculationPeriodDates;
}
/* component */
UnderlyingStreamCalculationPeriodDates.prototype.underlyingStreamCalculationPeriodBusinessCenterGrp = function () {
  return this.message.groups[UnderlyingStreamCalculationPeriodBusinessCenterGrp.Tag]
    .map(function (underlyingStreamCalculationPeriodBusinessCenterGrp) {
      return new UnderlyingStreamCalculationPeriodBusinessCenterGrp(underlyingStreamCalculationPeriodBusinessCenterGrp);
  });
};

/* component */
UnderlyingStreamCalculationPeriodDates.prototype.underlyingStreamCalculationPeriodDateGrp = function () {
  return this.message.groups[UnderlyingStreamCalculationPeriodDateGrp.Tag]
    .map(function (underlyingStreamCalculationPeriodDateGrp) {
      return new UnderlyingStreamCalculationPeriodDateGrp(underlyingStreamCalculationPeriodDateGrp);
  });
};

/* component */
UnderlyingStreamCalculationPeriodDates.prototype.underlyingStreamFirstPeriodStartDateBusinessCenterGrp = function () {
  return this.message.groups[UnderlyingStreamFirstPeriodStartDateBusinessCenterGrp.Tag]
    .map(function (underlyingStreamFirstPeriodStartDateBusinessCenterGrp) {
      return new UnderlyingStreamFirstPeriodStartDateBusinessCenterGrp(underlyingStreamFirstPeriodStartDateBusinessCenterGrp);
  });
};

/* field */
UnderlyingStreamCalculationPeriodDates.prototype.underlyingStreamCalculationPeriodDatesXid = function () {
  return new UnderlyingStreamCalculationPeriodDatesXID(this.message.tags[UnderlyingStreamCalculationPeriodDatesXID.Tag]);
};

/* field */
UnderlyingStreamCalculationPeriodDates.prototype.underlyingStreamCalculationPeriodDatesXidref = function () {
  return new UnderlyingStreamCalculationPeriodDatesXIDRef(this.message.tags[UnderlyingStreamCalculationPeriodDatesXIDRef.Tag]);
};

/* field */
UnderlyingStreamCalculationPeriodDates.prototype.underlyingStreamCalculationPeriodBusinessDayConvention = function () {
  return new UnderlyingStreamCalculationPeriodBusinessDayConvention(this.message.tags[UnderlyingStreamCalculationPeriodBusinessDayConvention.Tag]);
};

/* field */
UnderlyingStreamCalculationPeriodDates.prototype.underlyingStreamFirstPeriodStartDateUnadjusted = function () {
  return new UnderlyingStreamFirstPeriodStartDateUnadjusted(this.message.tags[UnderlyingStreamFirstPeriodStartDateUnadjusted.Tag]);
};

/* field */
UnderlyingStreamCalculationPeriodDates.prototype.underlyingStreamFirstPeriodStartDateBusinessDayConvention = function () {
  return new UnderlyingStreamFirstPeriodStartDateBusinessDayConvention(this.message.tags[UnderlyingStreamFirstPeriodStartDateBusinessDayConvention.Tag]);
};

/* field */
UnderlyingStreamCalculationPeriodDates.prototype.underlyingStreamFirstPeriodStartDateAdjusted = function () {
  return new UnderlyingStreamFirstPeriodStartDateAdjusted(this.message.tags[UnderlyingStreamFirstPeriodStartDateAdjusted.Tag]);
};

/* field */
UnderlyingStreamCalculationPeriodDates.prototype.underlyingStreamFirstRegularPeriodStartDateUnadjusted = function () {
  return new UnderlyingStreamFirstRegularPeriodStartDateUnadjusted(this.message.tags[UnderlyingStreamFirstRegularPeriodStartDateUnadjusted.Tag]);
};

/* field */
UnderlyingStreamCalculationPeriodDates.prototype.underlyingStreamFirstCompoundingPeriodEndDateUnadjusted = function () {
  return new UnderlyingStreamFirstCompoundingPeriodEndDateUnadjusted(this.message.tags[UnderlyingStreamFirstCompoundingPeriodEndDateUnadjusted.Tag]);
};

/* field */
UnderlyingStreamCalculationPeriodDates.prototype.underlyingStreamLastRegularPeriodEndDateUnadjusted = function () {
  return new UnderlyingStreamLastRegularPeriodEndDateUnadjusted(this.message.tags[UnderlyingStreamLastRegularPeriodEndDateUnadjusted.Tag]);
};

/* field */
UnderlyingStreamCalculationPeriodDates.prototype.underlyingStreamCalculationFrequencyPeriod = function () {
  return new UnderlyingStreamCalculationFrequencyPeriod(this.message.tags[UnderlyingStreamCalculationFrequencyPeriod.Tag]);
};

/* field */
UnderlyingStreamCalculationPeriodDates.prototype.underlyingStreamCalculationFrequencyUnit = function () {
  return new UnderlyingStreamCalculationFrequencyUnit(this.message.tags[UnderlyingStreamCalculationFrequencyUnit.Tag]);
};

/* field */
UnderlyingStreamCalculationPeriodDates.prototype.underlyingStreamCalculationRollConvention = function () {
  return new UnderlyingStreamCalculationRollConvention(this.message.tags[UnderlyingStreamCalculationRollConvention.Tag]);
};

/* field */
UnderlyingStreamCalculationPeriodDates.prototype.underlyingStreamCalculationBalanceOfFirstPeriod = function () {
  return new UnderlyingStreamCalculationBalanceOfFirstPeriod(this.message.tags[UnderlyingStreamCalculationBalanceOfFirstPeriod.Tag]);
};

/* field */
UnderlyingStreamCalculationPeriodDates.prototype.underlyingStreamCalculationCorrectionPeriod = function () {
  return new UnderlyingStreamCalculationCorrectionPeriod(this.message.tags[UnderlyingStreamCalculationCorrectionPeriod.Tag]);
};

/* field */
UnderlyingStreamCalculationPeriodDates.prototype.underlyingStreamCalculationCorrectionUnit = function () {
  return new UnderlyingStreamCalculationCorrectionUnit(this.message.tags[UnderlyingStreamCalculationCorrectionUnit.Tag]);
};



UnderlyingStreamCalculationPeriodDates.Tag = '41957';

module.exports = UnderlyingStreamCalculationPeriodDates;