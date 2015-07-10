var NoLegProtectionTermEvents = require('../fields/NoLegProtectionTermEvents');
var LegProtectionTermEventQualifierGrp = require('../components/LegProtectionTermEventQualifierGrp');
var LegProtectionTermEventType = require('../fields/LegProtectionTermEventType');
var LegProtectionTermEventValue = require('../fields/LegProtectionTermEventValue');
var LegProtectionTermEventCurrency = require('../fields/LegProtectionTermEventCurrency');
var LegProtectionTermEventPeriod = require('../fields/LegProtectionTermEventPeriod');
var LegProtectionTermEventUnit = require('../fields/LegProtectionTermEventUnit');
var LegProtectionTermEventDayType = require('../fields/LegProtectionTermEventDayType');
var LegProtectionTermEventRateSource = require('../fields/LegProtectionTermEventRateSource');

function LegProtectionTermEventGrp (legProtectionTermEventGrp) {
  this.message = legProtectionTermEventGrp;
}

/* group */

/* component */
LegProtectionTermEventGrp.prototype.legProtectionTermEventQualifierGrp = function () {
  return this.message.groups[LegProtectionTermEventQualifierGrp.Tag]
    .map(function (legProtectionTermEventQualifierGrp) {
      return new LegProtectionTermEventQualifierGrp(legProtectionTermEventQualifierGrp);
  });
};

/* field */
LegProtectionTermEventGrp.prototype.legProtectionTermEventType = function () {
  return new LegProtectionTermEventType(this.message.tags[LegProtectionTermEventType.Tag]);
};

/* field */
LegProtectionTermEventGrp.prototype.legProtectionTermEventValue = function () {
  return new LegProtectionTermEventValue(this.message.tags[LegProtectionTermEventValue.Tag]);
};

/* field */
LegProtectionTermEventGrp.prototype.legProtectionTermEventCurrency = function () {
  return new LegProtectionTermEventCurrency(this.message.tags[LegProtectionTermEventCurrency.Tag]);
};

/* field */
LegProtectionTermEventGrp.prototype.legProtectionTermEventPeriod = function () {
  return new LegProtectionTermEventPeriod(this.message.tags[LegProtectionTermEventPeriod.Tag]);
};

/* field */
LegProtectionTermEventGrp.prototype.legProtectionTermEventUnit = function () {
  return new LegProtectionTermEventUnit(this.message.tags[LegProtectionTermEventUnit.Tag]);
};

/* field */
LegProtectionTermEventGrp.prototype.legProtectionTermEventDayType = function () {
  return new LegProtectionTermEventDayType(this.message.tags[LegProtectionTermEventDayType.Tag]);
};

/* field */
LegProtectionTermEventGrp.prototype.legProtectionTermEventRateSource = function () {
  return new LegProtectionTermEventRateSource(this.message.tags[LegProtectionTermEventRateSource.Tag]);
};

/* end group */

LegProtectionTermEventGrp.Tag = '41625';

module.exports = LegProtectionTermEventGrp;