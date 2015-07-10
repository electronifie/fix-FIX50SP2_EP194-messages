var NoProtectionTermEvents = require('../fields/NoProtectionTermEvents');
var ProtectionTermEventQualifierGrp = require('../components/ProtectionTermEventQualifierGrp');
var ProtectionTermEventType = require('../fields/ProtectionTermEventType');
var ProtectionTermEventValue = require('../fields/ProtectionTermEventValue');
var ProtectionTermEventCurrency = require('../fields/ProtectionTermEventCurrency');
var ProtectionTermEventPeriod = require('../fields/ProtectionTermEventPeriod');
var ProtectionTermEventUnit = require('../fields/ProtectionTermEventUnit');
var ProtectionTermEventDayType = require('../fields/ProtectionTermEventDayType');
var ProtectionTermEventRateSource = require('../fields/ProtectionTermEventRateSource');

function ProtectionTermEventGrp (protectionTermEventGrp) {
  this.message = protectionTermEventGrp;
}

/* group */

/* component */
ProtectionTermEventGrp.prototype.protectionTermEventQualifierGrp = function () {
  return this.message.groups[ProtectionTermEventQualifierGrp.Tag]
    .map(function (protectionTermEventQualifierGrp) {
      return new ProtectionTermEventQualifierGrp(protectionTermEventQualifierGrp);
  });
};

/* field */
ProtectionTermEventGrp.prototype.protectionTermEventType = function () {
  return new ProtectionTermEventType(this.message.tags[ProtectionTermEventType.Tag]);
};

/* field */
ProtectionTermEventGrp.prototype.protectionTermEventValue = function () {
  return new ProtectionTermEventValue(this.message.tags[ProtectionTermEventValue.Tag]);
};

/* field */
ProtectionTermEventGrp.prototype.protectionTermEventCurrency = function () {
  return new ProtectionTermEventCurrency(this.message.tags[ProtectionTermEventCurrency.Tag]);
};

/* field */
ProtectionTermEventGrp.prototype.protectionTermEventPeriod = function () {
  return new ProtectionTermEventPeriod(this.message.tags[ProtectionTermEventPeriod.Tag]);
};

/* field */
ProtectionTermEventGrp.prototype.protectionTermEventUnit = function () {
  return new ProtectionTermEventUnit(this.message.tags[ProtectionTermEventUnit.Tag]);
};

/* field */
ProtectionTermEventGrp.prototype.protectionTermEventDayType = function () {
  return new ProtectionTermEventDayType(this.message.tags[ProtectionTermEventDayType.Tag]);
};

/* field */
ProtectionTermEventGrp.prototype.protectionTermEventRateSource = function () {
  return new ProtectionTermEventRateSource(this.message.tags[ProtectionTermEventRateSource.Tag]);
};

/* end group */

ProtectionTermEventGrp.Tag = '40191';

module.exports = ProtectionTermEventGrp;