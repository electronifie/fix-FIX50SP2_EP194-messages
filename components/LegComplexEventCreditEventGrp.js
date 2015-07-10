var NoLegComplexEventCreditEvents = require('../fields/NoLegComplexEventCreditEvents');
var LegComplexEventCreditEventQualifierGrp = require('../components/LegComplexEventCreditEventQualifierGrp');
var LegComplexEventCreditEventType = require('../fields/LegComplexEventCreditEventType');
var LegComplexEventCreditEventValue = require('../fields/LegComplexEventCreditEventValue');
var LegComplexEventCreditEventCurrency = require('../fields/LegComplexEventCreditEventCurrency');
var LegComplexEventCreditEventPeriod = require('../fields/LegComplexEventCreditEventPeriod');
var LegComplexEventCreditEventUnit = require('../fields/LegComplexEventCreditEventUnit');
var LegComplexEventCreditEventDayType = require('../fields/LegComplexEventCreditEventDayType');
var LegComplexEventCreditEventRateSource = require('../fields/LegComplexEventCreditEventRateSource');

function LegComplexEventCreditEventGrp (legComplexEventCreditEventGrp) {
  this.message = legComplexEventCreditEventGrp;
}

/* group */

/* component */
LegComplexEventCreditEventGrp.prototype.legComplexEventCreditEventQualifierGrp = function () {
  return this.message.groups[LegComplexEventCreditEventQualifierGrp.Tag]
    .map(function (legComplexEventCreditEventQualifierGrp) {
      return new LegComplexEventCreditEventQualifierGrp(legComplexEventCreditEventQualifierGrp);
  });
};

/* field */
LegComplexEventCreditEventGrp.prototype.legComplexEventCreditEventType = function () {
  return new LegComplexEventCreditEventType(this.message.tags[LegComplexEventCreditEventType.Tag]);
};

/* field */
LegComplexEventCreditEventGrp.prototype.legComplexEventCreditEventValue = function () {
  return new LegComplexEventCreditEventValue(this.message.tags[LegComplexEventCreditEventValue.Tag]);
};

/* field */
LegComplexEventCreditEventGrp.prototype.legComplexEventCreditEventCurrency = function () {
  return new LegComplexEventCreditEventCurrency(this.message.tags[LegComplexEventCreditEventCurrency.Tag]);
};

/* field */
LegComplexEventCreditEventGrp.prototype.legComplexEventCreditEventPeriod = function () {
  return new LegComplexEventCreditEventPeriod(this.message.tags[LegComplexEventCreditEventPeriod.Tag]);
};

/* field */
LegComplexEventCreditEventGrp.prototype.legComplexEventCreditEventUnit = function () {
  return new LegComplexEventCreditEventUnit(this.message.tags[LegComplexEventCreditEventUnit.Tag]);
};

/* field */
LegComplexEventCreditEventGrp.prototype.legComplexEventCreditEventDayType = function () {
  return new LegComplexEventCreditEventDayType(this.message.tags[LegComplexEventCreditEventDayType.Tag]);
};

/* field */
LegComplexEventCreditEventGrp.prototype.legComplexEventCreditEventRateSource = function () {
  return new LegComplexEventCreditEventRateSource(this.message.tags[LegComplexEventCreditEventRateSource.Tag]);
};

/* end group */

LegComplexEventCreditEventGrp.Tag = '41366';

module.exports = LegComplexEventCreditEventGrp;