var LegPaymentStreamPaymentDateBusinessCenterGrp = require('../components/LegPaymentStreamPaymentDateBusinessCenterGrp');
var LegPaymentStreamPaymentDateGrp = require('../components/LegPaymentStreamPaymentDateGrp');
var LegPaymentStreamPaymentDateBusinessDayConvention = require('../fields/LegPaymentStreamPaymentDateBusinessDayConvention');
var LegPaymentStreamPaymentFrequencyPeriod = require('../fields/LegPaymentStreamPaymentFrequencyPeriod');
var LegPaymentStreamPaymentFrequencyUnit = require('../fields/LegPaymentStreamPaymentFrequencyUnit');
var LegPaymentStreamPaymentRollConvention = require('../fields/LegPaymentStreamPaymentRollConvention');
var LegPaymentStreamFirstPaymentDateUnadjusted = require('../fields/LegPaymentStreamFirstPaymentDateUnadjusted');
var LegPaymentStreamLastRegularPaymentDateUnadjusted = require('../fields/LegPaymentStreamLastRegularPaymentDateUnadjusted');
var LegPaymentStreamPaymentDateRelativeTo = require('../fields/LegPaymentStreamPaymentDateRelativeTo');
var LegPaymentStreamPaymentOffsetPeriod = require('../fields/LegPaymentStreamPaymentOffsetPeriod');
var LegPaymentStreamPaymentOffsetUnit = require('../fields/LegPaymentStreamPaymentOffsetUnit');
var LegPaymentStreamPaymentOffsetDayType = require('../fields/LegPaymentStreamPaymentOffsetDayType');
var LegPaymentStreamMasterAgreementPaymentDatesIndicator = require('../fields/LegPaymentStreamMasterAgreementPaymentDatesIndicator');

function LegPaymentStreamPaymentDates (legPaymentStreamPaymentDates) {
  this.message = legPaymentStreamPaymentDates;
}
/* component */
LegPaymentStreamPaymentDates.prototype.legPaymentStreamPaymentDateBusinessCenterGrp = function () {
  return this.message.groups[LegPaymentStreamPaymentDateBusinessCenterGrp.Tag]
    .map(function (legPaymentStreamPaymentDateBusinessCenterGrp) {
      return new LegPaymentStreamPaymentDateBusinessCenterGrp(legPaymentStreamPaymentDateBusinessCenterGrp);
  });
};

/* component */
LegPaymentStreamPaymentDates.prototype.legPaymentStreamPaymentDateGrp = function () {
  return this.message.groups[LegPaymentStreamPaymentDateGrp.Tag]
    .map(function (legPaymentStreamPaymentDateGrp) {
      return new LegPaymentStreamPaymentDateGrp(legPaymentStreamPaymentDateGrp);
  });
};

/* field */
LegPaymentStreamPaymentDates.prototype.legPaymentStreamPaymentDateBusinessDayConvention = function () {
  return new LegPaymentStreamPaymentDateBusinessDayConvention(this.message.tags[LegPaymentStreamPaymentDateBusinessDayConvention.Tag]);
};

/* field */
LegPaymentStreamPaymentDates.prototype.legPaymentStreamPaymentFrequencyPeriod = function () {
  return new LegPaymentStreamPaymentFrequencyPeriod(this.message.tags[LegPaymentStreamPaymentFrequencyPeriod.Tag]);
};

/* field */
LegPaymentStreamPaymentDates.prototype.legPaymentStreamPaymentFrequencyUnit = function () {
  return new LegPaymentStreamPaymentFrequencyUnit(this.message.tags[LegPaymentStreamPaymentFrequencyUnit.Tag]);
};

/* field */
LegPaymentStreamPaymentDates.prototype.legPaymentStreamPaymentRollConvention = function () {
  return new LegPaymentStreamPaymentRollConvention(this.message.tags[LegPaymentStreamPaymentRollConvention.Tag]);
};

/* field */
LegPaymentStreamPaymentDates.prototype.legPaymentStreamFirstPaymentDateUnadjusted = function () {
  return new LegPaymentStreamFirstPaymentDateUnadjusted(this.message.tags[LegPaymentStreamFirstPaymentDateUnadjusted.Tag]);
};

/* field */
LegPaymentStreamPaymentDates.prototype.legPaymentStreamLastRegularPaymentDateUnadjusted = function () {
  return new LegPaymentStreamLastRegularPaymentDateUnadjusted(this.message.tags[LegPaymentStreamLastRegularPaymentDateUnadjusted.Tag]);
};

/* field */
LegPaymentStreamPaymentDates.prototype.legPaymentStreamPaymentDateRelativeTo = function () {
  return new LegPaymentStreamPaymentDateRelativeTo(this.message.tags[LegPaymentStreamPaymentDateRelativeTo.Tag]);
};

/* field */
LegPaymentStreamPaymentDates.prototype.legPaymentStreamPaymentOffsetPeriod = function () {
  return new LegPaymentStreamPaymentOffsetPeriod(this.message.tags[LegPaymentStreamPaymentOffsetPeriod.Tag]);
};

/* field */
LegPaymentStreamPaymentDates.prototype.legPaymentStreamPaymentOffsetUnit = function () {
  return new LegPaymentStreamPaymentOffsetUnit(this.message.tags[LegPaymentStreamPaymentOffsetUnit.Tag]);
};

/* field */
LegPaymentStreamPaymentDates.prototype.legPaymentStreamPaymentOffsetDayType = function () {
  return new LegPaymentStreamPaymentOffsetDayType(this.message.tags[LegPaymentStreamPaymentOffsetDayType.Tag]);
};

/* field */
LegPaymentStreamPaymentDates.prototype.legPaymentStreamMasterAgreementPaymentDatesIndicator = function () {
  return new LegPaymentStreamMasterAgreementPaymentDatesIndicator(this.message.tags[LegPaymentStreamMasterAgreementPaymentDatesIndicator.Tag]);
};



LegPaymentStreamPaymentDates.Tag = '40292';

module.exports = LegPaymentStreamPaymentDates;