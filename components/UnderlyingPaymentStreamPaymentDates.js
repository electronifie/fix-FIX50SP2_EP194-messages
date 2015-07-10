var UnderlyingPaymentStreamPaymentDateBusinessCenterGrp = require('../components/UnderlyingPaymentStreamPaymentDateBusinessCenterGrp');
var UnderlyingPaymentStreamPaymentDateGrp = require('../components/UnderlyingPaymentStreamPaymentDateGrp');
var UnderlyingPaymentStreamPaymentDateBusinessDayConvention = require('../fields/UnderlyingPaymentStreamPaymentDateBusinessDayConvention');
var UnderlyingPaymentStreamPaymentFrequencyPeriod = require('../fields/UnderlyingPaymentStreamPaymentFrequencyPeriod');
var UnderlyingPaymentStreamPaymentFrequencyUnit = require('../fields/UnderlyingPaymentStreamPaymentFrequencyUnit');
var UnderlyingPaymentStreamPaymentRollConvention = require('../fields/UnderlyingPaymentStreamPaymentRollConvention');
var UnderlyingPaymentStreamFirstPaymentDateUnadjusted = require('../fields/UnderlyingPaymentStreamFirstPaymentDateUnadjusted');
var UnderlyingPaymentStreamLastRegularPaymentDateUnadjusted = require('../fields/UnderlyingPaymentStreamLastRegularPaymentDateUnadjusted');
var UnderlyingPaymentStreamPaymentDateRelativeTo = require('../fields/UnderlyingPaymentStreamPaymentDateRelativeTo');
var UnderlyingPaymentStreamPaymentOffsetPeriod = require('../fields/UnderlyingPaymentStreamPaymentOffsetPeriod');
var UnderlyingPaymentStreamPaymentOffsetUnit = require('../fields/UnderlyingPaymentStreamPaymentOffsetUnit');
var UnderlyingPaymentStreamPaymentOffsetDayType = require('../fields/UnderlyingPaymentStreamPaymentOffsetDayType');
var UnderlyingPaymentStreamMasterAgreementPaymentDatesIndicator = require('../fields/UnderlyingPaymentStreamMasterAgreementPaymentDatesIndicator');

function UnderlyingPaymentStreamPaymentDates (underlyingPaymentStreamPaymentDates) {
  this.message = underlyingPaymentStreamPaymentDates;
}
/* component */
UnderlyingPaymentStreamPaymentDates.prototype.underlyingPaymentStreamPaymentDateBusinessCenterGrp = function () {
  return this.message.groups[UnderlyingPaymentStreamPaymentDateBusinessCenterGrp.Tag]
    .map(function (underlyingPaymentStreamPaymentDateBusinessCenterGrp) {
      return new UnderlyingPaymentStreamPaymentDateBusinessCenterGrp(underlyingPaymentStreamPaymentDateBusinessCenterGrp);
  });
};

/* component */
UnderlyingPaymentStreamPaymentDates.prototype.underlyingPaymentStreamPaymentDateGrp = function () {
  return this.message.groups[UnderlyingPaymentStreamPaymentDateGrp.Tag]
    .map(function (underlyingPaymentStreamPaymentDateGrp) {
      return new UnderlyingPaymentStreamPaymentDateGrp(underlyingPaymentStreamPaymentDateGrp);
  });
};

/* field */
UnderlyingPaymentStreamPaymentDates.prototype.underlyingPaymentStreamPaymentDateBusinessDayConvention = function () {
  return new UnderlyingPaymentStreamPaymentDateBusinessDayConvention(this.message.tags[UnderlyingPaymentStreamPaymentDateBusinessDayConvention.Tag]);
};

/* field */
UnderlyingPaymentStreamPaymentDates.prototype.underlyingPaymentStreamPaymentFrequencyPeriod = function () {
  return new UnderlyingPaymentStreamPaymentFrequencyPeriod(this.message.tags[UnderlyingPaymentStreamPaymentFrequencyPeriod.Tag]);
};

/* field */
UnderlyingPaymentStreamPaymentDates.prototype.underlyingPaymentStreamPaymentFrequencyUnit = function () {
  return new UnderlyingPaymentStreamPaymentFrequencyUnit(this.message.tags[UnderlyingPaymentStreamPaymentFrequencyUnit.Tag]);
};

/* field */
UnderlyingPaymentStreamPaymentDates.prototype.underlyingPaymentStreamPaymentRollConvention = function () {
  return new UnderlyingPaymentStreamPaymentRollConvention(this.message.tags[UnderlyingPaymentStreamPaymentRollConvention.Tag]);
};

/* field */
UnderlyingPaymentStreamPaymentDates.prototype.underlyingPaymentStreamFirstPaymentDateUnadjusted = function () {
  return new UnderlyingPaymentStreamFirstPaymentDateUnadjusted(this.message.tags[UnderlyingPaymentStreamFirstPaymentDateUnadjusted.Tag]);
};

/* field */
UnderlyingPaymentStreamPaymentDates.prototype.underlyingPaymentStreamLastRegularPaymentDateUnadjusted = function () {
  return new UnderlyingPaymentStreamLastRegularPaymentDateUnadjusted(this.message.tags[UnderlyingPaymentStreamLastRegularPaymentDateUnadjusted.Tag]);
};

/* field */
UnderlyingPaymentStreamPaymentDates.prototype.underlyingPaymentStreamPaymentDateRelativeTo = function () {
  return new UnderlyingPaymentStreamPaymentDateRelativeTo(this.message.tags[UnderlyingPaymentStreamPaymentDateRelativeTo.Tag]);
};

/* field */
UnderlyingPaymentStreamPaymentDates.prototype.underlyingPaymentStreamPaymentOffsetPeriod = function () {
  return new UnderlyingPaymentStreamPaymentOffsetPeriod(this.message.tags[UnderlyingPaymentStreamPaymentOffsetPeriod.Tag]);
};

/* field */
UnderlyingPaymentStreamPaymentDates.prototype.underlyingPaymentStreamPaymentOffsetUnit = function () {
  return new UnderlyingPaymentStreamPaymentOffsetUnit(this.message.tags[UnderlyingPaymentStreamPaymentOffsetUnit.Tag]);
};

/* field */
UnderlyingPaymentStreamPaymentDates.prototype.underlyingPaymentStreamPaymentOffsetDayType = function () {
  return new UnderlyingPaymentStreamPaymentOffsetDayType(this.message.tags[UnderlyingPaymentStreamPaymentOffsetDayType.Tag]);
};

/* field */
UnderlyingPaymentStreamPaymentDates.prototype.underlyingPaymentStreamMasterAgreementPaymentDatesIndicator = function () {
  return new UnderlyingPaymentStreamMasterAgreementPaymentDatesIndicator(this.message.tags[UnderlyingPaymentStreamMasterAgreementPaymentDatesIndicator.Tag]);
};



UnderlyingPaymentStreamPaymentDates.Tag = '40581';

module.exports = UnderlyingPaymentStreamPaymentDates;