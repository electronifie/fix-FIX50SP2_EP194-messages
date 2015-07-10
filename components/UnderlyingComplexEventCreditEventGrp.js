var NoUnderlyingComplexEventCreditEvents = require('../fields/NoUnderlyingComplexEventCreditEvents');
var UnderlyingComplexEventCreditEventQualifierGrp = require('../components/UnderlyingComplexEventCreditEventQualifierGrp');
var UnderlyingComplexEventCreditEventType = require('../fields/UnderlyingComplexEventCreditEventType');
var UnderlyingComplexEventCreditEventValue = require('../fields/UnderlyingComplexEventCreditEventValue');
var UnderlyingComplexEventCreditEventCurrency = require('../fields/UnderlyingComplexEventCreditEventCurrency');
var UnderlyingComplexEventCreditEventPeriod = require('../fields/UnderlyingComplexEventCreditEventPeriod');
var UnderlyingComplexEventCreditEventUnit = require('../fields/UnderlyingComplexEventCreditEventUnit');
var UnderlyingComplexEventCreditEventDayType = require('../fields/UnderlyingComplexEventCreditEventDayType');
var UnderlyingComplexEventCreditEventRateSource = require('../fields/UnderlyingComplexEventCreditEventRateSource');

function UnderlyingComplexEventCreditEventGrp (underlyingComplexEventCreditEventGrp) {
  this.message = underlyingComplexEventCreditEventGrp;
}

/* group */

/* component */
UnderlyingComplexEventCreditEventGrp.prototype.underlyingComplexEventCreditEventQualifierGrp = function () {
  return this.message.groups[UnderlyingComplexEventCreditEventQualifierGrp.Tag]
    .map(function (underlyingComplexEventCreditEventQualifierGrp) {
      return new UnderlyingComplexEventCreditEventQualifierGrp(underlyingComplexEventCreditEventQualifierGrp);
  });
};

/* field */
UnderlyingComplexEventCreditEventGrp.prototype.underlyingComplexEventCreditEventType = function () {
  return new UnderlyingComplexEventCreditEventType(this.message.tags[UnderlyingComplexEventCreditEventType.Tag]);
};

/* field */
UnderlyingComplexEventCreditEventGrp.prototype.underlyingComplexEventCreditEventValue = function () {
  return new UnderlyingComplexEventCreditEventValue(this.message.tags[UnderlyingComplexEventCreditEventValue.Tag]);
};

/* field */
UnderlyingComplexEventCreditEventGrp.prototype.underlyingComplexEventCreditEventCurrency = function () {
  return new UnderlyingComplexEventCreditEventCurrency(this.message.tags[UnderlyingComplexEventCreditEventCurrency.Tag]);
};

/* field */
UnderlyingComplexEventCreditEventGrp.prototype.underlyingComplexEventCreditEventPeriod = function () {
  return new UnderlyingComplexEventCreditEventPeriod(this.message.tags[UnderlyingComplexEventCreditEventPeriod.Tag]);
};

/* field */
UnderlyingComplexEventCreditEventGrp.prototype.underlyingComplexEventCreditEventUnit = function () {
  return new UnderlyingComplexEventCreditEventUnit(this.message.tags[UnderlyingComplexEventCreditEventUnit.Tag]);
};

/* field */
UnderlyingComplexEventCreditEventGrp.prototype.underlyingComplexEventCreditEventDayType = function () {
  return new UnderlyingComplexEventCreditEventDayType(this.message.tags[UnderlyingComplexEventCreditEventDayType.Tag]);
};

/* field */
UnderlyingComplexEventCreditEventGrp.prototype.underlyingComplexEventCreditEventRateSource = function () {
  return new UnderlyingComplexEventCreditEventRateSource(this.message.tags[UnderlyingComplexEventCreditEventRateSource.Tag]);
};

/* end group */

UnderlyingComplexEventCreditEventGrp.Tag = '41716';

module.exports = UnderlyingComplexEventCreditEventGrp;