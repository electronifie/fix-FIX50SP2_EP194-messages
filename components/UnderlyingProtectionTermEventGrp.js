var NoUnderlyingProtectionTermEvents = require('../fields/NoUnderlyingProtectionTermEvents');
var UnderlyingProtectionTermEventQualifierGrp = require('../components/UnderlyingProtectionTermEventQualifierGrp');
var UnderlyingProtectionTermEventType = require('../fields/UnderlyingProtectionTermEventType');
var UnderlyingProtectionTermEventValue = require('../fields/UnderlyingProtectionTermEventValue');
var UnderlyingProtectionTermEventCurrency = require('../fields/UnderlyingProtectionTermEventCurrency');
var UnderlyingProtectionTermEventPeriod = require('../fields/UnderlyingProtectionTermEventPeriod');
var UnderlyingProtectionTermEventUnit = require('../fields/UnderlyingProtectionTermEventUnit');
var UnderlyingProtectionTermEventDayType = require('../fields/UnderlyingProtectionTermEventDayType');
var UnderlyingProtectionTermEventRateSource = require('../fields/UnderlyingProtectionTermEventRateSource');

function UnderlyingProtectionTermEventGrp (underlyingProtectionTermEventGrp) {
  this.message = underlyingProtectionTermEventGrp;
}

/* group */

/* component */
UnderlyingProtectionTermEventGrp.prototype.underlyingProtectionTermEventQualifierGrp = function () {
  return this.message.groups[UnderlyingProtectionTermEventQualifierGrp.Tag]
    .map(function (underlyingProtectionTermEventQualifierGrp) {
      return new UnderlyingProtectionTermEventQualifierGrp(underlyingProtectionTermEventQualifierGrp);
  });
};

/* field */
UnderlyingProtectionTermEventGrp.prototype.underlyingProtectionTermEventType = function () {
  return new UnderlyingProtectionTermEventType(this.message.tags[UnderlyingProtectionTermEventType.Tag]);
};

/* field */
UnderlyingProtectionTermEventGrp.prototype.underlyingProtectionTermEventValue = function () {
  return new UnderlyingProtectionTermEventValue(this.message.tags[UnderlyingProtectionTermEventValue.Tag]);
};

/* field */
UnderlyingProtectionTermEventGrp.prototype.underlyingProtectionTermEventCurrency = function () {
  return new UnderlyingProtectionTermEventCurrency(this.message.tags[UnderlyingProtectionTermEventCurrency.Tag]);
};

/* field */
UnderlyingProtectionTermEventGrp.prototype.underlyingProtectionTermEventPeriod = function () {
  return new UnderlyingProtectionTermEventPeriod(this.message.tags[UnderlyingProtectionTermEventPeriod.Tag]);
};

/* field */
UnderlyingProtectionTermEventGrp.prototype.underlyingProtectionTermEventUnit = function () {
  return new UnderlyingProtectionTermEventUnit(this.message.tags[UnderlyingProtectionTermEventUnit.Tag]);
};

/* field */
UnderlyingProtectionTermEventGrp.prototype.underlyingProtectionTermEventDayType = function () {
  return new UnderlyingProtectionTermEventDayType(this.message.tags[UnderlyingProtectionTermEventDayType.Tag]);
};

/* field */
UnderlyingProtectionTermEventGrp.prototype.underlyingProtectionTermEventRateSource = function () {
  return new UnderlyingProtectionTermEventRateSource(this.message.tags[UnderlyingProtectionTermEventRateSource.Tag]);
};

/* end group */

UnderlyingProtectionTermEventGrp.Tag = '42077';

module.exports = UnderlyingProtectionTermEventGrp;